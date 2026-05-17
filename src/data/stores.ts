import growingNeerFarmsLogo from '../assets/growing-neer-farms.webp';
import sterlingShowpigsLogo from '../assets/sterling-showpigs.webp';
import ohioLegendsLogo from '../assets/ohio-legends.webp';
import northeasternJetsLogo from '../assets/northeastern-jets.webp';

export type StoreProduct = {
  img: string;
  title: string;
  price: string;
};

export type StoreItem = {
  id: string;
  name: string;
  shortName: string;
  category: 'school' | 'sports' | 'farm' | 'fundraiser';
  description: string;
  tagline: string;
  logo: string;
  featured?: boolean;
  products: StoreProduct[];
};

export const stores: StoreItem[] = [
  {
    id: 'northeastern',
    name: 'Northeastern Jets',
    shortName: 'Jets',
    category: 'school',
    description: 'School spiritwear and team apparel for Jets supporters.',
    tagline: 'School spiritwear and fan gear',
    logo: northeasternJetsLogo,
    featured: true,
    products: [
      {
        img: 'https://designsjenuine.com/cdn/shop/files/ScreenShot2024-08-12at3.59.23PM.png?v=1723492836&width=533',
        title: 'Jets Volleyball Tee',
        price: 'From $16.00'
      },
      {
        img: 'https://designsjenuine.com/cdn/shop/products/vintcn.jpg?v=1678935024&width=533',
        title: 'Vintage NE Crewneck',
        price: 'From $22.00'
      },
      {
        img: 'https://designsjenuine.com/cdn/shop/files/29GrayNE1.jpg?v=1695592519&width=533',
        title: 'Northeastern Jets Gray Tee',
        price: 'From $16.00'
      },
      {
        img: 'https://designsjenuine.com/cdn/shop/files/29WhiteNortheasternJets.jpg?v=1695595595&width=533',
        title: 'Northeastern Jets White Tee',
        price: '$16.00'
      }
    ]
  },
  {
    id: 'ohio-legends',
    name: 'Ohio Legends Volleyball Club',
    shortName: 'Ohio Legends',
    category: 'sports',
    description: 'Club volleyball spiritwear for athletes, families, and fans.',
    tagline: 'Club volleyball apparel and warmups',
    logo: ohioLegendsLogo,
    featured: true,
    products: [
      {
        img: 'https://designsjenuine.com/cdn/shop/files/Screen_Shot_2024-12-10_at_10.36.24_AM.png?v=1733922288&width=533',
        title: 'Ohio Legends Adult Tee',
        price: 'From $16.00'
      },
      {
        img: 'https://designsjenuine.com/cdn/shop/files/2_11937194-1546-4d65-944d-fc758a2b0615.jpg?v=1733881886&width=533',
        title: 'Ohio Legends Sweatpants',
        price: 'From $25.00'
      },
      {
        img: 'https://designsjenuine.com/cdn/shop/files/10.jpg?v=1733922288&width=533',
        title: 'Ohio Legends Performance Shirt',
        price: 'From $16.00'
      }
    ]
  },
  {
    id: 'sterling-showpigs',
    name: 'Sterling Showpigs',
    shortName: 'Sterling',
    category: 'farm',
    description: 'Apparel for the Sterling Showpigs community and supporters.',
    tagline: 'Livestock and show team apparel',
    logo: sterlingShowpigsLogo,
    featured: true,
    products: [
      {
        img: 'https://designsjenuine.com/cdn/shop/files/ScreenShot2023-12-04at3.11.58PM.png?v=1701743084&width=533',
        title: 'Sterling Showpigs Tee',
        price: 'From $16.99'
      }
    ]
  },
  {
    id: 'growing-neer-farms',
    name: 'Growing Neer Farms',
    shortName: 'Growing Neer',
    category: 'farm',
    description: 'Farm-branded apparel and custom merchandise for supporters.',
    tagline: 'Farm and community merchandise',
    logo: growingNeerFarmsLogo,
    featured: true,
    products: []
  }
];

export const supplierLinks = [
  {
    name: 'S&S Activewear',
    url: 'https://www.ssactivewear.com',
    description: 'Blank apparel catalog with trusted basics, premium tees, fleece, hats, and uniforms.'
  },
  {
    name: 'SanMar',
    url: 'https://www.sanmar.com',
    description: 'Popular source for Port Authority, Sport-Tek, District, Nike, Carhartt, and more.'
  },
  {
    name: 'Momentec Brands',
    url: 'https://www.momentecbrands.com',
    description: 'Strong teamwear and sports-focused brands for spiritwear and athletic programs.'
  }
];

export const featuredProducts = stores.flatMap((store) =>
  store.products.slice(0, 2).map((product) => ({
    ...product,
    storeName: store.name
  }))
).slice(0, 6);

export const storeCategories = [
  { id: 'all', label: 'All stores' },
  { id: 'school', label: 'Schools' },
  { id: 'sports', label: 'Sports clubs' },
  { id: 'farm', label: 'Farms & livestock' },
  { id: 'fundraiser', label: 'Fundraisers' }
] as const;
