import { useState } from 'react';

import styles from './ProjectMedia.module.css';

interface Props{
    mediaUrl: string;
}

export default function ProjectMedia({ mediaUrl } : Props) {
    const [videoLoaded, setVideoLoaded] = useState(false);


    return (
        <div className={styles.mediaWrapper}>
            <video 
                className={`${videoLoaded && styles.loaded}`}
                src={mediaUrl} 
                autoPlay loop muted
                onLoadedData={() => {
                    setVideoLoaded(true);
                }}
            />
        </div>
    )
}