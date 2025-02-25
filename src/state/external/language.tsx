// a store love nav.tsx for language component


type Subscriber = () => void; 
export type Language = "en" | "hi";
let selectedLanguage:Language = "en";
const subscribers = new Set<Subscriber>();

const selectedLanguageStore = {
    // Get current value
    getSnapshot: () => selectedLanguage,
    
    // Subscribe to changes
    subscribe: (callback: Subscriber) => {
        subscribers.add(callback);
        
        // Return cleanup function
        return () => {
            subscribers.delete(callback);
        };
    },
    getServerSnapshot: () => selectedLanguage,
};

// Function to update the selected language
export function updateSelectedLanguage(newLanguage: Language) {
    selectedLanguage = newLanguage;
    // Notify all subscribers of the change
    subscribers.forEach(callback => callback());
}

export default selectedLanguageStore;