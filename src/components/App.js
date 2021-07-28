// create your App component here
import React, { useState, useEffect } from 'react';

function App(){
    const [renderImage, setRenderImage] = useState('')
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setRenderImage(data.message) )
    }, [])

    return(
        <>
            { renderImage.length > 0 ?
            <img src={renderImage} alt="A Random Dog" /> :
            <p>Loading...</p> }
        </>
    );
}


export default App;