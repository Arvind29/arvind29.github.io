# 📂 Complete File Guide

This document explains every file in your portfolio project and what to edit.

## 📋 Edit These Files (Your Content)

### 1. **`data/site.config.json`** ⭐ START HERE
Your site's metadata and navigation.

**What to edit:**
- `site.name` - Your name
- `site.title` - Page title (shown in browser tab)
- `site.description` - SEO description
- `site.tagline` - Hero section tagline
- `site.bio` - About section intro
- `social.github`, `social.linkedin`, etc. - Your profile links
- `social.email` - Your email address

**Example:**
```json
{
  "site": {
    "name": "Arvind",
    "title": "Arvind - Security Engineer & SOAR Specialist"
  }
}
```

### 2. **`data/projects.json`**
List of all your projects (appears in Projects section).

**Add new project:**
```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "2-3 sentence description",
  "tags": ["Technology1", "Technology2"],
  "github": "https://github.com/...",
  "demo": "https://live-site.com",
  "status": "Live"
}
```

**Fields explained:**
- `id` - Unique identifier (used for internal reference)
- `title` - Project name
- `description` - What the project does
- `tags` - Technologies used (appears as badges)
- `github` - Link to GitHub repo (set to `null` if not applicable)
- `demo` - Link to live demo (set to `null` if not applicable)
- `status` - "Live", "In Progress", "Production", "Archived"

### 3. **`data/skills.json`**
Your skills organized by category (appears in Skills section).

**Add skill category:**
```json
{
  "category": "Category Name",
  "items": ["Skill1", "Skill2", "Skill3"]
}
```

### 4. **`data/experience.json`**
Your work history (appears in Experience section).

**Add work experience:**
```json
{
  "role": "Your Job Title",
  "company": "Company Name",
  "location": "City, Country",
  "period": "Start - End (e.g., 2023 - Present)",
  "description": "What you did at this company",
  "highlights": ["Achievement 1", "Achievement 2"]
}
```

---

## 🎨 Customize Design (Optional)

### **`app/globals.css`**
All styling for your site.

**Color theme (lines 6-14):**
```css
--navy: #001f3f;          /* Main dark background */
--charcoal: #2c3e50;      /* Secondary color */
--accent-blue: #0066cc;   /* Primary blue */
--accent: #ff6b35;        /* Orange accent */
```

**Section spacing (line ~180):**
```css
.section {
  padding: 5rem 0;        /* Change padding between sections */
}
```

**Try these color schemes:**
- **Professional Blue:** navy #1e3a8a, accent-blue #0066cc, accent #ff6b35
- **Minimalist:** navy #1a1a1a, charcoal #333, accent-blue #0066cc
- **Tech Green:** navy #0f172a, accent-blue #10b981, accent #06b6d4

### **Font Customization**
In `app/layout.jsx`, line with Google Fonts:
```jsx
<link href="https://fonts.googleapis.com/css2?family=FONT-NAME:wght@400;700&display=swap" rel="stylesheet" />
```

Popular font pairs:
- **Inter + Poppins** (current - modern)
- **Roboto + Playfair Display** (elegant)
- **IBM Plex Sans + IBM Plex Serif** (corporate)

---

## 🏗️ Component Structure (Don't Edit - Unless Customizing)

### **Layout & Navigation**

| File | Purpose |
|------|---------|
| `app/layout.jsx` | Root HTML structure, metadata, fonts |
| `app/page.jsx` | Main page (combines all sections) |
| `components/Navbar.jsx` | Sticky navigation bar |
| `components/Footer.jsx` | Footer with links & copyright |

### **Sections (Each Section is a Component)**

