# Updating the site

The design is kept separate from the content. For normal updates, edit files under `data/` instead of React/CSS files.

## Main files

- `data/home.json` — hero heading, role, description, buttons and profile photo path.
- `data/sections.json` — Articles, Work, Blog and Contact card text/links.
- `data/articles.json` — technical articles shown on the homepage.
- `data/work.json` — projects and work shown on the homepage.
- `data/site.config.json` — site title, navigation and social links.

## Profile photo

Replace `public/images/avatar-placeholder.svg` with your own image and change `data/home.json`:

```json
"photo": "/images/avatar.jpg"
```

Recommended: JPG or WebP, square image, at least 600 x 600 pixels.

## Add an article

Add another object to `data/articles.json`:

```json
{
  "title": "Your article title",
  "description": "Short description",
  "date": "2026-09-10",
  "url": "https://..."
}
```

## Add a project

Add another object to `data/work.json` with `title`, `description`, `technologies` and `url`.

The page layout and styling should not need to change for normal content additions.
