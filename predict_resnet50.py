import tensorflow.keras.applications.resnet50 as resnet50
from tensorflow.keras.preprocessing import image
import os
os.environ['KMP_DUPLICATE_LIB_OK'] = 'True'  # so that it runs on a mac


def predict(fname):
    """returns top 5 categories for an image.
    
    :param fname : path to the file 
    """
    # ResNet50 is trained on color images with 224x224 pixels
    input_shape = (224, 224, 3)

    # load and resize image ----------------------
    
    img = image.load_img(fname, target_size=input_shape[:2])
    x = image.img_to_array(img)

    # preprocess image ---------------------------

    # make a batch
    import numpy as np
    x = np.expand_dims(x, axis=0)
    print(x.shape)

    # apply the preprocessing function of resnet50
    img_array = resnet50.preprocess_input(x)

    model = resnet50.ResNet50(weights='imagenet',
                              input_shape=input_shape)
    preds = model.predict(x)
    return resnet50.decode_predictions(preds)


if __name__ == '__main__':

    import pprint
    import sys

    file_name = sys.argv[1]
    results = predict(file_name)
    pprint.pprint(results)