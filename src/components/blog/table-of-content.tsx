type TableOfContentProps = {
  tableOfContent: { title: string; href: string }[];
};

const TableOfContent = ({ tableOfContent }: TableOfContentProps) => {
  return (
    <div className="flex w-fit flex-col max-w-full">
      {tableOfContent.map((x, i) => {
        return (
          <div key={i} className="p-0 m-0 group flex items-center">
            <span className="h-2 w-2 rounded-full bg-white/80 mr-2" />
            <a
              className="py-1 text-blue-400/80 overflow-hidden text-nowrap text-ellipsis
      group-hover:text-foreground/80 group-hover:pl-1 transition-all duration-300"
              href={x.href}
            >
              {x.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default TableOfContent;
