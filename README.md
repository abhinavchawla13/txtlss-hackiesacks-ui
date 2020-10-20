# Emotican - txtlss hackiesacks UI  

<img src="https://img.shields.io/badge/angular%20-%23DD0031.svg?&style=for-the-badge&logo=angular&logoColor=white"/> <img src="https://img.shields.io/badge/tailwindcss%20-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white"/>
 <a href="https://txtlss-hackiesacks.web.app/" target="_blank"><img src="https://img.shields.io/badge/firebase%20-%23039BE5.svg?&style=for-the-badge&logo=firebase"/></a>

## Screenshots
<img src="https://i.imgur.com/t2NCL9U.png" style="margin: 10px 10%"/>
<img src="https://i.imgur.com/2lMp5YN.png"/>


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) (atleast v12.13.0, npm v6.12.0) installed.

```sh
git clone git@github.com:abhinavchawla13/txtlss-hackiesacks-ui
cd txtlss-hackiesacks-ui
npm install
ng serve
```

## Environment Configuration
Inside the `src`, there's an `environment` folder with three different environment files. I only used the `environment.ts` and `environment.prod.ts` for the project. It contains the following keys:
```
userApi
```
API (`userApi`) is deployed at [https://txtlss-hackiesacks.herokuapp.com/](https://txtlss-hackiesacks.herokuapp.com/)

## Deployment
This project is hosted on Firebase hosting. To deploy:
```
ng build --prod
firebase deploy
```
