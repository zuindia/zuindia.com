import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="dark"
  >
    <Component {...pageProps} />
    </ThemeProvider>
    )
}
