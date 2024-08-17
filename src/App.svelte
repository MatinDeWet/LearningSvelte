<script>
	import Counter from './lib/Counter.svelte';

	// you can send a object though with the same prop names as a component by spreading them with ...
	const props = {
		maxCount: 10,
		initialCount: 2
	};
</script>

<Counter {...props} x="2" />

<style>
</style>
