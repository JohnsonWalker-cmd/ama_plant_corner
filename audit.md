# EE02 Accessibility Audit: Ama's Plant Corner

## 1. Audit Information

**Website audited:** [Ama's Plant Corner -- Partner's
website](https://halledotse22.github.io/amas_plant_corner/)

**Audit date:** 19 November 2026

**Auditor:** Johnson Saka

**Audit tools:** WAVE Accessibility Evaluation Tool, Google Chrome,
Chrome DevTools and Windows Narrator.

## 2. Introduction and Purpose

The purpose of this audit was to evaluate the accessibility of Ama's
Plant Corner, a neighbourhood plant shop website in Accra.

The audit focused on identifying barriers that could prevent people with
disabilities or other accessibility needs from accessing the website's
information and using its features.

Particular attention was given to the customer's reported difficulty
reading plant-care information after increasing text size on her phone.
The audit therefore included keyboard navigation, screen-reader testing,
browser zoom, responsive reflow and touch-target measurements.

Both automated and manual testing were performed because automated tools
cannot identify every accessibility barrier.

## 3. Testing Methodology

### 3.1 Automated Testing

WAVE was used to evaluate the website's structure and identify potential
accessibility issues, including:

-   Missing or problematic alternative text.
-   Colour contrast.
-   Form labels.
-   Page structure and landmarks.
-   ARIA attributes.
-   Potentially redundant links.

### 3.2 Manual Keyboard Testing

The website was tested without relying on a mouse.

The following keyboard interactions were examined:

-   Tab and Shift + Tab navigation.
-   Enter key activation.
-   Visible focus indicators.
-   Skip-link functionality.
-   Expandable plant-care sections.
-   Form fields and submission controls.
-   Footer and contact links.

### 3.3 Screen-Reader Testing

Windows Narrator was used to examine how important page content and
controls were announced to screen-reader users.

Testing focused on the product cards, their images, headings and prices,
as well as the visually hidden heading in the Find Us section and the
Ask Ama form.

### 3.4 Zoom and Reflow Testing

The website was examined at 200% and 400% browser zoom to identify:

-   Overlapping text.
-   Clipped content.
-   Layout problems.
-   Horizontal scrolling.
-   Content that becomes difficult to access.

### 3.5 Touch-Target Testing

Chrome DevTools was used to inspect the dimensions of selected
interactive controls. Their dimensions were compared against the general
minimum target size in WCAG 2.2 Success Criterion 2.5.8.

## 4. Automated Testing Results

The initial WAVE evaluation reported:

  WAVE category           Result
  --------------------- --------
  Errors                       0
  Contrast errors              1
  Alerts                       1
  Features                    11
  Structural elements         21
  ARIA items                   8
  AIM score               9.7/10

### 4.1 Investigation of the Contrast Warning

WAVE identified one very low contrast error in the Find Us section.

Further inspection revealed that the flagged element was a visually
hidden `<h2>` heading containing the text "Find us".

The heading was intentionally hidden visually but remained available to
assistive technology.

Windows Narrator successfully announced:

> "Heading level 2, Find us."

**Conclusion:** This was investigated and was not considered a confirmed
contrast failure because the flagged heading was visually hidden rather
than visible text requiring visual contrast.

### 4.2 Investigation of the Redundant Link Alert

WAVE identified two adjacent telephone links pointing to the same
telephone number.

One appeared in the header, while the other appeared in the Find Us
section.

Both links provided a way for visitors to contact Ama from different
areas of the page.

**Conclusion:** The repeated telephone links were considered
intentional. No confirmed accessibility barrier was identified.

### 4.3 Structural Elements and Features

WAVE identified:

-   Five alternative-text features.
-   Three form-label features.
-   One skip link and its target.
-   One level-one heading.
-   Five level-two headings.
-   Seven level-three headings.
-   Four unordered lists.
-   Header, navigation, main-content and footer landmarks.
-   Eight ARIA items.

Manual testing further confirmed that the form fields had visible labels
and that the skip link worked.

The presence of structural elements and ARIA attributes does not
automatically establish that every implementation is correct. However,
the detected structure provided a useful starting point for the manual
evaluation.

## 5. Manual Testing Results

### 5.1 Keyboard Navigation

The website was navigated using the keyboard.

The site title, Shop, Care Tips, Ask Ama and Call controls were
reachable and could be activated using Enter.

A visible focus outline appeared around tested navigation controls.

The Call button opened the device's calling application.

The WhatsApp contact link also received keyboard focus and opened
WhatsApp when activated.

**Result:** No keyboard-accessibility barrier was identified in the
tested navigation and contact controls.

**Relevant WCAG criterion:** 2.1.1 Keyboard (Level A).

### 5.2 Skip Link

The first Tab stop revealed a visible "Skip to main content" link.

Pressing Enter moved directly to the main content, allowing keyboard
users to bypass repeated navigation.

**Result:** Passed.

**Relevant WCAG criterion:** 2.4.1 Bypass Blocks (Level A).

### 5.3 Product Information and Screen-Reader Access

Keyboard testing showed that the ordinary product images did not receive
focus. This was expected because they were not interactive controls.

Windows Narrator was then used to examine the first product card.

It announced:

-   The image as a graphic.
-   The image's alternative text.
-   The product title as a level-three heading.
-   The product price.

This allowed screen-reader users to access the product information
without needing the image itself to receive keyboard focus.

**Result:** Passed for the tested product card.

**Relevant WCAG criteria:** - 1.1.1 Non-text Content (Level A). - 1.3.1
Info and Relationships (Level A).

### 5.4 Plant-Care Guides

Each plant-care tip received visible keyboard focus.

Pressing Enter expanded the selected guide, and pressing Enter again
collapsed it.

The guides behaved as expected for native expandable HTML controls.

**Result:** Passed.

**Relevant WCAG criterion:** 2.1.1 Keyboard (Level A).

### 5.5 Ask Ama Form

The form fields were reachable using Tab, each field had a visible
label, and the Submit button was keyboard-accessible.

When the form was submitted empty, the browser displayed its native
validation message:

> "Please fill out this field."

The browser moved focus to the first empty required field. Narrator
announced the field as:

> "Your name, edit, required."

However, Narrator did not announce the validation tooltip itself during
the test.

After all required fields were completed, the form submitted and the
page reloaded. No success or confirmation message appeared.

The form used:

`action="#ask-ama"` and `method="get"`.

**Result:** Keyboard access, visible labels and native required-field
validation worked in the tests. The error-message announcement and
post-submission feedback require further investigation.

**WCAG consideration:** 3.3.1 Error Identification (Level A). The
testing did not establish a confirmed failure of this criterion.

### 5.6 Footer and Social Links

The Facebook and Instagram links were keyboard-accessible.

Narrator announced their names, confirming that they had accessible
names.

However, HTML inspection showed that both links used `href="#"` rather
than actual social-media destinations.

**Result:** The links had accessible names, but their destinations were
placeholders. This is a functional limitation rather than a confirmed
WCAG failure.

### 5.7 Text Resizing and Reflow

At 200% browser zoom, no overlapping text was observed, and the page
content remained readable.

At 400% browser zoom, the layout changed into a single-column
presentation. Product cards, plant-care guides, form fields and footer
content remained visible without obvious clipping or overlapping.

The page scrolled vertically rather than horizontally.

**Result:** The visual checks were successful under the tested
conditions.

**Relevant WCAG criteria:** - 1.4.4 Resize Text (Level AA). - 1.4.10
Reflow (Level AA).

These tests provide positive evidence, but do not constitute a complete
verification of every condition covered by both criteria.

### 5.8 Touch-Target Measurements

Chrome DevTools was used to measure selected interactive controls.

  Interactive control            Width      Height
  ---------------------- ------------- -----------
  Menu button              66.7 CSS px   48 CSS px
  Call button                63 CSS px   48 CSS px
  Plant-care control        155 CSS px   25 CSS px
  Send question button      294 CSS px   48 CSS px

All measured controls exceeded the general 24 × 24 CSS pixel minimum.

The plant-care controls also had sufficient visible spacing, and testing
showed that tapping one did not accidentally activate another.

**Result:** Passed for the measured controls.

**Relevant WCAG criterion:** 2.5.8 Target Size (Minimum) (Level AA).

### 5.9 Focus Visibility and Obscuration

The tested keyboard controls displayed visible focus indicators.

Focus was also checked around the sticky header. No focused element was
found to be obscured by the header during testing.

**Result:** Passed for the tested elements.

**Relevant WCAG criteria:** - 2.4.7 Focus Visible (Level AA). - 2.4.11
Focus Not Obscured (Minimum) (Level AA).

## 6. Prioritised Findings and Recommendations

The audit did not establish any confirmed WCAG violations during the
tests performed. However, two functional limitations were identified
that could affect the customer experience.

### Finding 1: Ask Ama form provides no submission confirmation

**Priority: Moderate**

**Location:** Ask Ama form.

**Evidence:** After completing the required fields and submitting the
form, the page reloaded without displaying a success message or
confirmation.

**Who may be affected:** Customers who submit questions and need to know
whether their request was received. This may particularly affect people
who benefit from clear and predictable feedback.

**Why it ranks here:** The form is an important way for customers to ask
Ama for plant-care advice. Without confirmation, users may be uncertain
whether their question was successfully submitted and may repeat the
process or abandon the interaction.

**Recommended improvement:** Provide a clear confirmation when a
question has been successfully received. The implementation should also
ensure that the form submits to an appropriate destination.

**WCAG assessment:** No confirmed WCAG failure was established. The
missing confirmation is recorded as a functional and usability
limitation.

### Finding 2: Social-media links use placeholder destinations

**Priority: Low**

**Location:** Website footer.

**Evidence:** HTML inspection showed that the Facebook and Instagram
links both use `href="#"`.

**Who may be affected:** Customers who want to visit Ama's social-media
pages.

**Why it ranks here:** These links do not provide their intended
destinations. However, they do not prevent customers from accessing the
shop's main product information, plant-care guides or contact options.

**Recommended improvement:** Replace the placeholder destinations with
the correct Facebook and Instagram URLs when those destinations are
available.

**WCAG assessment:** No confirmed WCAG failure was identified. The links
have accessible names, but their destinations are not implemented.

## 7. Positive Accessibility Findings

Several accessibility foundations were confirmed during the audit:

1.  The website provides a working skip link.
2.  Tested navigation and contact links are keyboard-accessible.
3.  Visible keyboard focus indicators are provided.
4.  Product information is available through screen-reader
    announcements.
5.  Plant-care guides can be expanded and collapsed using the keyboard.
6.  The Ask Ama form has visible labels and native required-field
    validation.
7.  The tested layout remained readable at 200% browser zoom.
8.  The page reflowed into a single-column layout at 400% zoom.
9.  The measured interactive controls met the general minimum
    target-size dimensions.
10. The tested focus indicators were not obscured by the sticky header.

These findings suggest that the implementation has a number of sound
accessibility foundations.

## 8. Audit Limitations

This audit was based on the live website and the testing methods
described above.

The following limitations should be considered:

-   Screen-reader testing was performed using Windows Narrator, not
    every available screen reader.
-   The product-card screen-reader test focused on the first product
    card rather than every product.
-   The quality of every alternative-text description was not
    independently verified.
-   Browser zoom and reflow checks were visual inspections under the
    tested conditions.
-   Only selected interactive controls were measured for target size.
-   The actual delivery of questions submitted through the Ask Ama form
    could not be verified.
-   The audit did not establish complete WCAG 2.2 conformance.

Further testing with people who use assistive technologies would provide
additional confidence.

## 9. Conclusion

The accessibility audit of Ama's Plant Corner identified several
positive accessibility features and two functional limitations.

WAVE reported zero automatically detected errors. Its contrast warning
and redundant-link alert were investigated and were not confirmed as
accessibility failures.

Manual testing showed that the main navigation, skip link, product
information, plant-care guides, form controls and contact links were
accessible through the tested keyboard and screen-reader interactions.

The zoom and reflow tests also showed that the website maintained a
usable layout under the tested conditions.

The two improvements identified concern the lack of form-submission
confirmation and placeholder social-media destinations. They should be
addressed to improve the customer experience, even though neither was
established as a WCAG failure.

Overall, no confirmed WCAG violations were identified during this audit.
This does not prove that the entire website is fully accessible, but the
evidence suggests that the implementation provides a good accessibility
foundation and that the remaining improvements are clearly identifiable.
