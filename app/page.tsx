import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      <section className=" px-6 py-24 md:px-20">
        <div className="flex gap-16 max-xl:flex-col">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart shopping start here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                height={16}
                width={16}
              />
            </p>
            <h1 className="head-text">
              Unleash the power of{" "}
              <span className="text-primary">PriceWise</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["Apple Iphone 15", "Book", "Sneakers"].map((product) => (
            <div key={product}>{product}</div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
