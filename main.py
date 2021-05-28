import os

from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
# from keras.models import load_model
# from keras.preprocessing import image


app = Flask(__name__)
api = Api(app)

# dic = {0 : 'cardboard', 1 : 'glass', 2 :"metal", 3:'paper', 4 : "plastic", 5 : "trash"}


# model = load_model('model.h5')
# model._make_predict_function()

# def predict_label(img_path):
# 	i = image.load_img(img_path, target_size=(100,100))
# 	i = image.img_to_array(i)
# 	i = i.reshape(1, 100,100,3)
# 	p = model.predict_classes(i)
# 	return dic[p[0]]

# @app.route("/submit", methods = ['GET', 'POST'])
# def get_hours():
# 	if request.method == 'POST':
# 		img = request.files['my_image']

# 		img_path = "static/" + img.filename	
# 		img.save(img_path)

# 		p = predict_label(img_path)



# 	return render_template("home.html", prediction = p, img_path = img_path)

parser = reqparse.RequestParser()

#body yang diterima
parser.add_argument('task', "taskh")
parser.add_argument("taskh")

class Test(Resource):
    def get(self):
        return "test api"

    def post(self):
        args = parser.parse_args()
        return args, 201

api.add_resource(Test, '/')


if __name__ =='__main__':
	app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))