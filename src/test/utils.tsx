import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  logger: {
    log: () => {},
    warn: () => {},
    error: () => {},
  },
  defaultOptions: { queries: { retry: false, cacheTime: 0 } },
});

export const renderWithReactQuery = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};
