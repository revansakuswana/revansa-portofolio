import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WorkExperience() {
  const experiences = [
    {
      role: "Fullstack Developer - Project Based",
      company: "PT. INDONESIA TRANS NETWORK",
      date: "Jul 2025 – Aug 2025",
      description: `• Created an internal website for company payroll management. 
      • Used React JS, Tailwind CSS, and Shadcn to build an efficient and responsive UI. 
      • Designing and developing RESTful API using Node.js and AdonisJS Framework. 
      • Managed MySQL database to store employee and salary master data. 
      • Use Git and GitHub for code management and collaboration.`,
      logos: [
        { alt: "React", src: "https://cdn.simpleicons.org/react/171717" },
        {
          alt: "TailwindCSS",
          src: "https://cdn.simpleicons.org/tailwindcss/171717",
        },
        { alt: "Shadcn", src: "https://ui.shadcn.com/favicon.ico" },
        { alt: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/171717" },
        { alt: "AdonisJS", src: "https://cdn.simpleicons.org/adonisjs/171717" },
        { alt: "MySQL", src: "https://cdn.simpleicons.org/mysql/171717" },
      ],
    },
    {
      role: "Software Engineer - Apprenticeship",
      company: "KERJAGO",
      date: "Nov 2023 – Jan 2024",
      description: `• Implementing designs created by the UI/UX team using React JS, Tailwind CSS, and Material UI. 
      • Designing and developing RESTful API using Node.js and Express.js. 
      • Designing and managing MySQL database structures to store job and user data. 
      • Using Apache JMeter to perform load testing on API and databases. 
      • Use Git and GitHub for code management and collaboration. 
      • Working in a team using JIRA for task management.`,
      logos: [
        { alt: "React", src: "https://cdn.simpleicons.org/react/171717" },
        {
          alt: "TailwindCSS",
          src: "https://cdn.simpleicons.org/tailwindcss/171717",
        },
        { alt: "MaterialUI", src: "https://cdn.simpleicons.org/mui/171717" },
        { alt: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/171717" },
        { alt: "Express", src: "https://cdn.simpleicons.org/express/171717" },
        { alt: "MySQL", src: "https://cdn.simpleicons.org/mysql/171717" },
        {
          alt: "ApacheJMeter",
          src: "https://cdn.simpleicons.org/apachejmeter/171717",
        },
        { alt: "Jira", src: "https://cdn.simpleicons.org/jira/171717" },
      ],
    },
    {
      role: "Cloud Computing Learning Path (Distinction Graduate) - Independent Study (MSIB)",
      company: "BANGKIT ACADEMY LED BY GOOGLE, TOKOPEDIA, GOJEK & TRAVELOKA",
      date: "Aug 2023 – Jan 2024",
      description: `• Responsible for completing various courses in Dicoding, Coursera, and Google Cloud Skills Boost. 
      • Participated in self-directed learning through asynchronous courses. 
      • Sought advice from experts and mentors. 
      • Completed the Cloud Computing Learning Path, successfully passing exams and assessments. 
      • Contributed to a final team project in groups of 6 members. 
      • Developed a backend using Express.js for a web application and successfully deployed it on GCP. 
      • Completed the company capstone project with a team consisting of 4 Machine Learning and 2 Cloud Computing.`,
      logos: [
        {
          alt: "Google Cloud",
          src: "https://cdn.simpleicons.org/googlecloud/171717",
        },
        { alt: "Coursera", src: "https://cdn.simpleicons.org/coursera/171717" },
      ],
    },
    {
      role: "Frontend Web Developer - Internship",
      company: "PT EVOLUSI TEKNOLOGI SOLUSI",
      date: "Jun 2023 – Aug 2023",
      description: `• Implement designs created by the UI/UX team using HTML, TailwindCSS, and JavaScript. 
      • Use Git and GitHub for code management and collaboration. 
      • Identify and fix bugs found during development and perform functionality testing. 
      • Use tools such as Lighthouse to measure website performance.`,
      logos: [
        { alt: "HTML5", src: "https://cdn.simpleicons.org/html5/171717" },
        {
          alt: "TailwindCSS",
          src: "https://cdn.simpleicons.org/tailwindcss/171717",
        },
        {
          alt: "JavaScript",
          src: "https://cdn.simpleicons.org/javascript/171717",
        },
        { alt: "Git", src: "https://cdn.simpleicons.org/git/171717" },
        {
          alt: "Lighthouse",
          src: "https://cdn.simpleicons.org/lighthouse/171717",
        },
      ],
    },
  ];

  return (
    <section className="border-x">
      {/* Header row: 2/3 text, 1/3 decorative divider */}
      <div className="grid md:grid-cols-[1.809fr_0.9045fr]">
        <div className="flex flex-col text-left p-8 lg:p-10">
          <h3 className="mb-4 special-gothic-expanded-one-regular font-semibold text-3xl tracking-6">
            Work Experiences
          </h3>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm">
            <p>
              I've had the chance to work with some amazing teams, building real
              products and making a measurable impact along the way.
            </p>
          </div>
        </div>
        <div className="hidden overflow-hidden border-l bg-line-repeat md:block" />
      </div>

      {/* Cards grid */}
      <div className="grid divide-x divide-y border-t md:grid-cols-2 lg:grid-cols-[0.9045fr_0.9045fr_0.9045fr]">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex flex-1 flex-col text-left justify-between pt-8 lg:pt-10">
            <p className="mb-1 px-8 text-xs italic lg:px-10">{exp.role}</p>
            <div className="flex items-center gap-3 px-8 lg:px-10">
              <h4 className="font-bold text-lg">{exp.company}</h4>
            </div>
            <p className="mt-1 px-8 text-neutral-400 text-xs lg:px-10">
              {exp.date}
            </p>
            <p className="mt-4 flex-1 px-8 text-muted-foreground text-sm lg:px-10 whitespace-pre-line">
              {exp.description}
            </p>
            <div className="pl-4 mt-4 flex items-end border-t bg-line-repeat">
              <TooltipProvider>
                {exp.logos.map((logo, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <button data-state="closed">
                        <div
                          className={`border-l bg-background p-4 ${
                            i === exp.logos.length - 1 ? "border-r" : ""
                          }`}>
                          <img
                            className="w-8 h-8 dark:invert"
                            alt={logo.alt}
                            src={logo.src}
                          />
                        </div>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{logo.alt}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        ))}
        {/* Decorative filler on the far right for large screens to mimic the sample layout */}
        <div className="col-span-2 hidden overflow-hidden border-l bg-line-repeat md:block" />
      </div>
    </section>
  );
}
