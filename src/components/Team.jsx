import React from 'react';

const Team = () => {
  return (
    <div className="container mx-auto text-center md:flex md:justify-center md:items-center md:p-5 lg:p-3">
      <div className="inline-block md:max-w-3xl w-full h-auto">
        <div className="flex justify-evenly">
          <ProfileDiv
            imgSrc="/assets/szilard.jpg"
            altText="Photo of the founder of PARQ Technology"
            fullName="Szilárd Máté"
            jobTitle="Chief Executive Officer"
          />
          <ProfileDiv
            imgSrc="/assets/rui.jpg"
            altText="Photo of the Chief Marketing Officer of PARQ Technology"
            fullName="Rui Almeida"
            jobTitle="Chief Marketing Officer"
          />
        </div>
        <div className="flex justify-around">
          <ProfileDiv
            imgSrc="/assets/rahul.jpg"
            altText="Photo of the Software Engineer of PARQ Technology"
            fullName="Rahul Kapoor"
            jobTitle="Software Engineer"
          />
          <ProfileDiv
            imgSrc="/assets/viktor.jpg"
            altText="Photo of the Operations Manager of PARQ Technology"
            fullName="Viktor Petrov"
            jobTitle="Operations Manager"
          />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-green text-left text-4xl font-bold mb-4">Meet The A-Team</h1>
        <p className="mb-8 text-justify text-light-gray max-w-x">
          Pioneered by Szilárd, who has dedicated the last two years to curating the finest talents in the industry.
        </p>
        <p className="mb-8 text-justify text-light-gray max-w-x">
          The driving force behind our success is our dynamic team, meticulously curated with the industry's finest talent. Committed to creating future-proof and innovative technology, our experts bring unparalleled expertise to the forefront of parking solutions.
        </p>
        <p className="mb-8 text-justify text-light-gray max-w-xl">
          Our team isn't just a group of highly skilled individuals, but a collaborative powerhouse united by a shared mission: to revolutionize the parking experience through cutting-edge technology. Each team member, handpicked for their unique expertise and fervent passion for innovation, contributes to a culture of excellence and relentless pursuit of perfection.
        </p>
        <button
          type="button"
          className="w-full p-3 text-white font-thin bg-blue-purple hover:bg-purple focus:outline-none rounded-md duration-300 hover:translate-y-[-10px]"
          onClick={() => window.location.href = '#demo'}
        >
          <b className="text-yellow-500">Speak with the Team Today</b>
          <br />Schedule a free DEMO call today
        </button>
      </div>
    </div>
  );
};

const ProfileDiv = ({ imgSrc, altText, fullName, jobTitle }) => {
  return (
    <div className="p-4">
      <img className="rounded-full max-w-[200px] border-4 border-purple mb-4" src={imgSrc} alt={altText} />
      <p className="text-white font-bold text-center mb-2">{fullName}</p>
      <p className="text-light-gray font-medium text-center mb-4">{jobTitle}</p>
    </div>
  );
};

export default Team;
