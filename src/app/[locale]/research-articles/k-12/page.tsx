'use client'

import { CardBlog } from '@components/components/card/card-blog';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';



const items = [
 
  {
    name: "The Uneven Climb From College to Career",
    button: "Discover Your Path",
    description: "All opportunities aren’t created equal, especially when it comes to building a career after college.",
    src: '/captue.webp',
    tag:'report',
    alt: 'photo',
    link: 'https://www.chronicle.com/article/the-uneven-climb-from-college-to-career'
  },
  {
    name: "The State of U.S. Science and Engineering",
    button: "Discover Your Path",
    description: "How do Latinx and underrepresented groups stand in a STEM world?",
    src: '/jack_logan.webp',
    tag:'report',
    alt: 'photo',
    link: 'https://ncses.nsf.gov/pubs/nsb20221'
  },
  {
    name: "Where California High SchoolStudents Attend College",
    button: "Discover Your Path",
    description: "For as much as we know about the economic benefits of a college degree, California policymakers and educators have little information about the college destinations of high school graduates.",
    src: '/where.webp',
    tag:'report',
    alt: 'photo',
    link: 'https://drive.google.com/file/d/1zTO_6ufrVKQyMWM715V4Oj24hcTSvKnR/view'
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
    <section className="py-6 pb-48 bg-zinc-900/30">
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
          <div key={i} className="col-span-1 flex justify-center">
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
