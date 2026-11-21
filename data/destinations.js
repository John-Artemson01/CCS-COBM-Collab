/*
 * ALL place content lives here. Only the Content Lead edits this file.
 * Fields marked "optional" can be left out; the pages hide empty sections.
 *   id        lowercase-with-dashes, must match the image file name
 *   tags      used for the filter chips on the home page
 *   pin       position on the map as a percentage { x, y }
 *   verified  false = show "Not confirmed, check before visiting"
 */
const DESTINATIONS = [
  {
    "id": "st-joseph-parish",
    "name": "St. Joseph the Worker Parish",
    "tags": [
      "Heritage",
      "Faith",
      "History"
    ],
    "type": "Parish Church",
    "summary": "One of the oldest churches in Bulacan (built 1751, stone structure 1842-1854), preserving classic architecture and a historic church bell.",
    "address": "44 National Highway, Poblacion, SJDM, 3023 Bulacan",
    "image": "assets/images/destinations/st-joseph-parish.jpg",
    "pin": {
      "x": 24.4,
      "y": 59.7
    },
    "howToGo": [
      {
        "title": "Commute via Tungko-San Jose Jeepney",
        "steps": [
          "From SM City San Jose del Monte or Tungko, board any jeepney bound for San Jose / Poblacion.",
          "Travel along Quirino Highway / National Highway toward the historic Poblacion town center (approx. 15-20 mins).",
          "Disembark directly at the front of St. Joseph the Worker Parish Church at 44 National Highway."
        ]
      },
      {
        "title": "Private Vehicle via Quirino Highway to Poblacion",
        "steps": [
          "Drive along Quirino Highway heading north into SJDM Poblacion.",
          "Turn onto National Highway toward the town center.",
          "Arrive at St. Joseph the Worker Parish grounds; designated parking is available outside mass hours."
        ]
      }
    ],
    "cafes": [
      "Poblacion town center heritage bakeries and cafes serving traditional Bulacan pastries, kape barako, and local merienda (₱40 - ₱120).",
      "Kape Leona",
      "Boo-Kid Cafe",
      "JDB Cafe",
      "OK Cafe"
    ],
    "tips": [],
    "info": {
      "hours": "Open daily for personal prayer, liturgies, and mass celebrations from 6:00 AM to 7:00 PM.",
      "fee": "Admission is free; donations for church restoration and parish operations welcome.",
      "contact": "St. Joseph the Worker Parish Office, 44 National Highway, Poblacion, CSJDM, Bulacan.",
      "activities": [
        "Historic parish church built in 1751 (stone structure 1842-1854); classic Spanish-era colonial architecture and antique historic church bell."
      ]
    },
    "verified": true
  },
  {
    "id": "mt-balagbag",
    "name": "Mt. Balagbag",
    "tags": [
      "Hiking",
      "Nature",
      "Adventure"
    ],
    "type": "Mountain Trail",
    "summary": "Summit trail offering the Dumagat Trail (difficulty 4/9, 3-4 hrs) led by trained Dumagat Tribe tour guides, with panoramic Sierra Madre views.",
    "address": "Brgy. San Isidro, SJDM, Bulacan (bordering Norzagaray / Rodriguez, Rizal)",
    "image": "assets/images/destinations/mt-balagbag.jpg",
    "pin": {
      "x": 84.7,
      "y": 48.4
    },
    "howToGo": [
      {
        "title": "Commute via SM SJDM / Tungko & Licao-Licao",
        "steps": [
          "Board a jeepney from SM City San Jose del Monte heading along Quirino Highway to Tungko Terminal (Est. fare: ₱15).",
          "Transfer to a jeepney bound for Barrio Licao-Licao at Tungko Terminal (Est. fare: ₱25 - ₱35).",
          "Disembark at the Dumagat SJDM Trail Assistance Desk located at Purok 6, Barrio Licao-Licao.",
          "Register and hire an accredited Dumagat Tribe guide before beginning the 3-4 hour trek to Mt. Balagbag summit."
        ]
      },
      {
        "title": "Private Vehicle / Motorbike via Quirino Hwy & San Isidro",
        "steps": [
          "From Quirino Highway, navigate toward the Tungko Mangga junction.",
          "Turn onto Paradise III / San Isidro Road heading east toward Barrio Licao-Licao.",
          "Proceed through Sitio Licao-Licao (high-clearance vehicle recommended for rough unpaved mountain roads).",
          "Park at the Mt. Balagbag Jump-off / Dumagat Assistance Desk and register at the desk."
        ]
      }
    ],
    "cafes": [
      "Licao Coffee House"
    ],
    "tips": [
      "Trail difficulty rating 4/9 (3-4 hrs). Wear sturdy trekking shoes, bring min 1.5L drinking water, sun protection, and extra clothes. No public restrooms on trails."
    ],
    "info": {
      "fee": "Dumagat Tribe tour guide fees: Day tour summit ₱350/group (up to 5 pax, 6 hrs); Balagbag + Falls ₱500/group (8 hrs); Overnight trek ₱750/group (3 PM - 6 AM).",
      "hours": "Open daily for day hikes (6:00 AM - 3:00 PM) and overnight camping (3:00 PM - 6:00 AM). Jump-off point at Purok 6 Licao-Licao.",
      "contact": "Dumagat SJDM Trail Assistance Desk, Purok 6, Barrio Licao-Licao, Brgy. San Isidro.",
      "activities": [
        "Dumagat mountain trail trek, panoramic 360-degree Sierra Madre views, summit stargazing, and sunrise watching over the mountain ridges."
      ]
    },
    "verified": true
  },
  {
    "id": "the-rising-heart",
    "name": "The Rising Heart",
    "tags": [
      "Family",
      "Relaxation",
      "View deck"
    ],
    "type": "View deck",
    "summary": "Highland view deck established Feb 10, 2020 in Brgy. Paradise III featuring lovelocks and panoramic mountain forest sunset views.",
    "address": "Barangka Road, Brgy. Paradise III, SJDM, Bulacan",
    "image": "assets/images/destinations/the-rising-heart.jpg",
    "pin": {
      "x": 56.5,
      "y": 51.4
    },
    "howToGo": [
      {
        "title": "Commute via Tungkong Mangga & Licao-Licao",
        "steps": [
          "From Tungkong Mangga Terminal, board a public jeepney bound for Licao-Licao.",
          "Mandatory Route Rule: Use the Licao-Licao route only; strictly do NOT use the St. Joseph Parish route.",
          "Disembark at the Barangka Road junction in Brgy. Paradise III.",
          "Take a local tricycle along Barangka Road directly to The Rising Heart gate (Est. fare: ₱40 - ₱60)."
        ]
      },
      {
        "title": "Private Vehicle via Igay Road & Barangka Road",
        "steps": [
          "From Quirino Highway, turn onto Igay Road / Tungko heading toward Brgy. Paradise III.",
          "Follow directional signage via the Licao-Licao access road (do not follow St. Joseph Parish routes).",
          "Continue straight along Barangka Road until reaching The Rising Heart entrance parking."
        ]
      }
    ],
    "cafes": [
      "Highland overlook coffee stands serving brewed Benguet and Batangas coffee, hot chocolate, lugaw, and grilled native snacks (₱50 - ₱150).",
      "BerTilya Cafe",
      "Acir Cafe",
      "Licao Coffee House",
      "Kape Leona"
    ],
    "tips": [
      "Mandatory Transit Route Rule: Use Licao-Licao route only; strictly do NOT use the St. Joseph Parish route due to impassable terrain."
    ],
    "info": {
      "hours": "Operating hours: Open daily Monday to Sunday from 7:00 AM to 7:00 PM.",
      "fee": "Admission rate: ₱50 - ₱100 per visitor; commemorative lovelocks available for purchase at the gift booth.",
      "activities": [
        "Highland view deck established Feb 10, 2020 featuring panoramic mountain forest sunset views and dedicated railings for attaching lovelocks."
      ]
    },
    "verified": true
  },
  {
    "id": "paradise-hill-farm",
    "name": "Paradise Hill Farm",
    "tags": [
      "Nature",
      "Farm",
      "Family"
    ],
    "type": "Agri-tourism Farm",
    "summary": "Scenic hillside agri-tourism farm destination in Brgy. Paradise III offering open green fields, fresh air, and rural family experiences.",
    "address": "Brgy. Paradise III, SJDM, Bulacan",
    "image": "assets/images/destinations/paradise-hill-farm.jpg",
    "pin": {
      "x": 57.0,
      "y": 43.8
    },
    "howToGo": [
      {
        "title": "Commute via Tungko Mangga to Brgy. Paradise III",
        "steps": [
          "From Tungko Mangga Terminal, board a jeepney headed toward Brgy. Paradise III.",
          "Alight at the main junction / Barangay Hall of Paradise III.",
          "Take a short tricycle ride or walk along the scenic hillside lane to Paradise Hill Farm entrance."
        ]
      }
    ],
    "cafes": [
      "Local food stalls and stores around Paradise III"
    ],
    "tips": [
      "Wear comfortable walking shoes and casual outdoor clothing. Bring sunhats and umbrellas for open outdoor pastures."
    ],
    "info": {
      "hours": "Operating schedule: Open Tuesday to Sunday from 8:00 AM to 5:00 PM (Closed Mondays).",
      "fee": "General farm entrance fee: ₱100 - ₱150 per person; discounts available for seniors, PWDs, and children.",
      "activities": [
        "Agri-tourism farm offering open hillside green pastures, farm animal interactions, nature photography, and rural family picnic experiences."
      ],
      "contact": "City Tourism Office contact for Paradise Hill Farm: Ynez B. Veloso, 0917-327-2366"
    },
    "verified": true
  },
  {
    "id": "padre-pio-mountain",
    "name": "Padre Pio Mountain of Healing",
    "tags": [
      "Faith",
      "Pilgrimage",
      "Nature"
    ],
    "type": "Religious Pilgrimage Site",
    "summary": "Spiritual pilgrimage sanctuary and retreat in Area C featuring hillside meditation grounds and a Christ the Redeemer summit statue.",
    "address": "Area C, Brgy. Paradise III, SJDM, 3023 Bulacan",
    "image": "assets/images/destinations/padre-pio-mountain.jpg",
    "pin": {
      "x": 51.5,
      "y": 37.8
    },
    "howToGo": [
      {
        "title": "Jeepney & Tricycle via Paradise III Area C",
        "steps": [
          "At Tungko Public Market terminal, board a jeepney heading to Brgy. Paradise III.",
          "Disembark at the Area C crossing in Brgy. Paradise III.",
          "Hire a local tricycle to the foot and main gate of Padre Pio Mountain of Healing.",
          "Ascend the hillside walking path through the meditation stations up to the Christ the Redeemer summit statue."
        ]
      }
    ],
    "cafes": [],
    "tips": [
      "Solemn retreat site: Modest dress code requested; visitors are urged to maintain prayerful silence and peaceful reflection."
    ],
    "info": {
      "hours": "Open Tuesday to Sunday from 6:00 AM to 5:00 PM; closed on Mondays.",
      "fee": "Admission is free; voluntary donations for sanctuary maintenance are appreciated.",
      "activities": [
        "Spiritual pilgrimage sanctuary and hillside meditation grounds featuring outdoor Stations of the Cross and a Christ the Redeemer summit statue."
      ]
    },
    "verified": true,
    "comingSoon": true
  },
  {
    "id": "burong-falls",
    "name": "Burong Falls",
    "tags": [
      "Nature",
      "Waterfalls",
      "Adventure"
    ],
    "type": "Waterfall",
    "summary": "Scenic 10-15 ft freshwater waterfall along the Dumagat Trail within ancestral domain lands; popular for swimming and eco-tours.",
    "address": "Brgy. Paradise III / Macabud area, SJDM, Bulacan (Plus Code R585+HJ2)",
    "image": "assets/images/destinations/burong-falls.jpg",
    "pin": {
      "x": 75.2,
      "y": 54.5
    },
    "howToGo": [
      {
        "title": "Jeepney & Dumagat Trail Guided Hike",
        "steps": [
          "From SM City San Jose del Monte, board a jeepney bound for Licao-Licao Terminal.",
          "Disembark at Purok 6 Dumagat SJDM Trail Assistance Desk.",
          "Register at the desk and hire an accredited Dumagat Tribe guide (mandatory for ancestral domain hiking).",
          "Follow the guided freshwater river trail on a 30-minute hike to Burong Falls (practice CLAYGO)."
        ]
      }
    ],
    "cafes": [
      "Licao Coffee House (along Igay Road, nearest café to Burong Falls)"
    ],
    "tips": [
      "Preserved eco-tourist spot in Dumagat ancestral domain. Observe strict CLAYGO (Clean As You Go). No soaps or detergents in river; pack all trash out."
    ],
    "info": {
      "hours": "Open during daylight hours only from 6:00 AM to 4:00 PM daily.",
      "fee": "Free natural attraction; mandatory Dumagat guide fee included with Dumagat Trail combo tour (₱500/group).",
      "activities": [
        "Scenic 10-15 ft natural freshwater waterfall along the Dumagat Trail; freshwater pool basin popular for eco-tours and swimming."
      ]
    },
    "verified": true
  },
  {
    "id": "grotto-church",
    "name": "Our Lady of Lourdes Grotto Shrine",
    "tags": [
      "Faith",
      "Pilgrimage",
      "Heritage"
    ],
    "type": "Shrine",
    "summary": "Our Lady of Lourdes Grotto replica inaugurated 1965, featuring Calvary Hill (14 Stations of the Cross), Rosary Hill (155 beads), and spring water.",
    "address": "Gate 1, Provincial Road, Grotto Graceville, SJDM, 3023 Bulacan",
    "image": "assets/images/destinations/grotto-church.jpg",
    "pin": {
      "x": 32.9,
      "y": 72.5
    },
    "howToGo": [
      {
        "title": "Commute via Quirino Highway to Graceville",
        "steps": [
          "From SM City San Jose del Monte or Tungko, board any bus or jeepney traversing Quirino Highway.",
          "Ride along Quirino Highway toward Grotto Graceville (approx. 15-25 mins).",
          "Alight directly at Gate 1, Provincial Road, Grotto Graceville for pedestrian access to Calvary Hill and Rosary Hill."
        ]
      }
    ],
    "cafes": [
      "Grotto commercial food stalls and pasalubong stalls serving freshly cooked bibingka, puto bumbong, suman, and cold refreshments (₱30 - ₱120).",
      "Sugarita's Cave (resto cafe)",
      "SHOTS Studio and Cafe",
      "Sebio's Gym Cafe"
    ],
    "tips": [
      "Very high foot traffic during Lent / Holy Week. Bring refillable water containers, sturdy walking shoes for stairs, and sun umbrellas."
    ],
    "info": {
      "hours": "Open daily from 6:00 AM to 6:00 PM.",
      "fee": "Admission is completely free to all pilgrims and visitors.",
      "activities": [
        "Replica of Lourdes France sanctuary inaugurated 1965, featuring Calvary Hill (14 Stations of the Cross), Rosary Hill (155 beads), and holy spring water."
      ]
    },
    "verified": true
  },
  {
    "id": "la-salette",
    "name": "Our Lady of La Salette",
    "tags": [
      "Faith",
      "Pilgrimage"
    ],
    "type": "Quasi-Parish Shrine",
    "summary": "Catholic quasi-parish and Marian pilgrimage shrine under the Diocese of Malolos situated in Mountain View, Brgy. Muzon.",
    "address": "Mt. View Subdivision, Brgy. Muzon, SJDM, Bulacan",
    "image": "assets/images/destinations/la-salette.jpg",
    "pin": {
      "x": 15.2,
      "y": 70.9
    },
    "howToGo": [
      {
        "title": "Commute via Tungko & Muzon",
        "steps": [
          "From Tungkong Mangga Terminal, board a jeepney plying the Muzon / Marilao route.",
          "Alight at the entrance of Mountain View Subdivision along Marilao-San Jose Road.",
          "Walk or take a short tricycle ride up Mountain View to Our Lady of La Salette Quasi-Parish Shrine."
        ]
      }
    ],
    "cafes": [
      "MOC Cafe",
      "CHN Café",
      "Super Daddy",
      "Black Tiger Cafe"
    ],
    "tips": [],
    "info": {
      "hours": "Open daily from 6:00 AM to 6:30 PM.",
      "fee": "Admission is free for all devotees and visitors.",
      "activities": [
        "Catholic quasi-parish and Marian pilgrimage shrine under the Diocese of Malolos offering quiet prayer, liturgical mass, and Marian devotions."
      ]
    },
    "verified": true
  },
  {
    "id": "kaypian-eco-park",
    "name": "Kaypian Eco Park",
    "tags": [
      "Nature",
      "Family",
      "Park"
    ],
    "type": "Community Eco Park",
    "summary": "Community nature and eco-park along Abela Road providing lush green spaces for walking, family bonding, and outdoor relaxation.",
    "address": "Abela Road, Brgy. Kaypian, SJDM, Bulacan",
    "image": "assets/images/destinations/kaypian-eco-park.jpg",
    "pin": {
      "x": 27.5,
      "y": 49.3
    },
    "howToGo": [
      {
        "title": "Commute via Quirino Hwy & Abela Road",
        "steps": [
          "From Tungko Mangga, take any jeepney traveling along Quirino Highway toward Kaypian.",
          "Alight at the Kaypian junction / Abela Road intersection.",
          "Ride a local tricycle along Abela Road directly to the Kaypian Eco Park main entrance gate."
        ]
      }
    ],
    "cafes": [
      "OK Café Kaypian Branch (700 m, about 2 min)",
      "JDB Café (750 m, about 2 min)",
      "Boo-Kid Café (1.5 km, about 5 min)",
      "Eufrocina's Café SJDM (1.7 km, about 4 min)"
    ],
    "tips": [],
    "info": {
      "hours": "Open daily from 6:00 AM to 6:00 PM.",
      "fee": "Free public entrance to all community members and visitors.",
      "activities": [
        "Community nature park providing green lawns, landscaped walking paths, shaded pergolas, and outdoor relaxation for families."
      ]
    },
    "verified": true
  },
  {
    "id": "sports-complex",
    "name": "SJDM City Sports Complex",
    "tags": [
      "Sports",
      "Recreation",
      "Events"
    ],
    "type": "Sports Complex",
    "summary": "Premier public municipal sports and events facility hosting athletics, games, community tournaments, and civic gatherings.",
    "address": "10 Road 1, SJDM, Bulacan",
    "image": "assets/images/destinations/sports-complex.jpg",
    "pin": {
      "x": 38.0,
      "y": 29.4
    },
    "howToGo": [
      {
        "title": "Commute via Tungko / Road 1",
        "steps": [
          "From Tungkong Mangga commercial center or Sapang Palay junction, take a jeepney or tricycle toward Road 1.",
          "Travel along Quirino Highway and turn into Road 1.",
          "Disembark at the main gate of the SJDM City Sports Complex at 10 Road 1."
        ]
      }
    ],
    "cafes": [
      "Mr. Brewsko Café (around 190 m from the complex)"
    ],
    "tips": [],
    "info": {
      "hours": "Open daily from 5:00 AM to 9:00 PM for public jogging, fitness workouts, and scheduled athletic training.",
      "fee": "Free access for general public jogging; facility rentals for sports meets require city sports office permits.",
      "activities": [
        "Premier public municipal sports and events facility hosting track and field, basketball, volleyball, athletics, and civic gatherings."
      ],
      "capacity": "About 5,000 seats."
    },
    "verified": true
  },
  {
    "id": "river-park-esplanade",
    "name": "River Park Esplanade",
    "tags": [
      "Relaxation",
      "Family",
      "Park"
    ],
    "type": "Riverside Park",
    "summary": "Open-air riverbank promenade offering landscaped walkways, jogging paths, and outdoor recreation along the river corridor.",
    "address": "CSJDM River Park Esplanade (Plus Code R2HV+3X7), SJDM, Bulacan",
    "image": "assets/images/destinations/river-park-esplanade.jpg",
    "pin": {
      "x": 20.5,
      "y": 42.8
    },
    "howToGo": [
      {
        "title": "Commute / Walking via Poblacion River Access",
        "steps": [
          "From Tungko or Muzon, take a public jeepney to Poblacion / Dulong Bayan.",
          "Walk or take a tricycle down the Central SJDM River Park access road.",
          "Arrive at the CSJDM River Park Esplanade entrance along the central river promenade."
        ]
      }
    ],
    "cafes": [],
    "tips": [],
    "info": {
      "hours": "Open 24 hours daily (illuminated promenade open until 10:00 PM).",
      "fee": "Free public admission to the entire riverside esplanade promenade.",
      "activities": [
        "Open-air riverbank promenade featuring landscaped walkways, jogging paths, waterfront seating, and open recreational space."
      ]
    },
    "verified": true,
    "comingSoon": true
  }
];
