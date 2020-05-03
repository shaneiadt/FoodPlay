<script lang="ts">
  import { getClient, query } from "svelte-apollo";
  import { GET_RECIPES } from "./graphql/recipes.ts";

  const client = getClient();
  const recipes = query(client, { query: GET_RECIPES });
</script>

<h1>Recipes</h1>

{#await $recipes}
  Loading...
{:then result}
  {#each result.data.recipes as recipe}
    <p class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">{recipe.name}</p>
  {/each}
{:catch error}
  Error: {error}
{/await}
