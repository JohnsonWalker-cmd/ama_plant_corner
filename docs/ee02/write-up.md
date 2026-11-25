# EE02 Accessibility Improvements — Ama's Plant Corner

**Website:** https://johnsonwalker-cmd.github.io/ama_plant_corner/

## Fixes made in response to the partner audit

### Finding 1: WhatsApp button overlaps content when text is enlarged

**Status:** Fixed and tested.

**Problem identified:** The WhatsApp button was fixed to the bottom-right of the viewport. When text was enlarged, the button grew and covered page content, including parts of the footer.

**Changes made:**

- Moved the WhatsApp link into the Contact section, after the Get In Touch form.
- Changed its positioning from `fixed` to `static`.
- Removed the fixed-positioning properties that caused it to overlay content.

**Why this matters:** The link now participates in the normal page layout and takes up its own space instead of sitting on top of other content.

**Testing:** At 375px width with Very large text, the button had space around it, did not overlap nearby content, and could grow with enlarged text. At 400% zoom, the footer copyright remained visible.

### Finding 2: Headline and product cards overflow at larger text sizes

**Status:** Fixed and tested.

**Problem identified:** At larger text sizes, the hero headline could extend beyond its available space and the product cards could cause horizontal overflow on a narrow screen.

**Changes made:**

- Added `overflow-wrap: anywhere` to the `h1` styling.
- Updated the product grid to use `grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));`.

**Why this matters:** Text and product cards can adapt to narrower viewports and enlarged text instead of forcing content outside the screen.

**Testing:** At 375px width with Very large text, the headline remained visible, the product cards fit within the screen, and the page had no horizontal scrollbar.

### Finding 3: WhatsApp text contrast

**Status:** Fixed and tested.

**Problem identified:** The original white WhatsApp button text on the bright green background did not provide sufficient contrast for normal-sized text.

**Changes made:**

- Changed the button background to `#2F5D3A`.
- Changed the hover background to `#24472C`.
- Explicitly kept the hover text colour white with `color: #FFFFFF`, preventing the global `a:hover` rule from making the text difficult to see.

**Why this matters:** The darker backgrounds provide stronger contrast with the white button text.

**WCAG criterion:** 1.4.3 — Contrast (Minimum), Level AA.

**Testing:** Checked the button in its normal and hover states and confirmed that the white text remained visible in both.

### Finding 4: WhatsApp accessible name does not match its visible label

**Status:** Fixed and tested.

**Problem identified:** The visible link text was “WhatsApp Us”, but its `aria-label` was “Chat with Ama on WhatsApp”. The `aria-label` overrode the accessible name normally provided by the visible text.

**Changes made:** Removed the `aria-label` attribute and kept the visible link text “WhatsApp Us”.

**Why this matters:** The accessible name now matches the visible label, helping users of speech input and assistive technologies identify and activate the link.

**WCAG criterion:** 2.5.3 — Label in Name, Level A.

**Testing:** Focused the link with the screen reader and confirmed that it announced “WhatsApp Us”.

### Finding 5: Forms provide no submission feedback

**Status:** Not fully fixed — documented limitation.

**Problem identified:** The Ask Ama form does not send the question anywhere or tell the visitor what happened. The Get In Touch form reloads the page after submission without providing confirmation. The partner's testing also observed that submitted Get In Touch values appeared in the page address.

**Accessibility impact:** People using screen readers may lose their place when the page reloads and receive no confirmation about the outcome. People with cognitive or memory difficulties may also be unsure whether their submission was successful.

**WCAG assessment:** The partner recorded this as a usability problem and did not confirm a WCAG failure. WCAG 3.3.1 — Error Identification (Level A) and 3.3.2 — Labels or Instructions (Level A) were considered, but neither was confirmed as strictly violated.

**Reason not fully fixed:** This project is implemented using HTML and CSS and does not have a working form-processing service. Adding a success message without actually submitting the information would mislead visitors. A complete solution requires a submission mechanism that can receive the information and provide meaningful confirmation or error feedback.

** Possible Future Enhancements:** Connect the forms to a suitable submission service and provide clear feedback after submission.

### Finding 6: Facebook and Instagram links use placeholder destinations

**Status:** Updated and tested, with a limitation.

