import React from "react";
import { HeroSection } from "../components";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-[#222222] w-screen  overflow-x-clip p-5">
      <HeroSection tittle={"CONTACT US"} message={"we will contact you "} />
      <div className="border-[1px] border-stone-700 shadow-xl max-w-6xl px-10 py-8 mx-auto mb-20 text-white rounded-lg  md:max-w-5xl lg:max-w-3xl">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold md:text-5xl">Contact Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col my-5 text-black space-y-9">
          <div className="w-full space-y-3.5">
            <h1 className="text-white">Name</h1>
            <input
              type="text"
              placeholder="Name"
              className="text-white w-full py-3.5 px-2 rounded-lg outline-none bg-zinc-800"
            />
          </div>
          <div className="w-full space-y-3.5">
            <h1 className="text-white">Email</h1>
            <input
              type="text"
              placeholder="Email"
              className="text-white w-full py-3.5 px-2 rounded-lg outline-none bg-zinc-800"
            />
          </div>
          <div className="w-full space-y-3.5">
            <h1 className="text-white">Message</h1>
            <textarea
              className="w-full py-3.5 px-2 rounded-lg outline-none bg-zinc-800"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
