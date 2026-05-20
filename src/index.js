// =============================================================
// STEP 1: Install the New Relic package first:
//   npm install @newrelic/browser-agent --save
//
// STEP 2: Paste the New Relic import and BrowserAgent setup
//         HERE at the TOP of this file — before any other code.
//
// It should look like this (with your real credentials):
//
//   import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'
//
//   const options = { info: { ... }, init: { ... }, loader_config: { ... } }
//
//   new BrowserAgent(options)
//
// IMPORTANT: The New Relic import MUST be the very first thing
// in this file so the agent loads before any other code runs.
// =============================================================
