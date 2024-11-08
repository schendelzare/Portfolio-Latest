import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/my-img/food-order-app.png",
    title: "Food Order App",
    tags: ["Development", "Web Design"],
    projectLink:
      "https://food-order-2fi8e0837-schendelzares-projects.vercel.app/",
  },
  {
    imgSrc: "/my-img/booking-app.png",
    title: "Booking app",
    tags: ["API", "Database", "Development"],
    projectLink: "https://booking-app-liard-one.vercel.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="">
      <div
        className="container
      "
      >
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              imgSrc={imgSrc}
              tags={tags}
              title={title}
              projectLink={projectLink}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
