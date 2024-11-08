const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of experience",
    number: 10,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-full text-justify">
            👋 Hi, I'm Raymark Vergara a dedicated developer eager to
            contribute, learn, and grow. Currently pursuing hands-on experience
            as an intern, I specialize in Web development and am skilled in
            React Js FrameWork. With a strong focus on creating efficient and
            user-centered solutions, I enjoy tackling challenges, whether it's
            refining code, building dynamic interfaces, or optimizing processes.
            My goal is to develop practical skills and insights that make a
            difference, while learning from experienced professionals in the
            field. <br /> <br />
            Thanks for checking out my portfolio. I look forward to connecting
            and exploring new opportunities!
          </p>

          {/* {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))} */}
          {/* <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            /> */}
        </div>
      </div>
    </section>
  );
};

export default About;