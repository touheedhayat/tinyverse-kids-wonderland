
# TinyVerse — Premium Kids Clothing E-Commerce Website

## Brand Identity
- **Name**: TinyVerse
- **Target**: Newborn to 5 years (boys & girls)
- **Color Palette**: Soft pastels — light pink, lavender, mint green, baby blue, cream/beige accents
- **Animated Logo**: Playful, clean typography with a star/planet animation (matching "Verse" theme), both static and animated versions

---

## 1. Storefront (Customer-Facing Website)

### Homepage (Inspired by todsnteens.com but visually superior)
- **Hero Banner Slider** — Full-width rotating banners with smooth transitions, CTAs
- **Featured Collections** — Category cards (Boys, Girls, Newborn, Seasonal) with hover effects
- **Trending Products** — Animated product grid with quick-view and wishlist buttons
- **Seasonal Offers** — Eye-catching promotional banner section
- **Best Sellers** — Top-selling products carousel
- **Customer Reviews** — Testimonial cards with star ratings
- **Newsletter Signup** — Elegant subscription section with email input
- **Instagram/Social Gallery** — Grid of lifestyle images
- **Footer** — Links, contact info, social icons, payment method badges

### Product Pages
- **Category Pages** — Grid/list view with filters (age, size, color, price range, gender) and sorting
- **Product Detail Page** — Image gallery, size/color variant selector, add to cart, reviews, related products
- **Search** — Search bar with live suggestions and results page

### Shopping Experience
- **Shopping Cart** — Slide-out cart drawer with quantity controls, coupon input
- **Wishlist** — Save favorite items (stored in local storage)
- **Checkout Flow** — Multi-step checkout UI (shipping info → payment → confirmation) — no real payment processing
- **User Accounts** — Login/signup UI, order history, profile management (all frontend mock)

### Design Details
- Smooth scroll animations and fade-in effects on all sections
- Micro-interactions on buttons, cards, and product images
- Mobile-first responsive design with hamburger menu
- Skeleton loading states for a polished feel

---

## 2. Admin Dashboard

### Dashboard Overview
- Sales summary cards (today, week, month)
- Revenue chart (line/bar chart)
- Recent orders table
- Inventory alerts
- Top-selling products

### Product Management
- Product list with search, filter, and bulk actions
- Add/Edit product form (name, description, images, price, offer price, sizes, colors, categories, stock, SEO metadata)
- Category & sub-category management
- Stock/inventory control with low-stock alerts

### Order Management
- Order list with status filters (pending, processing, shipped, delivered, cancelled)
- Order detail view with status update
- Invoice preview
- Refund/cancellation management UI

### Customer Management
- Customer list with search
- Customer detail with order history
- Customer notes/tags

### Marketing & Content
- Banner/slider management (add, edit, reorder homepage banners)
- Coupon creation (percentage, fixed, min order, expiry)
- Featured products selector
- Homepage section visibility toggle

### Analytics
- Sales overview with date range picker
- Revenue reports with charts
- Top-selling products
- Daily/weekly/monthly insights

### Settings & Extras
- Store settings (tax, shipping zones, payment config placeholders)
- SEO metadata editor
- Export reports (CSV)
- Role-based access UI (Admin, Manager, Staff)
- Notification center

---

## 3. Technical Approach
- All data stored in-app state/local storage (no backend for now)
- Sample/mock product data pre-loaded so the site looks complete
- Ready for future backend integration (Supabase/Stripe)
- Clean, maintainable code structure with reusable components

---

## Build Phases (all in one go, but logically structured)
1. **Design System** — Color palette, typography, animated logo, global styles
2. **Storefront Pages** — Homepage, product listing, product detail, cart, wishlist, checkout, auth pages
3. **Admin Dashboard** — All management panels with mock data
4. **Polish** — Animations, responsiveness checks, micro-interactions, loading states
