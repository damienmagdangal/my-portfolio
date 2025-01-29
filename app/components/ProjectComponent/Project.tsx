import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  imgURL: string;
  techUsed: Array<{ t: string; c: string }>;
}

const ProjectComponent = () => {
  const projects: Project[] = [
    {
      title: "Cooperative Web and Mobile Application | 2020 | Team of 2",
      description:
        "The project is a web and mobile application that aided a cooperative in having a centralized repository of data with payment-tracking capabilities.",
      link: "",
      imgURL: "/images/pericco.png",
      techUsed: [
        {
          t: "Ionic",
          c: "badge badge-info text-white",
        },
        {
          t: "Firebase",
          c: "badge badge-warning text",
        },
      ],
    },
    {
      title: "Queue R | 2019 | Solo developer",
      description:
        "A mobile application for iOS, Android, and Windows was developed for various local clothing stores for faster, easier, and more convenient online shopping for its users during the pandemic. The features of the app are: 1) Product browsing through QR code scanning of affiliate stores, 2) Payment tracking, 3) Delivery tracking, and 4) Administrative features.",
      link: "",
      imgURL: "/images/queue-r-logo.png",
      techUsed: [
        {
          t: "Ionic",
          c: "badge badge-info text-white",
        },
        {
          t: "Firebase",
          c: "badge badge-warning",
        },
      ],
    },
    {
      title: "L.E.T. Review | 2018 | Solo developer",
      description:
        "A website developed for NorPhil Innovative Center of Education for students to have a platform for mock exams for the Licensure Examination for Teachers (L.E.T.). The website has the capabilities to 1) accommodate and manage payment of students for mock exam subscriptions, 2) let the users take a mock exam and provide reporting of every test taken, 3) ensure that only registered device is allowed to be used during mock exams, and 4) administrative capabilities in managing students, payments, and reports.",
      link: "",
      imgURL: "/images/LET-Review-Logo.png",
      techUsed: [
        {
          t: "Angular 7",
          c: "badge badge-error text-white",
        },
        {
          t: "Firebase",
          c: "badge badge-warning",
        },
        {
          t: "AdobeXD",
          c: "badge badge-primary",
        },
      ],
    },
    {
      title: "Hustle Clothing Manila Mobile App | 2017 | Solo ",
      description:
        "A hybrid mobile application for Hustle Clothing Manila, a local clothing brand, where users can easily browse their products and buy them by using virtual money.",
      link: "",
      imgURL: "/images/hustle-logo.jpg",
      techUsed: [
        {
          t: "Ionic",
          c: "badge badge-info text-white",
        },
        {
          t: "Firebase",
          c: "badge badge-warning",
        },
        {
          t: "AdobeXD",
          c: "badge badge-primary",
        },
      ],
    },
  ];

  return (
    <div className="bg-base-200 p-5 ">
      <h1 className="text-5xl font-bold text-center">Projects</h1>
      <div className="flex justify-center">
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
          {projects.map((p, i) => {
            return (
              <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                  <img src={p.imgURL} alt={p.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{p.title}</h2>
                  <p>{p.description}</p>
                  <div className="card-actions justify-start">
                    {p.techUsed.map(({ t, c }) => {
                      return <div className={c}>{t}</div>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
