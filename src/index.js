import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'

// Remaining import statements

const options = {
  "info": {
    "applicationID": 538854477,
    "beacon": "bam.eu01.nr-data.net",
    "errorBeacon": "bam.eu01.nr-data.net",
    "licenseKey": "NRJS-c086cdf83cd7b43735d",
    "sa": 1
  },
  "init": {
    "ajax": {
      "deny_list": [
        "bam.eu01.nr-data.net"
      ]
    },
    "browser_consent_mode": {
      "enabled": false
    },
    "distributed_tracing": {
      "enabled": true
    },
    "performance": {
      "capture_detail": false,
      "capture_marks": false,
      "capture_measures": true
    },
    "privacy": {
      "cookies_enabled": true
    }
  },
  "loader_config": {
    "accountID": 7944271,
    "agentID": 538854477,
    "applicationID": 538854477,
    "licenseKey": "NRJS-c086cdf83cd7b43735d",
    "trustKey": 7944271
  }
}

// The agent loader code executes immediately on instantiation.
const nrba = new BrowserAgent(options)

// Remaining code
