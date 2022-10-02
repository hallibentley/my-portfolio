import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-200">
      <div className="container max-w-5xl mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm Halli!
          </h1>
          <p className="mb-8 leading-relaxed">
            Thanks for visiting my portfolio, I'm glad you're here! <br />
            <br />
            Based in Columbus, OH (go bucks!) I'm a software engineer with a passion for

            <span className="italic font-medium"> people, tech, travel, & real estate</span>
            .
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex bg-gray-900 text-gray-200 border-0 py-2 px-5 focus:outline-none hover: text-grey-900 rounded text-lg">
              Say hi!
            </a>
          </div>
        </div>
        <div className="">
          <img
            className="max-w-xs object-cover object-center rounded-full ring-2 ring-gray-900"
            alt="photo of Halli"
            src="./profile-pic.png"
          />
        </div>
      </div>
    </section>
  );
}


{/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
<img
  className="object-cover object-center rounded-full ring-4 ring-gray-900"
  alt="photo of Halli"
  src="./profile-pic.png"
/>
</div> */}

