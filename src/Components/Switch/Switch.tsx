import { ChangeEvent, FC, InputHTMLAttributes, memo } from "react";
import { css } from "@linaria/core";
import classNames from "classnames";
import { useTheme } from "../../hooks/useTheme";
import { AppearanceProps } from "../../types";
import WebApp from "@twa-dev/sdk";

const mark = css`
  position: relative;

  &::after {
    display: block;
    position: absolute;
    content: "";
    border-radius: 50%;
  }
`;

const root = css`
  input {
    display: none;
  }

  &[data-theme="apple"] {
    .${mark} {
      width: 51px;
      height: 31px;
      border-radius: 25.5px;
      background: #e9e9ea;
      transition: background-color 0.2s ease;

      &::after {
        width: 27px;
        height: 27px;
        top: 2px;
        left: 2px;
        box-shadow: 0 1px 2px 0 #0000001a;
        background: #fff;
        transition: transform 0.2s ease;
      }
    }

    input:checked ~ .${mark} {
      background: #34c759;

      &::after {
        transform: translateX(20px);
      }
    }
  }

  &[data-theme="material"] {
    .${mark} {
      width: 32px;
      height: 14px;
      border-radius: 7px;
      background: #d9d9d9;
      transition: background-color 0.2s ease;

      &::after {
        width: 16px;
        height: 16px;
        top: -1px;
        left: 0;
        box-shadow: 0 0 0 2px #d9d9d9;
        background: #fff;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
    }

    input:checked ~ .${mark} {
      background: #5aa7ea;

      &::after {
        box-shadow: 0 0 0 2px #5aa7ea;
        transform: translateX(16px);
      }
    }
  }
`;

const label = css`
  display: block;
`;

export interface SwitchProps
  extends InputHTMLAttributes<HTMLInputElement>,
    AppearanceProps {}

export const Switch: FC<SwitchProps> = memo<SwitchProps>(
  ({ className, style, theme, onChange, ...restProps }) => {
    theme = useTheme(theme);

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      WebApp.HapticFeedback.selectionChanged();
      onChange && onChange(e);
    };

    return (
      <div
        className={classNames(className, root)}
        data-theme={theme}
        style={style}
      >
        <label className={label}>
          <input type="checkbox" onChange={onChangeCallback} {...restProps} />
          <div className={mark} />
        </label>
      </div>
    );
  }
);

Switch.displayName = "Switch";