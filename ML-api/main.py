import os
from flask import Flask, jsonify, request
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import tensorflow_hub as tfhub
import numpy as np

from flask_cors import CORS

labels = {0: "cardboard", 1: "glass", 2: "metal", 3: "paper", 4: "plastic", 5: "trash"}

# Process image and predict label
def processImg(IMG_PATH):
    # load model
    model = load_model("model_v2.h5", custom_objects={"KerasLayer": tfhub.KerasLayer})

    img = image.load_img(IMG_PATH, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    images = np.vstack([x])
    images /= 255  # because on train and test image is normalized, on image predict supposed to be too.
    classes = model.predict(
        images, 64
    )  # the value is not always 1 and 0 because of probabilities
    predicted_class_indices = np.argmax(
        classes
    )  # use to check prediction that have higher probabilities

    if predicted_class_indices == 0:
        return "Cardboard"
    elif predicted_class_indices == 1:
        return "Glass"
    elif predicted_class_indices == 2:
        return "Metal"
    elif predicted_class_indices == 3:
        return "Paper"
    elif predicted_class_indices == 4:
        return "Plastic"
    else:
        return "Trash"


# Initializing flask application
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/")
def main():
    return """
        Application is working
    """


# Process images
@app.route("/process", methods=["POST"])
def processReq():
    if "img" not in request.files:
        return jsonify({"error": "Image is empty"})
    data = request.files["img"]
    data.save("img.jpg")

    resp = processImg("img.jpg")

    return jsonify({"result": resp})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
    # app.run(host="127.0.0.1", port=8080, debug=True)
