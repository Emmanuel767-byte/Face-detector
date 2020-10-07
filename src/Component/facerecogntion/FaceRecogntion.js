import React from 'react';


function FaceRecogntion({imageURL}) {
    return (
        <div>
            <div className="center ma">
                <div className="absolute mt2">
                <img id="Input_img" alt="" src={imageURL} width="500px" height="auto"/>
                </div>
            </div>
        </div>
    )
}

export default FaceRecogntion