| File | Purpose | Editable Data |
|------|---------|---------------|
| `components/sections/Hero.jsx` | Hero banner at top | `data/site.config.json` (tagline) |
| `components/sections/About.jsx` | About you section | `data/site.config.json` (bio) |
| `components/sections/Projects.jsx` | Project grid | `data/projects.json` |
| `components/sections/Skills.jsx` | Skills by category | `data/skills.json` |
| `components/sections/Experience.jsx` | Work history timeline | `data/experience.json` |
| `components/sections/Blog.jsx` | Blog preview | Links to external blog |
| `components/sections/Contact.jsx` | Contact options | `data/site.config.json` (email, socials) |

### **Reusable Components**

| File | Purpose |
|------|---------|
| `components/ProjectCard.jsx` | Individual project card (used by Projects section) |

---

## ⚙️ Configuration Files (Don't Edit - Unless Deploying)

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js settings (static export for GitHub Pages) |
| `package.json` | Dependencies & npm scripts |
| `jsconfig.json` | Path aliases (`@/` = root directory) |
| `.eslintrc.json` | Code linting rules |
| `.gitignore` | Files to ignore in git |
| `.github/workflows/deploy.yml` | Automatic GitHub Actions deployment |

---

## 📁 Public Assets

| Path | Purpose |
|------|---------|
| `public/images/` | Store images here (logo, avatars, project screenshots) |

**How to add images:**
1. Create `/public/images/` if not exists
2. Upload image (e.g., `avatar.jpg`)
3. Reference in components:
   ```jsx
   <img src="/images/avatar.jpg" alt="Your name" />
   ```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Full documentation & troubleshooting |
| `SETUP.md` | Quick setup & deployment guide |
| `FILE_GUIDE.md` | This file - complete reference |

---

## 🚀 Typical Workflow

### **Adding a New Project**

1. Open `data/projects.json`
2. Add new object to `projects` array:
   ```json
   {
     "id": "new-project",
     "title": "My Amazing Project",
     "description": "What it does...",
     "tags": ["Python", "FastAPI"],
     "github": "https://github.com/username/repo",
     "demo": "https://live-url.com",
     "status": "Live"
   }
   ```
3. Save file
4. Run `npm run dev` locally to see changes
5. When happy, commit and push:
   ```bash
   git add data/projects.json
   git commit -m "Add new project: My Amazing Project"
   git push
   ```

### **Updating Your Bio**

1. Open `data/site.config.json`
2. Edit `site.bio` field
3. Save and test locally
4. Push to GitHub

### **Adding a Skill**

1. Open `data/skills.json`
2. Find relevant category or add new one
3. Add to `items` array
4. Save and deploy

---

## 🔧 If You Want to Add New Sections

Each section:
1. Gets its own file in `components/sections/`
2. Is imported in `app/page.jsx`
3. Uses data from JSON files in `data/`
4. Styled with classes from `app/globals.css`

**Example: Adding a "Certifications" section**

1. Create `components/sections/Certifications.jsx`
2. Create `data/certifications.json`
3. Import in `app/page.jsx`
4. Add to navigation in `data/site.config.json`

---

## ⚡ Quick Reference: Common Tasks

### Change your name everywhere
1. Edit `data/site.config.json` → `site.name`
2. Edit `data/site.config.json` → `site.title`
3. Edit `data/site.config.json` → `site.author`

### Change theme colors
1. Edit `app/globals.css` → `:root` section (lines 6-14)

### Add social link
1. Edit `data/site.config.json` → `social`
2. Add new field: `"platform": "https://profile-url"`
3. Update `components/Footer.jsx` to display new link (optional)

### Update blog link
1. Edit `components/sections/Blog.jsx` → `recentPosts` array
2. Change titles and URL

### Add project image
1. Save image to `/public/images/project-name.jpg`
2. Reference in component with `<img src="/images/project-name.jpg" />`

---

## 📞 Need Help?

- **Setup issues?** → See `SETUP.md`
- **Deployment issues?** → See `README.md` Troubleshooting section
- **Code questions?** → Check file comments in components
- **Design changes?** → Edit `app/globals.css`

---

**That's it!** You now have a complete understanding of your portfolio site. 🎉
