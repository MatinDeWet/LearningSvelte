<script>
	let count1 = 0;
	let count2 = 0;

	$: setCount2(count1);

	$: string = `Count 2 is ${count2}`;

	function setCount2(x) {
		count2 = x;
	}

	function increment1() {
		count1 += 1;
	}
</script>

<button on:click={increment1}>
	Clicks {count1}
</button>

<h3>{string}</h3>

<style>
	button {
		padding: 15px 20px;
	}
</style>
