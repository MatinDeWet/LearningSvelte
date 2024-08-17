<script>
	import Button from './lib/Button.svelte';
	import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte'
	import FaAllergies from 'svelte-icons/fa/FaAllergies.svelte'
	import { prevent_default } from 'svelte/internal';
</script>

<Button on:click|once={(event) => {
		alert(true);
	}} let:isLeftHovered size="large" shadow>
	<span slot="leftContent">
		{#if isLeftHovered}
		<FaAngellist/>
		{:else}
		<FaAllergies/>
		{/if}
	</span>
	Button Text
</Button>

<style>
</style>
