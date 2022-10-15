import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider, setLogger } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, cacheTime: 0 } },
});

// disable log messages for React Query in test env.
setLogger({
  log: () => {},
  warn: () => {},
  error: () => {},
});

export const renderWithReactQuery = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};
