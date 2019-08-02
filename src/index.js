import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

import { link } from "./graphql/link";
import App from "./App";

import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
