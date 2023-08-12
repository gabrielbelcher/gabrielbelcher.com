import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsGithub, BsGlobe } from 'react-icons/bs';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { Project } from "../App";


import ProjectMedia from "../components/ProjectMedia";
import styles from './Project.module.css';

interface Props{
    title: string;
    projects: Project[];
}

export default function Project({ title, projects } : Props) {
    const { projectID } = useParams<{ projectID: string }>();
    const [ project, setProject ] = useState<Project| undefined>(undefined);

    const redirect = useNavigate();

    useEffect(() => {
        if(projectID && projectID.length > 1){
            setProject(projects.find((p) => p.id === projectID));
        }
        else{
            <h1>Invalid project ID</h1>
        }
    }, [projects, projectID]);

    useEffect(() => {
        document.title = project?.title + " | " + title || title;
    }, [title, project]);

    return (
        project &&
        <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 20}}
            transition={{ duration: 0.3, ease: "easeInOut"}}
            
            className={styles.projectWrapper}
        >
            <a onClick={() => {redirect(`/`)}} className={styles.backArrow}>
                <FiArrowLeft />
            </a>

            <ProjectMedia mediaUrl={project.mediapath} />
            
            <div className={styles.descriptionWrapper}>
                <motion.div 
                    initial={{opacity: 0, x: 40}}
                    animate={{opacity: 1, x: 0, transition: {delay: 0.1,ease: "easeInOut"}}}
                    exit={{opacity: 0, x: 100}}
                    transition={{ duration: 0.3, ease: "easeInOut"}}

                    className={styles.title}>
                    <a href={project.url || project.github} target="_blank">
                        {project.titlegraphic 
                            ? 
                                <img src={project.titlegraphic} alt={project.title} />
                            : 
                                <h1>{project.title}</h1> 
                        }
                        <FiArrowUpRight />
                    </a>
                </motion.div>

                <div className={styles.description}>
                    <div className={styles.descriptionLeft}>
                        <div className={styles.info}>
                            <h2>{project.date}</h2>
                            {
                                project.tech.map((item) => {
                                    return <p>{item}</p>
                                })
                            }
                        </div>

                        <div className={styles.links}>
                            {project.url && <a href={project.url} target="_blank"><BsGlobe /> Website</a>}
                            {project.github && <a href={project.github} target="_blank"><BsGithub /> GitHub</a>}
                        </div>
                    </div>
                    <div className={styles.descriptionRight}>
                        <p className={styles.descriptionText}>{project.description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}