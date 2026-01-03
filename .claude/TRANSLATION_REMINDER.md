# Translation Reminder

## Important: Multi-language Support

This project supports multiple languages through translation files in `src/translations/`.

### Current Language Files:
- `src/translations/en.json` (English - Primary)
- `src/translations/hi.json` (Hindi)

## When Making Changes

**⚠️ CRITICAL REMINDER:**

When you modify any configuration or content in one language file, you **MUST** update all other language files to maintain consistency.

### Common Changes That Require Translation Updates:

1. **Adding/Removing Projects**
   - When adding a project to `en.json`, add the corresponding entry to `hi.json`
   - Translate: title, description
   - Keep unchanged: technologies, links, theme, category, featured

2. **Updating Page Content**
   - Any changes to `pages.*` sections
   - Updates to `personal`, `home`, `quote` sections
   - Contact information updates

3. **Modifying Skills or Contacts**
   - Skills array updates
   - Contact links or messages

### Workflow:

```bash
1. Make changes to src/translations/en.json
2. Update src/translations/hi.json with corresponding changes
3. Verify both files have the same structure
4. Test both language versions
```

### Translation Guidelines:

- **DO translate**: User-facing text (titles, descriptions, messages, labels)
- **DO NOT translate**:
  - URLs and links
  - Technology names
  - Email addresses
  - Theme colors
  - Category identifiers
  - Property keys

### Example:

```json
// English (en.json)
{
  "title": "Codeforces API Explorer",
  "description": "Interactive web app to fetch and display Codeforces user stats and activity"
}

// Hindi (hi.json)
{
  "title": "कोडफोर्सेस API एक्सप्लोरर",
  "description": "कोडफोर्सेस उपयोगकर्ता आंकड़े और गतिविधि प्राप्त करने और प्रदर्शित करने के लिए इंटरैक्टिव वेब ऐप"
}
```

## Automated Checks

Consider adding a pre-commit hook to verify:
- Both translation files have the same structure
- Same number of projects in both files
- Same property keys exist in both files

---

**Remember: Incomplete translations lead to broken user experience for non-English speakers!**
