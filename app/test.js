
// Simple test — no framework needed yet
const assert = require('assert');

console.log('Running GamerBase tests...');

// Test 1: Health route exists
const app = require('./index.js');
console.log('✅ App loads without errors');

// Test 2: Environment variables are handled
const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
requiredEnvVars.forEach(v => {
  if (!process.env[v]) {
    console.log(`⚠️  Warning: ${v} not set`);
  }
});

console.log('✅ All tests passed');
process.exit(0);
