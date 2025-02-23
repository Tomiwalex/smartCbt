import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.jsx";
import './index.css'
import App from './App.jsx'
// Supports weights 100-900
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/catamaran';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
      </QueryClientProvider>
  </StrictMode>,
)
