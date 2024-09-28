import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageSrc = event.target.result;
        console.log(imageSrc);
        setFile(imageSrc);
        //scanImage(imageSrc);
      };
      reader.readAsDataURL(file);
    }
  };

  /*const scanImage = (imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const code = jsQR(imageData.data, img.width, img.height);
      if (code) {
        setResult(`QR Code Data: ${code.data}`);
      } else {
        setResult('No QR code found.');
      }
    };
  };*/

  return (
    <div className="App" style={{marginTop:"150px"}}>
      <h1 className="styled-text">Upload a image here</h1>
      <div><input id="dynamicInput" type="file" onChange={handleChange} accept="image/*" /></div>
      {file && <img src={file} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '20px' }} />}
    </div>
  );
}

export default App;
