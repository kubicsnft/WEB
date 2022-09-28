import '../styles/globals.css'
import '../styles/tggleSwitch.css'
import '../styles/barraScroll.css'
import '../styles/theme.css'
import '../styles/Roadmap.css'
import { LangProvider } from '../context/langContext';



function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      
        <Component {...pageProps} />
      
    </LangProvider>
  )

}

export default MyApp
