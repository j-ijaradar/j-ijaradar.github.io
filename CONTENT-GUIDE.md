# Content Guide — j-ijaradar.github.io

Everything on this site is driven by **YAML data files** in `src/data/` and
**Markdown files** in `src/content/notes/`. You rarely need to touch any
`.astro` page files — just edit the data and the site rebuilds itself.

---

## Table of Contents

1. [Quick orientation](#1-quick-orientation)
2. [Placeholder convention](#2-placeholder-convention)
3. [profile.yaml — identity & bio](#3-profileyaml--identity--bio)
4. [publications.yaml — papers](#4-publicationsyaml--papers)
5. [news.yaml — events, talks, announcements](#5-newsyaml--events-talks-announcements)
6. [projects.yaml — research projects](#6-projectsyaml--research-projects)
7. [software.yaml — open-source tools](#7-softwareyaml--open-source-tools)
8. [teaching.yaml — courses & supervision](#8-teachingyaml--courses--supervision)
9. [open-topics.yaml — available topics for students](#9-open-topicsyaml--available-topics-for-students)
10. [skills.yaml — technical skills & languages](#10-skillsyaml--technical-skills--languages)
11. [travel.yaml — travel log](#11-travelyaml--travel-log)
12. [volunteering.yaml — volunteering, memberships, interests](#12-volunteeringyaml--volunteering-memberships-interests)
13. [Research Notes — Markdown in src/content/notes/](#13-research-notes--markdown-in-srccontentnotes)
14. [Pages you might edit directly](#14-pages-you-might-edit-directly)
15. [Adding images](#15-adding-images)
16. [Previewing locally](#16-previewing-locally)

---

## 1. Quick orientation

```
src/
  data/           ← All structured content (YAML)
  content/
    notes/        ← Research notes (Markdown)
  pages/          ← Page templates (Astro) — rarely need editing
  components/     ← UI components — don't touch
  layouts/        ← Shared layout — don't touch
public/
  images/         ← Photos, your profile picture, CV PDF
  cv/             ← Place your PDF CV here
```

The pages and their data sources:

| Page URL            | Data file(s)                            |
|---------------------|-----------------------------------------|
| `/` (home)          | profile.yaml, publications.yaml, news.yaml, open-topics.yaml, projects.yaml |
| `/about/`           | profile.yaml, skills.yaml              |
| `/publications/`    | publications.yaml                       |
| `/projects/`        | projects.yaml, software.yaml           |
| `/teaching-supervision/` | teaching.yaml, open-topics.yaml   |
| `/beyond-research/` | travel.yaml, volunteering.yaml         |
| `/research-notes/`  | src/content/notes/*.md                 |
| `/cv/`              | profile.yaml (for name/position)       |
| `/contact/`         | profile.yaml                           |

---

## 2. Placeholder convention

Every field that hasn't been filled in yet uses the pattern `[...]`, e.g.
`"[Your email]"`. These are displayed literally on the site. Replace them
with your real information as you go — search for `[` in the YAML files to
find everything still outstanding.

**Link fields** with placeholder values (`"[GitHub link]"`, `"[DOI link]"`,
etc.) are automatically hidden from the rendered page. A field starting with
`[` is treated as empty.

---

## 3. profile.yaml — identity & bio

**File:** `src/data/profile.yaml`  
**Affects:** Home page hero, About page, CV page, Contact page, navbar name

### Fields

```yaml
name: Jyotirmaya Ijaradar          # Your full name — appears in navbar, About, CV
title: Researcher in Traffic…      # One-line job title
tagline: "Bridging data science…"  # Longer tagline shown in the hero section
email: "you@institution.de"
institution: "TU Dresden"
department: "Faculty of …"
position: "Doctoral Researcher"    # Short role shown under name in sidebar
location: "Dresden, Germany"

photo: "/images/profile.jpg"       # Put your photo at public/images/profile.jpg
cv_pdf: "/cv/cv.pdf"               # Put your CV at public/cv/cv.pdf

links:
  github: "https://github.com/…"
  scholar: "https://scholar.google.com/citations?user=…"
  linkedin: "https://linkedin.com/in/…"
  orcid: "https://orcid.org/…"
  researchgate: "https://www.researchgate.net/profile/…"

bio_short: >                       # 2–3 sentences; used in home page hero
  …

bio_long: >                        # Full paragraph(s); used in About page
  …

research_interests:                # Shown as pills on home and About pages
  - Traffic Data Imputation
  - Traffic Anomaly Detection
  # add or remove items freely

education:                         # Shown on About page sidebar
  - degree: "Ph.D."
    field: "Traffic Data Science"
    institution: "TU Dresden"
    year: "2023 – present"

experience:                        # Used in CV page
  - role: "Doctoral Researcher"
    organization: "TU Dresden"
    period: "2023 – present"
    description: "…"

personal_note: >                   # Short paragraph at bottom of About page
  …
```

---

## 4. publications.yaml — papers

**File:** `src/data/publications.yaml`  
**Affects:** Publications page (full list + filter), Home page (selected papers), About page

### Adding a paper

Copy this block and add it at the top of the `publications:` list (most
recent first):

```yaml
publications:
  - id: ijaradar2025mytitle           # unique slug — use author+year+keyword
    title: "My Paper Title"
    authors: "J. Ijaradar, A. Coauthor, B. Another"
    venue: "IEEE Transactions on Intelligent Transportation Systems"
    year: 2025
    type: journal                     # journal | conference | preprint | workshop
    topics:
      - traffic data imputation       # used for filtering on the publications page
      - spatiotemporal deep learning
    abstract: "Short abstract text here."
    doi: "https://doi.org/10.1109/…"  # leave "" if not yet available
    pdf: "https://arxiv.org/pdf/…"    # leave "" if not available
    code: "https://github.com/…"      # leave "" if no code
    project: "qlsa"                   # optional: project id from projects.yaml
    bibtex: |
      @article{ijaradar2025mytitle,
        title={My Paper Title},
        author={Ijaradar, Jyotirmaya and Coauthor, A.},
        journal={IEEE Transactions on ITS},
        year={2025}
      }
    featured: true                    # true = appears in home page "Selected Publications"
```

### Key rules

- `type` must be exactly one of: `journal`, `conference`, `preprint`, `workshop`
- `featured: true` — pick your top 3 papers; they appear on the home page
- Leave link fields as `""` (empty string) if the link doesn't exist yet — they will be hidden automatically
- Topics are free-form text; they become the filter options on the Publications page, so be consistent with spelling across papers

---

## 5. news.yaml — events, talks, announcements

**File:** `src/data/news.yaml`  
**Affects:** Home page "News & Updates" feed

News items appear alongside recent publications and open thesis topics on
the home page. Use this file for upcoming talks, conference appearances,
awards, and general announcements — **not** for publications (those come
from publications.yaml automatically).

### Adding a news item

```yaml
news:
  - id: itsc2025-talk               # unique slug
    type: event                     # event | talk | award | update
    date: "2025-09"                 # YYYY-MM format — used for sorting
    title: "Presenting at IEEE ITSC 2025"
    description: "Macau, China"     # brief subtitle/location
    link: "https://itsc2025.ieee…"  # optional; leave "" if none
```

### Types and their badge colours

| `type`   | Badge colour | Use for                              |
|----------|-------------|--------------------------------------|
| `event`  | Amber/orange | Conferences, workshops, seminars     |
| `talk`   | Amber/orange | Invited talks, guest lectures        |
| `award`  | Amber/orange | Awards, grants, honours              |
| `update` | Slate        | General announcements, new positions |

Keep the list in reverse chronological order (newest first). Items older
than ~2 years can be deleted.

---

## 6. projects.yaml — research projects

**File:** `src/data/projects.yaml`  
**Affects:** Projects page (Research Projects section), Home page (Featured Projects)

### Adding a project

```yaml
projects:
  - id: myproject                   # unique slug
    title: "Project Full Name"
    description: "Two-sentence description of what the project is about."
    role: "Principal Researcher"    # your role in the project
    funding: "BMBF"                 # funding body / funder name
    duration: "2024 – 2027"
    status: active                  # active | completed
    website: "https://project-site.de"   # leave "" if none
    github: ""                      # public GitHub repo if any
    docs: ""                        # documentation URL if any
    demo: ""                        # live demo URL if any
    tags:
      - traffic data science
      - deep learning
    publications:                   # related papers — shown as links on the card
      - title: "My Related Paper"
        url: "https://doi.org/…"
```

- `status: active` → appears under "Active Projects"
- `status: completed` → appears under "Completed Projects"
- `publications` list is optional; leave as `[]` if empty

---

## 7. software.yaml — open-source tools

**File:** `src/data/software.yaml`  
**Affects:** Projects page (Software & Tools section)

### Adding a tool

```yaml
software:
  - id: my-tool                     # unique slug
    name: "MyTool"
    description: "What the tool does in 1–2 sentences."
    tech_stack:
      - Python
      - PyTorch
    status: "Active Development"    # see options below
    website: ""                     # external homepage (not GitHub)
    github: "https://github.com/…"
    docs: "https://mydocs.readthedocs.io"
    demo: ""
    featured: true                  # true = shown prominently
    publications:
      - title: "Paper using this tool"
        url: "https://doi.org/…"
```

### Status options and grouping

| `status`            | Section on page        |
|---------------------|------------------------|
| `"Active Development"` | Active Development  |
| `"In Development"`  | In Development         |
| `"Ongoing"`         | In Development         |
| `"Planned"`         | Planned                |

---

## 8. teaching.yaml — courses & supervision

**File:** `src/data/teaching.yaml`  
**Affects:** Teaching & Supervision page (Courses and Student Supervision sections)

> Note: This file has **two separate sections** divided by `---` (a YAML document separator). The first section (`courses:` / `supervision:`) and the second section (`technical:` / `languages:`) are actually two different files loaded separately. In practice the file on disk is split: `teaching.yaml` contains courses + supervision, and `skills.yaml` contains technical + languages. Keep them in their respective files.

### Adding a course

```yaml
courses:
  - id: my-course-id
    title: "Course Full Name"
    role: "Teaching Assistant"       # Lecturer | Teaching Assistant | Co-Instructor
    semester: "Winter 2024/25"
    institution: "TU Dresden"
    description: "Brief description of topics covered."
    materials: "https://link-to-moodle-or-slides"  # "" if none
```

### Recording a supervised student

Under `supervision:`, add to the appropriate list:

```yaml
supervision:
  master_theses:
    - title: "Full Thesis Title"
      student: "Student Name"
      year: "2025"
      status: "Ongoing"             # Ongoing | Completed

  bachelor_theses:
    - title: "Full Thesis Title"
      student: "Student Name"
      year: "2024"
      status: "Completed"

  student_projects:
    - title: "Project Title"
      student: "Student Name"
      year: "2024"
      status: "Completed"

  shk_tutor:
    - name: "Student Name"
      role: "Student Research Assistant (SHK)"
      period: "Oct 2024 – Mar 2025"
      topic: "Traffic data pipeline development"
```

---

## 9. open-topics.yaml — available topics for students

**File:** `src/data/open-topics.yaml`  
**Affects:** Teaching & Supervision page (Open Topics section), Home page news feed

### Adding a thesis or RA topic

```yaml
thesis_topics:
  - id: topic-myslug
    title: "Deep Learning for Traffic Flow Prediction"
    type: "Master Thesis"           # Master Thesis | Bachelor Thesis | Seminar
    description: "What the student will do and what they will learn."
    requirements: "Python, basic ML knowledge"
    status: available               # available | taken | closed
    contact: "you@institution.de"
```

```yaml
research_assistant_topics:
  - id: ra-myslug
    title: "Data Pipeline for Loop Detector Data"
    description: "…"
    requirements: "Python, pandas"
    hours: "10h/week"
    status: available
    contact: "you@institution.de"
```

```yaml
mini_projects:
  - id: mini-myslug
    title: "Traffic Dashboard Prototype"
    description: "…"
    duration: "4–6 weeks"
    status: available
```

```yaml
software_dev_topics:
  - id: sw-myslug
    title: "REST API for TrafficInsight360"
    description: "…"
    tech_stack:
      - Python
      - FastAPI
    status: available
    contact: "you@institution.de"
```

Change `status` to `taken` or `closed` to hide availability (the item still shows but without the green "Available" badge).

---

## 10. skills.yaml — technical skills & languages

**File:** `src/data/skills.yaml`  
**Affects:** About page sidebar

### Editing skills

```yaml
technical:
  - category: "Programming Languages"
    skills:
      - name: "Python"
        level: "Advanced"           # level is displayed as-is; use Advanced / Intermediate / Basic
      - name: "Julia"
        level: "Intermediate"
  
  - category: "Machine Learning & Deep Learning"
    skills:
      - name: "PyTorch"
        level: "Advanced"
      # add/remove rows freely; add new categories as new list items

languages:
  - name: "Bengali"
    level: "Native"
  - name: "English"
    level: "Fluent"
  - name: "German"
    level: "Intermediate"
```

---

## 11. travel.yaml — travel log

**File:** `src/data/travel.yaml`  
**Affects:** Beyond Research page (Travel & Exploration section) and the stats bar counters

### Updating the stats counters

```yaml
stats:
  countries_visited: 12
  cities_visited: 28
```

### Adding a trip

```yaml
entries:
  - id: travel-itsc2025             # unique slug
    country: "China"
    city: "Macau"
    type: conference                # conference | business | research_visit | personal | residence
    year: "2025"
    lat: 22.1987                    # optional; for potential map use
    lng: 113.5439
    conference: "IEEE ITSC 2025"    # optional extra field
    note: "Paper presentation"      # short note shown on the list
```

**Travel types** (each has a dot colour in the legend):

| `type`          | Colour | Use for                              |
|-----------------|--------|--------------------------------------|
| `conference`    | Blue   | Conference travel                    |
| `business`      | Teal   | Business meetings, industry events   |
| `research_visit`| Amber  | Visiting another research group      |
| `personal`      | Red    | Holidays, personal trips             |
| `residence`     | Purple | Places you have lived                |

---

## 12. volunteering.yaml — volunteering, memberships, interests

**File:** `src/data/volunteering.yaml`  
**Affects:** Beyond Research page (Volunteering, Memberships, Community, Interests sections)

### Volunteering activities

```yaml
volunteering:
  - id: my-activity
    title: "Activity Name"
    organization: "Organisation"
    description: "What you do there."
    period: "2021 – present"
    link: ""
    icon: community                 # wikipedia | community (icon hint, cosmetic only)
```

### Professional memberships

```yaml
memberships:
  - id: acm
    title: "ACM"
    type: "Professional Membership"
    description: "Association for Computing Machinery member."
    period: "2023 – present"
    link: "https://www.acm.org/"
```

### Community activities

```yaml
community_activities:
  - id: local-event
    title: "IndIIT Dresden"
    description: "Organiser for the annual Indian cultural event in Dresden."
    period: "2022 – present"
```

### Personal interests

A plain list of strings — shown as coloured pills:

```yaml
personal_interests:
  - "Travelling and exploring new cities"
  - "Urban and travel photography"
  - "Contributing to Wikipedia"
  - "Cultural events and community building"
```

---

## 13. Research Notes — Markdown in src/content/notes/

**Directory:** `src/content/notes/`  
**Affects:** Research Notes page (`/research-notes/`)

Research notes are standalone Markdown files. Each file becomes one note
card on the page.

### Creating a note

Create a new file, e.g. `src/content/notes/my-note-slug.md`:

```markdown
---
title: "My Note Title"
date: "2025-06-01"                  # ISO date — used for sorting
category: "Technical Notes"         # see categories below
tags:
  - traffic data
  - deep learning
  - tutorial
summary: "One-sentence summary shown on the card."
related_publication: ""             # optional: pub id from publications.yaml
related_project: ""                 # optional: project id from projects.yaml
---

# My Note Title

Write your note content here in standard Markdown.

## Subheading

Lorem ipsum…
```

### Available categories

- `Publication Notes`
- `Technical Notes`
- `Research Ideas`
- `Conference Reflections`
- `Personal Notes`

You can use a different category name — it will appear as-is on the card.

---

## 14. Pages you might edit directly

Most pages are fully data-driven. The two exceptions you may want to touch:

### `/cv/` — `src/pages/cv.astro`

The CV page is a manually structured HTML page. Edit it directly to add
sections, update experience, publications list, etc. It mirrors a traditional
academic CV layout.

### `/contact/` — `src/pages/contact.astro`

The contact page pulls email/links from `profile.yaml` automatically, but
you can edit the surrounding copy (the introductory paragraph and any other
static text) directly in `src/pages/contact.astro`.

---

## 15. Adding images

| Image type     | Where to put it                    | How to reference it          |
|----------------|------------------------------------|------------------------------|
| Profile photo  | `public/images/profile.jpg`        | `photo: "/images/profile.jpg"` in profile.yaml |
| CV PDF         | `public/cv/cv.pdf`                 | `cv_pdf: "/cv/cv.pdf"` in profile.yaml |
| Photography    | `public/images/photography/`       | Not yet wired up; will appear automatically once the photography section is implemented |
| OG/social card | `public/images/og-default.jpg`     | Used automatically as the social share image |

Recommended profile photo size: **400 × 400 px**, square, JPEG or PNG.

---

## 16. Previewing locally

```bash
# Install dependencies (first time only)
npm install

# Start dev server with hot reload
npm run dev
# → opens at http://localhost:4321

# Build and preview the final static output
npm run build
npm run preview
# → opens at http://localhost:4321
```

After editing any YAML file, the dev server reloads the page automatically.
After editing a Markdown note, you may need to refresh the browser manually.
