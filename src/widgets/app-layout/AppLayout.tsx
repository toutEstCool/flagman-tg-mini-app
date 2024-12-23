'use client'

import { AppLayoutProps } from "./AppLayoutProps"

export const AppLayout = (props: AppLayoutProps) => {
  const { children, className, style, maxWidth, padding } = props

  return <div className={`, ${className}`} style={{ maxWidth: `${maxWidth}`, padding: `${padding}px`, margin: '0 auto', paddingTop: '0', paddingBottom: '0', ...style }}>{children}</div>
}