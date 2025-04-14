import React, { useEffect, useState } from "react";
import {
  getAllProjectLoading,
  getProjectListData,
  getAllProjectError,
  getAllProjectList,
} from "../../Redux/Slices/ProjectSlice";
import { useDispatch, useSelector } from "react-redux";
import ProjectModal from "../layout/ProjectModal";
import { Link } from "react-router-dom";
import { ProjectsShimmer } from "../Shimmers/ProjectsShimmer";

const Projects = () => {
    
    const [modalOpen, setModalOpen] = useState(false);
    const [projectImageUrl, setprojectImageUrl] = useState("");
  const dispatch = useDispatch();
  const projectList = useSelector(getAllProjectList);
  const projectLoading = useSelector(getAllProjectLoading);
  const projectError = useSelector(getAllProjectError);
  console.log(projectList);

  useEffect(() => {
    dispatch(getProjectListData());
  }, []);

  const openModal = (imageUrl) => {
    setprojectImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    projectLoading ? (<ProjectsShimmer/> ): projectError ? 
    ( <div className="auth-err"><p>No project found server error!</p></div> ) : (
       <section className="project-section">
       {modalOpen && (
       <ProjectModal imageUrl={projectImageUrl} onClose={closeModal} />
     )}
     <div className="project-title">
       <h2>Latest Work</h2>
     </div>
     {projectList && projectList.map((project) => (
       <div className="project-box" key={project._id}>
         <div className="project-img">
           <img src={project.projectIcon?.url} alt={project.title} 
           onClick={() => openModal(project.projectIcon?.url)} />
         </div>
         <div className="project-detail">
           <h3>{project.title}</h3>
           <span>({project.subTitle})</span>&nbsp; &nbsp;
           <span>{project.category}</span>
           <p>{project.description}</p>
           <button className="pro-det">
             <Link className="proLink" to={`/project/${project._id}`}>Project Details</Link>
           </button>
          
         </div>
       </div>
     ))}
   </section>
    )
  );
}


export default Projects;

