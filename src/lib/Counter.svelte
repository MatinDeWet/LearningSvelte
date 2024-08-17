<script>
	let count1 = 0;
	let count2 = 0;

	// not going to work variables needs to be present on the right hand side of a decleration.
	$: string = `Count 2 is ${count2}`;

	//cound 2 display will not work as the reactive statment order matters
	$: setCount2(count1);

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
