import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ImageAvatar as Component } from "./ImageAvatar";

export default {
  title: "UI/ImageAvatar",
  component: Component,
  parameters: {
    layout: "centered",
    viewMode: "story",
  },
} as ComponentMeta<typeof Component>;

export const ImageAvatar: ComponentStory<typeof Component> = (props) => {
  return <Component {...props} />;
};

ImageAvatar.args = {
  src: "https://cdn4.telegram-cdn.org/file/GSG98YPeYhPH42R0BlvQT7di6ha48LJI4lZwbQ7q7f_TYAC5FwRrEBTlyaVij-ylfflg4aU0R8AtL8UZmG9R6sX0S12R_zLTuEUlaV99qXZm_OcaFqdknYCbxb7-XuVCy7c7mPaWagdFuF_T2-fopi1dzsrvW6E6ff8qFhQqIrrvtBdq7jO5829aCEpSIHi9QqFuw6l1WuOWfoq1LjjV7kq2wSfo_uOlN4PP-hFPAL1wklwnTw4NPE-Mfu9gFd472JUN9e299UP2f2jeZnvst2qX0Go6fb81gewClahABP-veeqGrVBxVphfixV3KJulKdt0CCU7KhFM7e-Gd4-qug.jpg",
  size: 100,
};

ImageAvatar.storyName = "ImageAvatar";
