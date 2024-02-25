import type { IconType } from "react-icons";

import Row from "@/components/ui/row";
import Column from "@/components/ui/column";
import Button from "@/components/ui/button";
import Text from "@/components/ui/text";

import Image from "next/image";

import { FiExternalLink as Link } from "react-icons/fi";

type Project = {
  name: string | JSX.Element;
  icon: IconType;
  description: string;
  image: string;
  repo: string;
};

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
            <div className="grid grid-cols-1 md:grid-cols-2">
              <ProjectThumbnail project={project} />
              <Column className="ml-6 items-end mb-36">
                <Text className="text-foreground/90" variant="h3">
                  {project.name}
                </Text>
                <Text className="mb-3 text-right" variant="p">
                  {project.description}
                </Text>
                <Row>
                  <Button
                    className="grow w-[240px] bg-foreground/90 hover:bg-foreground/70 text-black rounded-full"
                    href={project.repo}
                    openInNewTab>
                    View repository <Link className="mb-[3px] ml-1" />
                  </Button>
                </Row>
              </Column>
            </div>

            <Column className="left-0 top-0 ml-3">
              {/* icon */}
              <div className="rounded-full border border-ring w-fit p-1.5">
                <project.icon className="text-[26.5px] text-white" />
              </div>
              {/* line  */}
              <div className="w-[1px] h-full bg-ring" />
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
                className="stroke-ring rotate-[90deg] -mr-[0.5px] -translate-y-[0.5px]"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 0C2 40 30 50 52 50.5" strokeWidth="1" />
              </svg>

              {/* line  */}
              <div className="h-[1px] grow bg-ring" />
            </div>
            <div className="flex items-end">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                className="stroke-ring rotate-[-91deg] -ml-[1px]"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 0C2 42 30 50 52 50.5" strokeWidth="1" />
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
            <div className="rounded-full w-fit p-1.5 border border-ring">
              <project.icon className="text-[26.5px] text-white z-20" />
            </div>
            {/* line  */}
            <div className="w-[1px] h-full bg-ring" />
          </Column>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <Column className="mr-4 items-start mb-36">
              <Text className="text-foreground/90" variant="h3">
                {project.name}
              </Text>
              <Text className="mb-3" variant="p">
                {project.description}
              </Text>
              <Row>
                <Button
                  className="grow w-[240px] bg-foreground/90 hover:bg-foreground/70 text-black rounded-full"
                  variant="ghost"
                  href={project.repo}
                  openInNewTab>
                  View repository <Link className="mb-[3px] ml-1" />
                </Button>
              </Row>
            </Column>
            <ProjectThumbnail project={project} />
          </div>
        </Row>
        <Row items="start" justify="center" className="w-[calc(100%-75px)] h-[101px]">
          {/* curve  */}
          <div className="grow flex justify-end items-end">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              className="stroke-ring"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2 0C2 40 30 50 52 50.5" strokeWidth="1" />
            </svg>

            {/* line  */}
            <div className="h-[1px] grow bg-ring" />
          </div>
          <div className="flex items-start self-end">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              className="stroke-ring rotate-[180deg] -ml-[0.3px]"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2 0C2 42 30 50 52 50.5" strokeWidth="1" />
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
      className="rounded-lg opacity-80 row-start-2 row-end-2
      md:row-auto"
      src={project.image}
      alt={project.description}
      width={900}
      height={800}
    />
  );
}

export default Project;
