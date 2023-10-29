import { Inter } from 'next/font/google';

import '@start-base/react-form-elements/dist/lib/index.css';

import UniversalDarkModeSwitch from '@/components/common/UniversalDarkModeSwitch';

import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:
    'startbase.dev | Templates and Boilerplates Effortless Modern Practices.',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <UniversalDarkModeSwitch hidden />
        {children}
        <Footer />
      </body>
    </html>
  );
}
