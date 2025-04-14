import React from 'react';
import './projectshimmer.css'

export const ProjectsShimmer = () => {
  return (
    <section className='project-section-shimmer'>
        {Array.from({ length:10 }).map((elem, i) => {
            return(
                <div className="project-box-shimmer shimmer-card" key={i}>
                <div className="project-img-shimmer"></div>
                <div className="project-detail-shimmer">
                  <p></p>
                  <span></span>&nbsp; &nbsp;
                  <span></span>
                  <p></p>
                  <button className="pro-det-shimmer"></button>
                </div>
              </div>
            )
        })}
   
    </section>
  );
}

