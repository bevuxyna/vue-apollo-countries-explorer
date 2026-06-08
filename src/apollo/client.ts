import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
    uri: 'https://spacex-production.up.railway.app/',
});

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})