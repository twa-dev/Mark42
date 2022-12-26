import cx from "classnames";
import { FC, memo } from "react";
import { useTheme } from "../../hooks/useTheme";
import styles from "./InitialsAvatar.styles";
import { Avatar, AvatarProps } from "../Avatar";

export interface InitialsAvatarProps extends AvatarProps {
  entityName: string;
  entityId: number;
}

const bgColors = [
  ["#e17076", "#ff885e", "#ff516a"], // red
  ["#faa774", "#ffcd6a", "#ffa85c"], // orange
  ["#a695e7", "#82b1ff", "#665fff"], // purple
  ["#7bc862", "#a0de7e", "#54cb68"], // green
  ["#6ec9cb", "#53edd6", "#28c9b7"], // cyan
  ["#65aadd", "#72d5fd", "#2a9ef1"], // blue
  ["#ee7aae", "#e0a2f3", "#d669ed"], // pink
];

export const InitialsAvatar: FC<InitialsAvatarProps> =
  memo<InitialsAvatarProps>(
    ({
      size = 40,
      entityId,
      entityName,
      theme,
      className,
      style,
      ...restProps
    }) => {
      theme = useTheme(theme);

      const bgIndex = entityId % 7;

      const [color, topColor, bottomColor] = bgColors[bgIndex];
      const [firstName = "", lastName = ""] = entityName.split(" ");

      return (
        <Avatar
          {...restProps}
          size={size}
          className={cx(className, styles.root, styles[theme])}
          style={{
            ...style,
            background:
              theme === "apple"
                ? `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`
                : color,
            fontSize: Math.round(size / 2.2),
          }}
        >
          <div>
            {firstName && firstName.charAt(0).toUpperCase()}
            {lastName && lastName.charAt(0).toUpperCase()}
          </div>
        </Avatar>
      );
    }
  );

InitialsAvatar.defaultProps = {
  size: 40,
};

InitialsAvatar.displayName = "InitialsAvatar";
