import { CSSProperties, ReactNode } from "react";

export interface AppLayoutProps {
  children: ReactNode
  className?: string
  maxWidth?: string
  padding?: string
  style?: CSSProperties
}