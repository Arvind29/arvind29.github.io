# 🚀 Quick Setup Guide

## Installation (5 minutes)

```bash
# 1. Install Node.js (if not already done)
# Download from https://nodejs.org/ (LTS version)

# 2. Clone this repository
git clone https://github.com/YOUR-USERNAME/portfolio-site.git
cd portfolio-site

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open browser to http://localhost:3000
```

## Customize (10 minutes)

### Edit These Files (in order):

1. **`data/site.config.json`** - Update your name, email, social links
2. **`data/experience.json`** - Add your work history
3. **`data/skills.json`** - Add your technical skills
4. **`data/projects.json`** - Add your projects (GitHub repos, live demos)
5. **`components/sections/Blog.jsx`** - Update blog post titles/links

### Optional:
- Edit colors in `app/globals.css` (lines 6-14)
- Add images to `/public/images/` folder
- Update hero section text in `components/sections/Hero.jsx`

## Deploy to GitHub Pages (5 minutes)

### Prerequisites:
- GitHub account (free at https://github.com)
- Git installed on your computer

### Steps:

1. **Create GitHub repository:**
   - Go to https://github.com/new
   - Name it: `YOUR-USERNAME.github.io` (replace YOUR-USERNAME with your actual GitHub username)
   - Make it **Public**
   - Click "Create repository"

2. **Push your site to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository
   - Click **Settings** (top right)
   - Click **Pages** (left sidebar)
   - Under "Source", select `main` branch
   - Click **Save**
   - Wait 2-3 minutes

4. **Visit your live site:**
   - Go to `https://YOUR-USERNAME.github.io`
   - It's live! 🎉

## Update Your Site

After deployment, just edit files and push:

```bash
git add .
git commit -m "Update: description of what changed"
git push
```

Your site updates automatically within seconds!

## File Editing Reference

### Add a New Project

Open `data/projects.json` and add:

```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "What it does",
  "tags": ["Technology1", "Technology2"],
  "github": "https://github.com/username/repo",
  "demo": "https://live-demo-url.com",
  "status": "Live"
}
```

### Add a Skill Category

Open `data/skills.json` and add:

```json
{
  "category": "Your Category",
  "items": ["Skill1", "Skill2", "Skill3"]
}
```

### Update Site Metadata

Open `data/site.config.json` and edit:

```json
{
  "site": {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your tagline",
    "bio": "Your bio"
  }
}
```

## Colors (Customization)

Edit `app/globals.css` and change:

```css
--navy: #001f3f;              /* Main dark color */
--charcoal: #2c3e50;          /* Secondary dark */
--accent-blue: #0066cc;       /* Primary blue */
--accent: #ff6b35;            /* Orange accent */
```

## Troubleshooting

### Build failed on GitHub?
- Check `next.config.js` has `output: 'export'`
- Ensure all imports use `@/` path aliases correctly

### Site looks different on GitHub?
- Clear cache: Ctrl+Shift+Delete
- Use Incognito/Private browsing to verify

### Can't see changes after push?
- Wait 1-2 minutes (GitHub rebuilds)
- Hard refresh: Ctrl+F5 (or Cmd+Shift+R on Mac)

## Commands Reference

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Check for code errors
```

## Need Help?

- See full docs in `README.md`
- Check comments in component files
- Test locally with `npm run dev` before deploying

---

**You're all set!** Your portfolio site is ready to deploy. Good luck! 🚀
