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
  const [person, setPerson] = useState(sculptureList);

  const hasIndex = index < person.length - 1;

  return <div></div>;
}
