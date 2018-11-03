# General Assembly locations

## What it is

A full screen Google Maps with locations of all General Assembly [locations](www.ga.co/locations)

# How to scrape locations data

- Go to General Assembly [locations](www.ga.co/locations)
- Open the console and run the following:

```js
const container = document.querySelector('[data-component-name="Locations"]');
const data = JSON.parse(container.dataset.props);
const markers = data.markers;
console.log(markers);
```

- Replace the values of [`const marker`](https://github.com/pataruco/ga-locations/blob/master/scripts/main.js#L187) with the markers from the console and :tada:

## Live version

[https://pataruco.github.io/ga-locations/](https://pataruco.github.io/ga-locations/)
