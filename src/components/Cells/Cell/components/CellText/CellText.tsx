import { CSSProperties, ReactNode } from "react";
import classNames from "classnames";

import { TextColorsType } from "types/text";

import { Badge } from "../../../../Cells/Cell/components/CellText/components/Badge/Badge";
import { Text } from "../../../../Text/Text";

import { useTheme } from "hooks/useTheme";

import { repeat } from "utils/common";

import styles from "./CellText.module.scss";

type CellTextProps = {
  className?: string;
  style?: CSSProperties;
  "data-testid"?: string;
  align?: "start" | "end" | "stretch" | "center";
  /**
   * Use this prop if you need to render Cell with only title,
   * but with height of Cell with title and description
   */
  doubledecker?: boolean;
  // TODO: audit codebase for the places with overflowing descriptions and add opposite prop
  multilineDescription?: boolean;
  /**
   * Use number when you need to render multiline title skeleton
   */
  multilineTitle?: boolean | number;
  disabled?: boolean;
  title?: ReactNode;
  description?: ReactNode;
  descriptionAppearance?: TextColorsType;
  inverted?: boolean;
  /**
   * @deprecated
   * use titleWeight='medium' instead
   */
  bold?: boolean;
  titleAppearance?: TextColorsType;
  titleWeight?: "medium" | "mono";
  /**
   * SmallButton is preferred
   */
  action?: ReactNode;
  badge?: ReactNode;
  badgeAppearance?: "accent" | "quaternary";
  skeleton?: boolean;
  skeletonTitleWidth?: CSSProperties["width"];
  skeletonDescriptionWidth?: CSSProperties["width"];
};

export const CellText = ({
  className,
  style,
  align = "start",
  doubledecker,
  multilineDescription = false,
  multilineTitle = true,
  disabled = false,
  ...props
}: CellTextProps) => {
  const { themeClassName } = useTheme(styles);

  const titleWeight = props.titleWeight || (props.bold ? "medium" : "regular");
  const titleAppearance = props.titleAppearance ?? "text";
  const descriptionAppearance = props.descriptionAppearance ?? "subtitleText";

  return (
    <div
      className={classNames(
        themeClassName("root"),
        "inverted" in props && props.inverted && styles.inverted,
        doubledecker && styles.doubledecker,
        "skeleton" in props && props.skeleton && styles.skeleton,
        styles[align],
        className,
      )}
      data-testid={props["data-testid"]}
      style={style}
    >
      {props.skeleton ? (
        <>
          <Text
            apple={{
              variant: "body",
              weight: titleWeight,
            }}
            material={{
              variant: "body",
              weight: titleWeight,
            }}
            skeleton
            skeletonWidth={props.skeletonTitleWidth ?? "50%"}
            className={themeClassName("title")}
          />
          {typeof multilineTitle === "number" &&
            multilineTitle > 1 &&
            repeat(
              () => (
                <Text
                  apple={{
                    variant: "body",
                    weight: titleWeight,
                  }}
                  material={{
                    variant: "body",
                    weight: titleWeight,
                  }}
                  skeleton
                  skeletonWidth={props.skeletonTitleWidth ?? "30%"}
                  className={themeClassName("title")}
                />
              ),
              multilineTitle,
            )}
          {props.description && (
            <Text
              apple={{
                variant: "subheadline2",
                weight: "regular",
              }}
              material={{
                variant: "subtitle1",
              }}
              skeleton
              skeletonWidth={props.skeletonDescriptionWidth ?? "35%"}
              className={themeClassName("description")}
            >
              {props.description}
            </Text>
          )}
        </>
      ) : (
        <>
          <Text
            apple={{
              variant: "body",
              weight: titleWeight,
              color: titleAppearance,
            }}
            material={{
              variant: "body",
              weight: titleWeight,
              color: titleAppearance,
            }}
            className={classNames(
              themeClassName("title"),
              multilineTitle && styles.multilineTitle,
              disabled && styles.disabled,
            )}
          >
            <span>{props.title}</span>
            {props.badge && (
              <Badge appearance={props.badgeAppearance}>{props.badge}</Badge>
            )}
          </Text>
          {props.description && (
            <Text
              apple={{
                variant: "subheadline2",
                weight: "regular",
                color: descriptionAppearance,
              }}
              material={{
                variant: "subtitle1",
                color: descriptionAppearance,
              }}
              className={classNames(
                themeClassName("description"),
                multilineDescription && styles.multilineDescription,
              )}
            >
              {props.description}
            </Text>
          )}
          {props.action && <div className={styles.action}>{props.action}</div>}
        </>
      )}
    </div>
  );
};
