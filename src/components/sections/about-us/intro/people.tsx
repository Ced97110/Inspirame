import initTranslations from '@components/app/i18n';
import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';  // Ensure you import these icons
import Image from 'next/image';
import { SectionHeadingSpacing } from '../../../layout/headers/sectionheadingspacing';
import { SectionSubheading } from '../../../layout/headers/sectionsubheading';
import { MaxWidthWrapper } from '../../../layout/wrapperwidth/maxwidth';
import { LuBadgeCheck } from "react-icons/lu";
import { SectionH3 } from '@components/components/layout/headers/sectionh3';


const OurTeam = async ({params:{locale}}) => {


  const { t } = await initTranslations(locale, ['about-us']);

  
  const team = [
    {
      name:'Maria Medrano, MBA, MA',
      role:t('team-maria'),
      image:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/about-us/maria-ceo',
      linkedin:'https://www.linkedin.com/in/mariamedrano/',
      email: 'maria.medrano@inspirame.com',
      badgeMaria: true,
    },
    {
      name: 'Mauricio Gonzalez, MA',
      role: t('test-mauri'),
      image: 'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/about-us/mauricio-ceo',
      linkedin: 'https://www.linkedin.com/in/mauriciogonzalez/',
      email: 'mauricio.gonzalez@inspirame.com',
      badgeMauricio: true,
    },
    {
      name: 'Jackson Harris III',
      role:t('team-Harris'),
      image: 'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/about-us/harris-ai',
      linkedin: 'https://www.linkedin.com/in/jacksonharris3',
    
     
    },
    {
      name: 'Priyank Sharma',
      role: t('team-test-prya'),
      image: 'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/about-us/pryak',
     
     
     
    },
    {
      name: 'Maggie Chan',
      role:t('team-maggie'),
      image: 'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/about-us/maggie',
      linkedin: 'https://www.linkedin.com/in/chan-maggie',
    
     
    },
    {
      name: 'Ceudi Gutierrez',
      role:t('team-ceudi'),
      image: '/ceudi.png',
      linkedin: 'https://www.linkedin.com/in/ceudi-gutierrez?trk=public_post-text',
    },
    {
      name: 'Jackie Diaz',
      role:t('team-jakie'),
      image: "/jakie2.png",
    
     
    },
    {
      name: 'Huy Le, MA',
      role:t('team-huy'),
      image: "/huy2.png",
      linkedin: 'https://www.linkedin.com/in/huy-h-le/',
    
     
    },
    {
      name: 'Cristian Pulido',
      role:t('team-cristian'),
      image: "/cristian2.png",
      linkedin: 'https://www.linkedin.com/in/cristian-segundo-pulido-606302248',
    
     
    },
  ];

  return (
    <section className='relative py-16 pb-48'>
      <MaxWidthWrapper>
          <SectionHeadingSpacing>
              <SectionH3 persistCenter>{t('team-title')}</SectionH3>
              <SectionSubheading className='max-w-3xl mx-auto' persistCenter>{t('team-subtitle')}</SectionSubheading>
          </SectionHeadingSpacing>
 
        {/* First row with two items */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:max-w-[800px] lg:mx-auto">
          {team.slice(0, 2).map(({name, role, image, email, linkedin, badgeMaria, badgeMauricio}, index) => (
            <div key={index} className="flex justify-center bg-grey-600 m-4 items-center  w-[320px] h-[300px]  shadow-2xl rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6 ">
              <div className="flex-col rounded-full p-4 relative">
                <div className='rounded-full flex justify-center'>
                  <Image
                      src={image === null ? 'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/primary-logo-svg' : image}
                      alt={name}
                      className="rounded-full object-contain "
                      height={80}
                      width={80}
                      
                    /> 
                 </div>
             
                
                <div className="rounded-lg">
                  <p className="text-center  py-6 font-bold">{name}</p>
                  <p className="text-center pb-4 text-pretty">{role}</p>
                  <div className="flex justify-evenly text-white">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="h-5 w-5 text-jaune mb-2" />
                    </a>
                    <a href={`mailto:${email}`}>
                      <FaEnvelope className="h-5 w-5 text-jaune mb-2" />
                    </a>
                    {badgeMaria  && <a href='https://www.credly.com/badges/962cccd1-cec5-46db-8e62-cf0859db627c/embedded' target="_blank" rel="noreferrer"><LuBadgeCheck className="h-5 w-5 text-jaune mb-2" /></a>}
                    {badgeMauricio  && <a href='https://www.ratemyprofessors.com/professor/957034' target="_blank" rel="noreferrer"><LuBadgeCheck className="h-5 w-5 text-jaune mb-2" /></a>}
                  </div>
                </div>
              </div>
              </div>
          ))}
        </div>
        {/* Second row with three items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
          {team.slice(2).map(({name,role,image,email,linkedin}, index) => (
            <div key={index} className="flex justify-center bg-grey-600 m-4 items-center w-[320px] h-[300px] shadow-2xl rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6">
              <div className="flex-col rounded-lg p-4 relative">
                <div className='rounded-full flex justify-center'>
                  <Image
                      src={image}
                      alt={name}
                      className="rounded-full object-contain"
                      height={80}
                      width={80}
                    />
                </div>
                <div className="rounded-lg">
                  <p className="text-center  py-6 font-bold">{name}</p>
                  <p className="text-center pb-4 text-pretty">{role}</p>
                  <div className="flex mx-auto justify-around text-white max-w-12">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="h-5 w-5 text-jaune mb-2" />
                    </a>
                    <a href={`mailto:${email}`}>
                      <FaEnvelope className="h-5 w-5 text-jaune mb-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
  </section>
  );
};

export default OurTeam;
