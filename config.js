window.topBarCenterText = process.env.SECRET_NAME || "Ham Dashboard";

// Grid layout
var layout_cols = 4;
var layout_rows = 4;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
window.aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/PY3TX", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/weeklycont.php",
    "1",
    ],
    [
        "2196F3",
        "CONTEST RUN",
        "https://contest.run",
        "1",
    ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/-15/-55",
    "1",
    "R",
    ],
    [
        "2196F3",
        "DX HEAT",
        "https://www.dxheat.com/dxc/",
        "1"
    ],
    ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
    ["2196F3", "APRS MAP", "https://aprs.fi/#!lat=-22.83050&lng=-43.21920", "1.2"],
  [
    "2196F3",
    "RADAR",
    "https://www.redemet.aer.mil.br/?i=produtos&p=radar-meteorologico",
    "1",
    "R"
    ],
    [
        "2196F3",
        "Digital Mode Spotting",
        "https://pskreporter.info/pskmap.html",
        "1",
        "R"
    ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=radar&lat=-15&lon=-55&zoom=4",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-55.00,-15.00,990",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
window.aIMG = [
    ["RADAR", "https://s0.cptec.inpe.br/grafico/Satelite/goes16/realcadas/pagina/g16ch13_cptec.jpg"],
  [
    "#LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KNQA_loop.gif",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
  ],
  [
    "SAT CGL",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/ssa/GEOCOLOR/GOES16-SSA-GEOCOLOR-900x540.gif",
  ],
  [
    "SAT LAST Hour",
    "https://ciram.epagri.sc.gov.br/ciram_arquivos/meteorologia/satelite/ultima1zoom.png",
  ],
  [
    "THUNDERSTORMS",
      "iframe|https://embed.windy.com/embed2.html?lat=-15.8900&lon=-47.9309&detailLat=-15.8900&detailLon=-47.9309&width=900&height=600&zoom=11&level=surface&overlay=thunder&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km/h&metricTemp=%C2%B0C&radarRange=-1",
],
  [
    "LIGHTNING & WEATHER",
    "iframe|https://www.climaeradar.com.br/radarclima?center=-16.32,-47.92&zoom=8.33&layer=lr",
  ],
    ["YOUTUBE CB", "iframe|https://www.youtube.com/embed/rxqjedCYUms?si=3fTQZg9-l70XTebi?autoplay=1&mute=1"],
  [
    "AIRPORT MAP",
    "iframe|https://globe.adsbexchange.com/?airport=SBUL",
  ],
    ["RADIO BRASIL", "iframe|https://radio-brasil.com/band-news-fm-905-brasilia-1162"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"],
  [
    "ISS & SO-50 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=27607",
  ],
  ["Solar WX",
    "https://services.swpc.noaa.gov/images/animations/suvi/primary/map/latest.png"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar100sc.php"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solarpich.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
window.tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,30400,60700,60900,10800,30400,60700,60900,10800];
