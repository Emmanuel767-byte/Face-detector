import React from 'react';
import './ImageForm.css';


function ImageLinkForm({onInputChange, onButtonSubmit}) {
    return (
        <div>
            <p className="f3">
                {'Magic Brain will detect your face in pictures'}
            </p>
            <div className= 'center'>
            <div className="pa4 form center br3 shadow-5">
                <input className="f4 pa2 w-70 center " type= "text" onChange={onInputChange}/>
                <button className="f4 br2 ml1-ns link w-30 grow ph3 pv3 dib white bg-light-purple " onClick={onButtonSubmit}>Detect</button>
            </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;

