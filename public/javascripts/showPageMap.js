mapboxgl.accessToken =
  "pk.eyJ1IjoiY29ydGV4NjkiLCJhIjoiY2t4dGE2dDlrM2xkbjJ4dWJ2dGVjODA3YyJ9.SVqiUAVvqvaFypsAfdn9vQ";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: campground.geometry.coordinates,
  zoom: 6,
});

new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${campground.title}</h3>`)
  )
  .addTo(map);

console.log(campground.geometry.coordinates);
