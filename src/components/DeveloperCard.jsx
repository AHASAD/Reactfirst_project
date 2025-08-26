const DeveloperCard = ({ name, developer, salary }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-name">{name}</h3>
        <p className="card-role">{developer}</p>
      </div>
      <div className="card-salary">${salary.toLocaleString()}</div>
    </div>
  )
}

export default DeveloperCard
