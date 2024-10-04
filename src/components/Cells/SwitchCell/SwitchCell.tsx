import { omit } from "lodash-es";

import { Switch } from "../../Switch/Switch";

import { useTheme } from "hooks/useTheme";

import { Cell, CellProps } from "../Cell/Cell";

type SwitchCellProps = Omit<CellProps, "onChange" | "onClick" | "end"> & {
  checked: boolean;
  onChange: (value: boolean) => void;
};

export default function SwitchCell({
  checked,
  onChange,
  children,
  ...rest
}: SwitchCellProps) {
  const theme = useTheme();
  const isMaterial = theme === "material";

  return (
    <Cell
      {...omit(rest, ["data-testid"])}
      tappable={isMaterial}
      Component={isMaterial ? "label" : "span"}
      end={
        <Cell.Part type="switch">
          <Switch
            data-testid={rest["data-testid"]}
            checked={checked}
            onChange={(e) => {
              onChange(e.target.checked);
            }}
            Component={isMaterial ? "span" : "label"}
          />
        </Cell.Part>
      }
    >
      {children}
    </Cell>
  );
}
