import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  IconMailOpened,
  IconBrandGithub,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="relative border-x">
      <div className="relative grid overflow-hidden lg:grid-cols-[1.809fr_0.9045fr]">
        {/* Kiri: Judul, Deskripsi, Tombol (span 2 row di md+) */}
        <div className="col-[1] flex flex-col text-left gap-6 border-r px-8 pt-10 md:row-[1/span_2] lg:gap-8 lg:px-10">
          <h1 className="text-5xl sm:text-7xl font-bold special-gothic-expanded-one-regular leading-[0.95]">
            Web
            <br />
            Developer
          </h1>
          <p className="text-balance text-muted-foreground text-sm leading-6 tracking-wide">
            A passionate Full-stack Developer who loves building websites and
            web apps that are fast, modern, and user-friendly. I enjoy turning
            ideas into real products, from designing the front-end to managing
            the back-end and databases. With strong collaboration skills and a
            problem-solving mindset, I am eager to contribute to innovative
            projects and grow within a dynamic team.
          </p>

          {/* Tombol dalam grid min-content (struktur baru, isi tetap) */}
          <div className="grid w-fit grid-cols-[min-content_min-content] gap-2 min-[430px]:grid-cols-[min-content_min-content_min-content]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:revansakuswana@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button className="hover:underline">
                      <IconMailOpened className="h-4 w-4" /> Contact me
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>revansakuswana@gmail.com</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/revansakuswana"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button variant="outline" className="hover:underline">
                      <IconBrandGithub className="h-4 w-4" /> Github
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>revansakuswana</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/revansakuswana/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button variant="outline" className="hover:underline">
                      <IconBrandLinkedinFilled className="h-4 w-4" /> Linkedin
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Tengah/Kanan Atas: Gambar profil */}
        <div className="col-[1] flex flex-col gap-4 p-8 md:col-[2] md:row-[1]">
          <img
            src={profile}
            alt="Profile"
            className="hover:grayscale transition rounded-2xl"
          />
        </div>

        {/* Tengah/Kanan Bawah: Tools */}
        <div className="flex flex-col gap-4 text-muted-foreground text-left text-sm lg:gap-6 p-8 border-t">
          <h2>Build this with modern tools</h2>
          <div className="grid grid-cols-1 items-start gap-4">
            <div className="flex items-center gap-4">
              <img
                height={24}
                width={24}
                className="h-6 w-6"
                alt="Vite"
                src="https://vitejs.dev/logo.svg"
              />
              <span className="flex items-center gap-2 hover:underline">
                Vite
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img
                height={24}
                width={24}
                className="h-6 w-6"
                alt="TailwindCSS"
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              />
              <span className="flex items-center gap-2 hover:underline">
                TailwindCSS v4
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img
                height={24}
                width={24}
                className="h-6 w-6"
                alt="Shadcn"
                src="https://ui.shadcn.com/favicon.ico"
              />
              <span className="flex items-center gap-2 hover:underline">
                Shadcn
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
