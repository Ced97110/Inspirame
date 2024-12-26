import ArticleIntro from "./intro-article";


export const ArticlesWrapper = async ({params:{locale}}) => {
    return (
      <section className="relative overflow-hidden flex flex-col items-center">
        <ArticleIntro locale={locale} />
        <div>
          
        </div>
      </section>
    );
  };
  