import { CSSProperties, FC, HTMLAttributes, memo } from "react";
import { useTheme } from "../../hooks/useTheme";
import { css } from "@linaria/core";
import { AppearanceProps } from "../../types";

const root = css`
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size);
  line-height: var(--font-size);

  &__apple {
    font-family: "ui-rounded", sans-serif;
    font-weight: 700;
  }

  &__material {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
`;

export interface InitialsAvatarProps
  extends HTMLAttributes<HTMLElement>,
    AppearanceProps {
  size?: number;
  userName: string;
  userId: number;
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
      userId,
      userName,
      theme: themeProp,
      className,
      style,
      ...restProps
    }) => {
      const theme = useTheme();
      const resolvedTheme = themeProp || theme;

      const bgIndex = userId % 7;

      const [color, topColor, bottomColor] = bgColors[bgIndex];
      const [firstName = "", lastName = ""] = userName.split(" ");

      let classNames = `${root} ${root}__${resolvedTheme}`;
      if (className) {
        classNames += ` ${className}`;
      }

      return (
        <div
          {...restProps}
          className={classNames}
          style={
            {
              ...style,
              width: size,
              height: size,
              background:
                resolvedTheme === "apple"
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
