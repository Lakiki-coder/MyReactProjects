# ShopHub - E-Commerce Application

A modern e-commerce website built with **React**, **Redux**, **RTK Query**, and **Tailwind CSS**. The application fetches products from the DummyJSON API and provides a complete shopping experience.

## Features

✅ **Browse Products** - View all available products from DummyJSON API
✅ **Search Products** - Search functionality to find specific items  
✅ **Product Details** - View detailed information about each product
✅ **Shopping Cart** - Add, remove, and update quantities of items
✅ **Cart Management** - View cart summary with subtotal, tax, and total
✅ **Responsive Design** - Beautiful UI with Tailwind CSS
✅ **State Management** - Redux Toolkit for global state management
✅ **API Integration** - RTK Query for efficient data fetching and caching

## Tech Stack

- **React 19** - UI Library
- **Redux Toolkit** - State Management
- **RTK Query** - API data fetching and caching
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## Project Structure

```
src/
├── pages/              # Page components
│   ├── Home.jsx       # Product listing page
│   ├── ProductDetail.jsx  # Product details page
│   └── Cart.jsx       # Shopping cart page
├── component/          # Reusable components
│   ├── Header.jsx     # Navigation header
│   ├── ProductCardNew.jsx # Product card
│   ├── Loading.jsx    # Loading spinner
│   └── Error.jsx      # Error message
├── features/           # Redux features
│   ├── api/
│   │   └── productsApi.js  # RTK Query API
│   └── cart/
│       └── cartSlice.js    # Redux cart slice
├── App.jsx            # Main app with routing
├── store.js           # Redux store configuration
└── index.css          # Global styles with Tailwind
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ajebo-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build

To create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## Deployment

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your app will be live!

### Option 2: Netlify

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your app will be live immediately!

### Option 3: GitHub Pages

1. Update `vite.config.js` with:
```javascript
export default {
  base: '/repository-name/',
  // ... rest of config
}
```

2. Build and push to GitHub

## Features in Detail

### 1. Product Browsing
- View all products from DummyJSON API
- Products display with images, prices, ratings, and discount information
- Responsive grid layout (1-4 columns based on screen size)

### 2. Search Functionality
- Search bar in header to find products
- Real-time search results
- Clear search button to return to all products

### 3. Product Details
- Click any product to see full details
- View product images, description, ratings, and reviews
- Quantity selector before adding to cart
- Out-of-stock indicator

### 4. Shopping Cart
- Add items with selected quantity
- View all cart items with images and prices
- Increase/decrease quantity buttons
- Remove individual items
- View cart summary with subtotals and tax calculation
- Checkout functionality
- Clear cart button

### 5. Responsive Design
- Mobile-friendly layout
- Touch-friendly buttons and inputs
- Optimized for all screen sizes

## Redux Store Structure

```javascript
store: {
  productsApi: {        // RTK Query cache
    queries: { ... }
  },
  cart: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0
  }
}
```

## API Integration

Using RTK Query with DummyJSON API:
- `GET /products` - Fetch all products
- `GET /products/{id}` - Fetch single product
- `GET /products/category/{category}` - Fetch products by category
- `GET /products/search?q={query}` - Search products

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] User authentication
- [ ] Order history
- [ ] Wishlist functionality
- [ ] Product filters (price, rating, category)
- [ ] Multiple payment methods
- [ ] Product reviews submission
- [ ] Inventory management
- [ ] Admin dashboard

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please create an issue on GitHub or contact the development team.

---

**Deployed URL**: [Add your deployment URL here]

Made with ❤️ using React, Redux, and Tailwind CSS
