import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { useCycle } from "framer-motion";
import NavbarDrawer from "@/components/home/navbar/navbar-drawer";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  const links = [
    {
      name: "Home",
      href: "#hero",
    },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "/blog" },
  ];

  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Navbar links={links} toggleOpen={toggleOpen} />
      <NavbarDrawer links={links} isOpen={isOpen} toggleOpen={toggleOpen} />

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
