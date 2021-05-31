import os
import urllib.request
from flask import Flask, request, redirect, jsonify
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import numpy as np
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = os.getcwd()
print(UPLOAD_FOLDER + "/uploads")

app = Flask(__name__)
app.secret_key = "secret key"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024 * 1024

ALLOWED_EXTENSIONS = set(["png", "jpg", "jpeg", "gif"])


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/file-upload", methods=["POST"])
def upload_file():
    # check if the post request has the file part
    if "file" not in request.files:
        resp = jsonify({"message": "No file part in the request"})
        resp.status_code = 400
        return resp
    file = request.files["file"]

    if file.filename == "":
        resp = jsonify({"message": "No file selected for uploading"})
        resp.status_code = 400
        return resp
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
        resp = jsonify({"message": "File successfully uploaded"})
        resp.status_code = 201
        return resp

    else:
        resp = jsonify(
            {"message": "Allowed file types are txt, pdf, png, jpg, jpeg, gif"}
        )
        resp.status_code = 400
        return resp


if __name__ == "__main__":
    app.run()
