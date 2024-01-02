"use client"; // 여기는 클라이언트 컴포넌트
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "../../redux/configStore/store";
import { Provider as ReduxProvider } from "react-redux";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false
          }
        }
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Provider;
