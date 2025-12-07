import {
  IoKeyOutline,
  IoHomeOutline,
  IoChevronForwardOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import { TbAward } from "react-icons/tb";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* SERVICES CONSTANT (moved outside component so it's not recreated each render) */
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

function ServicesOptimized() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, []);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  const handleDotClick = useCallback(
    (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const handleDragEnd = useCallback(
    (event, info) => {
      const swipeThreshold = 50;
      if (info.offset.x > swipeThreshold) {
        handlePrevious();
      } else if (info.offset.x < -swipeThreshold) {
        handleNext();
      }
    },
    [handleNext, handlePrevious]
  );

  /* Lightweight animation settings — tweens are much cheaper than stiff springs */
  const cardTransition = { type: "tween", duration: 0.32, ease: "easeOut" };

  return (
    <section className="relative bg-linear-to-b from-primary-600 via-primary-500 to-primary-600 py-9 overflow-hidden">
      {/* Decorative Background Elements (reduced blur & opacity for performance) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-10 right-10 w-48 h-48 bg-accent-500 rounded-full blur-[48px]"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gold-500 rounded-full blur-[48px]"></div>
      </div>

      <div className="wrapper relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-accent-500"></div>
            <p className="uppercase text-[11px] font-medium text-accent-500 tracking-[0.22em]">
              What We Offer
            </p>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-accent-500"></div>
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
              const isPrevious = offset === 2 || offset === -1;

              if (offset > 2 && offset < services.length - 1) return null;

              /* set non-animated zIndex via style so framer doesn't animate it */
              const zIndex = isActive ? 30 : isPrevious ? 20 : 10;

              return (
                <motion.div
                  key={service.number}
                  custom={direction}
                  /* remove heavy initial entrance to avoid layout churn */
                  initial={false}
                  animate={{
                    /* only animate cheap, composite-friendly properties */
                    x: isActive ? 0 : isPrevious ? -10 : -20,
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : isPrevious ? 0.5 : 0.25,
                  }}
                  exit={{ opacity: 0 }}
                  transition={cardTransition}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  dragMomentum={false}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 w-full cursor-grab active:cursor-grabbing"
                  style={{ transformOrigin: "center bottom", zIndex }}
                >
                  <div
                    className="
                      relative
                      bg-white/95
                      rounded-[28px] p-7
                      border border-gold-400/30
                      shadow-[0_6px_18px_rgba(0,0,0,0.06)]
                      h-full
                      flex flex-col
                      overflow-hidden
                    "
                  >
                    {/* Top Section (static inner elements — no motion wrappers) */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
                      <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-accent-500 rounded-tr-3xl"></div>
                    </div>

                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div>
                        <span className="text-[72px] font-bold leading-none bg-linear-to-br from-accent-500/15 via-accent-500/10 to-transparent bg-clip-text text-transparent">
                          {service.number}
                        </span>
                        {isActive && (
                          <p className="text-[10px] uppercase tracking-[0.15em] text-gold-600 font-medium mt-1">
                            {service.accent}
                          </p>
                        )}
                      </div>

                      <div
                        className="
                          w-16 h-16 rounded-[20px]
                          bg-linear-to-br from-accent-500/10 to-accent-500/5
                          border border-accent-500/30
                          flex items-center justify-center
                          shadow-[0_2px_8px_rgba(109,33,60,0.06)]
                        "
                      >
                        <service.icon
                          className="w-7 h-7 text-accent-500"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <h3 className="text-[24px] font-semibold text-main mb-3 leading-[1.2]">
                      {service.title}
                    </h3>

                    {isActive && (
                      <p className="text-[14px] text-secondary leading-[1.75] flex-1">
                        {service.description}
                      </p>
                    )}

                    {isActive && (
                      <button
                        onClick={handleNext}
                        className="
                          mt-6 self-end
                          w-14 h-14 rounded-full
                          bg-linear-to-br from-accent-500 to-accent-600
                          flex items-center justify-center
                          text-white
                          hover:shadow-[0_6px_18px_rgba(109,33,60,0.12)]
                          active:scale-95
                          transition-transform duration-200
                          shadow-[0_2px_10px_rgba(109,33,60,0.08)]
                          group
                        "
                        aria-label="Next service"
                      >
                        <IoChevronForwardOutline className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                      </button>
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
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-10 bg-linear-to-r from-accent-500 to-accent-600"
                    : "w-2 bg-accent-500/25 group-hover:bg-accent-500/50"
                }`}
              />
              {currentIndex === index && (
                /* small, non-layout motion only for subtle visual; layoutId removed to reduce layout churn */
                <motion.div
                  className="absolute -inset-1 bg-accent-500/10 rounded-full -z-10"
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.18 }}
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
          <button className="text-accent-500 font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300 group">
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

export default ServicesOptimized;
