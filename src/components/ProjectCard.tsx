import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { Project } from '../App';
import styles from './ProjectCard.module.css';

interface Props{
    project: Project;
}

export default function ProjectCard({ project } : Props) {
    const redirect = useNavigate();
    
    return (
        <motion.button className={styles.card} onClick={() => {redirect(`/${project.id}`)}}>
            {project.titlegraphic 
                ? 
                    <img src={project.titlegraphic} alt={project.title} />
                : 
                    <h1>{project.title}</h1> 
            }
            <h3>{project.date}</h3>
        </motion.button>
    )
}