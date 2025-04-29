/**
 * Root layout component that provides basic HTML structure.
 * 
 * @component
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The root layout wrapper
 */
import './globals.css'

export const metadata = {
  title: 'Aniket Sonavane - Resume',
  description: 'Lead Software Developer with expertise in Full Stack Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
