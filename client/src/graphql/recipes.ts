import { getClient, query, mutate } from 'svelte-apollo';
import { gql } from 'apollo-boost';

export const GET_RECIPES = gql`
    query {
        recipes(first:10) {
            name
        }
    }
`;