<script>
	import Button from './lib/Button.svelte';
	import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte'
	import FaAllergies from 'svelte-icons/fa/FaAllergies.svelte'
</script>

<Button let:isLeftHovered size="large" shadow>
	<span slot="leftContent" let:x>
		{#if isLeftHovered}
		<FaAngellist/> {x}
		{:else}
		<FaAllergies/>
		{/if}
	</span>
	Button Text
</Button>

<style>
</style>
