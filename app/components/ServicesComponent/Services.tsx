interface Service {
  title: string;
  description: Array<string>;
  imgURL: string;
  link?: string;
}

const ServicesComponent = () => {
  const services: Service[] = [
    {
      title: "Custom Web Application Development",
      description: [
        "Tailor-made web applications built to meet your business needs.",
        "Leveraging Full-stack solutions utilizing modern technologies (Next.js, React, Express.js, SQL/No-SQL Databases",
      ],
      imgURL:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "E-commerce Website Development",
      description: [
        "Design and develop scalable online stores with secure payment integrations.",
        "Custom shopping carts, inventory management, and user-friendly interfaces using Shopify.",
      ],
      imgURL:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Maintenance & Support",
      description: [
        "Ongoing maintenance and updates to ensure your web app stays secure and functional.",
        "Bug fixing, feature updates, and performance enhancements as your business evolves.",
      ],
      imgURL:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Cloud Hosting & Deployment",
      description: [
        "Set up cloud infrastructure and deploy web applications (AWS, Azure, Google Cloud).",
        "Continuous integration/continuous deployment (CI/CD) for efficient code management.",
      ],
      imgURL:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
  ];

  return (
    <div className="py-10 mb-10">
      <h1 className="font-bold text-center text-5xl m-5">Services Offered</h1>
      <div className="flex mx-auto justify-center items-center">
        <div className="my-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-5">
          {services.map((s, i) => {
            return (
              <div className="card bg-base-100 w-96 shadow-xl hover:scale-110 transition-all duration-500">
                <figure className="px-10 pt-10">
                  <img src={s.imgURL} alt={s.title} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{s.title}</h2>
                  <ul>
                    {s.description.map((d, i) => (
                      <li
                        className="inline-flex items-baseline text-left"
                        key={i}
                      >
                        <svg
                          className="w-3.5 h-3.5 me-2 text-success shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  {/* <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
