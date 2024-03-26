import React, { CSSProperties } from "react"
import styles from "./grid.module.scss"
import { SizeGridEnum, SizeGridType } from "../../types/ui.types"


type GridProps = { children: React.ReactNode, typeClass?: SizeGridType, otherClass?: string }


export default function Grid({ children, typeClass = SizeGridEnum.container, otherClass = '' }: GridProps) {
  return <div className={`${styles[typeClass]} ${styles[otherClass]}`}>{children}</div >
}