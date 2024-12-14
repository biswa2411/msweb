"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { onError } from "@apollo/client/link/error";

// have a function to create a client for you
function makeClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_HOST_PORT}/graphql/`, // Replace with your GraphQL API endpoint
  });


   // Authorization link to set the token in headers
   const authLink = new ApolloLink((operation, forward) => {
    const accessToken = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

    // Set the authorization header
    operation.setContext({
      headers: {
        authorization: accessToken ? `Bearer ${accessToken}` : ``,
      },
    });

    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) graphQLErrors.forEach(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  // Combine the auth link with the HTTP link
  const link = ApolloLink.from([authLink,errorLink, httpLink]);

  // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
  return new ApolloClient({
    // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
    cache: new InMemoryCache(),
    link,
  });
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}