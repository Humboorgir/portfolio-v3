import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";

import HamburgerButton from "./hamburger-menu";
import HoverHighlight from "./hover-highlight";

import React, { useRef, useState } from "react";

import { MdOutlineWorkHistory as Work } from "react-icons/md";
import { IoIosColorWand as Theme } from "react-icons/io";
import { FaGithub as Github } from "react-icons/fa";
import { Cycle } from "framer-motion";
import Link from "next/link";

type Props = {
  toggleOpen: Cycle;
  links: {
    name: string;
    href: string;
  }[];
};

const Navbar = ({ toggleOpen, links }: Props) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const containerRect = containerRef.current?.getBoundingClientRect();

  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);

  function updateButtonRect(e: any) {
    setButtonRect(e.target.getBoundingClientRect());
  }

  function resetButtonRect() {
    setButtonRect(null);
  }

  return (
    <Container className="relative z-30 w-full md:w-fit">
      <nav
        className="space-x-4 translate-y-3 rounded-full border-2 border-foreground-muted/20 px-5 md:px-10 w-full
       grid grid-cols-[1fr,1fr] md:grid-cols-[1fr,3fr,1fr] py-1 md:py-3.5">
        {/* logo  */}
        <Row>
          <Work className="text-3xl mr-1" />
          <Text
            className="font-bold bg-gradient-to-br from-neutral-100 to-neutral-300 bg-clip-text text-transparent"
            variant="h5">
            Portfolio
          </Text>
        </Row>

        {/* links  */}
        <ul
          key="navbar"
          ref={containerRef}
          onMouseLeave={resetButtonRect}
          className="relative hidden md:flex items-center justify-center">
          <HoverHighlight buttonRect={buttonRect} containerRect={containerRect} />

          {links.map((link, i) => {
            return (
              <li key={i} onMouseOver={updateButtonRect}>
                <Button
                  className="text-foreground/90 text-[17px] hover:bg-inherit"
                  variant="ghost"
                  href={link.href}
                  useNextLink={false}>
                  {link.name}
                </Button>
              </li>
            );
          })}
        </ul>

        {/* github  */}
        <ul className="hidden md:flex items-center justify-end">
          <li>
            <Button className="text-foreground/90" variant="ghost">
              Github Repository <Github className="text-xl ml-1.5 mb-0.5" />
            </Button>
          </li>
        </ul>

        <HamburgerButton className="md:hidden ml-auto" toggleOpen={toggleOpen} />
      </nav>
    </Container>
  );
};

export default Navbar;
