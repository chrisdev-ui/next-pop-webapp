import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import ApolloProvider from '@/context/ApolloContextProvider'
import SessionProvider from '@/context/SessionContextProvider'
import StoreProvider from '@/context/StoreContextProvider'
import 'styles/globals.css'

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex min-h-screen flex-col justify-between">
          <ApolloProvider>
            <SessionProvider session={session}>
              <StoreProvider>
                <Header />
                <MainContent>{children}</MainContent>
                <Footer />
              </StoreProvider>
            </SessionProvider>
          </ApolloProvider>
        </div>
      </body>
    </html>
  )
}
