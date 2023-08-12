import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import projectJSON from './assets/project-data.json';
import Layout from './components/Layout';
import Home from './routes/Home';
import Project from './routes/Project';

export interface Project{
    id: string;
    title: string;
    description: string;
    tech: string[];
    date: string;
    mediapath: string;
    titlegraphic?: string;
    url?: string;
	github?: string;
}

function App() {
    const [ projects, setProjects ]  = useState<Project[]>(projectJSON);

	useEffect(() => {
		setProjects(projectJSON);
	}, []);


	const router = createBrowserRouter([ // Use createBrowserRouter when not using github pages
		{
			element: <Layout />,
			errorElement: <h1>error :'(</h1>,
			children: [
				{
					path: '/',
					element: <Home 
								title="Gabriel Belcher" 
								projects={projects}
							/>,
				},
				{
					path: '/:projectID',
					element: <Project 
								title="Gabriel Belcher" 
								projects={projects}
							/>,
				},
			]
		}
	]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
