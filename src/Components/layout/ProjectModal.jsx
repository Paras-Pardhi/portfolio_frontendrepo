import React from "react";

const ProjectModal = ({ imageUrl, onClose }) => {
  return (
    <div className="project-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="projectImg" />
      </div>
    </div>
  );
};

export default ProjectModal;