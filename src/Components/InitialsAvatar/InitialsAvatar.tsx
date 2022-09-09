import cx from "classnames";
import { CSSProperties, FC, memo } from "react";
import { useTheme } from "../../hooks/useTheme";
import { AppearanceProps, BaseComponentProps } from "../../types";
import classNames from "classnames";
import styles from "./InitialsAvatar.styles";

export interface InitialsAvatarProps
  extends BaseComponentProps,
    AppearanceProps {
  size?: number;
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
        <div
          {...restProps}
          className={cx(className, styles.root, styles[theme])}
          style={
            {
              ...style,
              width: size,
              height: size,
              background:
                theme === "apple"
                  ? `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`
                  : color,
              "--font-size": `${Math.round(size / 2.2)}px`,
            } as CSSProperties
          }
        >
          <div>
            {firstName && firstName.charAt(0).toUpperCase()}
            {lastName && lastName.charAt(0).toUpperCase()}
          </div>
        </div>
      );
    }
  );

InitialsAvatar.defaultProps = {
  size: 40,
};

InitialsAvatar.displayName = "InitialsAvatar";
