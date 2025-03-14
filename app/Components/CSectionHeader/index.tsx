import React from "react";

interface propTypes {
  title: string;
}

const CSectionHeader = (props: propTypes) => {
  const { title } = props;
  return (
    <div className="mt-[10px] sm:mt-[30px] mb-[20px] flex items-center gap-3">
      <span className="font-bold font-raleway text-black xxs:text-[20px] sm:text-[28px]">
        {title}
      </span>
    </div>
  );
};

export default CSectionHeader;
