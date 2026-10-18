#!/usr/bin/env node
/**
 * Creates review-only Instagram caption drafts from changed HTML pages.
 * No API keys, social credentials, or automatic publishing are used.
 */
const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const baseArg = process.argv[2] || "";
const head = process.argv[3] || "HEAD";
let base = baseArg;
if (!base || /^0+$/.test(base)) {
  try { base = execFileSync("git", ["rev-parse", head + "^"], { encoding: "utf8" }).trim(); }
  catch { base = ""; }
}
function runGit(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}
function clean(value) {
  return (value || "").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'").replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">").replace(/\s+/g, " ").trim();
}
function meta(html, key, attr) {
  attr = attr || "name";
  const escaped = key.replace(/[.*+?^$()|[\]\\]/g, "\\$&");
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of tags) {
    const a = tag.match(new RegExp("\\b" + attr + "=[\\"']" + escaped + "[\\"']", "i"));
    const c = tag.match(/\bcontent=["']([^"']*)["']/i);
    if (a && c) return clean(c[1]);
  }
  return "";
}
function canonical(html) {
  const tags = html.match(/<link\b[^>]*>/gi) || [];
  for (const tag of tags) {
    if (/\brel=["']canonical["']/i.test(tag)) {
      const href = tag.match(/\bhref=["']([^"']+)["']/i);
      if (href) return clean(href[1]);
    }
  }
  return "";
}
function ogImage(html) {
  return meta(html, "og:image", "property") || meta(html, "twitter:image", "name");
}
function safeName(file) {
  return file.replace(/\.html?$/i, "").replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "") || "page";
}
let files = [];
try {
  files = (base
    ? runGit(["diff", "--name-only", base, head, "--", "*.html", "**/*.html"])
    : runGit(["ls-tree", "-r", "--name-only", head, "--", "*.html", "**/*.html"]))
    .split("\n").filter(Boolean)
    .filter(file => /\.html?$/i.test(file) && file.toLowerCase() !== "index.html");
} catch (error) {
  console.error("Could not determine changed HTML files:", error.message);
  process.exit(1);
}
const outDir = "social-drafts";
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
let generated = 0;
for (const file of [...new Set(files)]) {
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = clean(titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "") : path.basename(file, ".html"));
  const description = meta(html, "description");
  const url = canonical(html) || "https://faridabadmasterplan.in/" + file.replace(/^\//, "");
  const image = ogImage(html);
  const caption = [
    "🏡 " + title,
    "",
    description || "Explore the latest project and property information on Faridabad Master Plan.",
    "",
    "Read more: " + url,
    "",
    "Please verify current price, availability, approvals and terms before making a property decision.",
    "",
    "#FaridabadMasterPlan #FaridabadProperty #FaridabadRealEstate #PropertyUpdate #RealEstateIndia"
  ].join("\n");
  const content = [
    "# Instagram draft — " + title,
    "",
    "> REVIEW REQUIRED: This is a draft only. Nothing is published automatically.",
    "",
    "- Source file: " + file,
    "- Page URL: " + url,
    image ? "- Social image (verify it is publicly accessible): " + image : "- Social image: not detected; choose an approved project image before publishing.",
    "",
    "## Caption",
    "",
    caption,
    "",
    "## Approval checklist",
    "",
    "- [ ] Confirm project name, price, availability, location and RERA claims against current source information.",
    "- [ ] Confirm the image is approved and matches this project.",
    "- [ ] Confirm the page is live and the link works.",
    "- [ ] Approve caption before publishing through the connected social scheduler."
  ].join("\n");
  fs.writeFileSync(path.join(outDir, safeName(file) + ".md"), content + "\n", "utf8");
  generated++;
}
fs.writeFileSync(path.join(outDir, "README.md"),
  "# Social post previews\n\nGenerated " + generated + " review-only draft(s) from changed HTML pages. These drafts are not posted to Instagram. Review factual claims and choose an approved image before publishing.\n",
  "utf8");
console.log("Generated " + generated + " review-only social draft(s).");
