<div align="center">
<h1>
  RA <img src="img/radarite.png" width="25px" style="vertical-align: end;" /> ARITE
</h1>
</div>
<div style="display: flex;" align="center">
  <img src="https://raw.githubusercontent.com/Ryusufe/Radarite/refs/heads/main/img/minimal-radarite.png" height="300px"/>
  <img src="https://raw.githubusercontent.com/Ryusufe/Radarite/refs/heads/main/img/n-radarite.png"  height="300px"/>
</div>

A dynamic metric based radar chart plugin for visualizing your data over time.  
Easily define, calculate, and update custom metrics using filters and meta data to adapt to any tool.

## Features

- Flexible metric definitions using tags, tool names, and card names filters
- Multiple compute methods: `count`, `sum`, `average`
- Real-time data updates
- Fully customizable radar chart appearance

## Installation
- can be installed inside hollow.

## Usage

Each radar chart is built using **metrics** that you define.

For each metric, you choose:

- **Name** – What the chart should call it
- **Compute Method** – How to calculate the value:
  - `count`: Count matching data.
  - `sum`: based on **Meta Key**, if number -> sums them, if list sums they length, if boolean count positive ones.
  - `average`: Get the average of a number
- **Meta Key** – *(only for `sum` and `average`)* the key of the number field in your data
- **Filtering** – Optional filters:
  - Tags (e.g. `#work`, `#ideas`)
  - Tools (e.g. notebook, kanban)
  - Cards (specific card names)

You can have as many metrics as you want — and they'll show up as axes on the radar chart.


Made for people who love visualizing their data.
