import {useState} from "react";

function Hog({hog}){
  const [isDetailShown, setIsDetailShown] = useState(false);

  function handleClick(){
    setIsDetailShown(!isDetailShown)
  }
  return (
    <div className="ui eight wide column pigTile cards maxPigTile minPigTile" onClick={handleClick}>
        <img src={hog.image} alt=""></img>
        <h3>{hog.name}</h3>

        <div style={{display: isDetailShown ? "block" : "none"}}>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight} | Greased: {hog.greased ? "true" : "false"}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
      </div>
  )
}

export default Hog;