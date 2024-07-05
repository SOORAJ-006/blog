import React from "react";
import Preview from "./Preview";

const PreviewGrid = () => {
  return (
    <section >
      <div className=' container-xxl'>
      <h1 className="py-5 d-flex gap-3 align-item-center justify-content-center">Explore Inspiring Blogs Here <i class="bi bi-arrow-down-short"></i></h1>
      <div className="row row-cols-3"><Preview /></div>
      </div>
      
    </section>
  );
};

export default PreviewGrid;
