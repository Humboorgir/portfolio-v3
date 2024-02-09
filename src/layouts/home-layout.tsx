import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-background text-foreground-light">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
