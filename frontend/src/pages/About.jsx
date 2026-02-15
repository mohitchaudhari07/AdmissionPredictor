import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
    <div className="min-h-screen overflow-y-scroll flex flex-col bg-linear-to-br from-[#e6d3b3] via-[#d2b48c] to-[#a67c52] text-gray-900">
      <header className="py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">
            We help students find the right colleges
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            Admission Predictor uses data-driven models and human expertise to
            estimate your chances, suggest best-fit colleges, and guide your
            next steps. Built for clarity, fairness, and results.
          </p>
          
        </div>
      </header>

      <main className="flex-1 -mt-6">
        <section className="max-w-6xl mx-auto px-6 md:px-12 grid gap-8 md:grid-cols-3">
          <article className="bg-white/95 rounded-xl p-6 shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-semibold text-[#5b3b1f]">
              Our Mission
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              Make college admissions transparent and data-informed so every
              student can pursue the right opportunities with confidence.
            </p>
          </article>

          <article className="bg-white/95 rounded-xl p-6 shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-semibold text-[#5b3b1f]">
              How it works
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              We combine historical admissions data, your profile, and machine
              learning to produce an easy-to-understand chance score and
              tailored college list.
            </p>
          </article>

          <article className="bg-white/95 rounded-xl p-6 shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-semibold text-[#5b3b1f]">
              Our Promise
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              We prioritize privacy, accessibility, and fairness. Our
              suggestions complement — not replace — your own research and
              counselor advice.
            </p>
          </article>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-12 mt-12 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              People behind the product
            </h2>
            <p className="mt-4 text-white/90 max-w-xl">
              A small team of engineers, former admissions counselors, and data
              scientists working to make the college search and admissions
              process more predictable and less stressful.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#5b3b1f] font-semibold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-white">Mohit Chaudhari</div>
                  <div className="text-sm text-white/80">
                    Web Developer
                  </div>
                </div>
              </li>
              
            </ul>
          </div>

          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white">By the numbers</h3>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-sm text-white/80">Profiles analysed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-white/80">Colleges covered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white/80">Satisfaction rating</div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mb-6 mx-auto px-6 md:px-12 mt-12">
          <div className="bg-white/95 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-[#5b3b1f]">
              Want to contribute?
            </h3>
            <p className="mt-2  text-sm text-gray-700">
              We welcome feedback, data contributions, and collaboration. Reach
              out via the contact form or open an issue on GitHub.
            </p>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}

export default About;
