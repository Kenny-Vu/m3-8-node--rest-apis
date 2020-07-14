# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint           | method   | Description                                   |
| ------------------ | -------- | --------------------------------------------- |
| `/stock`           | `GET`    | It is look at the inventory                   |
| `/stock/:item`     | `GET`    | It is look at an item in the inventory        |
| `/stock`           | `POST`   | It is to add item to inventory                |
| `/stock/:item`     | `PATCH`  | It is to modify item in inventory             |
| `/stock/:item`     | `DELETE` | It is to remove item from the inventory       |
| `/customers`       | `GET`    | It is to look at the regular customer list    |
| `/customer/:name`  | `GET`    | It is look at details of a specific client    |
| `/customers`       | `POST`   | It's to add a new customer to regular clients |
| `/customers/:name` | `PATCH`  | It's to modify regular clients' info          |
| `/customers/:name` | `DELETE` | It is to remove customer                      |
| `/seating`         | `GET`    | It is look at the seating in the cafe         |
| `/seating`         | `PATCH`  | Used to update seating arrangement?           |
