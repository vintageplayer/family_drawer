import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '../components/Navbar';

export default function Document() {
  return (
    <Html lang="en" className="h-full bg-gray-50">
      <Head />
      <body>
        <NavBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}