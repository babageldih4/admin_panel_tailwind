import { ReactNode } from "react";

export interface singleImage {
  href: string;
  imgSrc: string;
}

export interface settingsMenuItemType {
  title: string;
  path: string;
  icon: ReactNode;
}

export interface MenuItem {
  title: string;
  path: string;
  startIcon: ReactNode;
  endIcon?: JSX.Element;
  dropdown?: settingsMenuItemType[];
}
export interface profileMenuType {
  title: string;
  icon: ReactNode;
}

export interface InputIconProps {
  icon?: ReactNode;
  placeholder: string;
  type: string;
}
