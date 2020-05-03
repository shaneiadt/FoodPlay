<script lang="ts">
  import { getClient, query } from "svelte-apollo";
  import { GET_RECIPES } from "./graphql/recipes.ts";

  const client = getClient();
  const recipes = query(client, { query: GET_RECIPES });
</script>

{#await $recipes}
  Loading...
{:then result}
  {#each result.data.recipes as recipe}
    <p>{recipe.name}</p>
  {/each}
{:catch error}
  Error: {error}
{/await}
