export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  offerPrice?: number;
  category: string;
  subCategory: string;
  gender: "boys" | "girls" | "unisex";
  ageRange: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  isFeatured: boolean;
  isBestSeller: boolean;
  isTrending: boolean;
  createdAt: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  items: { productId: string; name: string; quantity: number; price: number; size: string; color: string }[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
  address: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  totalSpent: number;
  joinedDate: string;
  tags: string[];
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  productId: string;
  avatar: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
  gradient: string;
  active: boolean;
}

export interface Coupon {
  id: string;
  code: string;
  type: "percentage" | "fixed";
  value: number;
  minOrder: number;
  expiry: string;
  active: boolean;
  usageCount: number;
}

const pastelGradients = [
  "linear-gradient(135deg, hsl(346, 65%, 80%), hsl(270, 40%, 85%))",
  "linear-gradient(135deg, hsl(200, 65%, 82%), hsl(160, 40%, 78%))",
  "linear-gradient(135deg, hsl(270, 40%, 85%), hsl(200, 65%, 82%))",
  "linear-gradient(135deg, hsl(160, 40%, 78%), hsl(40, 40%, 90%))",
  "linear-gradient(135deg, hsl(20, 80%, 85%), hsl(346, 65%, 80%))",
];

export const products: Product[] = [
  {
    id: "1", name: "Dreamy Cloud Romper", description: "Ultra-soft cotton romper with cloud print, perfect for cozy days.", price: 2499, offerPrice: 1999,
    category: "Rompers", subCategory: "Casual", gender: "unisex", ageRange: "0-6 months",
    sizes: ["NB", "0-3M", "3-6M"], colors: [{ name: "Blush", hex: "#F2C4CE" }, { name: "Sky", hex: "#B5D8EB" }],
    images: [pastelGradients[0]], rating: 4.8, reviewCount: 124, stock: 45, isFeatured: true, isBestSeller: true, isTrending: true, createdAt: "2025-12-01"
  },
  {
    id: "2", name: "Little Star Dress", description: "Charming floral dress with puff sleeves and star embroidery.", price: 3299, offerPrice: 2799,
    category: "Dresses", subCategory: "Party", gender: "girls", ageRange: "1-2 years",
    sizes: ["12M", "18M", "24M"], colors: [{ name: "Lavender", hex: "#C9B1D9" }, { name: "Peach", hex: "#F5C5A3" }],
    images: [pastelGradients[1]], rating: 4.9, reviewCount: 89, stock: 32, isFeatured: true, isBestSeller: true, isTrending: false, createdAt: "2025-11-15"
  },
  {
    id: "3", name: "Tiny Explorer Dungarees", description: "Durable denim dungarees with cute animal patches.", price: 2899,
    category: "Bottoms", subCategory: "Casual", gender: "boys", ageRange: "2-3 years",
    sizes: ["2Y", "3Y"], colors: [{ name: "Denim", hex: "#7BA4C7" }, { name: "Olive", hex: "#A8C5A0" }],
    images: [pastelGradients[2]], rating: 4.7, reviewCount: 67, stock: 28, isFeatured: false, isBestSeller: true, isTrending: true, createdAt: "2025-11-20"
  },
  {
    id: "4", name: "Snuggle Bear Hoodie", description: "Cozy fleece hoodie with adorable bear ears on the hood.", price: 2699, offerPrice: 2199,
    category: "Tops", subCategory: "Winter", gender: "unisex", ageRange: "1-3 years",
    sizes: ["12M", "18M", "2Y", "3Y"], colors: [{ name: "Cream", hex: "#F5ECD7" }, { name: "Mint", hex: "#A8D8C5" }],
    images: [pastelGradients[3]], rating: 4.9, reviewCount: 156, stock: 18, isFeatured: true, isBestSeller: true, isTrending: true, createdAt: "2025-10-01"
  },
  {
    id: "5", name: "Rainbow Tutu Skirt", description: "Layered tulle tutu skirt in magical rainbow pastels.", price: 1999,
    category: "Bottoms", subCategory: "Party", gender: "girls", ageRange: "2-5 years",
    sizes: ["2Y", "3Y", "4Y", "5Y"], colors: [{ name: "Rainbow", hex: "#F2A4B0" }, { name: "Pink", hex: "#F5B5C5" }],
    images: [pastelGradients[4]], rating: 4.6, reviewCount: 43, stock: 52, isFeatured: false, isBestSeller: false, isTrending: true, createdAt: "2025-12-10"
  },
  {
    id: "6", name: "Gentle Wave Onesie", description: "Organic cotton onesie with wave-inspired print.", price: 1599,
    category: "Rompers", subCategory: "Casual", gender: "unisex", ageRange: "0-6 months",
    sizes: ["NB", "0-3M", "3-6M"], colors: [{ name: "Aqua", hex: "#A5D5E0" }, { name: "White", hex: "#FFFFFF" }],
    images: [pastelGradients[1]], rating: 4.8, reviewCount: 98, stock: 60, isFeatured: true, isBestSeller: false, isTrending: false, createdAt: "2025-09-15"
  },
  {
    id: "7", name: "Petal Bloom Set", description: "Matching top and bottom set with delicate floral embroidery.", price: 3599, offerPrice: 2999,
    category: "Sets", subCategory: "Casual", gender: "girls", ageRange: "1-3 years",
    sizes: ["12M", "18M", "2Y", "3Y"], colors: [{ name: "Rose", hex: "#E8A0B0" }, { name: "Sage", hex: "#B5C9A8" }],
    images: [pastelGradients[0]], rating: 4.7, reviewCount: 72, stock: 25, isFeatured: true, isBestSeller: true, isTrending: false, createdAt: "2025-11-05"
  },
  {
    id: "8", name: "Captain Cool Polo", description: "Smart cotton polo shirt with striped collar detail.", price: 1899,
    category: "Tops", subCategory: "Formal", gender: "boys", ageRange: "3-5 years",
    sizes: ["3Y", "4Y", "5Y"], colors: [{ name: "Navy", hex: "#7B8FA8" }, { name: "White", hex: "#FFFFFF" }],
    images: [pastelGradients[2]], rating: 4.5, reviewCount: 34, stock: 40, isFeatured: false, isBestSeller: false, isTrending: true, createdAt: "2025-12-05"
  },
  {
    id: "9", name: "Sunshine Jumpsuit", description: "Bright and cheerful jumpsuit with sun embroidery and snap buttons.", price: 2799,
    category: "Rompers", subCategory: "Casual", gender: "unisex", ageRange: "6-12 months",
    sizes: ["6-9M", "9-12M"], colors: [{ name: "Yellow", hex: "#F5E0A0" }, { name: "Coral", hex: "#F2B5A0" }],
    images: [pastelGradients[4]], rating: 4.8, reviewCount: 55, stock: 35, isFeatured: false, isBestSeller: false, isTrending: true, createdAt: "2025-11-25"
  },
  {
    id: "10", name: "Woodland Friends Pajama Set", description: "Super soft pajama set with adorable woodland animal prints.", price: 2299, offerPrice: 1799,
    category: "Sleepwear", subCategory: "Night", gender: "unisex", ageRange: "1-4 years",
    sizes: ["12M", "2Y", "3Y", "4Y"], colors: [{ name: "Dusty Blue", hex: "#A8C5D9" }, { name: "Cream", hex: "#F5ECD7" }],
    images: [pastelGradients[3]], rating: 4.9, reviewCount: 201, stock: 15, isFeatured: true, isBestSeller: true, isTrending: true, createdAt: "2025-10-20"
  },
  {
    id: "11", name: "Garden Party Frock", description: "Elegant layered frock with ribbon waistband and floral motifs.", price: 3999,
    category: "Dresses", subCategory: "Party", gender: "girls", ageRange: "2-5 years",
    sizes: ["2Y", "3Y", "4Y", "5Y"], colors: [{ name: "Blush", hex: "#F2C4CE" }, { name: "Ivory", hex: "#F5F0E8" }],
    images: [pastelGradients[0]], rating: 4.7, reviewCount: 38, stock: 22, isFeatured: false, isBestSeller: false, isTrending: false, createdAt: "2025-12-15"
  },
  {
    id: "12", name: "Adventure Cargo Shorts", description: "Comfortable cargo shorts with elastic waistband and fun pockets.", price: 1699,
    category: "Bottoms", subCategory: "Casual", gender: "boys", ageRange: "3-5 years",
    sizes: ["3Y", "4Y", "5Y"], colors: [{ name: "Khaki", hex: "#D4C5A0" }, { name: "Sage", hex: "#B5C9A8" }],
    images: [pastelGradients[3]], rating: 4.4, reviewCount: 29, stock: 48, isFeatured: false, isBestSeller: false, isTrending: false, createdAt: "2025-12-08"
  },
];

