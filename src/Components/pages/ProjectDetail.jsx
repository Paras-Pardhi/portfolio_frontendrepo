import React, { useEffect, useState, useContext, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProjectDetailList,
  getProjectDetailLoading,
  getProjectDetailError,
  getProjectDetails,
  deleteProject,
  updateProject,
  getProjectUpdateStatus,
  resetProjectUpdateStatus,
} from "../../Redux/Slices/ProjectDetailSlice";
import { useParams, useNavigate } from "react-router-dom";
import ProjectModal from "../layout/ProjectModal";
import { AuthContext } from "../../main";
import EditProjectModal from "../layout/EditProjectModal";
import ProjectDetailShimmer from "../Shimmers/ProjectDetailShimmer";

const ProjectDetail = () => {
  const { user } = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [projectImageUrl, setprojectImageUrl] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector(getProjectDetailList);
  const projectLoading = useSelector(getProjectDetailLoading);
  const projectError = useSelector(getProjectDetailError);
  const projectUpdateStatus = useSelector(getProjectUpdateStatus);
  const modalRef = useRef(null);
  const navigateTo = useNavigate();
  // console.log(project);

  useEffect(() => {
    if (id) {
      dispatch(getProjectDetails(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (projectUpdateStatus === "succeeded") {
      navigateTo(`/project/${id}`);
      dispatch(resetProjectUpdateStatus());
    }
  }, [projectUpdateStatus, navigateTo, dispatch, id]);

  const openEditModal = () => {
    setEditModalOpen(true);
    setTimeout(() => {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleSave = (formData) => {
    dispatch(updateProject({ id, projectData: formData }));
    closeEditModal();
  };

  const openModal = (imageUrl) => {
    setprojectImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!project || !project.projectIcon)
    return <div>No project details available</div>;

  const {
    _id,
    title,
    subTitle,
    category,
    description,
    technology,
    projectIcon,
  } = project;

  const handleDeleteProject = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      dispatch(deleteProject(id));
    }
  };

  let parsedTechnology = [];
  try {
    parsedTechnology = JSON.parse(technology);
  } catch (error) {
    console.error("Error parsing highlights:", error);
  }

  return projectLoading ? (
    <ProjectDetailShimmer />
  ) : projectError ? (
    <div className="auth-err">
      <p>Error: {projectError}</p>
    </div>
  ) : (
    <section className="project-section">
      {modalOpen && (
        <ProjectModal imageUrl={projectImageUrl} onClose={closeModal} />
      )}
      {editModalOpen && (
        <EditProjectModal
          project={project}
          isOpen={editModalOpen}
          onClose={closeEditModal}
          onSave={handleSave}
          ref={modalRef}
        />
      )}
      <span className="back-button" onClick={() => history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="project-name">
        <h2>{title}</h2>
      </div>
      <div className="project-box">
        <div className="project-img">
          <img
            src={projectIcon.url}
            alt={title}
            onClick={() => openModal(projectIcon.url)}
          />
        </div>
        <div className="project-detail">
          {/* <h3>{title}</h3> */}
          <span>({subTitle})</span>&nbsp; &nbsp;
          <span>{category}</span>
          <p>{description}</p>
          <div className="tech-used">
            {parsedTechnology &&
              parsedTechnology.map((tech, i) => <span key={i}>{tech}</span>)}
          </div>
          <div className="app-visit-link">
            <a 
            href="https://hirenetjob.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
             >
              View Application</a>
      </div>
          {user && user.role === "admin" ? (
            <div className="edit-del-btn">
              <button onClick={handleDeleteProject} className="delete_btn">
                Delete
              </button>
              <button onClick={openEditModal} className="edit_btn">
                Edit
              </button>
            </div>
          ) : (
            <></>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
