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
