import React from 'react';

const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 auto-rows-fr">
      {children}
    </div>
  );
};

export default Grid;
