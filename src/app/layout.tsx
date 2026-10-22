import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Vichadero Conecta',description:'Tu pueblo. Tu gente. Tu lugar.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
