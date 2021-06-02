# subscribe newsletter

save email to firestore for subscribe newsletter

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
      {
        "id": 2,
        "name": "Terrarium",
        "image": "https://storage.googleapis.com/b21-cap0199/plastic/tera.jpg",
        "desc": "https://www.youtube.com/watch?v=A7RpVghVZf8"
      },
      {
        "id": 3,
        "name": "Egg Yolk Sucker",
        "image": "https://storage.googleapis.com/b21-cap0199/plastic/egg.jpg",
        "desc": "https://www.youtube.com/watch?v=6UUC_akVim8"
      },
      {
        "id": 4,
        "name": "Piggy Bottle Bank",
        "image": "https://storage.googleapis.com/b21-cap0199/plastic/pig.jpg",
        "desc": "https://www.youtube.com/watch?v=DnrCJeuGA2k"
      },
      {
        "id": 5,
        "name": "Kitchen Storage Containers",
        "image": "https://storage.googleapis.com/b21-cap0199/plastic/cont.jpg",
        "desc": "https://www.youtube.com/watch?v=ldX2a72Q3TY"
      }
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
    ]
  },
  "paper": {
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
      {
        "id": 3,
        "name": "Paper Photo Frames",
        "image": "https://storage.googleapis.com/b21-cap0199/paper/frame.jpg",
        "desc": "https://www.youtube.com/watch?v=enpYgupLWL0"
      },
      {
        "id": 4,
        "name": "Paper Bags",
        "image": "https://storage.googleapis.com/b21-cap0199/paper/bag.jpg",
        "desc": "https://www.youtube.com/watch?v=yOrR91qyGOA"
      },
      {
        "id": 5,
        "name": "Paper Wall Hangings",
        "image": "https://storage.googleapis.com/b21-cap0199/paper/lam.jpg",
        "desc": "https://www.youtube.com/watch?v=YRgOHJbQPls"
      }
    ]
  },
  "metal": {
    "id": 4,
    "icon": "https://storage.googleapis.com/b21-cap0199/garbage_icon/canned-food.png",
    "recomendation": [
      {
        "id": 1,
        "name": "Twine Vases",
        "image": "https://storage.googleapis.com/b21-cap0199/metal/vases.jpg",
        "desc": "https://www.youtube.com/watch?v=8-iRsHeXE_k"
      },
      {
        "id": 2,
        "name": "Pincushion",
        "image": "https://storage.googleapis.com/b21-cap0199/metal/pin.jpg",
        "desc": "https://www.youtube.com/watch?v=yM90PNIKKFY"
      },
      {
        "id": 3,
        "name": "Clutter Catchers",
        "image": "https://storage.googleapis.com/b21-cap0199/metal/clut.jpg",
        "desc": "https://www.youtube.com/watch?v=av7MaRvo5pc"
      },
      {
        "id": 4,
        "name": "Tea Light Holder",
        "image": "https://storage.googleapis.com/b21-cap0199/metal/pin.jpg",
        "desc": "https://www.youtube.com/watch?v=Dw4Nw22E2_o"
      },
      {
        "id": 5,
        "name": "Herb Garden",
        "image": "https://storage.googleapis.com/b21-cap0199/metal/clut.jpg",
        "desc": "https://www.youtube.com/watch?v=Tx9ibFbYoho"
      }
    ]
  },
  "glass": {
    "id": 5,
    "icon": "https://storage.googleapis.com/b21-cap0199/garbage_icon/wine.png",
    "recomendation": [
      {
        "id": 1,
        "name": "Flower Vase Centerpiece",
        "image": "https://storage.googleapis.com/b21-cap0199/glass/flow.jpg",
        "desc": "https://www.youtube.com/watch?v=U3Hzp9E--xc"
      },
      {
        "id": 2,
        "name": "Colorful lamp",
        "image": "https://storage.googleapis.com/b21-cap0199/glass/lamp.jpg",
        "desc": "https://www.youtube.com/watch?v=wz6e7E8Mxhw"
      },
      {
        "id": 3,
        "name": "Painted Flower Vases",
        "image": "http",
        "desc": "https://www.youtube.com/watch?v=gZpU4PDiaCI"
      },
      {
        "id": 4,
        "name": "Colorful Bottle Chandelier",
        "image": "https://storage.googleapis.com/b21-cap0199/glass/candle.jpg",
        "desc": "https://www.youtube.com/watch?v=PP6xRPczxlE"
      },
      {
        "id": 5,
        "name": "Etch Your Own Soap Bottle",
        "image": "https://storage.googleapis.com/b21-cap0199/glass/candle.jpg",
        "desc": "https://www.youtube.com/watch?v=XUibyE-2hEE"
      }
    ]
  },
  "cardboard": {
    "id": 6,
    "icon": "https://storage.googleapis.com/b21-cap0199/garbage_icon/layer.png",
    "recomendation": [
      {
        "id": 1,
        "name": "Desktop Catchall Organizer",
        "image": "https://storage.googleapis.com/b21-cap0199/cardboard/desktop.jpg",
        "desc": "https://www.youtube.com/watch?v=2ffU_fRY0n4"
      },
      {
        "id": 2,
        "name": "Floating Tube Shelf ",
        "image": "https://storage.googleapis.com/b21-cap0199/cardboard/float.jpg",
        "desc": "https://www.youtube.com/watch?v=a-Rlsw-oMCI"
      },
      {
        "id": 3,
        "name": "Geometric Cardboard Lamp ",
        "image": "https://storage.googleapis.com/b21-cap0199/cardboard/float.jpg",
        "desc": "https://www.youtube.com/watch?v=QEHswaSx9Vg"
      },
      {
        "id": 4,
        "name": "Belted Storage Totes",
        "image": "https://storage.googleapis.com/b21-cap0199/cardboard/storage.jpg",
        "desc": "https://www.youtube.com/watch?v=5ccm9miGXVs"
      },
      {
        "id": 5,
        "name": "Faux Industrial Metal Letters",
        "image": "https://storage.googleapis.com/b21-cap0199/cardboard/desktop.jpg",
        "desc": "https://www.youtube.com/watch?v=XQZK7XFaQJM"
      }
    ]
  }
}
```

## Error Responses

**Condition** : If something wrong.

**Code** : `404`
