import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField, postProjectData } from "../../Redux/Slices/PostProjectSlice";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../main";
import toast from "react-hot-toast";

const PostProject = () => {
  const { isAuthorized, user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { title, subTitle, category, description,technology, status, error } = useSelector(
    (state) => state.postProject
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setField({ field: name, value }));
  };


  const handleHighlightChange = (index, value) => {
    const newTechnology = [...technology];
    newTechnology[index] = value;
    dispatch(setField({ field: "technology", value: newTechnology }));
  };

  const handleAddHighlight = () => {
    dispatch(setField({ field: "technology", value: [...technology, ""] }));
  };

  const handleRemoveHighlight = (index) => {
    const newTechnology = technology.filter((_, i) => i !== index);
    dispatch(setField({ field: "technology", value: newTechnology }));
  };

  const [projectIcon, setProjectIcon] = useState(null);
  const handleFileChange = (e) => {
    const projectIcon = e.target.files[0];
    setProjectIcon(projectIcon);
  };

  const handlePost = (e) => {
    e.preventDefault();
    dispatch(
      postProjectData({ title, subTitle, category,technology, description, projectIcon })
    );
    console.log(projectIcon);
  };

  const navigateTo = useNavigate();
  if (!isAuthorized || ( user.role === "normal")) {
    navigateTo("/");
    return null;
  }

  return (
    <>
      <div className="job_post page">
        <div className="container">
          <p>POST NEW Project</p>
          <form onSubmit={handlePost}>
            <div className="form-container">
              <div className="wrapper-one">
                <div className="input-tag">
                  <label htmlFor="title">Title : </label>
                  <div>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={title}
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
                      value={subTitle}
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
                      value={category}
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
                      value={description}
                      onChange={handleChange}
                      placeholder="Project Description"
                    />
                  </div>
                </div>
                <div className="input-tag">
                <label htmlFor="technology">Technologies : </label>
                <div className="highlight-main">
                  {technology.map((hl, index) => (
                    <div key={index} >
                      <input
                        type="text"
                        value={hl}
                        onChange={(e) =>
                          handleHighlightChange(index, e.target.value)
                        }
                        placeholder="Technologies"
                      />
                      <button
                      className="del-high-btn"
                        type="button"
                        onClick={() => handleRemoveHighlight(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={handleAddHighlight} className="add-high-btn">
                    Add Technologies
                  </button>
                </div>
              </div>
              </div>
            </div>
            <div className="wrapper-three">
            <div className=" input-file">
                  <input
                    id="upload-btn"
                    type="file"
                    accept=".pdf, .jpg, .png"
                    onChange={handleFileChange}
                  />
                  <label
                  htmlFor="upload-btn"
                  > <i className="fa-solid fa-upload"></i> Select Project</label>
                </div>
            <button className="post-btn" type="submit">Post Project</button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default PostProject;