export const categories = [
  { name: "Boys", slug: "boys", count: 45, gradient: "linear-gradient(135deg, hsl(200, 65%, 82%), hsl(200, 50%, 70%))" },
  { name: "Girls", slug: "girls", count: 52, gradient: "linear-gradient(135deg, hsl(346, 65%, 80%), hsl(346, 50%, 70%))" },
  { name: "Newborn", slug: "newborn", count: 38, gradient: "linear-gradient(135deg, hsl(160, 40%, 82%), hsl(160, 40%, 70%))" },
  { name: "Seasonal", slug: "seasonal", count: 24, gradient: "linear-gradient(135deg, hsl(270, 40%, 85%), hsl(270, 35%, 72%))" },
];

export const banners: Banner[] = [
  { id: "1", title: "New Spring Collection", subtitle: "Adorable outfits for your little ones — soft, comfy & stylish", cta: "Shop Now", ctaLink: "/products", gradient: "linear-gradient(135deg, hsl(346, 65%, 85%), hsl(270, 40%, 88%), hsl(200, 65%, 88%))", active: true },
  { id: "2", title: "Winter Warmers Sale", subtitle: "Up to 30% off on cozy hoodies, jackets & sleepwear", cta: "Explore Deals", ctaLink: "/products?sale=true", gradient: "linear-gradient(135deg, hsl(200, 65%, 85%), hsl(160, 40%, 82%), hsl(40, 40%, 90%))", active: true },
  { id: "3", title: "Newborn Essentials", subtitle: "Everything your tiny star needs — onesies, rompers & more", cta: "Shop Newborn", ctaLink: "/products?category=newborn", gradient: "linear-gradient(135deg, hsl(160, 40%, 85%), hsl(40, 50%, 90%), hsl(346, 65%, 88%))", active: true },
];

