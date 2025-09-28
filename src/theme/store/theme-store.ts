import { Store } from '@tanstack/store';

// Theme state interface
export interface ThemeState {
  isDark: boolean;
  isLoading: boolean;
}

// Initial state
const initialState: ThemeState = {
  isDark: false,
  isLoading: true,
};

// Create the theme store
export const themeStore = new Store(initialState);

// Theme actions
export const themeActions = {
  // Initialize theme from localStorage or system preference
  initializeTheme: () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      let isDark = false;

      if (savedTheme) {
        isDark = savedTheme === 'dark';
      } else {
        // Check system preference
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      themeStore.setState((state) => ({
        ...state,
        isDark,
        isLoading: false,
      }));

      // Update document class
      updateDocumentClass(isDark);
    }
  },

  // Toggle theme
  toggleTheme: () => {
    themeStore.setState((state) => {
      const newIsDark = !state.isDark;

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
        updateDocumentClass(newIsDark);
      }

      return {
        ...state,
        isDark: newIsDark,
      };
    });
  },

  // Set specific theme
  setTheme: (isDark: boolean) => {
    themeStore.setState((state) => {
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateDocumentClass(isDark);
      }

      return {
        ...state,
        isDark,
      };
    });
  },

  // Set loading state
  setLoading: (isLoading: boolean) => {
    themeStore.setState((state) => ({
      ...state,
      isLoading,
    }));
  },
};

// Helper function to update document class
const updateDocumentClass = (isDark: boolean) => {
  if (typeof document !== 'undefined') {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }
};

// Selectors
export const themeSelectors = {
  isDark: (state: ThemeState) => state.isDark,
  isLoading: (state: ThemeState) => state.isLoading,
  theme: (state: ThemeState) => state.isDark ? 'dark' : 'light',
};