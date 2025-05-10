import React from "react";

const Methodology = () => {
  const methodology = [
    {
      title: "Assessments and Analyses",
      text: "Structured assessments to gauge current skill levels and target areas for improvement",
    },
    {
      title: "Case Studies",
      text: "Real-world scenarios to apply concepts and enhance practical understanding",
    },
    {
      title: "Brainteasers",
      text: "Engaging puzzles to stimulate critical thinking and problem-solving abilities",
    },
    {
      title: "Creative Visuals",
      text: "Visual aids to illustrate complex ideas and support retention of key concepts",
    },
    {
      title: "Role Play and Team Activities",
      text: "Interactive exercises to build communication skills and encourage collaborative learning",
    },
  ];

  return (
    <section className="py-12 sm:py-14 md:py-25 bg-light px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-medium text-2xl sm:text-3xl md:text-[40px] text-center text-blue mb-10">
          Methodology
        </h2>

        {/* Desktop version */}
        <div className="hidden lg:block w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {methodology.slice(0, 3).map((value, index) => (
              <div
                key={index}
                className="rounded-[30px] bg-[#FF0C101A] p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full"
              >
                <div className="py-7 sm:py-12 flex flex-col items-center gap-3 sm:gap-4">
                  <p className="font-bold capitalize text-center text-red text-sm sm:text-lg">
                    {value.title}
                  </p>
                  <p className="text-gray text-sm md:text-[15px] xl:text-[15px] text-center max-w-xs sm:max-w-2xs mx-auto">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-6 mt-2 sm:mt-0">
              {methodology.slice(3).map((value, index) => (
                <div
                  key={index}
                  className="w-full sm:max-w-sm rounded-[30px] bg-[#FF0C101A] p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full"
                >
                  <div className="py-7 sm:py-12 flex flex-col items-center gap-3 sm:gap-4">
                    <p className="font-bold capitalize text-red text-center text-sm sm:text-lg mt-2 sm:mt-4">
                      {value.title}
                    </p>
                    <p className="text-gray text-sm md:text-[15px] xl:text-[15px] max-w-xs sm:max-w-2xs mx-auto text-center">
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile version */}
        <div className="block lg:hidden w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {methodology.map((value, index) => (
              <div
                key={index}
                className="rounded-[30px] bg-[#FF0C101A] p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full"
              >
                <div className="py-7 sm:py-12 flex flex-col items-center gap-3 sm:gap-4">
                  <p className="font-bold capitalize text-center text-red text-sm sm:text-lg">
                    {value.title}
                  </p>
                  <p className="text-gray text-sm md:text-[15px] xl:text-[15px] text-center max-w-xs sm:max-w-2xs mx-auto">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
