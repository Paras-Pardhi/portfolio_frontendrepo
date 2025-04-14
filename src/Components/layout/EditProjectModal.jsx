import React, { useState, forwardRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const EditProjectModal = forwardRef(({ project, isOpen, onClose, onSave }, ref) => {
  const [formData, setFormData] = useState({
    title: project.title,
    subTitle: project.subTitle,
    category: project.category,
    description: project.description,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <>
     <div ref={ref}  className="project_edit page">
       <div className="container">
         <p>Edit Project</p>
         <form onSubmit={handleSubmit}>
           <div className="form-container">
             <div className="wrapper-one">
               <div className="input-tag">
                 <label htmlFor="title">Title : </label>
                 <div>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Project Title"
                  />
                </div>
              </div>
              <div className="input-tag">
                <label htmlFor="subtitle">Sub-Title : </label>
                <div>
                  <input
                    type="text"
                    id="subtitle"
                    name="subTitle"
                    value={formData.subTitle}
                    onChange={handleChange}
                    placeholder="Sub-Title"
                  />
                </div>
              </div>

              <div className="input-tag">
                <label htmlFor="category">Category : </label>
                <div>
                  <select
                    id="category"
                    value={formData.category}
                    name="category"
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option value="Frontend Web Development">
                      Frontend Web Development
                    </option>
                    <option value="Frontend Web Development">
                      Backend Web Development
                    </option>
                    <option value="MERN Stack Development">
                      MERN STACK Development
                    </option>
                    <option value="MEAN Stack Development">
                      MEAN STACK Development
                    </option>
                    <option value="MEVN Stack Development">
                      MEVN STACK Development
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="wrapper-two">
              <div className="input-tag text-area">
                <label htmlFor="description">Description : </label>
                <div>
                  <textarea
                    rows="10"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Project Description"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-three">
            <button className="cross-btn" onClick={onClose}><RxCross2 /></button>
          <button className="check-btn" type="submit"><FaCheck /></button>
          </div>
          
        </form>
      </div>
    </div>
  </>
  );
});

export default EditProjectModal;
