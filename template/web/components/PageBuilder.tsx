import { FunctionComponent } from "react";
import { Sections } from "../typings";
import Hero from "./sections/Hero";
import Blog from "./sections/Blog";

interface IPageBuilderProps {
  sections: Sections[];
}

export const PageBuilder: FunctionComponent<IPageBuilderProps> = ({
  sections,
}) => {
  // Register your sections here to make available to the pagebuilder
  const componentMap = {
    hero: Hero,
    blog: Blog,
  };

  return (
    <div>
      {sections.map((section, index) => {
        const VariableComponent =
          componentMap[section._type as keyof typeof componentMap];
        return <VariableComponent {...section} />;
      })}
    </div>
  );
};
