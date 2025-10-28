import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  // DRESSES (10 items)
  {
    id: "1",
    name: "Classic Black Dress",
    price: 189.00,
    image: product1,
    category: "Dresses",
    description: "Elegant black dress crafted from premium fabric. Perfect for any occasion, featuring a timeless silhouette that flatters every figure.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy"]
  },
  {
    id: "7",
    name: "Floral Maxi Dress",
    price: 215.00,
    image: "/placeholder.svg",
    category: "Dresses",
    description: "Flowing maxi dress with delicate floral print. Perfect for summer events with its breezy silhouette and romantic details.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Pink", "Floral Blue", "Floral Green"]
  },
  {
    id: "8",
    name: "Cocktail Mini Dress",
    price: 245.00,
    image: "/placeholder.svg",
    category: "Dresses",
    description: "Sophisticated mini dress with sequin details. Designed to make a statement at evening events and cocktail parties.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gold", "Silver", "Black"]
  },
  {
    id: "9",
    name: "Wrap Midi Dress",
    price: 198.00,
    image: "/placeholder.svg",
    category: "Dresses",
    description: "Flattering wrap dress in premium jersey fabric. Adjustable waist tie ensures the perfect fit for every body type.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Burgundy", "Forest Green", "Navy"]
  },
  {
    id: "10",
    name: "Satin Slip Dress",
    price: 175.00,
    image: "/placeholder.svg",
    category: "Dresses",
    description: "Luxurious satin slip dress with delicate straps. Minimalist design that exudes effortless elegance.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne", "Black", "Dusty Rose"]
  },
  {
    id: "11",
    name: "Lace Evening Dress",
    price: 385.00,
    image: "/placeholder.svg",
    category: "Dresses",
    description: "Exquisite lace evening dress with intricate details. Perfect for formal occasions and special celebrations.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Black", "Navy"]
  },
  {
    id: "12",
    name: "Pleated Chiffon Dress",
    price: 225.00,
    image: "/placeholder.svg",
    category: "Dresses",
    description: "Ethereal chiffon dress with elegant pleating. Lightweight and flowing for a romantic, feminine look.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blush", "Mint", "Lavender"]
  },
  {
    id: "13",
    name: "Shirt Dress",
    price: 165.00,
    image: "/placeholder.svg",
    category: "Dresses",
    description: "Versatile shirt dress in crisp cotton. Classic silhouette perfect for both office and weekend wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Khaki"]
  },
  {
    id: "14",
    name: "Knit Sweater Dress",
    price: 195.00,
    image: "/placeholder.svg",
    category: "Dresses",
    description: "Cozy knit dress perfect for cooler days. Comfortable yet chic with a flattering fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Charcoal", "Burgundy"]
  },
  {
    id: "15",
    name: "A-Line Midi Dress",
    price: 205.00,
    image: "/placeholder.svg",
    category: "Dresses",
    description: "Classic A-line dress with timeless appeal. Structured yet comfortable for all-day wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Emerald"]
  },

  // JACKETS (10 items)
  {
    id: "2",
    name: "Tailored White Blazer",
    price: 245.00,
    image: product2,
    category: "Jackets",
    description: "Sophisticated white blazer with impeccable tailoring. A versatile piece that elevates any outfit with its clean lines and modern fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Cream", "Black"]
  },
  {
    id: "16",
    name: "Double-Breasted Blazer",
    price: 275.00,
    image: "/placeholder.svg",
    category: "Jackets",
    description: "Power dressing at its finest. Double-breasted design with gold buttons for a polished, professional look.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Camel"]
  },
  {
    id: "17",
    name: "Leather Biker Jacket",
    price: 425.00,
    image: "/placeholder.svg",
    category: "Jackets",
    description: "Edgy leather jacket with asymmetric zip. Premium leather that gets better with age.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Cognac", "Forest Green"]
  },
  {
    id: "18",
    name: "Cropped Denim Jacket",
    price: 155.00,
    image: "/placeholder.svg",
    category: "Jackets",
    description: "Classic denim jacket in modern cropped silhouette. Essential layering piece for casual chic style.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Light Wash", "Dark Wash", "Black"]
  },
  {
    id: "19",
    name: "Oversized Blazer",
    price: 265.00,
    image: "/placeholder.svg",
    category: "Jackets",
    description: "Contemporary oversized blazer with relaxed fit. Effortlessly stylish for modern sophistication.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Grey", "Black"]
  },
  {
    id: "20",
    name: "Tweed Jacket",
    price: 295.00,
    image: "/placeholder.svg",
    category: "Jackets",
    description: "Timeless tweed jacket with classic appeal. Luxurious texture and refined details.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Multi Tweed", "Black & White", "Brown Tweed"]
  },
  {
    id: "21",
    name: "Velvet Blazer",
    price: 315.00,
    image: "/placeholder.svg",
    category: "Jackets",
    description: "Luxe velvet blazer for evening elegance. Rich texture with sophisticated sheen.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Burgundy", "Forest Green", "Navy"]
  },
  {
    id: "22",
    name: "Utility Jacket",
    price: 185.00,
    image: "/placeholder.svg",
    category: "Jackets",
    description: "Functional utility jacket with multiple pockets. Practical style meets contemporary design.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Olive", "Khaki", "Black"]
  },
  {
    id: "23",
    name: "Collarless Jacket",
    price: 255.00,
    image: "/placeholder.svg",
    category: "Jackets",
    description: "Modern collarless jacket with minimalist design. Clean lines for a sophisticated look.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Blush", "Navy"]
  },
  {
    id: "24",
    name: "Bomber Jacket",
    price: 225.00,
    image: "/placeholder.svg",
    category: "Jackets",
    description: "Sporty bomber jacket with ribbed details. Contemporary twist on a classic silhouette.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Sage Green"]
  },

  // OUTERWEAR (10 items)
  {
    id: "3",
    name: "Designer Trench Coat",
    price: 425.00,
    image: product3,
    category: "Outerwear",
    description: "Luxurious trench coat in premium beige fabric. Classic design with contemporary details for the modern wardrobe.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Khaki"]
  },
  {
    id: "25",
    name: "Wool Peacoat",
    price: 385.00,
    image: "/placeholder.svg",
    category: "Outerwear",
    description: "Classic peacoat in premium wool blend. Timeless nautical-inspired design with double-breasted closure.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Camel"]
  },
  {
    id: "26",
    name: "Long Puffer Coat",
    price: 345.00,
    image: "/placeholder.svg",
    category: "Outerwear",
    description: "Warm puffer coat with sleek silhouette. Lightweight insulation with maximum warmth.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Olive", "Burgundy"]
  },
  {
    id: "27",
    name: "Cashmere Wrap Coat",
    price: 625.00,
    image: "/placeholder.svg",
    category: "Outerwear",
    description: "Luxurious cashmere coat with elegant wrap design. Ultimate sophistication and comfort.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Grey", "Black"]
  },
  {
    id: "28",
    name: "Teddy Bear Coat",
    price: 295.00,
    image: "/placeholder.svg",
    category: "Outerwear",
    description: "Cozy teddy coat with plush texture. Fun and functional for casual winter days.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Brown", "Black"]
  },
  {
    id: "29",
    name: "Faux Fur Coat",
    price: 365.00,
    image: "/placeholder.svg",
    category: "Outerwear",
    description: "Glamorous faux fur coat for statement style. Cruelty-free luxury with maximum impact.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Leopard", "Black", "Cream"]
  },
  {
    id: "30",
    name: "Wool Blend Coat",
    price: 395.00,
    image: "/placeholder.svg",
    category: "Outerwear",
    description: "Tailored wool coat with timeless elegance. Classic silhouette in premium fabric.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Charcoal", "Camel", "Navy"]
  },
  {
    id: "31",
    name: "Belted Trench Coat",
    price: 455.00,
    image: "/placeholder.svg",
    category: "Outerwear",
    description: "Modern take on the classic trench. Belted waist and contemporary details.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Khaki", "Black", "Olive"]
  },
  {
    id: "32",
    name: "Quilted Jacket",
    price: 275.00,
    image: "/placeholder.svg",
    category: "Outerwear",
    description: "Lightweight quilted jacket for transitional weather. Packable design with timeless style.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Olive", "Burgundy"]
  },
  {
    id: "33",
    name: "Cape Coat",
    price: 485.00,
    image: "/placeholder.svg",
    category: "Outerwear",
    description: "Dramatic cape coat with flowing silhouette. Statement piece for elegant occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Camel"]
  },

  // SKIRTS (10 items)
  {
    id: "4",
    name: "Silk Midi Skirt",
    price: 165.00,
    image: "/placeholder.svg",
    category: "Skirts",
    description: "Flowing silk midi skirt that moves beautifully. Elegant drape and luxurious feel make this a wardrobe essential.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne", "Black", "Emerald"]
  },
  {
    id: "34",
    name: "Pleated Maxi Skirt",
    price: 185.00,
    image: "/placeholder.svg",
    category: "Skirts",
    description: "Elegant pleated maxi skirt with graceful movement. Perfect for both day and evening wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blush", "Navy", "Black"]
  },
  {
    id: "35",
    name: "Leather Mini Skirt",
    price: 215.00,
    image: "/placeholder.svg",
    category: "Skirts",
    description: "Edgy leather mini skirt with sleek finish. Modern silhouette with versatile appeal.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Burgundy", "Cognac"]
  },
  {
    id: "36",
    name: "A-Line Skirt",
    price: 145.00,
    image: "/placeholder.svg",
    category: "Skirts",
    description: "Classic A-line skirt with flattering fit. Versatile piece for professional and casual settings.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Grey"]
  },
  {
    id: "37",
    name: "Tulle Midi Skirt",
    price: 195.00,
    image: "/placeholder.svg",
    category: "Skirts",
    description: "Romantic tulle skirt with layered volume. Dreamy texture for special occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blush", "Ivory", "Black"]
  },
  {
    id: "38",
    name: "Wrap Skirt",
    price: 155.00,
    image: "/placeholder.svg",
    category: "Skirts",
    description: "Versatile wrap skirt with adjustable tie. Flattering silhouette that suits every body type.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral", "Striped", "Solid Black"]
  },
  {
    id: "39",
    name: "Denim Midi Skirt",
    price: 135.00,
    image: "/placeholder.svg",
    category: "Skirts",
    description: "Classic denim skirt with button-front detail. Casual essential with timeless appeal.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Light Wash", "Dark Wash", "Black"]
  },
  {
    id: "40",
    name: "Satin Slip Skirt",
    price: 175.00,
    image: "/placeholder.svg",
    category: "Skirts",
    description: "Luxurious satin skirt with bias cut. Elegant drape for effortless sophistication.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne", "Emerald", "Navy"]
  },
  {
    id: "41",
    name: "Pencil Skirt",
    price: 165.00,
    image: "/placeholder.svg",
    category: "Skirts",
    description: "Tailored pencil skirt for polished style. Perfect for office and formal occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Charcoal"]
  },
  {
    id: "42",
    name: "Asymmetric Skirt",
    price: 205.00,
    image: "/placeholder.svg",
    category: "Skirts",
    description: "Modern asymmetric skirt with unique hemline. Contemporary design for fashion-forward style.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Olive", "Burgundy"]
  },

  // KNITWEAR (10 items)
  {
    id: "5",
    name: "Cashmere Sweater",
    price: 198.00,
    image: "/placeholder.svg",
    category: "Knitwear",
    description: "Ultra-soft cashmere sweater in timeless design. Perfect layering piece for sophisticated everyday style.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Charcoal", "Ivory"]
  },
  {
    id: "43",
    name: "Cable Knit Sweater",
    price: 175.00,
    image: "/placeholder.svg",
    category: "Knitwear",
    description: "Classic cable knit sweater with cozy texture. Timeless pattern for cold weather comfort.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Navy", "Grey"]
  },
  {
    id: "44",
    name: "Turtleneck Sweater",
    price: 165.00,
    image: "/placeholder.svg",
    category: "Knitwear",
    description: "Sleek turtleneck in fine merino wool. Elegant and warm for layering or standalone wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Camel", "Burgundy"]
  },
  {
    id: "45",
    name: "Oversized Cardigan",
    price: 215.00,
    image: "/placeholder.svg",
    category: "Knitwear",
    description: "Cozy oversized cardigan for relaxed style. Perfect for lounging or casual outings.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Oatmeal", "Grey", "Olive"]
  },
  {
    id: "46",
    name: "V-Neck Sweater",
    price: 155.00,
    image: "/placeholder.svg",
    category: "Knitwear",
    description: "Classic V-neck sweater in soft wool blend. Versatile essential for layering.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Burgundy"]
  },
  {
    id: "47",
    name: "Cropped Knit Top",
    price: 135.00,
    image: "/placeholder.svg",
    category: "Knitwear",
    description: "Modern cropped sweater with ribbed details. Contemporary silhouette for fashion-forward looks.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Sage"]
  },
  {
    id: "48",
    name: "Fair Isle Sweater",
    price: 195.00,
    image: "/placeholder.svg",
    category: "Knitwear",
    description: "Traditional Fair Isle pattern with modern colors. Festive charm with timeless appeal.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Multi Nordic", "Navy Multi", "Red Multi"]
  },
  {
    id: "49",
    name: "Cashmere Blend Cardigan",
    price: 245.00,
    image: "/placeholder.svg",
    category: "Knitwear",
    description: "Luxurious cashmere blend cardigan with button front. Elegant layering piece.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Black", "Dusty Rose"]
  },
  {
    id: "50",
    name: "Ribbed Knit Dress",
    price: 185.00,
    image: "/placeholder.svg",
    category: "Knitwear",
    description: "Body-skimming ribbed knit dress. Comfortable and chic for all-day wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Camel", "Forest Green"]
  },
  {
    id: "51",
    name: "Chunky Knit Sweater",
    price: 225.00,
    image: "/placeholder.svg",
    category: "Knitwear",
    description: "Oversized chunky knit for ultimate coziness. Statement texture with relaxed fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Charcoal", "Rust"]
  },

  // SHOES (10 items)
  {
    id: "6",
    name: "Leather Ankle Boots",
    price: 285.00,
    image: "/placeholder.svg",
    category: "Shoes",
    description: "Premium leather ankle boots with subtle heel. Versatile design that complements any outfit.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Cognac"]
  },
  {
    id: "52",
    name: "Classic Pumps",
    price: 245.00,
    image: "/placeholder.svg",
    category: "Shoes",
    description: "Timeless pumps with pointed toe. Essential for professional and formal occasions.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Nude", "Navy"]
  },
  {
    id: "53",
    name: "Strappy Heeled Sandals",
    price: 265.00,
    image: "/placeholder.svg",
    category: "Shoes",
    description: "Elegant strappy sandals for evening wear. Delicate design with comfortable fit.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Gold", "Silver", "Black"]
  },
  {
    id: "54",
    name: "White Sneakers",
    price: 195.00,
    image: "/placeholder.svg",
    category: "Shoes",
    description: "Clean white leather sneakers for everyday style. Minimalist design with maximum versatility.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["White", "White/Gold", "White/Silver"]
  },
  {
    id: "55",
    name: "Loafers",
    price: 225.00,
    image: "/placeholder.svg",
    category: "Shoes",
    description: "Classic leather loafers with polished finish. Comfortable sophistication for work or weekend.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Brown", "Burgundy"]
  },
  {
    id: "56",
    name: "Knee-High Boots",
    price: 395.00,
    image: "/placeholder.svg",
    category: "Shoes",
    description: "Sleek knee-high boots in supple leather. Statement footwear with timeless appeal.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Brown", "Cognac"]
  },
  {
    id: "57",
    name: "Ballet Flats",
    price: 165.00,
    image: "/placeholder.svg",
    category: "Shoes",
    description: "Elegant ballet flats with comfortable fit. Classic silhouette for effortless style.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Nude", "Leopard"]
  },
  {
    id: "58",
    name: "Platform Sandals",
    price: 255.00,
    image: "/placeholder.svg",
    category: "Shoes",
    description: "Summer-ready platform sandals with chunky sole. Height with comfort and stability.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Tan", "Black", "White"]
  },
  {
    id: "59",
    name: "Mules",
    price: 215.00,
    image: "/placeholder.svg",
    category: "Shoes",
    description: "Chic mules with block heel. Easy slip-on style with modern elegance.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Nude", "Red"]
  },
  {
    id: "60",
    name: "Chelsea Boots",
    price: 315.00,
    image: "/placeholder.svg",
    category: "Shoes",
    description: "Classic Chelsea boots with elastic side panels. Timeless design with contemporary fit.",
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Brown", "Olive"]
  }
];
