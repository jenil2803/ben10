import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoTile = ({ title, imageUrl, videoUrl, author }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube ID assuming standard URL formats
  const getOutputVideoSrc = (url) => {
    if (!url) return null;
    let videoId = '';
    
    // Handle youtu.be format
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } 
    // Handle youtube.com/watch?v= format
    else if (url.includes('youtube.com/watch')) {
      try {
        const urlParams = new URLSearchParams(new URL(url).search);
        videoId = urlParams.get('v');
      } catch (e) {
        console.error("Invalid URL format:", url);
      }
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;
  };

  const embedUrl = getOutputVideoSrc(videoUrl);

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1 w-full h-full">
      {!isPlaying ? (
        <>
          <div 
            className="w-full aspect-[4/3] bg-gray-900 overflow-hidden relative cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            {/* Thumbnail */}
            <img 
              src={imageUrl || 'https://placehold.co/600x400/1e293b/fff?text=Video'} 
              alt={title} 
              className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
              loading="lazy"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:bg-white/30 group-hover:scale-110">
                <Play className="w-6 h-6 text-white ml-1 fill-white" />
              </div>
            </div>
            
            <span className="absolute top-2 left-2 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-white shadow-sm tracking-wide flex items-center gap-1">
              <Play className="w-2.5 h-2.5 fill-white" /> VIDEO
            </span>
          </div>
          
          <div className="p-3 sm:p-4 flex flex-col flex-grow bg-white cursor-pointer" onClick={() => setIsPlaying(true)}>
            <h3 className="text-sm font-bold text-gray-800 line-clamp-2 leading-snug mb-1">
              {title}
            </h3>
            <div className="mt-auto pt-3 flex items-center justify-between text-[11px] text-gray-500 font-medium">
              <span className="truncate">By: {author || 'TinkerGen'}</span>
              <span className="text-gray-300 tracking-widest leading-none">...</span>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full relative min-h-[14rem] bg-black overflow-hidden flex flex-col flex-grow">
          {embedUrl ? (
            <iframe 
              src={embedUrl}
              title={title}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-full flex-grow text-white text-xs">
              Invalid Video
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoTile;
