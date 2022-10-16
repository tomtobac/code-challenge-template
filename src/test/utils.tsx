import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const logger = {
  log: console.log,
  warn: console.warn,
  error: () => {},
};

// @see: https://tkdodo.eu/blog/testing-react-query
export const renderWithReactQuery = (ui: React.ReactElement) => {
  const queryClient = new QueryClient({
    logger,
    defaultOptions: { queries: { retry: false, cacheTime: Infinity } },
  });
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};
