import React from "react";
import udin from "../../assets/udin.jpg";

const teams = [
  {
    name: "Salahuddin",
    job: "Full-Stack Developper",
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
    image: udin,
    linkedin: "https://www.linkedin.com/in/salahuddin-hafid/",
    university: "Universitas Hasanuddin, Makassar",
  },
  {
    name: "Ainun Annisa",
    job: "Cloud Engginer",
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
    image: "https://dummyimage.com/203x203",
    linkedin: "https://www.linkedin.com/",
    university: "Universitas Hasanuddin, Makassar",
  },
  {
    name: "Dicky",
    job: "Android Developper",
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
    image: "https://dummyimage.com/203x203",
    linkedin: "https://www.linkedin.com/",
    university: "Universitas Mulawarman, Samarinda",
  },
  {
    name: "Alawi",
    job: "Android Developper",
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
    image: "https://dummyimage.com/203x203",
    linkedin: "https://www.linkedin.com/",
    university: "Universitas AMIKOM Yogyakarta, Yogyakarta",
  },
  {
    name: "Okky",
    job: "Data Scientist",
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
    image: "https://dummyimage.com/203x203",
    linkedin: "https://www.linkedin.com/",
    university: "Universitas Brawijaya, Malang",
  },
  {
    name: "Shifa",
    job: "Data Scientist",
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
    image: "https://dummyimage.com/203x203",
    linkedin: "https://www.linkedin.com/",
    university: "Universitas Negeri Yogyakarta, Yogyakarta",
  },
];

export default function OurTeam() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-3xl font-medium title-font mb-4 text-gray-600">
            OUR TEAM |{" "}
            <span className="text-gray-800 text-3xl">B21-CAP0199</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Team Manut adalah nama yang kami pilih untuk dijadikan identitas.
            Dibentuk untuk satu tujuan bersama. Terpisah oleh lautan dan zona
            waktu adalah kebanggaan tersendiri bagi kami.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teams.map((team) => (
            <div className="p-3.5 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center border-2 rounded-lg transition duration-500 ease-in-out hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-105">
                <img
                  loading="lazy"
                  alt={team.nama}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-top mb-4"
                  src={team.image}
                />
                <div className="w-full text-left px-5 ">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {team.name}
                  </h2>
                  <p className="text-gray-400 text-sm">{team.university}</p>
                  <h3 className="text-gray-600 ">{team.job}</h3>
                  <hr className="my-2" />
                  <p className="mb-4">{team.motto}</p>
                  <a
                    href={team.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-500 hover:text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0 font-bold"
                  >
                    Selengkapnya
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
