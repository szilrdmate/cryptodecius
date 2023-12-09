import React from "react";
import { useHistory } from "react-router-dom";

const Team = () => {
const history = useHistory();

  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-8 sm:grid-cols-1">
      <div className="grid grid-cols-2 grid-rows-2 text-center">

        <img className="rounded-full border-4 border-purple col-start-1 col-span-1 row-start-1 row-span-1 w-full h-auto" src="src/assets/szilard.webp"/>

        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-bold text-center mb-2">
            Szilárd Máté
          </p>
          <p className="text-xl text-light-gray font-medium text-center mb-4">
            CFO
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-bold text-center mb-2">
            Milan Patrick
          </p>
          <p className="text-xl text-light-gray font-medium text-center mb-4">
            CMO
          </p>
        </div>

        <img className="rounded-full border-4 border-purple col-start-2 col-span-1 row-start-2 row-span-1 w-full h-auto" src="src/assets/milan.webp"/>

      </div>


      <div>
        <h1 className="text-yellow text-left text-4xl font-bold mb-4">
          Meet The A-Team
        </h1>
        <p className="mb-8 text-justify text-light-gray max-w-2xl leading-6">
          The driving force behind our success is our dynamic team, meticulously
          curated with the industry's finest talent. Committed to creating
          future-proof and innovative technology, our experts bring unparalleled
          expertise to the forefront of parking solutions.
        </p>
        <p className="mb-8 text-justify text-light-gray max-w-2xl leading-6">
          Our team isn't just a group of highly skilled individuals, but a
          collaborative powerhouse united by a shared mission: to revolutionize
          the parking experience through cutting-edge technology. Each team
          member, handpicked for their unique expertise and fervent passion for
          innovation, contributes to a culture of excellence and relentless
          pursuit of perfection.
        </p>
        <button
            type="button"
            className="w-full p-3 leading-6 text-white font-thin bg-purple hover:bg-light-blue focus:outline-none rounded-lg duration-300 hover:translate-y-[-10px]"
            onClick={() => history.push("/coaching#calendly")}
    >
          <b className="text-white font-bold text-xl">
            Speak with the Team Today
          </b>
          <br />
          Schedule a free DEMO call today
        </button>
      </div>
    </div>
  );
};

export default Team;
