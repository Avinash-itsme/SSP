import '@styles/global.css';
import Nav from './components/Nav';
export const metadata={
    title: "SSP-DRAFTS",
    description: 'Discover & Share AI Promts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div>
                <div />
            </div>
            <main>
                {/* <Nav/> */}
                {children}

            </main>


        </body>

    </html>
  )
}

export default RootLayout