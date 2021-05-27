# -*- coding: utf-8 -*-
"""bangkit_trash.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1p8xvCNF3nmKAF3QefNHvbSXUfsH6vCyY
"""

import zipfile,os

base_dir = '/content/drive/MyDrive/Colab Notebooks/dataset-resized'

#cek jumlah dataset
print('total cardboard images :', len(os.listdir(base_dir + '/cardboard')))
print('total glass images :', len(os.listdir(base_dir + '/glass')))
print('total metal images :', len(os.listdir(base_dir + '/metal')))
print('total paper images :', len(os.listdir(base_dir + '/paper')))
print('total plastic images :', len(os.listdir(base_dir + '/plastic')))
print('total trash images :', len(os.listdir(base_dir + '/trash')))

# Commented out IPython magic to ensure Python compatibility.
#cek dataset
from keras.preprocessing import image
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
# %matplotlib inline
img = image.load_img(base_dir + '/metal/metal10.jpg')
imgplot = plt.imshow(img)

#membuat augmentasi
from tensorflow.keras.preprocessing.image import ImageDataGenerator
  
train_dir = os.path.join(base_dir)
train_datagen = ImageDataGenerator(rescale=1./255,
    rotation_range=20,
    zoom_range=0.2,
    shear_range=0.2,
    fill_mode = 'nearest',
    validation_split=0.4) # set validation split

#membagi ke direktori trainng dan test
train_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(150, 150),
    batch_size=8,
    class_mode='categorical',
    subset='training') 
validation_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(150, 150),
    batch_size=16,
    class_mode='categorical',
    subset='validation')

#buat arsitektur model

import tensorflow as tf
model = tf.keras.models.Sequential([
    tf.keras.layers.Conv2D(64, (3,3), activation='relu', input_shape=(150, 150, 3)),
    tf.keras.layers.MaxPooling2D(2,2),
    tf.keras.layers.Conv2D(32, (3,3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2,2),
    tf.keras.layers.Dropout(0.4),  
    tf.keras.layers.Conv2D(64, (3,3), activation='relu'), 
    tf.keras.layers.MaxPooling2D(2,2),
    tf.keras.layers.Dropout(0.4),  
    tf.keras.layers.Flatten(), 
    tf.keras.layers.Dense(512, activation='relu'),
    tf.keras.layers.Dense(256, activation='relu'),
    tf.keras.layers.Dense(6, activation='softmax')  # 3 karena output tiga kelas
])

#optimizer dan loos
model.compile(optimizer=tf.optimizers.Adam(learning_rate=0.001),
              loss='categorical_crossentropy',
              metrics = ['accuracy'])

#callback yang digunakan
class myCallback(tf.keras.callbacks.Callback):
  def on_epoch_end(self, epoch, logs={}):
    if(logs.get('accuracy')>0.96):
      print("\nAkurasi telah mencapai >96%!")
      self.model.stop_training = True
callbacks = myCallback()

#melatih model
history = model.fit(train_generator,
                              validation_data=validation_generator,
                              epochs=2,
                              verbose=2,
                              callbacks=callbacks)

# Commented out IPython magic to ensure Python compatibility.
import numpy as np
from google.colab import files
from keras.preprocessing import image
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
# %matplotlib inline
 
uploaded = files.upload()
 
for fn in uploaded.keys():
 
  path = fn
  img = image.load_img(path, target_size=(150,150))
  imgplot = plt.imshow(img)
  x = image.img_to_array(img)
  x = np.expand_dims(x, axis=0)
 
  images = np.vstack([x])
  classes = model.predict(images, batch_size=10)
  
  print(fn)
  print(classes)
  if classes[0][0]==1:
    print('cardboard')
  elif classes[0][1]==1:
    print('glass')
  elif classes[0][2]==1:
    print('metal')
  elif classes[0][3]==1:
    print('paper')
  elif classes[0][4]==1:
    print('plastic')
  elif classes[0][5]==1:
    print('trash')  
  else:
    print('nothing')

