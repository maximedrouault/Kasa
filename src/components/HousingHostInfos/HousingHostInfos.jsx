import "./housinghostinfos.css"

export default function HousingHostInfos({ housing }) {

  return (
    <div className="housing-host-profile">
      <p className="housing-host-name">{housing.host.name}</p>
      <img
        src={housing.host.picture}
        alt={housing.host.name}
        className="housing-host-picture"
      />
    </div>
  );
}