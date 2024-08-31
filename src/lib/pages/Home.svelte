<script>
	import settings from '../stores/settings';
	import location from '../stores/location';
</script>

<h2>Home</h2>

{#if $location && !$location.error}
	<p>Your location is: {$location.latitude}, {$location.longitude}</p>
{/if}
{#if $location && $location.error}
	{$location.error}
{/if}
{$settings.colorScheme}
