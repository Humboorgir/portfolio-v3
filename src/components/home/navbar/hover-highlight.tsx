import { m, cubicBezier, AnimatePresence } from "framer-motion";

type Props = {
  buttonRect: DOMRect | null;
  containerRect: DOMRect | undefined;
};
const HoverHighlight = ({ buttonRect, containerRect }: Props) => {
  return (
    <AnimatePresence>
      {buttonRect && containerRect && (
        <m.div
          key="hoverHighlight"
          initial={{
            x: buttonRect?.left - containerRect?.left,
            y: buttonRect?.top - containerRect?.top + 15,
            width: buttonRect?.width,
            height: buttonRect?.height,
            opacity: 0,
          }}
          animate={{
            x: buttonRect?.left - containerRect?.left,
            y: buttonRect?.top - containerRect?.top,
            width: buttonRect?.width,
            height: buttonRect?.height,
            opacity: 1,
          }}
          exit={{
            y: buttonRect?.top - containerRect?.top + 15,
            opacity: 0,
          }}
          transition={{ duration: 0.25, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          className="absolute left-0 top-0 h-8 w-16 bg-secondary/80 rounded-md"
        />
      )}
    </AnimatePresence>
  );
};

export default HoverHighlight;
