import React, { useRef, useState, useEffect } from 'react';

const PlantDiseaseDetection = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((err) => {
                console.error("Error accessing the camera: ", err);
                alert("Could not access the camera. Please allow camera permissions.");
            });
    }, []);

    const captureImage = () => {
        const context = canvasRef.current.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, 320, 240);
    };

    const uploadImage = () => {
        setLoading(true);
        const dataUrl = canvasRef.current.toDataURL('image/jpeg');

        fetch(dataUrl)
            .then(res => res.blob())
            .then(blob => {
                const formData = new FormData();
                formData.append('file', blob, 'plant_image.jpg');

                fetch('http://10.12.37.12:8000/predict/', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    setLoading(false);
                    setResult(`Prediction: ${JSON.stringify(data.prediction, null, 2)}`);
                })
                .catch(error => {
                    setLoading(false);
                    console.error("Error uploading the image or in prediction: ", error);
                    setResult("An error occurred during image upload or prediction.");
                });
            })
            .catch(error => {
                setLoading(false);
                console.error("Error converting canvas to Blob: ", error);
                setResult("An error occurred during image processing.");
            });
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '100px',marginLeft: '300px',borderRadius:"8px" ,paddingTop:"20px",width:"800px",backgroundColor:"#E4F1E8"}}>
            <h1>Plant Disease Detection</h1>
            <video ref={videoRef} width="320" height="240" autoPlay style={{ border: '1px solid #ddd', marginTop: '20px' }}></video>
            <canvas ref={canvasRef} width="320" height="240" style={{ border: '1px solid #ddd', margin: '10px' }}></canvas><br />
            <button onClick={captureImage} style={{ padding: '10px 20px', margin: '10px', fontSize: '16px', cursor: 'pointer', border:"none",backgroundColor:"#C6F5B5",borderRadius:"8px"}}>Capture Image</button>
            <button onClick={uploadImage} style={{ padding: '10px 20px', margin: '10px', fontSize: '16px', cursor: 'pointer',border:"none",backgroundColor:"#C6F5B5",borderRadius:"8px"}}>Upload and Detect</button>
            {loading && <div id="loading" style={{ marginTop: '20px' }}>Processing...</div>}
            <div id="result" style={{ marginTop: '20px', fontWeight: 'bold' }}>{result}</div>
        </div>
    );
};

export default PlantDiseaseDetection;