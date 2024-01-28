
import "./Heading.css";

const Heading  = (props) =>{
    return(
     <>
        <div className="h">
            <h1>{props.text}</h1>
        </div>
    </>
    )
}

export default Heading;