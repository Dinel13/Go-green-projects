# Create User's Account

Create an Account for the authenticated User if an Account for that User does
not already exist. Each User can only have one Account.

**URL** : `https://our-philosophy-314515.et.r.appspot.com/api/user/signup`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide name, email and password of Account to be created.

**Data example** All fields must be sent.

```json
{
    "name": "Bangkit"
    "email": "bangkit@test.com"
    "name": "Bangkit21"
}
```

## Success Response

**Condition** : If everything is OK and an Account didn't exist for this User.

**Code** : `201`

**Content example**

```json
{
  "userId": 100,
  "name": "Bangkit",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

## Error Responses

**Condition** : If Account already exists for User.

**Code** : `422`

**Content** 
```json
{
    "message": "User sudah ada, silahkan masuk"
}`
}
```

&nbsp;
&nbsp;
&nbsp;

# Signin User

Signin user if already have an account. Return a token to use authenticate and authorization.

**URL** : `https://our-philosophy-314515.et.r.appspot.com/api/user/login`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide email and password of Account to be sign in.

**Data example** All fields must be sent.

```json
{
    "email": "bangkit@test.com"
    "name": "Bangkit21"
}
```

## Success Response

**Condition** : If everything is OK and an Account is already exist.

**Code** : `200`

**Content example**

```json
{
  "userId": 100,
  "name": "Bangkit",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

## Error Responses

**Condition** : If Account didn't exists .

**Code** : `401`

**Content** 
```json
{
   "message": "Credentials tidak cocok."
}`
}
```

### Or

**Condition** : If password is wrong.

**Code** : `401`

**Content example**

```json
{
    "message": "Tidak bisa masuk, Pastikan password kamu betul."
}
```

&nbsp;
&nbsp;
&nbsp;

# Forgot User's password

User forgot account password. link to reset their password will be sent to their own email.

**URL** : `https://our-philosophy-314515.et.r.appspot.com/api/user/reset`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide email of Account that forgot password.

**Data example** All fields must be sent.

```json
{
    "email": "bangkit@test.com"
}
```

## Success Response

**Condition** : If everything is OK and an Account is already exist.

**Code** : `201`

**Content example**

```json
{
 "message": "Email untuk mereset telah dikirim ke alamat bangkit@test.com. Link akan kadarluarsa dalam 10 menit.",
}
```

## Error Responses

**Condition** : If Account didn't exists .

**Code** : `404`

**Content** 
```json
{
   "message": "Email tidak ditemukan, silahkan mendaftar."
}`
}
```

&nbsp;
&nbsp;
&nbsp;

# Reset User's password

Reset user's password use link that they get in their own email.

**URL** : `https://our-philosophy-314515.et.r.appspot.com/api/user/reset/:token`

**Method** : `POST`

**Auth required** : NO

**Data must provided**

Provide password and password confirmation of Account that want to be reset. both must be match.

**Data example** All fields must be sent.

```json
{
    "newPassword" : "NewBangkit0",
    "newPasswordConf" : "NewBangkit0"
}
```

## Success Response

**Condition** : If everything is OK and an password match.

**Code** : `201`

**Content example**

```json
{
 "message": "berhasil mereset password"
}
```

## Error Responses

**Condition** : New password and new password confirmation didn't match .

**Code** : `401`

**Content** 
```json
{
   "message": "passoword harus sama dengan konfirmasi password."
}`
}
```

