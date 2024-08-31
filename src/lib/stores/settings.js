import { writable } from 'svelte/store';

const settings = writable({
	colorScheme: 'dark',
	fontSize: 16,
	languege: 'en'
});

export default settings;
