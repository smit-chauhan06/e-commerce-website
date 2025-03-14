import { Images } from "./Files";

export const DrawerItems = [
  {
    id: 1,
    name: "Home",
    navigate: "/",
  },
  {
    id: 2,
    name: "Contact",
    navigate: "/",
  },
  {
    id: 3,
    name: "About",
    navigate: "/",
  },
  {
    id: 4,
    name: "Sign Up",
    navigate: "/",
  },
];

export const ProductDetails = [
  {
    id: 1,
    name: "HAVIT HV-92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    noRating: 88,
    discount: 40,
    isAddedToCart: false,
    image: Images.gamePad,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1600,
    rating: 4,
    noRating: 75,
    discount: 35,
    isAddedToCart: true,
    image: Images.keyboard,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 5,
    noRating: 99,
    discount: 30,
    isAddedToCart: false,
    image: Images.screen,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4,
    noRating: 99,
    discount: 35,
    isAddedToCart: false,
    image: Images.chair,
  },
];

export const MonthlySellProducts = [
  {
    id: 1,
    name: "The North Coat",
    price: 120,
    oldPrice: 160,
    rating: 5,
    noRating: 88,
    discount: 40,
    isAddedToCart: false,
    image: Images.jacket,
  },
  {
    id: 2,
    name: "Gucci Duffle Bag",
    price: 960,
    oldPrice: 1600,
    rating: 4,
    noRating: 75,
    discount: 35,
    isAddedToCart: true,
    image: Images.bag,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 370,
    oldPrice: 400,
    rating: 5,
    noRating: 99,
    discount: 30,
    isAddedToCart: false,
    image: Images.tapRecorder,
  },
  {
    id: 4,
    name: "Small Book Self",
    price: 375,
    oldPrice: 400,
    rating: 4,
    noRating: 99,
    discount: 35,
    isAddedToCart: false,
    image: Images.table,
  },
];

export const categoryData = [
  {
    id: 1,
    name: "Mobiles",
    image: Images.mobilesCategory,
  },
  {
    id: 2,
    name: "Fashion",
    image: Images.fashionCategory,
  },
  {
    id: 3,
    name: "Electronics",
    image: Images.electronicsCategory,
  },
  {
    id: 4,
    name: "Home & Furniture",
    image: Images.homeAndFurniture,
  },
  {
    id: 5,
    name: "Beauty Products",
    image: Images.beautyCategory,
  },
  {
    id: 6,
    name: "Toys & More",
    image: Images.babyCategory,
  },
  {
    id: 7,
    name: "Appliances",
    image: Images.appliances,
  },
];

export const BestElectronics = [
  {
    id: 1,
    name: "Smart Watches",
    price: "From ₹500",
    image: Images.smartWatch,
    discount: "35%",
  },
  { id: 2, name: "Printers", price: "Up to 40% Off", image: Images.printer },

  {
    id: 3,
    name: "Earbuds",
    price: "Starting from ₹300",
    image: Images.earbuds,
  },
  {
    id: 4,
    name: "Keyboards",
    price: "Up to 60% Off",
    image: Images.keyboardBest,
  },
  { id: 5, name: "Trimmers", price: "Min 20% Off", image: Images.trimmer },
  {
    id: 6,
    name: "Monitors",
    price: "Starting from ₹1000",
    image: Images.monitor,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: "Up to 70% off",
    image: Images.bluetoothSpeaker,
  },
  {
    id: 8,
    name: "Mouse",
    price: "Starting from ₹100",
    image: Images.gamingMouse,
  },
  {
    id: 9,
    name: "Headphone",
    price: "Starting from ₹800",
    image: Images.headPhone,
  },
  {
    id: 10,
    name: "Projector",
    price: "Minimum 40% off",
    image: Images.projector,
  },
];

export const FashionDeals = [
  {
    id: 1,
    name: "Women Dresses",
    price: "50-80% off",
    image: Images.womanDress,
  },
  {
    id: 2,
    name: "Women's Shirts",
    price: "Min 70% off",
    image: Images.womanShirts,
  },
  {
    id: 3,
    name: "Shoes",
    price: "Upto 70% off",
    image: Images.shoes,
  },
  {
    id: 4,
    name: "Ladies Purses",
    price: "Up to 65% Off",
    image: Images.womanPurse,
  },
  { id: 5, name: "Man Shirts", price: "Min 50% Off", image: Images.manShirts },
  {
    id: 6,
    name: "Man Jeans",
    price: "Upto 90% off",
    image: Images.manJeans,
  },
  {
    id: 7,
    name: "Women Tshirts",
    price: "Upto 60% off",
    image: Images.womenTshirt,
  },
  {
    id: 8,
    name: "Men Tshirts",
    price: "Min 20% off",
    image: Images.manTshirt,
  },
  {
    id: 9,
    name: "Footwear",
    price: "Min 25% off",
    image: Images.footwear,
  },
  {
    id: 10,
    name: "Ethnic Wear",
    price: "upto 60% off",
    image: Images.ethnicWear,
  },
];

export const appliancesOffersData = {
  title: "Appliances for home | Up to 55% off",
  items: [
    {
      id: 1,
      name: "Air conditioners",
      image: Images.ac,
    },
    {
      id: 2,
      name: "Refridgerators",
      image: Images.fridge,
    },
    {
      id: 3,
      name: "Microwaves",
      image: Images.microWave,
    },
    {
      id: 4,
      name: "Washing machines",
      image: Images.washingMachine,
    },
  ],
};

export const HomeDecorOffersData = {
  title: "Starting ₹199 | Brands & more",
  items: [
    {
      id: 1,
      name: "Bedsheets",
      image: Images.bedSheet,
    },
    {
      id: 2,
      name: "Curtains",
      image: Images.curtains,
    },
    {
      id: 3,
      name: "Iorning board & more",
      image: Images.iornBoard,
    },
    {
      id: 4,
      name: "Home decor",
      image: Images.homeDecor,
    },
  ],
};

export const womenStyleOffers = {
  title: "Up to 60% off | Styles for women",
  items: [
    {
      id: 1,
      name: "Women's clothing",
      image: Images.womenClothing,
    },
    {
      id: 2,
      name: "Footwear Handbags",
      image: Images.footwearHandbag,
    },
    {
      id: 3,
      name: "Watches",
      image: Images.watches,
    },
    {
      id: 4,
      name: "Fashion jewellery",
      image: Images.fashionJwellery,
    },
  ],
};

export const ProductDetailsImages = [
  {
    id: 1,
    image: "https://i.ibb.co/gbk7kFJt/watch1.png",
  },
  {
    id: 2,
    image: "https://i.ibb.co/LhDJqBZV/watch2.png",
  },
  {
    id: 3,
    image: "https://i.ibb.co/zhKKQ54F/watch3.png",
  },
  {
    id: 4,
    image: "https://i.ibb.co/pBKkNnWq/watch4.png",
  },
  {
    id: 5,
    image: "https://i.ibb.co/1Y70L78R/watch5.png",
  },
];
