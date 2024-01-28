import { useState } from "react";
import Personal from "./Personal";
import Links from "./Links";
import Education from "./Education";


const Home = () =>{

    const accountinitial= {

        Personal:<Personal/>,
        Links : <Links/>,
        Education : <Education/> 
    }

    const [account,setAccount] = useState(accountinitial.Personal);



    return (
        <>
        {account}
        </>
    )


}

export default Home;