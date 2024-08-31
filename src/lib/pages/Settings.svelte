<script>
	import settings from '../stores/settings';
</script>

<h2>Settings</h2>

<button
	on:click={() => {
		$settings.colorScheme = $settings.colorScheme === 'dark' ? 'light' : 'dark';
	}}>Toggle color Scheme</button
>

<label>
	<input type="radio" name="colorScheme" value="dark" bind:group={$settings.colorScheme} /> Dark
	<input type="radio" name="colorScheme" value="light" bind:group={$settings.colorScheme} /> Light
</label>
