import { motion } from "framer-motion";
import { useEffect } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Project } from '../App';

import CV from '../assets/cv.pdf';
import signSVG from '../assets/signature.svg';
import ProjectCard from '../components/ProjectCard';
import styles from './Home.module.css';

interface Props{
    title: string;
    projects: Project[];
}

export default function Home({ title, projects } : Props) {

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <motion.div 
            key={title}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, x: -20}}
            transition={{ duration: 0.3, ease: "easeInOut" }}

        className={styles.home}>

            <nav>
                <h1>Gabriel Belcher.</h1>
                <div className={styles.links}>
                    <a href={CV} target="_blank">CV</a>
                    <a href="https://www.linkedin.com/in/gabrielbelcher/" target="_blank"><BsLinkedin className={styles.icon}/></a>
                    <a href="https://github.com/gabrielbelcher" target="_blank"><BsGithub className={styles.icon}/></a>
                </div>
            </nav>

            <div className={styles.heading}>
                <h1>a software developer</h1>
            </div>

            <div className={styles.projects}>
                {   
                    projects.map((project) => {
                        return(
                            <ProjectCard project={project}/>
                        )
                    })
                }
            </div>

            <img src={signSVG} alt="Hero" className={styles.signature} draggable="false"/>

        </motion.div>
    )
}