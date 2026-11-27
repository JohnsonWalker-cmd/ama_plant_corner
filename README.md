# Ama's Plant Corner

A single-page website for Ama's Plant Corner, a neighbourhood plant shop at 14 Okaishie Lane, Accra. It is written for people on phones who are nearby and deciding whether to walk in: what the shop sells, where it is, when it is open, and how to ask Ama for advice.

**Live site:** [johnsonwalker-cmd.github.io/ama_plant_corner](https://johnsonwalker-cmd.github.io/ama_plant_corner/)

The page is one HTML file and one stylesheet. There is no build step and no JavaScript.

## The page

Sections, in the order a visitor meets them:

1. **Header** — shop name and links to What we sell, Plant care, About, and Contact. A skip link jumps to the main content.
2. **Hero** — what the shop sells, and a button to the products.
3. **Find Us** — address, tap-to-call number, opening hours, and Facebook and Instagram links.
4. **What We Sell** — houseplants, pots and planters, and soil and accessories, each with a photo and a starting price in cedis.
5. **About Ama** — a short note on the shop.
6. **Plant Care Tips** — guides for houseplants, succulents and cacti, tropical plants, and outdoor plants. Each guide opens and closes with `<details>`, so it works without a script.
7. **Ask Ama** — a name and a plant question.
8. **Get in Touch** — name, phone, and a message, plus a WhatsApp link with a prefilled note.
9. **Footer** — copyright.

On a narrow screen the page is one column. From `48rem` the header spreads out, Find Us sits in three columns, the products sit in a row, and Plant Care and Ask Ama sit side by side.

## Repository

```text
index.html                 the page
css/styles.css             layout, type, and colour
css/assets/images/         houseplant, pots, and soil photos
docs/module-1/             Module 1 lab write-up
docs/ee02/                 accessibility audits, testing logs, and write-up
docs/ee03/                 version control and tooling write-up
.github/workflows/         hygiene check on push and pull request
stylelint.config.mjs       Stylelint config for the CSS check
```

`package.json` holds the formatting and lint tools. Prettier runs on commit through Husky and lint-staged, on HTML, CSS, JavaScript, JSON, and YAML. The GitHub Action in `.github/workflows/check.yml` calls the shared hygiene workflow, which checks formatting and lints CSS with Stylelint.

## View it locally

Open `index.html` in a browser. Nothing else is required to read the site.

To install the commit hook:

```bash
npm install
```

## Coursework

The Module 1 lab submission (sketch, diagnosis, and audit) used to be this file. It is now [docs/module-1/lab-submission.md](docs/module-1/lab-submission.md).

Later write-ups:

- [docs/ee02/write-up.md](docs/ee02/write-up.md) — accessibility fixes after the partner audit
- [docs/ee03/EE03_Submission_Final.md](docs/ee03/EE03_Submission_Final.md) — version control and development tooling

## Limits

- The Ask Ama and Get in Touch forms stay in the browser. They have no `action` and no script, so a submit does not reach Ama.
- The phone number (`0244 000 000`) and the Facebook and Instagram links are placeholders.
- About Ama has no photo.