**Problem identified:** The Facebook and Instagram links originally used `href="#"`, which did not take visitors to a relevant destination and could cause the page to jump to the top.

**Changes made:** Replaced the placeholder destinations with Facebook and Instagram search URLs for “Ama's Plant Corner”. The links open in a new tab.

**Why this matters:** Visitors can now search for Ama's Plant Corner on the respective platforms instead of activating non-functional placeholder links.

**Testing:** Tested both links and confirmed that they open the relevant platform search pages.

**Limitation:** Ama's Plant Corner is fictional. These URLs lead to platform search pages, not verified official business profiles. They should not be described as links to confirmed store accounts.

### Finding 7: Form fields missing autocomplete attributes

**Status:** Updated in the HTML.

**Problem identified:** The name and phone fields did not have appropriate autocomplete attributes to identify their input purposes.

**Changes made:**

- Added `autocomplete="name"` to the Ask Ama name field.
- Added `autocomplete="name"` to the Get In Touch name field.
- Added `autocomplete="tel"` to the Get In Touch phone field.

**Why this matters:** These attributes identify the purpose of common form fields and can help browsers provide appropriate autofill suggestions.

**WCAG criterion:** 1.3.5 — Identify Input Purpose, Level AA.

**Testing:** Inspected the updated HTML and confirmed that the relevant fields contain the appropriate autocomplete attributes.

### Finding 8: No skip link for bypassing repeated navigation

**Status:** Implemented and tested as an improvement.

**Problem identified:** The page did not provide a skip link to allow keyboard users to bypass repeated navigation and move directly to the main content.

**Changes made:**

- Added a “Skip to main content” link immediately after the opening `<body>` tag.
- Set its destination to `#main`, matching the ID on the `<main>` element.
- Styled the link to remain off-screen until it receives keyboard focus.

**Why this matters:** Keyboard users can bypass the repeated header navigation and move directly to the main content.

**WCAG criterion supported:** 2.4.1 — Bypass Blocks, Level A.

**Testing:** Pressed Tab to reveal the skip link and Enter to activate it. Confirmed that it navigates to the main content.

**Additional change:** The WhatsApp link was moved inside the Contact section, which is within the main content landmark.

## Additional Improvement: Making Plant-Care Information Easier to Read for People with Dyslexia

**User group:** People with dyslexia.

**Barrier identified:** Long paragraphs of plant-care instructions can make it difficult for some people with dyslexia to track information and locate specific instructions.

**Improvement implemented:** Reorganised all four plant-care guides (Houseplants, Succulents & Cacti, Tropical Plants, and Outdoor Plants) into shorter sections with descriptive labels such as Watering, Lighting, Temperature, Feeding, and Important Reminder.

I also adjusted the spacing between paragraphs to improve readability.

**Why this improvement matters:** Breaking information into smaller, clearly labelled sections makes it easier for users to scan the guides and locate the specific plant-care information they need without having to read one long paragraph.

**Who benefits:** People with dyslexia and other users who find long blocks of text difficult to follow.

**Testing performed:**

- Confirmed that all four plant-care guides expand and collapse correctly.
- Checked that the instructions and labels are easy to identify.
- Tested readability on a narrow mobile screen.
- Confirmed that the guides can be operated using the keyboard.
- Used Narrator to verify that headings and instructions are announced in the correct order.

**Result:** All tests passed.

**Justification:** This improvement goes beyond the eight findings in my partner's audit. It addresses the readability and organisation of plant-care information for a user group whose needs were not specifically considered in that audit.

## Additional testing

After implementing the changes, I retested the website, including enlarged text and zoom. I confirmed that the headline and product cards remain visible at a 375px viewport with Very large text, that the page does not have a horizontal scrollbar in that test, and that the footer copyright remains visible at 400% zoom. I also tested the WhatsApp hover state, screen-reader announcement of the WhatsApp link, social media destinations, and keyboard operation of the skip link.

## Limitations and future work

The forms still need a real submission mechanism before they can send visitors' information to Ama and provide reliable submission feedback. The social media links are search destinations because the business and its profiles are fictional; they are not verified official store accounts.

## Final reflection

This work addressed the issues identified in the partner audit where changes could be made within the project's HTML and CSS scope. Where a complete fix required functionality the project does not have, particularly form processing, I documented the limitation rather than adding feedback that could falsely tell visitors their information had been sent.
