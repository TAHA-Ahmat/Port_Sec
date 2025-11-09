<template>
  <svg
    viewBox="0 0 400 550"
    :class="[
      'w-full h-full',
      mode === 'background' ? 'map-background' : 'map-interactive'
    ]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <!-- Pattern de fond -->
      <pattern
        v-if="mode === 'interactive'"
        id="grid-pattern"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 20 0 L 0 0 0 20"
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          stroke-width="0.5"
        />
      </pattern>

      <!-- Gradient animé centré sur Douala (mode interactive) -->
      <radialGradient
        v-if="mode === 'interactive'"
        id="doualaGradient"
        :cx="gradientCx + '%'"
        :cy="gradientCy + '%'"
        r="15%"
      >
        <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.4" />
        <stop offset="50%" style="stop-color:#059669;stop-opacity:0.2" />
        <stop offset="100%" style="stop-color:#064e3b;stop-opacity:0.05" />
      </radialGradient>

      <!-- Gradient Tchad émeraude -->
      <linearGradient id="tchadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" :style="`stop-color:${mode === 'background' ? '#10b981' : '#EAB308'};stop-opacity:${mode === 'background' ? '0.6' : '0.08'}`" />
        <stop offset="100%" :style="`stop-color:${mode === 'background' ? '#059669' : '#CA8A04'};stop-opacity:${mode === 'background' ? '0.8' : '0.08'}`" />
      </linearGradient>

      <!-- Gradient Cameroun - SAME AS TCHAD (emerald) -->
      <linearGradient id="camerounGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" :style="`stop-color:${mode === 'background' ? '#10b981' : '#EAB308'};stop-opacity:${mode === 'background' ? '0.6' : '0.08'}`" />
        <stop offset="100%" :style="`stop-color:${mode === 'background' ? '#059669' : '#CA8A04'};stop-opacity:${mode === 'background' ? '0.8' : '0.08'}`" />
      </linearGradient>

      <!-- Filtre glow pour mode background -->
      <filter v-if="mode === 'background'" id="glow">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <!-- Fond pour mode interactive -->
    <rect
      v-if="mode === 'interactive'"
      width="400"
      height="550"
      fill="rgba(23,23,23,0.5)"
    />
    <rect
      v-if="mode === 'interactive'"
      width="400"
      height="550"
      fill="url(#grid-pattern)"
    />

    <!-- Gradient animé Douala (mode interactive) -->
    <rect
      v-if="mode === 'interactive'"
      width="100%"
      height="100%"
      fill="url(#doualaGradient)"
    />

    <!-- OCÉAN ATLANTIQUE (uniquement en mode interactive) -->
    <rect
      v-if="mode === 'interactive'"
      x="0"
      y="300"
      width="20"
      height="250"
      fill="rgba(59, 130, 246, 0.08)"
      stroke="rgba(59, 130, 246, 0.2)"
      stroke-width="1"
      stroke-dasharray="2,2"
      rx="2"
    />

    <!-- ===== PAYS VOISINS - VERSION ORIGINALE POUR PAGE PROJETS ===== -->
    <template v-if="mode === 'background'">
      <!-- South Sudan (SSD) -->
      <path
        id="SSD"
        d="M 324.6 523.2 L 315.3 511.4 L 312.8 503.9 L 306.9 507.6 L 302.1 506.4 L 299.3 509.4 L 294.5 507.3 L 288.1 492.6 L 286.5 487.0 L 278.6 480.0 L 275.9 469.3 L 271.5 461.7 L 264.5 452.4 L 264.4 446.7 L 258.6 439.5 L 251.4 432.6 L 254.7 430.6 L 258.3 427.3 L 261.0 411.4 L 263.9 403.2 L 271.5 400.8 L 273.3 405.6 L 278.7 416.0 L 281.6 417.5 L 285.4 414.5 L 293.0 415.1 L 294.4 418.7 L 304.9 418.7 L 305.3 415.1 L 310.7 411.7 L 311.8 406.6 L 315.8 402.9 L 324.6 413.3 L 330.0 411.4 L 335.3 398.6 L 341.1 388.9 L 340.1 378.2 L 337.6 373.1 L 343.9 372.1 L 344.7 368.2 L 349.5 369.4 L 348.3 382.5 L 349.5 395.3 L 355.0 402.3 L 356.2 408.4 L 356.1 417.2 L 357.5 417.6 L 357.6 431.4 L 356.1 436.8 L 350.5 437.3 L 346.9 447.4 L 353.4 448.6 L 358.7 457.3 L 360.5 464.4 L 365.3 468.5 L 371.6 487.8 L 364.4 499.5 L 357.9 510.1 L 351.5 518.2 L 344.1 518.2 L 335.6 522.4 L 328.9 518.4 L 324.6 523.2 Z"
        fill="rgba(115, 115, 115, 0.3)"
        stroke="rgba(82, 82, 82, 0.5)"
        stroke-width="1.5"
      />

      <!-- Central African Republic (CAF) -->
      <path
        id="CAF"
        d="M 288.1 492.6 L 284.7 494.5 L 277.9 494.1 L 270.0 492.2 L 266.1 493.8 L 264.5 498.1 L 261.1 498.6 L 257.0 494.8 L 245.2 503.7 L 240.4 501.9 L 239.0 503.3 L 235.8 514.0 L 228.0 510.5 L 220.3 508.8 L 213.6 502.2 L 204.9 496.2 L 199.3 501.9 L 195.2 510.9 L 194.2 523.3 L 187.5 522.3 L 180.3 519.3 L 174.1 528.7 L 168.6 545.3 L 167.4 540.1 L 167.0 532.0 L 162.2 526.3 L 158.3 517.2 L 157.4 510.8 L 152.4 501.5 L 153.3 496.2 L 152.2 488.8 L 153.0 475.0 L 155.5 471.8 L 160.8 453.8 L 169.5 452.5 L 171.5 447.9 L 173.2 448.3 L 175.9 452.3 L 189.1 445.5 L 193.6 438.6 L 199.1 432.4 L 198.0 426.1 L 201.0 424.5 L 211.2 425.6 L 221.1 417.4 L 228.7 398.0 L 234.0 390.8 L 240.7 387.8 L 241.9 395.4 L 247.9 406.5 L 248.0 413.7 L 246.3 421.1 L 246.9 426.6 L 250.6 431.7 L 258.6 439.5 L 264.4 446.7 L 264.5 452.4 L 271.5 461.7 L 275.9 469.3 L 278.6 480.0 L 286.5 487.0 L 288.1 492.6 Z"
        fill="rgba(115, 115, 115, 0.3)"
        stroke="rgba(82, 82, 82, 0.5)"
        stroke-width="1.5"
      />

      <!-- Nigeria (NGA) -->
      <path
        id="NGA"
        d="M 28.3 474.4 L 28.9 445.8 L 28.7 434.6 L 30.7 423.4 L 33.9 417.9 L 39.0 406.9 L 37.9 402.2 L 40.0 395.0 L 37.6 384.5 L 38.0 378.6 L 38.7 362.8 L 41.8 355.6 L 43.2 345.4 L 46.0 341.6 L 57.3 339.5 L 67.8 346.1 L 71.8 352.8 L 77.2 353.1 L 82.2 348.7 L 94.9 357.9 L 100.3 357.5 L 106.5 349.9 L 112.6 350.5 L 115.7 348.0 L 121.3 349.0 L 129.5 354.2 L 137.7 344.3 L 140.2 345.0 L 147.3 364.4 L 149.3 364.0 L 153.4 371.1 L 152.3 374.3 L 151.7 380.2 L 142.9 393.9 L 140.1 405.2 L 138.6 414.4 L 136.4 418.4 L 134.2 430.8 L 128.6 438.1 L 127.0 447.1 L 124.6 454.2 L 123.6 461.6 L 116.4 467.6 L 110.5 460.3 L 106.5 460.6 L 100.2 471.0 L 97.2 471.1 L 92.2 488.3 L 89.5 500.8 L 78.5 507.2 L 74.6 506.3 L 70.5 510.2 L 62.1 509.9 L 56.5 498.8 L 53.0 485.9 L 45.5 474.2 L 37.6 474.4 L 28.3 474.4 Z"
        fill="rgba(115, 115, 115, 0.3)"
        stroke="rgba(82, 82, 82, 0.5)"
        stroke-width="1.5"
      />

      <!-- Niger (NER) -->
      <path
        id="NER"
        d="M 156.3 179.9 L 158.9 207.4 L 162.9 212.0 L 163.0 217.7 L 167.4 223.8 L 165.1 231.4 L 161.1 267.4 L 160.5 290.5 L 147.1 307.2 L 142.5 330.6 L 146.9 337.2 L 146.9 348.6 L 153.6 349.0 L 152.6 357.3 L 149.6 358.4 L 149.3 364.0 L 147.3 364.4 L 140.2 345.0 L 137.7 344.3 L 129.5 354.2 L 121.3 349.0 L 115.7 348.0 L 112.6 350.5 L 106.5 349.9 L 100.3 357.5 L 94.9 357.9 L 82.2 348.7 L 77.2 353.1 L 71.8 352.8 L 67.8 346.1 L 57.3 339.5 L 46.0 341.6 L 43.2 345.4 L 41.8 355.6 L 38.7 362.8 L 38.0 378.6 L 30.0 368.4 L 26.2 368.4 L 22.7 373.6 L 22.9 361.5 L 10.8 357.5 L 10.5 348.9 L 4.5 337.3 L 3.1 329.2 L 3.9 320.6 L 10.7 319.9 L 14.6 313.6 L 28.9 312.1 L 38.3 309.3 L 39.2 298.3 L 44.9 286.5 L 44.9 245.6 L 59.8 237.7 L 90.2 202.9 L 126.3 169.1 L 143.0 176.7 L 148.9 186.4 L 156.3 179.9 Z"
        fill="rgba(115, 115, 115, 0.3)"
        stroke="rgba(82, 82, 82, 0.5)"
        stroke-width="1.5"
      />

      <!-- Sudan (SDN) -->
      <path
        id="SDN"
        d="M 258.6 439.5 L 250.6 431.7 L 246.9 426.6 L 246.3 421.1 L 248.0 413.7 L 247.9 406.5 L 241.9 395.4 L 240.7 387.8 L 240.8 383.5 L 236.9 378.3 L 236.8 368.0 L 234.6 361.1 L 230.9 362.1 L 232.0 355.6 L 234.7 348.2 L 233.5 340.9 L 237.0 335.4 L 234.8 331.3 L 237.6 320.3 L 242.4 307.3 L 251.4 308.5 L 250.9 238.1 L 251.1 230.6 L 263.2 230.6 L 263.2 195.2 L 305.5 195.2 L 346.3 195.2 L 388.1 195.2 L 391.5 212.6 L 389.2 215.8 L 390.7 234.1 L 394.5 255.2 L 398.6 259.6 L 404.3 266.2 L 399.0 276.3 L 391.2 279.2 L 387.9 284.6 L 386.9 296.4 L 382.3 322.5 L 383.5 329.6 L 381.8 344.8 L 377.5 362.3 L 371.2 371.1 L 366.6 384.7 L 365.6 391.9 L 360.6 396.9 L 357.5 415.5 L 357.6 431.4 L 357.5 417.6 L 356.1 417.2 L 356.2 408.4 L 355.0 402.3 L 349.5 395.3 L 348.3 382.5 L 349.5 369.4 L 344.7 368.2 L 343.9 372.1 L 337.6 373.1 L 340.1 378.2 L 341.1 388.9 L 335.3 398.6 L 330.0 411.4 L 324.6 413.3 L 315.8 402.9 L 311.8 406.6 L 310.7 411.7 L 305.3 415.1 L 304.9 418.7 L 294.4 418.7 L 293.0 415.1 L 285.4 414.5 L 281.6 417.5 L 278.7 416.0 L 273.3 405.6 L 271.5 400.8 L 263.9 403.2 L 261.0 411.4 L 258.3 427.3 L 254.7 430.6 L 251.4 432.6 L 258.6 439.5 Z"
        fill="rgba(115, 115, 115, 0.3)"
        stroke="rgba(82, 82, 82, 0.5)"
        stroke-width="1.5"
      />

      <!-- Libya (LBY) -->
      <path
        id="LBY"
        d="M 263.2 195.2 L 263.2 230.6 L 251.1 230.6 L 250.9 238.1 L 208.9 204.1 L 167.0 170.2 L 156.3 179.9 L 148.9 186.4 L 143.0 176.7 L 126.3 169.1 L 121.7 157.9 L 113.4 149.7 L 108.5 152.9 L 104.7 143.1 L 104.3 135.5 L 98.1 122.5 L 102.3 115.1 L 101.4 104.0 L 102.7 94.2 L 101.9 86.2 L 103.8 71.7 L 103.2 63.4 L 99.8 47.8 L 104.9 43.7 L 105.9 36.2 L 104.7 28.8 L 112.0 22.0 L 115.2 16.3 L 120.3 11.2 L 120.9 -2.4 L 133.3 3.7 L 137.7 2.1 L 146.5 5.1 L 160.5 13.0 L 165.4 28.8 L 174.9 32.3 L 189.7 39.7 L 200.9 48.5 L 206.0 43.9 L 211.1 35.7 L 208.6 22.1 L 211.9 13.5 L 219.5 5.2 L 226.8 2.8 L 241.0 6.4 L 244.6 14.3 L 248.5 14.4 L 251.9 17.4 L 262.3 19.5 L 264.9 25.4 L 261.1 33.9 L 262.7 41.5 L 260.0 52.4 L 263.2 66.7 L 263.2 129.8 L 263.2 195.2 Z"
        fill="rgba(115, 115, 115, 0.3)"
        stroke="rgba(82, 82, 82, 0.5)"
        stroke-width="1.5"
      />

      <!-- Egypt (EGY) -->
      <path
        id="EGY"
        d="M 388.1 195.2 L 346.3 195.2 L 305.5 195.2 L 263.2 195.2 L 263.2 129.8 L 263.2 66.7 L 260.0 52.4 L 262.7 41.5 L 261.1 33.9 L 264.9 25.4 L 278.9 25.1 L 289.0 29.8 L 299.5 35.0 L 304.4 37.8 L 312.5 32.2 L 316.8 27.1 L 326.1 25.6 L 333.6 27.9 L 336.4 36.7 L 338.9 30.9 L 347.3 35.1 L 355.5 36.1 L 360.7 31.6 L 360.7 31.6 L 366.6 57.5 L 367.6 62.1 L 364.6 69.2 L 362.4 82.6 L 359.5 91.8 L 357.1 94.9 L 353.6 89.2 L 348.8 81.3 L 341.3 55.9 L 340.2 57.5 L 344.6 76.2 L 351.0 94.0 L 359.0 121.7 L 362.9 131.3 L 366.3 141.3 L 375.7 161.0 L 373.6 164.1 L 374.0 175.6 L 386.2 191.5 L 388.1 195.2 Z"
        fill="rgba(115, 115, 115, 0.3)"
        stroke="rgba(82, 82, 82, 0.5)"
        stroke-width="1.5"
      />
    </template>

    <!-- FRONTIÈRE CAMEROUN (emerald - same as Tchad) - ORIGINAL VIEWBOX 400x550 -->
    <path
      d="M 156.3 267.7 166.5 283.8 168.3 300.6 167.3 317.5 181.3 340.5 166.8 340.2 159.5 341.9 147.8 339.5 142.0 351.4 157.5 366.1 168.8 370.5 172.3 381.0 180.5 398.3 176.5 405.2 163.5 430.8 157.3 435.5 155.3 455.0 157.8 465.7 155.8 473.3 168.0 486.5 170.3 495.5 179.8 508.7 191.5 516.8 192.8 528.3 195.5 535.6 193.5 549.3 173.0 543.4 152.0 536.6 119.3 535.6 116.3 534.4 100.8 537.5 85.0 534.1 72.8 535.8 30.5 535.3 34.3 515.3 24.3 498.5 12.5 494.3 7.3 482.8 0.5 479.2 0.8 472.3 7.5 454.3 19.8 429.8 27.3 429.8 42.8 414.9 52.5 414.5 67.0 425.0 85.0 416.4 87.3 405.9 93.3 395.6 97.3 382.9 111.0 372.4 116.3 354.6 121.8 349.0 125.5 335.8 132.3 319.7 154.0 300.2 155.5 291.6 158.3 287.2 148.0 277.0 148.8 268.9 Z"
      fill="url(#camerounGradient)"
      :stroke="mode === 'background' ? '#10b981' : 'rgba(234, 179, 8, 0.3)'"
      :stroke-width="mode === 'background' ? '3' : '1.5'"
      :stroke-opacity="mode === 'background' ? '0.8' : '1'"
      :stroke-dasharray="mode === 'interactive' ? '4,4' : 'none'"
      :filter="mode === 'background' ? 'url(#glow)' : 'none'"
    />

    <!-- FRONTIÈRE TCHAD - ORIGINAL VIEWBOX 400x550 -->
    <path
      d="M 176.5 405.2 180.5 398.3 172.3 381.0 168.8 370.5 157.5 366.1 142.0 351.4 147.8 339.5 159.5 341.9 166.8 340.2 181.3 340.5 167.3 317.5 168.3 300.6 166.5 283.8 156.3 267.7 158.8 255.7 142.3 255.0 142.3 238.9 131.5 229.3 142.5 196.1 175.8 172.2 177.0 139.2 187.0 87.9 192.8 76.9 181.8 68.4 181.5 60.3 171.8 53.7 165.3 14.4 191.5 0.5 295.0 48.8 398.3 97.4 399.5 197.8 377.3 196.1 365.3 214.7 358.5 230.3 363.8 236.4 355.3 244.0 358.3 254.5 351.5 265.2 349.0 274.5 358.0 273.0 363.5 282.8 363.8 297.5 373.3 304.8 373.0 310.9 356.5 315.3 343.5 325.6 324.8 353.2 300.3 364.9 275.3 363.4 268.0 365.6 270.5 374.6 257.0 383.4 246.0 393.5 213.5 403.0 207.0 397.4 202.8 396.9 198.0 403.2 Z"
      fill="url(#tchadGradient)"
      :stroke="mode === 'background' ? '#10b981' : 'rgba(234, 179, 8, 0.3)'"
      :stroke-width="mode === 'background' ? '3' : '1.5'"
      :stroke-opacity="mode === 'background' ? '0.8' : '1'"
      :stroke-dasharray="mode === 'interactive' ? '4,4' : 'none'"
      :filter="mode === 'background' ? 'url(#glow)' : 'none'"
    />

    <!-- Labels pays -->
    <template v-if="mode === 'interactive'">
      <text
        x="200"
        y="340"
        fill="rgba(255,255,255,0.18)"
        font-size="16"
        font-weight="600"
        text-anchor="middle"
        letter-spacing="2"
      >
        CAMEROUN
      </text>
      <text
        x="270"
        y="180"
        fill="rgba(255,255,255,0.18)"
        font-size="16"
        font-weight="600"
        text-anchor="middle"
        letter-spacing="2"
      >
        TCHAD
      </text>
    </template>

    <!-- Labels pays pour mode background (texte sur les formes) -->
    <template v-if="mode === 'background'">
      <!-- CAMEROUN écrit directement sur le pays (emerald - same as Tchad) -->
      <text
        x="100"
        y="420"
        fill="rgba(16, 185, 129, 0.5)"
        font-size="32"
        font-weight="700"
        text-anchor="middle"
        letter-spacing="4"
        style="text-transform: uppercase;"
      >
        CAMEROUN
      </text>

      <!-- TCHAD écrit directement sur le pays -->
      <text
        x="280"
        y="200"
        fill="rgba(16, 185, 129, 0.5)"
        font-size="42"
        font-weight="800"
        text-anchor="middle"
        letter-spacing="6"
        style="text-transform: uppercase;"
      >
        TCHAD
      </text>
    </template>

    <!-- Corridors et villes (uniquement en mode interactive) -->
    <template v-if="mode === 'interactive'">
      <!-- Corridor Douala-N'Djamena (RED) -->
      <line
        :x1="cities.douala.x"
        :y1="cities.douala.y"
        :x2="cities.ngaoundere.x"
        :y2="cities.ngaoundere.y"
        stroke="rgba(255, 59, 59, 0.6)"
        stroke-width="2.5"
        stroke-dasharray="6,4"
        class="corridor-line corridor-red"
      />
      <line
        :x1="cities.ngaoundere.x"
        :y1="cities.ngaoundere.y"
        :x2="cities.ndjamena.x"
        :y2="cities.ndjamena.y"
        stroke="rgba(255, 59, 59, 0.6)"
        stroke-width="2.5"
        stroke-dasharray="6,4"
        class="corridor-line corridor-red"
      />

      <!-- Ligne Douala-Kribi (RED) -->
      <line
        :x1="cities.douala.x"
        :y1="cities.douala.y"
        :x2="cities.kribi.x"
        :y2="cities.kribi.y"
        stroke="rgba(255, 59, 59, 0.6)"
        stroke-width="2.5"
        stroke-dasharray="6,4"
        class="corridor-line corridor-red"
      />

      <!-- Points des villes -->
      <!-- Douala (actif - vert avec animation) -->
      <g :transform="`translate(${cities.douala.x}, ${cities.douala.y})`">
        <circle r="12" fill="rgba(52, 211, 153, 0.2)" class="animate-ping-slow" />
        <circle r="6" fill="#34D399" stroke="#10B981" stroke-width="2" />
      </g>

      <!-- Kribi (prévu - jaune) -->
      <g :transform="`translate(${cities.kribi.x}, ${cities.kribi.y})`">
        <circle r="5" fill="#EAB308" fill-opacity="0.6" stroke="#CA8A04" stroke-width="1.5" />
      </g>

      <!-- Ngaoundéré (prévu - jaune) -->
      <g :transform="`translate(${cities.ngaoundere.x}, ${cities.ngaoundere.y})`">
        <circle r="5" fill="#EAB308" fill-opacity="0.6" stroke="#CA8A04" stroke-width="1.5" />
      </g>

      <!-- N'Djamena (référence - gris) -->
      <g :transform="`translate(${cities.ndjamena.x}, ${cities.ndjamena.y})`">
        <circle r="4" fill="#737373" fill-opacity="0.4" stroke="#525252" stroke-width="1" />
      </g>

      <!-- Labels des villes -->
      <!-- Douala (projet principal - maximum de visibilité) -->
      <g :transform="`translate(${cities.douala.x + 12}, ${cities.douala.y - 50})`" class="city-label">
        <rect x="-4" y="-4" width="120" height="54" rx="4" fill="rgba(23,23,23,0.95)" stroke="rgba(52,211,153,0.5)" stroke-width="1.5"/>
        <text x="0" y="8" fill="white" font-size="11" font-weight="700" style="text-shadow: 0 2px 30px rgba(0,0,0,0.95);">Douala</text>
        <g transform="translate(0, 16)">
          <circle cx="3" cy="0" r="2.5" fill="#34D399"/>
          <text x="9" y="3" fill="#34D399" font-size="9" font-weight="700" style="text-shadow: 0 1px 20px rgba(0,0,0,0.9);">En cours</text>
        </g>
        <text x="0" y="29" fill="rgba(255,255,255,0.9)" font-size="8" font-weight="600" style="text-shadow: 0 1px 15px rgba(0,0,0,0.9);">10 ha / 42K EVP/an</text>
        <text x="0" y="39" fill="rgba(255,255,255,0.8)" font-size="8" font-weight="600" style="text-shadow: 0 1px 15px rgba(0,0,0,0.9);">300+ emplois</text>
      </g>

      <!-- Kribi -->
      <g :transform="`translate(${cities.kribi.x + 12}, ${cities.kribi.y - 10})`" class="city-label">
        <rect x="-4" y="-4" width="130" height="44" rx="4" fill="rgba(23,23,23,0.95)" stroke="rgba(234,179,8,0.5)" stroke-width="1.5"/>
        <text x="0" y="8" fill="white" font-size="11" font-weight="700" style="text-shadow: 0 2px 30px rgba(0,0,0,0.95);">Kribi</text>
        <g transform="translate(0, 16)">
          <circle cx="3" cy="0" r="2.5" fill="#EAB308" fill-opacity="0.9"/>
          <text x="9" y="3" fill="#EAB308" font-size="9" font-weight="700" style="text-shadow: 0 1px 20px rgba(0,0,0,0.9);">Prévu 2030-2032</text>
        </g>
        <text x="0" y="29" fill="rgba(255,255,255,0.8)" font-size="8" font-weight="600" style="text-shadow: 0 1px 15px rgba(0,0,0,0.9);">Port en eau profonde</text>
      </g>

      <!-- Ngaoundéré -->
      <g :transform="`translate(${cities.ngaoundere.x + 12}, ${cities.ngaoundere.y - 58})`" class="city-label">
        <rect x="-4" y="-4" width="140" height="44" rx="4" fill="rgba(23,23,23,0.95)" stroke="rgba(234,179,8,0.5)" stroke-width="1.5"/>
        <text x="0" y="8" fill="white" font-size="11" font-weight="700" style="text-shadow: 0 2px 30px rgba(0,0,0,0.95);">Ngaoundéré</text>
        <g transform="translate(0, 16)">
          <circle cx="3" cy="0" r="2.5" fill="#EAB308" fill-opacity="0.9"/>
          <text x="9" y="3" fill="#EAB308" font-size="9" font-weight="700" style="text-shadow: 0 1px 20px rgba(0,0,0,0.9);">Prévu 2030-2032</text>
        </g>
        <text x="0" y="29" fill="rgba(255,255,255,0.8)" font-size="8" font-weight="600" style="text-shadow: 0 1px 15px rgba(0,0,0,0.9);">Corridor ferroviaire</text>
      </g>

      <!-- N'Djamena (Siège Social GPM) -->
      <g :transform="`translate(${cities.ndjamena.x + 12}, ${cities.ndjamena.y - 58})`" class="city-label">
        <rect x="-4" y="-4" width="145" height="38" rx="4" fill="rgba(23,23,23,0.95)" stroke="rgba(255,59,59,0.5)" stroke-width="1.5"/>
        <text x="0" y="8" fill="white" font-size="11" font-weight="700" style="text-shadow: 0 2px 30px rgba(0,0,0,0.95);">N'Djamena</text>
        <g transform="translate(0, 16)">
          <circle cx="3" cy="0" r="2.5" fill="#ff3b3b" fill-opacity="0.9"/>
          <text x="9" y="3" fill="#ff3b3b" font-size="9" font-weight="700" style="text-shadow: 0 1px 20px rgba(0,0,0,0.9);">Siège Social</text>
        </g>
        <text x="0" y="29" fill="rgba(255,255,255,0.9)" font-size="8" font-weight="600" style="text-shadow: 0 1px 15px rgba(0,0,0,0.9);">GPM Headquarters</text>
      </g>
    </template>
  </svg>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'

