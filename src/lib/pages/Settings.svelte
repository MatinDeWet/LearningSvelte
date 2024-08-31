<script>
	import settings from '../stores/settings';
</script>

<h2>Settings</h2>

<button
	on:click={() => {
		settings.toggleColorScheme();
	}}>Toggle color Scheme</button
>
<br />
<button
	on:click={() => {
		settings.updateSetting('language', Math.random());
	}}
>
	Update Language
</button>
<br />
<button
	on:click={() => {
		settings.reset();
	}}
>
	Reset Settings
</button>
<br />

{$settings.colorScheme}
<br />
{$settings.language}
<br />

<label>
	<input type="radio" name="colorScheme" value="dark" bind:group={$settings.colorScheme} /> Dark
	<input type="radio" name="colorScheme" value="light" bind:group={$settings.colorScheme} /> Light
</label>
