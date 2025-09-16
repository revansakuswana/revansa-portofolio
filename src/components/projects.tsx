import { IconExternalLink } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Projects() {
  const projects = [
    {
      role: "Frontend Web Developer",
      projectName: "Scrypto",
      projectUrl: "https://scrypto-project.vercel.app/",
      date: "August 2025",
      description: `Create a landing page for Scrypto (crypto token) with consume an API for data and Charts real time.`,
      logos: [
        { alt: "React", src: "https://cdn.simpleicons.org/react/171717" },
        { alt: "Vite", src: "https://cdn.simpleicons.org/vite/171717" },
        {
          alt: "TypeScript",
          src: "https://cdn.simpleicons.org/typescript/171717",
        },
        { alt: "Shadcn", src: "https://ui.shadcn.com/favicon.ico" },
        {
          alt: "TailwindCSS",
          src: "https://cdn.simpleicons.org/tailwindcss/171717",
        },
      ],
    },
    {
      role: "Full-stack Web Developer",
      projectName: "Automatic Certificate System",
      projectUrl: "#",
      date: "July 2025",
      description: `Create an automated web system that generates psychological test certificates for driving licenses.`,
      logos: [
        { alt: "React", src: "https://cdn.simpleicons.org/react/171717" },
        { alt: "Vite", src: "https://cdn.simpleicons.org/vite/171717" },
        {
          alt: "TypeScript",
          src: "https://cdn.simpleicons.org/typescript/171717",
        },
        { alt: "Express", src: "https://cdn.simpleicons.org/express/171717" },
        { alt: "MySQL", src: "https://cdn.simpleicons.org/mysql/171717" },
        { alt: "Shadcn", src: "https://ui.shadcn.com/favicon.ico" },
        {
          alt: "TailwindCSS",
          src: "https://cdn.simpleicons.org/tailwindcss/171717",
        },
      ],
    },
    {
      role: "Frontend Web Developer",
      projectName: "Vaulttora",
      projectUrl: "https://vaulttora.vercel.app/",
      date: "May 2025",
      description: `Create a landing page for Vaulttora crypto project based on client needs.`,
      logos: [
        { alt: "React", src: "https://cdn.simpleicons.org/react/171717" },
        { alt: "Vite", src: "https://cdn.simpleicons.org/vite/171717" },
        {
          alt: "TypeScript",
          src: "https://cdn.simpleicons.org/typescript/171717",
        },
        {
          alt: "TailwindCSS",
          src: "https://cdn.simpleicons.org/tailwindcss/171717",
        },
      ],
    },
    {
      role: "Frontend Web Developer",
      projectName: "Oxen Studio",
      projectUrl: "https://oxen-studio.vercel.app/",
      date: "April 2025",
      description: `Create a landing page for Oxen Studio crypto project based on client needs.`,
      logos: [
        { alt: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/171717" },
        {
          alt: "TypeScript",
          src: "https://cdn.simpleicons.org/typescript/171717",
        },
        { alt: "Radix UI", src: "https://cdn.simpleicons.org/radixui/171717" },
        {
          alt: "TailwindCSS",
          src: "https://cdn.simpleicons.org/tailwindcss/171717",
        },
      ],
    },
    {
      role: "Frontend Web Developer",
      projectName: "Zoomies",
      projectUrl: "https://zoomies-web.vercel.app/",
      date: "March 2025",
      description: `Create a landing page for Zoomies crypto project based on client needs.`,
      logos: [
        { alt: "React", src: "https://cdn.simpleicons.org/react/171717" },
        { alt: "Vite", src: "https://cdn.simpleicons.org/vite/171717" },
        { alt: "Swiper", src: "https://cdn.simpleicons.org/swiper/171717" },
        {
          alt: "TailwindCSS",
          src: "https://cdn.simpleicons.org/tailwindcss/171717",
        },
      ],
    },
    {
      role: "Frontend Web Developer",
      projectName: "Ogverse",
      projectUrl: "https://ogverse.vercel.app/",
      date: "March 2025",
      description: `Create a landing page for Ogverse crypto project based on client needs.`,
      logos: [
        { alt: "React", src: "https://cdn.simpleicons.org/react/171717" },
        { alt: "Vite", src: "https://cdn.simpleicons.org/vite/171717" },
        {
          alt: "TailwindCSS",
          src: "https://cdn.simpleicons.org/tailwindcss/171717",
        },
      ],
    },
    {
      role: "Full-stack Web DeveloperW",
      projectName: "Makarya",
      projectUrl: "https://makarya-frontend.vercel.app/",
      date: "November 2024",
      description: `Create a job vacancy website platform by collecting vacancy data from 3 famous websites using web scraping techniques.`,
      logos: [
        { alt: "React", src: "https://cdn.simpleicons.org/react/171717" },
        { alt: "Express", src: "https://cdn.simpleicons.org/express/171717" },
        { alt: "MySQL", src: "https://cdn.simpleicons.org/mysql/171717" },
        {
          alt: "Puppeteer",
          src: "https://cdn.simpleicons.org/puppeteer/171717",
        },
        { alt: "Material UI", src: "https://cdn.simpleicons.org/mui/171717" },
        {
          alt: "TailwindCSS",
          src: "https://cdn.simpleicons.org/tailwindcss/171717",
        },
      ],
    },
    {
      role: "Frontend Web Developer",
      projectName: "Evoteks",
      projectUrl: "https://web-evoteks.vercel.app/",
      date: "July 2023",
      description: `Create a company profile website based on company requirement.`,
      logos: [
        { alt: "Html", src: "https://cdn.simpleicons.org/html5/171717" },
        {
          alt: "Javascript",
          src: "https://cdn.simpleicons.org/javascript/171717",
        },
        {
          alt: "CSS",
          src: "https://cdn.simpleicons.org/css/171717",
        },
      ],
    },
    {
      role: "IOT Engineer",
      projectName: "Smart Greenhouse and Monitoring System",
      projectUrl: "#",
      date: "May 2023",
      description: `Create an IoT-based smart greenhouse and monitoring system device on mustard plant with an esp32 microcontroller and 3 sensors and 3 actuators.`,
      logos: [
        { alt: "Arduino", src: "https://cdn.simpleicons.org/arduino/171717" },
        { alt: "C", src: "https://cdn.simpleicons.org/c/171717" },
      ],
    },
    {
      role: "UI/UX Designer",
      projectName: "Money Laundry",
      projectUrl:
        "https://www.figma.com/design/YSa5zuNAv78O8mvJeIhKNG/Laundry?node-id=0-1&t=Pw3PBna4GTihrx9E-1",
      date: "May 2023",
      description: `Designed the UI/UX of the Laundry Mobile Application Apps.`,
      logos: [
        { alt: "Figma", src: "https://cdn.simpleicons.org/figma/171717" },
      ],
    },
    {
      role: "UI/UX Designer",
      projectName: "Airan Raya Hospital Mobile Applications",
      projectUrl:
        "https://www.figma.com/design/RVutvhZGL84DraEn2gel9q/Aplikasi-Mobile-Rumah-Sakit-Airan-Raya?node-id=11-89&t=Nk5OWLSSdbp7GqKP-1",
      date: "December 2022",
      description: `Redesigned the UI/UX of the Airan Raya Hospital Mobile Applications Apps.`,
      logos: [
        { alt: "Figma", src: "https://cdn.simpleicons.org/figma/171717" },
      ],
    },
    {
      role: "Programmer",
      projectName: "Bounce Back Games",
      projectUrl: "#",
      date: "May 2022",
      description: `Created Bounce Back games by implementing Object Oriented Programming (OOP).`,
      logos: [
        { alt: "Python", src: "https://cdn.simpleicons.org/python/171717" },
      ],
    },
  ];

  return (
    <section className="border-x">
      {/* Header row: 2/3 text, 1/3 decorative divider */}
      <div className="grid md:grid-cols-[0.9045fr_1.809fr]">
        <div className="hidden overflow-hidden border-r bg-line-repeat md:block" />
        <div className="flex flex-col text-right p-8 lg:p-10">
          <h3 className="mb-4 special-gothic-expanded-one-regular font-semibold text-3xl tracking-6">
            Projects
          </h3>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm">
            <p>
              I've collaborated with talented teams to build real-world products
              that solve meaningful problems and deliver measurable value.
            </p>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid divide-x divide-y border-t md:grid-cols-2 lg:grid-cols-[0.9045fr_0.9045fr_0.9045fr]">
        {projects.map((exp, index) => (
          <div
            key={index}
            className="relative flex flex-1 flex-col text-left justify-between pt-8 lg:pt-10">
            <p className="mb-1 px-8 text-xs italic lg:px-10">{exp.role}</p>
            <div className="flex items-center gap-3 px-8 lg:px-10">
              <h4 className="font-bold text-lg">{exp.projectName}</h4>
              <a
                href={exp.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground">
                <IconExternalLink className="size-4" />
              </a>
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
        <div className="col-span-2 hidden overflow-hidden border-l md:block lg:col-span-2 py-8 lg:py-10">
          <div className="flex items-center gap-3">
            <h4 className="pl-8 font-bold text-lg lg:pl-10">
              Let’s Collaborate!
            </h4>
          </div>
          <p className="mt-4 flex-1 px-8 text-left text-muted-foreground text-sm lg:px-10">
            I'm always excited to explore new opportunities and collaborations.
            If you have a project in mind or just want to chat about ideas,
            don't hesitate to get in touch!
          </p>
        </div>
        <div className="hidden overflow-hidden bg-line-repeat md:block" />
      </div>
    </section>
  );
}
