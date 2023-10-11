"use client";
import React, { useEffect } from "react";

import Image from "next/image";

import { getAlignItems } from "utils/layout";
import { getMediaPosition } from "utils/mediaPosition";

export const MediaText = ({
  mediaLink,
  verticalAlignment,
  mediaPosition,
  children,
  innerBlocks }) => {

  const firstContent = innerBlocks[0]?.attributes?.content;

  return (
    <div id="mediaTextContainer" className={`flex ${getAlignItems(verticalAlignment)} ${getMediaPosition(mediaPosition)} flex-col md:flex-row`}>
      <div className="flex-1">
        <Image
          src={mediaLink}
          width={3000}
          height={3000}
          alt={mediaLink}
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="px-14 py-10 md:py-0">{children}</div>
      </div>
    </div>
  )
}
