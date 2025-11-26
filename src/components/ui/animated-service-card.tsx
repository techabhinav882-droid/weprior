import type React from "react";

interface AnimatedServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function AnimatedServiceCard({ icon, title, description }: AnimatedServiceCardProps) {
  return (
    <div className="group relative w-full max-w-[380px] min-h-[280px] bg-black/40 border border-white/10 flex flex-col justify-end p-6 gap-3 rounded-xl cursor-pointer transition-transform duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(0,214,255,0.2)] hover:shadow-[0_0_45px_rgba(0,214,255,0.5)] before:content-[''] before:absolute before:inset-0 before:-left-[5px] before:m-auto before:w-[calc(100%+10px)] before:h-[calc(100%+10px)] before:rounded-[14px] before:bg-gradient-to-r before:from-[#33b5ff] before:to-[#00eaff] before:border before:border-[#00e5ff] before:opacity-90 before:-z-10 before:pointer-events-none after:content-[''] after:-z-[1] after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#00a2ff33] after:to-[#00f8ff33] after:rounded-xl after:transition-all after:duration-300 after:blur-[15px] hover:after:blur-[35px]">
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-cyan-300/20 to-transparent opacity-0 backdrop-blur-[6px] transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative text-5xl mb-2 drop-shadow-[0_0_20px_rgba(0,214,255,0.5)]">
        {icon}
      </div>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-[#e81cff] bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-white/80">{description}</p>
    </div>
  );
}
