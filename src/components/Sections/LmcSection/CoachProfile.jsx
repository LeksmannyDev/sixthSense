import React from "react";
import { eventAsset } from "../EventsSection/eventsAssets";

const CoachProfile = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-24">
      <div className="text-gray max-w-5xl text-justify mx-auto">
        <div className="flex flex-col md:flex-row mb-20 items-start gap-8">
          <div className="md:w-2/3">
            <div className="mb-4">
              <h2 className="text-red font-semibold text-2xl leading-10 md:text-3xl ">
                PRINCIPAL
                <br />
                COACH PROFILE
              </h2>
            </div>
            <p className="max-w-lg  text-base sm:text-lg ">
              Bright 'UK' Ukwenga is a dynamic professional wearing multiple
              hats as a Speaker, Author, Digital Entrepreneur, Leadership
              Expert, and Transformation Coach.
              <br /> He coaches high-performing executives and groups, consults
              for companies and organizations, writes for top-tier tabloids, and
              speaks regularly at conferences around the nation on subjects that
              impact human behavior, empower leaders, shape culture, and
              democratize prosperity.
            </p>
          </div>

          {/* Right Block: Image */}
          <div className="md:w-1/3 w-full">
            <img
              src={eventAsset.Profile}
              alt="Bright UK Ukwenga"
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-[21px]">
          He is the Managing Consultant at SixthSense Leadership Consulting, an
          innovative strategy, training, and consulting company that helps
          individuals and organizations lead the future by catalyzing their
          reinvention and exponential growth.
          <br /> Together, SixthSense Leadership faculty have designed,
          implemented, and facilitated training programmes for at least one of
          the top three brands in every sector of the nation’s economy including
          telecommunications, banking and finance, technology, oil and gas, food
          and agriculture, manufacturing, education, etc.
          <br /> Bright is the convener of the Lead the Future Conference
          empowering the next generation of transformational leaders to be at
          the forefront of innovation, development, and social change across
          organizations and industries. The annual conference brings together
          ambitious professionals and visionary leaders to benefit from expert
          insights, intimate mentoring as well as high-power networking with
          veterans in various spheres while shaping leadership conversations,
          building capacity, and enabling transformation through cross-sectoral
          collaborations and partnerships.
          <br /> Bright is also the founder and CEO of ScribeTribe Africa, a
          digital media and publishing company helping thought leaders to
          reinforce their authority and multiply their influence through the
          publication and distribution of books and other digital products.
          <br /> An alumnus of the Federal University of Technology Akure, he
          holds a certificate in Policy, Strategy, and Leadership from the
          National Institute of Policy and Strategic Studies. He is a fellow of
          the Institute of Management Consultants (Nigeria), a certified
          management consultant with the International Council of Management
          Consulting Institutes (ICMCI), and a member of the Chartered Institute
          of Directors (CIoD) Nigeria.
          <br /> He is touted as an icon of the next generation, and his works
          have been featured across various national media platforms. His books
          include Sixth Sense Leadership; Wealth Without Capital, Capital Beyond
          Money; and Creating Your Own Luck in a Lockdown.
        </p>
      </div>
    </section>
  );
};

export default CoachProfile;
