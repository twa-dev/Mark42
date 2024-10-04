import { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';

import { TelegramColorIds } from 'types/utility';

import styles from './RoundedIcon.module.scss';

const ICON_SIZES_BY_AVATAR_SIZE: Record<number, number> = {
  24: 20,
  32: 22,
  40: 28,
  46: 28,
} as const;

export const RoundedIcon = ({
  backgroundColor,
  iconColor = '#fff',
  iconOpacity = 1,
  size = 40,
  iconSize,
  children,
  className,
  style,
}: {
  iconSize?: number;
  iconOpacity?: number;
  size?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /**
   * Accepts either key from the Telegram [ThemeParams](https://core.telegram.org/bots/webapps#themeparams) (button, link, text) or arbitrary color string (red, #0f0, var(--some-var))
   */
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  backgroundColor?: TelegramColorIds | string;
  /**
   * Accepts arbitrary color string (red, #0f0, var(--some-var))
   */
  iconColor?: string;
}) => {
  const resolvedIconSize =
    iconSize ||
    (size in ICON_SIZES_BY_AVATAR_SIZE && ICON_SIZES_BY_AVATAR_SIZE[size]) ||
    28;

  const isTGBackgroundColor = backgroundColor && backgroundColor in styles;

  return (
    <div
      className={classNames(
        styles.root,
        isTGBackgroundColor && styles[backgroundColor],
        className,
      )}
      style={{
        ...style,
        color: iconColor,
        background: !isTGBackgroundColor ? backgroundColor : undefined,
        width: size,
        height: size,
      }}
    >
      <div
        style={{
          width: resolvedIconSize,
          height: resolvedIconSize,
          opacity: iconOpacity,
        }}
      >
        {children}
      </div>
    </div>
  );
};
