# EE03 -- Version Control and Development Tooling

**Project:** Ama's Plant Corner\
**Student:** Johnson Saka\
**Pair:** Halle\
**Repository:** `halledotse22/amas_plant_corner`

------------------------------------------------------------------------

## 1. Written Explanation of the Project Setup

### Base-site decision: why we chose Halle’s website

My pair and I compared Halle’s website with my website before deciding which version to use as the base. We used the four questions from the EE03 base-site decision activity and recorded the comparison as evidence.

| Decision question | Halle’s website | My website |
|---|---|---|
| Does it build and run without errors? | Yes | Yes |
| Open FE01 issues | 0 | 3 |
| Open FE02 issues | 0 | 1 |
| Could a stranger navigate the folders? | Yes. The README included viewing instructions, links to documents, and a file map. | Yes, reasonably easily. Documents were organised in `docs/ee02/`, but the README’s file map was less clear. |
| Which is cheaper to build on? | Halle’s website, because it had fewer open issues and a clearer project structure. | More work would be needed to address the four open items before using it as the base. |

We chose Halle’s website as the base site. Both websites ran without errors, so that was not the deciding factor. Halle’s version had no open FE01 or FE02 issues, while my version had four open items in total. Halle’s README also made it easier for someone unfamiliar with the project to navigate the folders because it included viewing instructions, links to documents, and a file map.

This made Halle’s version the lower-effort and more maintainable starting point for our pair work. We decided to use Halle’s site as the foundation and bring across selected useful features from my site: the dyslexia-friendly plant-care guide and the accessible skip link.

### Project structure

The repository is organized as follows:

``` text
.github/
  workflows/
evidence/
images/
lab1/
lab2/
README.md
index.html
styles.css
eslint.config.mjs
package.json
package-lock.json
```

-   `.github/workflows/` contains the GitHub Actions workflow used for
    automated checks.
-   `evidence/` stores evidence for the lab activities.
-   `images/` contains image assets used by the website.
-   `lab1/` and `lab2/` contain lab work.
-   `README.md` documents the project.
-   `index.html` contains the website's page structure.
-   `styles.css` controls the website's presentation.
-   `eslint.config.mjs` contains the ESLint configuration.
-   `package.json` defines project metadata, dependencies, and npm
    scripts.
-   `package-lock.json` records the resolved dependency versions for
    consistent installation.

This structure separates website content, styling, assets, lab work, and
development tooling so team members can locate and maintain files more
easily.

### Conventions followed

We followed the AmaliTech branch strategy by keeping `main` and
`develop` as permanent branches and using short-lived branches for
individual tasks.

Branch names use lowercase words separated by hyphens and a purpose
prefix, for example:

-   `feature/plant-catalogue`
-   `chore/eslint-ci`

We used conventional commit messages to make the purpose of each change
clear, including:

-   `feat(catalogue): add dynamic plant product cards`
-   `ci: run ESLint on every push`
-   `chore: add package lock for CI`

Work was kept in task-specific branches and submitted through pull
requests to `develop`. This supports independent work, review, and
controlled integration.

### Configuration and why it matters

**ESLint** is configured through `eslint.config.mjs`. It checks
JavaScript for code-quality problems and potential errors. Having a
shared configuration means team members use the same linting rules.

**Prettier** was used to format the project consistently. Consistent
formatting reduces distracting differences in code reviews and makes the
code easier for teammates to read.

**GitHub Actions** runs the project's quality check automatically when
code is pushed. This gives the team feedback without relying only on
each developer remembering to run the check manually.

**npm scripts** provide named commands for project tasks, so developers
can use the same commands instead of remembering different command-line
instructions.

**`package-lock.json`** records the exact dependency resolution used by
npm. The CI workflow uses `npm ci`, which requires a lockfile and
installs from it. This helps make dependency installation repeatable.

**`.gitignore`** excludes files that should not be committed, such as
local or generated files that are not part of the shared source.

Together, these conventions and tools make collaboration more
predictable and help prevent avoidable quality and dependency issues.

------------------------------------------------------------------------

## 2. Working Project Setup

### Version control and branch management

I worked on the plant catalogue feature in `feature/plant-catalogue`. I
kept the catalogue work separate from the development workflow
improvement.

The ESLint CI improvement was isolated in a new branch,
`chore/eslint-ci`, created from the updated `develop` branch. I
cherry-picked the relevant CI commit from my feature branch so the
workflow change could be reviewed independently, without including
unrelated catalogue changes.

During the cherry-pick, Git reported a conflict involving
`package-lock.json`. The lockfile had been removed from the updated
`develop` branch, so I initially kept it deleted while completing the
cherry-pick.

