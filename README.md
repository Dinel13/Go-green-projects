<h1 align="center">
  <img align="center"  src="https://storage.googleapis.com/b21-cap0199/logo.png"  width="270"></img>
<br>
Go Green Project
</h1>

# Garbage Classification and Recyclable Waste Recommendation

For Capstone Project Bangkit 2021
<br />

## Team Manut || B21-CAP0199

- **Cloud Computing Path**
  - [Huddin](https://github.com/Dinel13/ "salahuddin's github profile") (C2082045) as **Full stack Developper**
  - [Ainun](https://github.com/kazriel/ "Ainun's github profile") (C2082042) as **Cloud Architec and Engineer**
- **Android Path**
  - [Alawi](https://github.com/wiwittt27/ "Alawi Github profile") (C2082042) as **Android Developper**
  - [Dicky](https://github.com/dicky7/ "Dicky Github profile") (C2082042) as **Android Developper**
- **Machine Learning Path**
  - [Okky](https://github.com/lemkova/ "Okky's Github profile") (C2082042) as **Data scientisc**
  - Shifa (C208204) as **Data scientisc**
    <br/>

---

### Other Repo

- **ANDROID REPO** https://github.com/dicky7/GoGreen/

---

### Other Barnch

- **ML API** https://github.com/Dinel13/Go-green-projects/tree/ml-API
  - Use **_Python Flask_** framework and deploy with **_Cloud Run_** on Google Cloud Platform
    <br/>
- **AUTH API** https://github.com/Dinel13/Go-green-projects/tree/backend
  - Use **_Node.js Express_** framework and deploy with **_App Enggine_** and **_Cloud SQL_** as database on Google Cloud Platform
    <br/>
- **RECOMENDATION API** https://github.com/Dinel13/Go-green-projects/tree/recomendation-api
  - Use **_Node.js Express_** framework and deploy with **_Cloud Function_** and **_Cloud Bucket_** as object store on Google Cloud Platform
    <br/>
- **FEEDBACK API** https://github.com/Dinel13/Go-green-projects/tree/feedbac-api
  - Use **_Node.js Express_** framework and deploy with **_Cloud Function_** **_Firestore_** as noSql database on Google Cloud Platform
    <br/>
- **NEWSLETTER API** https://github.com/Dinel13/Go-green-projects/tree/Newsletter-Api
  - Use **_Node.js Express_** framework and deploy with **_Cloud Function_** **_Firestore_** as noSql database on Google Cloud Platform
    <br/>
- **FRONT-END** https://github.com/Dinel13/Go-green-projects/tree/frontend-web
  - Use **_React.js, Redux_** and **_Tailwind_** library and deploy with **_Cloud Run_** that consume all API service use **_REST-API_** from Google Cloud Platform
  - URL https://frontend-rupnuawd4a-et.a.run.app/

---

  <br/>

## Design Infrastructure

![Design Infrastructure revised](https://user-images.githubusercontent.com/70701995/120318678-b3e6b100-c312-11eb-8854-fe2c4db8ff40.png)

**Backgrounder:**

The development of the health sector in Indonesia is still not growing optimally. Public submission of symptoms of disease requires early solutions in dealing with emerging diseases. As well as long-distance service in some areas is still very difficult. The government established an institution, namely Puskesmas, which is a health service facility. Public health problems, especially remote reports, recommendations for early treatment, and appropriate health programs for the community, are still lacking and not yet integrated. The strategy in the form of application development by utilizing deep learning aims to analyze the symptoms of the disease from the community in conducting classification based on disease diagnosis health test data. It is hoped that it can help people who need recommendations for first action against symptoms of disease and related health information, in addition to that expected from the data. which is received can be analyzed by the Puskesmas to design a health program.

**Machine Learning:**

Building models that able to clasificate waste by six label. Build process using _baseline experiment, early stopping, checkpoint_. Pre-trained model or transfer learning by _resnet152v2, densenet121, inceptionv3, mobilenetv2, vgg19_. The model was saved with _model.h5_ and chosen by the [best model] for deployment.

**Case :**

- [x] Waste Classification
- [x] Recycle Recomendation

**Dataset Link:**

- Waste
  - [Early stage symptoms of COVID-19 patient's](https://www.kaggle.com/martuza/early-stage-symptoms-of-covid19-patients)
- Fruits and Vegetables → Combined Dataset : [FruitsVegetables](https://drive.google.com/file/d/1ruaStccmRUdgpxlI5lD2LDWH9nxoc9VY/view?usp=sharing)

Preview of the image and data used are shown in the picture below.

<img align="center" src="/misc/img/covid.png"></img>

<p align="center">Early stage symptoms of COVID-19 patient's</p>

<img align="center" src="/misc/img/disease.png"></img>

<p align="center">Eye and Skin Disease</p>

<img align="center" src="/misc/img/fruits.png"></img>

<p align="center">Fruits and Vegetables</p>

## Features

- [x] EDA (Exploratory Data Analysis) for Data Tables and Images
- [x] Preprocessing Data and Image
- [x] Image Augmentation
- [x] Callbacks
- [x] EarlyStopping
- [x] ModelCheckpoint
- [x] ResNet152V2
- [x] DenseNet121
- [x] InceptionV3
- [x] MobileNetV2
- [x] VGG19

## Prerequisites

1. [Jupyter Notebook](https://test-jupyter.readthedocs.io/en/latest/install.html) or [Google Colab](https://colab.research.google.com/)
2. Kaggle API Token → [Generate](https://github.com/Kaggle/kaggle-api#api-credentials)
3. [Python](https://www.python.org/downloads/) version 3.6 or above
4. Latest version of Tensorflow 2.5 (or you can update again by rerunning .ipynb and updating models)

## How to use

1. [Create `kaggle.json` from Kaggle](https://github.com/Kaggle/kaggle-api#api-credentials)
2. Go to your Kaggle profile then download your Kaggle API.
   - My Account → Look for API section → Create New API Token
3. Open `.ipynb` with Google Colaboratory using `open in colab`
4. "Save a copy in Drive" to run and edit with your account. Click `File` > `Save a copy in Drive` in your Google Colaboratory.
5. Upload your `kaggle.json` if asked to upload it.
6. Will download the dataset on kaggle
7. If using GoogleDrive for the dataset, `GoogleAuth` click on the given link and sign in with your Google Account.
8. Done :)

## References

- [http://bit.ly/papercapstone01](http://bit.ly/papercapstone01)
- [http://bit.ly/papercapstone02](http://bit.ly/papercapstone02)
- [http://bit.ly/papercapstone03](http://bit.ly/papercapstone03)

## Thank You :)
