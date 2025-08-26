import DeveloperCard from "../components/DeveloperCard"

const Section = () => {
  const developers = [
    {
      id: 1,
      name: "Rahul",
      developer: "Frontend Developer",
      salary: 75000,
    },
    {
      id: 2,
      name: "Ritesh ",
      developer: "Backend Developer",
      salary: 82000,
    },
    {
      id: 3,
      name: "Priyankar",
      developer: "Full Stack Developer",
      salary: 90000,
    },
    {
      id: 4,
      name: "Priyanka",
      developer: "UI/UX Designer",
      salary: 68000,
    },
    {
      id: 5,
      name: "Akash",
      developer: "DevOps Engineer",
      salary: 95000,
    },
  ]

  return (
    <div className="page-container">
      <h1 className="page-title">Developer Team</h1>
      <div className="cards-container">
        <div className="cards-grid">
          {developers.map((dev) => (
            <DeveloperCard key={dev.id} name={dev.name} developer={dev.developer} salary={dev.salary} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section
