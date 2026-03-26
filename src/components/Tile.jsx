import React from 'react';

const Tile = ({ title, imageUrl, type, author }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1 cursor-pointer w-full h-full">
      {/* Image Container */}
      <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden relative">
        <img 
          src={imageUrl || 'https://placehold.co/600x400/png'} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {type && type !== 'project' && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm tracking-wide capitalize">
            {type}
          </div>
        )}
      </div>
      
      {/* Content Area */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow bg-white">
        <h3 className="text-sm font-bold text-gray-800 line-clamp-2 leading-snug mb-1">
          {title}
        </h3>
        <div className="mt-auto pt-3 flex items-center justify-between text-[11px] text-gray-500 font-medium">
          <span className="truncate">By: {author || 'TinkerGen'}</span>
          <span className="text-gray-300 tracking-widest leading-none">...</span>
        </div>
      </div>
    </div>
  );
};

export default Tile;
