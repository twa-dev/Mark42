declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.scss" {
  const content: unknown;
  export default content;
}

declare module "*.svg" {
  import { FC, SVGProps } from "react";
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
}

declare module "*.json" {
  const content: unknown;
  export default content;
}
