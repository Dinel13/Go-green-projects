# API for ML

**Deploy use** : Cloud Run Google CLoud Flatform

## TEST THE API

**URL** : `https://ml-api-rupnuawd4a-et.a.run.app/`

**Method** : `GET`

**Auth required** : NO

### Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```
Application is working

```

## PREDICT THE IMAGE

**URL** : `https://ml-api-rupnuawd4a-et.a.run.app/process`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide image to be predict with key "img".

**Data example**
All fields must be sent.

```
const formdata = new Formdata()
formdata.append("img" , <image file>)

body : formdata
```

### Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
{
  "result": "cardboard"
}
```

### Referensi

- [faizan170/tensorflow-image-classification-flask-deployment](https://github.com/faizan170/tensorflow-image-classification-flask-deployment "faizan170's Github profile")
- [how-to-deploy-a-simple-flask-app-on-cloud-run-with-cloud-endpoint](https://medium.com/fullstackai/how-to-deploy-a-simple-flask-app-on-cloud-run-with-cloud-endpoint-e10088170eb7 "simple-flask-app-on-cloud-run")
