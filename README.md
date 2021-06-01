# subscribe newsletter

save email to firestore for subscribe newsletter

**URL** : `https://asia-southeast2-our-philosophy-314515.cloudfunctions.net/newsletter`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide email to be store.

**Data example** All fields must be sent.

```json
{
  "email": "bangkit@test.com"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Content example**

```json
{
  "message": "Terima kasih sudah berlanganan"
}
```

## Error Responses

**Condition** : If email is empty.

**Code** : `401`

**Content**

```json
{
  "message": "Email tidak boleh kosong"
}
```

**Condition** : If something wrong.

**Code** : `404`

**Content**

```json
{
  "message": "unable to store"
}
```
