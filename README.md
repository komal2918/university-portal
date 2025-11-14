# University Landing Pages

Assessment project for web dev internship. Built landing pages for LPU and Amity University with lead forms and APIs.

## What's Built

- 2 landing pages (LPU and Amity)
- Lead form with validation on both pages
- 4 API endpoints returning JSON
- Fee modal popup
- Responsive (works on mobile)

## Tech Used

- Next.js 14
- TypeScript  
- Tailwind CSS
- Axios

## Quick Start

```bash
npm install
npm run dev
```

Go to http://localhost:3000

## Pages

- `/` - Home page with university options
- `/lpu` - LPU university page
- `/amity` - Amity university page

## API Endpoints

All APIs return JSON:

- `/api/courses` - course list
- `/api/fees` - fee structure with scholarships (nested JSON)
- `/api/facilities` - campus facilities
- `/api/placement-stats` - placement data and stats

## Form Setup

The lead form posts to Pipedream. You need to:

1. Create account on pipedream.com
2. Make new HTTP webhook
3. Copy the URL they give you
4. Put it in `components/LeadForm.tsx` line 118

The form validates:
- Name (required, min 2 chars)
- Email (proper email format)
- Phone (10 digits, must start with 6-9)
- State (dropdown, all Indian states included)
- Course (dropdown)
- Intake year (2024/2025/2026)
- Consent checkbox (must be checked)

Shows success/error messages. No page reload.

## Features

Landing pages have:
- Hero section with university stats
- About section
- Popular courses section
- Facilities grid
- Placement highlights
- Lead form at bottom

Fee modal:
- Click "Check Course-wise Fees" button
- Fetches from /api/fees
- Shows fees, scholarships, additional charges

## Deployment

Works on Vercel:
1. Push code to GitHub
2. Import to Vercel
3. Deploy (it auto-detects Next.js)

Or Netlify:
1. Connect GitHub repo
2. Build: `npm run build`
3. Publish: `.next`

## Notes

- Tested on Chrome, Firefox, Safari
- Mobile tested with Chrome DevTools
- Form won't work until you add your Pipedream URL
- All dummy data in APIs can be changed easily

## Issues

If something breaks:
- Check console (F12)
- Make sure dev server is running
- Verify Pipedream URL is set

---

Built in ~10 hours for internship assessment.
