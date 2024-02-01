import Navbar from "@/components/home/navbar";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-background text-foreground-light">
      <Navbar />
      <div>{children}</div>
      <div>Footer</div>
    </div>
  );
};

export default HomeLayout;
