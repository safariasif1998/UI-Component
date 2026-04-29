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

  const hasIndex = index < sculptureList.length - 1;

  const handleDescription = () => {
    setShowMore((prev) => !prev);
  };

  const handleNext = () => {
    if (hasIndex) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="max-w-96 items-center">
        <h2 className="font-bold scroll-auto">
          {sculpture.name} by {sculpture.artist}
        </h2>
        <button
          onClick={handleDescription}
          className="px-4 py-2 rounded border border-gray-100 my-2"
        >
          {showMore ? "Hide" : "Show"} description
        </button>
        <p className="w-full"> {showMore && sculpture.description}</p>
        <img
          src={sculpture.url}
          alt={sculpture.alt}
          className="mx-auto w-full select-none h-full rounded-full"
        />
        <span className="select-none">
          ({index + 1} of {sculptureList.length})
        </span>
        <button className="border px-5 py-2 block rounded select-none mt-2" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
