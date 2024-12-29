import { Nothing_You_Could_Do, Raleway } from 'next/font/google'
import '../globals.css'
import Header from '@components/components/layout/navbar/header';
import { i18nConfig } from '../../../i18nConfig';
import { dir } from 'i18next';
import SocialMediaIcons from '@components/components/sections/side/social';
import { Footer } from '@components/components/layout/footer/foot';
import HomePage from '@components/components/sections/homePage/home';
import { Metadata, Viewport } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"



const raleway = Raleway({
  variable: "--display-font",
  subsets: ['latin']
});


type MainPageLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string; 
  };
};



export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  openGraph: {
    siteName: "Inspirame",
    type: "website",
  },
  referrer: 'origin-when-cross-origin',
  twitter: {
    card: "summary",
  },
  title:{
    default: 'Inspirame',
    template: "%s - Inspirame"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  applicationName: "Inspirame",
  appleWebApp: {
    title: "Inspirame",
    statusBarStyle: "default",
    capable: true
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function MainPageLayout({
  children,
  params: { locale },
}: MainPageLayoutProps) {

  
 
  return (
    <html lang={locale} dir={dir(locale)} className={`${raleway.variable} font-antialiased font-smooth box-border w-full`}>
      <body className='m-0 w-full min-h-screen overflow-x-hidden font-display leading-5 mx-auto antialiased  bg-black text-zinc-200 selection:bg-zinc-600'>
        <div className='min-h-screen grid grid-cols-1 grid-rows-[1fr,auto]'>
          <div className='flex relative flex-col min-h-screen'>
            <Header params={{ locale }} />
            <HomePage>
            <SocialMediaIcons />
              {children}
              <Analytics />
              <SpeedInsights />
            </HomePage>
            <Footer params={{ locale }}/>
          </div>
        </div>
      </body>
    </html>
  );
}