The first CI run then failed because `npm ci` requires an existing
`package-lock.json` or `npm-shrinkwrap.json`. I investigated the error,
generated a lockfile with `npm install`, committed the lockfile, and
pushed the fix.

This experience showed me that resolving a Git conflict is not only
about completing the Git operation. I also need to verify that the
resulting project can install its dependencies and run its checks.

### Automated quality check and evidence

The GitHub Actions workflow installs dependencies using `npm ci` and
then runs ESLint. The workflow initially failed because the lockfile was
missing. After I added and committed the lockfile, the ESLint CI check
passed.

The successful GitHub Actions check is evidence that dependency
installation and the linting step completed successfully in CI.

The catalogue feature and the ESLint CI improvement were kept in
separate branches, allowing the team to review each change for its own
purpose.

### Build verification

The ESLint CI check passed. This confirms the automated linting workflow
worked; it does not, by itself, prove that a separate production build
command passed. The project build should be reported as successful only
if it was run and verified.

------------------------------------------------------------------------

## 3. Written Code Review of My Pair's Pull Request

**Pull request reviewed:** Halle's PR #3 -- Seasonal Promotion Banner\
**Base branch:** `develop`

I reviewed the seasonal promotion implementation, including the date
validation and the logic used to select the current promotion. I raised
the following findings as optional suggestions rather than
merge-blocking issues.

### Finding 1: Date validation checks the format but not whether the date exists

**Location:** `DATE_FORMAT` regular expression in `promotions.js`\
**Type:** Optional suggestion

The regular expression checks that the date follows the `YYYY-MM-DD`
shape. However, a string such as `2026-02-31` has the expected shape
even though that date does not exist.

I raised this as an optional suggestion because the current promotion
data uses valid dates and the format check provides some basic
validation. However, validating that the date is a real calendar date
would make the promotion logic more robust and help prevent incorrect
date values from being accepted in future updates.

### Finding 2: `.find()` selects only the first active promotion

**Location:** The `.find()` call in `findCurrentPromotion()`\
**Type:** Optional suggestion

The function uses `.find()` to return the first promotion whose date
range includes the current date. If two promotions are active at the
same time, only the first matching promotion will be selected.

I raised this as an optional clarification because the current behaviour
may be intentional if the project is designed to display only one
promotion at a time. If overlapping promotions are expected to be
supported, the implementation should define how to choose between them
or how to display multiple promotions.

### Review decision

I did not mark these findings as blocking because they do not prevent
the current implementation from displaying a promotion when the provided
data is valid and the promotion dates do not overlap. I explained the
conditions under which each issue could become a problem and suggested
improvements for future robustness.

This review helped me distinguish between an issue that must be
corrected for the PR to function correctly and an optional improvement
that depends on the intended requirements.

------------------------------------------------------------------------

## 4. Development Workflow Improvement: ESLint in CI

### Improvement implemented

I improved the development workflow by configuring GitHub Actions to run
ESLint automatically on every push.

The change was isolated in the `chore/eslint-ci` branch and submitted as
a separate pull request. The workflow installs dependencies using
`npm ci` and runs ESLint as an automated quality check.

### Problem it solves

Without an automated check, developers may forget to run ESLint locally
or may use different local processes. Potential JavaScript quality
issues can then reach the shared branch and create additional review or
debugging work.

Running ESLint in CI makes the check part of the shared workflow and
provides consistent feedback when changes are pushed.

### Who it protects

-   **The developer making the change:** receives feedback about
    code-quality issues.
-   **The reviewer:** can focus review effort more effectively, with an
    automated lint check available.
-   **The team:** reduces the chance of avoidable code-quality problems
    entering the shared codebase.

### Implementation and testing

I created `chore/eslint-ci` from the updated `develop` branch and
cherry-picked the CI workflow change from my feature branch. This kept
the workflow improvement separate from the plant catalogue feature.

The first CI run failed because `npm ci` could not find a committed
lockfile. I generated `package-lock.json`, committed it, and pushed the
fix. The ESLint CI check then passed.

### Why this improvement should remain

I recommend keeping the ESLint CI check permanently because it makes
code-quality checking consistent and less dependent on individual
developer habits. It provides early feedback, supports the pull request
review process, and helps the team maintain a shared standard as the
project grows.

------------------------------------------------------------------------

## Conclusion

This work helped me practise using `main` and `develop` appropriately,
creating short-lived task branches, writing focused commits, isolating a
change with cherry-pick, resolving a conflict, and verifying the result
through CI.

I also practised reviewing a teammate's code by identifying potential
issues, explaining their impact, and deciding whether they should block
a merge or remain optional suggestions. The ESLint CI improvement
demonstrates how a small workflow change can protect the developer,
reviewer, and wider team.
