import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { workConstants } from '../constants/work'
import TextCard from '../components/textcard'
import ProjectImage from '../components/projectimage';

const ImageTextCard = ({ workData }) => {
  if (!workData) {
    return null
  }
  return (
    <>
    <div style={{display:'flex'}}>
    <ProjectImage style={{ flex:1, margin:'0 20px' }} image={workData.images[0]}/>
    <ProjectImage style={{ flex:1, margin:'0 20px' }} image={workData.images[1]}/>
    <span style={{flex:2, margin:'0 10px'}}>
      <h3>
        {workData.text}
      </h3>
      <ul>
        {workData.details.map(each=><li>{each}</li>)}
      </ul>
    </span>
    </div>
    </>
  );
}

const Work = () => {
  const [ work, setWork ] = useState(null);
  const workKey = Object.keys(workConstants)[work];
  const workData = workConstants[workKey];
// useEffect(() => {
//     // Update the document title using the browser API
//     // document.title = `You clicked ${count} times`;
//   });

  return (
    <>
        <SEO title="Work and Projects" />
        <h2>Work & Projects</h2>
        <span style={{display:'flex'}}>
          {Object.values(workConstants).map(
            (each, key) => (
              <TextCard {...each} key={key} onClick={() => setWork(key)} />
            )
          )}
        </span>
        <ImageTextCard workData={workData} />
    </>
  );
}

export default Work
