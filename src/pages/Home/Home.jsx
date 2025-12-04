import Button from "./components/Button";
import heroTp from "../../assets/hero_transparent.png";

import { FiHome } from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { TfiMedallAlt } from "react-icons/tfi";

import Badges from "./components/Badges";

function Home() {
  return (
    <section className="flex flex-col items-stretch min-h-dvh text-center bg-primary-500 pt-12">

      {/* Top label */}
      <p className="uppercase text-[11px] font-medium text-accent-500 tracking-[0.18em] mb-1 wrapper">
        Premium Real Estate in Tangier
      </p>

      {/* Main Heading */}
      <h1 className="font-manrope text-[34px] font-semibold tracking-tight leading-[1.12] text-main mt-5 wrapper">
        Find a Place <br />
        You Will Call Home
      </h1>

      {/* Subtext */}
      <p className="font-medium text-[15px] text-secondary max-w-[85%] mx-auto mt-5 leading-[1.65] wrapper">
        Luxury real estate and curated rentals <br />
        in the heart of Tangier.
      </p>

      {/* Elegant divider */}
      <div className="w-14 h-0.5 bg-accent-500/30 mx-auto mt-6 rounded-full"></div>

      {/* Hero Image */}
      <div className="relative w-full mt-10 px-7">
        <div className="absolute inset-0 bg-accent-500/10 blur-[90px] rounded-[55px]"></div>

        <img
          src={heroTp}
          alt=""
          className="relative w-full h-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.2)] scale-[1.03]"
        />
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-col gap-y-3 mt-12 mb-10 wrapper">
        <Button
          variant="primary"
          label="Browse Properties"
          customCss="w-full py-3.5 text-[16px]"
        />

        <Button
          variant="outline"
          label="Get in Touch"
          customCss="w-full py-3.5 text-[16px]"
        />
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-4 mb-5 wrapper">
        <Badges Icon={TfiMedallAlt} label="Years Expertise" count={15} />
        <Badges Icon={FiHome} label="Properties Listed" count={120} />
        <Badges Icon={HiOutlineEmojiHappy} label="Happy Clients" count={300} />
      </div>

      <p className="text-[12px] text-secondary mb-8 wrapper">
        Trusted by homeowners & investors across Tangier
      </p>

    </section>
  );
}

export default Home;
