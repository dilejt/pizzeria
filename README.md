# Pizzeria
> React website created with Node.js, React.
> Live demo [_here_](http://dilejt.github.io/pizzeria).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Contact](#contact)

## General info
A pizzeria web application, allowing you to choose a pizza from the available menu. Each individual order can be further customized by modifying the size of the chosen pizza and extras. After approving your choices the order is placed in the shopping cart where you can change its quantity or remove it, dynamically modifying the total price in that way. All available pizzas and extras are saved in JSON files.
	
## Technologies Used
Project is created with:
* [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)
* [`react-bootstrap`](https://www.npmjs.com/package/react-bootstrap) v1.6.0 (Bootstrap 4.6)
* [`node-sass`](https://www.npmjs.com/package/node-sass)


## Features
List of features:
- CRUD cart
- CRUD pizza extras

	
## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

Then visit [`http://localhost:3000`](http://localhost:3000).


## Usage
You can add your own extras here.<br />
*extras.js*
```
const extras = [
    {
        id: 1,
        name: 'cola',
        price: 4,
        img: '/imgs/cola.png'
    },
    {
        id: 2,
        name: 'ketchup',
        price: 1,
        img: '/imgs/ketchup.png'
    },
    {
        id: 3,
        name: 'sos czosnkowy',
        price: 1,
        img: '/imgs/garlic.png'
    },
    {
        id: 4,
        name: 'pieczarki',
        price: 2,
        img: '/imgs/mushrooms.png'
    },
    {
        id: 5,
        name: 'oliwki',
        price: 4,
        img: '/imgs/olives.png'
    },
    {
        id: 6,
        name: 'ostry sos',
        price: 2,
        img: '/imgs/hot.png'
    }

]
```

You can add your own pizzas here.<br />
*products.js*
```
const products = [
    {
        id: 1,
        name: 'Hawajska',
        price: [13, 22, 34, 51],
        ingredients: ['ser', 'szynka', 'ananas'],
        img: '/imgs/hawajska.jpg'
    },
    {
        id: 2,
        name: 'Carbonara',
        price: [17, 26 , 42, 58],
        ingredients: ['ser','w??dzony boczek','cebula','pieczarki'],
        img: '/imgs/carbonara.jpg'
    },
    {
        id: 3,
        name: 'Cztery sery',
        price: [15, 25, 41, 57],
        ingredients: ['ser gouda','favita','camembert','gorgonzola','bazylia'],
        img: '/imgs/cztery_sery.jpg'
    },
    {
        id: 4,
        name: 'Capriciosa',
        price: [15, 22, 32, 51],
        ingredients: ['ser','pieczarki','szynka'],
        img: '/imgs/capriciosa.jpg'
    }

]
```

#### Branch [gh-pages](https://github.com/dilejt/pizzeria/tree/gh-pages) contains changes made in order to properly host the site on GitHub Pages
- For proper path routing
<br />*App.js*
```diff
- <BrowserRouter>
+ <HashRouter basename={process.env.PUBLIC_URL}>
```

- For correct display of images
```diff
- img: '/imgs/cola.png'
+ img: 'imgs/cola.png'
```
[Guide](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) how to deploy repo to GitHub Pages
## Contact
Created by [@Damian Jancewicz](https://www.linkedin.com/in/damian-jancewicz/) - feel free to contact me!
