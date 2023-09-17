import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as resolvers from './graphql/resolvers.js';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const typeDefs = readFileSync(path.join(__dirname, 'graphql/typedefs.graphql'), { encoding: 'utf-8' });
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const port = Number.parseInt(process.env.PORT) || 4000;
const { url } = await startStandaloneServer(server, {
    listen: { port },
});
console.log(port);
console.log(`🚀  Server ready at: ${url}`);
