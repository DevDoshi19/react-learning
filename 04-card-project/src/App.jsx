import React from 'react'
import Card from './components/Card'

const jobs = [
  {
    id: 1,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iq1rjeI1_G4jRG6O_uENX1rCbgsQeCAMw5ySJBerjQ&s=10",
    company: "Google",
    posted: "2 days ago",
    role: "Frontend Developer",
    details: ["Full Time", "Mid Level"],
    price: "$95/hr",
    location: "Bangalore, India",
  },
  {
    id: 2,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32Ua8H2HcpuzNhQAuWmJ-__qG12Y0wrOiu8inOZJ05Q&s=10",
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    details: ["Part Time", "Senior Level"],
    price: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 3,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbHZNqXWdAF2WDbzda_Bxqnb1SuxzUT8Dq_RCCSIZuA&s=10",
    company: "Microsoft",
    posted: "1 day ago",
    role: "Product Designer",
    details: ["Full Time", "Senior Level"],
    price: "$110/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPND1gzuX-XconUqe_R0cziing8DUo0TcRyJFTjV53g&s=10",
    company: "Netflix",
    posted: "3 days ago",
    role: "UI/UX Designer",
    details: ["Contract", "Senior Level"],
    price: "$130/hr",
    location: "Mumbai, India",
  },
  {
    id: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQkstFztkksAFB5Y1bDLYlJD3zVZpOU67hvOvhkjFxg&s=10",
    company: "Spotify",
    posted: "6 days ago",
    role: "Frontend Engineer",
    details: ["Full Time", "Mid Level"],
    price: "$100/hr",
    location: "Pune, India",
  },
  {
    id: 6,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2F_eA2zHsT64HAOyvdumCc6etevIqHAiBwfds90G-w&s=10",
    company: "Adobe",
    posted: "4 days ago",
    role: "Product Designer",
    details: ["Part Time", "Junior Level"],
    price: "$80/hr",
    location: "Noida, India",
  },
  {
    id: 7,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10",
    company: "Meta",
    posted: "2 days ago",
    role: "React Developer",
    details: ["Full Time", "Mid Level"],
    price: "$105/hr",
    location: "Bangalore, India",
  },
  {
    id: 8,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl75Y8ubtSo7JT8IEl8X3DCKdlAMDeIoVjj1Fgs6MEAQ&s=10",
    company: "Uber",
    posted: "5 days ago",
    role: "Product Designer",
    details: ["Contract", "Senior Level"],
    price: "$115/hr",
    location: "Hyderabad, India",
  },
  {
    id: 9,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl75Y8ubtSo7JT8IEl8X3DCKdlAMDeIoVjj1Fgs6MEAQ&s=10",
    company: "Airbnb",
    posted: "3 days ago",
    role: "UX Researcher",
    details: ["Full Time", "Mid Level"],
    price: "$90/hr",
    location: "Pune, India",
  },
  {
    id: 10,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmO3NvxWiCNfNaZtN0GcTPruKG4tjHPfCh3X0wQJAePg&s=10",
    company: "Salesforce",
    posted: "1 day ago",
    role: "Frontend Engineer",
    details: ["Part Time", "Junior Level"],
    price: "$75/hr",
    location: "Mumbai, India",
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