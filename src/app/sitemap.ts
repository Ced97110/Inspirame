import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const locales = ['en', 'es', 'pt', 'zh','hi'];
  const paths = ['/', 'about-us', 'tecoguide', 'tecoadmin', 'media', 'research-articles', 'contact-us'];

  const generateSitemapEntries = () => {
    const entries = [];

    paths.forEach(path => {
      const alternates = locales.reduce((acc, locale) => {
        acc[locale] = `${baseUrl}/${locale}${path === '/' ? '' : `/${path}`}`;
        return acc;
      }, {});

      // Add entries for each locale
      locales.forEach(locale => {
        const localeUrl = `${baseUrl}/${locale}${path === '/' ? '' : `/${path}`}`;
        const localeAlternates = { ...alternates, [locale]: localeUrl };

        entries.push({
          url: localeUrl,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: path === '/' ? 1 : 0.5,
          alternates: { languages: localeAlternates },
        });
      });
    });

    return entries;
  };

  return generateSitemapEntries();
}