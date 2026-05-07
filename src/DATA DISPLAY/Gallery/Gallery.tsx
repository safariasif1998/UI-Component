import React, { useState } from "react";

export type sculptureListType = {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string;
};

export type GalleryProps = {
  sculptureList: sculptureListType[];
};

export function Gallery(props: GalleryProps) {
  const { sculptureList } = props;

  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const sculpture = sculptureList[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % sculptureList.length);
    setShowMore(false); // Reset description when changing sculpture
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? sculptureList.length - 1 : prev - 1));
    setShowMore(false);
  };

  const handleDescription = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="w-full min-h-[500px] flex justify-center items-center bg-gray-50 p-4">
      <div className="max-w-3xl w-full bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          {sculpture.name}
        </h2>
        <h3 className="text-gray-500 italic text-lg">{sculpture.artist}</h3>

        <button
          onClick={handleDescription}
          className="text-sm px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
        >
          {showMore ? "Hide" : "Show"} description
        </button>
        <p
          className={`text-gray-700 text-base leading-relaxed max-w-xl text-center transition-opacity duration-500 ${
            showMore ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          {sculpture.description}
        </p>
        <div className="w-full flex justify-center mt-4 max-h-[400px] overflow-hidden">
          <img
            src={sculpture.url}
            alt={sculpture.alt}
            className="max-h-[400px] w-auto rounded-xl shadow-lg select-none transform transition-transform duration-300 hover:scale-105 object-contain"
          />
        </div>

        <div className="flex justify-between items-center w-full mt-6">
          <button
            onClick={handlePrev}
            className="px-5 py-2 select-none rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Previous
          </button>
          <span className="text-gray-500">
            {index + 1} of {sculptureList.length}
          </span>
          <button
            onClick={handleNext}
            className="px-5 py-2 select-none rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
