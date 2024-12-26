'use client'

import { CardBlog } from '@components/components/card/card-blog';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';



const items = [
  {
    name: "California’s Higher Education System",
    button: "Discover Your Path",
    description: "California is home to the largest higher education system in the United States.",
    src: '/rear.jpg',
    tag:'report',
    alt: 'photo',
    link: "https://drive.google.com/file/d/11ktH_h95lP3npPVfKRhjWTyCN81YFLQv/view?ts=6660eb31&pli=1"
  },
  {
    name: "UC Return Drop Post-COVID: Impact on Low-Income Students",
    button: "Discover Your Path",
    description: "Retention rates are lowest among Black, Latino and Native American students.",
    src: '/uc.webp',
     tag:'report',
    alt: 'photo',
    link: "https://edsource.org/2022/uc-tracking-drop-in-students-returning-after-covid-start-especially-for-low-income-and-first-generation-students/675779"
  },
  {
    name: "The state of higher education for Latinx Californians",
    button: "Discover Your Path",
    description: "The future of California will be defined by whether we ensure better educational opportunity for over 15 million Latinx Californians.",
    src: '/austin_river.webp',
    alt: 'photo',
     tag:'report',
    link: "https://drive.google.com/file/d/1Wzn7MxbldIbqAn0zyDiIHzZQ9xijNw2U/view?pli=1"
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
    <section className="py-24 pb-16 bg-zinc-900/30">
    <div className="flex flex-col w-1/2 mx-auto py-10">
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
