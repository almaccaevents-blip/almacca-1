export interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  minGuests: number;
  maxGuests: number;
  category: string;
  popular: boolean;
  link: string;
}

export interface AdditionalItem {
  id: number;
  name: string;
  price: string;
  numericPrice: number;
  description: string;
}

// Mehndi & Mayion Data
export const mehndiPackages: Package[] = [
  {
    id: "mehndi-basic",
    name: "Mehndi Basic Package",
    price: 1200,
    originalPrice: 1400,
    description:
      "Perfect for intimate mehndi celebrations with traditional flavors",
    features: [
      "Traditional Henna Ceremony Setup",
      "Authentic Pakistani Cuisine (Biryani, Karahi, BBQ)",
      "Decorative Lighting & Ambiance",
      "Professional Music System",
      "Experienced Service Staff",
      "Traditional Sweets & Desserts Counter",
      "Welcome Drinks for Guests",
      "Basic Photography Assistance",
    ],
    minGuests: 50,
    maxGuests: 100,
    category: "Mehndi & Mayion",
    popular: false,
    link: "/packages/mehndi-mayion",
  },
  {
    id: "mehndi-premium",
    name: "Mehndi Premium Package",
    price: 1800,
    originalPrice: 2100,
    description:
      "Luxurious mehndi celebration with premium amenities and gourmet cuisine",
    features: [
      "Premium Professional Henna Artists",
      "Gourmet Pakistani & Continental Cuisine",
      "Elegant Floral Decorations & Stage Setup",
      "Professional Photography & Videography",
      "Live Traditional Music Performance",
      "Premium Dessert & Mithai Counter",
      "VIP Guest Seating Arrangements",
      "Bridal Room Setup & Assistance",
      "Complimentary Mehndi Favors",
    ],
    minGuests: 100,
    maxGuests: 200,
    category: "Mehndi & Mayion",
    popular: true,
    link: "/packages/mehndi-mayion",
  },
];

export const mehndiAdditionalItems: AdditionalItem[] = [
  {
    id: 1,
    name: "Premium Henna Artists",
    price: "Rs. 150",
    numericPrice: 150,
    description: "Professional henna artists for intricate designs",
  },
  {
    id: 2,
    name: "Live Dhol Performance",
    price: "Rs. 300",
    numericPrice: 300,
    description: "Traditional dhol players for authentic celebration",
  },
  {
    id: 3,
    name: "Flower Jewelry Making",
    price: "Rs. 200",
    numericPrice: 200,
    description: "Fresh flower jewelry station for guests",
  },
  {
    id: 4,
    name: "Traditional Games Setup",
    price: "Rs. 100",
    numericPrice: 100,
    description: "Fun traditional games and activities",
  },
  {
    id: 5,
    name: "Premium Seating Upgrade",
    price: "Rs. 80",
    numericPrice: 80,
    description: "Luxury cushions and low seating arrangements",
  },
  {
    id: 6,
    name: "Extended Photography",
    price: "Rs. 500",
    numericPrice: 500,
    description: "Additional 2 hours of professional photography",
  },
];

// Shaadi & Valima Data
export const shaadiPackages: Package[] = [
  {
    id: "shaadi-classic",
    name: "Shaadi Classic Package",
    price: 2500,
    originalPrice: 2800,
    description:
      "Traditional wedding package with authentic Pakistani cuisine and elegant setup",
    features: [
      "Multi-Course Pakistani Cuisine (Appetizers, Main Course, Desserts)",
      "Elegant Wedding Stage & Backdrop Decoration",
      "Professional Service Team & Coordination",
      "Traditional Music System & Sound Setup",
      "Bridal Room Setup & Assistance",
      "Welcome Drinks & Refreshments",
      "Photography Area Setup",
      "Guest Seating Arrangements",
      "Complimentary Bridal Bouquet",
    ],
    minGuests: 200,
    maxGuests: 400,
    category: "Shaadi & Valima",
    popular: true,
    link: "/packages/shaadi-valima",
  },
  {
    id: "valima-royal",
    name: "Valima Royal Package",
    price: 3200,
    originalPrice: 3600,
    description:
      "Royal valima celebration with premium international cuisine and luxury amenities",
    features: [
      "International & Pakistani Gourmet Cuisine",
      "Luxury Stage Setup & Premium Backdrop",
      "Premium Floral Arrangements & Centerpieces",
      "Live Cooking Stations (Pasta, BBQ, Chaat)",
      "Professional Photography & Videography",
      "VIP Guest Services & Concierge",
      "Premium Dessert Buffet & Ice Cream Station",
      "Complimentary Bridal Suite Access",
      "Red Carpet Entry Setup",
      "Premium Bar Setup (Non-Alcoholic)",
    ],
    minGuests: 300,
    maxGuests: 600,
    category: "Shaadi & Valima",
    popular: false,
    link: "/packages/shaadi-valima",
  },
];

