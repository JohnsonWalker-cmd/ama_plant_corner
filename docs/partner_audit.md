# Accessibility audit: Ama's Plant Corner site by Johnson Saka

- Site audited: [https://johnsonwalker-cmd.github.io/ama_plant_corner/](https://johnsonwalker-cmd.github.io/ama_plant_corner/)
- Date and time tested: 20th November, 2026
- Audited by: Halle Akosua Asantewaa Dotse
- Standard: WCAG 2.2, level AA

## How I tested

- Automated tools: the WAVE extension for Chrome (0 errors, 1 contrast error, 0 alerts, AIM score 9.4 out of 10) and Lighthouse 13.4.1 in Chrome DevTools, mobile mode (score 96; two failed audits, one of which carries no weight in the score). I saved the full report as evidence/lighthouse-report.html. I also measured every text and background colour pair with the WebAIM Contrast Checker.
- Devices and browsers: Chrome on a MacBook, and Microsoft Edge on a Windows laptop (HP).
- Keyboard: Microsoft Edge, without the trackpad. Journeys: find what Ama sells and the prices, open every care guide, send a question through Ask Ama, send a message through Get In Touch, reach WhatsApp and Call.
- Zoom, text size and reflow: browser zoom at 200%, 400% and 500%; DevTools device toolbar at 320px and 375px (iPhone SE), including tap-target measurements in Edge on Windows; Chrome Settings → Appearance → Font size → Very large (24px); an iPhone 14 in Safari with larger text, where I also tapped Call and WhatsApp.
- Screen reader: Windows Narrator with Microsoft Edge on the Windows laptop, on the product cards, the care guides, both forms and the WhatsApp button.
- Pages and journeys covered: the whole page (the site is a single page), top to bottom.

## Summary

The site has a sound structure: clear headings, proper landmarks, labelled form fields, a visible focus outline and care guides that work with the keyboard. It holds together under browser zoom at 200% and 400%.

It breaks in the one situation the brief describes. When a customer makes the text larger on her phone, the floating WhatsApp button grows to cover about a quarter of the screen and hides a menu link, the address and the Call link, and the headline and product cards run off the side of the screen. The same button has white text that is very hard to read on its bright green background. Both automated tools rated the site highly (WAVE 9.4 out of 10, Lighthouse 96) and missed the two most serious problems; I found them by enlarging the text on a real phone.

In order, the problems to fix are: the WhatsApp button covering content, content running off the screen at larger text, the button's contrast, its spoken name, and the forms that do not tell people what happened.

## Findings, in priority order

### 1. With larger text on a phone, the floating WhatsApp button grows to cover a quarter of the screen and hides links and text

- **Where:** the green "WhatsApp Us" button fixed to the bottom right of the screen, on every part of the page.
- **What happens:** the button stays in place while the page scrolls under it, so it is always on top of something. On my iPhone 14 with larger text, it grew to about a quarter of the screen, its label wrapped onto two lines, and it spilled off the left edge. In that state it hid the "Plant care" link in the menu, part of the headline, the address and Call link in Find Us, and lines of the About Ama text. With normal text it is smaller but still sits over content at every size I tested (320px wide, larger text, and 200%, 400% and 500% zoom). At the very bottom of the page it permanently hides part of the copyright line, because there is nothing left to scroll.
- **How to reproduce:**
  1. On an iPhone, open the site in Safari, tap the page settings button in the address bar and make the text larger several times.
  2. Scroll slowly from the top and watch what sits under the green button.
  3. Or, on a laptop, press Cmd (or Ctrl) and + to 400%, then scroll to the very bottom and try to read the footer.
- **Evidence:**
  - iPhone 14, Safari, larger text: the button covers the "Plant care" menu link, between "What we sell" and "About" (`evidence/07-iphone-large-text-nav-covered.png`); the Find Us address and the Call link (`evidence/09-iphone-large-text-address-covered.png`); and two lines of About Ama (`evidence/10-iphone-large-text-about-covered.png`).
  - MacBook, Chrome zoom: at 200% it hid "first-time plant" in the What We Sell introduction (`evidence/04-200-zoom-button-over-text.png`); at 500% it hid "to Saturday" and "6:00pm. Closed on" in the opening hours (`evidence/05-500-zoom-button-over-hours.png`); at 400%, scrolled to the bottom, it hid "Plant Corner. All" and "ved." in the copyright line (`evidence/06-400-zoom-footer-covered.png`).
  - In DevTools, `.whatsapp-button` is `position: fixed`, so it never moves out of the way.
- **Principle and criterion:** Perceivable; 1.4.4 Resize Text (AA) and 1.4.10 Reflow (AA). When text is enlarged or the page is zoomed, content must stay readable without being lost; here a fixed element sits on top of it. Operable is also affected: I tabbed through the page at 375px, and when the Instagram link received focus a third of it was under the button. 2.4.11 Focus Not Obscured (AA) fails only when a control is completely hidden, so that criterion is not failed, but it shows the button blocks controls as well as text.
- **Who it affects and how:** older customers and people with low vision who set larger text on their phones, which is exactly what the customer in the brief did, and anyone who zooms the page. They lose text under the button, cannot tap the menu link to the care guides while it is covered, and a tap aimed at something near the button opens WhatsApp instead. The customer described both: "text ran over other text" and she "could not reach some of the things she was trying to tap".
- **Found by:** text-size testing on a real iPhone and zoom testing on a laptop. Neither WAVE nor Lighthouse flagged it.
- **Likely cause:** `position: fixed` with `bottom: 25px; right: 25px` keeps the button over the page at all times, and nothing limits its size as the text grows.
- **Why it ranks here:** it matches both parts of the customer's complaint word for word, it appears on every screen of the page rather than in one section, and on a real phone it hides the route to the care guides, the address and the Call link, which are the reasons people open the site.

### 2. With larger text on a phone, the headline and product cards run off the side of the screen

- **Where:** the headline at the top of the page, and the three product cards in What We Sell.
- **What happens:** the page no longer fits the screen. On my iPhone 14 with larger text, the headline "Welcome to Ama's Plant Corner" runs off the right edge, so it reads "Welco…" and "Ama's" is cut. In Chrome at Very large text, the product cards are too wide for a 375px screen, so I had to scroll sideways to see all of the content, and every section moved left and right as I dragged.
- **How to reproduce:**
  1. On an iPhone, open the site in Safari and make the text larger with the page settings button; look at the headline.
  2. Or, in Chrome, go to Settings → Appearance → Font size and choose Very large, open DevTools, switch on the device toolbar, set the width to 375 and scroll to What We Sell.
- **Evidence:** the cut-off headline (`evidence/08-iphone-large-text-headline-cut-off.png`) and the product cards at Very large text in Chrome, where the Pots & Planters card is pressed against the right edge of the screen with no margin while the Houseplants card keeps its margin on the left, because the page is now wider than the screen (`evidence/01-very-large-text-products.png`). With normal text at 320px, and at 200% to 500% zoom, there was no sideways scrolling, so the problem appears only when the text itself is enlarged.
- **Principle and criterion:** Perceivable; 1.4.4 Resize Text (AA) and 1.4.10 Reflow (AA). Browser zoom does not cause it, so the site can meet the letter of 1.4.4 through zoom, but it fails the purpose: people who enlarge text the way the brief's customer does lose part of the content.
- **Who it affects and how:** the same customers as finding 1. They cannot read the shop's name in the headline or see all the prices without dragging the page sideways, and dragging moves every other section too.
- **Found by:** text-size testing on a real iPhone and in Chrome. Neither WAVE nor Lighthouse flagged it, because both test the page at the default text size.
- **Likely cause:** `.products` uses `grid-template-columns: repeat(2, 1fr)` on every phone, and a `1fr` column cannot shrink below its longest word. The headline's long words are wider than the hero box at large sizes, and nothing lets them wrap.
- **Why it ranks here:** it hides content on the main journey and matches the complaint, but the content can still be reached by scrolling sideways, whereas the button in finding 1 hides content and controls that cannot be uncovered while it is in the way.

### 3. The WhatsApp button's white text is very hard to read on bright green

- **Where:** the "WhatsApp Us" button.
- **What happens:** the button text is faint against the background, especially on a phone outdoors.
- **How to reproduce:** look at the button on a phone in daylight, or check the colours below in the WebAIM Contrast Checker.
- **Evidence:** white `#FFFFFF` on `#25D366` measures 1.98:1; on hover, `#1DA851`, it measures 3.10:1. The text is 15px at weight 600, which is not "large text" under WCAG (that needs 18.66px bold), so the minimum is 4.5:1. The DevTools inspect tool shows the same 1.98 with a warning icon, the only element on the page without a green tick. The WebAIM Contrast Checker confirms 1.98:1 and shows it fails even the lower 3:1 bar for large text and interface components, so making the text bigger would not fix it. WAVE reported it as the page's only contrast error, "Very low contrast (1.98:1)", and it was also Lighthouse's only failed audit ("Background and foreground colors do not have a sufficient contrast ratio", failing element: WhatsApp Us).
- **Principle and criterion:** Perceivable; 1.4.3 Contrast (Minimum), AA.
- **Who it affects and how:** people with low vision, older customers whose contrast sensitivity has dropped, and anyone reading a phone in sunlight while out running errands, which the first brief says is how Ama's customers find her. They may not be able to read what the button is for.
- **Found by:** WAVE and Lighthouse, confirmed with the WebAIM Contrast Checker.
- **Why it ranks here:** it is a clear, measurable failure on the quickest route to contact Ama. It ranks below findings 1 and 2 because it affects one button, and the "Call 0244 000 000" link, which passes contrast at 7.51:1, gives people another way to reach her.

### 4. The WhatsApp button is announced with different words from the ones on screen

- **Where:** the "WhatsApp Us" button.
- **What happens:** the button shows "WhatsApp Us", but its `aria-label` replaces that with "Chat with Ama on WhatsApp". For a screen reader user on their own this works well, because the spoken name is clear and descriptive. The problem is for people who use the visible words: someone using voice control who says "click WhatsApp Us" may not activate it, because the words they can see are not in the button's name.
- **How to reproduce:**
  1. Turn on Narrator (Ctrl + Windows + Enter) and Tab to the button.
  2. Compare what Narrator says with the text on the button.
- **Evidence:** Narrator announced "link, Chat with Ama on WhatsApp", while the button on screen reads "WhatsApp Us". The code is `aria-label="Chat with Ama on WhatsApp"` with the visible text `WhatsApp Us`. The DevTools inspect tool shows the button's Name as "Chat with Ama on WhatsApp" while the button reads "WhatsApp Us". WAVE's ARIA panel shows `aria-label="Chat with Ama on WhatsApp"` directly beside the visible "WhatsApp Us". WAVE lists it as an ARIA feature, not an error, so on WAVE alone the mismatch has to be judged by hand. Lighthouse does flag it: in the saved report, `label-content-name-mismatch` fails on WhatsApp Us with "Text inside the element is not included in the accessible name". That audit has weight 0, so it does not lower the 96 score, and it does not appear in the score summary.
- **Principle and criterion:** Operable; 2.5.3 Label in Name (A).
- **Who it affects and how:** people who control their phone or computer by voice, often because of a motor disability, tremor or repetitive strain injury, who activate controls by saying the words they see. Also screen reader users who are helped by someone sighted: the helper says "tap WhatsApp Us" and the screen reader user hears something different.
- **Found by:** Lighthouse (`label-content-name-mismatch`, in the full report), with the label shown by WAVE, confirmed with Narrator.
- **Why it ranks here:** it is a Level A failure, but it affects a smaller group than findings 1 to 3, and the fix is a one-line change: remove the `aria-label` and make the visible text say "Chat with Ama on WhatsApp", or start the `aria-label` with the visible words.

### 5. Neither form tells the person what happened, and an Ask Ama question goes nowhere

- **Where:** the Ask Ama form and the Get In Touch form.
- **What happens:** in Ask Ama, pressing Submit, with or without anything typed, sends the page back to the top. The typed question stays in the fields, but nothing is sent and nothing tells the person so. The text above the form also says "Call us on 0244 000 000, or ask Ama in the shop", which contradicts the form under it. In Get In Touch, empty required fields are caught, but a completed message reloads the page at the top with empty fields and no confirmation, and the name, phone number and message appear in the address bar.
- **How to reproduce:**
  1. Type a name and question into Ask Ama and press Submit.
  2. The page jumps to the top. Scroll back down: the text is still there, and no message says whether it was sent.
  3. Fill in Get In Touch and press Send Message. The page reloads at the top, the fields are empty, and the address bar shows `?fullName=...&phone=...&message=...`.
- **Evidence:** the Ask Ama fields have no `name` attribute, and the form has no `action` and no `required` fields, so nothing can be submitted. Get In Touch has no `action`, so its answers go into the page address instead of to Ama. After pressing Submit, Narrator said "Loading complete" and announced that "Ama's Plant Corner | Plant Shop In Accra" had finished loading, then started reading the whole page again from the top. It gave no word about the question.
- **Principle and criterion:** Understandable. No WCAG failure confirmed; the closest criteria are 3.3.1 Error Identification (A) and 3.3.2 Labels or Instructions (A), and neither is strictly broken. I record it as a usability problem because of who it hurts.
- **Who it affects and how:** everyone who uses the forms. Keyboard and screen reader users lose their place, because the page jumps back to the top; a screen reader user has to listen to the whole page again from the start to get back to the form, and never hears whether the question arrived. People with memory or cognitive disabilities, and anyone typing slowly on a phone, are left unsure whether Ama received their question, so they may give up or send it again.
- **Found by:** keyboard testing of the main form journey.
- **Why it ranks here:** it affects every form user, which is why it ranks above finding 6, but Call and WhatsApp still work, so customers can reach Ama another way.

### 6. The Facebook and Instagram links go nowhere

- **Where:** Find Us, "Follow us: Facebook . Instagram".
- **What happens:** pressing Enter on either link does nothing useful; no Facebook or Instagram page opens.
- **How to reproduce:** Tab to Facebook and press Enter.
- **Evidence:** both use `href="#"`. In DevTools they measure 67 × 21px (Facebook) and 71 × 21px (Instagram). They sit inside a line of text, so WCAG's inline exception to 2.5.8 Target Size (Minimum) applies, and Lighthouse passed "Touch targets have sufficient size and spacing". They are still small for a thumb.
- **Principle and criterion:** Operable. No WCAG failure confirmed; recorded as a functional problem.
- **Who it affects and how:** anyone who wants to follow Ama online. The links look and sound like working links, so people try them and are left wondering whether something went wrong.
- **Found by:** keyboard testing.
- **Why it ranks here:** it is optional and affects few visitors, and the main content is unaffected. It ranks above finding 7 because people who tap these links see them fail, while the missing autocomplete attributes in finding 7 caused no visible problem in the browsers I tested.

### 7. The name and phone fields do not state what they are for in the code

- **Where:** "Enter your name" (Ask Ama), and "Full name" and "Phone Number" (Get In Touch).
- **What happens:** the fields do not declare that they ask for a name and a phone number. Browsers have to guess. Both browsers I tested guessed correctly: Microsoft Edge on Windows and Chrome on a MacBook offered to fill in the name and phone number on Get In Touch. Assistive tools that help people fill in forms read the declared purpose, not a browser's guess, and other browsers may not guess.
- **How to reproduce:**
  1. Open DevTools, inspect the Full name field and look at its attributes.
  2. There is `id`, `name`, `type` and `required`, but no `autocomplete`. The same is true of the Phone Number and Enter your name fields.
- **Evidence:** none of the three fields has an `autocomplete` attribute (`autocomplete="name"` and `autocomplete="tel"` are missing). In Edge and in Chrome on the MacBook, autofill still filled Full name and Phone Number on Get In Touch, most likely guessed from `name="fullName"` and `name="phone"`. The message field was not filled, which is expected: free text has no autofill value. I did not test Safari or Firefox.
- **Principle and criterion:** Perceivable; 1.3.5 Identify Input Purpose (AA). The criterion asks for the purpose to be stated in the code so that browsers and assistive tools can rely on it, not guess it.
- **Who it affects and how:** people with motor difficulties or tremors, people with memory or cognitive disabilities who find it hard to recall or type details, and older customers on small phone keyboards. Where the browser guesses correctly, as Edge and Chrome did, nothing is lost; where it does not, or where a tool relies on the declared purpose, they have to type every detail by hand.
- **Found by:** reading the code and inspecting the fields in DevTools, then testing autofill in Edge and Chrome. Lighthouse marked "autocomplete attributes are used correctly" as not applicable: it checks only `autocomplete` values that exist, so it cannot notice they are missing.
- **Why it ranks here:** it is a real AA failure, but in both browsers I tested people still got autofill, so it causes almost no difficulty today. I rank it below finding 6 because the social links visibly fail when tapped, whereas this one only matters if a browser or tool cannot guess. The fix is two attributes.

### 8. Keyboard users must pass the whole menu first, and the WhatsApp button sits outside every landmark

- **Where:** the header, and the WhatsApp button after the footer.
- **What happens:** there is no skip link, so a keyboard user presses Tab five times before reaching the content. The WhatsApp button sits after the footer, outside `main` and `footer`, so someone moving between landmarks with a screen reader will not come across it.
- **Evidence:** the first Tab stop is "Ama's Plant Corner"; there is no skip link. WAVE's Structure tab lists Header (with Navigation), Main and Footer, and the WhatsApp link is inside none of them; its Order tab lists it as the 21st and last focusable item.
- **Principle and criterion:** Operable; 2.4.1 Bypass Blocks (A). This criterion is met, because the landmarks and headings let screen reader users skip ahead. I record this as best practice.
- **Who it affects and how:** keyboard users, a little extra effort on every visit.
- **Found by:** keyboard testing and WAVE's Structure and Order tabs. Lighthouse did not flag the missing skip link; it marked "Skip links are focusable" as not applicable.
- **Why it ranks here:** it is not a failure, and the cost is a few extra key presses.

## What works well

- **Headings:** one `h1`, then `h2` for every section and `h3` for each product, with no skipped levels. A screen reader user can move through the page by heading.
- **Landmarks:** `header`, `nav`, `main` and `footer` are all present.
- **Keyboard:** every link, guide, field and button can be reached with Tab, in the same order they appear on screen, and each shows a 3px red-brown (terracotta) outline that is easy to follow. Against the page background the outline measures 5.1:1.
- **Care guides:** built with `details` and `summary`, so they open and close with Enter. Narrator announced each guide as "collapsed" or "expanded", and read the guide text once it was opened.
- **Screen reader:** Narrator read each product photo's description and the text beneath it, for example "Selection of houseplants, graphic", then the product name and price. Every form field was announced with its label, for example "Enter your name, edit" in Ask Ama, and "Full name, edit, required" in Get In Touch.
- **Form labels:** every field has a visible label tied to it with `for` and `id`.
- **Contrast:** every other text I inspected passes 4.5:1: headings, nav links, care guides and product names 14.13:1; body text and form labels 12.76:1; prices 7.38:1; the Call link, social links and both submit buttons 7.51:1; the See what we sell button 5.64:1 (confirmed in WebAIM).
- **Images:** each product photo has alt text naming what it shows.
- **Zoom and reflow:** at 200%, 400% and 500% browser zoom the page rearranges into a single column and scrolls only up and down, and at 320px wide with normal text there is no sideways scrolling.
- **Tap targets:** measured in DevTools at 375px, every control is at least 24 × 24px: nav links 48px tall, See what we sell 171 × 48, Call 133 × 40, care guides 342 × 56, Submit and Send Message 343 × 48, WhatsApp Us 132 × 51. Only the inline social links are shorter (21px), which WCAG allows for links inside a sentence.

## Not tested, and limits of this audit

- I used Narrator only, not NVDA, JAWS, VoiceOver or TalkBack.
- I tested in Chrome on a MacBook, Microsoft Edge on a Windows laptop, and Safari on an iPhone 14. I did not test on an Android phone or in Firefox.
- I could not check whether form messages reach Ama, because neither form sends anywhere yet.
- This audit does not establish full WCAG 2.2 conformance.
