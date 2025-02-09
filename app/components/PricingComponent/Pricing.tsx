import Link from "next/link";

const PricingComponent = () => {
  return (
    <main className="py-10 my-20">
      <h1 className="text-4xl text-center mb-8 font-bold">Pricing</h1>
      <div className="flex mx-auto p-6 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/*Card start*/}
          <div className="card bg-gradient-to-b from-blue-300 to-purple-600  text-secondary-content w-96 lg:hover:scale-110  transition-all duration-300 shadow-2xl mb-5">
            {/*Card body*/}
            <div className="card-body">
              <h2 className="card-title text-lg">Basic Plan</h2>
              <div className="divider"></div>
              <h2 className=" font-bold text-5xl text-center py-10">$25/hr</h2>
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
                  Shopify Store Setup (Theme Installation & Configuration)
                </li>
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
                  Homepage & Essential Pages (About, Contact, Policy Pages)
                </li>
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
                  Product Upload (Up to 20 Products)
                </li>
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
                  Payment Gateway Integration (Stripe, PayPal, Shopify Payments)
                </li>
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
                  Mobile-Friendly & Responsive Design
                </li>
              </ul>
              <div className="card-actions justify-center">
                <Link href="/contact" className="btn btn-neutral">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          {/*Card end*/}
          {/*Card start*/}
          <div className="card bg-gradient-to-b  from-blue-300 to-purple-600  text-secondary-content  w-96 lg:hover:scale-110 hover:bg-secondary transition-all duration-300 shadow-2xl mb-5">
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
                  Pre-Built Templates Customization (Next.js, React, Tailwind
                  CSS)
                </li>
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
                  Cross-Browser & Mobile Optimization
                </li>
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
                  API Development (Node.js, Express, Firebase, or Django)
                </li>
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
                  Authentication System (JWT, OAuth, Firebase Auth)
                </li>
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
                  Database Setup (PostgreSQL, MongoDB, Firebase Firestore)
                </li>
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
                  Basic Admin Dashboard (For Content Management)
                </li>
              </ul>
              <div className="card-actions justify-center">
                <Link href="/contact" className="btn btn-neutral">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          {/*Card end*/}
          {/*Card start*/}
          <div className="card bg-gradient-to-b  from-blue-300 to-purple-600  text-secondary-content w-96 lg:hover:scale-110 hover:bg-accent transition-all duration-300 shadow-2xl mb-5 ">
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
                  Customized Frontend Development (React.js, Next.js, Tailwind
                  CSS)
                </li>
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
                  Customized Backend Development (Node.js, Express, Firebase,
                  PostgreSQL, MongoDB)
                </li>
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
                  API Development & Integration (REST, GraphQL)
                </li>
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
                  Database Design & Management
                </li>
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
                  Bug Fixing & Debugging
                </li>
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
                  Code Optimization & Performance Improvements
                </li>
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
                  Deployment Assistance (Vercel, Netlify, DigitalOcean, AWS)
                </li>
              </ul>
              <div className="card-actions justify-center">
                <Link href="/contact" className="btn btn-neutral">
                  Get Started
                </Link>
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
