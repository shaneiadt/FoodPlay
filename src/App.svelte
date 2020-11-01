<style>
main {
  text-align: center;
  padding: 1em;
  max-width: 240px;
  margin: 0 auto;
}

h1 {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #F12E82;
  font-size: 4em;
  font-weight: 500;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}

input {
  border-radius: 5px;
  padding: 0.5em;
}
</style>

<script>
import axios from "axios";

let recipes;
let loading = true;

axios.get("recipes.json").then(({ data }) => {
  recipes = data.recipes;
  loading = false;
});
</script>

<main>
  <img src="/assets/logo.png" alt="FoodPlay - Recipe Finder" style="width:10em;" />
  <h1>FoodPlay</h1>
  {#if loading}
    <p>loading....</p>
  {:else}
    <p>{recipes.length} recipes to discover!</p>
  {/if}
  <input placeholder="Search" />
</main>