/**
 * MapGPM.vue - Composant carte unifié Tchad-Cameroun
 *
 * Deux modes d'affichage :
 * - background: carte décorative avec glow émeraude, opacité faible, sans labels
 * - interactive: carte complète avec villes, corridors, statuts des projets, gradient animé
 */

const props = defineProps({
  mode: {
    type: String,
    default: 'interactive',
    validator: (value) => ['background', 'interactive'].includes(value)
  }
})

// Positions GPS exactes des villes
const cities = reactive({
  douala: { x: 33.2, y: 491.1 },
  kribi: { x: 36.9, y: 519.3 },
  ngaoundere: { x: 132.4, y: 408.3 },
  ndjamena: { x: 170.7, y: 285.9 }
})

// ===== Gradient animé centré sur Douala (mode interactive) =====
// Conversion des coordonnées de Douala en pourcentages pour le gradient
// Douala est à (33.2, 491.1) sur viewBox 400x550
// cx = 33.2 / 400 * 100 = 8.3%
// cy = 491.1 / 550 * 100 = 89.3%
const gradientCx = ref(8.3)
const gradientCy = ref(89.3)

let rafId = null

// Animation du gradient (breathing effect subtil)
const animateGradient = () => {
  if (props.mode !== 'interactive') return

  const time = Date.now() / 1000
  // Mouvement très subtil autour de Douala (±1.5%)
  gradientCx.value = 8.3 + Math.sin(time * 0.3) * 1.5
  gradientCy.value = 89.3 + Math.cos(time * 0.3) * 1.5

  rafId = requestAnimationFrame(animateGradient)
}

