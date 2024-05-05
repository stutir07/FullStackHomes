import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto shadow-2xl">
      <h1 className="text-3xl font-bold mx-96 mb-4 text-slate-800">
        <span className="text-slate-500" style={{ color: "black" }}>
          About
        </span>
        <span className="text-slate-700" style={{ color: "blue" }}>
          FullStackHomes
        </span>
      </h1>
      <div className="border-solid border border-neutral-500 rounded-lg hover: shadow-2xl">
        <p className="m-5 text-slate-700">
          FullStackHomes is your one-stop solution for all things real estate.
          From buying your dream home to selling your property effortlessly, we
          have got you covered. With a vast array of listings spanning various
          styles and locations, finding the perfect match for your needs is
          easy. Our user-friendly platform, advanced search filters, and
          detailed property descriptions make the process seamless. Whether you
          are a buyer, seller, or renter, FullStackHomes offers expert guidance
          and support every step of the way. Join us today and experience the
          convenience of navigating the real estate market with confidence.
          Explore FullStackHomes and unlock endless possibilities for your
          property journey!
        </p>
        <p className="m-5 text-slate-700">
          Our mission is to help our clients achieve their real estate goals by
          providing expert advice, personalized service, and a deep
          understanding of the local market. Whether you are looking to buy,
          sell, or rent a property, we are here to help you every step of the
          way.
        </p>
        <p className="m-5 text-slate-700">
          Our team of agents has a wealth of experience and knowledge in the
          real estate industry, and we are committed to providing the highest
          level of service to our clients. We believe that buying or selling a
          property should be an exciting and rewarding experience, and we are
          dedicated to making that a reality for each and every one of our
          clients.
        </p>
      </div>
      <div className="text-center bg-grey-600">
        <div className="mb-5">
          <Link to="/">
            <h1 className="font-bold text-2xl flex-wrap cursor-pointer">
              <span className="text-slate-500" style={{ color: "black" }}>
                FullStack
              </span>
              <span className="text-slate-700" style={{ color: "blue" }}>
                Homes
              </span>
              <span className="text-slate-900">©</span>
            </h1>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center text-center">
          <i className="mx-32 text-xl font-semibold text-pink-400 hover:underline cursor-pointer">
            Instagram
          </i>
          <i className="mx-32 text-xl font-semibold text-blue-600 hover:underline cursor-pointer">
            Facebook
          </i>
          <i className="mx-32 text-xl font-semibold text-blue-400 hover:underline cursor-pointer">
            Twitter
          </i>
        </div>
      </div>
    </div>
  );
}
