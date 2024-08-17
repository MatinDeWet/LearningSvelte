<script>
	import Counter from './lib/Counter.svelte';

	//if variable is the same name as a component prop name you dont need to write var={something}
	const maxCount = 6;
</script>

<Counter initialCount={3} {maxCount} />

<style>
</style>
