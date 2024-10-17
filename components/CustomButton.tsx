"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({title, containerStyles, handleClick, type, rightIcon}:CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image 
              src={rightIcon}
              alt={rightIcon}
              fill
              className="object-contain"
            />
          </div>
        )}
    </button>
  );
};

export default CustomButton;
