#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to translation files
const translationsDir = path.join(__dirname, '../src/translations');
const enPath = path.join(translationsDir, 'en.json');
const hiPath = path.join(translationsDir, 'hi.json');

function getObjectKeys(obj, prefix = '') {
  let keys = [];
  for (let key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getObjectKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

function syncTranslations() {
  try {
    // Read both files
    const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    const hiData = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

    // Get all keys from both files
    const enKeys = getObjectKeys(enData).sort();
    const hiKeys = getObjectKeys(hiData).sort();

    // Find missing keys
    const missingInHi = enKeys.filter(key => !hiKeys.includes(key));
    const missingInEn = hiKeys.filter(key => !enKeys.includes(key));

    let hasChanges = false;

    if (missingInHi.length > 0) {
      console.log('🔍 Missing keys in Hindi translation:');
      missingInHi.forEach(key => console.log(`  - ${key}`));
      hasChanges = true;
    }

    if (missingInEn.length > 0) {
      console.log('🔍 Missing keys in English translation:');
      missingInEn.forEach(key => console.log(`  - ${key}`));
      hasChanges = true;
    }

    if (!hasChanges) {
      console.log('✅ All translation files are in sync!');
      return;
    }

    // Auto-fix: Add missing keys with placeholder values
    function addMissingKeys(targetObj, sourceObj, targetLang) {
      function setNestedValue(obj, path, value) {
        const keys = path.split('.');
        let current = obj;
        for (let i = 0; i < keys.length - 1; i++) {
          if (!(keys[i] in current) || typeof current[keys[i]] !== 'object') {
            current[keys[i]] = {};
          }
          current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
      }

      function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
      }

      return path => {
        const sourceValue = getNestedValue(sourceObj, path);
        const placeholder = targetLang === 'hi' 
          ? `[TRANSLATE: ${sourceValue}]` 
          : `[TRANSLATE: ${sourceValue}]`;
        setNestedValue(targetObj, path, placeholder);
      };
    }

    if (missingInHi.length > 0) {
      missingInHi.forEach(addMissingKeys(hiData, enData, 'hi'));
      fs.writeFileSync(hiPath, JSON.stringify(hiData, null, 2));
      console.log('🔧 Updated Hindi translation file');
    }

    if (missingInEn.length > 0) {
      missingInEn.forEach(addMissingKeys(enData, hiData, 'en'));
      fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
      console.log('🔧 Updated English translation file');
    }

    console.log('✅ Translation sync completed!');

  } catch (error) {
    console.error('❌ Error syncing translations:', error.message);
    process.exit(1);
  }
}

// Run the sync
syncTranslations(); 