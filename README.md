# PichheWalo Pre-Release Website

A static HTML/CSS/JavaScript landing page designed for GitHub Pages.

## Files

- `index.html` — website structure/content
- `style.css` — responsive styling
- `script.js` — small JavaScript enhancements
- `assets/` — place logo/images here if needed

## Before publishing

Open `index.html` and replace the three `href="#"` values in the social section:

1. Instagram
2. YouTube
3. Facebook

## GitHub Pages

1. Create a public GitHub repository.
2. Upload all files in this folder.
3. Go to Settings → Pages.
4. Select `Deploy from a branch`.
5. Select `main` and `/ (root)`.
6. Save.
7. Add your custom domain under Pages → Custom domain.

No backend is required for this website.


## Media

Add website media here:

- `assets/images/` — JPG, PNG, WebP, etc.
- `assets/videos/` — MP4/WebM, etc.

The landing page currently looks for:
- `assets/images/preview.jpg`
- `assets/videos/preview.mp4`

To use different filenames, edit the corresponding `src` in `index.html`.

## Social Media

The Instagram, YouTube and Facebook buttons appear in both the header and footer.
Replace the `href="#"` values in `index.html` with your real social-media URLs.


## Interest Form

The pre-release page includes an "Interested in PichheWalo?" form with:

- Name
- Email
- Role
- Optional message
- Update consent

**Important:** The current form is frontend-only and does not store or email submissions.
Before production, connect the form submit handler to your Flask backend or a form service/database.


## Form Fields

All interest-form fields are optional:

- Name
- Email
- Role
- Mobile
- Address
- Message
- Update consent

The form currently remains frontend-only until connected to a backend/form service.


## Design

The page uses a large physical poster-board layout made from multiple smaller poster/card sections.
The cards intentionally have slight rotations, tape/pin details, paper-like backgrounds, shadows, and varied colors.


## Pre-release CTA

The interest form has been removed. The pre-release page now asks visitors to:

- Follow PichheWalo on Instagram
- Subscribe to the YouTube channel
- Follow the Facebook page
- Stay tuned for launch updates

The static pre-release page does not collect personal information.


## Pre-release contact

The interest form has been removed. Visitors are encouraged to follow/subscribe on social media or contact PichheWalo by email.

Before publishing, replace:

- `#` in Instagram, YouTube and Facebook links
- `YOUR_EMAIL@example.com` in the email button/note

with your real contact details.
