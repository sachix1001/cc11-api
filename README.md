This was created during my time as a student at Code Chrysalis

# Phone Book API

This is a simple phone book to keep names and phone numbers of your friends and family

Setting

1. yarn install

```
yarn install
```

2. Create Database

```
yarn migrate
```

3. Seed Database

```
node data.js
```

4. open `http:localhost:3000/` in your choice of browser

## How to use

- GET

Click GET button

- POST

Type data and click ADD button
(data has to be the below format)

```
{first: "firstname", last: "lastmane, phone: "phoneNumber"}
```

- DELETE
Type first name you want to delete and click DLETE button
(without quotation)
```
sachi
```

- UPDATE
Type data and click UPDATE button (you can only update firstname or lastname)
```
{first: "firstname", last: "lastmane, phone: "phoneNumber"}
```

