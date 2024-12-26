import Image from "next/image";
import { ButtonApp } from "@components/components/button/button-app";
import initTranslations from "@components/app/i18n";
import { MaxWidthWrapper } from "@components/components/layout/wrapperwidth/maxwidth";
import { PictureWrapper } from "./picture-wrapper";



export const ContentHero = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["Homepage"]);

  return (
    <section className="relative overflow-hidden pb-12 pt-36 md:pb-16 md:pt-28">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center mx-auto">
              <Image
                src="https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/teco-hero"
                alt="Owl representing the TecoGuide app"
                width={150}
                height={150}
                style={{ transform: "translate3d(0, 0, 0)"}}
                priority={false}
                className="object-contain"
              />
              <h1 className="mb-3 text-center md:text-left text-5xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-8xl lg:leading-tight">
                TecoGuide
              </h1>
            </div>
            <p className="mb-9 max-w-xl text-center text-xl italic text-zinc-400 sm:text-lg md:text-2xl mx-auto">
              {t("Hero-title-1")}
            </p>
            <div className="flex flex-col items-center mx-auto gap-4 sm:flex-row md:items-center">
              <ButtonApp
                ctaClasses="bg-jaune"
                isOddCard={true}
                route="https://app.tecoguide.com/accountcreation"
                text={t("button-hero")}
                aria-label="Create an account on TecoGuide"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto mt-6">
            <PictureWrapper/>
            <div className="flex flex-row justify-center items-center gap-1 mt-4">
              <a href="https://apps.apple.com/ar/app/tecoguide/id1544881679" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/apple.png"
                  alt="Download on the App Store"
                  width={146}
                  height={70}
                  style={{ transform: "translate3d(0, 0, 0)"}}
                  className="object-contain"
                  priority={false}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.tecotalk.tecoapp&pli=1" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/apple.png"
                  alt="Get it on Google Play"
                  width={163}
                  height={95}
                  style={{ transform: "translate3d(0, 0, 0)"}}
                  className="object-contain"
                  priority={false}
                />
              </a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};