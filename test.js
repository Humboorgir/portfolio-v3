const source = `Hello there! \nToday we're here to talk about big black Gs! how amazing bruv!\n Btw forgot to mention heres table of content:\n Its called with [TOC] \n Thats kinda awesome! Here's me using it:\n [TOC]\n Was that cool?`;

function implementTOC(source) {
  return source.split("\n").map((line) => {
    const isWriterAskingForTOCToBePlacedHere =
      line.replaceAll(" ", "") == "[TOC]";
    if (!isWriterAskingForTOCToBePlacedHere) return line;
    return line.replace(
      "[TOC]",
      `\n
           <div className="flex w-fit flex-col">
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
          \n`
    );
  });
}

console.log(implementTOC(source));
