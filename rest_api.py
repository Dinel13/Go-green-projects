from flask import Flask, jsonify
from flask_restful import Resource, Api, reqparse
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import numpy as np
from werkzeug.datastructures import FileStorage

# from predict_resnet50 import predict
import tempfile

app = Flask(__name__)
app.logger.setLevel("INFO")

api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument(
    "file", type=FileStorage, location="files", required=True, help="provide a file"
)
parser.add_argument("ID", type=int, help="Enter ID")
parser.add_argument("Name", type=str, help="Enter Name")


class Image(Resource):
    def get(self):
        # BISA DIRETURN
        # "ID" : parser.parse_args()["ID"]
        return jsonify(
            {
                "message": "testing",
            }
        )

    def post(self):
        args = parser.parse_args()
        the_file = args["file"]
        ofile, ofname = tempfile.mkstemp()
        the_file.save(ofname)

        output = {"top_categories": []}
        for _, categ, score in results:
            output["top_categories"].append((categ, float(score)))

        return {"test": "terst"}


api.add_resource(Image, "/image")

if __name__ == "__main__":
    app.run(debug=True)
