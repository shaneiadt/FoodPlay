<script>
	let recipes;
	let loading = true;

	fetch('recipes.json')
	.then(res => res.json())
	.then(data => {
		recipes = data.recipes;
		loading = false;
	});
</script>

<main>
	<h1>Recipe Finder</h1>
	{#if loading}
		<p>loading....</p>
	{:else}
		<p>{recipes.length} recipes to discover!</p>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>