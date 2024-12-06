// Function to initialize theme
export function initializeTheme() {
  // Check if theme is stored in localStorage
  const storedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
  const prefersDark = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-color-scheme: dark)').matches 
    : false;

  // Set theme based on stored preference or system preference
  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
