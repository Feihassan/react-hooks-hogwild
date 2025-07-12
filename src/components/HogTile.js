import React , {useState} from "react";
function HogTile({hog}) {
    const [showDetails, setShowDetails]= useState(false)
    return (
        <div 
  className="ui eight wide column" 
  onClick={() => setShowDetails(!showDetails)}
  style={{ cursor: "pointer" }}
>
  <h3>{hog.name}</h3>
  <img src={hog.image} alt={hog.name} width="200" />

  {showDetails && (
    <div>
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight}</p>
      <p>Greased: {hog.greased ? "Yes" : "No"}</p>
      <p>Highest Medal: {hog["highest medal achieved"]}</p>
    </div>
  )}
</div>


    );

}
export default HogTile;