import Container from "@/components/ui/container";
import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";

import { VscCode as Code } from "react-icons/vsc";
import { VscServerProcess as Frontend } from "react-icons/vsc";
import { GiAlarmClock as Clock } from "react-icons/gi";
import { PiStackLight as Stack } from "react-icons/pi";

import Image from "next/image";
import { cubicBezier, m } from "framer-motion";

const ExperienceSection = () => {
  const MText = m(Text);
  const MImage = m(Image);

  return (
    <>
      <Container className="mb-44 relative w-full sm:px-0 px-0">
        {/* border left */}
        <m.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 4, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          viewport={{ once: true }}
          className="absolute left-0 top-0 h-full w-[1px] bg-foreground/50 origin-top z-10"
        />

        {/* title  */}
        <div className="pl-6">
          <MText
            initial={{ x: 15, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            viewport={{ once: true }}
            className="flex items-center mb-3 text-foreground/50 lg:text-[17px]"
            variant="p">
            <Stack className="mr-1 text-lg" /> Programming since 2020
          </MText>
          <MText
            initial={{ x: 15, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            viewport={{ once: true }}
            className="mb-10 text-foreground/90 lg:text-3xl max-w-sm font-medium"
            variant="h3">
            4 Years of experience, including both Backend and Frontend development
          </MText>
        </div>

        <Row className="relative grid place-items-center grid-cols-2">
          {/* border  */}
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            viewport={{ once: true }}
            className="absolute left-0 top-0 w-full h-[1px] bg-white/50 origin-left"
          />
          <Column
            items="start"
            justify="between"
            className="relative min-h-[200px] md:h-[1px] min-w-[1px] p-4
              md:flex-row bg-black/40 z-10">
            <div className="absolute left-5 -top-4 rounded-full p-1.5 border border-foreground/50 bg-background">
              <Frontend className="h-[26px] w-[26px]" />
            </div>
            <Column className="grow pt-4" items="start">
              <MText
                initial={{ x: 15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                viewport={{ once: true }}
                variant="h4">
                Front-end development
              </MText>
              <MText
                initial={{ x: 15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.25, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                viewport={{ once: true }}
                variant="p">
                Experienced with most major javascript frameworks, such as React, Svelte, Vue and meta
                frameworks like Next
              </MText>
            </Column>
            <MImage
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: cubicBezier(0.22, 1, 0.36, 1) }}
              viewport={{ once: true }}
              className="self-center md:self-start h-full mt-6 md:mt-2"
              width={230}
              height={120}
              src="/laptop.svg"
              alt="Frontend development"
            />
          </Column>
          <Column
            items="start"
            justify="between"
            className="relative min-h-[200px] md:h-[1px] min-w-[1px] p-4
              md:flex-row bg-black/40 z-10">
            {/* border  */}
            <m.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2, delay: 0.4, ease: cubicBezier(0.22, 1, 0.36, 1) }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 h-full w-[1px] bg-white/50 origin-top"
            />
            <div
              className="absolute left-5 -top-4 rounded-full p-2 border border-foreground/50 bg-background
            ">
              <Code className="h-6 w-6" />
            </div>
            <Column className="grow pt-4" items="start">
              <MText
                initial={{ x: 15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.35, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                viewport={{ once: true }}
                variant="h4">
                Back-end development
              </MText>
              <MText
                initial={{ x: 15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                viewport={{ once: true }}
                variant="p">
                Experienced with frameworks like Express and Nest and building Real-time apps with
                SocketIO
              </MText>
            </Column>
            <MImage
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
              viewport={{ once: true }}
              className="self-center md:self-start h-full mt-6 md:mt-2"
              width={230}
              height={120}
              src="/process.svg"
              alt="Backend development"
            />
          </Column>

          {/* 3  */}
          <Column
            items="start"
            justify="between"
            className="relative min-h-[200px] md:h-[1px] min-w-[1px] border-t border-t-ring rounded-md p-4
              md:flex-row bg-black/40 z-10 col-span-2 w-full">
            <div
              className="absolute left-5 -top-4 rounded-full p-2 border border-foreground/50 bg-background
            ">
              <Code className="h-6 w-6" />
            </div>
            <Column className="grow pt-4" items="start">
              <MText
                initial={{ x: 15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                viewport={{ once: true }}
                variant="h4">
                High quality code
              </MText>
              <MText
                initial={{ x: 15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                viewport={{ once: true }}
                className="max-w-2xl"
                variant="p">
                Familiar with the proper ways of writing code. The code returned will be clean and
                readable; Decent speed and bundle size will all be considered along the way.
              </MText>
            </Column>
            <MImage
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.35, ease: cubicBezier(0.22, 1, 0.36, 1) }}
              viewport={{ once: true }}
              className="self-center md:self-start mt-6 md:mt-2"
              width={240}
              height={180}
              src="/code.svg"
              alt="High quality code"
            />
          </Column>
        </Row>
      </Container>
    </>
  );
};

export default ExperienceSection;
