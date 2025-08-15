# 🚀 Deployment Guide - GitHub Pages

This guide covers deploying the Explore Ukraine Travel Portal frontend to GitHub Pages.

## 📋 Prerequisites

### GitHub Pages Requirements
- **Private Repository**: Requires GitHub Pro ($4/month) or GitHub Team/Enterprise
- **Public Repository**: Free GitHub account is sufficient
- **Note**: The deployed site will be publicly accessible even from a private repo

### Repository Setup
1. Ensure your repository is named appropriately (e.g., `explore-ukraine-travel`)
2. Update the base URL in `frontend/vite.config.ts` to match your repo name:
   ```typescript
   base: process.env.VITE_DEPLOY_TARGET === 'github-pages' 
     ? '/your-repo-name/'  // Replace with actual repo name
     : '/',
   ```

## 🔧 Configuration Files

### 1. GitHub Actions Workflow
- **File**: `.github/workflows/deploy-gh-pages.yml`
- **Purpose**: Automated deployment on push to main branch
- **Features**: 
  - Builds the frontend with production settings
  - Deploys to GitHub Pages automatically
  - Handles permissions and concurrency

### 2. Vite Configuration
- **File**: `frontend/vite.config.ts`
- **Features**:
  - Environment-specific base URL configuration
  - GitHub Pages-compatible asset handling
  - Source maps for debugging

### 3. Environment Configuration
- **File**: `frontend/src/config/environment.ts`
- **Features**:
  - Automatic environment detection
  - API URL configuration per environment
  - Asset URL helpers for different deployment targets

### 4. Client-Side Routing Support
- **Files**: 
  - `frontend/public/404.html` - Handles direct URL access
  - `frontend/index.html` - SPA redirect script
- **Purpose**: Enables React Router to work properly on GitHub Pages

## 🚀 Deployment Steps

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will be automatically detected

### Step 2: Update Repository Name
1. Update the base URL in `frontend/vite.config.ts`:
   ```typescript
   base: process.env.VITE_DEPLOY_TARGET === 'github-pages' 
     ? '/your-actual-repo-name/'  // Replace this
     : '/',
   ```

2. Update the same in `frontend/src/config/environment.ts`:
   ```typescript
   'github-pages': {
     baseUrl: '/your-actual-repo-name/', // Replace this
     // ... other config
   }
   ```

### Step 3: Configure API Endpoints (Optional)
If you have a backend API, update the API URLs in `frontend/src/config/environment.ts`:
```typescript
'github-pages': {
  apiUrl: 'https://your-backend-url.railway.app/api', // Your actual backend
  // ... other config
}
```

### Step 4: Deploy
1. Push changes to the `main` branch
2. GitHub Actions will automatically:
   - Install dependencies
   - Build the frontend
   - Deploy to GitHub Pages
3. Check the **Actions** tab for deployment status
4. Once complete, your site will be available at:
   `https://yourusername.github.io/your-repo-name/`

## 🔍 Verification

### Check Deployment Status
1. Go to **Actions** tab in your repository
2. Look for the "Deploy to GitHub Pages" workflow
3. Ensure it completes successfully (green checkmark)

### Test the Deployed Site
1. Visit your GitHub Pages URL
2. Test all routes (should work with client-side routing)
3. Verify assets load correctly
4. Check responsive design on different devices

### Common URLs to Test
- Home: `https://yourusername.github.io/your-repo-name/`
- Explore: `https://yourusername.github.io/your-repo-name/explore`
- Cities: `https://yourusername.github.io/your-repo-name/cities/kyiv`
- Direct URL access (should not show 404)

## 🛠️ Troubleshooting

### Assets Not Loading
- Ensure base URL is correctly set in `vite.config.ts`
- Check that asset paths are relative (not absolute)

### Routes Showing 404
- Verify `404.html` is in the `frontend/public/` directory
- Check that the SPA redirect script is in `index.html`

### Deployment Failing
- Check GitHub Actions logs in the **Actions** tab
- Ensure Node.js version matches (currently set to 18)
- Verify all dependencies are properly listed in `package.json`

### API Calls Failing
- Update API URLs in `frontend/src/config/environment.ts`
- Ensure CORS is configured on your backend for the GitHub Pages domain

## 📊 Environment Comparison

| Environment | URL | Purpose | API Backend |
|-------------|-----|---------|-------------|
| **Development** | `localhost:5173` | Local development | `localhost:3000` |
| **GitHub Pages** | `yourusername.github.io/repo` | Staging/Demo | Railway backend |
| **Railway Production** | `exploreukraine.travel` | Production | Production API |

## 🔄 Updates and Maintenance

### Automatic Deployments
- Every push to `main` branch triggers automatic deployment
- No manual intervention required
- Deployment typically takes 2-3 minutes

### Manual Deployment
If needed, you can manually trigger deployment:
1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

## 🎯 Next Steps

After successful GitHub Pages deployment:
1. **Custom Domain** (optional): Configure a custom domain in repository settings
2. **Railway Setup**: Prepare production deployment on Railway
3. **Backend Integration**: Connect to your backend API
4. **Analytics**: Add Google Analytics or similar tracking
5. **Performance**: Optimize loading times and SEO

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs for specific error messages
2. Verify all configuration files are properly updated
3. Test locally first with `npm run build` and `npm run preview`
4. Ensure your GitHub account has the necessary permissions for Pages

---

**🎉 Your Explore Ukraine Travel Portal is now ready for GitHub Pages deployment!**
