import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import OSM from 'ol/source/osm';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM({
        tilePixelRatio: 2
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

console.log(map)
