import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";

import { MdOutlineWorkHistory as Work } from "react-icons/md";
import { IoIosColorWand as Theme } from "react-icons/io";
import { FaGithub as Github } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Resume", href: "/resume" },
  ];
  return (
    <nav
      className="relative before:content-[''] before:absolute before:w-full before:bottom-0
          before:h-[2px] before:bg-gradient-to-r before:from-neutral-700/40 before:via-neutral-700/60
           before:to-neutral-700/40">
      <Container className="w-screen grid grid-cols-[1fr,3fr,1fr] py-4">
        <Row>
          <Work className="text-3xl mr-1" />
          <Text
            className="font-bold bg-gradient-to-br from-neutral-100 to-neutral-300 bg-clip-text text-transparent"
            variant="h5">
            Portfolio
          </Text>
        </Row>
        <ul className="flex items-center justify-center">
          {links.map((link) => {
            return (
              <li>
                <Button className="text-foreground/90 text-[17px]" variant="ghost" href={link.href}>
                  {link.name}
                </Button>
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center">
          <li>
            <Button variant="ghost">
              Theme <Theme className="text-xl ml-1" />
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              Github <Github className="text-xl ml-1.5 mb-0.5" />
            </Button>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
