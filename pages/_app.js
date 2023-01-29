import MyLayout from '../src/components/layout/layout.jsx'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  )
}
