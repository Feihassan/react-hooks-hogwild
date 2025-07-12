import HogTile from "./HogTile";
function HogList ({hogs}) {

    return ( 
        
        <div className="ui grid container">
            {hogs.map((hog, index)=>(
                <HogTile key={index} hog={hog}/>
            ))}
        </div>
    )
}
export default HogList;