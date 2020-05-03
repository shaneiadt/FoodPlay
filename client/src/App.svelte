<script>
import Recipe from './Recipe.svelte';
import apolloClient from './graphql/apollo.ts';

apolloClient();
</script>

<Recipe />