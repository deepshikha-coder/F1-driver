import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apollo = new ApolloClient({
    uri: process.env['SERVER_URL'],
    cache: new InMemoryCache(),
});

export default apollo;