'use client'


import { defaultRevealOptions } from '@components/utils/config';
import { RevealWrapper } from 'next-reveal';
import { MaxWidthWrapper } from '../../../layout/wrapperwidth/maxwidth';
import { useTranslation } from 'react-i18next';


const ProblemStatement =  ({params:{locale}}) => {
   
    const { t } = useTranslation();
  
    const COLORS = [
        "#a7acb0",
        "#69B1FF",
        "#ffa616",
        "#09d909",
        "#10239E",
        "#061178",
        "#030852",
        "#03052E",
        "#000B0A",
        "#000000",
    ];
    
        

    const text =  t('Problem-title');
    const word =  text.split(' ');
    const firstWord = word[0];
    const remainingSentence = word.slice(1).join(' ');
    const paragraph = t('Problem-latino-1');
    const paragraph2 = t('Problem-latino-2');
    const parts1 = paragraph.split(/(40)/);
    const parts2 = paragraph2.split(/(20)/);
    const parablack = t('Problem-black');
    const partsBlack = parablack.split(/(60)/);
    const paraTransfer = t('Problem-transfer');
    const partsTransfer = paraTransfer.split(/(80)/);

    const colors = ['#e6194B', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#6F3826', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe'];
  

    return (
        <MaxWidthWrapper className="relative rounded-2xl p-6 z-20 pb-20 pt-20 md:pb-28 md:pt-40 ">
         
            <div className="w-full">
                <div className="flex flex-col items-center relative z-10 pb-20">
                    <h5 className="text-center max-w-xl text-white mb-8 font-bold">
                    {t('Problem-overline')}
                    </h5>
                    <h1 className="text-white text-center text-4xl md:text-8xl md:max-w-3xl">
                    {firstWord.split('').map((letter, index) => (
                 <span key={index} style={{ color: colors[index % colors.length], textTransform:"uppercase", letterSpacing:2.8,paddingLeft:"4px" }}>{letter}</span>
                ))}
                {' '}{remainingSentence}
                    </h1>
                </div>
                <div className="grid-rows-3 gap-y-24">
                    <RevealWrapper  {...defaultRevealOptions} className="grid grid-cols-2">
                      <div className="col-span-2 md:col-span-1 flex flex-col  self-center w-full">
                            <div className='flex justify-around gap-5'>
                                <p className="text-white text-2xl mb-4">
                                {parts1.map((part, index) => {
                                    // Check if part is one of the numbers
                                    if (part === '40') {
                                    return <span key={index} style={{ fontSize: '80px', color: '#74E291', fontWeight: 700 }}>{part}</span>;
                                    }
                                    return part; // For normal text
                                })}
                                </p>
                                <p className="text-white text-2xl mb-4">
                                {parts2.map((part, index) => {
                                    // Check if part is one of the numbers
                                    if (part === '20') {
                                    return <span key={index} style={{ fontSize: '80px', color: '#e6194B', fontWeight: 700 }}>{part}</span>;
                                    }
                                    return part; // For normal text
                                })}
                                </p>
                            </div>
                            <a href='https://highered.aspeninstitute.org/transfer-playbook-and-tracking-transfer/' className="text-white text-xs">
                               {t('Problem-latino-source')}
                            </a>
                        </div>
                        <div className="relative col-span-2 md:col-span-1 ">
                     
                            <svg
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                                className='w-full h-full' 
                            >
                                <path fill="#F1C21B" d="M57.1,-54C73.6,-40.7,86.2,-20.3,87.6,1.4C88.9,23.1,79,46.1,62.6,61C46.1,75.9,23.1,82.6,1,81.6C-21.1,80.6,-42.1,71.9,-57,57C-71.8,42.1,-80.4,21.1,-81.2,-0.8C-82,-22.7,-75,-45.3,-60.1,-58.6C-45.3,-71.9,-22.7,-75.9,-1.2,-74.7C20.3,-73.6,40.7,-67.3,57.1,-54Z" transform="translate(100 100)" />
                                <image
                                    href="https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/latino-family-problem"
                                    x="26"
                                    y="28"
                                    height="155"
                                    width="155"
                                    style={{ transform: "translate3d(0, 0, 0)" }}
                                />
                            </svg>
                           
                        </div>
                    </RevealWrapper>
                   
                    <RevealWrapper  {...defaultRevealOptions} className="grid grid-cols-2">
                       
                        <div className="md:hidden col-span-2  flex flex-col self-center w-full">
                        <p className="text-white text-2xl mb-4">
                            {partsBlack.map((part, index) => {
                                // Check if part is one of the numbers
                                if (part === '60') {
                                return <span key={index} style={{ fontSize: '80px', color: '#FEB941', fontWeight: 700 }}>{part}</span>;
                                }else{
                                  return part;
                                }
                            })}
                            </p>
                             <p className="text-white text-xs"> {t('Problem-black-source')}</p>
                        </div>
                        <div className="relative col-span-2 md:col-span-1 flex justify-center h-full w-full">
                            <svg
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                                className='w-full h-full' 
                            >
                                <path fill="#8A3FFC" d="M39.9,-70.4C51.5,-62.4,60.4,-51.3,69.9,-39C79.4,-26.7,89.5,-13.4,90.6,0.6C91.7,14.6,83.9,29.3,74.1,41C64.2,52.7,52.4,61.4,39.7,70.4C27,79.5,13.5,88.8,-1,90.4C-15.4,92.1,-30.9,86.2,-44.2,77.5C-57.6,68.9,-68.9,57.6,-74.2,44.3C-79.4,30.9,-78.6,15.4,-77,0.9C-75.4,-13.6,-73,-27.2,-66.7,-38.8C-60.5,-50.4,-50.3,-60,-38.6,-67.8C-26.8,-75.7,-13.4,-81.7,0.4,-82.4C14.2,-83.1,28.3,-78.4,39.9,-70.4Z" transform="translate(100 100)" />
                                <image href="https://res.cloudinary.com/dqr6k0yey/image/upload/v1/inspirame/statement/blackman" x="50" y="50" height="100" width="100"  style={{ transform: "translate3d(0, 0, 0)" }} />
                            </svg>
                        </div>
                        <div className="hidden md:flex col-span-2 md:col-span-1 flex-col self-center w-full">
                        <p className="text-white text-2xl mb-4">
                                {partsBlack.map((part, index) => {
                                        // Check if part is one of the numbers
                                        if (part === '60') {
                                        return <span key={index} style={{ fontSize: '80px', color: '#FEB941', fontWeight: 700 }}>{part}</span>;
                                        }else{
                                            return part;
                                        }
                                })}
                                </p>
                                <a href='https://edsource.org/2024/most-california-high-school-seniors-shut-out-of-even-applying-to-the-states-universities/705635' className="text-white text-xs">{t('Problem-black-source')}</a>
                                </div>
                       
                       </RevealWrapper>
                    </div>
                    <RevealWrapper  {...defaultRevealOptions} className="grid grid-cols-2">
                        
                        <div className="col-span-2 md:col-span-1 flex flex-col self-center w-full">
                      
                        <p className="text-white text-2xl mb-4">
                            {partsTransfer.map((part, index) => {
                                // Check if part is one of the numbers
                                if (part === '80') {
                                return <span key={index} style={{ fontSize: '60px', color: '#FD8A8A', fontWeight: 700 }}>{part}</span>;
                                }else{
                                  return part;
                                }
                            })}
                            </p>
                            <a href='https://highered.aspeninstitute.org/transfer-playbook-and-tracking-transfer/' className="text-white text-xs">
                              {t('Problem-transfer-source')}
                            </a>
                           
                        </div>
                        <div className="relative col-span-2 md:col-span-1 flex justify-center h-full w-full">
                       
                            <svg
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                                className='w-full h-full' 
                            >
                                <path fill="#08BDBA" d="M42.6,-67.3C56.3,-57.6,69,-47.5,74.3,-34.4C79.7,-21.3,77.6,-5.2,74.6,10.3C71.7,25.7,67.8,40.6,58.9,51.3C50,61.9,36,68.4,21.6,72C7.1,75.6,-7.7,76.3,-22.7,73.6C-37.6,70.8,-52.6,64.7,-64,54.1C-75.3,43.4,-83.1,28.2,-81.4,14.1C-79.7,0,-68.6,-13.1,-61.2,-27.4C-53.9,-41.7,-50.3,-57.2,-40.7,-68.7C-31.2,-80.3,-15.6,-87.8,-0.5,-87C14.5,-86.2,29,-76.9,42.6,-67.3Z" transform="translate(100 100)" />
                                <image
                                    href="https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/statement/student-girl"
                                    x="50"
                                    y="50"
                                    height="105"
                                    width="105"
                                    style={{ transform: "translate3d(0, 0, 0)" }}
                                />
                            </svg>
                            
                        </div>
                    </RevealWrapper>
                </div>
              
             </MaxWidthWrapper>
        
    );
};

export default ProblemStatement;


