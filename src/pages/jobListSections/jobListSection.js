import React from 'react'
import { Link } from 'react-router-dom'

function jobListSection() {
  return (
    <section className=" relative mb-28 mt-20" >
    <div className=" relative mb-28">
    <div className="flex max-md:mt-16 justify-center gap-3 flex-row flex-wrap">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Graphic Designer</h2>
          <p>5 years experience as a freelance graphic designer</p>
          <div className="card-actions justify-end">
            <button className="btn"><Link to="https://www.behance.net/Indramaulaagung" target="_blank">Portfolio</Link></button>
          </div>
        </div>

      </div>

      <div className="card w-96 bg-orange-600 text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Visual Designer</h2>
          <p>Ability to design visual and motion graphics</p>
          <div className="card-actions justify-end">
            <button className="btn"><Link to="https://www.youtube.com/@IndraMaulanaideos" target="_blank">Get Started</Link></button>
          </div>
        </div>

      </div>

      <div className="card w-96 bg-success-content text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Digital Illustration</h2>
          <p>Experienced in the field of creating digital illustrations</p>
          <div className="card-actions justify-end">
            <button className="btn"><Link to="https://www.instagram.com/ideosprocess/" target="_blank">Get Started</Link></button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default jobListSection