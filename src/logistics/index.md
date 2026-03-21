---
layout: layout.njk
title: "Logistics: Strategic Assessment"
showGrid: true
---

# Strategic Assessment: Logistics

An example of SDI's work in logistics is:

<div class="section-nav">
<h4>Strategic Topics</h4>

<ul>
<li class="strategic"><a href="#tactical-analysis">Tactical analysis of system loading</a><div class="description">short term simulation of system behavior to support resource scheduling</div></li>
</ul>
</div>

<img src="/images/Strategic Assessment - Logistics.png" alt="Strategic Assessment - Logistics">

---

<h2 id="tactical-analysis">Logistics: Tactical analysis of system loading</h2>

<div class="callout">short term simulation of system behavior to support resource scheduling</div>

### Summary

Simulation models can be used to predict system behavior in the short term. For example, the VinLogic model (see case studies) is used by INL to predict on a weekly basis the number of vehicles arriving at rail unloading sites during the subsequent week.

Unlike strategic models, tactical models must be initialized with a realistic picture of the current state of the system being modeled.

### Model Initialization

Typically, manufacturing or supply chain simulations require a warm up period to 'load the system' with materials in process. For example, a strategic supply chain model might generate results for a period of a year from 1/1/08 to 1/1/09, but the model run actually starts 10/1/07. This gives the model 3 months to overcome perturbations that result from the initially empty pipelines.

Tactical models do not have this luxury. It is necessary to capture data on the current state of the real world system and input that data to define the initial state of the model for the simulation run. In the case of the VinLogic model, INL maintains VinVison, a web-deployed application that tracks the location of individual vehicle shipments, inventories, trucks and rail cars throughout the distribution network. The VinLogic simulation model uses live data from VinVison to initialize each model run.

*[Initializing a Distribution Supply Chain Simulation with Live Data](http://www.informs-cs.org/wsc03papers/206.pdf)*; Malay Dalal, Union Pacific Railroad; Henry Bell, Mike Denzien, Simulation Dynamics; Michael Keller, Insight Network Logistics. Winder Simulation Conference, 2003

### Case Studies

- [VinLogic Model](/logistics/case-studies/#vinlogic-model) (Transport of vehicles from plants to dealers)
  One on-going function of this model is to forecast the rate of arrival of vehicles at rail unloading facilities over a two week horizon. This forecast provides the basis for planning personnel shifts at each unloading facility.
- [TLoaDS Model](/logistics/case-studies/#tloads-model) (Tactical Logistics Distribution System -- U. S. Marine Corps)
  This model was designed to assess combinations of air, sea and land transporters for re-supply of marine units in combat. Movement of fuel, water, ammo, and other supplies was modeled.
