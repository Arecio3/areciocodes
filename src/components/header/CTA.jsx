import React from 'react'
const resume = "https://docdro.id/086tPER";

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download target="_blank" rel="noreferrer noopener" className='btn'>Download Resume</a>
        <a href="#contact" target="_blank" rel="noreferrer noopener" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA