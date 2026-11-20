# Accessibility testing log: Ama's Plant Corner by Johnson Saka

- Site tested: [https://johnsonwalker-cmd.github.io/ama_plant_corner/](https://johnsonwalker-cmd.github.io/ama_plant_corner/)
- Tools: WAVE, Lighthouse, browser DevTools, WebAIM Contrast Checker, screen reader [Narrator]
- Devices and browsers: Chrome on a MacBook; Microsoft Edge on a Windows laptop (HP)
- Date: 20th November, 2026

This log records each check, what happened, and whether a tool or a manual test found it. It is the evidence behind the audit.

## 1. Automated tools

| Section | Tool | What it reported | My judgement | Found by |
| --- | --- | --- | --- | --- |
| Whole page | WAVE (Chrome extension) | 0 errors, 1 contrast error, 0 alerts, 9 features (3 alternative text, 5 form labels, 1 language), 15 structural elements (1 h1, 6 h2, 3 h3, 1 list, header, navigation, main, footer), 1 ARIA item. AIM score 9.4 out of 10 | The structure and labels it found are real; I confirmed them by hand. A high score did not reveal findings 1, 2, 5, 6 or 7 | Tool |
| WhatsApp button | WAVE contrast | "Very low contrast (1.98:1)" on "WhatsApp Us", its only contrast error | Confirmed 1.98:1 in WebAIM, fails 4.5:1 (finding 3) | Tool + manual check |
| WhatsApp button | WAVE ARIA | Lists `aria-label="Chat with Ama on WhatsApp"` as an ARIA feature, not an error | The spoken name does not contain the visible words "WhatsApp Us" (finding 4). WAVE shows the label but does not judge it; Lighthouse does (below) | Tool shows evidence only |
| Whole page | WAVE Order tab | 21 focusable items: shop name, 4 nav links, See what we sell, Call, Facebook, Instagram, 4 care guides, Ask Ama fields and Submit, Get In Touch fields and Send Message, then "Chat with Ama on WhatsApp" last | Matches my keyboard test and the visual order | Tool + manual check |
| Whole page | WAVE Structure tab | Header (containing Navigation), Main (all headings), Footer. The WhatsApp link does not appear inside any of them | The button sits outside every landmark (finding 8) | Tool + manual check |
| Whole page | Lighthouse 13.4.1 accessibility (mobile, emulated Moto G Power, 20 Nov 2026 8:33 GMT) | Score 96. Two failed audits: colour contrast, and "Elements with visible text labels do not have matching accessible names" (shown with weight 0, so it does not lower the score). 23 passed, 10 to check manually | A 96 score does not cover text size, zoom or content covered by the floating button | Tool |
| WhatsApp button | Lighthouse contrast | "Background and foreground colors do not have a sufficient contrast ratio." Only failing element: WhatsApp Us | Agrees with WAVE and WebAIM: 1.98:1 (finding 3) | Tool + manual check |
| WhatsApp button | Lighthouse | Failed `label-content-name-mismatch`: "Text inside the element is not included in the accessible name", element WhatsApp Us (found in the saved HTML report, below the contrast failure). It still passed "Links have a discernible name", which only checks that a name exists | Confirms finding 4. Because the audit has weight 0, the score hides it | Tool + manual check |
| Form fields | Lighthouse | "autocomplete attributes are used correctly" marked not applicable | Lighthouse only checks `autocomplete` values that exist, so it cannot see that they are missing (finding 7) | Manual only |
| Tap targets | Lighthouse | Passed "Touch targets have sufficient size and spacing" | Agrees with my measurements; the 20px social links fall under the inline exception | Tool + manual check |
| Skip link | Lighthouse | "Skip links are focusable" not applicable, because there is no skip link; nothing flagged | Not a failure; landmarks and headings are present (finding 8) | Manual only |
| Product cards at large text | WAVE and Lighthouse | Not reported | Both test the page at the default text size, so they cannot see finding 2 | Manual only |
| WhatsApp button covering content | WAVE and Lighthouse | Not reported | Found by zoom testing (finding 1) | Manual only |
| Forms, autocomplete, social links, skip link | WAVE | Not reported; the 5 labels were listed as features | Findings 5, 6, 7 and 8 were found by hand | Manual only |

## 2. Keyboard (Microsoft Edge on Windows, no mouse)

| Section | What I did | What happened | Result |
| --- | --- | --- | --- |
| Whole page | Pressed Tab from the address bar, then Shift + Tab back | Every stop showed a red-brown (terracotta) outline, and the order matched the order on screen: shop name, 4 nav links, See what we sell, Call 0244 000 000, Facebook, Instagram, 4 care guides, Ask Ama fields and Submit, Get In Touch fields and Send Message, WhatsApp Us | Pass |
| Header | First Tab press | Lands on the shop name, "Ama's Plant Corner"; there is no skip link | Best practice (finding 8) |
| What We Sell | Tab from Instagram | Focus goes straight to the first care guide and skips the product cards. The cards contain no links or buttons, so Tab correctly passes over them; I could read them by scrolling with the arrow keys or Space | Pass (expected behaviour) |
| See what we sell | Tab to it, Enter | Moves to the What We Sell section | Pass |
| Care guides | Tab to each guide, Enter to open, Enter to close | Each opened and closed | Pass |
| Facebook and Instagram | Tab to each, Enter | Nothing useful happened; no social page opened | Functional (finding 6) |
| Ask Ama, empty | Tab to Submit, Enter | Page went back to the top; no message, no error | Usability (finding 5) |
| Ask Ama, filled in | Typed a name and question, Submit | Page went back to the top; my text was still in the fields, but nothing confirmed it was sent, and the form has nowhere to send it | Usability (finding 5) |
| Get In Touch, empty | Tab to Send Message, Enter | Focus moved to Full name with "Please fill out this field." | Pass |
| Get In Touch, filled in | Filled all fields, Send Message | Page reloaded at the top, fields empty, and my name, phone number and message appeared in the address bar. No confirmation | Usability (finding 5) |
| WhatsApp Us | Tab to it, Enter | Opened WhatsApp | Pass |
| Instagram at 375px | Tabbed to it in the DevTools phone view | About a third of the link sat under the WhatsApp button | Not a 2.4.11 failure (not fully hidden); supports finding 1 |
| Form fields, autofill | Edge on Windows, and Chrome on the MacBook, tapped into Get In Touch | Both browsers offered to fill Full name and Phone Number even though the fields have no `autocomplete`, most likely guessed from `name="fullName"` and `name="phone"`. The message field was not filled, which is expected for free text. (In Edge it stopped appearing after I dismissed the suggestion, which is normal browser behaviour.) | Little real-world impact in the browsers tested; the code still does not declare the purpose (finding 7) | Manual |

## 3. Zoom, text size, reflow and tap targets

| Test | Setting | What happened | Result |
| --- | --- | --- | --- |
| 320px reflow | DevTools device toolbar, 320 wide, normal text | No sideways scrolling. While scrolling, the WhatsApp Us button stayed on screen and covered content beneath it | Reflow passes; overlap supports finding 1 |
| Page zoom 200% | Ctrl/Cmd + to 200%, Chrome on a MacBook | I could scroll and see everything, with no sideways scrolling. The WhatsApp Us button covered part of the What We Sell intro ("Whether you are a first-time plant owner"); scrolling moved the text clear. Screenshot [evidence/04-200-zoom-button-over-text.png](evidence/04-200-zoom-button-over-text.png) | Reflow passes; overlap supports finding 1 |
| Page zoom 500% | Ctrl/Cmd + to 500% | Everything was larger and readable, with no sideways scrolling, but the WhatsApp Us button sat over the opening hours in Find Us and hid "to Saturday" and "6:00pm. Closed on". Screenshot [evidence/05-500-zoom-button-over-hours.png](evidence/05-500-zoom-button-over-hours.png) | Reflow passes; overlap supports finding 1 |
| Page zoom 400% | Ctrl/Cmd + to 400%, scrolled the whole page to the very bottom | The page rearranged into a single column, one section under another, and scrolled only up and down. The WhatsApp Us button covered content as at 200% and 500%. At the very bottom it permanently hid part of the copyright line ("Plant Corner. All" and "ved."), which no scrolling can uncover. Screenshot [evidence/06-400-zoom-footer-covered.png](evidence/06-400-zoom-footer-covered.png) | Reflow (1.4.10) passes; overlap fails in practice (finding 1) |
| Text only, Very large | Chrome Settings → Appearance → Font size: Very large; DevTools device toolbar at 375 wide | I had to scroll the page sideways to see all of the content, and the WhatsApp Us button covered some of it, including the price of a product. Screenshot [evidence/01-very-large-text-products.png](evidence/01-very-large-text-products.png) | Fail (findings 1 and 2) |
| Real phone, larger text | iPhone 14, Safari, text made larger with the page settings button | The WhatsApp button grew to about a quarter of the screen, wrapped onto two lines and spilled off the left edge. It covered the "Plant care" menu link, the Find Us address and Call link, and lines of About Ama. The headline ran off the right edge ("Welco…"). Screenshots 07 to 10 | Fail (findings 1 and 2) |
| Real phone, Call | Tapped Call 0244 000 000 | The phone offered to call +233 24 400 0000 (screenshot 11) | Pass |
| Real phone, WhatsApp | Tapped WhatsApp Us | Opened WhatsApp with "Hello Ama, I'm interested in your plants." already typed (screenshot 12) | Pass |
| Tap targets | Edge DevTools inspect tool on the Windows laptop, iPhone SE view (375 × 667) | Measured width × height: See what we sell 171 × 48; nav links What we sell 92 × 48, Plant care 72 × 48, About 45 × 48, Contact 56 × 48; Call 0244 000 000 133 × 40; care guide (Houseplants) 342 × 56; Submit 343 × 48; Send Message 343 × 48; WhatsApp Us 132 × 51; Facebook 67 × 21; Instagram 71 × 21 | All above the 24 × 24 minimum except the height of Facebook and Instagram (21px). They sit inside a line of text, so the WCAG inline exception applies (finding 6) |
| Accessible names | Same inspect tool, Accessibility panel | Every control's Name matched its visible text, except WhatsApp Us, whose Name is "Chat with Ama on WhatsApp" | Confirms finding 4 |
| WhatsApp button at 375px | Seen while inspecting | The button sat over the opening hours ("Closed on Sundays"), over a product photo, over the Get In Touch intro and over the copyright line, depending on scroll position | Supports finding 1 |

## 4. Contrast

Measured with the Edge DevTools inspect tool on the Windows laptop (iPhone SE view), and confirmed in the WebAIM Contrast Checker on the MacBook for the three key pairs.

| Text | Colours (text on background) | Ratio | Needs | Result | Measured with |
| --- | --- | --- | --- | --- | --- |
| WhatsApp Us button | `#FFFFFF` on `#25D366` | 1.98:1 | 4.5:1 | Fail. WebAIM: fails AA for normal text, large text (3:1) and interface components | DevTools (warning icon) and WebAIM |
| See what we sell button | `#FFFDF8` on `#A64B2A` | 5.64:1 | 4.5:1 | Pass AA (fails AAA, which is not required) | DevTools and WebAIM |
| Headings, nav links, care guides, product names | `#2B2A26` on `#FFFDF8` | 14.13:1 | 4.5:1 | Pass AA and AAA | DevTools and WebAIM |
| Body text and form labels (About Ama, Enter your question) | `#2B2A26` on the page background | 12.76:1 | 4.5:1 | Pass | DevTools |
| Prices ("Starting from GH₵ 25") | `#5A5448` on the card | 7.38:1 | 4.5:1 | Pass | DevTools |
| Call link, Facebook, Instagram, Submit, Send Message | `#2F5D3A` text, or `#FFFDF8` on `#2F5D3A` | 7.51:1 | 4.5:1 | Pass | DevTools |

The WhatsApp button is the only text on the page that fails. Every other element I inspected showed a green tick.

## 5. Screen reader (Narrator with Microsoft Edge, Windows laptop)

| Section | What I did | What Narrator said | Result |
| --- | --- | --- | --- |
| First product card | Moved through it with Caps Lock + Right arrow | "Selection of houseplants, graphic", then the product name and price | Pass |
| Care guide | Tab to Houseplants, Enter to open, Caps Lock + Right arrow | Announced "collapsed", then "expanded" after Enter, and read the guide text | Pass |
| WhatsApp button | Tab to it | "link, Chat with Ama on WhatsApp". The visible text is "WhatsApp Us" | Name is clear for screen reader users, but does not contain the visible words (finding 4) |
| Ask Ama, name field | Tab to it | "Enter your name, edit", then the placeholder "Your name". Not announced as required | Labelled; pass |
| Get In Touch, full name field | Tab to it | "Full name, edit, required" | Labelled and marked required; pass |
| Ask Ama after Submit | Submitted a question | "Loading complete", then the page title "Ama's Plant Corner \| Plant Shop In Accra has finished loading", then it started reading the whole page again from the top. Nothing said whether the question was sent | Usability (finding 5) |

## 6. Limits

- Narrator only; no NVDA, JAWS, VoiceOver or TalkBack.
- Chrome on a MacBook, Edge on a Windows laptop and Safari on an iPhone 14 were tested; Android and Firefox were not.
- Form delivery to Ama could not be checked, because neither form sends anywhere.
