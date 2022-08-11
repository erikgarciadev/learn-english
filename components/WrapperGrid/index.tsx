import { ReactNode } from 'react'
import styles from './WrapperGrid.module.scss'

const WrapperGrid = ({children}: {
    children : ReactNode
}) => { 
    return (
        <div className={styles.wrapperGrid}>
           {
                children
           }
        </div>
    )
}

export default WrapperGrid