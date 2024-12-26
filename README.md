# challenge-winnin-cypress

Challenge project for winnin company.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v22.11.0` and `10.9.0` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

You can run the tests simulating a desktop or mobile viewport.

### Desktop

Run `npm run cy:run` to run the test in headless mode no a desktop viewport.

Or, run `npm run cy:open` to open Cypress in interactive mode on a desktop viewport.

### Mobile

Run `npm run cy:run:mobile` to run the test in headless mode no a mobile viewport.

Or, run `npm run cy:open:mobile` to open Cypress in interactive mode on a mobile viewport.

### Visual Testing

Run `npm run cy:run:visualtest:base` to run the test and generate a base image to compare with future executions (`./cypress/snapshots/base` folder will be created).

Run `npm run cy:run:visualtest:actual` to run the test and generate the actual visual result and will be compared with the base image (`./cypress/snapshots/actual folder will be created).`

### GitHub Actions

In this project there are two types of GitHub Actions files, where the `ci.yml` file automatically executes the tests with each `"push"` performed, and the `cy-manual-wf.yml` file allows manual execution of the workflow (workflow_dispatch), where you define an execution `tag` (e.g. `smoke`)
___

This project was created by Marcelo Santos Macedo.