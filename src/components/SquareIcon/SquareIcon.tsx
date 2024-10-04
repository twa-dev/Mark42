import { CSSProperties, FC, SVGProps } from "react";
import classNames from "classnames";

import { useTheme } from "hooks/useTheme";

import { ReactComponent as AccountIcon } from "./icons/account.svg";
import { ReactComponent as AnnouncementsIcon } from "./icons/announcements.svg";
import { ReactComponent as CardIcon } from "./icons/card.svg";
import { ReactComponent as EducationIcon } from "./icons/education.svg";
import { ReactComponent as ExpandIcon } from "./icons/expand.svg";
import { ReactComponent as FaceIdIcon } from "./icons/face_id.svg";
import { ReactComponent as FaqIcon } from "./icons/faq.svg";
import { ReactComponent as FiatCurrencyIcon } from "./icons/fiat_currency.svg";
import { ReactComponent as FingerprintIcon } from "./icons/fingerprint.svg";
import { ReactComponent as KYCIcon } from "./icons/kyc.svg";
import { ReactComponent as LanguageIcon } from "./icons/language.svg";
import { ReactComponent as NewsIcon } from "./icons/news.svg";
import { ReactComponent as NotificationsIcon } from "./icons/notifications.svg";
import { ReactComponent as PassportIcon } from "./icons/passport.svg";
import { ReactComponent as PrivacyIcon } from "./icons/privacy.svg";
import { ReactComponent as RecoveryPhraseIcon } from "./icons/recovery_phrase.svg";
import { ReactComponent as SupportIcon } from "./icons/support.svg";
import { ReactComponent as SurveysIcon } from "./icons/surveys.svg";
import { ReactComponent as TONSpaceIcon } from "./icons/ton_space.svg";
import { ReactComponent as TouchIdIcon } from "./icons/touch_id.svg";
import { ReactComponent as TradesIcon } from "./icons/trades.svg";

import styles from "./SquareIcon.module.scss";

type Icon =
  | "tonSpace"
  | "privacy"
  | "kyc"
  | "language"
  | "fiatCurrency"
  | "expand"
  | "support"
  | "faq"
  | "recoveryPhrase"
  | "news"
  | "account"
  | "passport"
  | "notifications"
  | "trades"
  | "card"
  | "faceId"
  | "touchId"
  | "fingerprint"
  | "announcements"
  | "education"
  | "surveys";

const Icons: Record<Icon, FC<SVGProps<SVGSVGElement>>> = {
  tonSpace: TONSpaceIcon,
  privacy: PrivacyIcon,
  kyc: KYCIcon,
  language: LanguageIcon,
  fiatCurrency: FiatCurrencyIcon,
  expand: ExpandIcon,
  support: SupportIcon,
  faq: FaqIcon,
  recoveryPhrase: RecoveryPhraseIcon,
  news: NewsIcon,
  account: AccountIcon,
  passport: PassportIcon,
  notifications: NotificationsIcon,
  trades: TradesIcon,
  card: CardIcon,
  faceId: FaceIdIcon,
  touchId: TouchIdIcon,
  fingerprint: FingerprintIcon,
  announcements: AnnouncementsIcon,
  education: EducationIcon,
  surveys: SurveysIcon,
};

type ThemeBasedIconColor = { material: string; apple: string };

const iconColors: Record<Icon, string | ThemeBasedIconColor> = {
  tonSpace: "#000",
  privacy: "#8E8E93",
  kyc: "#8E8E93",
  language: "#AF52DE",
  fiatCurrency: "#8E8E93",
  expand: { material: "#50A8EB", apple: "#007AFF" },
  support: "#FF9500",
  faq: "#32ADE6",
  recoveryPhrase: { apple: "#007AFF", material: "#1C93E3" },
  news: "#FFCC00",
  account: { material: "#50A8EB", apple: "#007AFF" },
  passport: { material: "#50A8EB", apple: "#007AFF" },
  notifications: "#FF3B30",
  trades: "#30B0C7",
  card: { material: "#50A8EB", apple: "#007AFF" },
  faceId: "#34C759",
  touchId: "#FF2D55",
  fingerprint: "#8E8E93",
  announcements: "#32ADE6",
  education: "#FF9500",
  surveys: "#AF52DE",
};

export const SquareIcon = ({
  icon,
  className,
  style,
}: {
  icon?: Icon;
  skeleton?: boolean;
  className?: string;
  style?: CSSProperties;
}) => {
  const { themeClassName, theme } = useTheme(styles);

  if (icon) {
    const Icon = Icons[icon];
    const background =
      typeof iconColors[icon] === "string"
        ? (iconColors[icon] as string)
        : (iconColors[icon] as ThemeBasedIconColor)[theme];

    return (
      <div
        style={{ ...style, background }}
        className={classNames(themeClassName("root"), className)}
      >
        <Icon />
      </div>
    );
  } else {
    return (
      <div
        style={style}
        className={classNames(
          themeClassName("root"),
          styles.skeleton,
          className,
        )}
      />
    );
  }
};
