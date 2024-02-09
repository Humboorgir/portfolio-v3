import type { IconType } from "react-icons";

import Row from "@/components/ui/row";
import Column from "@/components/ui/column";
import Text from "@/components/ui/text";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "@/components/ui/button";

type Project = { name: string | JSX.Element; icon: IconType; description: string; image: string };

type Props = {
  project: Project;
  isEven: boolean;
};

const Project = ({ project, isEven }: Props) => {
  // different code is returned for odd and even elements
  // Not the best approach but this resulted with the most readable code
  if (isEven)
    return (
      <>
        <Column>
          <Row className="items-stretch px-5 h-fit min-h-[1px]" items="start">
            <ProjectThumbnail project={project} />
            <Column className="ml-6 items-end mb-36">
              <Text className="text-foreground/90" variant="h3">
                {project.name}
              </Text>
              <Text variant="p">{project.description}</Text>
            </Column>

            <Column className="left-0 top-0 ml-3">
              {/* icon */}
              <div className="bg-primary/40 rounded-full w-fit p-1.5">
                <project.icon className="text-[26.5px] text-white" />
              </div>
              {/* line  */}
              <div className="w-[3px] h-full bg-gradient-to-b from-primary/20 to-primary/80" />
            </Column>
          </Row>
          <Row items="start" justify="center" className="w-[calc(100%-75px)] h-[101px]">
            {/* curve  */}
            <div className="grow flex justify-end items-start self-end">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                className="stroke-primary/80 rotate-[90deg] -mr-[0.5px] -translate-y-[0.5px]"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 0C2 40 30 50 52 50.5" stroke-width="3" />
              </svg>

              {/* line  */}
              <div className="h-[3px] grow bg-primary/80" />
            </div>
            <div className="grow flex items-end">
              {/* line  */}
              <div
                className="h-[3px] grow bg-gradient-to-r 
        from-primary/80 via-primary/30 to-primary/80"
              />
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                className="stroke-primary/80 rotate-[-91deg] -ml-[1px]"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 0C2 42 30 50 52 50.5" stroke-width="3" />
              </svg>
            </div>
          </Row>
        </Column>
      </>
    );

  return (
    <>
      <Column>
        <Row className="items-stretch px-5 h-fit min-h-[1px]" items="start">
          <Column className="left-0 top-0 mr-3">
            {/* icon */}
            <div className="rounded-full w-fit p-1.5 bg-primary/40">
              <project.icon className="text-[26.5px] text-white z-20" />
            </div>
            {/* line  */}
            <div className="w-[3px] h-full bg-gradient-to-b from-primary/20 to-primary/80" />
          </Column>

          <Column className="mr-4 items-start mb-36">
            <Text className="text-foreground/90" variant="h3">
              {project.name}
            </Text>
            <Text variant="p">{project.description}</Text>
          </Column>
          <ProjectThumbnail project={project} />
        </Row>
        <Row items="start" justify="center" className="w-[calc(100%-75px)] h-[101px]">
          {/* curve  */}
          <div className="grow flex justify-end items-end">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              className="stroke-primary/80"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2 0C2 40 30 50 52 50.5" stroke-width="3" />
            </svg>

            {/* line  */}
            <div className="h-[3px] grow bg-primary/80" />
          </div>
          <div className="grow flex items-start self-end">
            {/* line  */}
            <div
              className="h-[3px] grow bg-gradient-to-r 
        from-primary/80 via-primary/30 to-primary/80"
            />
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              className="stroke-primary/80 rotate-[180deg] -ml-[0.3px]"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2 0C2 42 30 50 52 50.5" stroke-width="3" />
            </svg>
          </div>
        </Row>
      </Column>
    </>
  );
};

function ProjectThumbnail({ project }: { project: Project }) {
  return (
    <Image
      className="h-full w-[50%] rounded-lg opacity-60"
      src={project.image}
      alt={project.description}
      width={900}
      height={800}
    />
  );
}

export default Project;
