import { ArrowRight, ExternalLink, GitBranchIcon } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Backend Authentication System",
    description:
      "A secure authentication backend with user registration, login, JWT-based authentication, protected routes, HTTP-only cookies, and logout functionality.",
    image: "/projects/Auth.png",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/amitcandevelop/Auth-Backend",
  },
  {
    id: 2,
    title: "Weather Application",
    description:
      "A weather application that fetches real-time weather information using a weather API and displays location-based temperature, conditions, and other weather details.",
    image: "/projects/WeatherApp.avif",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/amitcandevelop/Weather-application",
  },
  {
    id: 3,
    title: "YouTube Clone",
    description:
      "A YouTube-inspired application that recreates the core video browsing experience with a responsive interface for exploring and viewing video content.",
    image: "/projects/Youtube.jpg",
    tags: ["React", "JavaScript", "API", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI Resume Tester",
    description:
      "An AI-powered interview preparation application that analyzes a resume and job description to generate a match score, technical questions, and behavioral interview questions.",
    image: "/projects/Resumetester.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "AI"],
    demoUrl: "https://genaiproject-two.vercel.app",
    githubUrl: "https://github.com/amitcandevelop/GENAIPROJECT",
  },
  {
    id: 5,
    title: "Banking Ledger System",
    description:
      "A backend banking ledger system designed to manage accounts and transactions with balance tracking, transaction validation, account states, JWT authentication, and idempotent transaction handling.",
    image: "/projects/BackendAuthenticationSystem.png",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/amitcandevelop/backend-ledger",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        {/* Description */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've built, showcasing my skills in
          frontend development, backend engineering, APIs, databases, and AI.
        </p>

        {/* Projects Grid */}   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <GitBranchIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/amitcandevelop"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;