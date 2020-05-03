<script>
import TailwindCss from "./TailwindCss.svelte";
import Recipe from './Recipe.svelte';
import apolloClient from './graphql/apollo.ts';

apolloClient();
</script>

<TailwindCss />
<Recipe />