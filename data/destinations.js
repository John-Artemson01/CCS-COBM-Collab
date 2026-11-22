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
    id: "st-joseph-parish",
    name: "St. Joseph the Worker Parish",
    tags: ["Worship", "Family"],
    type: "Heritage / Religious",
    summary: "A parish church in the heart of San Jose del Monte, along the National Highway in Poblacion.",
    address: "National Highway, Poblacion, San Jose del Monte, Bulacan",
    image: "assets/images/destinations/st-joseph-parish.jpg",
    pin: { x: 42.4, y: 22.5 },
    howToGo: [
      { title: "Option 1: E-jeep", steps: [
        "From Tungko, ride an e-jeep going to Muzon Central Terminal.",
        "Ask the barker if the route passes through Old City Hall.",
        "Drop off at San Jose / Old City Hall.",
        "Walk toward the entrance of St. Joseph the Worker Parish." ] },
      { title: "Option 2: Jeepney + transfer", steps: [
        "From Tungko, ride a jeepney going to Muzon Central Terminal.",
        "Drop off at Mercury Drug.",
        "Cross to the other side and wait at the waiting shed.",
        "Ride a jeep going to Starmall or Sapang Palay.",
        "Tell the driver \u201cSan Jose\u201d or \u201cOld City Hall\u201d.",
        "Drop off at San Jose / Old City Hall.",
        "Walk toward St. Joseph the Worker Parish." ] },
      { title: "Option 3: Direct jeepney or mini-bus", steps: [
        "Go to the loading area near Tungko Crossing (near the ukayan or the Builders / Jollibee area).",
        "Board a jeepney or mini-bus bound for San Jose / Poblacion.",
        "Tell the driver or conductor to drop you off at St. Joseph the Worker Parish Church along the National Highway." ] }
    ],
    cafes: ["Kape Leona", "Boo-Kid Cafe", "JDB Cafe", "OK Cafe"],
    tips: ["Wear appropriate clothing.", "Keep your voice low inside the church.", "Avoid disturbing Mass.", "Take photos only when allowed."],
    info: {},
    verified: false
  },
  {
    id: "mt-balagbag",
    name: "Mt. Balagbag",
    tags: ["Nature", "Adventure"],
    type: "Eco Tourism",
    summary: "A mountain outing for trail walks and open views. The jump-off point is Brgy. Licao-Licao.",
    address: "Sitio Balagbag (jump-off: Brgy. Licao-Licao), San Jose del Monte, Bulacan",
    image: "assets/images/destinations/mt-balagbag.jpg",
    pin: { x: 64.1, y: 21.2 },
    howToGo: [
      { title: "From SM Tungko", steps: [
        "Go to the jeepney and market area near Tungko (near Jollibee Tungko or BDO Tungko), or the Tungko\u2013San Jose Jeepney Terminal.",
        "Board a jeepney bound for Brgy. Licao-Licao. Travel time is roughly 45 minutes to 1 hour, depending on traffic.",
        "At Licao-Licao, trek toward the registration area (about 20\u201330 minutes) or hire a tricycle or habal-habal to the Sitio Balagbag registration area.",
        "Pay the local ecological or registration fees before you start the ascent." ] }
    ],
    cafes: ["Licao Coffee House"],
    tips: ["Pay the local ecological or registration fees before the ascent."],
    info: { fee: "Registration or ecological fees apply. Amount not confirmed." },
    verified: false
  },
  {
    id: "the-rising-heart",
    name: "The Rising Heart",
    tags: ["Family", "Relaxation"],
    type: "View deck",
    summary: "A hillside stop with a view deck, known for sunset views and photo opportunities.",
    address: "Barangka Road, Barangay Paradise III, City of San Jose del Monte, Bulacan",
    image: "assets/images/destinations/the-rising-heart.jpg",
    pin: { x: 25.1, y: 24.1 },
    howToGo: [
      { title: "From SM Tungko (jeepney to Licao-Licao)", steps: [
        "From SM Tungko, cross over or walk to the nearby Licao-Licao Jeepney Terminal (near Tungkong Mangga).",
        "Board a jeepney bound for Licao-Licao. Tell the driver or conductor you are getting off at The Rising Heart corner in Barangay Paradise III.",
        "Get off at the junction on Barangka Road where you see the official signage for The Rising Heart.",
        "Walk to the view deck following the street signage, or take a tricycle from the junction." ] }
    ],
    cafes: ["BerTilya Cafe", "Acir Cafe", "Licao Coffee House", "Kape Leona"],
    tips: ["Bring water.", "Wear comfortable shoes.", "Check the weather before going.", "Be careful on elevated or uneven areas."],
    info: {},
    verified: false,
    reviewNote: "The Canva prototype showed the St. Joseph Parish route on this page. Only the Licao-Licao route is kept here. Content Lead: please confirm."
  },
  {
    id: "paradise-hill-farm",
    name: "Paradise Hill Farm",
    tags: ["Family", "Relaxation"],
    type: "Farm Tourism",
    summary: "A farm outing with educational tours and fruit picking, in Brgy. Paradise III.",
    address: "Brgy. Paradise III, San Jose del Monte, Bulacan",
    image: "assets/images/destinations/paradise-hill-farm.jpg",
    pin: { x: 81.0, y: 39.6 },
    howToGo: [
      { title: "From SM Tungko / Tungkong Mangga", steps: [
        "Go to the public transport terminal near the SM Tungko / Tungkong Mangga intersection along Quirino Highway.",
        "Board a jeepney with the signboard Licao-Licao and tell the driver you are getting off at Brgy. Paradise III.",
        "Alight at the entry point of Brgy. Paradise III.",
        "Hail a tricycle to Paradise Hill Farm. It is located before the Padre Pio Mountain of Healing shrine." ] }
    ],
    cafes: ["Local food stalls and stores around Paradise III"],
    tips: ["Contact the farm before visiting for the schedule and fees.", "Wear comfortable clothes and shoes.", "Follow the farm's rules, especially when picking fruits or entering planting areas."],
    info: {
      hours: "No reliable public operating hours found. Contact the farm first.",
      fee: "No reliable current entrance fee was publicly posted.",
      capacity: "No official public capacity figure is available.",
      activities: ["Educational farm tour", "Fruit picking", "Learn about farming and different crops", "Explore the farm and its surroundings"],
      contact: "City Tourism Office contact for Paradise Hill Farm: Ynez B. Veloso, 0917-327-2366"
    },
    verified: false
  },
  {
    id: "padre-pio-mountain",
    name: "Padre Pio Mountain of Healing",
    tags: ["Worship", "Nature"],
    type: "Religious / Viewpoint",
    summary: "A hilltop shrine in Brgy. Paradise III. Full details are still being prepared.",
    address: "Brgy. Paradise III, San Jose del Monte, Bulacan",
    image: "assets/images/destinations/padre-pio-mountain.jpg",
    pin: { x: 34.8, y: 43.0 },
    howToGo: [],
    cafes: [], tips: [], info: {},
    verified: false,
    comingSoon: true
  },
  {
    id: "burong-falls",
    name: "Burong Falls",
    tags: ["Nature", "Adventure"],
    type: "Eco Tourism",
    summary: "A waterfall outing reached by a short trek that includes a light river crossing.",
    address: "Purok 6, Sitio Licao-Licao, Brgy. San Isidro, San Jose del Monte, Bulacan",
    image: "assets/images/destinations/burong-falls.jpg",
    pin: { x: 58.8, y: 44.1 },
    howToGo: [
      { title: "Ways to get there", steps: [
        "Jeepney: ride from Brgy. Tungkong Mangga via Igay Road toward Licao-Licao.",
        "Tricycle: take a local tricycle to the trail registration / jump-off area.",
        "Trek: walk about 10\u201330 minutes, including a light river crossing.",
        "Private vehicle or motorcycle: drive via Igay Road to the trail registration area." ] }
    ],
    cafes: ["Licao Coffee House (along Igay Road, nearest caf\u00e9 to Burong Falls)"],
    tips: ["Wear comfortable trekking shoes.", "Bring water and extra clothes.", "Follow trail and safety guidelines.", "Keep the area clean and take your trash with you.", "Be careful during river crossings."],
    info: { fee: "The prototype lists \u20b11\u2013\u20b1500. This range needs to be confirmed." },
    verified: false
  },
  {
    id: "kaypian-eco-park",
    name: "Kaypian Eco Park",
    tags: ["Nature", "Family"],
    type: "Eco Tourism",
    summary: "A green-space stop along Abela Road in Barangay Kaypian.",
    address: "Abela Road, Barangay Kaypian, San Jose del Monte, Bulacan",
    image: "assets/images/destinations/kaypian-eco-park.jpg",
    pin: { x: 12.0, y: 46.8 },
    howToGo: [
      { title: "Option 1: Via Starmall", steps: [
        "From SM Tungko, take a jeepney, modern jeep, or bus toward Starmall SJDM / Palmera / Sapang Palay / Muzon.",
        "Ask to be dropped off at Starmall San Jose del Monte.",
        "Transfer to a blue e-jeepney or jeepney with routes like Nawasa / Minuyan Road / Sapang Palay via Kaypian.",
        "Get off near Dulong Bayan / People's Park / SJDM New City Hall (close to Barangay Kaypian).",
        "Walk a short distance toward the Eco Park entrance (Abela Road)." ] },
      { title: "Option 2: Direct blue e-jeepney (if available)", steps: [
        "Board a blue e-jeepney at the terminal near Tungko / Palmera going toward Sapang Palay via Kaypian.",
        "Tell the driver you are getting off at Barangay Kaypian / People's Park / City Hall.",
        "Walk directly to the Kaypian Eco Park site." ] }
    ],
    cafes: ["OK Caf\u00e9 Kaypian Branch (700 m, about 2 min)", "JDB Caf\u00e9 (750 m, about 2 min)", "Boo-Kid Caf\u00e9 (1.5 km, about 5 min)", "Eufrocina's Caf\u00e9 SJDM (1.7 km, about 4 min)"],
    tips: ["Bring reusable bottles and eco-bags.", "Dispose of waste properly and leave no trace.", "Respect plants and animals.", "Conserve water and electricity.", "Support local eco-friendly businesses."],
    info: {},
    verified: false
  },
  {
    id: "river-park-esplanade",
    name: "River Park Esplanade",
    tags: ["Family", "Relaxation"],
    type: "Park / Recreation",
    summary: "A riverside esplanade with a fountain. Full details are still being prepared.",
    address: "San Jose del Monte, Bulacan",
    image: "assets/images/destinations/river-park-esplanade.jpg",
    pin: { x: 26.2, y: 66.8 },
    howToGo: [],
    cafes: [], tips: [], info: {},
    verified: false,
    comingSoon: true
  },
  {
    id: "sports-complex",
    name: "SJDM City Sports Complex",
    tags: ["Family", "Adventure"],
    type: "Sports / Recreation",
    summary: "The city's sports venue with a seating capacity of about 5,000, used for tournaments and community events.",
    address: "Road 1, San Jose del Monte, Bulacan",
    image: "assets/images/destinations/sports-complex.jpg",
    pin: { x: 45.8, y: 63.3 },
    howToGo: [
      { title: "From SM Tungko", steps: [
        "Go to the highway near SM Tungko and ride a jeepney, e-jeep, or bus toward Sapang Palay, Norzagaray, or Bigte.",
        "Tell the driver or conductor to drop you off at Road 1 (near the 7-Eleven along the highway).",
        "Cross toward the 7-Eleven side and enter Road 1.",
        "Walk straight, or turn right at the corner near the San Jose del Monte Water District building, then follow the road to the Sports Complex." ] },
      { title: "From SJDM Bayan / Tungko", steps: [
        "Take a jeepney or tricycle toward Minuyan Proper and tell the driver you are going to the City Sports Complex.",
        "Estimated travel time: about 15\u201330 minutes from SJDM Bayan, depending on traffic." ] }
    ],
    cafes: ["Mr. Brewsko Caf\u00e9 (around 190 m from the complex)"],
    tips: ["Wear comfortable sportswear and shoes.", "Bring water.", "Check the event schedule before visiting.", "Follow the rules of the facility.", "Some events may require registration, so bring an ID if required.", "For large groups, coordinate with the City Youth and Sports Development Office."],
    info: {
      hours: "Depends on the facility and scheduled activities. Check with the City Youth and Sports Development Office.",
      fee: "No confirmed general entrance fee. Fees depend on the event or activity.",
      capacity: "About 5,000 seats.",
      activities: ["Basketball", "Sports events and tournaments", "Physical education activities", "Recreation and community events"]
    },
    verified: false
  },
  {
    id: "la-salette",
    name: "Our Lady of La Salette Quasi-Parish",
    tags: ["Worship", "Family"],
    type: "Religious / Cultural",
    summary: "A church in Mountain View, Barangay Muzon, beside Our Lady of La Salette school.",
    address: "M. Villarica Road, Mountain View, Barangay Muzon, San Jose del Monte, Bulacan",
    image: "assets/images/destinations/la-salette.jpg",
    pin: { x: 73.2, y: 59.9 },
    howToGo: [
      { title: "From Tungko", steps: [
        "Ride an e-jeep with the signage \u201cMuzon\u201d or \u201cCentral Terminal\u201d.",
        "Tell the driver you are going to the Central Terminal.",
        "After drop-off, use the pedestrian crossing and walk toward La Salette. It is beside the school, Our Lady of La Salette.",
        "Alternative: from Muzon central area, take a short tricycle ride or walk to the church." ] }
    ],
    cafes: ["MOC Cafe", "CHN Caf\u00e9", "Super Daddy", "Black Tiger Cafe"],
    tips: ["Bring water.", "Wear comfortable shoes.", "Always check your belongings.", "Be careful when using the pedestrian crossing."],
    info: {},
    verified: false
  },
  {
    id: "grotto-church",
    name: "Grotto Church",
    tags: ["Worship", "Family"],
    type: "Religious / Cultural",
    summary: "The Our Lady of Lourdes Grotto Shrine, a short walk from the road.",
    address: "Grotto, San Jose del Monte, Bulacan",
    image: "assets/images/destinations/grotto-church.jpg",
    pin: { x: 85.3, y: 62.5 },
    howToGo: [
      { title: "From Tungko", steps: [
        "Go outside SM City San Jose del Monte along Quirino Highway / Tungko area.",
        "Ride an e-jeep or jeepney with the signboard \u201cMuzon\u201d, \u201cGrotto\u201d, or \u201cIglesia / Palmera / Grotto\u201d.",
        "Tell the driver or conductor \u201cGrotto Church\u201d and drop off at the Grotto driveway or shrine entrance.",
        "Walk about 2\u20134 minutes into the Grotto compound." ] }
    ],
    cafes: ["Sugarita's Cave (resto cafe)", "SHOTS Studio and Cafe", "Sebio's Gym Cafe"],
    tips: ["Bring water.", "Always check your belongings.", "Wear comfortable clothes.", "Be careful when crossing roads."],
    info: {},
    verified: false
  }
];
