export interface ConstructionUpdate {
  id: string;
  title: string;
  date: string;
  description: string;
  affectedStreets: string[];
  severity: "low" | "medium" | "high";
}

export interface Business {
  id: string;
  name: string;
  category: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  description: string;
  accessNote: string;
  lat: number;
  lng: number;
}

export interface ParkingLot {
  id: string;
  name: string;
  address: string;
  spots: number;
  rate: string;
  type: "lot" | "garage" | "street";
  accessNote: string;
}

export interface BingoSquare {
  id: string;
  businessName: string;
  task: string;
  completed: boolean;
}

export const constructionUpdates: ConstructionUpdate[] = [
  {
    id: "1",
    title: "Wyndham St N Water Main Replacement",
    date: "2026-02-28",
    description: "Water main replacement between Macdonell St and Quebec St. Expect lane reductions and detours. Pedestrian access maintained on east side.",
    affectedStreets: ["Wyndham St N", "Macdonell St"],
    severity: "high",
  },
  {
    id: "2",
    title: "Cork St Resurfacing",
    date: "2026-02-25",
    description: "Road resurfacing project on Cork St between Wyndham and Norfolk. Work scheduled weekdays 7am–5pm.",
    affectedStreets: ["Cork St"],
    severity: "medium",
  },
  {
    id: "3",
    title: "Quebec St Sidewalk Repairs",
    date: "2026-02-20",
    description: "Sidewalk repairs on south side of Quebec St. Brief pedestrian detours in place. All businesses remain accessible.",
    affectedStreets: ["Quebec St"],
    severity: "low",
  },
  {
    id: "4",
    title: "Carden St Utility Work",
    date: "2026-03-01",
    description: "Underground utility upgrades on Carden St near Market Square. Short-term parking may be affected.",
    affectedStreets: ["Carden St"],
    severity: "medium",
  },
];

export const businesses: Business[] = [
  {
    id: "1",
    name: "The Bookshelf",
    category: "Retail",
    address: "41 Quebec St",
    phone: "(519) 821-3311",
    website: "https://bookshelf.ca",
    hours: "Mon–Sat 9am–9pm, Sun 10am–6pm",
    description: "Independent bookstore, cinema, and restaurant in the heart of downtown Guelph.",
    accessNote: "Enter via Quebec St. Full pedestrian access available.",
    lat: 43.5448,
    lng: -80.2482,
  },
  {
    id: "2",
    name: "Red Brick Café",
    category: "Food & Drink",
    address: "8 Douglas St",
    phone: "(519) 821-2233",
    website: "#",
    hours: "Mon–Fri 7am–5pm, Sat–Sun 8am–4pm",
    description: "Cozy café serving specialty coffee, fresh pastries, and light lunches.",
    accessNote: "Access via Douglas St. No construction impact.",
    lat: 43.5455,
    lng: -80.2495,
  },
  {
    id: "3",
    name: "Guelph Farmers' Market",
    category: "Market",
    address: "2 Gordon St",
    phone: "(519) 837-5628",
    website: "#",
    hours: "Sat 7am–12pm",
    description: "Weekly farmers' market featuring local produce, artisan goods, and prepared foods.",
    accessNote: "Use Gordon St entrance. Wyndham detour in effect.",
    lat: 43.5440,
    lng: -80.2510,
  },
  {
    id: "4",
    name: "Planet Bean Coffee",
    category: "Food & Drink",
    address: "38 Wyndham St N",
    phone: "(519) 821-6388",
    website: "#",
    hours: "Mon–Fri 7am–6pm, Sat 8am–5pm, Sun 9am–4pm",
    description: "Fair-trade coffee roaster and café. Locally roasted beans since 1997.",
    accessNote: "Enter from Wyndham St east sidewalk during construction.",
    lat: 43.5452,
    lng: -80.2488,
  },
  {
    id: "5",
    name: "Craft & Co.",
    category: "Retail",
    address: "15 Macdonell St",
    phone: "(519) 265-4430",
    website: "#",
    hours: "Tue–Sat 10am–6pm, Sun 12pm–5pm",
    description: "Curated shop featuring handmade goods from local artisans and makers.",
    accessNote: "Macdonell St access from Cork St recommended.",
    lat: 43.5445,
    lng: -80.2500,
  },
  {
    id: "6",
    name: "Baker Street Station",
    category: "Food & Drink",
    address: "76 Baker St",
    phone: "(519) 265-7960",
    website: "#",
    hours: "Daily 11am–11pm",
    description: "Gastropub with craft beer selection and elevated comfort food in a heritage building.",
    accessNote: "No construction impact. Full access via Baker St.",
    lat: 43.5460,
    lng: -80.2475,
  },
  {
    id: "7",
    name: "Guelph Dance",
    category: "Services",
    address: "25 Wyndham St N",
    phone: "(519) 780-0171",
    website: "#",
    hours: "By appointment",
    description: "Dance studio offering classes in salsa, ballroom, swing, and more.",
    accessNote: "Use east sidewalk on Wyndham during construction.",
    lat: 43.5450,
    lng: -80.2490,
  },
  {
    id: "8",
    name: "The Corner Barbershop",
    category: "Services",
    address: "3 Carden St",
    phone: "(519) 821-0001",
    website: "#",
    hours: "Tue–Fri 9am–6pm, Sat 9am–4pm",
    description: "Classic barbershop with modern style. Walk-ins welcome.",
    accessNote: "Enter from Carden St. Short-term parking may be limited.",
    lat: 43.5443,
    lng: -80.2505,
  },
];

