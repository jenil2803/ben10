import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import Tile from './components/Tile';
import VideoTile from './components/VideoTile';
import { fetchContentTiles } from './services/firebase';

const SkeletonTile = () => (
  <div className="w-full h-full aspect-[3/4] sm:aspect-auto bg-white rounded-xl border border-gray-100 animate-pulse flex flex-col shadow-sm">
    <div className="w-full aspect-[4/3] bg-gray-200 rounded-t-xl"></div>
    <div className="p-3 sm:p-4 flex-grow flex flex-col gap-2">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      <div className="mt-auto pt-2">
        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  </div>
);

function App() {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchContentTiles();
        
        if (data && data.length > 0) {
          setTiles(data);
        } else {
          useMockData();
        }
      } catch (err) {
        console.warn("Firebase fetch failed or not configured, falling back to mock data", err);
        useMockData();
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const useMockData = () => {
    setTiles([
      { id: '1', title: 'Make a Catch Game with Scratch', imageUrl: 'https://placehold.co/400x300/f87171/fff?text=Scratch+Catch', type: 'project', author: 'CodeNinja' },
      { id: '2', title: 'Build a LEGO Rubber Band Car', imageUrl: 'https://placehold.co/400x300/3b82f6/fff?text=Lego+Car', type: 'project', author: 'LegoBuilder' },
      { id: '3', title: 'Draw a Rocket using Python Turtle', imageUrl: 'https://placehold.co/400x300/10b981/fff?text=Python+Rocket', type: 'project', author: 'PythonKid' },
      { id: '4', title: 'Micro:bit Flashing Heart Tutorial', imageUrl: 'https://placehold.co/400x300/a855f7/fff?text=Micro:bit', type: 'project', author: 'TechTeacher' },
      { id: '5', title: 'Minecraft Redstone Door Mechanism', imageUrl: 'https://placehold.co/400x300/f59e0b/fff?text=Redstone', type: 'project', author: 'CraftyKid' },
      { id: '6', title: 'Getting Started with Scratch Coding!', imageUrl: 'https://placehold.co/400x300/ec4899/fff?text=Scratch+Video', type: 'video', videoUrl: 'https://www.youtube.com/watch?v=8bJ-M_d9wP4', author: 'Scratch Team' },
    ]);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-slate-800 font-sans">
      {/* Pictoblox style Top Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-lg font-bold text-gray-700 flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#20bf6b] text-white flex items-center justify-center text-sm font-bold shadow-sm">
                C
              </div>
              <span className="hidden sm:inline">ide.tinkergen.com</span>
            </h1>
            
            {/* Nav links mimicking UI */}
            <div className="hidden md:flex ml-8 space-x-1">
              <a href="#" className="px-3 py-2 text-sm font-semibold text-gray-600 rounded-md hover:bg-gray-50">Courses</a>
              <a href="#" className="px-3 py-2 text-sm font-semibold text-[#20bf6b] bg-green-50 rounded-md">Projects</a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-bold overflow-hidden">
              <img src="https://placehold.co/100x100/e2e8f0/64748b?text=U" alt="User" />
            </div>
          </div>
        </div>
      </header>

      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl">🏆</span>
            <h2 className="text-lg font-bold text-gray-700">
              Projects
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors">
            View all
          </a>
        </div>

        {loading ? (
          <Grid>
            {[...Array(6)].map((_, i) => (
              <SkeletonTile key={i} />
            ))}
          </Grid>
        ) : (
          <Grid>
            {tiles.map((tile) => (
              tile.type === 'video' || tile.videoUrl ? (
                <VideoTile 
                  key={tile.id} 
                  title={tile.title} 
                  imageUrl={tile.imageUrl} 
                  videoUrl={tile.videoUrl} 
                  author={tile.author}
                />
              ) : (
                <Tile 
                  key={tile.id} 
                  title={tile.title} 
                  imageUrl={tile.imageUrl} 
                  type={tile.type} 
                  author={tile.author}
                />
              )
            ))}
          </Grid>
        )}
      </main>
    </div>
  );
}

export default App;
