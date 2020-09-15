# Zero To Dev (Client Side) 💻

> Simple learning platform built with React and Redux.

I built this application to help people who want to learn web development. It gives the user a roadmap of what he needs to learn and in which order.

![Home Page](https://imgur.com/7i4u3Xw.png)

---

![HTML & CSS](https://imgur.com/crkvbDy.png)

---

![JavaScript](https://imgur.com/TRM1XK9.png)

---

![React](https://imgur.com/bkhTHp0.png)

---

![Video Page](https://imgur.com/iUHt61B.png)
_Notes are saved in the logged user account._

---

![Login Page](https://imgur.com/2sw14Ph.png)
_Keep reading to know how to set up the Google OAuth._

---

![Register Page](https://imgur.com/F5GODCU.png)

# Quick Start 🚀

Install the dependencies:

```bash
    yarn install
```

Create an `.env` file in the `root` directory with the following values:

```bash
    REACT_APP_API_URL=http://localhost:5000
    REACT_APP_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
```

_Of course you can change the **REACT_APP_API_URL** if your API URL is different or if you want to deploy the application to something like Heroku._

# How To Get Your Google Client ID

Read the official Google OAuth Documentation clicking [here](https://developers.google.com/identity/one-tap/web/guides/get-google-api-clientid 'Google OAuth Documentation') to know how you can get yours. Don't forget to add the URL of the application (i.e http://localhost:3000) to the **Authorized JavaScript origins**.

# Running The Application

```bash
    yarn start
```

# Some Functionalities 📁

-   State management with Redux and Redux Saga
-   Authentication system with Google OAuth implemented
-   Note management system (the user can add notes to each video and improve his learning process)
-   Mobile responsiveness

# Server Side Code 💻

The server side code of this project is in [this repo](https://github.com/felipemotarocha/zero-to-dev-server 'Zero To Dev Server Side Repo').

# Application Info 📝

## Author

Felipe Rocha [@dicasparadevs](https://instagram.com/dicasparadevs 'dicasparadevs Instagram').

## Version

1.0.0

## License

This project is licensed under the MIT License.
