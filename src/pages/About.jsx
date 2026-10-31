import React from 'react'

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quidem quod molestiae, magnam aut deleniti qui. Debitis sit ea rem corporis eveniet quas quaerat non error nulla ullam reprehenderit laudantium, nam delectus laboriosam odit nostrum ratione fuga, sequi sint?
      </p>
    </>
  )
}

export default About