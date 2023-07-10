import React from "react";
import video from './video/particles.webm';


const landing = () => {

    return(

        <div className="relative">

            <div className="bg-red">
                <a> hello </a>
            </div>

            <video 
            autoPlay
            loop
            src={video}>

            </video>
            
        </div>


    );


};

export default landing;