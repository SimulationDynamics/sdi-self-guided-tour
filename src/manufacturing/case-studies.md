---
layout: layout.njk
title: "Manufacturing: Case Studies"
showGrid: true
---

# Case Studies: Manufacturing

The following case studies illustrate SDI's manufacturing simulation work:

<div class="section-nav">
<h4>Case Studies</h4>

<ul>
<li class="case-study"><a href="#chemical-packaging-model">Chemical Packaging Model</a><div class="description">assessment of alternative bagging line configurations and scheduling parameters</div></li>
<li class="case-study"><a href="#food-processing-capacity-optimization">Food Processing Capacity Optimization</a><div class="description">15% throughput improvement through scheduling optimization</div></li>
</ul>
</div>

<div class="mermaid">
graph LR
    subgraph sections[" "]
        direction TB
        M["🟢 Manufacturing"]
        SC["Supply Chain"]
        L["Logistics"]
        RM["Resource Management"]
    end
    M -->|" "| CS1["`**Chemical Packaging Model**
    assessment of alternative bagging line
    configurations and scheduling parameters`"]
    M -->|" "| CS2["`**Food Processing Capacity Optimization**
    15% throughput improvement
    through scheduling optimization`"]
    click CS1 "/manufacturing/case-studies/#chemical-packaging-model"
    click CS2 "/manufacturing/case-studies/#food-processing-capacity-optimization"
    classDef active fill:#e8f5e9,stroke:#4CD964,stroke-width:2px,color:#373F3F
    classDef dimmed fill:#f0f4f8,stroke:#D6DAE1,stroke-width:1px,color:#9ca3af
    classDef caseStudy fill:#e8f5e9,stroke:#4CD964,stroke-width:2px,color:#373F3F
    class M active
    class SC,L,RM dimmed
    class CS1,CS2 caseStudy
</div>

---

<h2 id="chemical-packaging-model">Chemical Packaging Model</h2>

### Background

Simulation Dynamics built a model to help a chemical manufacturer assess alternative bagging line configurations. In addition to initial experimentation done by SDI, the manufacturer has used the model on an ongoing basis for schedule and production assessments.

**Model Purpose**

- Determine tradeoff between cost of alternative bag line configurations and overtime cost
- Evaluate alternative scheduling parameter combinations in terms of inventory levels and overtime cost.

**Key model inputs**

- Alternative demand and forecast scenarios; i.e., a stream of customer orders drives the model.

**Key Experiment Factors**

- Alternative demand scenarios; e.g.,

  

<img src="/images/MfgDemandGreaterThanCapacity.png" alt="Demand Over Capacity" />

- Alternative scheduling parameters

- Alternative bagging line configurations. In the current setup, bag lines are tied to bulk manufacturing lines:

  

<img src="/images/CaseChemMfgExistingConfig.png" alt="Case Study - Chemical Manufacturing Model" />

  The "To-Be" configuration decoupled this tie, by introducing some short-term storage:
  

<img src="/images/CaseChemMfgToBeConfig.png" alt="Case Study - Chemical Manufacturing" />

  *Critical Measurement*: Overtime required under each bagging line scenario.

**System Performance Measures**

- Total inventories
- Customer order fill rate
- Overtime hours

### Plot of Bag Line Activity

Average weekly hours (production, repair, changeover, idle, overtime for a 10-year experiment horizon):

<img src="/images/CaseChemMfgPlotOfBaglines.png" alt="Case Study - Chem Mfg Plot of Bagline Activity" />

### Project Results

The modeling revealed options for business growth that weren't readily apparent through traditional analysis methods. Our ability to handle both manufacturing complexity and supply chain interactions provided comprehensive insights for the restructuring decisions.

> "We have uncovered additional options for low capital cost business growth, some of which were not readily apparent beforehand."
> *— Rick Dougherty, Senior Manufacturing Analyst, Rohm & Haas (Dow Chemical)*

### Strategic Assessment

The following list provides links to articles within this document that address the strategic assessment issues related to this case study:

- [Production Capacity](/supply-chain/production/#production-capacity)
  A central issue in the chemical packaging model was the need for overtime. The tradeoff between capital cost of increased capacity and the cost of overtime was assessed.
- [Safety Stock Design](/supply-chain/#safety-stock-design)
  Safety stock was set at customer facing inventories using the basic calculation, without modification.
- [Postponement](/supply-chain/#postponement)
  In the current production scenario, packaging lines are dedicated to bulk production lines and must pack off product as it is produced. The future scenarios being considered introduce bulk storage between bulk production and packaging, with new high speed packaging lines that could operate on a different schedule from bulk production. This form of postponement allows greater flexibility in scheduling of production and packaging resources.

### Documentation

*[SDI Industry: An Extend-Based Tool for Continuous and High-Speed Manufacturing](https://informs-sim.org/wsc98papers/048.PDF)*; Andrew J. Siprelle, Richard A. Phelps, M. Michelle Barnes, Simulation Dynamics. 1998 Winter Simulation Conference.

---

<h2 id="food-processing-capacity-optimization">Food Processing Capacity Optimization</h2>

### Background

An olive processing company needed to understand its true production capacity. The facility was large and complex, with unclear bottlenecks and scheduling challenges that were limiting throughput.

#### Model Purpose

To develop a detailed simulation model that revealed the dynamics of material flow, identified capacity constraints, and tested various scheduling approaches while quantifying the effects of natural variability in olive processing.

#### Key model inputs

- Historical production data and processing rates
- Equipment reliability and maintenance schedules
- Harvest variability patterns
- Current scheduling policies and constraints

#### Key Experiment Factors

- Alternative scheduling approaches including Theory of Constraints methodology
- Capital expenditure scenarios for equipment upgrades
- Impact of harvest variability on throughput
- Buffer sizing and inventory management strategies

#### System Performance Measures

- Overall throughput and capacity utilization
- Bottleneck identification and quantification
- Capital investment return analysis
- Schedule robustness under variability

### Project Results

This decision tool was effective for both capital expenditure decisions and formulation of scheduling policy. The simulation confirmed suspected bottlenecks and revealed that a Theory of Constraints-based scheduling system could significantly improve performance.

- 15% throughput improvement through scheduling optimization
- Capital expenditure decisions validated through simulation before implementation
- Better understanding of harvest variability impacts on production planning
- Implementation of daily TOC-based scheduling system
- Risk-free validation of proposed changes before costly implementation

- *"The model confirmed bottlenecks at certain operations in the plant... an effective tool to evaluate proposed capital expenditures and scheduling changes over short and long-term periods."* - Robert Rugeroni, IT Director

### Strategic Assessment

The following list provides links to articles within this document that address strategic assessment issues related to this case study:

- [Manufacturing: Capacity Analysis](/manufacturing/#capacity-analysis)
  Ability of current or anticipated capacity to handle projected product mix with validation of capital investment decisions.
- [Manufacturing: Operational Strategies](/manufacturing/#operational-strategies)
  Impact of new operational strategies including Theory of Constraints scheduling on throughput and resource utilization.
- [Supply Chain: Production Capacity](/supply-chain/production/#production-capacity)
  Strategies for dealing with periods of demand over capacity including scheduling optimization approaches.

### Documentation

*[Capacity Planning Simulation of an Olive Processing Plant](https://chiaha.com/papers/capacity-planning-olive-processing-plant.pdf)*; M. Michelle Barnes, Richard A. Phelps, Simulation Dynamics; Robert Rugeroni, Lindsay Olive Company.

### Press

*[Virtual Engineering's New Frontier](https://extendsim.com/images/downloads/papers/mfg-foodeng.pdf)*; Kevin T. Higgins, Senior Editor, **Food Engineering**, 22 March 2003. Andrew J. Siprelle on flow architecture and the "slurp factor"; Robert Rugeroni, MIS director at Bell-Carter Foods, on the pitting and packaging bottlenecks this model found.

*[Lindsay Olive Company Thrives on Simulation](https://www.foodonline.com/doc/lindsay-olive-company-thrives-on-simulation-0001)*; **Food Online** case study on the SDI Industry capacity model.

