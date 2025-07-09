"use client";

import selectedLanguageStore, {
  Language,
  updateSelectedLanguage,
} from "@/state/external/language";
import React, { useState, useSyncExternalStore } from "react";

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = useSyncExternalStore(
    selectedLanguageStore.subscribe,
    selectedLanguageStore.getSnapshot,
    selectedLanguageStore.getServerSnapshot
  );
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang: Language) => {
    updateSelectedLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="flex">
      <div className="relative items-center">
        <div className="flex items-center cursor-pointer">
          <div className="text-secondary">{selectedLanguage}</div>
          <div
            className="flex justify-center items-center p-2"
            onClick={toggleDropdown}
          >
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform={isOpen ? "rotate(180)" : ""}
            >
              <line
                x1="0.707107"
                y1="1.29289"
                x2="5.70711"
                y2="6.29289"
                stroke="#ABB2BF"
                strokeWidth="2"
              />
              <line
                x1="4.29289"
                y1="6.29289"
                x2="9.29289"
                y2="1.29289"
                stroke="#ABB2BF"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="self-start flex flex-col bg-background border border-secondary items-center p-2">
              <div
                className="text-secondary"
                onClick={() => selectLanguage("EN")}
              >
                EN
              </div>
              <div
                className="text-secondary"
                onClick={() => selectLanguage("HI")}
              >
                HI
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
