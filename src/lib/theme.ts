import { writable } from 'svelte/store';

function createThemeStore() {
	// Vérifier les préférences sauvegardées ou utiliser 'dark' par défaut
	const isDark = writable<boolean>(true);

	if (typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark =
			savedTheme === 'dark' ||
			(!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

		isDark.set(prefersDark);

		isDark.subscribe((value) => {
			localStorage.setItem('theme', value ? 'dark' : 'light');
			if (value) {
				document.documentElement.classList.add('dark-mode');
			} else {
				document.documentElement.classList.remove('dark-mode');
			}
		});
	}

	return isDark;
}

export const theme = createThemeStore();
