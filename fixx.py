from flask import Flask, jsonify, request
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import numpy as np

from flask_cors import CORS, cross_origin

labels = {0: "cardboard", 1: "glass", 2: "metal", 3: "paper", 4: "plastic", 5: "trash"}

# Process image and predict label
def processImg(IMG_PATH):
    # load model
    model = load_model("fix.h5")

    # Preprocess image
    img = image.load_img(IMG_PATH, target_size=(300, 300))
    img = image.img_to_array(img, dtype=np.uint8)
    img = np.array(img) / 255.0

    p = model.predict(img[np.newaxis, ...])

    print("Maximum Probability: ", np.max(p[0], axis=-1))
    predicted_class = labels[np.argmax(p[0], axis=-1)]
    print("Classified:", predicted_class)
    return predicted_class


# Initializing flask application
app = Flask(__name__)
cors = CORS(app)


@app.route("/")
def main():
    return """
        Application is working
    """


# Process images
@app.route("/process", methods=["POST"])
def processReq():
    data = request.files["img"]
    data.save("img.jpg")

    resp = processImg("img.jpg")

    return jsonify({"result": resp})


if __name__ == "__main__":
    app.run(debug=True)
