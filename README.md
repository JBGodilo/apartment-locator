# Apartment Locator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple map application to locate apartment that you prefer.

## Screenshot

![angular maplibre template](/assets/angular-maplibre-template.png "Angular MapLibre template")

<p align="right">(<a href="#top">back to top</a>)</p>

## Build With

- [Angular](https://angular.io/)
- [MapLibre GL JS](https://maplibre.org/)
- [MapTiler](https://www.maptiler.com/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- Angular CLI
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
