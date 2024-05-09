import type { IconType } from "react-icons";

import Row from "@/components/ui/row";
import Column from "@/components/ui/column";
import Button from "@/components/ui/button";
import Text from "@/components/ui/text";

import Image from "next/image";

import { FiExternalLink as Link } from "react-icons/fi";
import { cn } from "@/lib/utils";

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
      <Row className="relative z-10 px-5 items-stretch h-fit min-h-[2px]" items="start">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-32">
          <Column className="relative mr-4 items-start mb-36">
            <div className="absolute left-10 right-10 top-10 bottom-10 bg-blue-400/20 blur-[90px]" />
            <Text className="text-foreground/90 mb-2" variant="h3">
              {project.name}
            </Text>
            <Text className="mb-4" variant="p">
              {project.description}
            </Text>
            <Row>
              <Button
                className="relative grow w-[240px] rounded-xl bg-gradient-to-br from-blue-700 to-blue-900"
                href={project.repo}
                variant="ghost"
                openInNewTab>
                View repository <Link className="mb-[3px] ml-1" />
              </Button>
            </Row>
          </Column>
          <ProjectThumbnail isEven={isEven} project={project} />
        </div>
      </Row>
    );

  return (
    <Row className="relative z-10 px-5 items-stretch h-fit min-h-[2px]" items="start">
      <div className="relative grid grid-cols-1 md:grid-cols-2 mb-32">
        <div className="absolute left-16 right-16 top-16 bottom-16 bg-blue-400/20 blur-[110px]" />
        <ProjectThumbnail isEven={isEven} project={project} />
        <Column items="start" className="ml-6 mb-36">
          <Text className="text-foreground/90 mb-2" variant="h3">
            {project.name}
          </Text>
          <Text className="mb-4" variant="p">
            {project.description}
          </Text>
          <Row>
            <Button
              className="relative grow w-[240px] rounded-xl bg-gradient-to-br from-blue-700 to-blue-900"
              href={project.repo}
              variant="ghost"
              openInNewTab>
              View repository <Link className="mb-[3px] ml-1" />
            </Button>
          </Row>
        </Column>
      </div>
    </Row>
  );
};

function ProjectThumbnail({ project, isEven }: { project: Project; isEven: boolean }) {
  return (
    <div
      className="relative border-2 p-2.5 rounded-xl border-slate-200/20 grid place-items-center opacity-80 row-start-2 row-end-2
    md:row-auto md:h-fit bg-background">
      <Image
        className="rounded-lg border border-slate-200/10"
        src={project.image}
        alt={project.description}
        width={900}
        height={800}
      />
    </div>
  );
}

export default Project;
