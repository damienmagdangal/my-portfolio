interface Pricing {
  tier: string;
  price: string;
  details: Array<string>;
  color: string;
  scale: string;
}

const PricingComponent = () => {
  const pricing: Pricing[] = [
    {
      tier: "Basic",
      price: "$20/hr",
      details: [""],
      color: "primary",
      scale: "0",
    },
    {
      tier: "Standard",
      price: "$40/hr",
      details: [""],
      color: "secondary",
      scale: "110",
    },
    {
      tier: "Professional",
      price: "$80/hr",
      details: [""],
      color: "accent",
      scale: "0",
    },
  ];
  return (
    <main className="bg-base-200 py-10">
      <h1 className="text-4xl text-center mb-8 font-bold">Pricing</h1>
      <div className="flex mx-auto p-6 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/*Card start*/}
          <div className="card bg-base-200 text-primary-content w-96 hover:scale-110 hover:bg-primary transition-all duration-300 shadow-2xl mb-5">
            {/*Card body*/}
            <div className="card-body">
              <h2 className="card-title text-lg">Basic Plan</h2>
              <h2 className="font-bold text-5xl text-center py-10">$25/hr</h2>
              <div className="divider"></div>
              <ul>
                <li className="inline-flex items-baseline text-left">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-success shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Details
                </li>
              </ul>
              <div className="card-actions justify-center">
                <button className="btn">Get Started</button>
              </div>
            </div>
          </div>
          {/*Card end*/}
          {/*Card start*/}
          <div className="card bg-base-200 text-primary-content hover:text-secondary-content w-96 hover:scale-110 hover:bg-secondary transition-all duration-300 shadow-2xl mb-5">
            {/*Card body*/}
            <div className="card-body">
              <h2 className="card-title text-lg">Standard Plan</h2>
              <h2 className="font-bold text-5xl text-center py-10">$50/hr</h2>
              <div className="divider"></div>
              <ul>
                <li className="inline-flex items-baseline text-left">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-success shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Details
                </li>
              </ul>
              <div className="card-actions justify-center">
                <button className="btn">Get Started</button>
              </div>
            </div>
          </div>
          {/*Card end*/}
          {/*Card start*/}
          <div className="card bg-base-200 text-accent-content w-96 hover:scale-110 hover:bg-accent transition-all duration-300 shadow-2xl mb-5">
            {/*Card body*/}
            <div className="card-body">
              <h2 className="card-title text-lg">Professional Plan</h2>
              <h2 className="font-bold text-5xl text-center py-10">$80/hr</h2>
              <div className="divider"></div>
              <ul>
                <li className="inline-flex items-baseline text-left">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-success shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Details
                </li>
              </ul>
              <div className="card-actions justify-center">
                <button className="btn">Get Started</button>
              </div>
            </div>
          </div>
          {/*Card end*/}
        </div>
      </div>
    </main>
  );
};

export default PricingComponent;
