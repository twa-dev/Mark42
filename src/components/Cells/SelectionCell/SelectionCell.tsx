import {
  ChangeEvent,
  CSSProperties,
  LabelHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";
import classnames from "classnames";

import { TextColorsType } from "types/text";

import { Cell } from "../../Cells";
import { Checkmark } from "../../Checkmark/Checkmark";

import { useTheme } from "hooks/useTheme";

import styles from "./SelectionCell.module.scss";

type SelectionCellProps<T> = {
  value?: T;
  description?: ReactNode;
  descriptionAppearance?: TextColorsType;
  multilineDescription?: boolean;
  checked: boolean;
  children?: ReactNode;
  mode?: "checkbox" | "radio";
  checkmarkPlacement?: "start" | "end";
  start?: ReactNode;
  end?: ReactNode;
  className?: string;
  "data-testid"?: string;
  style?: CSSProperties;
  bold?: boolean;
} & (
  | ({
      // avoid passing click if we use wrapped label https://stackoverflow.com/questions/24501497/why-the-onclick-element-will-trigger-twice-for-label-element
      onChange: (value: T, e: ChangeEvent) => void;
      name: string;
    } & Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange">)
  | { onClick: MouseEventHandler<HTMLElement> }
);

function SelectionCell<T extends string>({
  value,
  children,
  description,
  descriptionAppearance,
  multilineDescription = false,
  checked,
  mode = "radio",
  start,
  end,
  className,
  style,
  checkmarkPlacement,
  bold = false,
  ...restProps
}: SelectionCellProps<T>): JSX.Element {
  const theme = useTheme();

  let resolvedCheckmarkPlacement;

  if (checkmarkPlacement) {
    resolvedCheckmarkPlacement = checkmarkPlacement;
  } else if (theme === "material" || mode === "checkbox") {
    resolvedCheckmarkPlacement = "start";
  } else {
    resolvedCheckmarkPlacement = "end";
  }

  const content = (
    <>
      <Cell
        tappable
        start={
          resolvedCheckmarkPlacement === "start" ? (
            <Cell.Part type={mode}>
              <Checkmark mode={mode} checked={checked} />
            </Cell.Part>
          ) : (
            start
          )
        }
        end={
          resolvedCheckmarkPlacement === "end" ? (
            <Cell.Part type={mode}>
              <Checkmark mode={mode} checked={checked} />
            </Cell.Part>
          ) : (
            end
          )
        }
      >
        <Cell.Text
          bold={bold}
          title={children}
          description={description}
          descriptionAppearance={descriptionAppearance}
          multilineDescription={multilineDescription}
        />
      </Cell>
    </>
  );

  if ("onChange" in restProps) {
    const { onChange, name, ...labelProps } = restProps;

    return (
      <label
        className={classnames(styles.root, className)}
        style={style}
        {...labelProps}
      >
        <input
          type={mode}
          name={name}
          value={value}
          onChange={(e) => onChange && value && onChange(value, e)}
          checked={checked}
          className={styles.input}
        />
        {content}
      </label>
    );
  }

  return (
    <span
      className={classnames(styles.root, className)}
      style={style}
      {...restProps}
    >
      {content}
    </span>
  );
}

export default SelectionCell;
