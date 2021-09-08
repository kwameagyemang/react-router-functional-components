import React, { useState } from 'react'
const Giphy = () => {
  const [gifURL, setGifURL] = useState('')

  // function expression
  const randomGIF = () => {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9')
      .then(response => response.json())
      // gif here holds our data that was turned from json()
      .then(gif => setGifURL(gif.data.fixed_height_downsampled_url))
      .catch(err => console.log(err))
  }
  // data.fixed_height_downsample_url
  return (
    <div>
      <h1 className='random'>Random GIF</h1>
      <button id='button'onClick={() => randomGIF()}>Random</button>
      <div>
        <img src={gifURL} alt="random gif" />
      </div>
    </div>
  );
};

export default Giphy;