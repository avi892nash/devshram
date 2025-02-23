// Type for subscription callbacks
type Subscriber = () => void;

let selectedNav = "#home";
const subscribers = new Set<Subscriber>();

const selectedNavStore = {
    // Get current value
    getSnapshot: () => selectedNav,
    
    // Subscribe to changes
    subscribe: (callback: Subscriber) => {
        subscribers.add(callback);
        
        // Return cleanup function
        return () => {
            subscribers.delete(callback);
        };
    },
    getServerSnapshot: () => selectedNav,
};

// Function to update the selected nav
export function updateSelectedNav(newNav: string) {
    selectedNav = newNav;
    // Notify all subscribers of the change
    subscribers.forEach(callback => callback());
}

export default selectedNavStore;