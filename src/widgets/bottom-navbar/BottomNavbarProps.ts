import { ComponentType } from "react";

export type BottomNavbarItemProps = {
  to: string;
  label: string;
  Icon: ComponentType<{ isActive: boolean }>;
  isActive?: boolean;
};