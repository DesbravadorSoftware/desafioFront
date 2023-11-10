import { AppProps } from "next/app";
import { UserProvider } from "../src/contexts/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
