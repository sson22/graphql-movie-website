import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import client from "./apollo"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client = {client}>
      <App />
    </ApolloProvider>
);
