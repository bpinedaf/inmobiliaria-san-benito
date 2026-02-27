# Deployment Guide - Inmobiliaria San Benito

This guide provides step-by-step instructions to deploy your website to GitHub and Netlify.

## Prerequisites

Before you begin, ensure you have:
- A GitHub account (free at [github.com](https://github.com))
- A Netlify account (free at [netlify.com](https://netlify.com))
- Git installed on your computer
- Node.js and pnpm installed

## Step 1: Prepare Your Local Repository

### Initialize Git (if not already done)

```bash
cd inmobiliaria-san-benito
git init
git add .
git commit -m "Initial commit: Inmobiliaria San Benito website"
```

### Verify the build works

```bash
pnpm install
pnpm build
```

You should see output like:
```
✓ built in X.XXs
```

## Step 2: Create a GitHub Repository

### Option A: Create a new repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Enter repository name: `inmobiliaria-san-benito`
3. Add description: "Professional real estate website for Inmobiliaria San Benito"
4. Choose visibility: **Public** (recommended for portfolio) or **Private**
5. Click "Create repository"

### Option B: Using GitHub CLI

```bash
gh repo create inmobiliaria-san-benito --public --source=. --remote=origin --push
```

## Step 3: Push to GitHub

### Add remote and push

```bash
# If you created the repo on GitHub, add the remote
git remote add origin https://github.com/YOUR_USERNAME/inmobiliaria-san-benito.git
git branch -M main
git push -u origin main
```

### Verify on GitHub

Visit `https://github.com/YOUR_USERNAME/inmobiliaria-san-benito` to confirm your code is uploaded.

## Step 4: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended)

1. **Go to Netlify**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Sign in with GitHub (or create account)

2. **Connect Repository**
   - Click "New site from Git"
   - Click "GitHub"
   - Select your repository: `inmobiliaria-san-benito`

3. **Configure Build Settings**
   - **Base directory**: (leave empty)
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist/public`

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete (usually 1-2 minutes)
   - Your site will be live at a Netlify URL like: `https://inmobiliaria-san-benito-abc123.netlify.app`

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist/public
```

## Step 5: Set Up Custom Domain (Optional)

### In Netlify Dashboard

1. Go to your site settings
2. Click "Domain management"
3. Click "Add custom domain"
4. Enter your domain (e.g., `sanbenitoreal.estate`)
5. Follow DNS configuration instructions

### Update DNS Records

Contact your domain registrar and update DNS records to point to Netlify:
- **Type**: CNAME
- **Name**: www
- **Value**: (provided by Netlify)

Or use Netlify's nameservers for easier setup.

## Step 6: Enable HTTPS

Netlify automatically provides free HTTPS with Let's Encrypt. No additional setup needed!

## Step 7: Set Up Continuous Deployment

Your site will automatically redeploy whenever you push to GitHub:

1. Make changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update property listings"
   git push origin main
   ```
3. Netlify automatically rebuilds and deploys
4. Your changes are live in 1-2 minutes

## Updating Your Website

### Make Changes Locally

```bash
# Edit files in client/src/pages/Home.tsx or other files
# Test locally
pnpm dev

# Build and verify
pnpm build
```

### Deploy Changes

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Netlify will automatically rebuild and deploy!

## Troubleshooting

### Build Fails on Netlify

1. Check build logs in Netlify dashboard
2. Verify `pnpm build` works locally
3. Ensure `dist/public` directory exists after build
4. Check Node.js version compatibility

### Site Shows Old Content

1. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Check Netlify deployment status
3. Force a new deploy from Netlify dashboard

### Custom Domain Not Working

1. Verify DNS records are updated (can take 24-48 hours)
2. Check domain registrar settings
3. Use Netlify's nameservers for faster setup

## Performance Optimization

### Enable Caching

In Netlify dashboard:
1. Go to "Build & deploy" → "Cache"
2. Click "Clear cache and redeploy"

### Monitor Performance

- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Check Netlify Analytics
- Monitor Core Web Vitals

## Security

### Environment Variables

If you add sensitive data:

1. Create `.env.local` file (never commit)
2. Add to `.gitignore`
3. In Netlify: Settings → Build & deploy → Environment

### HTTPS

- Automatically enabled by Netlify
- Renews automatically
- No additional configuration needed

## Rollback to Previous Version

If something goes wrong:

1. In Netlify dashboard, go to "Deploys"
2. Find the previous working deployment
3. Click "Publish deploy"

Or revert in Git:

```bash
git revert HEAD
git push origin main
```

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Best Practices](https://react.dev)

## Support

For issues:
1. Check Netlify build logs
2. Review GitHub Actions (if enabled)
3. Test locally with `pnpm dev`
4. Check browser console for errors

---

**Your website is now live and ready to showcase Inmobiliaria San Benito to the world!**