export const shaadiAdditionalItems: AdditionalItem[] = [
  {
    id: 1,
    name: "Live Cooking Station",
    price: "Rs. 400",
    numericPrice: 400,
    description: "Chef preparing fresh dishes in front of guests",
  },
  {
    id: 2,
    name: "Premium Floral Upgrade",
    price: "Rs. 600",
    numericPrice: 600,
    description: "Luxury flower arrangements and centerpieces",
  },
  {
    id: 3,
    name: "Extended Photography",
    price: "Rs. 800",
    numericPrice: 800,
    description: "Full day photography with edited album",
  },
  {
    id: 4,
    name: "Bridal Car Decoration",
    price: "Rs. 250",
    numericPrice: 250,
    description: "Beautiful car decoration for the couple",
  },
  {
    id: 5,
    name: "Guest Welcome Favors",
    price: "Rs. 120",
    numericPrice: 120,
    description: "Personalized welcome gifts for guests",
  },
  {
    id: 6,
    name: "Premium Sound System",
    price: "Rs. 350",
    numericPrice: 350,
    description: "High-quality audio system with microphones",
  },
  {
    id: 7,
    name: "Ice Sculpture Display",
    price: "Rs. 500",
    numericPrice: 500,
    description: "Custom ice sculpture centerpiece",
  },
  {
    id: 8,
    name: "Fireworks Display",
    price: "Rs. 1000",
    numericPrice: 1000,
    description: "Professional fireworks show for grand finale",
  },
];

// Farmhouse Data
export const farmhousePackages: Package[] = [
  {
    id: "farmhouse-basic",
    name: "Farmhouse Basic Package",
    price: 1500,
    originalPrice: 1700,
    description:
      "Outdoor farmhouse dining experience with BBQ specialties and rustic ambiance",
    features: [
      "Outdoor BBQ Grill Setup & Live Cooking",
      "Traditional Pakistani Cuisine & Specialties",
      "Rustic Farmhouse Ambiance & Decoration",
      "Bonfire Arrangement & Setup",
      "Comfortable Outdoor Seating (Charpoys & Tables)",
      "Live Cooking Display & Chef Interaction",
      "Traditional Music & Folk Entertainment",
      "Fresh Naan & Tandoor Bread Station",
    ],
    minGuests: 80,
    maxGuests: 150,
    category: "Farmhouse",
    popular: false,
    link: "/packages/farmhouse",
  },
  {
    id: "farmhouse-deluxe",
    name: "Farmhouse Deluxe Package",
    price: 2200,
    originalPrice: 2500,
    description:
      "Premium farmhouse experience with luxury amenities and international cuisine options",
    features: [
      "Premium BBQ & Grill Station with Multiple Meats",
      "International & Pakistani Cuisine Fusion",
      "Luxury Outdoor Setup with Premium Furniture",
      "Professional Entertainment & Live Music",
      "Premium Beverage Bar Setup (Non-Alcoholic)",
      "Outdoor Games & Activities (Cricket, Volleyball)",
      "Professional Photography & Videography",
      "Transportation Assistance & Coordination",
      "Starlight Decoration & Ambient Lighting",
      "Complimentary Hookah Corner",
    ],
    minGuests: 150,
    maxGuests: 300,
    category: "Farmhouse",
    popular: true,
    link: "/packages/farmhouse",
  },
];

export const farmhouseAdditionalItems: AdditionalItem[] = [
  {
    id: 1,
    name: "Horse Riding Experience",
    price: "Rs. 300",
    numericPrice: 300,
    description: "Guided horse riding sessions for guests",
  },
  {
    id: 2,
    name: "Camel Ride Setup",
    price: "Rs. 400",
    numericPrice: 400,
    description: "Traditional camel rides for authentic experience",
  },
  {
    id: 3,
    name: "Outdoor Cinema Setup",
    price: "Rs. 600",
    numericPrice: 600,
    description: "Large screen movie setup under the stars",
  },
  {
    id: 4,
    name: "Traditional Games Package",
    price: "Rs. 200",
    numericPrice: 200,
    description: "Kabaddi, tug of war, and traditional sports",
  },
  {
    id: 5,
    name: "Premium Hookah Corner",
    price: "Rs. 150",
    numericPrice: 150,
    description: "Multiple flavored hookah setup with seating",
  },
  {
    id: 6,
    name: "Bonfire & Marshmallow",
    price: "Rs. 100",
    numericPrice: 100,
    description: "Evening bonfire with marshmallow roasting",
  },
  {
    id: 7,
    name: "Folk Dance Performance",
    price: "Rs. 500",
    numericPrice: 500,
    description: "Traditional Punjabi folk dance entertainment",
  },
  {
    id: 8,
    name: "Tractor Ride Experience",
    price: "Rs. 250",
    numericPrice: 250,
    description: "Fun tractor rides around the farmhouse",
  },
];

// All Packages
export const allPackages: Package[] = [
  ...mehndiPackages,
  ...shaadiPackages,
  ...farmhousePackages,
];