export const categories = ["All", "Food & Drink", "Retail", "Market", "Services"];

export const parkingLots: ParkingLot[] = [
  {
    id: "1",
    name: "Wilson St Parking Garage",
    address: "45 Wilson St",
    spots: 300,
    rate: "$2/hr, $12/day max",
    type: "garage",
    accessNote: "Main entrance on Wilson St. Fully accessible during construction.",
  },
  {
    id: "2",
    name: "Baker St Lot",
    address: "80 Baker St",
    spots: 85,
    rate: "$1.50/hr",
    type: "lot",
    accessNote: "Open lot, no construction impact.",
  },
  {
    id: "3",
    name: "Quebec St Lot",
    address: "55 Quebec St",
    spots: 60,
    rate: "$1.50/hr",
    type: "lot",
    accessNote: "Access from Quebec St. Sidewalk detour nearby.",
  },
  {
    id: "4",
    name: "Market Square Lot",
    address: "2 Gordon St",
    spots: 45,
    rate: "Free on Saturdays",
    type: "lot",
    accessNote: "Use Gordon St entrance during Wyndham construction.",
  },
  {
    id: "5",
    name: "Carden St On-Street",
    address: "Carden St (various)",
    spots: 30,
    rate: "$1.50/hr",
    type: "street",
    accessNote: "Some spots temporarily unavailable due to utility work.",
  },
];

export const bingoSquares: BingoSquare[] = [
  { id: "1", businessName: "The Bookshelf", task: "Buy a book", completed: false },
  { id: "2", businessName: "Red Brick Café", task: "Grab a coffee", completed: false },
  { id: "3", businessName: "Planet Bean", task: "Try a new blend", completed: false },
  { id: "4", businessName: "Craft & Co.", task: "Find a handmade gift", completed: false },
  { id: "5", businessName: "Baker Street Station", task: "Try a craft beer", completed: false },
  { id: "6", businessName: "Farmers' Market", task: "Buy local produce", completed: false },
  { id: "7", businessName: "Corner Barbershop", task: "Get a fresh cut", completed: false },
  { id: "8", businessName: "Guelph Dance", task: "Take a class", completed: false },
  { id: "9", businessName: "FREE SPACE", task: "Visit downtown!", completed: true },
];
