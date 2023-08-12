import styles from './ProjectMedia.module.css';

interface Props{
    mediaUrl: string;
}

export default function ProjectMedia({ mediaUrl } : Props) {
    return (
        <div className={styles.mediaWrapper}>
            <video src={mediaUrl} autoPlay loop muted></video>
        </div>
    )
}