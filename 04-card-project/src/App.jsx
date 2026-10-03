import React from 'react'
import Card from './components/Card'

const jobs = [
  {
    id: 1,
    logo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    details: ["Part Time", "Senior Level"],
    price: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    logo: "https://logo.clearbit.com/google.com",
    company: "Google",
    posted: "2 days ago",
    role: "Frontend Developer",
    details: ["Full Time", "Mid Level"],
    price: "$95/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    logo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    posted: "1 day ago",
    role: "Product Designer",
    details: ["Full Time", "Senior Level"],
    price: "$110/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    logo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    posted: "3 days ago",
    role: "UI/UX Designer",
    details: ["Contract", "Senior Level"],
    price: "$130/hr",
    location: "Mumbai, India",
  },
  {
    id: 5,
    logo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    posted: "6 days ago",
    role: "Frontend Engineer",
    details: ["Full Time", "Mid Level"],
    price: "$100/hr",
    location: "Pune, India",
  },
  {
    id: 6,
    logo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    posted: "4 days ago",
    role: "Product Designer",
    details: ["Part Time", "Junior Level"],
    price: "$80/hr",
    location: "Noida, India",
  },
];

const App = () => {
  return (
    <div className="parent">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  )
}

export default App