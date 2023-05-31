# E-Commerce Application - Seller Dashboard 

It is an E-commerce web application created using ReactJS which can be used to browse, explore, and buy various types of products.

This repository contains the source code of the Seller Dashboard of the webapp.

The source code for the frontend of the application is present [here](https://github.com/muskanmi/E-Commerce).


## Features:

- **User Authentication:** The sellers of the platform can signup & login on this dashboard to perform all the desired activities required by them for their product listing. (User authentication is being performed with the help of **Google Auth** in this application).
- Sellers can add new categories of products or product lines. 
- Sellers can add new products to their product listings for various categories.
- Sellers can also find the details of all the orders received by them.


## Tools & Technology Used:

- React.js
- Next.js
- Tailwind CSS
- HTML
- CSS
- Javascript
- MongoDB
- Google Auth
- Stripe Payments
- Web APIs


## Prerequisites:

* React.js Version: **18.2.0**
* Next.js Version: **13.3.0**
* NPM Version: **9.6.2**
* You also need to have Mongo database setup using Mongo Atlas.


## Instructions:

You can follow the below steps to run the seller dashboard application in your system's local environment:

1. Get the source code on your pc via git.

    ```shell
    git clone https://github.com/muskanmi/E-Commerce-Admin
    ```

2.  Now, navigate inside the folder through your terminal.

    ```shell
    cd E-Commerce-Admin
    ```

3. Next, you need to create a configuration file named as `.env` at the root of the folder (where package.json file is present).

4. Then, enter the following statements after adding the values of appropriate configurations like *Google Auth ID*, *Google Auth Secret*, *MongoDB URI*, *AWS S3 Bucket credentials* in this newly created `.env` file:

    ```js
        GOOGLE_ID = ""
        GOOGLE_SECRET = ""
        MONGODB_URI = ""
        S3_ACCESS_KEY = ""
        S3_SECRET_ACCESS_KEY = ""
    ```

5. Next, install the required dependencies by running the following command:

    ```shell
    npm install
    ```

6. Finally, start the application by running:

    ```shell
    npm start
    ```

7. Voila! the admin server is ready for use. You can run it at [http://127.0.0.1:3000/](http://127.0.0.1:3000/).

8. You can now head over to the frontend repository by clicking [here](https://github.com/muskanmi/E-Commerce) to understand the steps to be followed for starting the ecommerce application.


***Note:*** The products displayed in the web application are just for reference and do not correspond to any real products.


#### :small_blue_diamond: Please do give a ⭐️ if you find this project useful.

