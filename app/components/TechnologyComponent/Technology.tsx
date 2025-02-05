"use client";

import Image from "next/image";
import RatingComponent from "./Rating";
import { useState } from "react";

const TechnologyComponent = () => {
  const [data] = useState([
    {
      techName: "Next.js",
      experience: "1 year",
      proficiency: 2,
      imgURL: "/images/nextjs.png",
      tags: ["Web", "Front-end"],
    },
    {
      techName: "React",
      experience: "1 year",
      proficiency: 3,
      imgURL: "/images/react.png",
      tags: ["Web", "Front-end"],
    },
    {
      techName: "Angular",
      experience: "4 years",
      proficiency: 4,
      imgURL: "/images/angular.png",
      tags: ["Web", "Front-end"],
    },
    {
      techName: "Ionic",
      experience: "4 years",
      proficiency: 4,
      imgURL: "/images/ionic.png",
      tags: ["Mobile", "Front-end"],
    },
    {
      techName: "Firebase",
      experience: "4 years",
      proficiency: 4,
      imgURL: "/images/firebase.png",
      tags: ["Web", "Mobile", "Back-end"],
    },
    {
      techName: "Express.js",
      experience: "1 year",
      proficiency: 3,
      imgURL: "/images/expressjs.png",
      tags: ["Web", "Back-end"],
    },
    {
      techName: "GitHub",
      experience: "4 years",
      proficiency: 4,
      imgURL: "/images/github.png",
      tags: ["Web", "Mobile", "Repository"],
    },
    {
      techName: "PostgreSQL",
      experience: "1 year",
      proficiency: 2,
      imgURL: "/images/postgresql.png",
      tags: ["Web", "Back-end", "Database"],
    },
    {
      techName: "TypeScript",
      experience: "4 years",
      proficiency: 3,
      imgURL: "/images/typescript.png",
      tags: ["Web", "Mobile"],
    },
    {
      techName: "HTML",
      experience: "9 years",
      proficiency: 5,
      imgURL: "/images/html.png",
      tags: ["Web", "Mobile"],
    },
    {
      techName: "CSS",
      experience: "9 years",
      proficiency: 4,
      imgURL: "/images/css.png",
      tags: ["Web", "Mobile"],
    },
    {
      techName: "JavaScript",
      experience: "9 years",
      proficiency: 4,
      imgURL: "/images/js.png",
      tags: ["Web", "Mobile"],
    },
  ]);
  return (
    <main>
      <h1 className="text-5xl font-bold text-center m-5">Skills</h1>
      <div className="flex mx-auto items-center justify-center m-5 container p-5">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5">
          {data.map((d, i) => {
            return (
              <div className="card card-side bg-base-100 shadow-xl" key={i}>
                <figure>
                  <Image
                    src={d.imgURL}
                    height={150}
                    width={150}
                    alt={`${d.techName} logo`}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{d.techName}</h2>
                  <p>
                    <span className="font-bold">{d.experience}</span> of
                    experience
                  </p>
                  <div>
                    <RatingComponent value={d.proficiency} />
                  </div>

                  <div className="card-actions justify-start">
                    {d.tags.map((t, i) => {
                      return (
                        <div key={i} className="badge badge-default">
                          {t}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default TechnologyComponent;
