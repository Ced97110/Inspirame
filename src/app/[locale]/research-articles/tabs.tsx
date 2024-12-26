'use client'


import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const tabs = [
  { name: 'K-12', path: 'k-12' },
  { name: 'Community-College', path: 'community-college' },
  { name: 'Universities', path: 'universities' },
  { name: 'System-Wide', path: 'system-wide' },
  { name: 'Other', path: 'other' },
];

const Tabs = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="px-2 py-2 bg-slate-900 flex items-center h-fit flex-wrap gap-2 w-fit justify-center border rounded-lg mx-auto">
      {tabs.map((tab, i) => (
        <Chip
          text={tab.name}
          path={tab.path}
          key={i}
          isActive={pathname.includes(tab.path)} // Check if the current path matches the tab path
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  path,
  isActive,
}: {
  text: string;
  path: string;
  isActive: boolean;
}) => {
  return (
    <Link
      href={`/research-articles/${path}`}
      className={`${
        isActive
          ? "text-black bg-jaune" // Highlight active tab
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-lg transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">
        {text}
      </span>
    </Link>
  );
};

export default Tabs;