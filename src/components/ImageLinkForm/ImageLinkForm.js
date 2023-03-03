import React from 'react'; 
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3 text-display'>
                {'This smart world app will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='' >
                <div className='pa3 br3 shadow-5  w-34 center form w-50'>
                <input className='f4 pa2 w-60 center br3' type='text'onChange={onInputChange} />
                <button className='w-40 grow f4 link ph1 pv2 dim br3 ba bw1 pointer dib bg-navy white' onClick={onButtonSubmit} >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;