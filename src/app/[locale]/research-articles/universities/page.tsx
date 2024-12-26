'use client'

import { CardBlog } from '@components/components/card/card-blog';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';



const items = [
  
  {
    name: "Ransomware Attacks Against Higher Ed Increase",
    button: "Discover Your Path",
    description: "Colleges and universities experienced a surge in ransomware attacks in 2021, and those attacks had significant operational and financial costs, according to a new report.",
    src: '/rectangle_281.webp',
    tag:'report',
    alt: 'photo',
    link: 'https://www.insidehighered.com/news/2022/07/22/ransomware-attacks-against-higher-ed-increase'
  },
  {
    name: "Toward Racial Justice in California’s Education Systems",
    button: "Discover Your Path",
    description: "California’s public schools, colleges, and universities regularly yield student outcomes that reveal substantial disparities based on race and income.",
    src: '/toward.webp',
    tag:'report',
    alt: 'photo',
    link: 'https://drive.google.com/file/d/168EL7J3HjTxYJrbwzILW748iAAsiDsGJ/view'
  },
  {
    name: "Shut Out",
    button: "Discover Your Path",
    description: "The Need to Increase Access to the University of California and the California State University",
    src: '/shut.webp',
    tag:'report',
    alt: 'photo',
    link: 'https://drive.google.com/file/d/1dkD_R6opDRUMcxeH3AY-Bty8g_rQQNeX/view'
  },

];

export default function CC () {

  const [questions, setQuestions] = useState(items.slice(0, 3));
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState("")

  const { t } = useTranslation();

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setQuestions(items.slice(0, visibleCount)); // Reset to original items if query is empty
    } else {
      const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      );
      setQuestions(filteredItems);
    }
  };

  const handleSeeMore = () => {
    const newVisibleCount = visibleCount + 3; // Adjust this value as needed
    if (newVisibleCount <= items.length) {
        setQuestions((prev) => items.slice(0, newVisibleCount));
        setVisibleCount((prev) => newVisibleCount);
    }
};

  return (
    <section className="py-24 pb-48 bg-zinc-900/30">
    <div className="flex flex-col w-fit mx-auto py-10">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch} // Handle search input
        placeholder="Search articles..."
        className="p-2 rounded border border-gray-300 text-black"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {questions.length > 0 ? (
        questions.map((item, i) => (
          <div key={i} className="col-span-1 flex justify-center mb-2">
              <CardBlog
              name={item.name}
              description={item.description}
              img={item.src}
              link={item.link}
              tag={item.tag}
            />
          </div>
        ))
      ) : (
        <p>No articles found for your search query.</p>
      )}
    </div>

    {visibleCount <= items.length && searchQuery === "" && (
      <div className="flex items-center justify-center">
        <button
          onClick={handleSeeMore}
          className={`flex items-center gap-2 rounded px-5 bg-jaune py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]`}
        >
          {t("research-button")}
        </button>
      </div>
    )}
  </section>
  )
}
