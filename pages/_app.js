import '../styles/globals.css'
import Layout from "../components/layout/Layout";
import {createTheme, ThemeProvider} from "@mui/material";
import {deepOrange, teal} from "@mui/material/colors";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  const theme = createTheme({
    palette: {
      primary: {
        light: teal[300],
        main: teal[600],
        dark: teal[900]
      },
      secondary: {
        light: deepOrange[100],
        main: deepOrange[300],
        dark: deepOrange[500],
      }
    },
    typography: {
      fontFamily: [
          'Raleway',
      ]
    }
  })

  return (
      <>
        <ThemeProvider theme={theme}><Layout loading={loading}><Component {...pageProps} /></Layout></ThemeProvider>
      </>
  )
}

export default MyApp
