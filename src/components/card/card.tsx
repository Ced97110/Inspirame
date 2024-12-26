import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface ShimmerBorderCardProps {
  title: any;
  text: string;
  Icon: any;
  email?: string;
  className?: string;
}

export const ShimmerBorderCard = ({ title, text, Icon, email, className = "" }: ShimmerBorderCardProps) => {
  return (
    <div className={twMerge("group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 hover:scale-[1.01] hover:bg-slate-800/50 border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80",className)}>
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
        {Icon}

        <div className="relative text-center z-10 mb-4 w-full text-3xl md:text-3xl font-bold text-slate-50 text-pretty">
          {title}
        </div>
        <p className="relative z-10 text-slate-400 text-pretty">
          {text}
        </p>
        <p className="relative z-10 text-slate-400 mt-8">{email}</p>
      </div>

      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          transformOrigin: "center",
          transform: "scale(1.75)",
          animation: "rotate 3.5s linear infinite",
        }}
      />
    </div>
  );
};
