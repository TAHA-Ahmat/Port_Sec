/**
 * Update MapGPM.vue with 34 neighbor countries
 */

const fs = require('fs');
const path = require('path');

// Read current MapGPM.vue
const mapGpmPath = path.join(__dirname, 'src', 'components', 'MapGPM.vue');
const currentContent = fs.readFileSync(mapGpmPath, 'utf8');

// Read all neighbor paths
const neighborPaths = fs.readFileSync(path.join(__dirname, 'all-neighbor-paths.txt'), 'utf8');

// Find the section to replace
const startMarker = '    <!-- ===== PAYS VOISINS (en gris, mode background uniquement) ===== -->';
const endMarker = '    </template>\n\n    <!-- FRONTIÈRE CAMEROUN (emerald - same as Tchad) - NEW VIEWBOX 800x600 -->';

const startIndex = currentContent.indexOf(startMarker);
const endIndex = currentContent.indexOf(endMarker);

console.log('Start marker index:', startIndex);
console.log('End marker index:', endIndex);

if (startIndex === -1) {
  console.error('❌ Could not find START marker in MapGPM.vue');
  console.error('Looking for:', startMarker);
  process.exit(1);
}

if (endIndex === -1) {
  console.error('❌ Could not find END marker in MapGPM.vue');
  console.error('Looking for:', endMarker);
  // Let's try to find what's actually there
  const lines = currentContent.split('\n');
  const camerounLines = lines.filter(l => l.includes('FRONTIÈRE CAMEROUN'));
  console.error('Found CAMEROUN lines:', camerounLines);
  process.exit(1);
}

// Build new content
const before = currentContent.substring(0, startIndex);
const after = currentContent.substring(endIndex);

const newNeighborSection = `    <!-- ===== PAYS VOISINS (en gris, mode background uniquement) - 34 PAYS ===== -->
    <template v-if="mode === 'background'">
${neighborPaths.trim()}
    </template>

    <!-- FRONTIÈRE CAMEROUN (emerald - same as Tchad) - NEW VIEWBOX 800x600 -->`;

const newContent = before + newNeighborSection + after;

// Write back
fs.writeFileSync(mapGpmPath, newContent, 'utf8');

console.log('✅ MapGPM.vue updated successfully!');
console.log('✅ Replaced 7 countries with 34 countries');
console.log('✅ ViewBox: 0 0 800 600');
console.log('✅ Tchad & Cameroun: Emerald (updated paths)');
console.log('✅ 34 neighbors: Gray');
