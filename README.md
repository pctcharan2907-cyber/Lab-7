# Week 7 - SPA Routing and Form Engineering

This project demonstrates advanced Single Page Application (SPA) concepts using React Router DOM, including dynamic routing, nested routes, protected routes, controlled forms with validation, and rendering boundaries for performance optimization.

## 🎯 Learning Objectives

- **SPA Routing Fundamentals**: Browser-based routing without full page reloads
- **Dynamic Routing**: Parameterized routes for product details
- **Nested Routing**: Hierarchical routes for reviews within product pages
- **Protected Routes**: Authentication-based route guarding
- **Controlled Forms**: Form state management with validation pipelines
- **Form Validation**: Real-time error checking and user feedback
- **Rendering Boundaries**: Performance optimization with React.memo

## 🚀 Features Implemented

### Routing System
- **Home Page** (`/`): Welcome page with navigation overview
- **Products Page** (`/products`): Product listing with navigation to details
- **Product Details** (`/products/:id`): Dynamic route displaying individual product information
- **Nested Reviews** (`/products/:id/reviews`): Nested route for product reviews
- **Contact Page** (`/contact`): Protected form page requiring authentication
- **Login Page** (`/login`): Authentication simulation

### Form Engineering
- **Controlled Components**: All form inputs managed by React state
- **Validation Pipeline**: Real-time validation with error messages
- **Error Surfaces**: Visual feedback for validation failures
- **Submission Handling**: Async form submission with loading states

### Performance Optimizations
- **Rendering Boundaries**: React.memo for preventing unnecessary re-renders
- **Component Composition**: Smart/dumb component separation
- **Efficient State Management**: useCallback for stable function references

## 🛠️ Technical Implementation

### Routing Architecture
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:id" element={<ProductDetail />}>
      <Route path="reviews" element={<Reviews />} />
    </Route>
    <Route path="/contact" element={isLoggedIn ? <Contact /> : <Login />} />
  </Routes>
</BrowserRouter>
```

### Form Validation
```jsx
const validateForm = useCallback(() => {
  const errors = {};
  // Validation logic
  if (!formData.email.match(emailRegex)) {
    errors.email = 'Invalid email format';
  }
  return errors;
}, [formData]);
```

### Rendering Boundaries
```jsx
const ProductCard = React.memo(({ product }) => (
  <div className="product-card">
    {/* Product display logic */}
  </div>
));
```

## 📦 Dependencies

- `react-router-dom`: ^6.26.0 - Client-side routing
- `react`: ^19.2.4 - UI framework
- `react-dom`: ^19.2.4 - DOM rendering

## 🏃‍♂️ Running the Project

```bash
npm install
npm run dev
```

Navigate to `http://localhost:5174` to explore the SPA.

## 🔐 Authentication Flow

1. Visit `/contact` - Redirects to login if not authenticated
2. Click "Login" on login page - Simulates authentication
3. Access contact form after login
4. Submit form with validation

## 📝 Form Validation Rules

- **Name**: Required, non-empty
- **Email**: Required, valid email format
- **Message**: Required, minimum 10 characters

## 🎨 Styling Approach

- CSS Modules for component-scoped styles
- Responsive grid layout for product listings
- Form styling with error state indicators
- Navigation with active link highlighting

## 🚀 Build & Deployment

This project uses **Vite** for fast bundling, tree-shaking, minification, and asset optimization.

### ✅ Build for Production

```bash
npm run build
```

This generates a `dist/` folder containing a production-optimized build.

### ✅ Preview Production Build

```bash
npm run preview
```

This serves the `dist/` folder locally so you can validate routing and functionality.

---

## 🌿 Environment Configuration

This project uses Vite environment variables (`VITE_` prefix) to manage different configurations for development and production.

- `.env` (development)
- `.env.production` (production)

Example variables available in the app:

- `import.meta.env.VITE_APP_NAME`
- `import.meta.env.VITE_API_BASE_URL`
- `import.meta.env.MODE`

> **Tip:** Never commit secrets to version control. Use your cloud provider's environment settings for private keys.

---

## ☁️ Deploying to the Cloud

### Netlify
1. Create a new site and connect your Git repository.
2. Set the build command to `npm run build` and publish directory to `dist`.
3. Add any required environment variables under Site settings > Build & deploy > Environment.
4. A `_redirects` file is included in this repo to correctly handle client-side routing.

### Vercel
1. Import the Git repository.
2. Set the framework preset to **Vite** (should be auto-detected).
3. Ensure the build command is `npm run build` and the output directory is `dist`.
4. Client-side routing is handled via `vercel.json` rewrite rules included in this repo.

---

## 🧪 Performance & Accessibility (Lighthouse)

Use Chrome DevTools Lighthouse to evaluate the deployed app on:
- Performance
- Accessibility
- Best Practices
- SEO

### How to Run
1. Open the deployed site (or `npm run preview` locally).
2. Open Chrome DevTools (F12) → Lighthouse.
3. Select categories and run the audit.

Review the report for opportunities such as:
- Reducing JavaScript bundle size
- Image optimization
- Efficient caching headers

---

## 🛠️ Maintenance & Best Practices

- Keep dependencies updated (`npm outdated`, `npm update`).
- Use environment variables for all environment-specific configuration.
- Track production errors using a monitoring tool (Sentry, LogRocket, etc.).
- Use feature flags when releasing new behaviors.
- Keep components small and reusable.