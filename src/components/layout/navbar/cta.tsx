import { DropDown} from "@components/components/button/dropdown";
import { DropDownLanguage } from "@components/utils/LanguageChanger";



export const CTAs = () => {
  const TecoAdmin = 'https://admin.tecoguide.com/'
  const TecoGuide =  'https://app.tecoguide.com/login'
    return (
      <div className="flex items-center gap-3">
        <DropDown TecoGuide={TecoGuide} TecoAdmin={TecoAdmin} />
        <DropDownLanguage />
      </div>
    );
  };