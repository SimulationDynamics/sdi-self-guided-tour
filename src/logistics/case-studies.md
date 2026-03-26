---
layout: layout.njk
title: "Logistics: Case Studies"
showGrid: true
---

# Case Studies: Logistics

The following case studies illustrate SDI's logistics simulation work:

<div class="section-nav">
<h4>Case Studies</h4>

<ul>
<li class="case-study"><a href="#vinlogic-model">VINLogic Model</a><div class="description">transport of vehicles from plants to dealers — $1B+ annual savings</div></li>
<li class="case-study"><a href="#tloads-model">TLoaDS Model</a><div class="description">re-supply of Marine units from supply ships</div></li>
</ul>
</div>

<img src="/images/CaseStudiesAllLogistics.png" alt="Case Studies: Logistics">

---

<h2 id="vinlogic-model">VINLogic Model</h2>

<div class="callout">transport of Vehicles from Plants to Dealers</div>

### Summary

#### Background

The VinLogic model was developed by Simulation Dynamics for Insight Network Logistics (INL) to support their management of delivery of vehicles manufactured by Chrysler in North America. This project represented SDI's strategic inflection point and the birth of "Model-Based Applications."

<img src="/images/CaseVINLogicNetwork.png" alt="VINLogic Scope">

**The Challenge:** An automobile manufacturer and railroad company formed a joint venture to manage the entire distribution system between 12 factories and 80+ dealers across the United States. At any given time, over 100,000 vehicles worth billions of dollars were in transit. The goal was ambitious: reduce the number of vehicles in the network by 20% to achieve massive cost savings.

