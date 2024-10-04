import { ReactNode } from "react";
import classNames from "classnames";

import { ButtonCell, Cell } from "../Cells";
import { Spinner } from "../Spinner/Spinner";

import { useTheme } from "hooks/useTheme";

import { ReactComponent as InfoCircleSVG } from "images/info_circle_fill.svg";
import { ReactComponent as WarningCircleSVG } from "images/warning_circle.svg";

import styles from "./ActionBanner.module.scss";

const BANNER_ICONS = {
  warning: <WarningCircleSVG />,
  infoCircle: <InfoCircleSVG />,
} as const;

type Props = {
  icon?: keyof typeof BANNER_ICONS;
  iconAppearance?: "subtitle" | "destructive";
  title: ReactNode;
  text: ReactNode;
  buttonText: ReactNode;
  loading?: boolean;
  onButtonClick: () => void;
};

export const ActionBanner = ({
  icon,
  iconAppearance = "destructive",
  title,
  text,
  buttonText,
  loading = false,
  onButtonClick,
}: Props) => {
  const theme = useTheme();
  return (
    <Cell.List>
      <Cell>
        <Cell.Banner
          className={classNames(styles.cellBanner, icon && styles.withIcon)}
          title={
            <div
              className={classNames(
                styles.title,
                icon && styles[iconAppearance],
              )}
            >
              {icon && BANNER_ICONS[icon]}
              {title}
            </div>
          }
          text={text}
        />
      </Cell>
      <ButtonCell
        onClick={onButtonClick}
        end={
          loading && (
            <Cell.Part type="avatar">
              <Spinner
                color={
                  theme === "apple"
                    ? "var(--tg-theme-section-header-text-color)"
                    : "var(--tg-theme-accent-text-color)"
                }
              />
            </Cell.Part>
          )
        }
      >
        {buttonText}
      </ButtonCell>
    </Cell.List>
  );
};
