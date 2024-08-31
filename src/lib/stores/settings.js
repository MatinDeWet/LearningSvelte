import { writable } from 'svelte/store';

const settings = writable(
	{
		colorScheme: 'dark',
		fontSize: 16,
		languege: 'en'
	},
	(set) => {
		const timer = setTimeout(() => {
			set({
				colorScheme: 'light',
				fontSize: 16,
				languege: 'en'
			});
		}, 1000);
		console.log('from 0 to 1');
		return () => {
			clearTimeout(timer);
		};
	}
);

export default settings;
