<script>
	let count = 0;

	$: if (count > 5) {
		console.log(`The count is ${count}`);
	}

	$: string = `You have clicked ${count} times.`;

	const increment = () => {
		count += 1;
	};
</script>

<button on:click={increment}>
	Clicks {count}
</button>
<h3>{string}</h3>
<h3>You have clicked {count} times.</h3>

<style>
	button {
		padding: 15px 20px;
	}
</style>
