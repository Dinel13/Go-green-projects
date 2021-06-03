import React from "react";
import udin from "../../assets/udin.jpg";
<<<<<<< HEAD
=======
import ainun from "../../assets/ainun.jpeg"
import alawi from "../../assets/alawi.png"
import okki from "../../assets/okki.jpeg"
>>>>>>> initial commit

const teams = [
  {
    name: "Salahuddin",
<<<<<<< HEAD
    job: "Full-Stack Developper",
=======
    job: "Full-Stack Developer",
>>>>>>> initial commit
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
    image: udin,
    linkedin: "https://www.linkedin.com/in/salahuddin-hafid/",
    university: "Universitas Hasanuddin, Makassar",
  },
  {
    name: "Ainun Annisa",
<<<<<<< HEAD
    job: "Cloud Engginer",
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
    image: "https://dummyimage.com/203x203",
    linkedin: "https://www.linkedin.com/",
=======
    job: "Cloud Engineer",
    motto:
      "Don't follow trend, make your own trend " ,
    image: ainun,
    linkedin: "https://www.linkedin.com/in/ainun-annisa-k-17005120b/",
>>>>>>> initial commit
    university: "Universitas Hasanuddin, Makassar",
  },
  {
    name: "Dicky",
<<<<<<< HEAD
    job: "Android Developper",
=======
    job: "Android Developer",
>>>>>>> initial commit
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
    image: "https://dummyimage.com/203x203",
    linkedin: "https://www.linkedin.com/",
    university: "Universitas Mulawarman, Samarinda",
  },
  {
    name: "Alawi",
<<<<<<< HEAD
    job: "Android Developper",
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
    image: "https://dummyimage.com/203x203",
=======
    job: "Android Developer",
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
    image: alawi,
>>>>>>> initial commit
    linkedin: "https://www.linkedin.com/",
    university: "Universitas AMIKOM Yogyakarta, Yogyakarta",
  },
  {
    name: "Okky",
    job: "Data Scientist",
    motto:
      "Always try everything, study anywhere, with anyone, give the best to achieve a definite goal",
<<<<<<< HEAD
    image: "https://dummyimage.com/203x203",
=======
    image: okki,
>>>>>>> initial commit
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
<<<<<<< HEAD
            <div className="p-3.5 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center border-2 rounded-lg transition duration-500 ease-in-out hover:bg-gray-100 transform hover:-translate-y-1 hover:scale-105">
=======
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center border-2 rounded-lg ">
>>>>>>> initial commit
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
<<<<<<< HEAD
                    className="text-indigo-500 hover:text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0 font-bold"
=======
                    className="text-gray-600 inline-flex  items-center mb-2 hover:text-gray-800 font-bold"
>>>>>>> initial commit
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
