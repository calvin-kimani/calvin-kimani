import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'dark' | 'light';

export const theme = writable<Theme>('dark');

export function toggleTheme() {
    theme.update(current => current === 'dark' ? 'light' : 'dark');
}

// Initialize theme
if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
        theme.set(savedTheme);
    }

    // Subscribe to changes and save to localStorage
    theme.subscribe(value => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', value);
            document.documentElement.classList.remove('light', 'dark');
            document.documentElement.classList.add(value);
        }
    });
}
