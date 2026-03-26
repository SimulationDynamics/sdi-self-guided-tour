# Tour Site Changes — Marketing Tease Points

*Review draft for team discussion — March 2026*

These changes add subtle, forward-looking signals at points in the tour where we already discuss the ExtendSim database or DRS/Bulk Flow technology. Each addition relates 1-for-1 to the topic on that page. The intent is to intrigue readers — especially expert ExtendSim users and the P&G diaspora — without making explicit product announcements.

---

## 1. Homepage — Technology Platform section + mysterious closing CTA

**File:** [`src/index.md`](src/index.md)
**Live URL:** [tour.simulationdynamics.com](https://tour.simulationdynamics.com/)

**What changed:** Added two elements after the Cloud DB paragraph:

- A one-line trailing signal: *"The database was the first thing we rebuilt. It was not the last."*
- A new closing section with a quiet CTA aimed at practitioners who recognize the methodology: *"If you trained on our methodology, built models with our libraries, or have an ExtendSim database your organization still depends on — there are things here you'll want to see. Some of them aren't on this tour yet."* Links to andrew@chiaha.com.

**Marketing angle:** DB Liberation (Angle 1), The Homecoming (Angle 14). Creates curiosity without naming specific products. The "not on this tour yet" phrasing implies more is coming.

---

## 2. Manufacturing — Operational Strategies: DRS paragraph

**File:** [`src/manufacturing/index.md`](src/manufacturing/index.md)
**Live URL:** [tour.simulationdynamics.com/manufacturing/#operational-strategies](https://tour.simulationdynamics.com/manufacturing/#operational-strategies)

**What changed:** Expanded the DRS/Make-Store-Pack paragraph to add Cloud DB link and: *"The rate-based simulation engine that runs on it has been rebuilt as well — and the results have surprised even us."*

**Marketing angle:** Speed (Angle 2). This is the exact spot where we discuss DRS and the Make-Store-Pack model. The addition signals that the simulation engine (not just the database) has been rebuilt, and hints at dramatic performance gains without stating a number.

---

## 3. Innovation Partners — Process Partners: Decoupling Simulator

**File:** [`src/innovation-partners/index.md`](src/innovation-partners/index.md)
**Live URL:** [tour.simulationdynamics.com/innovation-partners/#process-partners](https://tour.simulationdynamics.com/innovation-partners/#process-partners)

**What changed:** Two additions:

1. In the SDI Contribution paragraph, expanded to note the DRS engine is *"the same DRS technology SDI originally created for ExtendSim, now reimplemented and running 1,200x faster."*
2. Added two new bullets in Project Results:
   - *"Model databases viewable and shareable via Cloud DB — no proprietary software required"*
   - *"The same rate-based simulation technology that powers the Decoupling Simulator is being applied to new domains"*

**Marketing angle:** Speed (Angle 2), Competitive Intelligence (Angle 10). The 1,200x claim is already on this page in the performance measures — this connects it to its ExtendSim lineage. The "new domains" bullet is deliberately vague.

---

## 4. Logistics — VINLogic: The Technical Crisis paragraph

**File:** [`src/logistics/case-studies.md`](src/logistics/case-studies.md)
**Live URL:** [tour.simulationdynamics.com/logistics/case-studies/#vinlogic-model](https://tour.simulationdynamics.com/logistics/case-studies/#vinlogic-model)

**What changed:** Added a parenthetical after the Technical Crisis description: *"(The database architecture SDI originally designed for ExtendSim has since been reimplemented as an open, cloud-accessible platform — see Cloud DB Viewer. The supply chain simulation engine has been rebuilt too.)"*

**Marketing angle:** DB Liberation (Angle 1), The Homecoming (Angle 14). VINLogic is the most dramatic case study in the tour ($1B savings). The parenthetical links to Cloud DB and signals that the SC simulation engine is also rebuilt, connecting it to the supply chain context of the case study.

---

## 5. Supply Chain Case Studies — General Mills

**File:** [`src/supply-chain/case-studies.md`](src/supply-chain/case-studies.md)
**Live URL:** [tour.simulationdynamics.com/supply-chain/case-studies/#general-mills](https://tour.simulationdynamics.com/supply-chain/case-studies/#general-mills)

**What changed:** After the paragraph about how the model-based consulting approach transformed strategic decision-making, added: *"The database and simulation tools used to build that model have since been completely reimplemented — the 'video view' now runs at speeds that were not possible in 2001."*

**Marketing angle:** Speed (Angle 2), The "Remember When It Took a Month" (Angle 17). Uses the client's own "video view" metaphor from the General Mills quotes. Connects the original breakthrough to the current reimplementation without naming a specific product.

---

## 6. Resource Management — DOE Equipment Rehab: Database callout

**File:** [`src/resource-management/case-studies.md`](src/resource-management/case-studies.md)
**Live URL:** [tour.simulationdynamics.com/resource-management/case-studies/#doe-equipment-rehab](https://tour.simulationdynamics.com/resource-management/case-studies/#doe-equipment-rehab)

**What changed:** Added a teal callout box after the database diagram: *"Database-driven models like this one encode decades of production knowledge — failure modes, repair distributions, process rates, shift schedules. This structured knowledge is now viewable and shareable through the Cloud DB platform, free from proprietary tool dependencies."*

**Marketing angle:** Ontology Upgrade (Angle 6), DB Liberation (Angle 1). The DOE model is a 25-year database-driven simulation — the perfect place to surface the idea that these databases are knowledge assets, not just simulation inputs.

---

## 7. Resource Management — Communications Network: Cloud DB mention

**File:** [`src/resource-management/case-studies.md`](src/resource-management/case-studies.md)
**Live URL:** [tour.simulationdynamics.com/resource-management/case-studies/#communications-network](https://tour.simulationdynamics.com/resource-management/case-studies/#communications-network)

**What changed:** Extended the sentence about exporting the database to add: *"— or explored directly in the browser using the Cloud DB Viewer."*

**Marketing angle:** Collaboration (Angle 8). The original text already mentions exporting the database to Excel or Access — this simply adds Cloud DB as a modern alternative, right where the reader is thinking about database portability.

---

## Summary

| # | Page | Live URL | Topic | Signal |
|---|------|----------|-------|--------|
| 1 | Homepage | [tour.simulationdynamics.com](https://tour.simulationdynamics.com/) | Database platform | "Not the last thing we rebuilt" + mysterious CTA |
| 2 | Manufacturing | [/manufacturing/#operational-strategies](https://tour.simulationdynamics.com/manufacturing/#operational-strategies) | DRS / Make-Store-Pack | Rate-based engine rebuilt, surprising results |
| 3 | Innovation Partners | [/innovation-partners/#process-partners](https://tour.simulationdynamics.com/innovation-partners/#process-partners) | DRS / Decoupling Simulator | 1,200x faster, being applied to new domains |
| 4 | Logistics | [/logistics/case-studies/#vinlogic-model](https://tour.simulationdynamics.com/logistics/case-studies/#vinlogic-model) | Database + SC engine | SC simulation engine rebuilt too |
| 5 | Supply Chain | [/supply-chain/case-studies/#general-mills](https://tour.simulationdynamics.com/supply-chain/case-studies/#general-mills) | Database + simulation tools | "Video view" at impossible speeds |
| 6 | Resource Mgmt | [/resource-management/case-studies/#doe-equipment-rehab](https://tour.simulationdynamics.com/resource-management/case-studies/#doe-equipment-rehab) | Database as knowledge asset | Cloud DB callout on 25-year model |
| 7 | Resource Mgmt | [/resource-management/case-studies/#communications-network](https://tour.simulationdynamics.com/resource-management/case-studies/#communications-network) | Database portability | Cloud DB as modern export option |

Each change is placed at a point where we already discuss the database or DRS. No new sections or navigation items were added (except the small closing CTA on the homepage). The tone is understated — readers who know the technology will notice; others will simply read past it.
