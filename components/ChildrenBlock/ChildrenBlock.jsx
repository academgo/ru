import React from 'react'
import styles from './ChildrenBlock.module.scss'

export const ChildrenBlock = ({ children }) => {
  return (
    <div className={styles.childrenBlock}>{children}</div>
  )
}
