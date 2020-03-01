<template>
    <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el to="/patients" label="Patients" />
        <q-breadcrumbs-el label="Patients Odontogram" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
      <q-icon color="accent" id="odontogram">
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
        viewBox="0 0 2970 2100"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- <defs>
          <font id="FontID0" horiz-adv-x="667" font-variant="normal" fill-rule="nonzero" font-style="normal" font-weight="400">
          <font-face
            font-family="Arial">
          </font-face>
          <missing-glyph><path d="M0 0z"/></missing-glyph>
          <glyph unicode="3" horiz-adv-x="556"><path d="M41.998 190.003l88.0001 12.001c10.1686,-50.0062 27.1692,-86.0093 51.3296,-108.009 24.1717,-22 53.8407,-32.9944 89.0068,-32.9944 41.67,0 76.8361,14.3311 105.17,43.0047 28.3342,28.6622 42.4957,64.1564 42.4957,106.494 0,40.3353 -13.1661,73.669 -39.6679,100.001 -26.3322,26.1625 -59.8355,39.3286 -100.668,39.3286 -16.6612,0 -37.3265,-3.32545 -62.1656,-9.82932l9.82932 77.0057c5.83651,-0.667353 10.6776,-1.00668 14.1728,-1.00668 37.6658,0 71.3276,9.82932 101.494,29.3296 30.0083,19.5003 45.0067,49.5085 45.0067,90.0021 0,32.1687 -11.0057,58.8402 -32.836,80.0032 -21.8304,21.163 -49.9949,31.671 -84.4937,31.671 -34.3404,0 -62.833,-10.836 -85.67,-32.508 -22.837,-21.6607 -37.4962,-54.1574 -44,-97.5014l-88.0001 16.0052c10.836,58.9985 35.1661,104.831 73.3296,137.339 38.0052,32.4967 85.5003,48.6602 142.169,48.6602 39.0006,0 75.0037,-8.33626 107.828,-25.1671 33.0057,-16.6612 58.1728,-39.4982 75.5014,-68.3301 17.4982,-29.0016 26.1738,-59.6659 26.1738,-92.1739 0,-30.8227 -8.33626,-58.8289 -24.8391,-84.1656 -16.6612,-25.3255 -41.3306,-45.4931 -73.8273,-60.4916 42.326,-9.67096 75.162,-30.0083 98.6664,-60.8422 23.3347,-30.6643 34.9964,-69.3255 34.9964,-115.497 0,-62.4936 -22.837,-115.667 -68.3301,-159.169 -45.6741,-43.491 -103.338,-65.163 -173.003,-65.163 -62.833,0 -115,18.8329 -156.5,56.3291 -41.67,37.5075 -65.3327,86.0093 -71.1692,145.675z"/></glyph>
          <glyph unicode="8" horiz-adv-x="556"><path d="M177.505 388.162c-36.5008,13.3357 -63.5003,32.508 -81.1682,57.1661 -17.4982,24.8391 -26.3322,54.508 -26.3322,89.0068 0,52.1666 18.6633,95.8273 56.0011,131.333 37.4962,35.4941 87.1631,53.3317 149.329,53.3317 62.3353,0 112.67,-18.1656 150.663,-54.4967 38.0052,-36.3311 57.0078,-80.5009 57.0078,-132.667 0,-33.164 -8.67559,-62.1656 -26.0041,-86.6654 -17.3399,-24.6694 -43.672,-43.672 -79.1661,-57.0078 43.8304,-14.3311 76.9944,-37.3265 99.8315,-69.3255 22.837,-31.8406 34.3291,-69.8345 34.3291,-114.174 0,-61.1589 -21.6607,-112.5 -64.8237,-154.159 -43.3327,-41.67 -100.171,-62.5049 -170.673,-62.5049 -70.5019,0 -127.329,20.835 -170.661,62.6633 -43.1743,41.8396 -64.835,94.0063 -64.835,156.5 0,46.4998 11.8314,85.5003 35.4941,116.843 23.6741,31.49 57.3358,52.8227 101.008,64.1564zm-17.5095 149.34c0,-34.0011 10.836,-61.6679 32.3383,-83.1703 21.672,-21.5023 49.9949,-32.327 85.161,-32.327 34.1707,0 61.8376,10.6663 83.3399,31.999 21.5023,21.3327 32.1687,47.4952 32.1687,78.4988 0,32.327 -11.0057,59.4962 -33.164,81.4962 -22,22 -49.8366,33.0057 -83.3399,33.0057 -33.8314,0 -61.6679,-10.836 -83.668,-32.3383 -21.8304,-21.5023 -32.836,-47.1671 -32.836,-77.1641zm-28.9903 -331.007c0,-25.1671 5.8252,-49.3276 17.4982,-72.832 11.6617,-23.3347 29.3296,-41.5003 52.9923,-54.327 23.5044,-12.8381 48.8412,-19.3306 75.671,-19.3306 42.3373,0 77.0057,13.4941 104.164,40.4936 27.1692,26.9995 40.6746,61.3399 40.6746,102.999 0,42.3373 -14.0031,77.3338 -41.8396,105.001 -27.9949,27.6669 -63.3307,41.5003 -105.826,41.5003 -41.67,0 -75.8407,-13.6638 -102.84,-41.0026 -26.9995,-27.3275 -40.4936,-61.4983 -40.4936,-102.501z"/></glyph>
          <glyph unicode="5" horiz-adv-x="556"><path d="M41.998 188.001l92.0042 7.00155c6.83188,-44.8371 22.6674,-78.4988 47.3255,-101.166 24.6694,-22.4977 54.836,-33.8314 90.3415,-33.8314 42.835,0 78.6685,15.9938 107.828,47.8232 29.0016,32.0103 43.5024,74.3363 43.5024,127.001 0,50.1759 -13.8334,89.6741 -41.67,118.676 -27.8252,28.9903 -64.6654,43.491 -110.498,43.491 -28.5039,0 -53.999,-6.49255 -76.6664,-19.5003 -22.4977,-12.9964 -40.1656,-29.8273 -53.162,-50.4926l-83.0006 12.001 68.9975 367.994 354.998 0 0 -83.996 -284.835 0 -38.1635 -193.17c42.835,30.1666 87.8304,45.1651 134.839,45.1651 62.324,0 115,-21.6607 157.823,-64.9934 42.835,-43.3327 64.3373,-99.0058 64.3373,-167.008 0,-64.8237 -18.8329,-120.825 -56.4988,-167.992 -45.8324,-58.0031 -108.496,-87.0047 -187.832,-87.0047 -65.0047,0 -117.997,18.3352 -159.169,54.836 -41.161,36.5008 -64.6654,84.833 -70.5019,145.166z"/></glyph>
          <glyph unicode="2" horiz-adv-x="556"><path d="M503.003 83.996l0 -83.996 -474.002 0c-0.667353,21.163 2.82777,41.5003 10.327,61.1702 12.1707,32.1687 31.671,63.998 58.5008,95.16 26.8412,31.1733 65.1744,67.1651 115,107.998 77.5034,63.8397 130.168,114.344 157.676,151.67 27.6669,37.3378 41.5003,72.6736 41.5003,105.996 0,34.8381 -12.51,64.1677 -37.5075,88.1698 -24.9975,23.8324 -57.6638,35.8335 -97.8294,35.8335 -42.507,0 -76.4967,-12.6684 -102.003,-37.9939 -25.4951,-25.1671 -38.3332,-60.1749 -38.6612,-105.001l-90.0021 8.9923c6.16453,67.3348 29.4993,118.676 69.8345,154 40.4936,35.3358 94.6623,53.0037 162.834,53.0037 68.6582,0 123.166,-19.0026 163.162,-57.1661 40.1656,-38.1635 60.1636,-85.5003 60.1636,-141.829 0,-28.6736 -5.8252,-56.8381 -17.6679,-84.505 -11.6617,-27.8365 -31.162,-56.9965 -58.3312,-87.6608 -27.3275,-30.5059 -72.4926,-72.6736 -135.495,-126.005 -52.834,-44.3281 -86.8351,-74.3363 -101.834,-90.1605 -14.9985,-15.8355 -27.3388,-31.671 -37.1682,-47.6761l351.503 0z"/></glyph>
          <glyph unicode="7" horiz-adv-x="556"><path d="M46.9975 623.002l0 83.996 463.007 0 0 -68.0021c-45.5044,-48.4905 -90.8392,-112.998 -135.507,-193.498 -44.8258,-80.5009 -79.3358,-163.332 -103.836,-248.493 -17.4982,-59.8355 -28.8319,-125.666 -33.6617,-197.005l-90.0021 0c1.00668,56.3291 12.001,124.501 33.164,204.334 21.1743,80.0032 51.3409,156.998 90.8392,231.164 39.4982,74.1667 81.4962,136.672 125.994,187.504l-349.998 0z"/></glyph>
          <glyph unicode="4" horiz-adv-x="556"><path d="M322.999 0l0 171.001 -310.998 0 0 80.9985 327.003 464.003 71.9949 0 0 -464.003 97.0037 0 0 -80.9985 -97.0037 0 0 -171.001 -88.0001 0zm0 251.999l0 322.173 -224.502 -322.173 224.502 0z"/></glyph>
          <glyph unicode="1" horiz-adv-x="556"><path d="M371.998 0l-88.0001 0 0 560.339c-21.163,-20.3373 -48.9995,-40.5049 -83.3286,-60.6726 -34.3404,-20.1676 -65.3327,-35.3358 -92.6716,-45.3348l0 85.0027c49.1692,22.9954 92.1739,51.0016 129.003,83.996 36.8288,32.836 63.0026,64.6654 78.3291,95.669l56.6684 0 0 -718.999z"/></glyph>
          <glyph unicode="6" horiz-adv-x="556"><path d="M498.999 540.997l-86.9934 -7.00155c-7.83857,34.5101 -19.0026,59.6659 -33.5034,75.343 -23.8324,25.1671 -53.3317,37.6658 -88.3394,37.6658 -28.1646,0 -53.162,-7.83857 -74.6643,-23.5044 -27.6669,-20.1676 -49.3276,-49.4972 -65.5024,-88.1698 -15.9938,-38.8309 -24.3301,-93.995 -24.9975,-165.492 21.163,32.1574 47.1671,56.1594 77.8314,71.6669 30.6756,15.6658 62.6746,23.4931 96.3363,23.4931 58.6705,0 108.665,-21.6607 149.996,-64.835 41.1723,-43.163 61.8376,-98.8248 61.8376,-167.325 0,-45.0067 -9.67096,-86.6767 -29.0016,-125.338 -19.5003,-38.6725 -46.0021,-68.1718 -80.0032,-88.6674 -33.8314,-20.4957 -72.323,-30.834 -115.328,-30.834 -73.1713,0 -132.996,26.9995 -179.337,80.8289 -46.1605,53.8407 -69.3255,142.678 -69.3255,266.342 0,138.334 25.6648,239.003 76.8248,301.836 44.6674,54.6664 104.842,81.9939 180.672,81.9939 56.3291,0 102.671,-15.8355 138.662,-47.3368 36.0031,-31.5013 57.6638,-74.9924 64.835,-130.665zm-359.997 -308.996c0,-30.3363 6.50386,-59.3379 19.3306,-87.0047 12.8381,-27.6669 30.834,-48.6602 53.671,-63.161 22.9954,-14.5008 47.3255,-21.8304 73.16,-21.8304 37.5075,0 69.5065,14.9985 96.0083,44.9954 26.4905,29.9969 39.8263,70.6715 39.8263,122.171 0,49.4972 -13.1661,88.4978 -39.3286,116.99 -26.1738,28.5039 -59.5075,42.835 -100.001,42.835 -39.6679,0 -73.4993,-14.3311 -101.166,-42.835 -27.6669,-28.4926 -41.5003,-65.8304 -41.5003,-112.161z"/></glyph>
          </font>
        </defs> -->
        <g id="Camada_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"/>
          <line id="line-y" fill="#ffffff" stroke="#141515" stroke-width="4" x1="1483" y1="309" x2="1483" y2= "1795" />
          <line id="line-x" fill="#ffffff" stroke="#141515" stroke-width="4" x1="22" y1="1051" x2="2942" y2= "1051" />
        </g>
        <g data-number="11" id="11-18">
          <metadata id="CorelCorpID_1Corel-Layer"/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="18" id="18-facial" data-part="facial" :fill="odontogram[18].facial.color" stroke="#141515" stroke-width="0.762" points="24,723 64,768 127,768 167,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="18" id="18-mesial" data-part="mesial" :fill="odontogram[18].mesial.color" stroke="#141515" stroke-width="0.762" points="169,727 130,772 130,836 169,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="18" id="18-lingual" data-part="lingual" :fill="odontogram[18].lingual.color" stroke="#141515" stroke-width="0.762" points="64,839 127,839 167,884 24,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="18" id="18-distal" data-part="distal" :fill="odontogram[18].distal.color" stroke="#141515" stroke-width="0.762" points="61,836 61,772 21,727 21,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="18" id="18-occlusal" data-part="occlusal" :fill="odontogram[18].occlusal.color" stroke="#141515" stroke-width="0.762" points="65,774 125,774 125,834 65,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="18" id="18-root" data-part="root" :fill="odontogram[18].root.color" stroke="#141515" stroke-width="0.762" points="24,718 64,672 127,672 167,718 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="18" id="18-button" data-part="entire" :fill="odontogram[18].entire.color" stroke="#676766" stroke-width="0.762" x="23" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="45" y="991" data-number="18" id="18-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">18</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="17" id="17-facial" data-part="facial" :fill="odontogram[17].facial.color" stroke="#141515" stroke-width="0.762" points="204,723 244,768 307,768 347,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="17" id="17-mesial" data-part="mesial" :fill="odontogram[17].mesial.color" stroke="#141515" stroke-width="0.762" points="350,727 310,772 310,836 350,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="17" id="17-lingual" data-part="lingual" :fill="odontogram[17].lingual.color" stroke="#141515" stroke-width="0.762" points="244,839 307,839 347,884 204,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="17" id="17-distal" data-part="distal" :fill="odontogram[17].distal.color" stroke="#141515" stroke-width="0.762" points="241,836 241,772 202,727 202,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="17" id="17-occlusal" data-part="occlusal" :fill="odontogram[17].occlusal.color" stroke="#141515" stroke-width="0.762" points="246,774 306,774 306,834 246,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="17" id="17-root" data-part="root" :fill="odontogram[17].root.color" stroke="#141515" stroke-width="0.762" points="204,718 244,672 307,672 347,718 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="17" id="17-button" data-part="entire" :fill="odontogram[17].entire.color" stroke="#676766" stroke-width="0.762" x="203" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="225" y="991" data-number="17" id="17-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">17</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="16" id="16-facial" data-part="facial" :fill="odontogram[16].facial.color" stroke="#141515" stroke-width="0.762" points="384,723 424,768 487,768 527,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="16" id="16-mesial" data-part="mesial" :fill="odontogram[16].mesial.color" stroke="#141515" stroke-width="0.762" points="530,727 490,772 490,836 530,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="16" id="16-lingual" data-part="lingual" :fill="odontogram[16].lingual.color" stroke="#141515" stroke-width="0.762" points="424,839 487,839 527,884 384,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="16" id="16-distal" data-part="distal" :fill="odontogram[16].distal.color" stroke="#141515" stroke-width="0.762" points="421,836 421,772 382,727 382,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="16" id="16-occlusal" data-part="occlusal" :fill="odontogram[16].occlusal.color" stroke="#141515" stroke-width="0.762" points="426,774 486,774 486,834 426,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="16" id="16-root" data-part="root" :fill="odontogram[16].root.color" stroke="#141515" stroke-width="0.762" points="384,718 424,672 487,672 527,718 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="16" id="16-button" data-part="entire" :fill="odontogram[16].entire.color" stroke="#676766" stroke-width="0.762" x="383" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="405" y="991" data-number="16" id="16-sqrt_x0020_" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">16</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="15" id="15-facial" data-part="facial" :fill="odontogram[15].facial.color" stroke="#141515" stroke-width="0.762" points="565,723 604,768 668,768 707,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="15" id="15-mesial" data-part="mesial" :fill="odontogram[15].mesial.color" stroke="#141515" stroke-width="0.762" points="710,727 670,772 670,836 710,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="15" id="15-lingual" data-part="lingual" :fill="odontogram[15].lingual.color" stroke="#141515" stroke-width="0.762" points="604,839 668,839 707,884 565,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="15" id="15-distal" data-part="distal" :fill="odontogram[15].distal.color" stroke="#141515" stroke-width="0.762" points="602,836 602,772 562,727 562,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="15" id="15-occlusal" data-part="occlusal" :fill="odontogram[15].occlusal.color" stroke="#141515" stroke-width="0.762" points="606,774 666,774 666,834 606,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="15" id="15-root" data-part="root" :fill="odontogram[15].root.color" stroke="#141515" stroke-width="0.762" points="565,718 604,672 668,672 707,718 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="15" id="15-button" data-part="entire" :fill="odontogram[15].entire.color" stroke="#676766" stroke-width="0.762" x="563" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="585" y="991" data-number="15" id="15-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">15</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="14" id="14-facial" data-part="facial" :fill="odontogram[14].facial.color" stroke="#141515" stroke-width="0.762" points="745,723 784,768 848,768 887,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="14" id="14-mesial" data-part="mesial" :fill="odontogram[14].mesial.color" stroke="#141515" stroke-width="0.762" points="890,727 851,772 851,836 890,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="14" id="14-lingual" data-part="lingual" :fill="odontogram[14].lingual.color" stroke="#141515" stroke-width="0.762" points="784,839 848,839 887,884 745,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="14" id="14-distal" data-part="distal" :fill="odontogram[14].distal.color" stroke="#141515" stroke-width="0.762" points="782,836 782,772 742,727 742,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="14" id="14-occlusal" data-part="occlusal" :fill="odontogram[14].occlusal.color" stroke="#141515" stroke-width="0.762" points="786,774 846,774 846,834 786,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="14" id="14-root" data-part="root" :fill="odontogram[14].root.color" stroke="#141515" stroke-width="0.762" points="745,718 784,672 848,672 887,718 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="14" id="14-button" data-part="entire" :fill="odontogram[14].entire.color" stroke="#676766" stroke-width="0.762" x="743" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="766" y="991" data-number="14" id="14-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">14</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="13" id="13-facial" data-part="facial" :fill="odontogram[13].facial.color" stroke="#141515" stroke-width="0.762" points="925,723 965,768 1028,768 1068,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="13" id="13-mesial" data-part="mesial" :fill="odontogram[13].mesial.color" stroke="#141515" stroke-width="0.762" points="1070,727 1031,772 1031,836 1070,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="13" id="13-lingual" data-part="lingual" :fill="odontogram[13].lingual.color" stroke="#141515" stroke-width="0.762" points="965,839 1028,839 1068,884 925,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="13" id="13-distal" data-part="distal" :fill="odontogram[13].distal.color" stroke="#141515" stroke-width="0.762" points="962,836 962,772 922,727 922,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="13" id="13-occlusal" data-part="occlusal" :fill="odontogram[13].occlusal.color" stroke="#141515" stroke-width="0.762" points="966,774 1026,774 1026,834 966,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="13" id="13-root" data-part="root" :fill="odontogram[13].root.color" stroke="#141515" stroke-width="0.762" points="925,718 965,672 1028,672 1068,718 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="13" id="13-button" data-part="entire" :fill="odontogram[13].entire.color" stroke="#676766" stroke-width="0.762" x="924" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="946" y="991" data-number="13" id="13-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">13</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="12" id="12-facial" data-part="facial" :fill="odontogram[12].facial.color" stroke="#141515" stroke-width="0.762" points="1105,723 1145,768 1208,768 1248,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="12" id="12-mesial" data-part="mesial" :fill="odontogram[12].mesial.color" stroke="#141515" stroke-width="0.762" points="1251,727 1211,772 1211,836 1251,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="12" id="12-lingual" data-part="lingual" :fill="odontogram[12].lingual.color" stroke="#141515" stroke-width="0.762" points="1145,839 1208,839 1248,884 1105,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="12" id="12-distal" data-part="distal" :fill="odontogram[12].distal.color" stroke="#141515" stroke-width="0.762" points="1142,836 1142,772 1102,727 1102,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="12" id="12-occlusal" data-part="occlusal" :fill="odontogram[12].occlusal.color" stroke="#141515" stroke-width="0.762" points="1146,774 1207,774 1207,834 1146,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="12" id="12-root" data-part="root" :fill="odontogram[12].root.color" stroke="#141515" stroke-width="0.762" points="1105,718 1145,672 1208,672 1248,718 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="12" id="12-button" data-part="entire" :fill="odontogram[12].entire.color" stroke="#676766" stroke-width="0.762" x="1104" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1126" y="991" data-number="12" id="12-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">12</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="11" id="11-facial" data-part="facial" :fill="odontogram[11].facial.color" stroke="#141515" stroke-width="0.762" points="1285,723 1325,768 1388,768 1428,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="11" id="11-mesial" data-part="mesial" :fill="odontogram[11].mesial.color" stroke="#141515" stroke-width="0.762" points="1431,727 1391,772 1391,836 1431,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="11" id="11-lingual" data-part="lingual" :fill="odontogram[11].lingual.color" stroke="#141515" stroke-width="0.762" points="1325,839 1388,839 1428,884 1285,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="11" id="11-distal" data-part="distal" :fill="odontogram[11].distal.color" stroke="#141515" stroke-width="0.762" points="1322,836 1322,772 1283,727 1283,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="11" id="11-occlusal" data-part="occlusal" :fill="odontogram[11].occlusal.color" stroke="#141515" stroke-width="0.762" points="1327,774 1387,774 1387,834 1327,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="11" id="11-root" data-part="root" :fill="odontogram[11].root.color" stroke="#141515" stroke-width="0.762" points="1285,718 1325,672 1388,672 1428,718 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="11" id="11-button" data-part="entire" :fill="odontogram[11].entire.color" stroke="#676766" stroke-width="0.762" x="1284" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1306" y="991" data-number="11" id="11-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">11</text>
        </g>
        <g data-number="21" id="21-28">
          <metadata id="CorelCorpID_2Corel-Layer"/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="28" id="28-facial" data-part="facial" :fill="odontogram[28].facial.color" stroke="#141515" stroke-width="0.762" points="2795,723 2835,768 2898,768 2938,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="28" id="28-distal" data-part="distal" :fill="odontogram[28].distal.color" stroke="#141515" stroke-width="0.762" points="2940,727 2901,772 2901,835 2940,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="28" id="28-lingual" data-part="lingual" :fill="odontogram[28].lingual.color" stroke="#141515" stroke-width="0.762" points="2835,838 2898,838 2938,884 2795,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="28" id="28-mesial" data-part="mesial" :fill="odontogram[28].mesial.color" stroke="#141515" stroke-width="0.762" points="2832,835 2832,772 2792,727 2792,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="28" id="28-occlusal" data-part="occlusal" :fill="odontogram[28].occlusal.color" stroke="#141515" stroke-width="0.762" points="2836,774 2896,774 2896,834 2836,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="28" id="28-root" data-part="root" :fill="odontogram[28].root.color" stroke="#141515" stroke-width="0.762" points="2795,717 2835,672 2898,672 2938,717 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="28" id="28-button" data-part="entire" :fill="odontogram[28].entire.color" stroke="#676766" stroke-width="0.762" x="2794" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="2816" y="990" data-number="28" id="28-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">28</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="27" id="27-facial" data-part="facial" :fill="odontogram[27].facial.color" stroke="#141515" stroke-width="0.762" points="2615,723 2655,768 2718,768 2758,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="27" id="27-distal" data-part="distal" :fill="odontogram[27].distal.color" stroke="#141515" stroke-width="0.762" points="2760,727 2721,772 2721,835 2760,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="27" id="27-lingual" data-part="lingual" :fill="odontogram[27].lingual.color" stroke="#141515" stroke-width="0.762" points="2655,838 2718,838 2758,884 2615,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="27" id="27-mesial" data-part="mesial" :fill="odontogram[27].mesial.color" stroke="#141515" stroke-width="0.762" points="2652,835 2652,772 2612,727 2612,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="27" id="27-occlusal" data-part="occlusal" :fill="odontogram[27].occlusal.color" stroke="#141515" stroke-width="0.762" points="2656,774 2716,774 2716,834 2656,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="27" id="27-root" data-part="root" :fill="odontogram[27].root.color" stroke="#141515" stroke-width="0.762" points="2615,717 2655,672 2718,672 2758,717 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="27" id="27-button" data-part="entire" :fill="odontogram[27].entire.color" stroke="#676766" stroke-width="0.762" x="2613" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="2636" y="990" data-number="27" id="27-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">27</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="26" id="26-facial" data-part="facial" :fill="odontogram[26].facial.color" stroke="#141515" stroke-width="0.762" points="2435,723 2474,768 2538,768 2577,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="26" id="26-distal" data-part="distal" :fill="odontogram[26].distal.color" stroke="#141515" stroke-width="0.762" points="2580,727 2540,772 2540,835 2580,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="26" id="26-lingual" data-part="lingual" :fill="odontogram[26].lingual.color" stroke="#141515" stroke-width="0.762" points="2474,838 2538,838 2577,884 2435,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="26" id="26-mesial" data-part="mesial" :fill="odontogram[26].mesial.color" stroke="#141515" stroke-width="0.762" points="2472,835 2472,772 2432,727 2432,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="26" id="26-occlusal" data-part="occlusal" :fill="odontogram[26].occlusal.color" stroke="#141515" stroke-width="0.762" points="2476,774 2536,774 2536,834 2476,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="26" id="26-root" data-part="root" :fill="odontogram[26].root.color" stroke="#141515" stroke-width="0.762" points="2435,717 2474,672 2538,672 2577,717 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="26" id="26-button" data-part="entire" :fill="odontogram[26].entire.color" stroke="#676766" stroke-width="0.762" x="2433" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="2455" y="990" data-number="26" id="26-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">26</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="25" id="25-facial" data-part="facial" :fill="odontogram[25].facial.color" stroke="#141515" stroke-width="0.762" points="2255,723 2294,768 2358,768 2397,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="25" id="25-distal" data-part="distal" :fill="odontogram[25].distal.color" stroke="#141515" stroke-width="0.762" points="2400,727 2360,772 2360,835 2400,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="25" id="25-lingual" data-part="lingual" :fill="odontogram[25].lingual.color" stroke="#141515" stroke-width="0.762" points="2294,838 2358,838 2397,884 2255,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="25" id="25-mesial" data-part="mesial" :fill="odontogram[25].mesial.color" stroke="#141515" stroke-width="0.762" points="2291,835 2291,772 2252,727 2252,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="25" id="25-occlusal" data-part="occlusal" :fill="odontogram[25].occlusal.color" stroke="#141515" stroke-width="0.762" points="2296,774 2356,774 2356,834 2296,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="25" id="25-root" data-part="root" :fill="odontogram[25].root.color" stroke="#141515" stroke-width="0.762" points="2255,717 2294,672 2358,672 2397,717 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="25" id="25-button" data-part="entire" :fill="odontogram[25].entire.color" stroke="#676766" stroke-width="0.762" x="2253" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="2275" y="990" data-number="25" id="25-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">25</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="24" id="24-facial" data-part="facial" :fill="odontogram[24].facial.color" stroke="#141515" stroke-width="0.762" points="2074,723 2114,768 2177,768 2217,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="24" id="24-distal" data-part="distal" :fill="odontogram[24].distal.color" stroke="#141515" stroke-width="0.762" points="2220,727 2180,772 2180,835 2220,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="24" id="24-lingual" data-part="lingual" :fill="odontogram[24].lingual.color" stroke="#141515" stroke-width="0.762" points="2114,838 2177,838 2217,884 2074,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="24" id="24-mesial" data-part="mesial" :fill="odontogram[24].mesial.color" stroke="#141515" stroke-width="0.762" points="2111,835 2111,772 2072,727 2072,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="24" id="24-occlusal" data-part="occlusal" :fill="odontogram[24].occlusal.color" stroke="#141515" stroke-width="0.762" points="2116,774 2176,774 2176,834 2116,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="24" id="24-root" data-part="root" :fill="odontogram[24].root.color" stroke="#141515" stroke-width="0.762" points="2074,717 2114,672 2177,672 2217,717 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="24" id="24-button" data-part="entire" :fill="odontogram[24].entire.color" stroke="#676766" stroke-width="0.762" x="2073" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="2095" y="990" data-number="24" id="24-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">24</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="23" id="23-facial" data-part="facial" :fill="odontogram[23].facial.color" stroke="#141515" stroke-width="0.762" points="1894,723 1934,768 1997,768 2037,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="23" id="23-distal" data-part="distal" :fill="odontogram[23].distal.color" stroke="#141515" stroke-width="0.762" points="2040,727 2000,772 2000,835 2040,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="23" id="23-lingual" data-part="lingual" :fill="odontogram[23].lingual.color" stroke="#141515" stroke-width="0.762" points="1934,838 1997,838 2037,884 1894,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="23" id="23-mesial" data-part="mesial" :fill="odontogram[23].mesial.color" stroke="#141515" stroke-width="0.762" points="1931,835 1931,772 1891,727 1891,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="23" id="23-occlusal" data-part="occlusal" :fill="odontogram[23].occlusal.color" stroke="#141515" stroke-width="0.762" points="1935,774 1996,774 1996,834 1935,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="23" id="23-root" data-part="root" :fill="odontogram[23].root.color" stroke="#141515" stroke-width="0.762" points="1894,717 1934,672 1997,672 2037,717 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="23" id="23-button" data-part="entire" :fill="odontogram[23].entire.color" stroke="#676766" stroke-width="0.762" x="1893" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1915" y="990" data-number="23" id="23-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">23</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="22" id="22-facial" data-part="facial" :fill="odontogram[22].facial.color" stroke="#141515" stroke-width="0.762" points="1714,723 1754,768 1817,768 1857,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="22" id="22-distal" data-part="distal" :fill="odontogram[22].distal.color" stroke="#141515" stroke-width="0.762" points="1859,727 1820,772 1820,835 1859,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="22" id="22-lingual" data-part="lingual" :fill="odontogram[22].lingual.color" stroke="#141515" stroke-width="0.762" points="1754,838 1817,838 1857,884 1714,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="22" id="22-mesial" data-part="mesial" :fill="odontogram[22].mesial.color" stroke="#141515" stroke-width="0.762" points="1751,835 1751,772 1711,727 1711,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="22" id="22-occlusal" data-part="occlusal" :fill="odontogram[22].occlusal.color" stroke="#141515" stroke-width="0.762" points="1755,774 1815,774 1815,834 1755,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="22" id="22-root" data-part="root" :fill="odontogram[22].root.color" stroke="#141515" stroke-width="0.762" points="1714,717 1754,672 1817,672 1857,717 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="22" id="22-button" data-part="entire" :fill="odontogram[22].entire.color" stroke="#676766" stroke-width="0.762" x="1713" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1735" y="990" data-number="22" id="22-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">22</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="21" id="21-facial" data-part="facial" :fill="odontogram[21].facial.color" stroke="#141515" stroke-width="0.762" points="1534,723 1573,768 1637,768 1676,723 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="21" id="21-distal" data-part="distal" :fill="odontogram[21].distal.color" stroke="#141515" stroke-width="0.762" points="1679,727 1640,772 1640,835 1679,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="21" id="21-lingual" data-part="lingual" :fill="odontogram[21].lingual.color" stroke="#141515" stroke-width="0.762" points="1573,838 1637,838 1676,884 1534,884 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="21" id="21-mesial" data-part="mesial" :fill="odontogram[21].mesial.color" stroke="#141515" stroke-width="0.762" points="1571,835 1571,772 1531,727 1531,881 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="21" id="21-occlusal" data-part="occlusal" :fill="odontogram[21].occlusal.color" stroke="#141515" stroke-width="0.762" points="1575,774 1635,774 1635,834 1575,834 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="21" id="21-root" data-part="root" :fill="odontogram[21].root.color" stroke="#141515" stroke-width="0.762" points="1534,717 1573,672 1637,672 1676,717 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="21" id="21-button" data-part="entire" :fill="odontogram[21].entire.color" stroke="#676766" stroke-width="0.762" x="1532" y="909" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1555" y="990" data-number="21" id="21-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">21</text>
        </g>
        <g data-number="31" id="31-38">
          <metadata id="CorelCorpID_3Corel-Layer"/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="38" id="38-facial" data-part="facial" :fill="odontogram[38].facial.color" stroke="#141515" stroke-width="0.762" points="2794,1378 2834,1333 2897,1333 2937,1378 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="38" id="38-distal" data-part="distal" :fill="odontogram[38].distal.color" stroke="#141515" stroke-width="0.762" points="2940,1374 2900,1329 2900,1266 2940,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="38" id="38-lingual" data-part="lingual" :fill="odontogram[38].lingual.color" stroke="#141515" stroke-width="0.762" points="2834,1263 2897,1263 2937,1218 2794,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="38" id="38-mesial" data-part="mesial" :fill="odontogram[38].mesial.color" stroke="#141515" stroke-width="0.762" points="2831,1266 2831,1329 2792,1374 2792,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="38" id="38-occlusal" data-part="occlusal" :fill="odontogram[38].occlusal.color" stroke="#141515" stroke-width="0.762" points="2836,1327 2896,1327 2896,1267 2836,1267 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="38" id="38-root" data-part="root" :fill="odontogram[38].root.color" stroke="#141515" stroke-width="0.762" points="2794,1384 2834,1429 2897,1429 2937,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="38" id="38-button" data-part="entire" :fill="odontogram[38].entire.color" stroke="#676766" stroke-width="0.762" x="2793" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 1266.75 127.406)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="38" id="38-sqrt_x0020_" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">38</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="37" id="37-facial" data-part="facial" :fill="odontogram[37].facial.color" stroke="#141515" stroke-width="0.762" points="2614,1378 2654,1333 2717,1333 2757,1378 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="37" id="37-distal" data-part="distal" :fill="odontogram[37].distal.color" stroke="#141515" stroke-width="0.762" points="2760,1374 2720,1329 2720,1266 2760,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="37" id="37-lingual" data-part="lingual" :fill="odontogram[37].lingual.color" stroke="#141515" stroke-width="0.762" points="2654,1263 2717,1263 2757,1218 2614,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="37" id="37-mesial" data-part="mesial" :fill="odontogram[37].mesial.color" stroke="#141515" stroke-width="0.762" points="2651,1266 2651,1329 2612,1374 2612,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="37" id="37-occlusal" data-part="occlusal" :fill="odontogram[37].occlusal.color" stroke="#141515" stroke-width="0.762" points="2656,1327 2716,1327 2716,1267 2656,1267 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="37" id="37-root" data-part="root" :fill="odontogram[37].root.color" stroke="#141515" stroke-width="0.762" points="2614,1384 2654,1429 2717,1429 2757,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="37" id="37-button" data-part="entire" :fill="odontogram[37].entire.color" stroke="#676766" stroke-width="0.762" x="2613" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 1086.56 121.995)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="37" id="37-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">37</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="36" id="36-facial" data-part="facial" :fill="odontogram[36].facial.color" stroke="#141515" stroke-width="0.762" points="2434,1378 2474,1333 2537,1333 2577,1378 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="36" id="36-distal" data-part="distal" :fill="odontogram[36].distal.color" stroke="#141515" stroke-width="0.762" points="2579,1374 2540,1329 2540,1266 2579,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="36" id="36-lingual" data-part="lingual" :fill="odontogram[36].lingual.color" stroke="#141515" stroke-width="0.762" points="2474,1263 2537,1263 2577,1218 2434,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="36" id="36-mesial" data-part="mesial" :fill="odontogram[36].mesial.color" stroke="#141515" stroke-width="0.762" points="2471,1266 2471,1329 2431,1374 2431,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="36" id="36-occlusal" data-part="occlusal" :fill="odontogram[36].occlusal.color" stroke="#141515" stroke-width="0.762" points="2475,1327 2535,1327 2535,1267 2475,1267 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="36" id="36-root" data-part="root" :fill="odontogram[36].root.color" stroke="#141515" stroke-width="0.762" points="2434,1384 2474,1429 2537,1429 2577,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="36" id="36-button" data-part="entire" :fill="odontogram[36].entire.color" stroke="#676766" stroke-width="0.762" x="2433" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 906.376 121.995)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="36" id="36-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">36</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="35" id="35-facial" data-part="facial" :fill="odontogram[35].facial.color" stroke="#141515" stroke-width="0.762" points="2254,1378 2294,1333 2357,1333 2397,1378 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="35" id="35-distal" data-part="distal" :fill="odontogram[35].distal.color" stroke="#141515" stroke-width="0.762" points="2399,1374 2360,1329 2360,1266 2399,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="35" id="35-lingual" data-part="lingual" :fill="odontogram[35].lingual.color" stroke="#141515" stroke-width="0.762" points="2294,1263 2357,1263 2397,1218 2254,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="35" id="35-mesial" data-part="mesial" :fill="odontogram[35].mesial.color" stroke="#141515" stroke-width="0.762" points="2291,1266 2291,1329 2251,1374 2251,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="35" id="35-occlusal" data-part="occlusal" :fill="odontogram[35].occlusal.color" stroke="#141515" stroke-width="0.762" points="2295,1327 2355,1327 2355,1267 2295,1267 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="35" id="35-root" data-part="root" :fill="odontogram[35].root.color" stroke="#141515" stroke-width="0.762" points="2254,1384 2294,1429 2357,1429 2397,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="35" id="35-button" data-part="entire" :fill="odontogram[35].entire.color" stroke="#676766" stroke-width="0.762" x="2252" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 726.188 121.995)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="35" id="35-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">35</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="34" id="34-facial" data-part="facial" :fill="odontogram[34].facial.color" stroke="#141515" stroke-width="0.762" points="2074,1378 2113,1333 2177,1333 2216,1378 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="34" id="34-distal" data-part="distal" :fill="odontogram[34].distal.color" stroke="#141515" stroke-width="0.762" points="2219,1374 2179,1329 2179,1266 2219,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="34" id="34-lingual" data-part="lingual" :fill="odontogram[34].lingual.color" stroke="#141515" stroke-width="0.762" points="2113,1263 2177,1263 2216,1218 2074,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="34" id="34-mesial" data-part="mesial" :fill="odontogram[34].mesial.color" stroke="#141515" stroke-width="0.762" points="2111,1266 2111,1329 2071,1374 2071,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="34" id="34-occlusal" data-part="occlusal" :fill="odontogram[34].occlusal.color" stroke="#141515" stroke-width="0.762" points="2115,1327 2175,1327 2175,1267 2115,1267 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="34" id="34-root" data-part="root" :fill="odontogram[34].root.color" stroke="#141515" stroke-width="0.762" points="2074,1384 2113,1429 2177,1429 2216,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="34" id="34-button" data-part="entire" :fill="odontogram[34].entire.color" stroke="#676766" stroke-width="0.762" x="2072" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 546 121.995)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="34" id="34-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">34</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="33" id="33-facial" data-part="facial" :fill="odontogram[33].facial.color" stroke="#141515" stroke-width="0.762" points="1894,1378 1933,1333 1997,1333 2036,1378 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="33" id="33-distal" data-part="distal" :fill="odontogram[33].distal.color" stroke="#141515" stroke-width="0.762" points="2039,1374 1999,1329 1999,1266 2039,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="33" id="33-lingual" data-part="lingual" :fill="odontogram[33].lingual.color" stroke="#141515" stroke-width="0.762" points="1933,1263 1997,1263 2036,1218 1894,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="33" id="33-mesial" data-part="mesial" :fill="odontogram[33].mesial.color" stroke="#141515" stroke-width="0.762" points="1930,1266 1930,1329 1891,1374 1891,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="33" id="33-occlusal" data-part="occlusal" :fill="odontogram[33].occlusal.color" stroke="#141515" stroke-width="0.762" points="1935,1327 1995,1327 1995,1267 1935,1267 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="33" id="33-root" data-part="root" :fill="odontogram[33].root.color" stroke="#141515" stroke-width="0.762" points="1894,1384 1933,1429 1997,1429 2036,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="33" id="33-button" data-part="entire" :fill="odontogram[33].entire.color" stroke="#676766" stroke-width="0.762" x="1892" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 365.812 121.995)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="33" id="33-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">33</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="32" id="32-facial" data-part="facial" :fill="odontogram[32].facial.color" stroke="#141515" stroke-width="0.762" points="1713,1378 1753,1333 1816,1333 1856,1378 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="32" id="32-distal" data-part="distal" :fill="odontogram[32].distal.color" stroke="#141515" stroke-width="0.762" points="1859,1374 1819,1329 1819,1266 1859,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="32" id="32-lingual" data-part="lingual" :fill="odontogram[32].lingual.color" stroke="#141515" stroke-width="0.762" points="1753,1263 1816,1263 1856,1218 1713,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="32" id="32-mesial" data-part="mesial" :fill="odontogram[32].mesial.color" stroke="#141515" stroke-width="0.762" points="1750,1266 1750,1329 1711,1374 1711,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="32" id="32-occlusal" data-part="occlusal" :fill="odontogram[32].occlusal.color" stroke="#141515" stroke-width="0.762" points="1755,1327 1815,1327 1815,1267 1755,1267 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="32" id="32-root" data-part="root" :fill="odontogram[32].root.color" stroke="#141515" stroke-width="0.762" points="1713,1384 1753,1429 1816,1429 1856,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="32" id="32-button" data-part="entire" :fill="odontogram[32].entire.color" stroke="#676766" stroke-width="0.762" x="1712" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 185.624 121.995)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="32" id="32-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">32</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="31" id="31-facial" data-part="facial" :fill="odontogram[31].facial.color" stroke="#141515" stroke-width="0.762" points="1533,1378 1573,1333 1636,1333 1676,1378 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="31" id="31-distal" data-part="distal" :fill="odontogram[31].distal.color" stroke="#141515" stroke-width="0.762" points="1679,1374 1639,1329 1639,1266 1679,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="31" id="31-lingual" data-part="lingual" :fill="odontogram[31].lingual.color" stroke="#141515" stroke-width="0.762" points="1573,1263 1636,1263 1676,1218 1533,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="31" id="31-mesial" data-part="mesial" :fill="odontogram[31].mesial.color" stroke="#141515" stroke-width="0.762" points="1570,1266 1570,1329 1530,1374 1530,1220 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="31" id="31-occlusal" data-part="occlusal" :fill="odontogram[31].occlusal.color" stroke="#141515" stroke-width="0.762" points="1574,1327 1635,1327 1635,1267 1574,1267 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="31" id="31-root" data-part="root" :fill="odontogram[31].root.color" stroke="#141515" stroke-width="0.762" points="1533,1384 1573,1429 1636,1429 1676,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="31" id="31-button" data-part="entire" :fill="odontogram[31].entire.color" stroke="#676766" stroke-width="0.762" x="1532" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 5.43633 121.995)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="31" id="31-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">31</text>
          </g>
        </g>
        <g data-number="41" id="41-48">
          <metadata id="CorelCorpID_4Corel-Layer"/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="48" id="48-facial" data-part="facial" :fill="odontogram[48].facial.color" stroke="#141515" stroke-width="0.762" points="23,1379 63,1333 126,1333 166,1379 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="48" id="48-mesial" data-part="mesial" :fill="odontogram[48].mesial.color" stroke="#141515" stroke-width="0.762" points="168,1375 129,1329 129,1266 168,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="48" id="48-lingual" data-part="lingual" :fill="odontogram[48].lingual.color" stroke="#141515" stroke-width="0.762" points="63,1263 126,1263 166,1218 23,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="48" id="48-distal" data-part="distal" :fill="odontogram[48].distal.color" stroke="#141515" stroke-width="0.762" points="60,1266 60,1329 20,1375 20,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="48" id="48-occlusal" data-part="occlusal" :fill="odontogram[48].occlusal.color" stroke="#141515" stroke-width="0.762" points="64,1328 124,1328 124,1268 64,1268 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="48" id="48-root" data-part="root" :fill="odontogram[48].root.color" stroke="#141515" stroke-width="0.762" points="23,1384 63,1429 126,1429 166,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="48" id="48-button" data-part="entire" :fill="odontogram[48].entire.color" stroke="#676766" stroke-width="0.762" x="22" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 -1504.62 122.182)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="48" id="48-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">48</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="47" id="47-facial" data-part="facial" :fill="odontogram[47].facial.color" stroke="#141515" stroke-width="0.762" points="203,1379 243,1333 306,1333 346,1379 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="47" id="47-mesial" data-part="mesial" :fill="odontogram[47].mesial.color" stroke="#141515" stroke-width="0.762" points="349,1375 309,1329 309,1266 349,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="47" id="47-lingual" data-part="lingual" :fill="odontogram[47].lingual.color" stroke="#141515" stroke-width="0.762" points="243,1263 306,1263 346,1218 203,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="47" id="47-distal" data-part="distal" :fill="odontogram[47].distal.color" stroke="#141515" stroke-width="0.762" points="240,1266 240,1329 201,1375 201,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="47" id="47-occlusal" data-part="occlusal" :fill="odontogram[47].occlusal.color" stroke="#141515" stroke-width="0.762" points="245,1328 305,1328 305,1268 245,1268 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="47" id="47-root" data-part="root" :fill="odontogram[47].root.color" stroke="#141515" stroke-width="0.762" points="203,1384 243,1429 306,1429 346,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="47" id="47-button" data-part="entire" :fill="odontogram[47].entire.color" stroke="#676766" stroke-width="0.762" x="202" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 -1324.43 122.182)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="47" id="47-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">47</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="46" id="46-facial" data-part="facial" :fill="odontogram[46].facial.color" stroke="#141515" stroke-width="0.762" points="383,1379 423,1333 486,1333 526,1379 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="46" id="46-mesial" data-part="mesial" :fill="odontogram[46].mesial.color" stroke="#141515" stroke-width="0.762" points="529,1375 489,1329 489,1266 529,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="46" id="46-lingual" data-part="lingual" :fill="odontogram[46].lingual.color" stroke="#141515" stroke-width="0.762" points="423,1263 486,1263 526,1218 383,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="46" id="46-distal" data-part="distal" :fill="odontogram[46].distal.color" stroke="#141515" stroke-width="0.762" points="420,1266 420,1329 381,1375 381,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="46" id="46-occlusal" data-part="occlusal" :fill="odontogram[46].occlusal.color" stroke="#141515" stroke-width="0.762" points="425,1328 485,1328 485,1268 425,1268 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="46" id="46-root" data-part="root" :fill="odontogram[46].root.color" stroke="#141515" stroke-width="0.762" points="383,1384 423,1429 486,1429 526,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="46" id="46-button" data-part="entire" :fill="odontogram[46].entire.color" stroke="#676766" stroke-width="0.762" x="382" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 -1144.25 122.182)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="46" id="46-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">46</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="45" id="45-facial" data-part="facial" :fill="odontogram[45].facial.color" stroke="#141515" stroke-width="0.762" points="564,1379 603,1333 667,1333 706,1379 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="45" id="45-mesial" data-part="mesial" :fill="odontogram[45].mesial.color" stroke="#141515" stroke-width="0.762" points="709,1375 669,1329 669,1266 709,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="45" id="45-lingual" data-part="lingual" :fill="odontogram[45].lingual.color" stroke="#141515" stroke-width="0.762" points="603,1263 667,1263 706,1218 564,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="45" id="45-distal" data-part="distal" :fill="odontogram[45].distal.color" stroke="#141515" stroke-width="0.762" points="601,1266 601,1329 561,1375 561,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="45" id="45-occlusal" data-part="occlusal" :fill="odontogram[45].occlusal.color" stroke="#141515" stroke-width="0.762" points="605,1328 665,1328 665,1268 605,1268 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="45" id="45-root" data-part="root" :fill="odontogram[45].root.color" stroke="#141515" stroke-width="0.762" points="564,1384 603,1429 667,1429 706,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="45" id="45-button" data-part="entire" :fill="odontogram[45].entire.color" stroke="#676766" stroke-width="0.762" x="562" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 -964.059 122.182)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="45" id="45-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">45</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="44" id="44-facial" data-part="facial" :fill="odontogram[44].facial.color" stroke="#141515" stroke-width="0.762" points="744,1379 783,1333 847,1333 887,1379 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="44" id="44-mesial" data-part="mesial" :fill="odontogram[44].mesial.color" stroke="#141515" stroke-width="0.762" points="889,1375 850,1329 850,1266 889,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="44" id="44-lingual" data-part="lingual" :fill="odontogram[44].lingual.color" stroke="#141515" stroke-width="0.762" points="783,1263 847,1263 887,1218 744,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="44" id="44-distal" data-part="distal" :fill="odontogram[44].distal.color" stroke="#141515" stroke-width="0.762" points="781,1266 781,1329 741,1375 741,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="44" id="44-occlusal" data-part="occlusal" :fill="odontogram[44].occlusal.color" stroke="#141515" stroke-width="0.762" points="785,1328 845,1328 845,1268 785,1268 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="44" id="44-root" data-part="root" :fill="odontogram[44].root.color" stroke="#141515" stroke-width="0.762" points="744,1384 783,1429 847,1429 887,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="44" id="44-button" data-part="entire" :fill="odontogram[44].entire.color" stroke="#676766" stroke-width="0.762" x="742" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 -783.871 122.182)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="44" id="44-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">44</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="43" id="43-facial" data-part="facial" :fill="odontogram[43].facial.color" stroke="#141515" stroke-width="0.762" points="924,1379 964,1333 1027,1333 1067,1379 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="43" id="43-mesial" data-part="mesial" :fill="odontogram[43].mesial.color" stroke="#141515" stroke-width="0.762" points="1069,1375 1030,1329 1030,1266 1069,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="43" id="43-lingual" data-part="lingual" :fill="odontogram[43].lingual.color" stroke="#141515" stroke-width="0.762" points="964,1263 1027,1263 1067,1218 924,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="43" id="43-distal" data-part="distal" :fill="odontogram[43].distal.color" stroke="#141515" stroke-width="0.762" points="961,1266 961,1329 921,1375 921,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="43" id="43-occlusal" data-part="occlusal" :fill="odontogram[43].occlusal.color" stroke="#141515" stroke-width="0.762" points="965,1328 1025,1328 1025,1268 965,1268 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="43" id="43-root" data-part="root" :fill="odontogram[43].root.color" stroke="#141515" stroke-width="0.762" points="924,1384 964,1429 1027,1429 1067,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="43" id="43-button" data-part="entire" :fill="odontogram[43].entire.color" stroke="#676766" stroke-width="0.762" x="923" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 -603.683 122.182)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="43" id="43-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">43</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="42" id="42-facial" data-part="facial" :fill="odontogram[42].facial.color" stroke="#141515" stroke-width="0.762" points="1104,1379 1144,1333 1207,1333 1247,1379 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="42" id="42-mesial" data-part="mesial" :fill="odontogram[42].mesial.color" stroke="#141515" stroke-width="0.762" points="1250,1375 1210,1329 1210,1266 1250,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="42" id="42-lingual" data-part="lingual" :fill="odontogram[42].lingual.color" stroke="#141515" stroke-width="0.762" points="1144,1263 1207,1263 1247,1218 1104,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="42" id="42-distal" data-part="distal" :fill="odontogram[42].distal.color" stroke="#141515" stroke-width="0.762" points="1141,1266 1141,1329 1102,1375 1102,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="42" id="42-occlusal" data-part="occlusal" :fill="odontogram[42].occlusal.color" stroke="#141515" stroke-width="0.762" points="1146,1328 1206,1328 1206,1268 1146,1268 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="42" id="42-root" data-part="root" :fill="odontogram[42].root.color" stroke="#141515" stroke-width="0.762" points="1104,1384 1144,1429 1207,1429 1247,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="42" id="42-button" data-part="entire" :fill="odontogram[42].entire.color" stroke="#676766" stroke-width="0.762" x="1103" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 -423.495 122.182)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="42" id="42-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">42</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="41" id="41-facial" data-part="facial" :fill="odontogram[41].facial.color" stroke="#141515" stroke-width="0.762" points="1284,1379 1324,1333 1387,1333 1427,1379 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="41" id="41-mesial" data-part="mesial" :fill="odontogram[41].mesial.color" stroke="#141515" stroke-width="0.762" points="1430,1375 1390,1329 1390,1266 1430,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="41" id="41-lingual" data-part="lingual" :fill="odontogram[41].lingual.color" stroke="#141515" stroke-width="0.762" points="1324,1263 1387,1263 1427,1218 1284,1218 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="41" id="41-distal" data-part="distal" :fill="odontogram[41].distal.color" stroke="#141515" stroke-width="0.762" points="1321,1266 1321,1329 1282,1375 1282,1221 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="41" id="41-occlusal" data-part="occlusal" :fill="odontogram[41].occlusal.color" stroke="#141515" stroke-width="0.762" points="1326,1328 1386,1328 1386,1268 1326,1268 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="41" id="41-root" data-part="root" :fill="odontogram[41].root.color" stroke="#141515" stroke-width="0.762" points="1284,1384 1324,1429 1387,1429 1427,1384 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="41" id="41-button" data-part="entire" :fill="odontogram[41].entire.color" stroke="#676766" stroke-width="0.762" x="1283" y="1094" width="148" height="97"/>
          <g transform="matrix(1.04273 0 0 1 -243.308 122.182)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="41" id="41-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="84.783" font-family="Arial">41</text>
          </g>
        </g>
        <g data-number="51" id="51-55">
          <metadata id="CorelCorpID_5Corel-Layer"/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="55" id="55-facial" data-part="facial" :fill="odontogram[55].facial.color" stroke="#141515" stroke-width="0.762" points="565,485 604,530 668,530 707,485 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="55" id="55-mesial" data-part="mesial" :fill="odontogram[55].mesial.color" stroke="#141515" stroke-width="0.762" points="710,489 670,534 670,598 710,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="55" id="55-lingual" data-part="lingual" :fill="odontogram[55].lingual.color" stroke="#141515" stroke-width="0.762" points="604,601 668,601 707,646 565,646 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="55" id="55-distal" data-part="distal" :fill="odontogram[55].distal.color" stroke="#141515" stroke-width="0.762" points="602,598 602,534 562,489 562,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="55" id="55-occlusal" data-part="occlusal" :fill="odontogram[55].occlusal.color" stroke="#141515" stroke-width="0.762" points="606,536 666,536 666,596 606,596 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="55" id="55-root" data-part="root" :fill="odontogram[55].root.color" stroke="#141515" stroke-width="0.762" points="565,480 604,434 668,434 707,480 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="55" id="55-button" data-part="entire" :fill="odontogram[55].entire.color" stroke="#676766" stroke-width="0.762" x="562" y="310" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="584" y="391" data-number="55" id="55-sqr0" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">55</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="54" id="54-facial" data-part="facial" :fill="odontogram[54].facial.color" stroke="#141515" stroke-width="0.762" points="745,485 784,530 848,530 887,485 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="54" id="54-mesial" data-part="mesial" :fill="odontogram[54].mesial.color" stroke="#141515" stroke-width="0.762" points="890,489 851,534 851,598 890,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="54" id="54-lingual" data-part="lingual" :fill="odontogram[54].lingual.color" stroke="#141515" stroke-width="0.762" points="784,601 848,601 887,646 745,646 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="54" id="54-distal" data-part="distal" :fill="odontogram[54].distal.color" stroke="#141515" stroke-width="0.762" points="782,598 782,534 742,489 742,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="54" id="54-occlusal" data-part="occlusal" :fill="odontogram[54].occlusal.color" stroke="#141515" stroke-width="0.762" points="786,536 846,536 846,596 786,596 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="54" id="54-root" data-part="root" :fill="odontogram[54].root.color" stroke="#141515" stroke-width="0.762" points="745,480 784,434 848,434 887,480 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="54" id="54-button" data-part="entire" :fill="odontogram[54].entire.color" stroke="#676766" stroke-width="0.762" x="742" y="310" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="764" y="391" data-number="54" id="54-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">54</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="53" id="53-facial" data-part="facial" :fill="odontogram[53].facial.color" stroke="#141515" stroke-width="0.762" points="925,485 965,530 1028,530 1068,485 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="53" id="53-mesial" data-part="mesial" :fill="odontogram[53].mesial.color" stroke="#141515" stroke-width="0.762" points="1070,489 1031,534 1031,598 1070,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="53" id="53-lingual" data-part="lingual" :fill="odontogram[53].lingual.color" stroke="#141515" stroke-width="0.762" points="965,601 1028,601 1068,646 925,646 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="53" id="53-distal" data-part="distal" :fill="odontogram[53].distal.color" stroke="#141515" stroke-width="0.762" points="962,598 962,534 922,489 922,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="53" id="53-occlusal" data-part="occlusal" :fill="odontogram[53].occlusal.color" stroke="#141515" stroke-width="0.762" points="966,536 1026,536 1026,596 966,596 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="53" id="53-root" data-part="root" :fill="odontogram[53].root.color" stroke="#141515" stroke-width="0.762" points="925,480 965,434 1028,434 1068,480 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="53" id="53-button" data-part="entire" :fill="odontogram[53].entire.color" stroke="#676766" stroke-width="0.762" x="922" y="310" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="944" y="391" data-number="53" id="53-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">53</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="52" id="52-facial" data-part="facial" :fill="odontogram[52].facial.color" stroke="#141515" stroke-width="0.762" points="1105,485 1145,530 1208,530 1248,485 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="52" id="52-mesial" data-part="mesial" :fill="odontogram[52].mesial.color" stroke="#141515" stroke-width="0.762" points="1251,489 1211,534 1211,598 1251,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="52" id="52-lingual" data-part="lingual" :fill="odontogram[52].lingual.color" stroke="#141515" stroke-width="0.762" points="1145,601 1208,601 1248,646 1105,646 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="52" id="52-distal" data-part="distal" :fill="odontogram[52].distal.color" stroke="#141515" stroke-width="0.762" points="1142,598 1142,534 1102,489 1102,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="52" id="52-occlusal" data-part="occlusal" :fill="odontogram[52].occlusal.color" stroke="#141515" stroke-width="0.762" points="1146,536 1207,536 1207,596 1146,596 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="52" id="52-root" data-part="root" :fill="odontogram[52].root.color" stroke="#141515" stroke-width="0.762" points="1105,480 1145,434 1208,434 1248,480 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="52" id="52-button" data-part="entire" :fill="odontogram[52].entire.color" stroke="#676766" stroke-width="0.762" x="1102" y="310" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1125" y="391" data-number="52" id="52-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">52</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="51" id="51-facial" data-part="facial" :fill="odontogram[51].facial.color" stroke="#141515" stroke-width="0.762" points="1285,485 1325,530 1388,530 1428,485 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="51" id="51-mesial" data-part="mesial" :fill="odontogram[51].mesial.color" stroke="#141515" stroke-width="0.762" points="1431,489 1391,534 1391,598 1431,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="51" id="51-lingual" data-part="lingual" :fill="odontogram[51].lingual.color" stroke="#141515" stroke-width="0.762" points="1325,601 1388,601 1428,646 1285,646 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="51" id="51-distal" data-part="distal" :fill="odontogram[51].distal.color" stroke="#141515" stroke-width="0.762" points="1322,598 1322,534 1283,489 1283,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="51" id="51-occlusal" data-part="occlusal" :fill="odontogram[51].occlusal.color" stroke="#141515" stroke-width="0.762" points="1327,536 1387,536 1387,596 1327,596 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="51" id="51-root" data-part="root" :fill="odontogram[51].root.color" stroke="#141515" stroke-width="0.762" points="1285,480 1325,434 1388,434 1428,480 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="51" id="51-button" data-part="entire" :fill="odontogram[51].entire.color" stroke="#676766" stroke-width="0.762" x="1283" y="310" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1305" y="391" data-number="51" id="51-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.409" font-family="Arial">51</text>
        </g>
        <g data-number="61" id="61-65">
          <metadata id="CorelCorpID_7Corel-Layer"/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="65" id="65-facial" data-part="facial" :fill="odontogram[65].facial.color" stroke="#141515" stroke-width="0.762" points="2255,485 2294,530 2358,530 2397,485 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="65" id="65-distal" data-part="distal" :fill="odontogram[65].distal.color" stroke="#141515" stroke-width="0.762" points="2400,489 2360,534 2360,597 2400,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="65" id="65-lingual" data-part="lingual" :fill="odontogram[65].lingual.color" stroke="#141515" stroke-width="0.762" points="2294,600 2358,600 2397,645 2255,645 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="65" id="65-mesial" data-part="mesial" :fill="odontogram[65].mesial.color" stroke="#141515" stroke-width="0.762" points="2291,597 2291,534 2252,489 2252,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="65" id="65-occlusal" data-part="occlusal" :fill="odontogram[65].occlusal.color" stroke="#141515" stroke-width="0.762" points="2296,536 2356,536 2356,596 2296,596 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="65" id="65-root" data-part="root" :fill="odontogram[65].root.color" stroke="#141515" stroke-width="0.762" points="2255,479 2294,434 2358,434 2397,479 "></polygon>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="65" id="65-button" data-part="entire" :fill="odontogram[65].entire.color" stroke="#676766" stroke-width="0.762" x="2252" y="309" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="2274" y="391" data-number="65" id="65-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">65</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="64" id="64-facial" data-part="facial" :fill="odontogram[64].facial.color" stroke="#141515" stroke-width="0.762" points="2074,485 2114,530 2177,530 2217,485 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="64" id="64-distal" data-part="distal" :fill="odontogram[64].distal.color" stroke="#141515" stroke-width="0.762" points="2220,489 2180,534 2180,597 2220,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="64" id="64-lingual" data-part="lingual" :fill="odontogram[64].lingual.color" stroke="#141515" stroke-width="0.762" points="2114,600 2177,600 2217,645 2074,645 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="64" id="64-mesial" data-part="mesial" :fill="odontogram[64].mesial.color" stroke="#141515" stroke-width="0.762" points="2111,597 2111,534 2072,489 2072,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="64" id="64-occlusal" data-part="occlusal" :fill="odontogram[64].occlusal.color" stroke="#141515" stroke-width="0.762" points="2116,536 2176,536 2176,596 2116,596 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="64" id="64-root" data-part="root" :fill="odontogram[64].root.color" stroke="#141515" stroke-width="0.762" points="2074,479 2114,434 2177,434 2217,479 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="64" id="64-button" data-part="entire" :fill="odontogram[64].entire.color" stroke="#676766" stroke-width="0.762" x="2072" y="309" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="2094" y="391" data-number="64" id="64-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">64</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="63" id="63-facial" data-part="facial" :fill="odontogram[63].facial.color" stroke="#141515" stroke-width="0.762" points="1894,485 1934,530 1997,530 2037,485 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="63" id="63-distal" data-part="distal" :fill="odontogram[63].distal.color" stroke="#141515" stroke-width="0.762" points="2040,489 2000,534 2000,597 2040,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="63" id="63-lingual" data-part="lingual" :fill="odontogram[63].lingual.color" stroke="#141515" stroke-width="0.762" points="1934,600 1997,600 2037,645 1894,645 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="63" id="63-mesial" data-part="mesial" :fill="odontogram[63].mesial.color" stroke="#141515" stroke-width="0.762" points="1931,597 1931,534 1891,489 1891,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="63" id="63-occlusal" data-part="occlusal" :fill="odontogram[63].occlusal.color" stroke="#141515" stroke-width="0.762" points="1935,536 1996,536 1996,596 1935,596 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="63" id="63-root" data-part="root" :fill="odontogram[63].root.color" stroke="#141515" stroke-width="0.762" points="1894,479 1934,434 1997,434 2037,479 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="63" id="63-button" data-part="entire" :fill="odontogram[63].entire.color" stroke="#676766" stroke-width="0.762" x="1891" y="309" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1913" y="391" data-number="63" id="63-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">63</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="62" id="62-facial" data-part="facial" :fill="odontogram[62].facial.color" stroke="#141515" stroke-width="0.762" points="1714,485 1754,530 1817,530 1857,485 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="62" id="62-distal" data-part="distal" :fill="odontogram[62].distal.color" stroke="#141515" stroke-width="0.762" points="1859,489 1820,534 1820,597 1859,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="62" id="62-lingual" data-part="lingual" :fill="odontogram[62].lingual.color" stroke="#141515" stroke-width="0.762" points="1754,600 1817,600 1857,645 1714,645 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="62" id="62-mesial" data-part="mesial" :fill="odontogram[62].mesial.color" stroke="#141515" stroke-width="0.762" points="1751,597 1751,534 1711,489 1711,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="62" id="62-occlusal" data-part="occlusal" :fill="odontogram[62].occlusal.color" stroke="#141515" stroke-width="0.762" points="1755,536 1815,536 1815,596 1755,596 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="62" id="62-root" data-part="root" :fill="odontogram[62].root.color" stroke="#141515" stroke-width="0.762" points="1714,479 1754,434 1817,434 1857,479 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="62" id="62-button" data-part="entire" :fill="odontogram[62].entire.color" stroke="#676766" stroke-width="0.762" x="1711" y="309" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1733" y="391" data-number="62" id="62-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">62</text>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="61" id="61-facial" data-part="facial" :fill="odontogram[61].facial.color" stroke="#141515" stroke-width="0.762" points="1534,485 1573,530 1637,530 1676,485 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="61" id="61-distal" data-part="distal" :fill="odontogram[61].distal.color" stroke="#141515" stroke-width="0.762" points="1679,489 1640,534 1640,597 1679,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="61" id="61-lingual" data-part="lingual" :fill="odontogram[61].lingual.color" stroke="#141515" stroke-width="0.762" points="1573,600 1637,600 1676,645 1534,645 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="61" id="61-mesial" data-part="mesial" :fill="odontogram[61].mesial.color" stroke="#141515" stroke-width="0.762" points="1571,597 1571,534 1531,489 1531,643 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="61" id="61-occlusal" data-part="occlusal" :fill="odontogram[61].occlusal.color" stroke="#141515" stroke-width="0.762" points="1575,536 1635,536 1635,596 1575,596 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="61" id="61-root" data-part="root" :fill="odontogram[61].root.color" stroke="#141515" stroke-width="0.762" points="1534,479 1573,434 1637,434 1676,479 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="61" id="61-button" data-part="entire" :fill="odontogram[61].entire.color" stroke="#676766" stroke-width="0.762" x="1531" y="309" width="148" height="101"/>
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1552" y="390" data-number="61" id="61-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="88.406" font-family="Arial">61</text>
        </g>
        <g data-number="71" id="71-75">
          <metadata id="CorelCorpID_9Corel-Layer"/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="75" id="75-facial" data-part="facial" :fill="odontogram[75].facial.color" stroke="#141515" stroke-width="0.762" points="2254,1617 2294,1571 2357,1571 2397,1617 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="75" id="75-distal" data-part="distal" :fill="odontogram[75].distal.color" stroke="#141515" stroke-width="0.762" points="2399,1612 2360,1567 2360,1504 2399,1458 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="75" id="75-lingual" data-part="lingual" :fill="odontogram[75].lingual.color" stroke="#141515" stroke-width="0.762" points="2294,1501 2357,1501 2397,1456 2254,1456 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="75" id="75-mesial" data-part="mesial" :fill="odontogram[75].mesial.color" stroke="#141515" stroke-width="0.762" points="2291,1504 2291,1567 2251,1612 2251,1458 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="75" id="75-occlusal" data-part="occlusal" :fill="odontogram[75].occlusal.color" stroke="#141515" stroke-width="0.762" points="2295,1566 2355,1566 2355,1505 2295,1505 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="75" id="75-root" data-part="root" :fill="odontogram[75].root.color" stroke="#141515" stroke-width="0.762" points="2254,1622 2294,1667 2357,1667 2397,1622 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="75" id="75-button" data-part="entire" :fill="odontogram[75].entire.color" stroke="#676766" stroke-width="0.762" x="2251" y="1690" width="148" height="103"/>
          <g transform="matrix(0.980351 0 0 1 817.414 723.45)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="75" id="75-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="90.178" font-family="Arial">75</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="74" id="74-facial" data-part="facial" :fill="odontogram[74].facial.color" stroke="#141515" stroke-width="0.762" points="2074,1617 2113,1571 2177,1571 2216,1617 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="74" id="74-distal" data-part="distal" :fill="odontogram[74].distal.color" stroke="#141515" stroke-width="0.762" points="2219,1612 2179,1567 2179,1504 2219,1458 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="74" id="74-lingual" data-part="lingual" :fill="odontogram[74].lingual.color" stroke="#141515" stroke-width="0.762" points="2113,1501 2177,1501 2216,1456 2074,1456 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="74" id="74-mesial" data-part="mesial" :fill="odontogram[74].mesial.color" stroke="#141515" stroke-width="0.762" points="2111,1504 2111,1567 2071,1612 2071,1458 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="74" id="74-occlusal" data-part="occlusal" :fill="odontogram[74].occlusal.color" stroke="#141515" stroke-width="0.762" points="2115,1566 2175,1566 2175,1505 2115,1505 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="74" id="74-root" data-part="root" :fill="odontogram[74].root.color" stroke="#141515" stroke-width="0.762" points="2074,1622 2113,1667 2177,1667 2216,1622 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="74" id="74-button" data-part="entire" :fill="odontogram[74].entire.color" stroke="#676766" stroke-width="0.762" x="2071" y="1690" width="148" height="103"/>
          <g transform="matrix(0.980351 0 0 1 637.227 723.45)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="74" id="74-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="90.178" font-family="Arial">74</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="73" id="73-facial" data-part="facial" :fill="odontogram[73].facial.color" stroke="#141515" stroke-width="0.762" points="1894,1617 1933,1571 1997,1571 2036,1617 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="73" id="73-distal" data-part="distal" :fill="odontogram[73].distal.color" stroke="#141515" stroke-width="0.762" points="2039,1612 1999,1567 1999,1504 2039,1458 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="73" id="73-lingual" data-part="lingual" :fill="odontogram[73].lingual.color" stroke="#141515" stroke-width="0.762" points="1933,1501 1997,1501 2036,1456 1894,1456 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="73" id="73-mesial" data-part="mesial" :fill="odontogram[73].mesial.color" stroke="#141515" stroke-width="0.762" points="1930,1504 1930,1567 1891,1612 1891,1458 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="73" id="73-occlusal" data-part="occlusal" :fill="odontogram[73].occlusal.color" stroke="#141515" stroke-width="0.762" points="1935,1566 1995,1566 1995,1505 1935,1505 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="73" id="73-root" data-part="root" :fill="odontogram[73].root.color" stroke="#141515" stroke-width="0.762" points="1894,1622 1933,1667 1997,1667 2036,1622 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="73" id="73-button" data-part="entire" :fill="odontogram[73].entire.color" stroke="#676766" stroke-width="0.762" x="1891" y="1690" width="148" height="103"/>
          <g transform="matrix(0.980351 0 0 1 457.039 723.45)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="73" id="73-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="90.178" font-family="Arial">73</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="72" id="72-facial" data-part="facial" :fill="odontogram[72].facial.color" stroke="#141515" stroke-width="0.762" points="1713,1617 1753,1571 1816,1571 1856,1617 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="72" id="72-distal" data-part="distal" :fill="odontogram[72].distal.color" stroke="#141515" stroke-width="0.762" points="1859,1612 1819,1567 1819,1504 1859,1458 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="72" id="72-lingual" data-part="lingual" :fill="odontogram[72].lingual.color" stroke="#141515" stroke-width="0.762" points="1753,1501 1816,1501 1856,1456 1713,1456 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="72" id="72-mesial" data-part="mesial" :fill="odontogram[72].mesial.color" stroke="#141515" stroke-width="0.762" points="1750,1504 1750,1567 1711,1612 1711,1458 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="72" id="72-occlusal" data-part="occlusal" :fill="odontogram[72].occlusal.color" stroke="#141515" stroke-width="0.762" points="1755,1566 1815,1566 1815,1505 1755,1505 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="72" id="72-root" data-part="root" :fill="odontogram[72].root.color" stroke="#141515" stroke-width="0.762" points="1713,1622 1753,1667 1816,1667 1856,1622 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="72" id="72-button" data-part="entire" :fill="odontogram[72].entire.color" stroke="#676766" stroke-width="0.762" x="1711" y="1690" width="148" height="103"/>
          <g transform="matrix(0.980351 0 0 1 276.851 723.45)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="72" id="72-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="90.178" font-family="Arial">72</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="71" id="71-facial" data-part="facial" :fill="odontogram[71].facial.color" stroke="#141515" stroke-width="0.762" points="1533,1617 1573,1571 1636,1571 1676,1617 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="71" id="71-distal" data-part="distal" :fill="odontogram[71].distal.color" stroke="#141515" stroke-width="0.762" points="1679,1612 1639,1567 1639,1504 1679,1458 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="71" id="71-lingual" data-part="lingual" :fill="odontogram[71].lingual.color" stroke="#141515" stroke-width="0.762" points="1573,1501 1636,1501 1676,1456 1533,1456 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="71" id="71-mesial" data-part="mesial" :fill="odontogram[71].mesial.color" stroke="#141515" stroke-width="0.762" points="1570,1504 1570,1567 1530,1612 1530,1458 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="71" id="71-occlusal" data-part="occlusal" :fill="odontogram[71].occlusal.color" stroke="#141515" stroke-width="0.762" points="1574,1566 1635,1566 1635,1505 1574,1505 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="71" id="71-root" data-part="root" :fill="odontogram[71].root.color" stroke="#141515" stroke-width="0.762" points="1533,1622 1573,1667 1636,1667 1676,1622 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="71" id="71-button" data-part="entire" :fill="odontogram[71].entire.color" stroke="#676766" stroke-width="0.762" x="1530" y="1690" width="148" height="103"/>
          <g transform="matrix(0.980351 0 0 1 96.663 723.45)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="71" id="71-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="90.178" font-family="Arial">71</text>
          </g>
        </g>
        <g data-number="81" id="81-85">
          <metadata id="CorelCorpID_10Corel-Layer"/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="85" id="85-facial" data-part="facial" :fill="odontogram[85].facial.color" stroke="#141515" stroke-width="0.762" points="564,1618 603,1573 667,1573 706,1618 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="85" id="85-mesial" data-part="mesial" :fill="odontogram[85].mesial.color" stroke="#141515" stroke-width="0.762" points="709,1613 669,1567 669,1504 709,1459 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="85" id="85-lingual" data-part="lingual" :fill="odontogram[85].lingual.color" stroke="#141515" stroke-width="0.762" points="603,1501 667,1501 706,1456 564,1456 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="85" id="85-distal" data-part="distal" :fill="odontogram[85].distal.color" stroke="#141515" stroke-width="0.762" points="601,1504 601,1567 561,1613 561,1459 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="85" id="85-occlusal" data-part="occlusal" :fill="odontogram[85].occlusal.color" stroke="#141515" stroke-width="0.762" points="605,1566 665,1566 665,1506 605,1506 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="85" id="85-root" data-part="root" :fill="odontogram[85].root.color" stroke="#141515" stroke-width="0.762" points="564,1622 603,1667 667,1667 706,1622 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="85" id="85-button" data-part="entire" :fill="odontogram[85].entire.color" stroke="#676766" stroke-width="0.762" x="561" y="1690" width="148" height="103"/>
          <g transform="matrix(0.980351 0 0 1 -872.832 723.637)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="85" id="85-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="90.178" font-family="Arial">85</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="84" id="84-facial" data-part="facial" :fill="odontogram[84].facial.color" stroke="#141515" stroke-width="0.762" points="744,1617 783,1571 847,1571 887,1617 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="84" id="84-mesial" data-part="mesial" :fill="odontogram[84].mesial.color" stroke="#141515" stroke-width="0.762" points="889,1613 850,1567 850,1504 889,1459 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="84" id="84-lingual" data-part="lingual" :fill="odontogram[84].lingual.color" stroke="#141515" stroke-width="0.762" points="783,1501 847,1501 887,1456 744,1456 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="84" id="84-distal" data-part="distal" :fill="odontogram[84].distal.color" stroke="#141515" stroke-width="0.762" points="781,1504 781,1567 741,1613 741,1459 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="84" id="84-occlusal" data-part="occlusal" :fill="odontogram[84].occlusal.color" stroke="#141515" stroke-width="0.762" points="785,1566 845,1566 845,1506 785,1506 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="84" id="84-root" data-part="root" :fill="odontogram[84].root.color" stroke="#141515" stroke-width="0.762" points="744,1622 783,1667 847,1667 887,1622 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="84" id="84-button" data-part="entire" :fill="odontogram[84].entire.color" stroke="#676766" stroke-width="0.762" x="741" y="1690" width="148" height="103"/>
          <g transform="matrix(0.980351 0 0 1 -692.644 723.637)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="84" id="84-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="90.178" font-family="Arial">84</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="83" id="83-facial" data-part="facial" :fill="odontogram[83].facial.color" stroke="#141515" stroke-width="0.762" points="924,1617 964,1571 1027,1571 1067,1617 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="83" id="83-mesial" data-part="mesial" :fill="odontogram[83].mesial.color" stroke="#141515" stroke-width="0.762" points="1069,1613 1030,1567 1030,1504 1069,1459 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="83" id="83-lingual" data-part="lingual" :fill="odontogram[83].lingual.color" stroke="#141515" stroke-width="0.762" points="964,1501 1027,1501 1067,1456 924,1456 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="83" id="83-distal" data-part="distal" :fill="odontogram[83].distal.color" stroke="#141515" stroke-width="0.762" points="961,1504 961,1567 921,1613 921,1459 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="83" id="83-occlusal" data-part="occlusal" :fill="odontogram[83].occlusal.color" stroke="#141515" stroke-width="0.762" points="965,1566 1025,1566 1025,1506 965,1506 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="83" id="83-root" data-part="root" :fill="odontogram[83].root.color" stroke="#141515" stroke-width="0.762" points="924,1622 964,1667 1027,1667 1067,1622 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="83" id="83-button" data-part="entire" :fill="odontogram[83].entire.color" stroke="#676766" stroke-width="0.762" x="921" y="1690" width="148" height="103"/>
          <g transform="matrix(0.980351 0 0 1 -512.457 723.637)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="83" id="83-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="90.178" font-family="Arial">83</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="82" id="82-facial" data-part="facial" :fill="odontogram[82].facial.color" stroke="#141515" stroke-width="0.762" points="1104,1617 1144,1571 1207,1571 1247,1617 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="82" id="82-mesial" data-part="mesial" :fill="odontogram[82].mesial.color" stroke="#141515" stroke-width="0.762" points="1250,1613 1210,1567 1210,1504 1250,1459 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="82" id="82-lingual" data-part="lingual" :fill="odontogram[82].lingual.color" stroke="#141515" stroke-width="0.762" points="1144,1501 1207,1501 1247,1456 1104,1456 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="82" id="82-distal" data-part="distal" :fill="odontogram[82].distal.color" stroke="#141515" stroke-width="0.762" points="1141,1504 1141,1567 1102,1613 1102,1459 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="82" id="82-occlusal" data-part="occlusal" :fill="odontogram[82].occlusal.color" stroke="#141515" stroke-width="0.762" points="1146,1566 1206,1566 1206,1506 1146,1506 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="82" id="82-root" data-part="root" :fill="odontogram[82].root.color" stroke="#141515" stroke-width="0.762" points="1104,1622 1144,1667 1207,1667 1247,1622 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="82" id="82-button" data-part="entire" :fill="odontogram[82].entire.color" stroke="#676766" stroke-width="0.762" x="1101" y="1690" width="148" height="103"/>
          <g transform="matrix(0.980351 0 0 1 -332.269 723.637)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="82" id="82-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="90.178" font-family="Arial">82</text>
          </g>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="81" id="81-facial" data-part="facial" :fill="odontogram[81].facial.color" stroke="#141515" stroke-width="0.762" points="1284,1617 1324,1571 1387,1571 1427,1617 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="81" id="81-mesial" data-part="mesial" :fill="odontogram[81].mesial.color" stroke="#141515" stroke-width="0.762" points="1430,1613 1390,1567 1390,1504 1430,1459 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="81" id="81-lingual" data-part="lingual" :fill="odontogram[81].lingual.color" stroke="#141515" stroke-width="0.762" points="1324,1501 1387,1501 1427,1456 1284,1456 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="81" id="81-distal" data-part="distal" :fill="odontogram[81].distal.color" stroke="#141515" stroke-width="0.762" points="1321,1504 1321,1567 1282,1613 1282,1459 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="81" id="81-occlusal" data-part="occlusal" :fill="odontogram[81].occlusal.color" stroke="#141515" stroke-width="0.762" points="1326,1566 1386,1566 1386,1506 1326,1506 "/>
          <polygon @click="clickedTooth($event)" class="tooth tooth-part" data-number="81" id="81-root" data-part="root" :fill="odontogram[81].root.color" stroke="#141515" stroke-width="0.762" points="1284,1622 1324,1667 1387,1667 1427,1622 "/>
          <rect @click="clickedTooth($event)" class="tooth tooth-button" data-number="81" id="81-button" data-part="entire" :fill="odontogram[81].entire.color" stroke="#676766" stroke-width="0.762" x="1282" y="1690" width="148" height="103"/>
          <g transform="matrix(0.980351 0 0 1 -152.081 723.637)">
          <text @click="clickedTooth($event)" class="tooth tooth-text" x="1485" y="1050" data-number="81" id="81-sqrt" data-part="entire" fill="#141515" font-weight="normal" font-size="90.178" font-family="Arial">81</text>
          </g>
        </g>
        </svg>
      </q-icon>

    </div>
    <q-dialog v-model="formModal">
      <q-card>
        <q-toolbar>
          <q-avatar>
            <q-icon name="img:statics/dentist-icons/icons/mouth.svg" />
          </q-avatar>
          <q-toolbar-title>Tooth {{register.tooth_number}} ({{register.tooth_part}})</q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <q-card-section>
          <q-select
            v-if="!consult"
            v-model="others.clinic"
            :options="consults"
            label="Consult"
            option-value="id"
            option-label="consult_date"
            map-options
            @input="selectedClinic"
            >
            <template v-slot:option="scope">
              <q-item
                v-bind="scope.itemProps"
                v-on="scope.itemEvents"
              >
                <q-item-section avatar>
                  {{scope.opt.name}}
                </q-item-section>
                <q-item-section>
                  <q-item-label caption>{{ scope.opt.consult_date }} - {{ scope.opt.consult_hour }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            v-model="others.procedure"
            :options="procedures"
            label="Procedure"
            option-value="id"
            option-label="name_procedure"
            @input="selectedProcedure"
            map-options
          />
        </q-card-section>
        <q-btn @click="create" color="blue-5" class="full-width" label="Add"/>
      </q-card>
    </q-dialog>
    <q-card>
      <q-card-section class="row q-col-gutter-none">
        <q-card-section class="col-12">
          <div class="text-h6">Legends</div>
        </q-card-section>
        <div class="col-3" v-for="legend in legends" :key="legend.name_procedure">
          <div class="row">
            <div class="col-3" :style="{'background': legend.color}"></div>
            <div class="col-1"></div>
            <div class="col-8">{{legend.name_procedure | maxLenght}}</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
    export default {
        name: 'PageOdontogram',
        data () {
            return {
              module: 'patients',
              register: {},
              others: {},
              odontogram: {},
              legends: [],
              consult: null,
              specialtie: null,
              consults: [],
              specialties: [],
              procedures: [],
              formModal: false
            }
        },
        beforeMount() {
          this.register.patient_id = this.$router.currentRoute.params.id
          this.getOdontogram()
        },
        mounted () {
          this.getConsults()
          this.getParams()
        },
        filters: {
          maxLenght (value) {
            const lenght = value.toString().lenght
            if (lenght > 15) return `${value.slice(0, 15)}...`
            return value
          }
        },
        methods: {
          async getParams () {
            this.consult = this.$route.query.consult
            if (this.consult) this.register.consult_id = this.consult
          },
          async getOdontogram () {
            try {
              const response = await this.$axios.get(`/api/${this.module}/${this.register.patient_id}/odontogram`)
              this.odontogram = response.data.odontogram
              this.legends = response.data.legend
            } catch (e) {
              console.error(e)
            }
            this.formModal = false
          },
          async getConsults () {
            try {
              const response = await this.$axios.get(`/api/${this.module}/${this.register.patient_id}/consults`)
              if (response.data) this.consults = response.data
            } catch (e) {
              console.error(e)
            }
          },
          async getDentistProcedures (id) {
            try {
              const response = await this.$axios.get(`/api/dentists/${id}/procedures`)
              if (response.data) this.procedures = response.data
            } catch (e) {
              console.error(e)
            }
          },
          async create () {
            // tooth_number,tooth_part,consult_id,procedure_id,patient_id
            try {
              const response = await this.$axios.post('/api/procedures-performeds', this.register)
              if (response.data.success) this.getOdontogram()
            } catch (e) {
              console.error(e)
            }
          },
          selectedClinic (value) {
            this.register.consult_id = value.id
            this.getDentistProcedures(value.dentist_id)
          },
          selectedProcedure (value) {
            this.register.procedure_id = value.id
          },
          clickedTooth (t) {
            const tooth = t.target.dataset
            this.register.tooth_number = tooth.number
            this.register.tooth_part = tooth.part
            this.formModal = true
          }
        }
    }
</script>

<style lang="scss" scoped>
#odontogram {
  height: 100%;
  width: 100%;
}
.tooth {
  display: inline-block;
  background-size: cover;
  cursor: pointer;
}
.tooth-part:hover {
  fill: #64b5f6;
}
.tooth-button {
  fill: #64b5f6;
}
.legend {
  padding: 5px 5px;
  background: red;
  border: 1px solid rgba(86,61,124,.2);
}
</style>
