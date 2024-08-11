import Navbar from "@/components/blog/navbar";
import Footer from "@/components/home/footer";
import NavbarDrawer from "@/components/home/navbar/navbar-drawer";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Navbar />

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
