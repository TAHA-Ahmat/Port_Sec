/**
 * Build complete MapGPM.vue with new ViewBox and all 36 countries
 */

const fs = require('fs');
const path = require('path');

// Read the GeoJSON file
const geoJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src', 'geoloFullLarge.json'), 'utf8')
);

// Projection function for new ViewBox: 0 0 800 600
function latLonToSVG(lon, lat) {
  const lonMin = -20;
  const lonMax = 50;
  const latMin = 0;
  const latMax = 38;

  const width = 800;
  const height = 600;

  const x = ((lon - lonMin) / (lonMax - lonMin)) * width;
  const y = height - ((lat - latMin) / (latMax - latMin)) * height;

  return { x: x.toFixed(1), y: y.toFixed(1) };
}

// Convert polygon coordinates to SVG path
function coordinatesToPath(coordinates) {
  if (!coordinates || !coordinates[0]) return '';

  const pathParts = coordinates[0].map((coord, index) => {
    const [lon, lat] = coord;
    const { x, y } = latLonToSVG(lon, lat);
    return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  });

  return pathParts.join(' ') + ' Z';
}

// Get Tchad and Cameroun with emerald styling
const tchad = geoJson.features.find(f => f.properties.iso_a3 === 'TCD');
const cameroun = geoJson.features.find(f => f.properties.iso_a3 === 'CMR');

const tchadPath = coordinatesToPath(tchad.geometry.coordinates);
const camerounPath = coordinatesToPath(cameroun.geometry.coordinates);

// Get all neighbors (exclude Tchad and Cameroun)
const neighbors = geoJson.features
  .filter(f => !['TCD', 'CMR'].includes(f.properties.iso_a3))
  .map(f => ({
    name: f.properties.name,
    iso: f.properties.iso_a3,
    path: coordinatesToPath(f.geometry.coordinates)
  }));

// Write Tchad path to file
console.log('TCHAD PATH:');
console.log(`      d="${tchadPath}"`);
console.log('\nCAMEROUN PATH:');
console.log(`      d="${camerounPath}"`);

console.log(`\n✅ Tchad and Cameroun paths generated for ViewBox="0 0 800 600"`);
console.log(`✅ ${neighbors.length} neighbor countries ready`);
