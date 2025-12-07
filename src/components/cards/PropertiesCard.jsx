import React from "react";

import { FaRegHeart } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { PiVectorTwo } from "react-icons/pi";

function PropertiesCard({
  image,
  title,
  location,
  beds,
  baths,
  area,
  type,
  status,
}) {
  return (
    <article className="group relative bg-white rounded-md overflow-hidden transition-all duration-500 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
      {/* Image Container - Sharp corners with shadow */}
      <div className="relative h-[230px] overflow-hidden rounded-t-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-95"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        {/* Status Badge - Left */}
        <div className="absolute top-5 left-5">
          <div className="text-accent-500 bg-white px-4 py-1.5 uppercase tracking-[0.15em] text-[10px]">
            {type}
          </div>
        </div>
        {/* Favorite Button - Right */}
        <button className="absolute top-5 right-5 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-300 group/heart">
          <FaRegHeart className="w-4 h-4 group-hover/heart:fill-current" />
        </button>
      </div>
      {/* Content */}
      <div className="relative p-5">
        {/* Title */}
        <h3 className="mb-2.5 text-main font-medium tracking-tight line-clamp-1">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 mb-5">
          <IoLocationOutline className="w-3.5 h-3.5 text-accent-500 shrink-0" />
          <p className="text-[13px] text-secondary line-clamp-1">{location}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gold-500/20">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center group-hover:bg-accent-500/10 transition-colors duration-300">
              <TbBed className="w-5 h-5 text-accent-500" />
            </div>
            <span className="text-[12px] text-main">
              {beds} {beds === 1 ? "Bed" : "Beds"}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center group-hover:bg-accent-500/10 transition-colors duration-300">
              <LuBath className="w-5 h-5 text-accent-500" />
            </div>
            <span className="text-[12px] text-main">
              {baths} {baths === 1 ? "Bath" : "Baths"}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center group-hover:bg-accent-500/10 transition-colors duration-300">
              <PiVectorTwo className="w-5 h-5 text-accent-500" />
            </div>
            <span className="text-[12px] text-main">{area} m²</span>
          </div>
        </div>

        {/* Schedule Viewing Button */}
        <button className="w-full py-3 bg-linear-to-r from-accent-500 to-accent-600 text-white uppercase tracking-[0.14em] text-[10.5px] rounded-md">
          <span>Schedule Viewing</span>
        </button>
      </div>
    </article>
  );
}

export default PropertiesCard;
