<script>
	let name = 'Svelte';
	let string = 'Some <strong>string</strong> with html';
</script>

<h1>Hello {name.toLocaleLowerCase()}!</h1>
<p>{@html string}</p>

<style>
	h1 {
		color: red;
	}
</style>
