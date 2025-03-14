"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Images } from "../../config/Files";

interface propTypes {
  onRating?: (rating: number) => void;
  rating?: number;
  totalStar?: number;
  ratedCount?: number;
}

const CRating = (props: propTypes) => {
  const {
    onRating = () => {},
    rating = 0,
    totalStar = 5,
    ratedCount = 0,
  } = props;

  return (
    <div className="flex gap-[10px] items-center">
      {Array.from({ length: totalStar }, (_, i) => {
        return (
          <Image
            key={i}
            src={i < rating ? Images.fillStar : Images.star}
            width={20}
            height={20}
            alt={"rating"}
            onClick={() => {
              onRating(i + 1);
            }}
          />
        );
      })}
      <span className="font-raleway text-[15px] text-greyText">
        ({ratedCount})
      </span>
    </div>
  );
};

export default CRating;
