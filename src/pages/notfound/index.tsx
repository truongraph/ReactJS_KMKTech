import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[#ffffff] p-20">
      <div className="text-center p-30">
       
        <img
          src={"/images/empty.svg"}
          alt="Logo"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="true"
          className={clsx(["w-11/12 z-max text-center block m-auto my-10 img-animation"])}
        />
         <h1   data-aos="fade-up"
            data-aos-once="true" className="text-3xl font-bold">
         This page doesn't seem to exist
        </h1>

        <div className="mt-10">
          <Link
           data-aos="fade-up"
            data-aos-once="true"
            to="/"
              className="bg-[#0859D8] hover:bg-[#0C5DDD] p-4 text-lg px-10 rounded-2xl font-medium text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
