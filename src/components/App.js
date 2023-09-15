// import React, { useEffect, useState } from 'react'

// function App () {

//     const [dogPic, setDogPic] = useState(null)

    

//     useEffect( () => {
//         fetch('https://dog.ceo/api/breeds/image/random')
//             .then(res => res.json())
//             .then(data => {
//                 setDogPic(data.message)
//             })
//         }, [])

//         if (!dogPic) return <p>Loading...</p>;

//         return  <img src={dogPic} alt='A random dog' />;
    

  
// }

// export default App

import React, { useState, useEffect } from "react";

function App() {
  const [dogPic, setDogPic] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPic(data.message);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  if (!dogPic) return <p>Loading...</p>;

  return <img src={dogPic} alt="A Random Dog" />;
}

export default App;