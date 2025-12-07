import {
  IoKeyOutline,
  IoHomeOutline,
  IoChevronForwardOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import { TbAward } from "react-icons/tb";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
  const services = [
    {
      icon: IoKeyOutline,
      title: "Sell Real Estate",
      description:
        "Expert guidance to sell your property at the best market value with professional marketing and negotiation.",
      number: "01",
      accent: "Maximize Value",
    },
    {
      icon: IoHomeOutline,
      title: "Rent Real Estate",
      description:
        "Find your perfect rental home or list your property with our comprehensive tenant screening services.",
      number: "02",
      accent: "Perfect Match",
    },
    {
      icon: TbAward,
      title: "Property Concierge",
      description:
        "Premium property management and personalized services for homeowners and investors in Tangier.",
      number: "03",
      accent: "White Glove Service",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Touch gesture handling
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      handlePrevious();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-primary-600 via-primary-500 to-primary-600 py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gold-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="wrapper relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-accent-500"></div>
            <IoSparklesOutline
              className="w-4 h-4 text-accent-500"
              strokeWidth={1.5}
            />
            <p className="uppercase text-[11px] font-medium text-accent-500 tracking-[0.22em]">
              What We Offer
            </p>
            <IoSparklesOutline
              className="w-4 h-4 text-accent-500"
              strokeWidth={1.5}
            />
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-accent-500"></div>
          </div>
          <h2 className="text-[32px] font-semibold tracking-tight leading-[1.2] text-main mb-2">
            Premium Services
          </h2>
          <p className="text-[13px] text-secondary max-w-[280px] mx-auto">
            Tailored solutions for discerning clients in Tangier
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative h-[380px] mb-6">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            {services.map((service, index) => {
              const offset = index - currentIndex;
              const isActive = offset === 0;
              const isNext = offset === 1 || offset === -(services.length - 1);
              const isPrevious = offset === 2 || offset === -1;

              if (offset > 2 && offset < services.length - 1) return null;

              return (
                <motion.div
                  key={service.number}
                  custom={direction}
                  initial={{
                    scale: 0.85,
                    opacity: 0,
                    y: 60,
                    rotateZ: direction > 0 ? 3 : -3,
                  }}
                  animate={{
                    scale: isActive ? 1 : isPrevious ? 0.92 : 0.88,
                    y: isActive ? 0 : isPrevious ? 12 : 24,
                    x: isActive ? 0 : isPrevious ? -10 : -20,
                    opacity: isActive ? 1 : isPrevious ? 0.5 : 0.25,
                    zIndex: isActive ? 30 : isPrevious ? 20 : 10,
                    rotateZ: isActive ? 0 : isPrevious ? -2.5 : -5,
                  }}
                  exit={{
                    scale: 0.8,
                    opacity: 0,
                    y: -60,
                    rotateZ: direction > 0 ? -3 : 3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                  }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 w-full cursor-grab active:cursor-grabbing"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <div
                    className="
                      relative
                      bg-white/90 backdrop-blur-md
                      rounded-[28px] p-7
                      border border-gold-400/40
                      shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                      h-full
                      flex flex-col
                      overflow-hidden
                    "
                  >
                    {/* Gold Accent Bar */}
                    {isActive && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 origin-left"
                      />
                    )}

                    {/* Decorative corner pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
                      <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-accent-500 rounded-tr-3xl"></div>
                    </div>

                    {/* Top Section */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div>
                        <span className="text-[72px] font-bold leading-none bg-gradient-to-br from-accent-500/15 via-accent-500/10 to-transparent bg-clip-text text-transparent">
                          {service.number}
                        </span>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[10px] uppercase tracking-[0.15em] text-gold-600 font-medium mt-1"
                          >
                            {service.accent}
                          </motion.p>
                        )}
                      </div>

                      <div
                        className="
                        w-16 h-16 rounded-[20px]
                        bg-gradient-to-br from-accent-500/10 to-accent-500/5
                        border border-accent-500/30
                        flex items-center justify-center
                        shadow-[0_4px_16px_rgba(109,33,60,0.1)]
                      "
                      >
                        <service.icon
                          className="w-7 h-7 text-accent-500"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[24px] font-semibold text-main mb-3 leading-[1.2]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-[14px] text-secondary leading-[1.75] flex-1"
                      >
                        {service.description}
                      </motion.p>
                    )}

                    {/* Next Button */}
                    {isActive && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.35, type: "spring" }}
                        onClick={handleNext}
                        className="
                          mt-6 self-end
                          w-14 h-14 rounded-full
                          bg-gradient-to-br from-accent-500 to-accent-600
                          flex items-center justify-center
                          text-white
                          hover:shadow-[0_8px_24px_rgba(109,33,60,0.4)]
                          active:scale-95
                          transition-all duration-300
                          shadow-[0_4px_16px_rgba(109,33,60,0.3)]
                          group
                        "
                      >
                        <IoChevronForwardOutline className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className="group relative"
            >
              <div
                className={`
                h-2 rounded-full transition-all duration-400
                ${
                  currentIndex === index
                    ? "w-10 bg-gradient-to-r from-accent-500 to-accent-600"
                    : "w-2 bg-accent-500/25 group-hover:bg-accent-500/50"
                }
              `}
              />
              {currentIndex === index && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -inset-1 bg-accent-500/10 rounded-full -z-10"
                />
              )}
            </button>
          ))}
        </div>

        {/* Counter + CTA */}
        <div className="flex items-center justify-between text-[12px]">
          <p className="text-trenary">
            <span className="text-accent-500 font-medium">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-1.5 text-accent-500/40">/</span>
            <span className="text-secondary">
              {String(services.length).padStart(2, "0")}
            </span>
          </p>
          <button
            className="
            text-accent-500 font-medium
            flex items-center gap-1.5
            hover:gap-2.5 transition-all duration-300
            group
          "
          >
            <span className="uppercase tracking-[0.12em] text-[11px]">
              View All Services
            </span>
            <IoChevronForwardOutline className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
