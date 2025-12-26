# Deployment Guide - SHOP.GO E-commerce App

## 🚀 Quick Start - Deploy to Netlify (Recommended)

### Prerequisites
- Vite production build (already generated in `dist/` folder)
- Netlify account (free at https://netlify.com)

### Step 1: Prepare Build
```bash
npm run build
# Creates optimized production build in dist/ folder
# Size: 100KB gzipped (excellent performance)
```

### Step 2: Deploy to Netlify

#### Option A: Using Netlify CLI
```bash
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from dist folder
netlify deploy --prod --dir=dist
```

#### Option B: Using Netlify UI
1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy!

#### Option C: Manual Upload
1. Go to https://app.netlify.com
2. Drag and drop the `dist` folder
3. Your app is live!

---

## 🌐 Alternative Deployment Options

### Vercel
```bash
npm install -g vercel

vercel
# Follow prompts to deploy
```

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Update package.json with deploy scripts
3. Run: `npm run build && npm run deploy`

### Traditional Hosting (Shared/VPS)
1. Build: `npm run build`
2. Upload `dist/` folder to web server
3. Configure server to serve `index.html` for all routes

---

## ✅ Verification After Deployment

1. **Test Homepage**
   - Verify hero section loads
   - Check brand showcase appears
   - Confirm product cards display

2. **Test Product Details**
   - Click on a product
   - Verify all details display
   - Test quantity controls

3. **Test Cart**
   - Add items to cart
   - Verify cart updates
   - Test remove and quantity controls

4. **Performance**
   - Check load time (target: < 3s)
   - Verify CSS/JS assets are minified
   - Test on mobile devices

---

## 🔒 Environment Variables (if needed)

Create `.env.production` file:
```
VITE_API_URL=https://dummyjson.com
# Add other production variables here
```

---

## 📊 Performance Optimization

Current metrics:
- **HTML**: 0.46 KB (gzip: 0.29 KB)
- **CSS**: 18.81 KB (gzip: 4.26 KB)
- **JavaScript**: 314.38 KB (gzip: 100.01 KB)
- **Total**: ~105 KB gzipped (excellent)

---

## 🐛 Troubleshooting

### 404 Errors on Routes
**Solution**: Configure server to serve `index.html` for all routes
- Netlify: Automatic (works out of box)
- Vercel: Automatic (works out of box)
- Manual: Add rewrite rules to server config

### CORS Issues
**Solution**: The app uses DummyJSON which allows cross-origin requests. No CORS configuration needed.

### Images Not Loading
**Solution**: Check image URLs in API responses. DummyJSON provides valid URLs that work globally.

---

## 📝 Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] Home page displays correctly
- [ ] Navigation works
- [ ] Search functionality works
- [ ] Product cards display
- [ ] Product detail page loads
- [ ] Add to cart works
- [ ] Cart page displays items
- [ ] Cart calculations are correct
- [ ] Responsive design works on mobile

---

## 🎯 Production Deployment Link Format

Once deployed, your site URL will be:
- **Netlify**: `https://your-site-name.netlify.app`
- **Vercel**: `https://your-project.vercel.app`
- **Custom Domain**: Add via provider settings

---

## 📈 Analytics Setup (Optional)

Add to `src/main.jsx` for Google Analytics:
```javascript
import { useEffect } from 'react';

useEffect(() => {
  window.gtag('config', 'GA_MEASUREMENT_ID');
}, []);
```

---

## 🔄 Updates & Maintenance

To deploy updates:
1. Make code changes
2. Commit to GitHub
3. Run `npm run build`
4. Auto-deploy triggers on Netlify/Vercel (if connected)
5. Or manually redeploy using CLI

---

## 💡 Tips for Success

1. **Monitor Performance**: Use Lighthouse in Chrome DevTools
2. **Test Extensively**: Test on multiple devices and browsers
3. **Set Up Redirects**: If migrating from old URL
4. **Enable Caching**: Leverage browser caching for assets
5. **Monitor Errors**: Set up error tracking (Sentry, etc.)

---

**Your app is production-ready!** 🎉

For live demo and updates, refer to your deployment URL.
