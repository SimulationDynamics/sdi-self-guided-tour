# SDI Self-Guided Tour

Static website showcasing Simulation Dynamics' 35+ years of simulation modeling experience across Manufacturing, Supply Chain, Logistics, and Resource Management.

**Live site:** [tour.simulationdynamics.com](https://tour.simulationdynamics.com)

## Tech Stack

- **[Eleventy (11ty)](https://www.11ty.dev/)** v3 — static site generator
- **Nunjucks** — templates
- **Proxima Nova** — self-hosted font (matching simulationdynamics.com)
- **GitHub Pages** — hosting via GitHub Actions

## Project Structure

```
src/
├── _includes/
│   ├── layout.njk          # Base HTML layout (header, sidebar, footer)
│   └── nav-grid.njk        # Interactive navigation grid component
├── _data/
│   ├── navigation.json     # Sidebar tree structure
│   └── pages.json          # Page order for prev/next navigation
├── css/styles.css          # All styles (SDI brand colors, prose, nav)
├── fonts/                  # Proxima Nova font files (TTF)
├── images/                 # All content images (~74 PNGs)
├── logos/                  # SDI logo SVGs and favicons
├── index.md                # Home page
├── manufacturing/
│   ├── index.md            # Strategic Assessment: Manufacturing
│   └── case-studies.md     # Case Studies: Chemical Packaging, Food Processing, AdaptiveCoaching
├── supply-chain/
│   ├── index.md            # Strategic Assessment: Structure, Safety Stock, Inventory, Postponement
│   ├── production.md       # Strategic Assessment: Run Length, Capacity, Flexible Ordering
│   └── case-studies.md     # Case Studies: Downstream Packaging, Inventory Deployment, General Mills, Life Cycle
├── logistics/
│   ├── index.md            # Strategic Assessment: Tactical Analysis
│   └── case-studies.md     # Case Studies: VINLogic, TLoaDS
├── resource-management/
│   ├── index.md            # Strategic Assessment: Life Cycle, Long Term, Network Capacity
│   └── case-studies.md     # Case Studies: DOE, TRU Waste, DGSM, KBR, Comms Network, Project Tasks
└── innovation-partners/
    └── index.md            # Case Studies: Automated Warehouse (Symbotic), Process Partners
```

## Local Development

```bash
npm install
npm start
```

Opens at `http://localhost:8080`. Changes to source files auto-reload.

## Build

```bash
npm run build
```

Outputs static site to `_site/`.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically.

### Custom Domain

- **DNS:** CNAME record `tour` → `simulationdynamics.github.io` (at NetworkSolutions)
- **GitHub:** Custom domain set in repo Settings → Pages
- **HTTPS:** Enforced via GitHub Pages

## Tracking

All pages include SDI's Google Tag Manager container (`GTM-NLFX72HJ`), which provides:

| Service | ID |
|---------|-----|
| Google Analytics (GA4) | `G-WJZ9GRE7J3` |
| ActiveCampaign | `478631777` (source: "sdi") |
| LinkedIn Ads | Partner ID `8853828` |

`tour.simulationdynamics.com` is whitelisted in ActiveCampaign site tracking.

## SDI Brand

| Element | Value |
|---------|-------|
| Primary Dark | `#225459` |
| Teal | `#3D8A95` |
| Light | `#D6DAE1` |
| Body Text | `#373F3F` |
| Accent (Coral) | `#DF6154` |
| Font | Proxima Nova (Regular, Bold, Light) |

## Content Source

Content was converted from `sdi_self_guided_tour_updated.md` in the [SDIMarketing](https://github.com/SimulationDynamics/SDIMarketing) repo. The original single markdown document was split into 11 pages with cross-linked navigation.
