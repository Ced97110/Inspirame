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
    tag:'report',
    alt: 'photo',
    link: "https://drive.google.com/file/d/1Wzn7MxbldIbqAn0zyDiIHzZQ9xijNw2U/view?pli=1"
  },
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
  {
    name: "Students regained lost ground last year, but disparities widened",
    button: "Discover Your Path",
    description: "New research shows that students have regained the ground they lost over the pandemic over the last year, but achievement gaps have widened, and the progress students made was lower than it would have been in a typical year.",
    src: '/rectangle_284.webp',
    tag:'report',
    alt: 'photo',
    link: 'https://edsource.org/updates/students-regained-lost-ground-last-year-but-disparities-widened'
  },
  {
    name: "CUNY Lifting New York; 2023-2030 Strategic Roadmap",
    button: "Discover Your Path",
    description: "In the summer of 2021, following nearly 18 months of disruption and innovation occasioned by the COVID-19 pandemic, The City University of New York (CUNY), under the leadership of Chancellor Félix V. Matos Rodríguez, began preparing for a bigger, better, bolder future.",
    src: '/rectangle_2.webp',
    tag:'report',
    alt: 'photo',
    link: 'https://www.cuny.edu/about/chancellor/strategic-roadmap/'
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
