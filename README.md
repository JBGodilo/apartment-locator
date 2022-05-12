# MapLibre GL JS map using Angular

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A quick way to start a web map application with Angular using MapLibre GL JS.

A simple fullscreen map application is used to showcase how to utilize MapTiler maps together with Angular and MapLibre GL JS for your Angular app.

## Screenshot

![angular maplibre template](/assets/angular-maplibre-template.png "Angular MapLibre template")

<p align="right">(<a href="#top">back to top</a>)</p>

## Step-by-step tutorial - How to display a map in Angular using MapLibre GL JS

Documentation: [How to display a map in Angular using MapLibre GL JS](https://documentation.maptiler.com/hc/en-us/articles/4411342514193-how-to-display-a-map-in-angular-using-maplibre-gl-js?utm_medium=referral&utm_source=github&utm_campaign=2022-05%20%7C%20js%20frameworks%20%7C%20angular)

## Demo

Online demo: https://labs.maptiler.com/angular-template-maplibre-gl-js/

<p align="right">(<a href="#top">back to top</a>)</p>

## Build With

* [Angular](https://angular.io/)
* [MapLibre GL JS](https://maplibre.org/)
* [MapTiler](https://www.maptiler.com/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* Angular CLI
  ```sh
  npm install -g @angular/cli
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Create an app

Clone the repo to create a new angular project. Run in your command-line:

```
  git clone https://github.com/maptiler/angular-template-maplibre-gl-js.git my-angular-map
```

Navigate to the newly created project folder **my-angular-map**

Install the NPM packages dependencies. Run in your command-line:

```
  npm install
```

### API KEY

Navigate to the `src/environments` folder

Open the `environment.ts` and `environment.prod.ts` file, :warning: you will need to replace **YOUR_MAPTILER_API_KEY** with your own MapTiler API key.

Your MapTiler account access key is on your MapTiler [Cloud](https://cloud.maptiler.com/account/keys/) account page. 

:information_source: If you don't have an API KEY, you can create it for free at https://www.maptiler.com/cloud/

### Run

To start your local environment, run: 

```
  ng serve --open
``` 

You will find your app on address http://localhost:4200/.

Now you should see the app in your browser.

<p align="right">(<a href="#top">back to top</a>)</p>

### Build

To build for production, run: 
```
  ng build --base-href /angular-template-maplibre-gl-js/
``` 

### gh-pages

To deploy the app to the gh-pages branch, run:
```
  node gh-pages.js
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Instead of using or developing a custom map component, you can use the [Angular binding of maplibre-gl-js](https://maplibre.org/ngx-maplibre-gl/).

