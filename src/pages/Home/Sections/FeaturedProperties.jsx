import React, { useState, useRef, useEffect } from "react";
import PropertiesCard from "@components/cards/PropertiesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const properties = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjB2aWxsYXxlbnwxfHx8fDE3NjQ5NjYxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Modern Villa with Pool",
    location: "Malabata, Tangier",
    status: "For Sale",
    type: "Villa",
    details: { beds: 4, baths: 3, area: 320 },
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1664813954641-1ffcb7b55fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ5NjE4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Contemporary Apartment",
    location: "City Center, Tangier",
    status: "For Rent",
    type: "Apartment",
    details: { beds: 2, baths: 2, area: 95 },
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjUwNDcwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Luxury Penthouse Suite",
    location: "Marina Bay, Tangier",
    status: "For Sale",
    type: "Penthouse",
    details: { beds: 3, baths: 3, area: 280 },
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NDk3MjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Designer Modern House",
    location: "California, Tangier",
    status: "For Sale",
    type: "House",
    details: { beds: 3, baths: 2, area: 210 },
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1601630164609-af849e05b776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb25kbyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NTA0NzA1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Elegant Condo Residence",
    location: "Boubana, Tangier",
    status: "For Rent",
    type: "Condo",
    details: { beds: 3, baths: 2, area: 140 },
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1740596400206-f894025300b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdG93bmhvdXNlfGVufDF8fHx8MTc2NTA0NzA1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Sophisticated Townhouse",
    location: "Old Medina, Tangier",
    status: "For Sale",
    type: "Townhouse",
    details: { beds: 4, baths: 3, area: 185 },
  },
];

function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState("For Sale");

  const saleRef = useRef(null);
  const rentRef = useRef(null);
  const underlineRef = useRef(null);

  // update underline position + width dynamically
  useEffect(() => {
    const currentRef = activeFilter === "For Sale" ? saleRef : rentRef;
    const underline = underlineRef.current;

    if (currentRef.current && underline) {
      const rect = currentRef.current.getBoundingClientRect();
      const parentRect = currentRef.current.parentElement.getBoundingClientRect();

      underline.style.width = `${rect.width}px`;
      underline.style.transform = `translateX(${rect.left - parentRect.left}px)`;
    }
  }, [activeFilter]);

  const filtered = properties.filter((p) => p.status === activeFilter);

  return (
    <div className="wrapper w-full py-9">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-10 bg-linear-to-r from-transparent to-accent-500"></div>
          <p className="uppercase text-[10px] font-medium text-accent-500 tracking-[0.22em]">
            Exclusive Collection
          </p>
          <div className="h-px w-10 bg-linear-to-l from-transparent to-accent-500"></div>
        </div>

        <h2 className="text-[26px] font-semibold tracking-tight leading-[1.2] text-main mb-2">
          Featured Properties
        </h2>

        <p className="text-[13px] text-secondary max-w-[300px] mx-auto leading-relaxed">
          Discover handpicked residences that embody sophistication and timeless
          elegance in Tangier.
        </p>

        {/* FILTER TABS */}
        <div className="relative inline-flex items-center gap-6 mt-6">
          {/* underline slider */}
          <span
            ref={underlineRef}
            className="absolute -bottom-[3px] h-[2px] bg-accent-400 transition-all duration-300 ease-out"
            style={{ width: 0, transform: "translateX(0)" }}
          />

          <button
            ref={saleRef}
            onClick={() => setActiveFilter("For Sale")}
            className="uppercase tracking-[0.15em] text-[10.5px] pb-1"
          >
            <span
              className={
                activeFilter === "For Sale" ? "text-accent-500" : "text-secondary"
              }
            >
              For Sale
            </span>
          </button>

          <div className="w-px h-4 bg-gold-500/20" />

          <button
            ref={rentRef}
            onClick={() => setActiveFilter("For Rent")}
            className="uppercase tracking-[0.15em] text-[10.5px] pb-1"
          >
            <span
              className={
                activeFilter === "For Rent" ? "text-accent-500" : "text-secondary"
              }
            >
              For Rent
            </span>
          </button>
        </div>
      </div>

      <Swiper spaceBetween={16} slidesPerView={1.25} centeredSlides={false} style={{ overflow: "hidden" }}>
        {filtered.map((property) => (
          <SwiperSlide key={property.id}>
            <PropertiesCard
              image={property.img}
              title={property.title}
              location={property.location}
              beds={property.details.beds}
              baths={property.details.baths}
              area={property.details.area}
              status={property.status}
              type={property.type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FeaturedProperties;
