#!/usr/bin/env node

const { exec } = require('child_process')

const args = process.argv.slice(2)
const command = args[0]

if (command === 'init') {
  // Handle init command
} else if (command === 'create') {
  // Handle create command
} else {
  console.log('Unknown command. Use "init" or "create".')
}
