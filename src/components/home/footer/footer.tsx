import Link from "./link";

import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";

import { IoLogoDiscord as Discord } from "react-icons/io5";
import { SiGithub as Github } from "react-icons/si";
import { FaTelegram as Telegram } from "react-icons/fa6";
import { FaYoutube as Youtube } from "react-icons/fa6";

const Footer = () => {
  const links1 = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Contact",
      href: "#contact",
    },
    {
      name: "Resume",
      href: "/resume",
    },
  ];
  const links2 = [
    {
      name: "Github",
      href: "/",
    },
    {
      name: "Discord",
      href: "/",
    },
    {
      name: "Telegram",
      href: "/",
    },
  ];
  const links3 = [
    {
      name: "Github repo",
      href: "/",
    },
    {
      name: "Github issues",
      href: "/",
    },
    {
      name: "Github PRs",
      href: "/",
    },
  ];
  return (
    <Row justify="center" className="border-t border-primary/30 bg-neutral-900/20">
      <Column
        items="center"
        justify="around"
        className="py-6 max-w-screen-xl grow space-y-6 md:items-start md:space-x-10 md:flex-row ">
        <Column items="center" className="md:items-start">
          <Text className="text-primary mb-0" variant="h2">
            Iliya
          </Text>
          <Text variant="h5">Fullstack web developer</Text>
        </Column>
        <Row className="space-x-4">
          <Column items="end">
            {links1.map((link) => {
              return <Link href={link.href}>{link.name}</Link>;
            })}
          </Column>
          <Column items="end">
            {links2.map((link) => {
              return <Link href={link.href}>{link.name}</Link>;
            })}
          </Column>
          <Column items="end">
            {links3.map((link) => {
              return <Link href={link.href}>{link.name}</Link>;
            })}
          </Column>
        </Row>
        <Row className="space-x-4 h-full items-center">
          <Text variant="lead">Quick links ~ </Text>
          {[Github, Discord, Telegram, Youtube].map((Icon) => (
            <Icon
              className="text-3xl hover:text-primary hover:-translate-y-0.5 transition-all duration-[250ms]
          cursor-pointer"
            />
          ))}
        </Row>
      </Column>
    </Row>
  );
};

export default Footer;
