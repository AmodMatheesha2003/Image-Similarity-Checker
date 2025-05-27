# Image Similarity Checker

This project allows users to upload images and checks whether the uploaded image already exists in the database by using image similarity detection based on ResNet50 embedding. It prevents duplicate image uploads, even if the image is slightly cropped or modified.

## Features

- **Upload and check for duplicate images**
- **Uses ResNet50 model for feature extraction**
- **Compares image embeddings to detect similarity**
- **Prevents uploading of similar or same images**
- **Frontend built with HTML, CSS, and JavaScript**
- **Backend developed using Python (Flask)**
- **MongoDB used for storing image embeddings and metadata**

## Demo Video

[![Watch the demo](https://img.youtube.com/vi/1Zr1HPmb-NQ/0.jpg)](https://youtu.be/1Zr1HPmb-NQ?si=iTx4Abt17_FEZbm7)

Watch a simple demonstration of the Image Similarity Checker project on YouTube:  
https://youtu.be/1Zr1HPmb-NQ?si=iTx4Abt17_FEZbm7 

## How to Run

1. **Clone the repository.**
2. **Install required packages:**
   ```bash
   pip install -r requirements.txt
   ```
3. **Create a `.env` file in the root folder.**
4. **In the `.env` file, insert the following:**
   ```ini
   MONGODB_URI=your_mongodb_connection_string
   DB_NAME=your_database_name
   ```
5. **Run `main.py` to start the Flask backend.**
6. **Open `create-nft.html` in a browser or use Live Server to interact with the frontend.**

> **Note:**  
> This project uses a pre-trained ResNet50 model to extract image embeddings, which are compared to check for similarity instead of relying on exact image matches.
