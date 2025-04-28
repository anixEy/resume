import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata = {
  title: 'Aniket Sonavane - Resume',
  description: 'Lead Software Developer with expertise in Full Stack Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
