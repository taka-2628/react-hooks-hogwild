import Hog from "./Hog";

function Tiles({hogs}){
  
  const hogsTiles = hogs.map((hog) => {
    return (
      <Hog key={hog.name} hog={hog}/>
    ) 
  })

  return (
    <div className="ui grid container">
      {hogsTiles}
    </div>
  )
}

export default Tiles;