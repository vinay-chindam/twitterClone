import express from 'express';
import type { Express } from 'express';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import cors from 'cors';
import { prismaClient } from '../clients/db/index.js';



const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from Apollo Server2!',
  },
};

export async function createGraphQLServer(): Promise<Express> {
  const app = express();

   app.use(cors({
    origin: ['https://studio.apollographql.com', 'http://localhost:3000'],
    credentials: true,
  }));

  // ✅ Use Express's built-in JSON parser
  app.use(express.json());

  
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  // ✅ Pass context explicitly
  app.use('/graphql', expressMiddleware(server, {
    context: async ({ req }) => ({})
  }));

  return app;
}
