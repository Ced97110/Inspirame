

import { ArticlesWrapper } from "@components/components/sections/research/research-wrapper";
import { MaxWidthWrapper } from "@components/components/layout/wrapperwidth/maxwidth";
import Tabs from "./tabs";



type LayoutInsightsProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function LayoutInsights({
  children,
  params: { locale },
}: LayoutInsightsProps) {
   
    return (
     <div className="bg-black h-full w-full">
      <MaxWidthWrapper>
        <ArticlesWrapper params={{locale}}/>
         <Tabs/>
          {children}
        </MaxWidthWrapper>
        
     </div>
    );
  }