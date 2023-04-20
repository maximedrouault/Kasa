import "./housinginfos.css"

export default function HousingInfos({ housing }) {

  return (
    <div>
      <h1 className="housing-title">{housing.title}</h1>
      <h2 className="housing-location">{housing.location}</h2>
      <div className="housing-tags-container">
        {housing.tags.map((tag, index) => (
          <h3 className="housing-tag" key={index}>
            {tag}
          </h3>
        ))}
      </div>
    </div>
  );
}