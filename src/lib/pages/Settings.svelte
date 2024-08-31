<script>
	import settings from '../stores/settings';
	import direction from '../stores/direction';
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

Direction: {$direction}
<br />

Color Scheme: {$settings.colorScheme}
<br />
Language: {$settings.language}
<br />

<label>
	<input type="radio" name="colorScheme" value="dark" bind:group={$settings.colorScheme} /> Dark
	<input type="radio" name="colorScheme" value="light" bind:group={$settings.colorScheme} /> Light
</label>

<br />

<select bind:value={$settings.language}>
	{#each ['en', 'ar'] as lang}
		<option value={lang} selected={$settings.language === lang}>{lang}</option>
	{/each}
</select>
