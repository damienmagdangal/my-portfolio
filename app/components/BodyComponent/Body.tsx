const BodyComponent = () => {
  return (
    <div className="hero bg-base-200 min-h-screen pb-5">
      <div className="hero-content flex-col sm:text-center lg:text-left lg:flex-row-reverse">
        <img
          src="/images/Damien.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <p className="py-6 font-light lg:text-left sm:text-center">
            LET'S MAKE YOUR BUSINESS KNOWN TO THE WORLD
          </p>
          <h1 className="text-5xl font-semibold lg:text-left sm:text-center">
            Hi, I'm <span className="text-primary font-extrabold">Damien</span>,
            Fullstack Developer and Cybersecurity Enthusiast
          </h1>

          <p className="py-6 lg:text-left sm:text-justify">
            Welcome to my portfolio! I'm a passionate full-stack developer with
            a strong focus on creating seamless, dynamic web applications. With
            expertise in Next.js, React, Express.js, PostgreSQL, and Firebase, I
            craft intuitive and scalable solutions that drive both performance
            and user experience. Beyond development, I'm also deeply fascinated
            by cybersecurity and ethical hacking. As I continue to grow in my
            craft, I plan to expand my skill set into the realm of ethical
            hacking, aiming to contribute to a safer and more secure digital
            world. Feel free to explore my work and projects below, and let's
            connect if you're interested in collaborating or learning more about
            what I do!
          </p>
          <button className="btn btn-primary">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
