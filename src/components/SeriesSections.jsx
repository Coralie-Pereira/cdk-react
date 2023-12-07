// SeriesSection.js
// import React from 'react';

function SeriesSections  ({ title, seriesRows }) {
  return (
    <div>
      <h3>{title}</h3>
      {seriesRows.map((row, rowIndex) => (
        <section key={rowIndex} className="choices flex flex-wrap">
          {row.map((series) => (
            <div key={series.id} className="choice flex-1 max-w-xs m-1">
              <img src={series.image} alt={series.title} className="w-full h-auto border rounded-t-md" />
              <h3 className="bg-black text-white text-center p-2 rounded-b-md">{series.title}</h3>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default SeriesSections;
