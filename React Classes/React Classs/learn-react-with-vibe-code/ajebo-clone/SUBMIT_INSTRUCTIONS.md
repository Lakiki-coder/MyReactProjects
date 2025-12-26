# Deployment & Google Sheet Instructions

## 🚀 Step-by-Step Deployment Guide

### Step 1: Build Your Application

```bash
cd ajebo-clone
npm run build
```

✅ This creates an optimized `dist` folder ready for deployment.

---

### Step 2: Choose Your Hosting Platform

#### **Option A: Netlify (RECOMMENDED - Easiest)**

**Method 1: Drag & Drop (Fastest)**
1. Go to https://app.netlify.com
2. Sign up with GitHub/Google (free account)
3. Drag and drop the `dist` folder
4. Your site goes live in seconds!
5. You'll get a URL like: `https://xxxxx.netlify.app`

**Method 2: Git Integration**
1. Push code to GitHub
2. In Netlify, click "New site from Git"
3. Select your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click Deploy
7. Auto-deploys on every git push

#### **Option B: Vercel**

```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live at `https://shophub.vercel.app`

#### **Option C: Other Platforms**

See QUICK_DEPLOY.md for:
- Render.com
- Railway.app
- Surge.sh
- And more!

---

### Step 3: Test Your Deployed Application

After deployment, test these features on your live URL:

✅ **Home Page**
- Products load correctly
- Search bar works
- Product cards display properly
- Images load from API

✅ **Product Details**
- Click product to see full details
- Reviews and ratings display
- Image gallery shows correctly

✅ **Shopping Cart**
- Add items to cart
- Cart count updates
- Quantity buttons work
- Remove items works
- Calculations are correct

✅ **Responsive**
- Check on mobile (use DevTools)
- Check on tablet
- Check on desktop
- All looks good!

---

### Step 4: Add URL to Google Sheet

**Google Sheet Link**:
https://docs.google.com/spreadsheets/d/1xg_jgZKxXI_kOvNu-z9zSibmpikbCQRYdzQzc4NjCb8/edit?usp=sharing

**Steps to Add Your URL**:

1. Open the Google Sheet link above
2. Find the row for your name/project
3. Paste your deployment URL in the appropriate column
4. Example formats:
   - `https://shophub.netlify.app`
   - `https://shophub.vercel.app`
   - `https://xxxxx.surge.sh`

---

## 📋 Deployment Checklist

Before submitting your URL, verify:

- [ ] Application builds without errors
- [ ] Home page loads with products
- [ ] Search functionality works
- [ ] Can click on products
- [ ] Product detail page loads
- [ ] Can add items to cart
- [ ] Cart displays items correctly
- [ ] Can increase/decrease quantity
- [ ] Can remove items
- [ ] Cart calculations are correct
- [ ] Clear cart button works
- [ ] Header looks good
- [ ] Mobile responsive
- [ ] No console errors
- [ ] All links work

---

## 🆘 Troubleshooting

### "Build Failed" Error

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### "dist Folder Not Found"

**Solution**:
```bash
npm run build
```

Make sure you build first before deploying!

### "API Not Working"

**Check**:
1. Is DummyJSON API accessible? Go to https://dummyjson.com
2. Check browser console for CORS errors
3. Verify API calls in Network tab

### "Site Doesn't Load After Deployment"

**Solution** (Netlify):
1. Go to Netlify dashboard
2. Go to Site Settings
3. Build & Deploy → Redirects
4. Add: `/*` → `/index.html` → 200

This handles client-side routing!

---

## 🎯 Final Verification

### Test Each Feature:

**1. Home Page Test**
- [ ] Navigate to root URL
- [ ] Products load from API
- [ ] See 30 products displayed
- [ ] Product cards show image, name, price, rating

**2. Search Test**
- [ ] Click search bar
- [ ] Type "phone" (or any product)
- [ ] Results filter in real-time
- [ ] Click "Clear Search" to reset

**3. Product Detail Test**
- [ ] Click on any product
- [ ] Full product page loads
- [ ] See description, reviews, images
- [ ] Quantity selector works
- [ ] "Add to Cart" button works

**4. Cart Test**
- [ ] Go to cart page
- [ ] All added items appear
- [ ] Prices are correct
- [ ] Quantity buttons work
- [ ] Subtotal/tax/total calculate correctly
- [ ] Can remove items
- [ ] Can clear entire cart

**5. Responsive Test**
- [ ] Open DevTools (F12)
- [ ] Toggle device toolbar
- [ ] Test on iPhone, iPad, Desktop
- [ ] All features work on mobile
- [ ] No horizontal scroll

---

## 📊 Expected Performance

After deployment, your site should:
- ✅ Load in < 2 seconds
- ✅ Score 90+ on Lighthouse
- ✅ Have zero console errors
- ✅ Use ~100KB bandwidth
- ✅ Work on all devices

---

## 🔗 Important Links

| Link | Purpose |
|------|---------|
| https://dummyjson.com | API Documentation |
| https://netlify.com | Deployment Platform |
| https://vercel.com | Alternative Deployment |
| https://docs.google.com/spreadsheets/d/1xg_jgZKxXI_kOvNu-z9zSibmpikbCQRYdzQzc4NjCb8/edit?usp=sharing | Google Sheet to Submit |

---

## 💾 Your Deployment URL Format

Replace `xxxxx` with your actual deployment:

### Netlify:
```
https://xxxxx.netlify.app
```

### Vercel:
```
https://shophub.vercel.app
```

### Surge:
```
https://xxxxx.surge.sh
```

---

## ✅ Completion Checklist

- [ ] Application runs locally without errors
- [ ] Built with `npm run build`
- [ ] Deployed to chosen platform
- [ ] All features tested and working
- [ ] Site is accessible via URL
- [ ] No console errors on live site
- [ ] Mobile responsive
- [ ] URL added to Google Sheet
- [ ] Screenshot taken (optional)

---

## 🎉 Success!

Once you've completed all steps:

1. ✅ You have a deployed e-commerce application
2. ✅ All features are working
3. ✅ URL is in the Google Sheet
4. ✅ You're ready to showcase your work!

---

## 📞 Need Help?

1. Check QUICK_DEPLOY.md for platform-specific help
2. Check DEPLOYMENT.md for detailed info
3. Check README.md for feature documentation
4. Review error messages carefully
5. Check browser console (F12) for errors

---

**Good Luck! You Got This! 🚀**
