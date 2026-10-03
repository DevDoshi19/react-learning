import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = ({ job }) => {
  return (
    <div className="card" key={job.id}>

    <div className="top">
      <img src={job.logo} alt={`${job.company} logo`} />

      <button>
        Save <Bookmark size={12} />
      </button>
    </div>

    <div className="center">
      <h3>
        {job.company} <span>{job.posted}</span>
      </h3>

      <h2>{job.role}</h2>

      <div className="tag">
        {job.details.map((detail, index) => (
          <h4 key={index}>{detail}</h4>
        ))}
      </div>
    </div>

    <div className="bottom">
      <div>
        <h3>{job.price}</h3>
        <p>{job.location}</p>
      </div>

      <button>Apply Now</button>
    </div>

  </div>
  )
}

export default Card