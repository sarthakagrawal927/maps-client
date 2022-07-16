import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import '@elastic/eui/dist/eui_theme_dark.css';
import { EuiProvider } from '@elastic/eui';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EuiProvider colorMode="dark">
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </EuiProvider>
  )
}

export default MyApp