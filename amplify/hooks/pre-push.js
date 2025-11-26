#!/usr/bin/env node

const { execSync } = require("child_process");

console.log("🔧 Using pnpm instead of npm for Amplify build...");

try {
  execSync("pnpm install", { stdio: "inherit" });
} catch (e) {
  console.error("PNPM install failed:", e);
}