**The Technical Crisis:** Originally built in ExtendSim® using the SDI Supply Chain Builder library, the model struggled with terabytes of real-time data and took 6 hours to run. This made it unusable for business decision-making - no CFO could wait 6 hours for budget analysis, and crisis response was impossible. *(The database architecture SDI originally designed for ExtendSim has since been reimplemented as an open, cloud-accessible platform — see [Cloud DB Viewer](https://db.chiaha.com/). The supply chain simulation engine has been rebuilt too.)*

**The Model-Based Applications Revolution:** SDI made the bold decision to completely rebuild VINLogic in .NET, achieving three major breakthroughs:

1. **Scale**: Seamless integration with terabytes of BigData from VINVision
2. **Speed**: Runtime reduced from 6 hours to 20 minutes (18x improvement)
3. **Usability**: Windows Forms interface that business analysts could actually operate

#### Model Purpose

- Strategic assessment: budget for resources in next fiscal year based on projected vehicle production.
- Tactical: predict logistic resource requirements over the next two weeks -- simulation run weekly.
- Tactical: assess alternative responses to temporary logistic interruptions, such as from storms.
- **Crisis response capability**: 20-minute scenario analysis during Hurricane Katrina for contingency analysis, rerouting, and network stabilization prediction

#### Key model inputs

To make tactical analysis possible, the VINLogic model is connected on a real time basis to INL's VINVision system which tracks all vehicles in the network and the trucks and railcars that are carrying them.

<img src="/images/CaseVINLogicImportingVehicles.png">

The model is initialized with this data, allowing simulation of network behavior in the near term.

#### Key Experiment Factors

- Resource levels (e.g. at loading ramps), rail facility interruptions, forecasted production rates
- Standard and alternate routes; user editable
  

<img src="/images/CaseVINLogicRouteBuilder.png">

#### System Performance Measures

- Primary reports: Vehicle inventories in network, time in network, local delays
- Secondary reports: all dwell times, all network segment durations, all network segment inventories

### Business Impact & Results

**Quantified Business Value:**

- $1 Billion annual savings through 20% reduction in vehicles-in-network
- Forecast accuracy improved from 70% to 95%+
- Used continuously for over 10 years as core business asset
- Successfully managed Hurricane Katrina network disruptions with real-time rerouting

**The Business Transformation:** The transformation enabled:

- Weekly analyst runs for operational planning became practical
- CFO budgeting tool - the executive could run scenarios independently
- Crisis response capability - 20-minute scenario analysis during emergencies
- Sustained business value - continuous operation as a core business asset

### Key Model Issues

<img src="/images/CaseVINLogicKeyModelIssues.png" alt="VINLogic Key Issues">

### Plot of Network Activity

<img src="/images/CaseVINLogicNetworkActivityPlot.png" alt="Plot of Network Activity">

### Project Results

The modeling became so reliable that business analysts ran it weekly for labor planning, and the CFO used it for annual budgeting. During Hurricane Katrina, VINLogic proved its worth by successfully rerouting vehicles and estimating recovery time.

- *"VinLogic is at the heart of what we do. Our analysts run it every week. I run the model to more accurately predict our annual budget! The reason we never call you is because the model just works."* - CFO, Insight Network Logistics

- *"[We] leveraged VINLogic to recommend solutions that saved $21.7M in inventory carrying costs and reduced transit time by 19%."* - [Mike Keller](https://www.linkedin.com/in/kellermi/)

- *"[We] achieved an industry leading forecast accuracy rate of over 90%"* - [Brian Maloney](https://www.linkedin.com/in/brian-maloney-46141013/)

- *"We were looking for a product that would integrate well with VinVision™, our advanced vehicle management system. The ability to use current and historical data from VinVision to simulate future vehicle distribution patterns will help us more effectively manage our resources and anticipate potential bottlenecks before they occur. We chose SDI's product because we felt it could be easily integrated with our system, implemented faster than other alternatives and ultimately help us take time out of our client's current distribution process."* - Roland Fortner, General Manager at INL

### Strategic Legacy

**The Strategic Inflection Point:** VINLogic convinced SDI that "the future wasn't just in models, but in Model-Based Applications" - applications where powerful decision intelligence engines are wrapped in business-domain interfaces that users can operate independently. This insight shaped SDI's entire strategic direction, leading to the birth of our Enterprise Apps capability and comprehensive three-group architecture.

### Strategic Assessment

The following provides links to articles within this document that address strategic assessment issues related to this case study:

- [Tactical Analysis of System Loading](/logistics/#tactical-analysis)
  One on-going function of this model is to forecast the rate of arrival of vehicles at rail unloading facilities over a two week horizon. This forecast provides the basis for planning personnel shifts at each unloading facility.
- [Network Capacity](/resource-management/#network-capacity)
  The VinLogic model is used to assess the capacity of all network segments as a function of scheduled production and alternative logistic resource scenarios.

### WinterSim Paper

*[Initializing a Distribution Supply Chain Simulation with Live Data](http://www.informs-cs.org/wsc03papers/206.pdf)*; Malay Dalal, Union Pacific Railroad; Henry Bell, Mike Denzien, Simulation Dynamics; Michael Keller, Insight Network Logistics. Winter Simulation Conference, 2003

---

<h2 id="tloads-model">TLoaDS Model</h2>

<div class="callout">Re-supply of Marine units from supply ships</div>

### Summary

#### Background

Extracted from: *[T.Loads Abbreviated Systems Architecture](http://www.informs-sim.org/wsc01papers/098.PDF)*; [Bob Hamber](https://www.linkedin.com/in/bobhamber/) 2001

The Tactical Logistics Distribution System (T.LoaDS or TLoaDS) is a powerful and flexible simulation application for assessing current or future tactical or sea-based distribution systems. In its current state of development, it is an analytical model for assessing the pros and cons of new doctrine, distribution techniques, organizational structures, and equipment concepts. It can also be used to find out how to best use available resources to sustain a military force in a wide variety of scenarios. The "System" in TLoaDS refers to its modular architecture and that it is more that just a simulation. It is a suite of analytical study tools.

<p><img src="/images/CaseTLoaDS_Diagram.png" alt="TLoaDS Model Diagram"></p>

<p><img src="/images/CaseTLoaDS_MapView.png" alt="TLoaDS Map View"></p>

#### Model Purpose

TLoaDS provides a way to qualitatively assess the performance of tactical distribution systems in sustaining the forces ashore from a sea base, port of debarkation, beach support area, or Army or Air Force theater base.

Original analytical uses of TLoaDS:

- Explore emerging concepts such as Sea-Based Logistics, enhanced combat trains, just in time distribution, and many others
- Assess under what conditions different distribution networks, reorder policies, stock objectives, convoy plans, and many other tactics and techniques are appropriate
- Evaluate alternative concepts for future seabasing ships, cargo handling equipment, transporters, and shipping containers
- Plan the logistic resources required to reliably sustain a given force for a given time in a given threat and environmental scenario
- Determine the odds a given force can be sustained for a given time

### Description

At its core, TLoaDS is a supply chain throughput model. The core module is a stochastic "discrete event" simulation, as private industry now employs for critical supply chain problems. It uses the latest commercial-off-the-shelf (COTS) supply chain modeling environment, with custom TLoaDS code components. When it runs, the simulation engine keeps track of how all the individual commodities, orders, shipments, material handlers, and transporters interact with each other and their current environment according to the current process rules.

As TLoaDS runs, it generates a wide variety of outputs that shed far more light into what is going on in the system, than spreadsheet, knowledge base, neural network, or linear programming models do. Numerous non-core TLoaDS modules greatly aid the analyst in managing and processing the vast amount of input and output data involved in a study. These include modules to:

1) manage the different simulation levels involved in a study;
2) help prepare and advise the analyst in setting up the model inputs;
3) understand the detailed and overall performance of the distribution system, using an online documentation system

### Strategic Assessment

The following provides links to articles within this document that address strategic assessment issues related to this case study:

- [Tactical Analysis of System Loading](/logistics/#tactical-analysis)
  This model was designed to assess combinations of air, sea and land transporters for re-supply of marine units in combat. Movement of fuel, water, ammo, and other supplies was modeled.

### Details

#### Sponsorship

TLoaDS development started in 1997 under the sponsorship of Marine Corps Systems Command's Amphibious Warfare Technology Directorate. The model was originally intended to be just an in-house logistics technology assessment tool. This sponsorship transitioned to the Office of Naval Research (ONR), Code 353 in 1999. In 1998, ONR, Code 331, sponsored an extension to TLoaDS to simulate processes unique to the intra- and intership operations involved in shipboard cargo handling operations and underway replenishment. This portion of the logistic system gets into the operational level of logistics. Versions of TLoaDS with this functionality, are referred to as C.LoaDS or CLoaDS (pronounced and understood as "*sea-loads*"*)*. Unless otherwise specified, this paper applies equally to CLoaDS as to TLoaDS including all of the above text.

#### Relationship between TLoaDS, CLoaDS, X.LoaDS and A-LoaDS

TLoaDS and CLoaDS are application names defined in context of both the current sponsors and initial uses. TLoaDS is designed to simulate the sustainment and movement of marine air ground task forces (MAGTFs) ashore from ships at sea, as if those ships never run out of supplies. CLoaDS is designed to simulate the sustainment of those ships at sea. This includes the shuttle ships resupplying the station ships, and the station ships resupplying the ships that resupply the MAGTF. The figure to the right shows this simplistic application relationship.
