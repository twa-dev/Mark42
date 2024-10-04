import { CSSProperties, ReactNode } from "react";

import { Text } from "../Text/Text";

const SectionDescription = ({
  children,
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) => {
  return (
    <Text
      apple={{ variant: "footnote", color: "subtitleText" }}
      material={{
        variant: "subtitle2",
        weight: "regular",
        color: "subtitleText",
      }}
      className={className}
      style={style}
    >
      {children}
    </Text>
  );
};

export default SectionDescription;
