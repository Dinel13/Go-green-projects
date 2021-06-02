# Recomendation API

get all data recomendation for all category

**URL** : `https://asia-southeast2-our-philosophy-314515.cloudfunctions.net/recomendation`

**Method** : `GET`

**Auth required** : NO

**No Data must provided**

&nbsp;

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
{
  "plastic": {
    "id": 1,
    "icon": "https://storage.googleapis.com/b21-cap0199/garbage_icon/no-plastic-bottles.png",
    "recomendation": [
      {
        "id": 1,
        "name": "Bird Feeder",
        "image": "https://storage.googleapis.com/b21-cap0199/plastic/bird.jpg",
        "desc": "https://www.youtube.com/watch?v=wduCroN-kS8"
      },
      ....
    ]
  },
  "trash": {
    "id": 2,
    "icon": "https://storage.googleapis.com/b21-cap0199/garbage_icon/garbage.png",
    "recomendation": [
      {
        "id": 1,
        "name": "Eco-Bricks",
        "image": "https://storage.googleapis.com/b21-cap0199/trash/eco.jpg",
        "desc": "https://www.youtube.com/watch?v=RQoXtbJTvMs"
      }
      ...
    ]
  },
  ...
}
```

&nbsp;
&nbsp;

#GET one category

get all data recomendation for ONE category

**URL** : `https://asia-southeast2-our-philosophy-314515.cloudfunctions.net/recomendation`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide CATEGORY to be search.

**Data example** All fields must be sent.

```json
{
  "category": "paper"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
{
    "id": 3,
    "icon": "https://storage.googleapis.com/b21-cap0199/garbage_icon/layer.png",
    "recomendation": [
      {
        "id": 1,
        "name": "Paper Mache Decoration Item",
        "image": "https://storage.googleapis.com/b21-cap0199/paper/mache.jpg",
        "desc": "https://www.youtube.com/watch?v=Mic0Yxsicdw"
      },
      {
        "id": 2,
        "name": "Newspaper Baskets",
        "image": "https://storage.googleapis.com/b21-cap0199/paper/basket.jpg",
        "desc": "https://www.youtube.com/watch?v=dnrBL9nbNRk"
      },
      ...
    ]

}
```

## Error Responses

**Condition** : If category is empty.

**Code** : `401`

**Content**

```json
{
  "message": "category tidak boleh kosong"
}
```

**Condition** : If category not faound.

**Code** : `404`

**Content**

```json
{
  "message": "category tidak ditemukan"
}
```

**Condition** : If something wrong.

**Code** : `404`