onMounted(() => {
  if (props.mode === 'interactive' && typeof window !== 'undefined') {
    animateGradient()
  }
})

onUnmounted(() => {
  if (rafId) {
    cancelAnimationFrame(rafId)
  }
})
</script>

<style scoped>
/* Mode background : effet subtil */
.map-background {
  opacity: 1;
}

/* Mode interactive : pleine visibilité */
.map-interactive {
  opacity: 1;
}

/* Animation pulse pour Douala */
@keyframes ping-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
    transform: scale(1.5);
  }
}

.animate-ping-slow {
  animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Hover effects sur les corridors - renforce la visibilité */
.corridor-line {
  transition: stroke-opacity 0.3s ease, stroke-width 0.3s ease, filter 0.3s ease;
  cursor: pointer;
}

.corridor-line:hover {
  stroke-opacity: 1 !important;
  stroke-width: 3.5;
}

.corridor-red:hover {
  stroke: rgba(255, 59, 59, 0.9) !important;
  filter: drop-shadow(0 0 8px rgba(255, 59, 59, 0.6));
}

.corridor-emerald:hover {
  stroke: rgba(52, 211, 153, 0.8) !important;
}

.corridor-yellow:hover {
  stroke: rgba(234, 179, 8, 0.8) !important;
}

/* Hover effect sur les labels villes - slight glow */
.city-label {
  transition: filter 0.3s ease;
  cursor: pointer;
}

.city-label:hover {
  filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.4));
}

/* Responsive - Adapter les labels sur mobile */
@media (max-width: 480px) {
  .city-label text {
    font-size: 8px !important;
  }

  .city-label rect {
    width: 85px !important;
    height: 40px !important;
  }
}
</style>
