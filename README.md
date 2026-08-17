# Arvind29 Portfolio Site

A professional, corporate-style portfolio website built with **Next.js 14**, **Bootstrap 5**, and deployed to **GitHub Pages**.

## 🎯 Features

- ✅ **Fully Responsive** - Mobile-first design with Bootstrap 5
- ✅ **Corporate Theme** - Clean, professional, tech-forward aesthetic
- ✅ **Easy to Customize** - JSON-based content (projects, skills, experience)
- ✅ **GitHub Pages Ready** - Static export, no backend required
- ✅ **Fast & Optimized** - Next.js static generation
- ✅ **SEO Friendly** - Open Graph meta tags, structured metadata
- ✅ **Accessible** - WCAG-compliant, keyboard navigation, focus states

## 📁 Project Structure

```
portfolio-site/
├── app/
│   ├── layout.jsx          # Root layout with metadata
│   ├── page.jsx            # Main page (combines all sections)
│   └── globals.css         # Global styles + Bootstrap customization
├── components/
│   ├── Navbar.jsx          # Navigation bar (sticky)
│   ├── Footer.jsx          # Footer with social links
│   ├── ProjectCard.jsx     # Individual project card
│   └── sections/
│       ├── Hero.jsx        # Hero section
│       ├── About.jsx       # About/intro section
│       ├── Projects.jsx    # Projects grid
│       ├── Skills.jsx      # Skills by category
│       ├── Experience.jsx  # Timeline experience
│       ├── Blog.jsx        # Blog posts preview
│       └── Contact.jsx     # Contact & social
├── data/
│   ├── site.config.json    # Site metadata & navigation
│   ├── projects.json       # Project data
│   ├── skills.json         # Skills by category
│   └── experience.json     # Work experience timeline
├── public/                 # Static assets (images, icons)
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** ([Download](https://nodejs.org/))
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone or download this repo:**
   ```bash
   git clone https://github.com/Arvind29/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:3000`
   - Hot reload enabled—changes save instantly

## ✏️ Customizing Your Content

### 1. **Site Metadata** (`data/site.config.json`)
Edit site name, title, description, email, and social links:
```json
{
  "site": {
    "name": "Your Name",
    "title": "Your Title",
    "description": "Your bio",
    "email": "your.email@example.com"
  },
  "social": {
    "github": "https://github.com/yourname",
    "linkedin": "https://linkedin.com/in/yourname"
  }
}
```

### 2. **Projects** (`data/projects.json`)
Add, edit, or remove projects. Each project has:
- `title` - Project name
- `description` - Short description
- `tags` - Technology stack (appears as badges)
- `github` - GitHub repo URL
- `demo` - Live demo URL (optional)
- `status` - "Live", "In Progress", "Production", etc.

**Example:**
```json
{
  "id": "my-project",
  "title": "My New Project",
  "description": "What it does...",
  "tags": ["Next.js", "Python", "API"],
  "github": "https://github.com/username/repo",
  "demo": "https://demo.example.com",
  "status": "Live"
}
```

### 3. **Skills** (`data/skills.json`)
Organize skills by category:
```json
{
  "category": "Category Name",
  "items": ["Skill 1", "Skill 2", "Skill 3"]
}
```

### 4. **Experience** (`data/experience.json`)
Add work history with highlights:
```json
{
  "role": "Your Role",
  "company": "Company Name",
  "location": "City, Country",
  "period": "Start - End",
  "description": "What you did...",
  "highlights": ["Achievement 1", "Achievement 2"]
}
```

### 5. **Styling** (`app/globals.css`)
Customize the corporate theme:
- `--navy` - Primary dark color
- `--charcoal` - Secondary dark color
- `--accent-blue` - Primary accent
- `--accent` - Secondary accent (orange)

## 📸 Adding Images

1. **Create** `/public/images/` folder
2. **Add images** (JPG, PNG, WebP)
3. **Reference in components:**
   ```jsx
   import Image from 'next/image';
   
   <Image 
     src="/images/your-image.jpg" 
     alt="Description" 
     width={400} 
     height={300} 
   />
   ```

## 🌐 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Create **new repository** named `arvind29.github.io` (replace `arvind29` with your username)
3. **Do NOT initialize** with README, .gitignore, or license

### Step 2: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio site"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository **Settings**
2. Navigate to **Pages** (left sidebar)
3. **Source**: Select `main` branch → `root` folder
4. **Save**
5. Wait 2-3 minutes for GitHub to build and deploy
6. Your site is live at `https://YOUR-USERNAME.github.io` ✅

### Step 4: Verify Deployment

- Visit `https://YOUR-USERNAME.github.io` in your browser
- Test all links and responsive design (mobile view)

### Updating Your Site

After you've deployed, any changes pushed to `main` branch are **automatically deployed**:

```bash
# Make changes to files
# Then:
git add .
git commit -m "Update: description of changes"
git push
```

GitHub Pages rebuilds your site within seconds.

## 🎨 Customizing Design

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --navy: #001f3f;
  --charcoal: #2c3e50;
  --accent: #ff6b35;
  --accent-blue: #0066cc;
}
```

### Fonts
Currently using **Inter** (body) and **Poppins** (headers) from Google Fonts. Change in `app/layout.jsx`:
```jsx
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT:wght@400;700&display=swap" rel="stylesheet" />
```

### Section Spacing
Adjust padding in `app/globals.css`:
```css
.section {
  padding: 5rem 0; /* Change this value */
}
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production (creates `/out/` folder)
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Tips & Best Practices

1. **Update Projects Regularly** - Add new projects to `data/projects.json` as you complete them
2. **Keep Descriptions Concise** - 1-2 sentences per project description
3. **Use Descriptive Tags** - Tags help visitors understand your tech stack
4. **Add Real Links** - GitHub links and demos should point to real repositories/sites
5. **Test Locally First** - Run `npm run dev` and test on mobile before pushing
6. **Commit Frequently** - Push small, meaningful commits instead of large ones

## 📱 Mobile Testing

Test on multiple devices:

```bash
# Get your local IP
# macOS/Linux:
ipconfig getifaddr en0

# Windows:
ipconfig
```

Then visit `http://YOUR-IP:3000` from mobile device.

## 🆘 Troubleshooting

### Site Not Showing at GitHub Pages
- ✅ Verify repo name is `USERNAME.github.io`
- ✅ Check repo is **public**
- ✅ GitHub Pages is enabled in Settings → Pages
- ✅ Wait 2-3 minutes after first push

### Styling Looks Broken
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Check `next.config.js` has `output: 'export'`
- ✅ Verify `basePath` and `assetPrefix` are correct

### Changes Not Showing
- ✅ Run `npm run build` locally and test
- ✅ Wait 1-2 minutes after pushing (GitHub needs time to rebuild)
- ✅ Check browser cache or use Incognito mode

### Dependencies Issue
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 License

This portfolio template is open source. Feel free to fork, modify, and use for your own site.

## 💡 Questions?

- Check the [Troubleshooting](#-troubleshooting) section
- Review component files for code comments
- Test locally with `npm run dev` before deploying

---

**Happy building!** 🚀 Your portfolio site is ready to showcase your work to the world.