export const reviews: Review[] = [
  { id: "1", customerName: "Ayesha K.", rating: 5, comment: "The quality is absolutely amazing! My daughter loves her new dress. Will definitely order again.", date: "2026-01-15", productId: "2", avatar: "AK" },
  { id: "2", customerName: "Sara M.", rating: 5, comment: "Softest fabric I've ever felt for baby clothes. The romper fits perfectly!", date: "2026-01-10", productId: "1", avatar: "SM" },
  { id: "3", customerName: "Fatima Z.", rating: 4, comment: "Beautiful designs and fast delivery. The colors are even prettier in person.", date: "2026-01-08", productId: "7", avatar: "FZ" },
  { id: "4", customerName: "Hina R.", rating: 5, comment: "My son's hoodie with bear ears is the cutest thing ever! Great value for money.", date: "2025-12-28", productId: "4", avatar: "HR" },
  { id: "5", customerName: "Zara A.", rating: 5, comment: "TinyVerse has become our go-to for all baby clothing. Premium quality at reasonable prices!", date: "2025-12-20", productId: "10", avatar: "ZA" },
];

export const orders: Order[] = [
  { id: "ORD-001", customerName: "Ayesha Khan", customerEmail: "ayesha@email.com", items: [{ productId: "1", name: "Dreamy Cloud Romper", quantity: 2, price: 1999, size: "0-3M", color: "Blush" }], total: 3998, status: "delivered", date: "2026-01-15", address: "123 Main St, Lahore" },
  { id: "ORD-002", customerName: "Sara Malik", customerEmail: "sara@email.com", items: [{ productId: "4", name: "Snuggle Bear Hoodie", quantity: 1, price: 2199, size: "2Y", color: "Cream" }, { productId: "10", name: "Woodland Friends Pajama Set", quantity: 1, price: 1799, size: "2Y", color: "Dusty Blue" }], total: 3998, status: "shipped", date: "2026-01-20", address: "456 Garden Ave, Karachi" },
  { id: "ORD-003", customerName: "Fatima Zahra", customerEmail: "fatima@email.com", items: [{ productId: "2", name: "Little Star Dress", quantity: 1, price: 2799, size: "18M", color: "Lavender" }], total: 2799, status: "processing", date: "2026-02-01", address: "789 Hill Rd, Islamabad" },
  { id: "ORD-004", customerName: "Hina Raza", customerEmail: "hina@email.com", items: [{ productId: "5", name: "Rainbow Tutu Skirt", quantity: 1, price: 1999, size: "3Y", color: "Rainbow" }], total: 1999, status: "pending", date: "2026-02-08", address: "321 Park St, Rawalpindi" },
  { id: "ORD-005", customerName: "Zara Ali", customerEmail: "zara@email.com", items: [{ productId: "7", name: "Petal Bloom Set", quantity: 1, price: 2999, size: "2Y", color: "Rose" }], total: 2999, status: "cancelled", date: "2026-01-05", address: "654 Lake View, Faisalabad" },
];

export const customers: Customer[] = [
  { id: "1", name: "Ayesha Khan", email: "ayesha@email.com", phone: "+92 300 1234567", orders: 5, totalSpent: 14500, joinedDate: "2025-06-15", tags: ["VIP", "Repeat"] },
  { id: "2", name: "Sara Malik", email: "sara@email.com", phone: "+92 321 2345678", orders: 3, totalSpent: 8900, joinedDate: "2025-08-20", tags: ["Regular"] },
  { id: "3", name: "Fatima Zahra", email: "fatima@email.com", phone: "+92 333 3456789", orders: 2, totalSpent: 5600, joinedDate: "2025-10-10", tags: ["New"] },
  { id: "4", name: "Hina Raza", email: "hina@email.com", phone: "+92 345 4567890", orders: 7, totalSpent: 21000, joinedDate: "2025-04-01", tags: ["VIP", "Loyal"] },
  { id: "5", name: "Zara Ali", email: "zara@email.com", phone: "+92 312 5678901", orders: 1, totalSpent: 2999, joinedDate: "2025-12-01", tags: ["New"] },
];

export const coupons: Coupon[] = [
  { id: "1", code: "WELCOME10", type: "percentage", value: 10, minOrder: 2000, expiry: "2026-06-30", active: true, usageCount: 145 },
  { id: "2", code: "WINTER500", type: "fixed", value: 500, minOrder: 3000, expiry: "2026-03-31", active: true, usageCount: 67 },
  { id: "3", code: "NEWYEAR20", type: "percentage", value: 20, minOrder: 5000, expiry: "2026-01-31", active: false, usageCount: 234 },
];
