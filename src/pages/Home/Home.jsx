import React from "react";
import Button from "./components/Button";

function Home() {
  return (
    <div className="bg-primary-500">
      <p className="uppercase text-sm font-medium text-accent-500 mb-4">
        Premium real estate in tangier
      </p>
      <h1 className="font-cartage text-5xl font-medium leading-[1.1] text-main">
        BUY
        <br />
        RENT
        <br />
        INVEST
      </h1>
      <p className="font-medium text-lg text-[#4a4a4a] mt-6 leading-relaxed">
        Discover luxury apartments and curated rentals in Tangier's most
        desirable locations, managed with complete professional care.
      </p>
      <div className="flex flex-col items-stretch justify-start gap-y-4 gap-x-3 mt-6">
        <Button variant={"primary"} label="Browse Properties" />
        <Button variant={"outline"} label="Book a Call" />
      </div>
    </div>
  );
}

export default Home;
