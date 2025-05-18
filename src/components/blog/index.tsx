import React, { useState } from "react";
import copy from "../../assets/icons/copy.svg";
import date from "../../assets/icons/date.svg";
import user from "../../assets/icons/user-view.svg";
import category from "../../assets/icons/category.svg";
import { formatDate } from "../../helpers/formatDate";
import type { Blog } from "../../types/blog";

const BlogCard: React.FC<{ data: Blog }> = ({ data }) => {
  const [isHoveringCopy, setIsHoveringCopy] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(data.writer).then(() => {
      setIsCopied(true);
    });
  };

  return (
    <div className="bg-[#FCFCFC] border border-[#F1F1F1] rounded-[20px] pt-[20px] pb-[26px] px-[22px]">
      <p className="truncate text-[rgba(58, 53, 65, 0.87)] font-[600] leading-[20px] tracking-[0.1px] text-[14px]">
        {data.title}
      </p>
      <div className="flex items-center gap-[4px] mt-[5px]">
        <p className="font-[500] text-[12px] text-[rgba(58, 53, 65, 0.47)] leading-[20px] opacity-50">
          Writer:{" "}
        </p>
        <p className="font-[500] text-[12px] text-[rgba(58, 53, 65, 0.87)] leading-[20px] opacity-87">
          {data.writer}
        </p>
        <div
          className="flex items-center cursor-pointer ml-2 select-none"
          onClick={handleCopyClick}
          onMouseEnter={() => setIsHoveringCopy(true)}
          onMouseLeave={() => {
            setIsHoveringCopy(false);
            setIsCopied(false);
          }}
          title="Copy writer name"
        >
          <img src={copy} alt="copy icon" />
          {(isHoveringCopy || isCopied) && (
            <span
              className={`inline-block px-[6px] py-[4px] text-white text-[11px] font-medium bg-[#4c4552] rounded-[4px] relative 
  before:content-[''] before:absolute before:left-[-5px] before:top-1/2 before:-translate-y-1/2 before:w-[8px] before:h-[8px] before:bg-[#4c4552] before:ml-[2px] before:rotate-45 before:rounded-[2px]`}
            >
              {isCopied ? "Copied" : "Copy"}
            </span>
          )}
        </div>
      </div>
      <div className="border-b border-b-[rgba(58,53,65,0.05)] mt-[23px]" />
      <div className="flex items-center mt-[23px]">
        <img src={date} height={12} width={13} alt="" />
        <p className="font-[500] text-[13px] text-[rgba(58, 53, 65, 1)] ml-[8px]">
          Date:
        </p>
        <p className="font-[500] text-[12px] text-[rgba(58, 53, 65, 1)] ml-[4px]">
          {formatDate(data.date)}
        </p>
      </div>
      <div className="flex items-center mt-[12px]">
        <img src={user} height={10} width={13} alt="" />
        <p className="font-[500] text-[13px] text-[rgba(58, 53, 65, 1)] ml-[8px]">
          View:{" "}
        </p>
        <p className="font-[500] text-[12px] text-[rgba(58, 53, 65, 1)] ml-[4px]">
          {data.views}
        </p>
      </div>
      <div className="flex items-center mt-[12px]">
        <img src={category} height={14} width={14} alt="" />
        <p className="font-[500] text-[13px] text-[rgba(58, 53, 65, 1)] ml-[8px]">
          {data.category}
        </p>
      </div>
      <div className="border-b border-b-[rgba(58,53,65,0.05)] mt-[18.8px]" />
      <p className="line-clamp-3 font-[400] text-[12px] text-[rgba(58, 53, 65, 0.87)] leading-[22px] mt-[15px]">
        {data.content}
      </p>
    </div>
  );
};

export default BlogCard;
