/**
 * Convert geoloFullLarge.json (36 countries) to SVG paths
 * Excludes Chad (TCD) and Cameroon (CMR) - keeping existing paths
 */

const fs = require('fs');
const path = require('path');

// Read the GeoJSON file
const geoJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src', 'geoloFullLarge.json'), 'utf8')
);

// Projection function - wider ViewBox for 36 countries
function latLonToSVG(lon, lat) {
  // Extended bounds for full region
  const lonMin = -20;  // Western Sahara/Morocco
  const lonMax = 50;   // Somalia
  const latMin = 0;    // Equator
  const latMax = 38;   // Morocco/Tunisia

  // Larger ViewBox
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

// Countries to exclude (we keep existing paths for these)
const excludeCountries = ['TCD', 'CMR'];

// Convert all neighbors
const neighborCountries = geoJson.features
  .filter(feature => !excludeCountries.includes(feature.properties.iso_a3))
  .map(feature => ({
    name: feature.properties.name,
    iso: feature.properties.iso_a3,
    path: coordinatesToPath(feature.geometry.coordinates)
  }));

console.log('=== SVG PATHS FOR ALL NEIGHBOR COUNTRIES ===\n');

neighborCountries.forEach(country => {
  console.log(`      <!-- ${country.name} (${country.iso}) -->`);
  console.log(`      <path`);
  console.log(`        id="${country.iso}"`);
  console.log(`        d="${country.path}"`);
  console.log(`        fill="rgba(115, 115, 115, 0.3)"`);
  console.log(`        stroke="rgba(82, 82, 82, 0.5)"`);
  console.log(`        stroke-width="1.5"`);
  console.log(`      />\n`);
});

console.log('\n=== SUMMARY ===');
console.log(`Total neighbor countries: ${neighborCountries.length}`);
console.log('\nRegions covered:');
console.log('  - West Africa: Senegal, Mali, Guinea, Ghana, etc.');
console.log('  - North Africa: Morocco, Algeria, Tunisia, Libya, Egypt');
console.log('  - Central Africa: Nigeria, Niger, CAF, Congo, Gabon, DRC');
console.log('  - East Africa: Sudan, South Sudan, Ethiopia, Kenya, Somalia');
console.log('\nTchad (TCD) and Cameroun (CMR) excluded - keeping existing emerald paths');
console.log('\nSuggested ViewBox: "0 0 800 600"');
