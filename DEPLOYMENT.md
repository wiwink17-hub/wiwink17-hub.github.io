# GitHub Pages Deployment Guide

This project is configured for deployment to GitHub Pages at the root directory `/`.

## Configuration

### Vite Configuration
The `vite.config.ts` has been configured with:
- `base: "/"` - This ensures the app runs from the root directory of GitHub Pages
- `host: "0.0.0.0"` - Allows the dev server to be accessible
- `port: 5000` - Standard port for Replit development

### GitHub Actions Workflow
A GitHub Actions workflow has been created at `.github/workflows/deploy.yml` that will:
1. Automatically build your project when you push to the `main` branch
2. Deploy the built files to GitHub Pages

## Setup Steps

### 1. Enable GitHub Pages
1. Go to your GitHub repository
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Push Your Code
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 3. Wait for Deployment
- The GitHub Actions workflow will automatically run
- Check the **Actions** tab in your repository to see the deployment progress
- Once complete, your site will be available at: `https://yourusername.github.io/repository-name/`

### For User/Organization Pages
If you're deploying to `username.github.io` (user or organization page):
- The site will be available at `https://username.github.io/`
- Make sure your repository is named `username.github.io`

## Local Development
Run the development server:
```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5000`

## Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## Notes
- The `.nojekyll` file in the `public` folder ensures GitHub Pages serves files starting with underscore
- All assets are configured to load from the root path `/`
