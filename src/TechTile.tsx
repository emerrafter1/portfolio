import React from "react";

type TechTileProps = {
  icon: React.ReactNode;
  label: string;
};

const TechTile: React.FC<TechTileProps> = ({ icon, label }) => (
<div className="group relative w-24 h-24 hover:bg-slate-900 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[16px_20px_48px_rgba(0,0,0,0.8)]">

    {icon}
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 pt-1 text-sm text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {label}
    </div>
  </div>
);

export default TechTile;
