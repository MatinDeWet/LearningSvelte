import { writable } from 'svelte/store';

const defaultSettings = {
	colorScheme: 'dark',
	fontSize: 16,
	language: 'en'
};

function sreateSettingsStore() {
	const { subscribe, set, update } = writable({ ...defaultSettings });

	return {
		subscribe,
		set,
		update,
		updateSetting: (setting, value) => {
			update((settings) => {
				return { ...settings, [setting]: value };
			});
		},
		toggleColorScheme: () => {
			update((settings) => {
				const colorScheme = settings.colorScheme === 'dark' ? 'light' : 'dark';
				return { ...settings, colorScheme };
			});
		},
		reset: () => {
			set({ ...defaultSettings });
		}
	};
}

export default sreateSettingsStore();
