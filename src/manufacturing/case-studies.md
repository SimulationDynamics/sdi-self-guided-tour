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
<li class="case-study"><a href="#real-time-process-coaching">Real-Time Process Coaching - AdaptiveCoaching.ai</a><div class="description">real-time operator decision support for industrial food processing</div></li>
</ul>
</div>

<img src="/images/CaseStudiesAllMfg.png" alt="Case Studies: Manufacturing" />

------

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

*[Capacity Planning Simulation of an Olive Processing Plant](https://www.researchgate.net/publication/253124003_CAPACITY_PLANNING_SIMULATION_OF_AN_OLIVE_PROCESSING_PLANT)*

---

<h2 id="real-time-process-coaching">Real-Time Process Coaching - AdaptiveCoaching.ai</h2>

<div class="callout">Real-time operator decision support for industrial food processing</div>

### Background

Industrial food processing operations needed real-time guidance for operators managing complex jet zone cooking processes, balancing product quality, safety, and energy efficiency.

#### Model Purpose

In partnership with [Process Partners](https://process-partners.com/), SDI developed Adaptive Coaching technology that provides real-time expert suggestions to operators through intuitive coaching interfaces, building on their existing expertise while optimizing performance.

#### Key model inputs

- Real-time process parameters from PLC systems
- Historical expert operator settings and outcomes
- First-principles models of cooking processes
- Quality and safety constraint parameters

#### Key Experiment Factors

- Operator interface design and usability testing
- Expert suggestion algorithms and validation
- Integration with existing HMI systems
- Performance improvement measurement methodologies

#### System Performance Measures

- Operator confidence and acceptance metrics
- Process consistency and quality delivery
- Energy consumption optimization
- Integration effectiveness with existing systems

### Project Results

This innovation exemplifies SDI's approach to creating practical solutions that enhance human decision-making rather than replacing it. The system integrated seamlessly into existing operations, providing operators with confidence-building recommendations.

- Improved operator confidence and consistent quality delivery
- Real-time expert suggestions within points of operator settings
- Seamless integration into existing operational workflows
- Enhanced decision-making without replacing human expertise

- *"Adaptive Coaching has been a good tool for the operators. They have been using it as a tool to reassure the oven settings. The Adaptive Coaching suggestions are within a few points of the settings the operators are using."* - K.B, Process Technology Owner, CPG - Snacks

### Current Availability

Now offered through [ChiAha.com](https://AdaptiveCoaching.ai) as OT/edge applications running on plant floor networks with PLC connections and HMI interfaces, expanding beyond jetzone ovens to other industrial applications.

### Strategic Assessment

The following list provides links to articles within this document that address strategic assessment issues related to this case study:

- [Manufacturing: Operational Strategies](/manufacturing/#operational-strategies)
  Impact of real-time decision support systems on throughput and resource utilization in food processing operations.
- [Strategic Assessment: Manufacturing](/manufacturing/)
  Technology applications for enhancing operator decision-making and process optimization in complex manufacturing environments.

---
