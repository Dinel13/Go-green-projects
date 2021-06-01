# Store feedback

save the feedback to firestore

**URL** : `https://asia-southeast2-our-philosophy-314515.cloudfunctions.net/feedback`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide email, score and feedback to be store.

**Data example** All fields must be sent.

```json
{
  "email": "bangkit@test.com",
  "score": 5,
  "feedback": "Aplikasinya sangat keren dan bermamfaat"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
{
  "message": "feedback berhasil dikirm"
}
```

## Error Responses

**Condition** : If there is empty field.

**Code** : `401`

**Content**

```json
{
  "message": "semua field harus terisi"
}
```

**Condition** : If something wrong.

**Code** : `404`

**Content**

```json
{
  "error": "Tidak bisa mengirim feedback"
}
```
