import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import styles from './Layout.module.css';




export default function Layout() {
    const location = useLocation();
    const element = useOutlet();

    return (
        <div className={styles.frame}>
            <AnimatePresence mode="wait">
                {element && React.cloneElement(element, {key: location.pathname})}
            </AnimatePresence>
        </div>
    )
}

