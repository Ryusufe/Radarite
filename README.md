# Radarite Plugin

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


## Example Screenshots

-- soon


Made for people who love visualizing their data.
