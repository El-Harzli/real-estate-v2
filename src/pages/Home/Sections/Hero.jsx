import Button from "@components/Button";
import heroTp from "@assets/hero_transparent.png";
import Badges from "@components/Badges";

import { FiHome } from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { TfiMedallAlt } from "react-icons/tfi";

function Hero() {

  return (
    <section className="flex flex-col items-stretch h-fit bg-primary-500 text-center pt-6 overflow-hidden">
      {/* Top label */}
      <p className="uppercase text-[11px] font-medium text-accent-500 tracking-[0.18em] mb-1 wrapper">
        Premium Real Estate in Tangier
      </p>

      {/* Main Heading */}
      <h1 className="font-manrope text-[34px] font-semibold tracking-tight leading-[1.12] text-main mt-3 wrapper">
        Find a Place <br />
        You Will Call Home
      </h1>

      {/* Subtext */}
      <p className="font-medium text-[15px] text-secondary max-w-[85%] mx-auto mt-3 leading-[1.65] wrapper">
        Luxury real estate and curated rentals <br />
        in the heart of Tangier.
      </p>

      {/* Elegant divider */}
      <div className="w-14 h-0.5 bg-accent-500/30 mx-auto mt-4 rounded-full"></div>

      {/* Hero Image */}
      <div className="relative w-full mt-6 px-7 shrink-0">
        <div className="absolute inset-0 bg-accent-500/15 blur-3xl rounded-[55px]"></div>

        <img
          src={heroTp}
          alt=""
          className="relative w-full h-auto max-h-[32dvh] object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
        />
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-col gap-y-2.5 mt-6 wrapper">
        <Button
          variant="primary"
          label="Browse Properties"
          customCss="w-full py-3 text-[15px]"
        />

        <Button
          variant="outline"
          label="Get in Touch"
          customCss="w-full py-3 text-[15px]"
        />
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-5 wrapper">
        <Badges Icon={TfiMedallAlt} label="Years Expertise" count={15} />
        <Badges Icon={FiHome} label="Properties Listed" count={120} />
        <Badges Icon={HiOutlineEmojiHappy} label="Happy Clients" count={300} />
      </div>

      {/* Scroll Indicator */}
      <div className="relative w-5 h-10 border-2 border-accent-400/70 rounded-full mx-auto my-6 flex items-start justify-center opacity-70">
        <span className="absolute bottom-1 block w-1.75 h-1.75 bg-accent-400 rounded-full animate-scroll-pulse"></span>
      </div>
    </section>
  );
}

export default Hero;
