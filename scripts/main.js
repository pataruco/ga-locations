const mapContainer = document.getElementById('js-map');

const styles = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e9e9e9',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dedede',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffffff',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#333333',
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f2f2f2',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#fefefe',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#fefefe',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
];

const icon = {
  path: google.maps.SymbolPath.CIRCLE,
  strokeColor: '#4ed2ba',
  strokeWeight: 6,
  scale: 3,
};

const markers = [
  { name: 'Atlanta', coordinates: [-84.373329, 33.848688] },
  { name: 'Austin', coordinates: [-97.74054, 30.268571] },
  { name: 'Boston', coordinates: [-71.0574, 42.3531] },
  { name: 'Chicago', coordinates: [-87.649007, 41.886078] },
  { name: 'Dallas', coordinates: [-96.8716232, 32.8205866] },
  { name: 'Denver', coordinates: [-104.970456, 39.770574] },
  { name: 'London', coordinates: [-0.071965, 51.51514] },
  { name: 'Los Angeles', coordinates: [-118.2917, 34.0493] },
  { name: 'Melbourne', coordinates: [144.961787, -37.818211] },
  { name: 'New York City', coordinates: [-73.9813, 40.7375] },
  { name: 'Philadelphia', coordinates: [-75.16488, 39.948365] },
  { name: 'Providence', coordinates: [-71.41396, 41.823345] },
  { name: 'San Francisco', coordinates: [-122.4147, 37.7725] },
  { name: 'Seattle', coordinates: [-122.330307, 47.62324] },
  { name: 'Singapore', coordinates: [103.8295769, 1.3077119] },
  { name: 'Sydney', coordinates: [151.2045757, -33.8712472] },
  { name: 'Washington, D.C.', coordinates: [-77.036464, 38.907231] },
  { name: 'Toronto', coordinates: [-79.387076, 43.647285] },
];

const getCoordinates = () => {
  return markers.map(city => ({
    lat: city.coordinates[1],
    lng: city.coordinates[0],
    label: city.name,
  }));
};

const renderMarkers = map => {
  const coordinates = getCoordinates();

  coordinates.forEach(position => {
    const marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      icon,
      map,
      position,
    });

    google.maps.event.addListener(marker, 'click', _ => {
      marker.setLabel(position.label);
    });
  });
};

const loadMap = async () => {
  const map = new google.maps.Map(mapContainer, {
    center: { lat: 0, lng: 0 },
    zoom: 2,
    styles,
    scrollwheel: false,
  });
  renderMarkers(map);
};

document.addEventListener('DOMContentLoaded', loadMap);
