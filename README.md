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

1. **_67.8 Million tons waste_**
   The Ministry of Environment and Forestry (KLHK) admits that in 2020 the total national waste production has reached 67.8 million tons.
2. **_Low Recycling Activities_**
   Waste management in Indonesia is still in low absorption capacity of recycling activities. This is because Indonesia is still applying the old pattern.
3. **_60% Household Waste_**
   As much as 60 percent of national waste production comes from household waste. Therefore, there must be good management in the household.
4. **_Recycling Isn’t Easy_**
   Recycling programs vary greatly across the country, and the inconsistency hurts the environment. It’s also confusing and overwhelming for consumers

**Machine Learning:**

Building models that able to clasificate waste by six label. Build process using _baseline experiment, early stopping, checkpoint_. Pre-trained model or transfer learning by mobilenetv2. The model was saved with _model.h5_ and chosen by the [best model] for deployment.

**Case :**

- [x] Waste Classification
- [x] Recycle Recomendation

**Dataset Link:**

- Waste
  - [Early stage symptoms of COVID-19 patient's](https://github.com/garythung/trashnet)

Preview of the image and data used are shown in the picture below.

<img align="center" src="https://storage.googleapis.com/b21-cap0199/dataset.jpg"></img>

<p align="center">Waste dataset</p>

## Features

- [x] EDA (Exploratory Data Analysis) for Data Tables and Images
- [x] Preprocessing Data and Image
- [x] Image Augmentation
- [x] Callbacks
- [x] EarlyStopping
- [x] ModelCheckpoint
- [x] MobileNetV2

## Prerequisites

1. [Jupyter Notebook](https://test-jupyter.readthedocs.io/en/latest/install.html) or [Google Colab](https://colab.research.google.com/)
2. [Python](https://www.python.org/downloads/) version 3.6 or above
3. Latest version of Tensorflow 2.5 (or you can update again by rerunning .ipynb and updating models)

<!-- ## How to use

 1. [Create `kaggle.json` from Kaggle](https://github.com/Kaggle/kaggle-api#api-credentials)
2. Go to your Kaggle profile then download your Kaggle API.
   - My Account → Look for API section → Create New API Token
3. Open `.ipynb` with Google Colaboratory using `open in colab`
4. "Save a copy in Drive" to run and edit with your account. Click `File` > `Save a copy in Drive` in your Google Colaboratory.
5. Upload your `kaggle.json` if asked to upload it.
6. Will download the dataset on kaggle
7. If using GoogleDrive for the dataset, `GoogleAuth` click on the given link and sign in with your Google Account.
8. Done :) -->

## References

- [CNN from scratch with 98% accuracy](https://www.kaggle.com/aninditapani/cnn-from-scratch-with-98-accuracy)
- [Classification of Trash for Recyclability Status](http://cs229.stanford.edu/proj2016/report/ThungYang-ClassificationOfTrashForRecyclabilityStatus-report.pdf)

## Thank You :)
