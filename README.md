# ama_plant_corner
## Sketch 
<img width="765" height="1020" alt="updated001" src="https://github.com/user-attachments/assets/0ed14fb0-a0ce-4fb5-b4a2-eb7f1763b54f" />
<img width="765" height="1020" alt="updated002" src="https://github.com/user-attachments/assets/badd6dfc-1cc6-401e-83ab-c41f2938beed" />

## Short note based on the sketch
- Ama’s customers are mostly on phones and often standing nearby, so I designed one column in the order a visitor needs things. The hero comes first and says plainly what the shop sells and that Ama gives advice, replacing the unprovable “#1 destination” claim; its button, “See what we sell”, names what it does. Find Us (address, hours, phone, social) comes straight after, because someone deciding whether to walk in needs where and when before what, even though it pushes products down slightly. What We Sell, About Ama and Plant Care follow, with the care tips collapsed so the page stays short and Ama’s help is visible before a visitor commits. Ask Ama sits right after Plant Care because plant questions come up while reading the tips; it is for plant advice, and its copy promises only an answer at the visit or a call for urgent ones. Get in touch comes last for shop and order matters, with just a name, phone number and message, so there is one clear way for Ama to reply. On desktop the order stays the same and sections sit side by side.

## A short written diagnosis
1. The page was never built for phones
   - Symptom : on a phone the page looks like a tiny desktop site , and  the text, address and hours are hard to read.
   - Root cause : the <head>  has no viewport meta tag , the CSS has no @media rules , and the header, banner, content and footer are fixed at 900px plus padding .
   - Why it matters : Ama's customers search on phones while nearby .  If they can't read the hour or address within  seconds , they don't walk in.
  
 2. Layout rules belong to individual sections not the page.
    - Symptom: “Get In Touch” sits flush left on a grey background, and the footer is narrower than the content above it.
    - Root cause: each section sets its own width and margin by ID, and the file has no rule at all for #contact, so it gets none.         The footer’s padding is added on top of its 900px width because box-sizing is never set, so it measures 924px against 940px           above. There are also no <header>, <main> or <footer> landmarks.
    - Why it matters : the contact section is where  the visitor becomes a customer and it looks like an afterthought.
3. The interface was never finished 
    - Symptom: nav links go nowhere, Plant Care says “click a topic” but nothing opens, and the forms don’t seem to send.
    - Root cause: every nav link is href="#". The plant care triggers are plain divs, with no CSS to hide ".guide-body" and nothing styling them as clickable. Both submit buttons are type="button", neither form has an action, and the fields have placeholders but no labels.
    - Why it matters : the page promises things it can't do. A visitor who sends a question and gets nothing back stops trusting the shop and Ama never knows she lost a  customer.


4. The page doesn't build trust
    - Symptom: the images are grey boxes, and the page makes claims it can’t back up.
    - Root cause: the three image files the HTML points to don’t exist. Nothing handles that failure: every image has alt="image", so no description or label replaces the missing photo, and the CSS gives the images a grey background (
#cccccc), which makes the gap look like a design choice.
    - Why it matters: a plant shop with no plants shown, and nothing saying what each box was meant to be, looks abandoned. A visitor can’t tell what Ama sells, which is the question the page exists to answer.
  
## Short audit of the site
#### Phone readability and layout ( Highest priority)
   -What  I did : I added a meta tag with a name attribute whose value if viewport , so it resizable at different screen sizes . I wrote a rule for the desktop screen size (@media ( min-width:  48rem) ) so the web page can also fit desktop screens
- Why this first: the brief addressed the fact that Ama's customer's couldn't read the text on phones . The root cause no viewport tag and fixed width so the page shrank  as a desktop page on phones
- The website is  now responsive , on both mobile and  desktop

#### Walk-in information and page order
- What I did: put Find Us directly under the hero, with the address, hours and a tap-to-call link, and changed the hero button to “See what we sell”.
- Why: a nearby customer decides from the first screens. The cost is that products sit slightly lower, which I accepted deliberately.

#### Semantic HTML
**What I did**
- One `<h1>`, then `<h2>` and `<h3>` in order, with no skipped levels.
- Landmarks: `<header>`, `<nav>`, `<main>`, `<section>`s and `<footer>`.
- The care guides use `<details>` and `<summary>`, so they open and close without JavaScript and work from the keyboard.
- `<address>` holds the contact details, and nav links point to real section IDs.
- The contact section now sits inside `<main>`

**Why**
The old page was built from `<div>`s, had no landmarks, and left the contact section outside the layout. Landmarks give screen-reader and keyboard users a map of the page, and `<details>` makes "click a topic" actually work without scripts.
 
### Visual consistency
**What I did**
- Every colour, font size and space comes from a CSS variable in `:root`.
- **Palette:** warm cream background, leaf green as the primary colour, and terracotta (a pot colour) as a sparing accent for the main call to action.
- **Type scale:** one 1.25× ratio (1, 1.25, 1.56 and 1.953rem), with Georgia for headings and the system font for body text. System fonts mean nothing loads from outside, which suits slow phone connections.
- **Spacing:** a 4px grid from 0.25rem to 4rem. Small steps sit inside components, and large steps sit between sections.
- Cards, forms and buttons share one pattern: the same border, radius and padding.

**Why**
Ama wants the site to feel like her shop: calm, and not "anybody's website". The old file used unrelated blues, greens and oranges chosen without a system. One set of tokens makes every choice traceable to the brief.
 
---
## What I left open

I am listing these so the limits are clear.
 
- **The forms are front-end only.** There is no `action` and no script, so neither form can send a message to Ama yet. Sending needs behaviour added later.
- **Product photos are stand-ins.** They are stock photos from [source and licence], and should be replaced with photos of Ama's actual stock.
- **Placeholders:** the phone number (0244 000 000) and the Facebook and Instagram links.
- **About Ama has no photo.** A stock portrait would imply a real person, which works against "trustworthy".

## One improvement
I included a floating whatsapp button , where the customers can chat Ama is they don't want to call or send the message through the site.
The whatsApp button is an easy to way to reach Ama , which reduces friction , after seeing a plant you can  just tap on it and it takes you to a prefilled message "Hey I'm lokking for this plant.."
