from fastapi import FastAPI, UploadFile, File
from transformers import pipeline
from PIL import Image
import io
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (replace "" with specific origins if needed)
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

# Load the pre-trained model
model = pipeline("image-classification", model="linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification")

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    # Load the image from the request
    image_bytes = await file.read()
    img = Image.open(io.BytesIO(image_bytes))

    # Run the classification
    result = model(img)

    # Return the result as a JSON response
    return {"prediction":result}