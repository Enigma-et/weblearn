import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  Search, Sun, Moon, Monitor,
  Globe, Wrench, FileCode, Palette, Braces, Atom,
  FileType2, Package, Route, Zap, Server, Code2,
  FlaskConical, Accessibility, Gauge, Sparkles, Layers,
} from "lucide-react";

const SECTION_ICONS = {
  "web-foundation":    Globe,
  "dev-environment":   Wrench,
  "html":              FileCode,
  "css":               Palette,
  "javascript":        Braces,
  "react":             Atom,
  "typescript":        FileType2,
  "libs-ecosystem":    Package,
  "tanstack":          Route,
  "bun":               Zap,
  "backend":           Server,
  "python-fastapi":    Code2,
  "testing-debugging": FlaskConical,
  "accessibility":     Accessibility,
  "performance":       Gauge,
  "ai-assisted":       Sparkles,
  "capstone":          Layers,
};

// ═══════════════════════════════════════════════════════════════════════
//  THEME & FONTS
// ═══════════════════════════════════════════════════════════════════════

const FONTS = {
  display: "'Fraunces', 'Playfair Display', Georgia, serif",
  body: "'Source Serif 4', 'Source Serif Pro', Georgia, serif",
  mono: "'JetBrains Mono', 'DM Mono', 'IBM Plex Mono', monospace",
};

// Colors are driven via CSS custom properties on :root (see GlobalStyles).
// Keeping keys semantic makes toggling dark ↔ light trivial.

// ═══════════════════════════════════════════════════════════════════════
//  CURRICULUM DATA
//  Code blocks in lesson bodies use a simple convention:
//  lines indented with 4+ spaces are rendered as a code block.
// ═══════════════════════════════════════════════════════════════════════

const curriculum = [

  // ────────────────────────────────────────────────────────────────────
  //  00 — Foundation: How the Web Works
  // ────────────────────────────────────────────────────────────────────
  {
    id: "web-foundation",
    part: "00",
    partLabel: "Foundation",
    color: "#94A3B8",
    emoji: "🌐",
    title: "How the Web Works",
    subtitle: "Before writing a single line of code",
    lessons: [
      {
        title: "What happens when you visit a website",
        body: `You type "google.com" and press Enter. Here is what happens, in order:

1.  Your browser asks a DNS server, "what is the IP address for google.com?"
2.  DNS replies with something like "142.250.80.46"
3.  Your browser sends a REQUEST to that address
4.  Google's server sends back a RESPONSE — a bundle of files
5.  Your browser reads those files and paints the screen

The web is, at its core, computers requesting and serving files. Everything else is layered on top of that one idea.`,
      },
      {
        title: "Client vs. Server",
        body: `This is the most important mental model in web development.

CLIENT = your browser (Chrome, Safari, Firefox)
  • runs on your computer
  • displays the website
  • handles what you see and interact with

SERVER = a computer somewhere in the world
  • runs 24/7 waiting for requests
  • stores data and runs business logic
  • sends files (or data) back to the client

Restaurant analogy:
    Client    →  you, the customer
    Server    →  the kitchen
    Request   →  your order
    Response  →  your food

Frontend code runs in the CLIENT. Backend code runs on the SERVER. That's the whole split.`,
      },
      {
        title: "The three languages of the web",
        body: `Every website is built with exactly three technologies. They have specific jobs.

HTML — Structure.
    "What is on this page?"
    Headings, paragraphs, buttons, images, links.
    Think: the bones of a building.

CSS — Style.
    "What does it look like?"
    Colors, fonts, layout, spacing, animation.
    Think: the paint and furniture.

JavaScript — Behavior.
    "What does it DO?"
    Clicks, animations, data loading, interactions.
    Think: the electricity and plumbing.

Without CSS  → a plain, unstyled page.
Without JS   → a page that can't respond to anything.
Without HTML → literally nothing.`,
      },
      {
        title: "Why these three matter in 2026",
        body: `You will hear about React, TypeScript, Tailwind, Next.js, and hundreds of other tools. All of them, ultimately, produce HTML, CSS, and JavaScript. The browser only speaks those three.

This means two things:

1.  You cannot skip the fundamentals. Every framework rests on them.
2.  You don't need to learn every framework. Pick one after you understand the fundamentals, and the rest become variations on a theme.

The rest of this curriculum follows that order: fundamentals first, tooling later. Resist the urge to jump ahead.`,
      },
    ],
    quiz: [
      {
        q: "Where does frontend code run?",
        options: ["On the server", "In the user's browser", "Inside the database", "In the DNS lookup"],
        correct: 1,
        explain: "Frontend code runs on the client — the user's browser. Backend code runs on a server somewhere in the world.",
      },
      {
        q: "Which language is responsible for STYLE (colors, fonts, layout)?",
        options: ["HTML", "JavaScript", "CSS", "SQL"],
        correct: 2,
        explain: "CSS handles visual styling. HTML is structure. JavaScript is behavior.",
      },
      {
        q: "What does a browser receive when you visit a webpage?",
        options: ["A running program", "A bundle of files (HTML/CSS/JS)", "A database snapshot", "The server's source code"],
        correct: 1,
        explain: "The server sends back files — HTML, CSS, JavaScript, images — that the browser assembles into the page.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  01 — Dev Environment & Tools
  // ────────────────────────────────────────────────────────────────────
  {
    id: "dev-environment",
    part: "01",
    partLabel: "Foundation",
    color: "#6EE7B7",
    emoji: "🔧",
    title: "Dev Environment & Tools",
    subtitle: "The tools every developer uses daily",
    lessons: [
      {
        title: "The tools you actually need",
        body: `Before you write code, you need four things on your machine. That's it — no more.

1.  A TEXT EDITOR
    Where you write code.
    Recommended: VS Code (free, most popular).
    Alternatives: Cursor, Zed, WebStorm.

2.  A WEB BROWSER
    Where you see your code.
    Use Chrome or Firefox — both have excellent developer tools.

3.  A TERMINAL
    A text interface to run commands.
    Mac/Linux: "Terminal" is built in.
    Windows: use PowerShell or install Windows Terminal.

4.  GIT
    Tracks changes to your code.
    Install from git-scm.com.

Everything else — frameworks, libraries, databases — comes later, per project.`,
      },
      {
        title: "The terminal, minimum viable",
        body: `The terminal scares beginners. It shouldn't. You only need a handful of commands.

NAVIGATING

    pwd                 print current folder path
    ls                  list files in current folder
    cd my-folder        change directory into my-folder
    cd ..               go up one level
    cd ~                go to your home folder

CREATING & DELETING

    mkdir my-project    make a folder
    touch index.html    create an empty file
    rm file.txt         delete a file
    rm -r folder        delete a folder (careful!)

READING & OPENING

    cat file.txt        print file contents
    code .              open current folder in VS Code

A dollar sign ($) at the start of a line in tutorials means "type this in the terminal." You don't type the dollar sign itself.`,
      },
      {
        title: "Git — tracking your code",
        body: `Git is a tool that records every change you make to your code. Think of it as "save points" for your project.

Why it matters:
  • undo mistakes, even weeks later
  • see exactly what changed, and when
  • collaborate without overwriting each other's work
  • host your code on GitHub for free

THE CORE WORKFLOW

    git init                      initialize a new repo (once)
    git status                    see what changed
    git add .                     stage all changes
    git commit -m "add navbar"    save a snapshot with a message
    git log                       view history

The three-stage mental model:

    working directory  →  staging area  →  repository
         (edit)           (git add)        (git commit)

"git add" is you saying "these changes are ready."
"git commit" is you taking the snapshot.`,
      },
      {
        title: "GitHub — where code lives online",
        body: `Git runs on your computer. GitHub is a website that hosts Git repositories in the cloud.

Why you need a GitHub account:
  • Portfolio — employers will look at it
  • Backup — your code is safe if your laptop dies
  • Collaboration — work with others on the same project
  • Deploy — services like Vercel connect directly to your GitHub

CONNECTING LOCAL TO GITHUB

1.  Create a repo on github.com (no files yet)
2.  On your machine, link it:

        git remote add origin https://github.com/you/repo.git

3.  Push your code up:

        git push -u origin main

After that, every change you want to sync is just:

    git add .
    git commit -m "what I did"
    git push

This is the daily loop of almost every professional developer.`,
      },
      {
        title: "VS Code essentials",
        body: `VS Code is your main workspace. A few things to set up on day one.

MUST-HAVE SHORTCUTS  (Mac: Cmd. Windows/Linux: Ctrl)

    Cmd + S           save file
    Cmd + P           quick file search
    Cmd + Shift + P   command palette (every action)
    Cmd + /           comment / uncomment line
    Cmd + D           select next matching word
    Option + click    multiple cursors
    F12               go to definition

ESSENTIAL EXTENSIONS

    Prettier          auto-formats your code on save
    ESLint            catches errors as you type
    GitLens           supercharges Git inside the editor
    Live Server       (for plain HTML/CSS) preview on save

Enable "format on save" in VS Code settings. You will never manually indent again.`,
      },
      {
        title: "Node.js & package managers",
        body: `Node.js lets JavaScript run outside the browser. You install it once, and it comes with npm.

npm = Node Package Manager. It installs code other people wrote.

    npm init -y                    create a new project (package.json)
    npm install react              install a package
    npm install --save-dev vitest  install a dev-only package
    npm run dev                    run a script defined in package.json
    npm uninstall lodash           remove a package

Every modern JavaScript project has a package.json file. It lists your project's dependencies — the packages it needs to run.

CLONING SOMEONE ELSE'S PROJECT

    git clone https://github.com/user/repo.git
    cd repo
    npm install                    downloads all dependencies
    npm run dev                    starts the project

ALTERNATIVES TO NPM

    pnpm    faster, uses less disk space (popular in 2026)
    bun     very fast, newer, includes a runtime
    yarn    classic alternative, still around

All of them install from the same registry. Pick one and stick with it per project.`,
      },
    ],
    quiz: [
      {
        q: "What is the difference between Git and GitHub?",
        options: [
          "They are the same thing",
          "Git is the tool; GitHub is a website that hosts Git repos",
          "GitHub is faster than Git",
          "Git is paid; GitHub is free",
        ],
        correct: 1,
        explain: "Git is the version-control program itself. GitHub is a service that hosts your Git repositories online.",
      },
      {
        q: "What does `npm install` do when run inside a project folder?",
        options: [
          "Deletes the project",
          "Uploads your project to npm",
          "Downloads all dependencies listed in package.json",
          "Compiles your code",
        ],
        correct: 2,
        explain: "It reads package.json and installs all the dependencies your project lists. Required after cloning any new project.",
      },
      {
        q: "Which command records a snapshot of your changes in Git?",
        options: ["git save", "git commit", "git push", "git backup"],
        correct: 1,
        explain: "git commit records a snapshot. git push then sends your commits to a remote like GitHub.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  02 — HTML
  // ────────────────────────────────────────────────────────────────────
  {
    id: "html",
    part: "02",
    partLabel: "Frontend",
    color: "#F97316",
    emoji: "📄",
    title: "HTML",
    subtitle: "Structure — the skeleton of every page",
    lessons: [
      {
        title: "What HTML actually is",
        body: `HTML stands for HyperText Markup Language.

You are not "programming." You are DESCRIBING content using tags. A tag looks like this:

    <tagname>content goes here</tagname>

Opening tag:  <tagname>
Closing tag:  </tagname>   ← notice the slash
Content sits between them.

Example:

    <h1>Hello World</h1>

This tells the browser: display "Hello World" as a large heading. That is all there is to HTML — wrap content in tags that describe what it is.`,
      },
      {
        title: "Your first HTML page",
        body: `Every HTML page has the same skeleton:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My First Page</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        <p>This is my first webpage.</p>
      </body>
    </html>

Line by line:

    <!DOCTYPE html>   tells the browser this is HTML5
    <html>            the entire page lives inside this
    <head>            info ABOUT the page (not visible)
      <title>         the text in the browser tab
      <meta>          metadata: encoding, mobile viewport
    <body>            everything VISIBLE goes here

Save this as index.html, double-click to open it in a browser. You have a webpage.`,
      },
      {
        title: "Essential tags",
        body: `HEADINGS  (h1 is biggest, h6 smallest)

    <h1>Main Title</h1>
    <h2>Section Title</h2>
    <h3>Subsection</h3>

PARAGRAPH

    <p>A paragraph of text.</p>

LINKS

    <a href="https://google.com">Click me</a>

    href is the URL. Content between tags is the clickable text.

IMAGES

    <img src="photo.jpg" alt="Description">

    No closing tag. src is the file path. alt is the text shown when the image can't load (and what screen readers announce).

LISTS

    <ul>                          <ol>
      <li>Item one</li>             <li>First step</li>
      <li>Item two</li>             <li>Second step</li>
    </ul>                         </ol>

    ul = unordered (bullets). ol = ordered (numbered).

EMPHASIS

    <strong>Important</strong>    <em>emphasized</em>`,
      },
      {
        title: "Divs, spans & containers",
        body: `Two tags show up in almost every real-world page.

<div> — a BLOCK container.
  • takes up the full width of its parent
  • groups sections of content
  • like a box that holds other things

<span> — an INLINE container.
  • sits inside text without breaking the line
  • styles or tags part of a sentence

Example:

    <div class="card">
      <h2>About Me</h2>
      <p>I am a <span class="accent">web developer</span> from Lagos.</p>
    </div>

Divs don't look like anything on their own. They are organizers you style with CSS. Most real layouts are divs inside divs inside divs.`,
      },
      {
        title: "Forms & inputs",
        body: `Forms collect information from users.

    <form>
      <label for="name">Your name</label>
      <input id="name" type="text" placeholder="Ada Lovelace">

      <label for="email">Email</label>
      <input id="email" type="email" placeholder="you@example.com">

      <label for="pw">Password</label>
      <input id="pw" type="password">

      <button type="submit">Submit</button>
    </form>

COMMON INPUT TYPES

    type="text"       regular text
    type="email"      validates email format
    type="password"   hides characters
    type="number"     only numbers
    type="checkbox"   tick boxes
    type="radio"      pick one of many
    type="date"       date picker
    type="file"       upload a file

Forms on their own do nothing with the data — JavaScript or a backend processes it.

ACCESSIBILITY NOTE: every input should have a matching <label>. The "for" attribute must match the input's "id". This is not optional — screen readers depend on it.`,
      },
      {
        title: "Semantic HTML & best practices",
        body: `Use tags that DESCRIBE what they contain, not just <div> everywhere.

    <header>    top of page
    <nav>       navigation links
    <main>      main content (only one per page)
    <section>   thematic grouping of content
    <article>   self-contained content (blog post, card)
    <aside>     side content (sidebar, callout)
    <footer>    bottom of page

Why it matters:
  • search engines understand your page (SEO)
  • screen readers work correctly for users with disabilities
  • other developers can read your code faster
  • your future self can read your code faster

ALWAYS add alt text to images:

    Bad:   <img src="dog.jpg">
    Good:  <img src="dog.jpg" alt="Golden retriever on a beach">

Use only ONE <h1> per page. Indent nested tags. Close every tag you open.`,
      },
    ],
    quiz: [
      {
        q: "Which tag should you use for the main navigation of a site?",
        options: ["<div>", "<nav>", "<menu>", "<section>"],
        correct: 1,
        explain: "<nav> is a semantic tag specifically for navigation. Using it helps screen readers and search engines.",
      },
      {
        q: "Why does an <img> tag need an `alt` attribute?",
        options: [
          "It is required for the image to load",
          "It makes images appear larger",
          "Accessibility (screen readers) and fallback text if the image fails",
          "It is not needed",
        ],
        correct: 2,
        explain: "alt text is read by screen readers and shown when an image fails to load. It is essential for accessibility.",
      },
      {
        q: "How many <h1> tags should a page have?",
        options: ["As many as you want", "Exactly one", "Between 3 and 5", "Zero"],
        correct: 1,
        explain: "Use one <h1> per page, representing the main topic. Use <h2>–<h6> for subsections.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  03 — CSS
  // ────────────────────────────────────────────────────────────────────
  {
    id: "css",
    part: "03",
    partLabel: "Frontend",
    color: "#3B82F6",
    emoji: "🎨",
    title: "CSS",
    subtitle: "Style — making it look good",
    lessons: [
      {
        title: "What CSS is & how to add it",
        body: `CSS stands for Cascading Style Sheets.

The basic syntax:

    selector {
      property: value;
      property: value;
    }

Example:

    h1 {
      color: red;
      font-size: 36px;
    }

"Find all h1 tags → make text red → make it 36px."

THREE WAYS TO ADD CSS

1.  INLINE  (avoid — gets messy fast)

        <h1 style="color: red;">Title</h1>

2.  INTERNAL  (ok for tiny pages)

        <style> h1 { color: red; } </style>

3.  EXTERNAL FILE  (always use this in real projects)

        <link rel="stylesheet" href="styles.css">

    Then write your CSS in a separate styles.css file.`,
      },
      {
        title: "Selectors",
        body: `Selectors tell CSS WHICH elements to style.

TAG SELECTOR — every instance of that tag

    p { color: gray; }

CLASS SELECTOR — elements with a specific class

    .highlight { background: yellow; }

    Used like: <p class="highlight">text</p>

ID SELECTOR — one specific element

    #main-title { font-size: 48px; }

    Used like: <h1 id="main-title">text</h1>

RULES

  • classes start with a dot:   .classname
  • ids start with a hash:      #idname
  • ids should be unique — use only once per page
  • classes can be reused on many elements
  • in real projects, use CLASSES almost exclusively

MULTIPLE CLASSES on one element:

    <div class="card featured large">...</div>

    All three sets of styles apply.

MODERN SELECTORS WORTH KNOWING (2026)

    :hover, :focus, :active        interaction states
    :has(img)                      parent that contains an image
    :is(h1, h2, h3)                any of these
    :not(.disabled)                everything EXCEPT .disabled`,
      },
      {
        title: "The Box Model",
        body: `The most important CSS concept. Everything on a page is a box, and every box has the same four layers.

    ┌──────────────────────────────────┐
    │            MARGIN                │  ← space OUTSIDE
    │   ┌──────────────────────────┐   │
    │   │          BORDER          │   │  ← the outline
    │   │   ┌──────────────────┐   │   │
    │   │   │      PADDING     │   │   │  ← space inside (content → border)
    │   │   │   ┌──────────┐   │   │   │
    │   │   │   │ CONTENT  │   │   │   │  ← your text / image
    │   │   │   └──────────┘   │   │   │
    │   │   └──────────────────┘   │   │
    │   └──────────────────────────┘   │
    └──────────────────────────────────┘

    .box {
      width: 300px;
      padding: 20px;             space INSIDE
      border: 2px solid black;   the border line
      margin: 10px;              space OUTSIDE
    }

PADDING vs MARGIN — the most confused pair:
  padding  = space between content and border  (inside)
  margin   = space between this box and others (outside)

ONE LINE EVERY PROJECT NEEDS:

    * { box-sizing: border-box; }

Without it, width means "content only" and padding + border are added on top. With it, width includes padding and border. Much easier to reason about.`,
      },
      {
        title: "Colors, fonts & units",
        body: `COLORS — four ways to write them

    color: red;                      named color
    color: #FF5733;                  hex (most common)
    color: rgb(255, 87, 51);         red, green, blue
    color: rgba(255, 87, 51, 0.5);   + alpha (opacity)
    color: oklch(70% 0.15 40);       modern perceptual color (2026)

FONTS

    font-family: 'Georgia', serif;
    font-size: 18px;
    font-weight: 700;        400 = normal, 700 = bold
    line-height: 1.6;        spacing between lines
    text-align: center;      left, center, right

GOOGLE FONTS — free custom fonts

    Add to <head>:
      <link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet">

    Use:
      font-family: 'Inter', sans-serif;

UNITS

    px    pixels (fixed)
    %     percentage of parent
    rem   relative to root font size (most consistent for type)
    em    relative to parent font size
    vw    percentage of viewport width
    vh    percentage of viewport height
    ch    width of the "0" character (great for text columns)`,
      },
      {
        title: "Flexbox — one-dimensional layout",
        body: `Flexbox lines elements up in a row or a column. You put it on the PARENT.

    .container {
      display: flex;
    }

All direct children now line up in a row automatically.

KEY PROPERTIES on the parent

    flex-direction: row;            row (default) or column
    justify-content: center;        MAIN axis alignment
    justify-content: space-between; spread items out
    align-items: center;            CROSS axis alignment
    gap: 20px;                      space between items
    flex-wrap: wrap;                allow items to wrap

KEY PROPERTY on a child

    flex: 1;    this item grows to fill available space

REAL EXAMPLE — navbar with logo left, links right

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 32px;
    }

THE AXIS MATTERS:
  if flex-direction is row       → justify-content controls horizontal
  if flex-direction is column    → justify-content controls vertical`,
      },
      {
        title: "CSS Grid — two-dimensional layout",
        body: `Grid is like Flexbox but in two dimensions at once. Use it when you have rows AND columns.

    .gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

This creates three equal columns. Every direct child becomes a grid item.

    1fr = one fraction of remaining space
    repeat(3, 1fr) = three equal fractions

RESPONSIVE GRID IN ONE LINE (2026 favorite):

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 24px;
    }

This makes as many 240px+ columns as fit. On mobile it becomes one column; on desktop, four or five. No media queries needed.

WHEN TO USE WHICH

    flex  → a row of nav items, a card header, a toolbar
    grid  → a photo gallery, a dashboard layout, a page scaffold

A good rule: if you find yourself nesting flex containers deeply, reach for grid.`,
      },
      {
        title: "Responsive design",
        body: `Your site must look good on phones, tablets, AND desktops.

ALWAYS add this to <head> first:

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

Without this, responsive CSS will not work on real phones.

MEDIA QUERIES — apply styles only at certain screen sizes

    /* default: mobile (write for small screens first) */
    .card { width: 100%; }

    /* tablet and up */
    @media (min-width: 768px) {
      .card { width: 50%; }
    }

    /* desktop and up */
    @media (min-width: 1024px) {
      .card { width: 33%; }
    }

MOBILE-FIRST: write small-screen styles first, add media queries for larger. Industry standard.

MODERN ALTERNATIVE — CONTAINER QUERIES (supported everywhere in 2026):

    @container (min-width: 500px) {
      .card { flex-direction: row; }
    }

Container queries respond to the parent's size, not the viewport's. Much more reusable for components.`,
      },
    ],
    quiz: [
      {
        q: "What does `padding` control?",
        options: [
          "Space OUTSIDE an element",
          "Space INSIDE an element, between content and border",
          "The border thickness",
          "The element's width",
        ],
        correct: 1,
        explain: "Padding is the space inside a box, between the content and the border. Margin is outside.",
      },
      {
        q: "Which layout system is best for a photo gallery with rows and columns?",
        options: ["Flexbox", "CSS Grid", "Tables", "Margin tricks"],
        correct: 1,
        explain: "Grid is designed for two-dimensional layouts. Flexbox is best for one dimension (a row or a column).",
      },
      {
        q: "What does `box-sizing: border-box` do?",
        options: [
          "Adds a border to every box",
          "Makes width include padding and border (not add on top)",
          "Removes all borders",
          "Turns boxes into flex containers",
        ],
        correct: 1,
        explain: "With border-box, the element's width INCLUDES padding and border, which is how most developers intuitively expect width to work.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  04 — JavaScript
  // ────────────────────────────────────────────────────────────────────
  {
    id: "javascript",
    part: "04",
    partLabel: "Frontend",
    color: "#EAB308",
    emoji: "⚙️",
    title: "JavaScript",
    subtitle: "Behavior — making it interactive",
    lessons: [
      {
        title: "What JavaScript does",
        body: `JavaScript is a real programming language. It makes things HAPPEN.

Examples:
  • a button shows/hides a menu when clicked
  • a form checks your email before submitting
  • images load as you scroll
  • a timer counts down
  • data updates without refreshing the page

ADDING JS TO YOUR HTML

    <script src="script.js"></script>

Place it just before </body> so HTML loads first.

The browser reads JavaScript top to bottom, line by line. It pauses and runs each statement, changes the page, and moves on.`,
      },
      {
        title: "Variables & data types",
        body: `Variables store information. Think: labeled boxes.

THREE WAYS TO DECLARE

    let name = "Alice";    can be reassigned later
    const age = 25;        cannot be reassigned
    var old = "avoid";     old way, don't use it

RULE: use const by default. Use let only when you know you'll reassign.

DATA TYPES

    let text    = "Hello";      String (text in quotes)
    let number  = 42;           Number
    let decimal = 3.14;         also a Number
    let active  = true;         Boolean (true / false)
    let nothing = null;         intentionally empty
    let unknown;                undefined (not set yet)

ARRAYS — ordered lists

    let colors = ["red", "green", "blue"];
    colors[0]         →  "red"    (indexing starts at 0)
    colors.length     →  3
    colors.push("yellow");        adds to the end

OBJECTS — key-value pairs

    let person = { name: "Alice", age: 25 };
    person.name       →  "Alice"
    person.age = 26;              reassigns a property`,
      },
      {
        title: "Functions",
        body: `Functions are reusable blocks of code that do one job.

DEFINE a function

    function greet(name) {
      return "Hello, " + name + "!";
    }

CALL it

    greet("Alice")   →   "Hello, Alice!"
    greet("Bob")     →   "Hello, Bob!"

ARROW FUNCTIONS  (modern shorthand)

    const greet = (name) => {
      return "Hello, " + name + "!";
    };

Even shorter for one-liners:

    const greet = (name) => "Hello, " + name + "!";

TEMPLATE LITERALS — cleaner strings (use these!)

    const greet = (name) => \`Hello, \${name}!\`;

The backticks let you embed variables with \${...}.`,
      },
      {
        title: "Control flow — if, loops",
        body: `IF / ELSE — make decisions

    const age = 18;
    if (age >= 18) {
      console.log("Adult");
    } else {
      console.log("Minor");
    }

COMPARISON OPERATORS

    ===    strictly equal (use this)
    !==    strictly not equal
    >      greater than
    <      less than
    >=     greater than or equal

Use === and !==, NEVER == and !=. The loose versions have surprising bugs.

FOR LOOPS — repeat something

    for (let i = 0; i < 5; i++) {
      console.log(i);    // 0, 1, 2, 3, 4
    }

FOR...OF — loop over an array (preferred)

    const colors = ["red", "green", "blue"];
    for (const color of colors) {
      console.log(color);
    }

ARRAY METHODS — the modern way (use these most of the time)

    colors.forEach(c => console.log(c));
    const upper = colors.map(c => c.toUpperCase());
    const short = colors.filter(c => c.length < 5);`,
      },
      {
        title: "The DOM — talking to HTML",
        body: `The DOM (Document Object Model) is your HTML, exposed to JavaScript as objects you can change.

FINDING elements

    document.querySelector("h1");        first matching
    document.querySelector(".card");     by class
    document.querySelector("#title");    by id
    document.querySelectorAll("p");      all matching (returns a NodeList)

CHANGING content

    element.textContent = "New text";
    element.innerHTML = "<strong>Bold</strong>";

CHANGING style

    element.style.color = "red";
    element.style.backgroundColor = "yellow";

CHANGING classes

    element.classList.add("active");
    element.classList.remove("hidden");
    element.classList.toggle("open");    add if absent, remove if present

CREATING new elements

    const div = document.createElement("div");
    div.textContent = "I'm new!";
    document.body.appendChild(div);`,
      },
      {
        title: "Events",
        body: `Events are things that happen: clicks, typing, scrolling.

    const button = document.querySelector("#myBtn");

    button.addEventListener("click", () => {
      alert("Clicked!");
    });

COMMON EVENTS

    "click"       user clicks something
    "mouseover"   user hovers
    "keydown"     user presses a key
    "submit"      user submits a form
    "input"       user types in a field
    "scroll"      user scrolls
    "load"        page finishes loading

REAL EXAMPLE — toggle a nav menu

    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("open");
    });

    /* in CSS */
    .open { display: block; }

This pattern — user acts → JS changes the DOM → user sees it — is 80% of interactive web development.`,
      },
      {
        title: "Fetching data from APIs",
        body: `Real websites load data from servers without refreshing the page. This is done with fetch().

MODERN STYLE — async / await

    async function getUsers() {
      const response = await fetch("https://api.example.com/users");
      const data = await response.json();
      console.log(data);
    }

    getUsers();

WHAT IS HAPPENING

  1.  fetch() sends a request to a URL
  2.  await pauses until the response comes back
  3.  response.json() converts the raw response to a JS object
  4.  you use the data (display it, store it, etc.)

HANDLE ERRORS

    async function getUsers() {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();
        return data;
      } catch (err) {
        console.error("Oops:", err);
      }
    }

FREE API TO PRACTICE

    https://jsonplaceholder.typicode.com/posts/1

Try it in your browser console (F12 → Console).`,
      },
    ],
    quiz: [
      {
        q: "What is the difference between `let` and `const`?",
        options: [
          "No difference",
          "let can be reassigned, const cannot",
          "const is faster",
          "let is for numbers only",
        ],
        correct: 1,
        explain: "const means you cannot reassign the variable. let allows reassignment. Prefer const by default.",
      },
      {
        q: "Which comparison operator should you use?",
        options: ["== only", "=== (strict equal)", "= (single equals)", "It doesn't matter"],
        correct: 1,
        explain: "Always use === for comparison. == performs type coercion and has surprising bugs (e.g., `0 == ''` is true).",
      },
      {
        q: "What does `addEventListener` do?",
        options: [
          "Adds a new HTML element",
          "Runs a function when an event happens (like a click)",
          "Listens to the network",
          "Creates a new event type",
        ],
        correct: 1,
        explain: "addEventListener attaches a function that runs whenever the specified event (click, input, etc.) occurs on an element.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  05 — React
  // ────────────────────────────────────────────────────────────────────
  {
    id: "react",
    part: "05",
    partLabel: "Frontend",
    color: "#06B6D4",
    emoji: "⚛️",
    title: "React",
    subtitle: "The most important UI library in the industry",
    lessons: [
      {
        title: "What React actually is",
        body: `React is a JavaScript library for building user interfaces out of reusable pieces called COMPONENTS.

Built by Meta (Facebook). Officially a library. In practice, it structures your whole frontend, which is why people call it a framework.

THE CORE IDEA

Instead of writing one big HTML file and manipulating it with querySelector, you describe what the UI should LOOK like for the current state, and React figures out what to update.

    // vanilla JS
    document.querySelector("#count").textContent = newCount;

    // React
    <div>{count}</div>      // when count changes, React updates it

You stop thinking about "how to change the DOM." You think about "what the UI should be, given the data." This is called DECLARATIVE UI.

WHY IT MATTERS (2026)

  • by far the largest frontend job market
  • massive ecosystem (libraries, tutorials, tooling)
  • same model powers React Native (mobile) and many SSR frameworks (Next.js, Remix, TanStack Start)
  • React 19 introduced stable Server Components — your code can run on the server for free performance

Learn React AFTER you are comfortable with vanilla JS. Not before.`,
      },
      {
        title: "JSX — HTML inside JavaScript",
        body: `JSX is a syntax extension that lets you write HTML-like tags inside JavaScript.

    const element = <h1>Hello, world!</h1>;

It looks like HTML but it compiles down to plain JavaScript function calls. You can mix expressions into it with { }:

    const name = "Alice";
    const greeting = <h1>Hello, {name}!</h1>;

    const items = ["a", "b", "c"];
    const list = (
      <ul>
        {items.map(i => <li key={i}>{i}</li>)}
      </ul>
    );

JSX RULES THAT TRIP BEGINNERS

  1.  return ONE element. Wrap multiple elements in a parent (or a fragment <>...</>).
  2.  class → className (class is a reserved word in JS)
  3.  for → htmlFor
  4.  self-closing tags need a slash: <img /> not <img>
  5.  CamelCase for attributes: onclick → onClick, tabindex → tabIndex
  6.  expressions, not statements: you can put variables and ternaries in {}, not if/else

    // valid
    {count > 0 && <p>You have {count} items</p>}
    {count > 0 ? <p>Items!</p> : <p>Empty</p>}

    // invalid inside JSX
    {if (count > 0) { ... }}`,
      },
      {
        title: "Components & props",
        body: `A component is a JavaScript function that returns JSX.

    function Button({ label }) {
      return <button>{label}</button>;
    }

Use it like a tag:

    <Button label="Sign up" />
    <Button label="Log in" />

Two rules:
  1.  Component names MUST start with a capital letter.
  2.  Components are functions. Props are just their arguments.

PROPS = inputs to a component

    function Card({ title, body, author }) {
      return (
        <article>
          <h2>{title}</h2>
          <p>{body}</p>
          <small>— {author}</small>
        </article>
      );
    }

    <Card title="Hello" body="First post" author="Ada" />

DEFAULT VALUES

    function Button({ label = "Click me", type = "button" }) {
      return <button type={type}>{label}</button>;
    }

CHILDREN — the special prop

    function Card({ children }) {
      return <div className="card">{children}</div>;
    }

    <Card>
      <h2>Anything</h2>
      <p>can go here.</p>
    </Card>`,
      },
      {
        title: "State — useState",
        body: `State is data that changes over time and, when it changes, causes the component to re-render.

    // react — use: { useState }
    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      );
    }

BREAKING IT DOWN

    useState(0)           initial value is 0
    [count, setCount]     array destructuring
      count               the current value
      setCount            function to update it
    setCount(count + 1)   schedules a re-render with the new value

THREE RULES OF useState

  1.  Never modify state directly. Always use the setter.

        Wrong:  count = count + 1;
        Right:  setCount(count + 1);

  2.  Updates are async. You won't see the new value on the next line.

        setCount(1);
        console.log(count);    // still the old value

  3.  When updating from the previous value, use the function form:

        setCount(c => c + 1);  // safer

STATE CAN BE ANY TYPE

    const [user, setUser] = useState({ name: "", email: "" });
    const [todos, setTodos] = useState([]);

To update an object or array, create a NEW one:

    setUser({ ...user, name: "Ada" });
    setTodos([...todos, newTodo]);`,
      },
      {
        title: "Events & forms in React",
        body: `EVENTS look like HTML events but in camelCase and receive a function.

    <button onClick={handleClick}>Click</button>
    <input onChange={handleChange} />
    <form onSubmit={handleSubmit}>...</form>

CONTROLLED FORMS — React is the source of truth

    function LoginForm() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
        </form>
      );
    }

THE PATTERN
  • value comes FROM state
  • onChange updates state
  • the state is the "truth"; the input reflects it

e.preventDefault() stops the browser's default form submission (page reload).`,
      },
      {
        title: "Rendering lists & conditionals",
        body: `CONDITIONAL RENDERING

    { isLoggedIn && <Dashboard /> }

    { isLoggedIn
        ? <Dashboard />
        : <LoginForm /> }

LISTS — use .map()

    const todos = ["buy milk", "walk dog", "write code"];

    <ul>
      {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>

THE KEY PROP — required for lists

Every item in a .map() needs a unique "key". It helps React track which items changed.

  • prefer a stable unique ID (todo.id, user.id)
  • index is OK only when the list never reorders or filters

    todos.map(todo => <li key={todo.id}>{todo.text}</li>)

LOADING / EMPTY / ERROR STATES — render all three

    if (loading) return <Spinner />;
    if (error)   return <Error message={error} />;
    if (items.length === 0) return <Empty />;
    return <List items={items} />;

This pattern covers almost every real UI you'll build.`,
      },
      {
        title: "useEffect — side effects",
        body: `useEffect lets you run code AFTER the component renders. Use it for anything that's not pure UI:
  • fetching data
  • subscribing to events
  • setting timers
  • talking to browser APIs

    // react — use: { useEffect, useState }
    function UserProfile({ userId }) {
      const [user, setUser] = useState(null);

      useEffect(() => {
        fetch(\`/api/users/\${userId}\`)
          .then(r => r.json())
          .then(setUser);
      }, [userId]);     // ← dependency array

      if (!user) return <p>Loading...</p>;
      return <h1>{user.name}</h1>;
    }

THE DEPENDENCY ARRAY

    [], no deps         run once after first render
    [userId]            run again whenever userId changes
    (omitted)           run after every render (usually a bug)

CLEANUP — return a function

    useEffect(() => {
      const id = setInterval(() => console.log("tick"), 1000);
      return () => clearInterval(id);    // cleanup
    }, []);

The cleanup runs when the component unmounts OR before the effect re-runs. Always clean up subscriptions and timers.

IN 2026: most data fetching is better handled by TanStack Query or framework-level loaders than raw useEffect. But you still need to understand useEffect because it's underneath everything.`,
      },
      {
        title: "Thinking in components",
        body: `The hardest part of React is not syntax. It's learning to SEE your UI as a tree of components.

TAKE A MOCKUP, BREAK IT DOWN

    <App>
      <Header>
        <Logo />
        <Nav />
      </Header>
      <Main>
        <PostList>
          <PostCard />
          <PostCard />
        </PostList>
        <Sidebar />
      </Main>
      <Footer />
    </App>

Each component should do ONE thing. When it gets big, split it.

WHERE DOES STATE LIVE?

Rule: state lives at the lowest common ancestor of every component that needs it.

  • if only one component uses it → keep it local
  • if two siblings need it → lift it up to their parent, pass it down as props

PASSING DATA DOWN, EVENTS UP

    parent
      │ data as props ↓
      ▼
    child
      │ events as function props ↑
      ▲

Example: <Input value={x} onChange={setX} /> — parent owns the state, child displays and reports changes.

WHEN TO REACH FOR MORE

  • lots of props passing through many levels → Context (useContext)
  • complex shared state across many pages → Zustand / Redux Toolkit
  • server data → TanStack Query

Start simple. Lift state. Split components. Add tools only when the pain is real.`,
      },
    ],
    quiz: [
      {
        q: "What is a React component, in plain terms?",
        options: [
          "A CSS file",
          "A JavaScript function that returns JSX",
          "A database record",
          "An HTML file",
        ],
        correct: 1,
        explain: "A component is a function that returns JSX (markup). It's the fundamental unit of React UIs.",
      },
      {
        q: "When you update state with `setCount(5)`, when does `count` reflect the new value?",
        options: [
          "Immediately on the next line",
          "After the next render",
          "Never, you have to reload",
          "Only if you use const",
        ],
        correct: 1,
        explain: "State updates are asynchronous. React batches them and re-renders the component — `count` holds the new value on the next render.",
      },
      {
        q: "What is the second argument to useEffect (the dependency array) for?",
        options: [
          "Telling React which variables to ignore",
          "Controlling when the effect re-runs",
          "Styling the effect",
          "Required but does nothing",
        ],
        correct: 1,
        explain: "The dependency array tells React: re-run this effect whenever any of these values change. [] = run once; [x] = run when x changes; omitted = run after every render.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  06 — TypeScript
  // ────────────────────────────────────────────────────────────────────
  {
    id: "typescript",
    part: "06",
    partLabel: "Frontend",
    color: "#2563EB",
    emoji: "🔷",
    title: "TypeScript",
    subtitle: "JavaScript with a safety net",
    lessons: [
      {
        title: "Why TypeScript",
        body: `TypeScript is JavaScript with types. You write almost the same code, but the compiler catches a huge class of bugs before they ever run.

THE PROBLEM TypeScript SOLVES

    // plain JS — this runs, but crashes at runtime
    function greet(user) {
      return "Hi, " + user.naame;   // typo
    }

    greet({ name: "Ada" });   // "Hi, undefined" — nobody notices for days

TypeScript catches this while you type:

    function greet(user: { name: string }) {
      return "Hi, " + user.naame;
      //                   ~~~~~
      // Property 'naame' does not exist. Did you mean 'name'?
    }

WHY IT'S WORTH LEARNING (2026)

  • the majority of new React/Node jobs require it
  • refactoring large codebases becomes safe
  • editor autocomplete gets dramatically smarter
  • you catch bugs as you type, not after deploy

TypeScript is NOT a different language. It's a thin layer on top of JavaScript. Anything valid JS is valid TS. You learn it gradually, one type annotation at a time.`,
      },
      {
        title: "Basic types",
        body: `You add a type after a variable with a colon:

    let name: string = "Ada";
    let age: number = 30;
    let active: boolean = true;
    let items: string[] = ["a", "b", "c"];
    let scores: number[] = [90, 85, 72];

TYPE INFERENCE — most of the time you don't need to write the type

    let name = "Ada";         TS infers: string
    let age = 30;             TS infers: number

Only annotate when the inference is wrong or unclear (especially function parameters).

OBJECTS

    let user: { name: string; age: number } = {
      name: "Ada",
      age: 30,
    };

UNION TYPES — a value can be one of several types

    let id: string | number = "abc";
    id = 42;    // also ok

LITERAL TYPES — restrict to specific values

    let status: "loading" | "ready" | "error" = "loading";

SPECIAL TYPES

    any        disables type checking (avoid — defeats the point)
    unknown    type-safe "any" (forces you to narrow it first)
    void       no return value
    never      never returns (throws or infinite loop)
    null, undefined`,
      },
      {
        title: "Functions & interfaces",
        body: `FUNCTION TYPES — annotate parameters and return type

    function add(a: number, b: number): number {
      return a + b;
    }

    const greet = (name: string): string => \`Hi, \${name}\`;

OPTIONAL PARAMETERS — add ?

    function log(message: string, prefix?: string) {
      console.log((prefix ?? "LOG") + ": " + message);
    }

INTERFACES — reusable object shapes

    interface User {
      id: number;
      name: string;
      email: string;
      isAdmin?: boolean;     // optional
    }

    function greet(user: User) {
      return "Hi, " + user.name;
    }

TYPE ALIASES — like interfaces but more flexible

    type User = {
      id: number;
      name: string;
    };

    type Status = "loading" | "ready" | "error";

INTERFACE vs TYPE — when to use which
  • use interface for objects and classes
  • use type for unions, intersections, primitives
  • in practice they overlap 90%; pick one and be consistent`,
      },
      {
        title: "Generics (the scary-looking part that isn't)",
        body: `Generics let a function or type work with ANY type while still being type-safe.

THE PROBLEM

    function first(items: any[]): any {
      return items[0];
    }

    const n = first([1, 2, 3]);    // n is typed as "any" — lost all safety

THE GENERIC SOLUTION

    function first<T>(items: T[]): T {
      return items[0];
    }

    const n = first([1, 2, 3]);      // T = number, so n is number
    const s = first(["a", "b"]);     // T = string, so s is string

T is a PLACEHOLDER. TypeScript fills it in based on what you pass. You can name it anything; T is convention for the first one.

YOU'LL SEE GENERICS CONSTANTLY

    Array<string>              array of strings
    Promise<User>              a promise that resolves to a User
    Map<string, number>        map of string → number
    useState<string>("")       typed state

When you call a generic function or type, TypeScript usually infers it — you rarely need to write <...> explicitly.`,
      },
      {
        title: "TypeScript in React",
        body: `COMPONENT PROPS — type them with an interface or type

    interface ButtonProps {
      label: string;
      onClick: () => void;
      variant?: "primary" | "ghost";
    }

    function Button({ label, onClick, variant = "primary" }: ButtonProps) {
      return <button className={variant} onClick={onClick}>{label}</button>;
    }

STATE

    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

Often TS infers from the initial value, so you can skip the <...>. The exception is when state can be null — then be explicit:

    const [user, setUser] = useState<User | null>(null);

EVENTS

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
    };

CHILDREN

    interface CardProps {
      title: string;
      children: React.ReactNode;
    }

Start with plain JavaScript React. Add TypeScript when you are comfortable. Most beginners get blocked by TypeScript errors too early, burn out, and quit — don't do that to yourself.`,
      },
    ],
    quiz: [
      {
        q: "What does TypeScript give you that JavaScript doesn't?",
        options: [
          "Faster runtime performance",
          "A new language entirely",
          "Type checking at compile time to catch bugs early",
          "Built-in UI components",
        ],
        correct: 2,
        explain: "TypeScript adds a type system on top of JavaScript. It catches many bugs (typos, wrong argument types) before you even run your code.",
      },
      {
        q: "When should you use `any`?",
        options: [
          "Always, to avoid type errors",
          "Rarely — it disables type checking and defeats the purpose",
          "Only for numbers",
          "Only for strings",
        ],
        correct: 1,
        explain: "`any` turns off type safety for that value. Use it only when unavoidable. Prefer `unknown` for truly unknown types — it forces you to narrow.",
      },
      {
        q: "What is the purpose of generics (like `<T>`)?",
        options: [
          "They make code slower",
          "They let a function work with any type while keeping type safety",
          "They are only for classes",
          "They are just comments",
        ],
        correct: 1,
        explain: "Generics preserve the relationship between input and output types. `function first<T>(items: T[]): T` returns the same type it received.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  07 — Libraries & Ecosystem
  // ────────────────────────────────────────────────────────────────────
  {
    id: "libs-ecosystem",
    part: "07",
    partLabel: "Frontend",
    color: "#A855F7",
    emoji: "📦",
    title: "Libraries & Ecosystem",
    subtitle: "The tools that speed up real work",
    lessons: [
      {
        title: "Library vs framework vs package",
        body: `These three words get used loosely. Here's a precise mental model.

PACKAGE — any bundle of code someone else wrote, installed with npm.

LIBRARY — a package you call when you need it. You're in charge.

    You → library (you call library functions)

FRAMEWORK — a package that calls YOUR code. It's in charge.

    framework → you (it decides when your code runs)

The term is "Inversion of Control." React you CALL from your code → library. Next.js runs YOUR code inside ITS routing / data system → framework.

Both install the same way:

    npm install react       a library
    npm install next        a framework

The distinction is about who's in control of the structure, not the command.`,
      },
      {
        title: "Frontend frameworks in 2026",
        body: `The state of the world (Stack Overflow 2025 survey + industry signal):

REACT — ~45% usage. Dominant. Largest ecosystem and job market.
    2026: React 19 brought stable Server Components, server actions, the React Compiler (automatic memoization).

VUE — ~18%. Gentler learning curve, cleaner syntax. Strong in Asia and Europe.
    2026: Vue 3.5 with Composition API is standard.

ANGULAR — ~18%. Full framework by Google. Structured, opinionated, TypeScript-first.
    2026: Signals-based reactivity, Deferrable Views. Enterprise favorite.

SVELTE — ~7%. Compiles to vanilla JS. No virtual DOM. Smaller bundles.
    2026: Svelte 5 introduced Runes, a more explicit reactivity model.

ASTRO — ~8–12% and surging. Zero JS by default. Islands architecture. Mix React, Vue, Svelte components in one project.

SOLID, QWIK, LIT — niche but respected for specific use cases.

FOR A BEGINNER IN 2026
  • start with React — biggest ecosystem, most jobs, most tutorials
  • if building a content-heavy site (blog, docs) look at Astro
  • Vue is the best alternative if React's syntax doesn't click for you

Learning any ONE of these well makes all the others much easier to pick up later.`,
      },
      {
        title: "Full-stack meta-frameworks",
        body: `These combine frontend AND backend in one package.

NEXT.JS — the default choice for React.
    Built by Vercel. File-based routing. Server Components. Server actions.
    "If you're building with React in production in 2026, you probably want Next.js."

NUXT — the Vue equivalent. Very polished.

SVELTEKIT — full-stack Svelte. Now maintained by Shopify.

ASTRO — content-first. Mix frameworks. Best-in-class for blogs, marketing sites, docs.

REMIX — React-focused, web-standards-first. Also Shopify.

TANSTACK START — newer full-stack React framework, deeply integrated with TanStack Router and Query.

WHAT THEY ADD OVER RAW REACT / VUE / SVELTE

  • file-based routing (pages/blog/[slug].tsx → /blog/hello)
  • server-side rendering and static site generation
  • data loaders that run on the server
  • deploy targets (Vercel, Netlify, Cloudflare, self-hosted)

LEARN PLAIN REACT (or Vue, or Svelte) FIRST. Then meta-frameworks make sense because you understand what they're abstracting.`,
      },
      {
        title: "CSS frameworks & UI libraries",
        body: `TOOLS THAT HANDLE STYLING FOR YOU

TAILWIND CSS — the 2026 default.
    Utility classes instead of custom CSS.

        <div class="flex items-center gap-4 p-6 bg-white rounded-xl">

    Extremely fast once you know CSS. Huge adoption.

BOOTSTRAP — pre-built components.

        <button class="btn btn-primary">Click</button>

    Easiest to start with. Looks generic unless customized.

COMPONENT LIBRARIES (for React)

    shadcn/ui       copy-paste components. You own the code. Dominant in 2026.
    Radix UI        unstyled, accessible primitives (shadcn is built on it)
    Chakra UI       opinionated, accessible, batteries-included
    Mantine         feature-rich, includes hooks
    Material UI     Google's Material Design. Heavy, good for dashboards.

FOR BEGINNERS
  • learn plain CSS first — don't skip
  • try Tailwind once CSS clicks
  • use shadcn/ui when you need production components fast`,
      },
      {
        title: "Tools you'll actually see in codebases",
        body: `Beyond UI frameworks, these come up constantly.

STATE MANAGEMENT

    React Context      built-in, fine for most apps
    Zustand            tiny, simple, most loved in 2026
    Redux Toolkit      classic, powerful, more ceremony
    Jotai / Valtio     atomic state alternatives

SERVER STATE / DATA FETCHING

    TanStack Query     caching, refetching, mutations. Use for anything talking to an API.
    SWR                lighter alternative (Vercel)

ROUTING

    React Router        classic client-side routing
    TanStack Router     modern, type-safe, file-based
    (built-in if using Next.js / Remix / TanStack Start)

FORMS

    React Hook Form     performant, popular
    TanStack Form       newer, framework-agnostic
    Zod                 schema validation (pair with any form library)

UTILITIES

    date-fns            date handling (prefer over moment.js, which is deprecated)
    clsx / cn           conditional className composition
    Axios               HTTP client (fetch is also fine)

BUILD TOOLS

    Vite                dev server and bundler. Default for most non-framework apps.
    esbuild, SWC        the fast compilers under the hood of modern tools

You do not need to know all of these. Pick them up when a project needs them.`,
      },
    ],
    quiz: [
      {
        q: "What is the key difference between a library and a framework?",
        options: [
          "Libraries are free, frameworks are paid",
          "In a library YOU call IT; in a framework IT calls YOU",
          "Libraries are smaller files",
          "No real difference",
        ],
        correct: 1,
        explain: "The classic distinction is 'Inversion of Control'. In a framework, your code fits into its structure. In a library, you use it when you want.",
      },
      {
        q: "Which framework is the most popular default for building React apps in production (2026)?",
        options: ["Angular", "Svelte", "Next.js", "Bootstrap"],
        correct: 2,
        explain: "Next.js is the default full-stack framework for React. It handles routing, server rendering, and data loading out of the box.",
      },
      {
        q: "What is Tailwind CSS?",
        options: [
          "A JavaScript framework",
          "A utility-class CSS framework (you style with class names)",
          "A database",
          "A build tool",
        ],
        correct: 1,
        explain: "Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you compose styles using pre-defined class names.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  08 — TanStack Deep Dive
  // ────────────────────────────────────────────────────────────────────
  {
    id: "tanstack",
    part: "08",
    partLabel: "Frontend",
    color: "#EF4444",
    emoji: "🧑‍💻",
    title: "TanStack Deep Dive",
    subtitle: "The modern type-safe stack for React apps",
    lessons: [
      {
        title: "The TanStack family",
        body: `TanStack is a collection of type-safe, framework-agnostic headless libraries by Tanner Linsley. "Headless" means they give you logic, not UI — you bring your own styling.

The pieces you'll meet most:

TanStack Query       data fetching, caching, sync with the server
TanStack Router      client-side, type-safe routing
TanStack Start       full-stack meta-framework (SSR, loaders, actions)
TanStack Table       headless tables (sorting, filtering, virtualization)
TanStack Form        headless form state management

Why people love it:
    • Type-safety end to end — URLs, params, loader data, all typed
    • Minimal magic — you can read the code and know what happens
    • Works in React, Solid, Vue, Svelte (most of it anyway)

If you're coming from Next.js, TanStack Start feels like "Next's router, but the types actually flow through."`,
        exercises: [
          "Visit tanstack.com and list every package under the TanStack umbrella.",
          "Pick one feature from TanStack Query's docs that you've never seen in a fetch wrapper before.",
        ],
      },
      {
        title: "TanStack Query — server state",
        body: `Server state is different from client state. It's stale by default, asynchronous, and shared between tabs. TanStack Query is built for exactly that problem.

The core hook is useQuery:

    // @tanstack/react-query — use: { useQuery }
    function Profile() {
      const { data, isLoading, error } = useQuery({
        queryKey: ['user', 1],
        queryFn: () => fetch('/api/users/1').then(r => r.json()),
      })

      if (isLoading) return <p>Loading…</p>
      if (error)     return <p>Oops: {error.message}</p>
      return <h1>Hello {data.name}</h1>
    }

What you get for free:
    • Caching       same queryKey = shared cache entry
    • Deduping      simultaneous requests merge into one
    • Refetching    on window focus, reconnect, or interval
    • Invalidation  queryClient.invalidateQueries(['user'])
    • Mutations     useMutation for POST/PATCH/DELETE

Rule of thumb: if data lives on a server, you probably want useQuery, not useState + useEffect.`,
        exercises: [
          "Refactor a useState + useEffect fetch into a useQuery call.",
          "Add a 'Refresh' button that calls queryClient.invalidateQueries.",
        ],
      },
      {
        title: "TanStack Router — type-safe routing",
        body: `TanStack Router gives you file-based (or code-based) routes where every URL, search param, and loader return value is typed.

A minimal route file looks like:

    // routes/posts.$postId.tsx
    // @tanstack/react-router — use: { createFileRoute }
    export const Route = createFileRoute('/posts/$postId')({
      loader: ({ params }) => fetchPost(params.postId),
      component: PostPage,
    })

    function PostPage() {
      const post = Route.useLoaderData()   // typed, no generics needed
      const { postId } = Route.useParams() // also typed
      return <article>{post.title}</article>
    }

Why the types matter:
    • Auto-complete for Link to="/posts/$postId"
    • Search param schemas via Zod — invalid URLs become compile errors
    • Loader data flows into the component without casting

If you've ever chased a bug caused by a typo in a route path, you'll appreciate this.`,
        exercises: [
          "Scaffold a new project with 'pnpm create @tanstack/router@latest' and add two routes.",
          "Add a typed search param (e.g. ?tab=details) using a Zod schema.",
        ],
      },
      {
        title: "TanStack Start — full-stack meta-framework",
        body: `TanStack Start is the "Next.js of TanStack": it takes TanStack Router and adds SSR, streaming, server functions, and deployable adapters (including Cloudflare).

The mental model:
    • Routes live as files, just like Router
    • Server functions are typed RPC — call them from the client, they run on the server
    • Loaders can call server functions and hydrate the client cache

A server function example:

    // routes/index.tsx
    // @tanstack/start — use: { createServerFn }
    const getGreeting = createServerFn('GET', async () => {
      return 'Hello from the server!'
    })

    export const Route = createFileRoute('/')({
      loader: async () => ({ greeting: await getGreeting() }),
      component: Home,
    })

    function Home() {
      const { greeting } = Route.useLoaderData()
      return <h1>{greeting}</h1>
    }

Why you might pick it over Next.js:
    • Types flow all the way through loaders, actions, and params
    • Simpler mental model — no server vs client component boundary confusion
    • First-class Cloudflare, Netlify, Vercel, Node adapters

Why you might not (yet):
    • Smaller ecosystem than Next
    • Fewer tutorials on YouTube (for now)`,
        exercises: [
          "Build a 'Hello World' route that loads server-side and hydrates on the client.",
          "Deploy the same app to Cloudflare Pages using the @tanstack/start-cloudflare adapter.",
        ],
      },
      {
        title: "Putting the stack together",
        body: `A realistic TanStack app looks like this:

    app/
      routes/
        __root.tsx            providers, layout, <Outlet />
        index.tsx             loader → server fn → hydrated useQuery
        posts.tsx             list route
        posts.$postId.tsx     detail route with typed params
      lib/
        queryClient.ts        new QueryClient({...})
        api.ts                server functions

The cooperation pattern:
    1. Router handles URLs, params, and initial data loading
    2. Loader calls a server function (Start) for SSR
    3. Query hydrates from that same data on the client
    4. Mutations update the server, then invalidateQueries

When to reach for what:
    • Router only                  SPA with client-only data
    • Router + Query               SPA hitting a separate API
    • Start + Query                Full-stack, one codebase, SSR

Don't overthink it — you can start with Router + Query and add Start later when you want SSR.`,
        exercises: [
          "Sketch (on paper or in a diagram) the data flow from URL → loader → server → component.",
          "Pick a small side project and rebuild one route with this pattern end-to-end.",
        ],
      },
    ],
    quiz: [
      {
        q: "What problem is TanStack Query primarily designed to solve?",
        options: [
          "Styling React components",
          "Managing server state — fetching, caching, and syncing",
          "Client-side routing",
          "Building CSS animations",
        ],
        correct: 1,
        explain: "Query is a server-state library. It manages fetching, caching, deduping, and invalidation so you don't have to.",
      },
      {
        q: "What makes TanStack Router different from React Router?",
        options: [
          "It's faster at runtime",
          "It uses class components",
          "It's fully type-safe end-to-end — params, search, and loader data are all typed",
          "It only works server-side",
        ],
        correct: 2,
        explain: "End-to-end type safety is TanStack Router's headline feature.",
      },
      {
        q: "What is TanStack Start?",
        options: [
          "A UI component library",
          "A CSS framework",
          "A full-stack meta-framework built on TanStack Router with SSR and server functions",
          "A replacement for useState",
        ],
        correct: 2,
        explain: "Start is the SSR + server-functions layer on top of Router, similar in scope to Next.js or Remix.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  09 — Bun: the all-in-one JavaScript toolkit
  // ────────────────────────────────────────────────────────────────────
  {
    id: "bun",
    part: "09",
    partLabel: "Tooling",
    color: "#FB923C",
    emoji: "🥟",
    title: "Bun",
    subtitle: "The all-in-one JavaScript toolkit",
    lessons: [
      {
        title: "Why Bun exists",
        body: `For 20+ years, JavaScript's toolchain has been a Jenga tower:
    • Node.js        runs JS
    • npm/pnpm/yarn  installs packages
    • tsx/ts-node    runs TypeScript
    • esbuild/vite   bundles
    • jest/vitest    runs tests

Bun's pitch: one binary does all of it, written in Zig, aggressively fast.

    bun install      package manager (npm-compatible)
    bun run dev      script runner
    bun index.ts     runs TS directly, no compile step
    bun build        bundler
    bun test         test runner (Jest-compatible API)

It speaks package.json fluently — most projects "just work" when you swap npm for bun. The point isn't that every feature is revolutionary, it's that you stop juggling five tools.`,
        exercises: [
          "Install Bun: curl -fsSL https://bun.sh/install | bash",
          "Run 'bun --version' to confirm it's on your PATH.",
        ],
      },
      {
        title: "Bun as a runtime",
        body: `Bun runs JavaScript AND TypeScript directly, no transpile step.

    bun run server.ts         executes server.ts like Node runs server.js

Why this is nice:
    • No more ts-node or tsx wrapper
    • Startup is measurably faster than Node
    • Built-in APIs: fetch, WebSocket, File, Bun.serve

A minimal HTTP server:

    // server.ts
    Bun.serve({
      port: 3000,
      fetch(req) {
        return new Response('Hello from Bun')
      },
    })
    console.log('http://localhost:3000')

Run it:

    bun run server.ts

Important nuance in 2026: Bun is highly Node-compatible but not 100%. Most popular npm packages work, but some native Node modules (fs/promises edge cases, certain streams behaviors) still have gaps. Check the compatibility matrix at bun.sh/docs/runtime/nodejs-apis if you hit weirdness.`,
        exercises: [
          "Write a Bun.serve file that returns JSON for /api and HTML for /.",
          "Replace one Node script in an existing project with 'bun run <file>' and note any errors.",
        ],
      },
      {
        title: "Bun as a package manager",
        body: `This is the fastest win — just use 'bun install' instead of 'npm install' and your life improves.

    bun install                   reads package.json, installs everything
    bun add react                 adds a dependency
    bun add -d vitest             adds a dev dependency
    bun remove lodash             removes a dependency
    bun outdated                  lists upgradeable packages

It writes a bun.lockb (binary lockfile) alongside your package.json. It's compatible with projects that already have a package-lock.json or pnpm-lock.yaml — you can migrate gradually.

Typical install-time comparison (rough, your mileage varies):
    npm install     25s
    pnpm install    6s
    bun install     2s

For CI pipelines and cold clones, that's meaningful. For teaching, it also means students spend less time watching a progress bar.`,
        exercises: [
          "Clone any existing Node project and run 'bun install' in it. Does it work?",
          "Time 'bun install' vs 'npm install' on the same project with 'time'.",
        ],
      },
      {
        title: "Bun's built-in tools",
        body: `Beyond runtime and package manager, Bun ships:

bun test
    • Jest-compatible API — describe, it, expect
    • Runs TS/JSX natively, no config
    • Dramatically faster than Jest for typical suites

bun build
    • Bundler for browser or node targets
    • esbuild-ish speed, sane defaults

bun --hot
    • Hot reload that actually works without webpack-dev-server gymnastics

bun create
    • Project scaffolding: bun create react-app my-app

When Bun is a good fit:
    • Greenfield projects where you control the stack
    • Scripts, CLIs, small servers, prototypes
    • Teaching contexts — one install, one command, one mental model

When to stick with Node:
    • Enterprise codebases with finicky native modules
    • Production environments where your platform team has vetted Node
    • Libraries that explicitly target Node APIs not yet in Bun

My recommendation: use Bun as your daily driver for new projects and scripts; keep Node installed for compatibility when a package demands it.`,
        exercises: [
          "Write a 'hello.test.ts' file with one passing test and run it with 'bun test'.",
          "Rewrite a small Node CLI script to run on Bun and measure the cold-start time difference.",
        ],
      },
    ],
    quiz: [
      {
        q: "Which of these is Bun NOT a replacement for?",
        options: [
          "npm",
          "ts-node",
          "VS Code",
          "jest",
        ],
        correct: 2,
        explain: "Bun replaces runtime, package manager, bundler, and test runner. It does not replace your editor.",
      },
      {
        q: "Can Bun run a TypeScript file directly?",
        options: [
          "No, you always need to transpile first",
          "Yes, 'bun run file.ts' just works",
          "Only with a tsconfig.json flag",
          "Only in production builds",
        ],
        correct: 1,
        explain: "Running TS (and JSX) without a separate build step is one of Bun's main selling points.",
      },
      {
        q: "What's the honest caveat about switching from Node to Bun?",
        options: [
          "Bun is always slower",
          "Bun can't install npm packages",
          "Bun is highly Node-compatible but not 100% — some native modules may still have gaps",
          "You have to rewrite all your code in Zig",
        ],
        correct: 2,
        explain: "Compatibility is very good but not perfect. Check the compat matrix when something odd happens.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  10 — Backend
  // ────────────────────────────────────────────────────────────────────
  {
    id: "backend",
    part: "10",
    partLabel: "Backend",
    color: "#10B981",
    emoji: "🖥️",
    title: "Backend Development",
    subtitle: "Servers, databases & the hidden engine",
    lessons: [
      {
        title: "What the backend does",
        body: `The frontend is what users SEE. The backend is everything BEHIND the scenes.

BACKEND IS RESPONSIBLE FOR
  • storing data (accounts, posts, orders, messages)
  • business logic (calculate price, check permissions)
  • security (passwords, authentication)
  • communicating with databases
  • sending emails or notifications
  • running code you don't want users to see or tamper with

ANALOGY
    Frontend = what you see in a restaurant (tables, menu, waiters)
    Backend  = the kitchen, stockroom, accounting system

WHEN do you actually need a backend?
  ✓ users can create accounts
  ✓ data is saved and shared between users
  ✓ you need to keep secrets (API keys, private data)

A portfolio site = no backend needed.
A social app = absolutely needs a backend.`,
      },
      {
        title: "Backend languages & Node.js",
        body: `The backend can be written in many languages:

    Node.js (JavaScript)     most popular for beginners
    Python (Django, Flask, FastAPI)   great for data-heavy apps, AI
    Go                       modern, fast, great for services
    Rust                     high-performance systems
    Java (Spring)            enterprise scale
    Ruby (Rails)             fast to build with
    PHP (Laravel)            still powers much of the web

FOR BEGINNERS: start with Node.js. Why? It's the same JavaScript you use on the frontend. One language for both = a massive learning advantage.

NODE.JS = JavaScript that runs on a SERVER, not a browser.

A BASIC NODE SERVER WITH EXPRESS

    const express = require("express");
    const app = express();

    app.get("/", (req, res) => {
      res.send("Hello from the server!");
    });

    app.listen(3000);

Visit http://localhost:3000 → you see the response.

Modern alternatives to Express to know about:
    Fastify      faster, similar API
    Hono         very fast, works on edge runtimes (Cloudflare, Deno, Bun)
    NestJS       structured, opinionated, TypeScript-first`,
      },
      {
        title: "HTTP & REST APIs",
        body: `APIs are how the frontend and backend talk to each other.

HTTP METHODS — the verbs of the web

    GET     retrieve data       "give me the user list"
    POST    send / create data  "here's a new user to create"
    PUT     update data         "replace this user's info"
    PATCH   partially update    "change just the email"
    DELETE  remove data         "delete this user"

REST — the standard pattern for URL design

    GET    /users              all users
    GET    /users/42           user with id 42
    POST   /users              create a new user
    PUT    /users/42           update user 42
    DELETE /users/42           delete user 42

STATUS CODES — what the server says back

    200  OK             success
    201  Created        new thing was created
    204  No Content     success, nothing to return
    400  Bad Request    you sent something wrong
    401  Unauthorized   need to log in first
    403  Forbidden      logged in but not allowed
    404  Not Found      doesn't exist
    429  Too Many Requests    rate limit
    500  Server Error   something broke on the server

JSON is the standard data format. Your API sends and receives objects like:

    { "id": 42, "name": "Ada", "email": "a@b.com" }`,
      },
      {
        title: "Databases",
        body: `Databases store your app's data permanently.

TWO MAIN TYPES

RELATIONAL (SQL) — tables with rows and columns

    Tools: PostgreSQL, MySQL, SQLite

    Users table
    id | name  | email           | created_at
    1  | Alice | alice@email.com | 2024-01-01
    2  | Bob   | bob@email.com   | 2024-01-02

    Query with SQL:

        SELECT * FROM users WHERE name = 'Alice';
        INSERT INTO users (name, email) VALUES ('Carol', 'c@email.com');

NON-RELATIONAL (NoSQL) — flexible documents

    Tools: MongoDB, Firebase Firestore, DynamoDB

        { "_id": "abc123", "name": "Alice", "posts": ["p1", "p2"] }

WHICH TO USE
  SQL     → structured data, relationships between data (most apps)
  NoSQL   → flexible or denormalized data, rapid prototyping

FOR BEGINNERS (2026): PostgreSQL hosted on Supabase or Neon. Free tier, no setup.

ORMs — use one, don't write raw SQL forever

An ORM lets you query a database using JS/TS objects, safely typed.

    Drizzle       modern, TypeScript-first, SQL-like (popular in 2026)
    Prisma        very popular, batteries-included
    Kysely        query builder, lighter

Example (Drizzle):

    const user = await db.select().from(users).where(eq(users.id, 42));`,
      },
      {
        title: "Authentication",
        body: `Authentication = proving who you are (login system).

HOW LOGIN WORKS, STEP BY STEP

  1.  user submits email + password
  2.  backend looks up email in the database
  3.  compares password (HASHED — never store plain passwords)
  4.  if correct, creates a TOKEN and sends it back
  5.  frontend stores the token
  6.  every future request includes the token
  7.  backend verifies token to know who's asking

PASSWORDS — ALWAYS HASH THEM

    Wrong:   user.password = "password123"
    Right:   const hashed = await bcrypt.hash(password, 10);
             // stores "$2b$10$xG8vJz..."  — unreadable, cannot be reversed

JWT (JSON Web Token) is a common token format. Cookies with httpOnly+secure are another. Both work; pick one per project.

LIBRARIES THAT MAKE AUTH EASIER (2026)

    Better Auth       modern, TypeScript-first, self-hosted
    Clerk             hosted auth service, UI included
    Auth.js (formerly NextAuth)   batteries-included for Next.js
    Lucia             lightweight auth toolkit
    Supabase Auth     if you're already using Supabase

SECURITY RULES THAT ARE NON-NEGOTIABLE

  • never store plain passwords
  • never log passwords or tokens
  • never put secrets (API keys) in frontend code — use env variables on the backend
  • use HTTPS everywhere in production
  • rate-limit your login endpoint to stop brute force attempts`,
      },
      {
        title: "Deployment — going live",
        body: `Deployment = putting your site on the internet.

FRONTEND (HTML / CSS / JS, or React builds)

    Vercel                connects to GitHub → auto-deploys on every push
    Netlify               similar, drag-and-drop or Git
    Cloudflare Pages      fast, generous free tier
    GitHub Pages          free for static sites

BACKEND (Node, etc.)

    Railway               easy for Node beginners
    Render                free tier available
    Fly.io                global edge deployments
    Cloudflare Workers    edge runtime, very fast
    AWS / GCP / Azure     the big clouds, more power, more complexity

DATABASE HOSTING

    Neon                  serverless PostgreSQL, generous free tier
    Supabase              PostgreSQL + auth + storage in one
    MongoDB Atlas         hosted MongoDB
    PlanetScale           hosted MySQL (serverless)

THE PROFESSIONAL WORKFLOW

    1.  write code on your computer
    2.  push to GitHub
    3.  connect GitHub to Vercel (frontend) + Railway / Render (backend)
    4.  every push automatically deploys
    5.  your live site updates instantly

This is how almost every modern team works.

ENV VARIABLES — the thing you forget to configure

Never commit API keys to Git. Store them as environment variables in your hosting provider's dashboard. In code:

    process.env.DATABASE_URL       (Node)
    import.meta.env.VITE_KEY       (Vite frontend — VITE_ prefix)`,
      },
    ],
    quiz: [
      {
        q: "What does the HTTP method POST typically mean?",
        options: [
          "Retrieve data",
          "Create or submit data",
          "Delete data",
          "Check if a resource exists",
        ],
        correct: 1,
        explain: "POST is used to create or submit new data. GET retrieves, PUT/PATCH update, DELETE removes.",
      },
      {
        q: "Why do we HASH passwords instead of storing them directly?",
        options: [
          "It makes them shorter",
          "So the database can't be hacked",
          "So even if the database leaks, attackers can't read the passwords",
          "Hashing is just a convention",
        ],
        correct: 2,
        explain: "Hashing is one-way. If your database leaks, attackers get hashes, not passwords. Always use bcrypt, argon2, or scrypt — never plain text, never MD5/SHA1.",
      },
      {
        q: "Where should you store API keys and secrets?",
        options: [
          "In your frontend code, encoded in base64",
          "In a .env file committed to Git",
          "In environment variables on the server, never in frontend code",
          "In the database",
        ],
        correct: 2,
        explain: "Secrets belong on the backend, loaded from environment variables, never exposed in frontend code or committed to Git.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  11 — Python & FastAPI: an alternative backend
  // ────────────────────────────────────────────────────────────────────
  {
    id: "python-fastapi",
    part: "11",
    partLabel: "Backend",
    color: "#3776AB",
    emoji: "🐍",
    title: "Python & FastAPI",
    subtitle: "Another way to build backends",
    lessons: [
      {
        title: "Why Python for backend",
        body: `JavaScript is a fine backend language, but it's not the only one. Python has run a huge chunk of the internet for 20+ years — Instagram, Reddit, Dropbox, YouTube's early days, and most of modern data science and AI.

When Python makes sense:
    • You're doing anything with ML, AI, or data pipelines — the libraries are miles ahead of JS
    • Your team already writes Python (don't fight your org)
    • You need mature scientific libraries (numpy, pandas, scikit-learn)
    • You want readable code for a non-JS audience

When JS/TS makes sense:
    • Sharing code or types between frontend and backend
    • You want one language across the stack
    • Real-time apps where the Node event loop shines
    • Teams with mostly frontend experience

There is no "better" — only fits. Good developers learn both enough to choose.`,
        exercises: [
          "Install Python 3.11+ (python.org or pyenv).",
          "Write the smallest program: print('hello') — run it with 'python3 file.py'.",
        ],
      },
      {
        title: "Python basics for JS developers",
        body: `If you already know JavaScript, Python has less surprise than you'd think.

Variables — no let/const:
    name = "Ada"
    age = 37

Functions — def instead of function:
    def greet(name):
        return f"Hello, {name}"

    greet("Ada")

Lists and dicts are arrays and objects:
    numbers = [1, 2, 3]
    user = { "name": "Ada", "age": 37 }
    print(user["name"])

Loops — for...in for everything:
    for n in numbers:
        print(n)

The big differences:
    • Indentation is syntax — no braces, spaces matter
    • No type annotations required, but you should use them for APIs
    • print() instead of console.log
    • None instead of null, True/False capitalized
    • "self" instead of "this" in classes

You're not here to become a Python expert — you need enough to write a web API.`,
        exercises: [
          "Write a function that takes a list of numbers and returns only the even ones.",
          "Write a dict of three users and loop over it printing each name.",
        ],
      },
      {
        title: "FastAPI — a modern Python web framework",
        body: `FastAPI is to Python what Express (or Hono) is to Node — a framework for writing HTTP APIs. It's the most-loved Python web framework in the last 4 years running, and for good reasons: fast, typed, auto-generates docs.

Install it:

    pip install fastapi uvicorn

A minimal server:

    # main.py
    from fastapi import FastAPI

    app = FastAPI()

    @app.get("/")
    def root():
        return { "message": "Hello from FastAPI" }

    @app.get("/users/{user_id}")
    def get_user(user_id: int):
        return { "id": user_id, "name": "Ada" }

Run it:

    uvicorn main:app --reload

Open http://localhost:8000 — it works.
Open http://localhost:8000/docs — free Swagger UI, auto-generated.
Open http://localhost:8000/redoc — another free docs UI.

That "{user_id: int}" in the signature isn't cosmetic. FastAPI uses it to:
    • Validate the URL param (string "abc" → 422 error, not a crash)
    • Document the type in the Swagger UI
    • Give editor autocomplete`,
        exercises: [
          "Run the example above locally and open /docs in your browser.",
          "Add a POST /users endpoint that accepts a JSON body.",
        ],
      },
      {
        title: "Typing, Pydantic & automatic docs",
        body: `FastAPI's best trick is using Pydantic (its sibling library) to describe request and response shapes.

Define a model:

    from pydantic import BaseModel

    class User(BaseModel):
        name: str
        email: str
        age: int | None = None

Use it in a route:

    @app.post("/users")
    def create_user(user: User):
        # user is validated automatically before your code runs
        return { "ok": True, "user": user }

Send a bad request:
    POST /users  { "name": "Ada" }
    → 422 Unprocessable Entity, with a clear message about missing "email"

You don't write validation code. You don't write docs. You write a type. The framework handles the rest.

Compared to a typical Express/Node setup, you skip:
    • A validation library (zod, joi, yup)
    • A docs generator (swagger-jsdoc, tsoa)
    • An OpenAPI schema writer

For CRUD APIs, FastAPI's developer experience is probably the best in any language right now. That's not a small claim.`,
        exercises: [
          "Define a Pydantic model for a blog Post (title, body, author) and wire it to a POST /posts endpoint.",
          "Check the /docs page and try sending an invalid request from the UI.",
        ],
      },
      {
        title: "When to pick Python over Node",
        body: `A short, honest cheat sheet.

Pick Python + FastAPI when:
    • You're doing ML, AI, data pipelines, scientific computing
    • You want automatic OpenAPI docs out of the box
    • Your team already knows Python
    • You're writing scripts, CLIs, or non-web tools alongside the API

Pick Node + Express/Hono/Elysia when:
    • You want to share TypeScript types between backend and frontend
    • You're building real-time or streaming apps (WebSockets, SSE)
    • Your app is latency-sensitive at the I/O layer
    • Your team is frontend-first

Pick both:
    • FastAPI for the AI/ML service (model inference, embeddings, data work)
    • Node/Bun for the main app server (auth, CRUD, realtime)
    • They talk over HTTP or a message queue

Polyglot backends are normal in production. Microservices exist partly so different teams can pick different tools for different jobs.

Bottom line: knowing both gets you hired faster and keeps you useful longer than knowing only one very well.`,
        exercises: [
          "Write a FastAPI endpoint that calls OpenAI (or any HTTP API) and returns the response to a frontend.",
          "From a React app, fetch() that endpoint and render the result.",
        ],
      },
    ],
    quiz: [
      {
        q: "What does FastAPI use for request/response validation?",
        options: [
          "Zod",
          "Joi",
          "Pydantic",
          "Manual if/else checks",
        ],
        correct: 2,
        explain: "Pydantic is FastAPI's companion library. Type-annotate your models, and validation, serialization, and docs come for free.",
      },
      {
        q: "Which of these is NOT a good reason to pick Python over Node?",
        options: [
          "You're doing ML/AI work",
          "Your team already writes Python",
          "You want to share TypeScript types with your frontend",
          "You need mature scientific libraries",
        ],
        correct: 2,
        explain: "Sharing types with the frontend is a solid reason to stay in the JS/TS world — that's exactly where Node wins.",
      },
      {
        q: "How do you run a FastAPI app?",
        options: [
          "node main.py",
          "uvicorn main:app --reload",
          "python main.py start",
          "npm run start",
        ],
        correct: 1,
        explain: "Uvicorn is the ASGI server that runs the FastAPI app object. --reload restarts on code changes during development.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  12 — Testing & Debugging
  // ────────────────────────────────────────────────────────────────────
  {
    id: "testing-debugging",
    part: "12",
    partLabel: "Quality",
    color: "#EF4444",
    emoji: "🧪",
    title: "Testing & Debugging",
    subtitle: "How to find what's broken and prove it stays fixed",
    lessons: [
      {
        title: "The debugging mindset",
        body: `Every bug is the same thing: the code is doing exactly what you told it to, but not what you THOUGHT you told it to.

The skill is not memorizing fixes. The skill is narrowing down WHERE reality diverges from your expectations.

THE LOOP

  1.  What do I EXPECT to happen?
  2.  What ACTUALLY happens?
  3.  Where in the code path could they diverge?
  4.  Check that point. Prove it.
  5.  Narrow further until the gap is obvious.

PRINCIPLES

  • assume nothing. the bug is almost always in the last place you'd guess because you'd have already checked the likely places.
  • smaller is faster. isolate the bug in the smallest possible test case. many bugs vanish once you try to reproduce them in isolation.
  • change one thing at a time. don't "try a bunch of stuff." each change is a hypothesis.
  • rubber-duck it. explain what the code SHOULD do, out loud, line by line. you'll often find the bug mid-sentence.

The best debuggers are not smarter. They just narrow down faster and trust the evidence over their intuition.`,
      },
      {
        title: "Browser DevTools — master these",
        body: `Open DevTools: F12 (or right-click → Inspect). Every browser has them. You'll live here.

ELEMENTS TAB
  • inspect and live-edit HTML and CSS
  • toggle pseudo-states (:hover, :focus)
  • see exactly which CSS rules apply and which are overridden

CONSOLE TAB
  • see errors and warnings
  • run JavaScript against the current page
  • every console.log() you write appears here

SOURCES / DEBUGGER TAB
  • set breakpoints in your code (click the line number)
  • step through execution one line at a time
  • inspect every variable's value at each step

NETWORK TAB
  • see every HTTP request the page makes
  • check status codes, request/response bodies, timings
  • filter to XHR/Fetch to isolate API calls

APPLICATION TAB
  • inspect localStorage, sessionStorage, cookies
  • clear them when debugging weird state

PERFORMANCE / LIGHTHOUSE
  • measure load speed, Core Web Vitals
  • identify expensive operations

If you are not using DevTools daily, you're working harder than you need to.`,
      },
      {
        title: "Console mastery",
        body: `console.log() is the most-used debugging tool in the world. But there's more.

BEYOND console.log

    console.log("basic output");
    console.warn("yellow warning");
    console.error("red error");
    console.table(arrayOfObjects);       renders as a table
    console.dir(domElement);             inspectable object view
    console.time("fetch"); …; console.timeEnd("fetch");   // time a block
    console.group("api calls"); …; console.groupEnd();

LABEL YOUR LOGS

    console.log("user:", user);           // ambiguous
    console.log({ user });                // logs { user: {...} } — labeled

DEBUGGER STATEMENT — pause execution in code

    function calculate(x) {
      debugger;     // browser pauses here when DevTools is open
      return x * 2;
    }

BREAKPOINTS via DevTools are even better — you don't need to touch your code.

COMMON BUGS TO LOG CHECK FIRST
  • is the variable actually what I think it is?  (log it)
  • is this function even running?  (log at the top)
  • is this async operation finishing?  (log before AND after await)
  • is the event listener even attached?  (log inside the handler)`,
      },
      {
        title: "Writing your first tests",
        body: `A TEST is code that runs your code and asserts it works. Tests catch regressions — bugs that creep back in later.

VITEST — the modern default in 2026

    npm install --save-dev vitest

A simple test:

    // math.test.js
    // vitest — use: { describe, it, expect }
    // ./math — use: { add }
    describe("add", () => {
      it("adds two numbers", () => {
        expect(add(2, 3)).toBe(5);
      });

      it("handles negatives", () => {
        expect(add(-1, 1)).toBe(0);
      });
    });

Run: npx vitest

THE PATTERN

    describe   group related tests
    it         one specific scenario ("it does X")
    expect     the assertion
    toBe       matcher — exact equality

COMMON MATCHERS

    .toBe(5)                 strict equality for primitives
    .toEqual({ a: 1 })       deep equality for objects
    .toBeTruthy()
    .toBeNull()
    .toContain("hello")      array or string contains
    .toThrow()               function should throw an error

WHAT TO TEST FIRST
  • pure functions (inputs → outputs, no side effects) — trivial to test, catch a lot
  • business logic (pricing calculations, validation, formatting)
  • bugs, as you fix them — write a test that would have caught it

Don't chase 100% coverage. Test what's easy to break and expensive when broken.`,
      },
      {
        title: "Testing React components",
        body: `React components can be tested with REACT TESTING LIBRARY.

    npm install --save-dev @testing-library/react @testing-library/jest-dom vitest jsdom

The philosophy: test the USER EXPERIENCE, not implementation details. Find elements the way a user would.

    // @testing-library/react — use: { render, screen }
    // @testing-library/user-event — use: { userEvent }
    // vitest — use: { expect, it }
    // ./Counter — use: Counter
    it("increments when clicked", async () => {
      render(<Counter />);
      const button = screen.getByRole("button", { name: /increment/i });
      await userEvent.click(button);
      expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    });

PREFER THESE QUERIES (in order)

    getByRole          accessibility-first (what screen readers see)
    getByLabelText     for form inputs
    getByText          for visible text
    getByTestId        last resort

NEVER query by class name or structure. Those are implementation details — they change without affecting the user.

END-TO-END TESTING (run the whole app in a real browser)

    Playwright         Microsoft. Most popular in 2026.
    Cypress            classic, still widely used

Unit + component tests catch most bugs cheaply. E2E catches the few that only show up when everything is wired together. You want some of both.`,
      },
    ],
    quiz: [
      {
        q: "What is the first step when faced with a bug?",
        options: [
          "Rewrite the whole function",
          "Post on Stack Overflow",
          "Clarify what you EXPECT vs what ACTUALLY happens",
          "Add try/catch everywhere",
        ],
        correct: 2,
        explain: "Debugging is the art of narrowing the gap between expectation and reality. You can't do that without stating both clearly first.",
      },
      {
        q: "Which React Testing Library query is preferred?",
        options: [
          "getByClassName",
          "getByRole (or getByLabelText for inputs)",
          "getByStyle",
          "querySelector",
        ],
        correct: 1,
        explain: "Role and label queries mirror how users (and screen readers) actually find elements. They're stable as CSS/structure changes.",
      },
      {
        q: "What should you test first, for maximum value?",
        options: [
          "Every single line (100% coverage)",
          "Pure functions and business logic",
          "CSS styles",
          "Only UI animations",
        ],
        correct: 1,
        explain: "Pure functions and business logic are easy to test and high-leverage. Start there; chase coverage only when it reveals real risk.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  13 — Accessibility
  // ────────────────────────────────────────────────────────────────────
  {
    id: "accessibility",
    part: "13",
    partLabel: "Quality",
    color: "#14B8A6",
    emoji: "♿",
    title: "Accessibility",
    subtitle: "Building for everyone, not just most people",
    lessons: [
      {
        title: "Why accessibility matters",
        body: `Accessibility (a11y — the 11 is the number of letters between "a" and "y") is about making sure people can use what you build regardless of ability.

Who benefits?
    • People who are blind or low-vision using screen readers
    • People with motor impairments navigating by keyboard or switch
    • People with cognitive differences needing clear language and structure
    • People with poor internet or old devices
    • You, when you have a broken arm or a bright phone screen outside

It's also:
    • Legally required in many countries (ADA in the US, EAA in Europe as of 2025)
    • A ranking factor for search engines
    • A sign of craftsmanship — accessible sites are usually well-structured

The frustrating truth: most websites are broken for many users, and it usually takes less effort to do it right than to retrofit later. You build it right from day one by thinking about structure, keyboard, and contrast.`,
        exercises: [
          "Try navigating a website you use daily using only Tab, Shift+Tab, Enter, and arrow keys.",
          "Note three places it breaks.",
        ],
      },
      {
        title: "Semantic HTML, the foundation",
        body: `90% of accessibility is using the right HTML element. You already learned this in the HTML chapter, but it bears repeating here because it's the biggest lever you have.

Use real elements:
    <button>      clickable action
    <a href>      navigation
    <nav>         navigation landmark
    <main>        main content landmark
    <h1>–<h6>     outline of the page
    <label>       form field labels

Avoid:
    <div onClick>       a div is not a button. Screen readers don't know it's clickable.
    <span>Click</span>  same problem.
    button-shaped divs  unreachable by keyboard.

Forms must have labels:

    <label for="email">Email</label>
    <input id="email" type="email" />

    or

    <label>
        Email
        <input type="email" />
    </label>

Images need alt text:
    <img src="logo.png" alt="ACME Inc logo" />     descriptive
    <img src="decoration.png" alt="" />            decorative: empty alt, NOT no alt

This one lesson fixes maybe 60% of common a11y issues on most sites.`,
        exercises: [
          "Audit one of your own pages. Replace every <div onClick> with a real <button>.",
          "Find every <img> and make sure each has an intentional alt attribute (empty or descriptive).",
        ],
      },
      {
        title: "Keyboard, screen readers & ARIA",
        body: `Keyboard support comes free when you use native elements. It breaks the moment you reach for divs and spans.

Rules of thumb:
    • Every interactive thing must be reachable with Tab
    • Focus must be visible (never remove the focus ring without replacing it)
    • Escape should close dialogs; Enter/Space should activate buttons
    • Modals should trap focus until dismissed

Screen readers speak the page aloud. What they announce depends on:
    • The element type (button vs div)
    • The text content
    • ARIA attributes (role, aria-label, aria-describedby, aria-live, etc.)

ARIA (Accessible Rich Internet Applications) is a set of attributes that fill gaps when HTML isn't enough:

    <button aria-label="Close" onClick={close}>×</button>
    <div role="alert">Saved successfully</div>
    <button aria-expanded={open}>Menu</button>

The first rule of ARIA: don't use ARIA if a native element already does the job. A <button> is always better than a <div role="button"> — the browser gives you keyboard, focus, and screen reader support for free.

Use ARIA for things HTML can't express — live regions, expanded/collapsed state, relationships between elements.`,
        exercises: [
          "Try your site with Tab alone. Is the focus ring visible on every interactive element?",
          "Open VoiceOver (Mac: Cmd+F5) or NVDA (Windows: free download) and listen to your homepage.",
        ],
      },
      {
        title: "Testing accessibility",
        body: `You don't need to be perfect — you need to catch the obvious stuff. A realistic minimum:

Automated tools (catch maybe 30% of issues):
    • axe DevTools          browser extension, runs in devtools
    • Lighthouse            built into Chrome devtools, Accessibility tab
    • eslint-plugin-jsx-a11y catches common mistakes as you code

Manual checks (catch the rest):
    • Navigate with Tab only, top to bottom
    • Zoom the page to 200% — does anything break?
    • Check color contrast with a tool like WebAIM Contrast Checker
    • Turn the screen off and use a screen reader for 5 minutes

A pragmatic a11y checklist before shipping:
    [ ] Every image has an intentional alt attribute
    [ ] Forms have labels, errors are announced
    [ ] Focus ring is visible, Tab order makes sense
    [ ] Color contrast is at least 4.5:1 for text
    [ ] Page has a logical heading outline (h1 → h2 → h3)
    [ ] Nothing requires mouse-only to use
    [ ] Lighthouse accessibility score is 95+

Start with this. Improve from there as you learn. Shipping something imperfect but thoughtful beats shipping something polished that excludes users.`,
        exercises: [
          "Run Lighthouse on one of your sites and fix the top 3 accessibility issues it reports.",
          "Install the axe DevTools extension and run it on the same page — note what it finds that Lighthouse missed.",
        ],
      },
    ],
    quiz: [
      {
        q: "You need a clickable element. Which is best?",
        options: [
          "<div onClick={...}>",
          "<span role='button' onClick={...}>",
          "<button onClick={...}>",
          "<a onClick={...}>",
        ],
        correct: 2,
        explain: "A real <button> gives you keyboard, focus, and screen reader support for free. ARIA on a div is a fallback, not a first choice.",
      },
      {
        q: "When should an <img> have an empty alt attribute (alt=\"\")?",
        options: [
          "When you don't want it to load",
          "When the image is purely decorative and adds no information",
          "When the image is missing",
          "Never — always provide descriptive alt text",
        ],
        correct: 1,
        explain: "Empty alt tells screen readers to skip a decorative image. Missing alt entirely is worse — it makes the reader announce the file name.",
      },
      {
        q: "Automated accessibility tools typically catch about what percentage of issues?",
        options: [
          "100% — if it passes Lighthouse, you're done",
          "Roughly 30% — they miss most real-world problems",
          "None — they're useless",
          "Exactly 75%",
        ],
        correct: 1,
        explain: "Tools catch obvious violations but miss semantic, cognitive, and context-dependent issues. Manual testing and real users are irreplaceable.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  14 — Performance
  // ────────────────────────────────────────────────────────────────────
  {
    id: "performance",
    part: "14",
    partLabel: "Quality",
    color: "#F59E0B",
    emoji: "⚡",
    title: "Performance",
    subtitle: "Shipping fast, staying fast",
    lessons: [
      {
        title: "Performance is a feature",
        body: `Speed affects everything — conversion, retention, SEO, and how your app FEELS. The difference between 300ms and 3s isn't cosmetic; it's whether people bounce.

The metrics worth knowing (2026 Core Web Vitals):

LCP  Largest Contentful Paint     when the main content appears.   Good: < 2.5s
INP  Interaction to Next Paint    how fast clicks/taps respond.    Good: < 200ms
CLS  Cumulative Layout Shift      how much things jump around.     Good: < 0.1

You measure these with:
    • Chrome DevTools → Performance tab
    • Lighthouse      Performance audit
    • web-vitals npm package in production

The optimization loop:
    1. Measure before changing anything
    2. Change one thing
    3. Measure again
    4. Keep it if it helped, revert if not

People love optimizing things that don't matter. Profile first. Your bundle is probably too big, your images are probably unoptimized, and you probably haven't fixed those two — everything else is a rounding error.`,
        exercises: [
          "Run Lighthouse on your slowest page and note its LCP, INP, and CLS scores.",
          "Install the 'web-vitals' npm package and log the three metrics to the console.",
        ],
      },
      {
        title: "Loading & bundling",
        body: `The single biggest performance lever for most web apps: how much code you ship.

Reduce bundle size:
    • Code-split by route — don't load the admin panel for visitors
    • Lazy-load heavy components — React.lazy + Suspense, or dynamic import()
    • Tree-shake — modern bundlers do this automatically if you use ES modules
    • Replace heavy libs with lighter ones (moment.js → date-fns, lodash → native, etc.)

Example of lazy-loading:

    // react — use: { lazy, Suspense }
    const Charts = lazy(() => import('./Charts'))

    function Dashboard() {
      return (
        <Suspense fallback={<p>Loading charts…</p>}>
          <Charts />
        </Suspense>
      )
    }

Now Charts (and whatever heavy dependency it pulls in) doesn't download until it's actually needed.

Other wins:
    • Preload critical assets: <link rel="preload" as="font" href="..." />
    • Prefetch likely-next pages: <link rel="prefetch" href="/next-page" />
    • Enable Brotli/Gzip compression on your CDN (most do it automatically)
    • Use HTTP/2 or HTTP/3 — again, most good hosts do this for you

Analyze your bundle:
    • npx vite-bundle-visualizer     for Vite projects
    • next-bundle-analyzer           for Next.js
    • source-map-explorer            any project with source maps`,
        exercises: [
          "Run a bundle analyzer on your project. What's the biggest dependency?",
          "Pick one heavy route and lazy-load it. Re-measure bundle size.",
        ],
      },
      {
        title: "React rendering optimizations",
        body: `Rendering performance problems in React almost always come from the same three causes:

1. Rendering too many components on every update.
2. Re-rendering big trees when a small piece of state changes.
3. Passing new object/function references that bust memoization.

Tools in the box:

React.memo — skip renders if props are unchanged:
    const Row = React.memo(function Row({ item }) {
      return <div>{item.name}</div>
    })

useMemo — cache expensive calculations:
    const sorted = useMemo(
      () => items.sort(byName),
      [items]
    )

useCallback — stable function references so memoed children don't re-render:
    const onClick = useCallback(() => setOpen(o => !o), [])

Before reaching for these, try:
    • Move state DOWN. If only <Search /> uses search state, don't put it in App.
    • Split a big component into smaller ones so re-renders are scoped.
    • Use React DevTools Profiler to see what's actually rendering.

An honest note: premature memoization can make code worse without making it faster. Measure first. If a component renders 3 times when it could render once, and each render is cheap, it doesn't matter.

Virtualization (react-virtual / TanStack Virtual) is the answer for long lists — rendering 10,000 rows always dies without it. Rendering 50 visible rows out of 10,000 is fast on any machine.`,
        exercises: [
          "Open React DevTools Profiler and record an interaction on your app. What re-rendered?",
          "Try TanStack Virtual on a list of 1,000+ items.",
        ],
      },
      {
        title: "Images, fonts & the Network tab",
        body: `Images are usually the heaviest thing on a page. Fonts are often second. Both are mostly solved by following a short checklist.

Images:
    • Use modern formats — AVIF first, WebP fallback, never ship a 2MB PNG
    • Specify width and height so the browser reserves space (prevents CLS)
    • Use <img loading="lazy"> for below-the-fold images
    • Serve responsive sizes with srcset:

        <img
          src="hero.jpg"
          srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1600.jpg 1600w"
          sizes="(max-width: 600px) 400px, 800px"
          alt="..."
        />

    • In Next.js / TanStack Start, use the framework's <Image> component — it handles most of this.

Fonts:
    • Prefer variable fonts (one file, many weights)
    • Add font-display: swap so text shows while the font loads
    • Preload your hero font: <link rel="preload" as="font" crossorigin />
    • Subset fonts if you only need certain characters

The Network tab is your best friend:
    1. Open DevTools → Network
    2. Reload with "Disable cache" on
    3. Sort by Size
    4. Look at the top 5. Do they need to be that big?

Ship small, measure often, and don't guess. That's the whole thing.`,
        exercises: [
          "Open your site's Network tab and find the 3 biggest files. Can any be shrunk or lazy-loaded?",
          "Convert one PNG hero image to AVIF/WebP and measure the size difference.",
        ],
      },
    ],
    quiz: [
      {
        q: "Which is NOT a Core Web Vital?",
        options: [
          "LCP — Largest Contentful Paint",
          "INP — Interaction to Next Paint",
          "CLS — Cumulative Layout Shift",
          "API — Average Page Index",
        ],
        correct: 3,
        explain: "LCP, INP, and CLS are the three Core Web Vitals as of 2024. 'API' isn't a Google metric.",
      },
      {
        q: "You have a slow React list of 5,000 items. The best first move is:",
        options: [
          "Wrap everything in useMemo",
          "Use virtualization (react-virtual / TanStack Virtual)",
          "Add React.memo to every component",
          "Switch to Preact",
        ],
        correct: 1,
        explain: "For long lists, rendering only what's visible is orders of magnitude faster than any memoization trick.",
      },
      {
        q: "What's the safest first step when optimizing performance?",
        options: [
          "Rewrite the slow component",
          "Add useMemo everywhere",
          "Measure — use Lighthouse or DevTools Profiler before changing anything",
          "Upgrade to the latest React version",
        ],
        correct: 2,
        explain: "Always measure first. Optimization without profiling is guessing, and most guesses are wrong.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  15 — AI-Assisted Development
  // ────────────────────────────────────────────────────────────────────
  {
    id: "ai-assisted",
    part: "15",
    partLabel: "Workflow",
    color: "#F59E0B",
    emoji: "✨",
    title: "AI-Assisted Development",
    subtitle: "The 2026 reality — AI as a tool, not a replacement",
    lessons: [
      {
        title: "The honest picture",
        body: `By 2026, most professional developers use AI tools daily. They write boilerplate, explain unfamiliar code, draft tests, and sometimes build whole features. They are a real productivity multiplier.

They are also dangerous in the hands of someone who skipped the fundamentals.

WHAT AI CAN DO WELL RIGHT NOW

  ✓ generate boilerplate (forms, CRUD, types, tests)
  ✓ explain unfamiliar code or error messages
  ✓ suggest patterns and catch obvious bugs
  ✓ refactor across many files mechanically
  ✓ give you a working starting point when you're stuck

WHAT AI DOES POORLY

  ✗ understand business context it wasn't told about
  ✗ make correct architectural decisions for your specific problem
  ✗ debug subtle, system-level issues
  ✗ know whether its output is correct (it will confidently be wrong)
  ✗ teach you the fundamentals if you skip the practice yourself

THE CORE RULE

Use AI as a COLLABORATOR, not an oracle. Every suggestion needs your judgment. You are the engineer; the AI is your intern.

Skill at using AI well is not the same as skill at programming. Programming skill lets you know WHEN the AI is wrong.`,
      },
      {
        title: "Tools you'll actually use",
        body: `THE LANDSCAPE (2026)

IDE-INTEGRATED

    GitHub Copilot       inline completions, chat. Microsoft.
    Cursor               VS Code fork, AI-first. Popular with startups.
    Windsurf / Antigravity   agentic coding IDEs.
    Zed (AI features)    fast native editor with AI integrations.

CHAT / CONVERSATIONAL

    Claude (anthropic.com)
    ChatGPT
    Gemini
    Each has browser + API + MCP integrations.

TERMINAL / AGENTIC

    Claude Code          CLI tool that takes natural-language tasks, runs them
    Aider                terminal-based pair programming
    Codex / OpenAI CLI

WHAT EACH IS GOOD FOR

  • autocomplete for boilerplate  → Copilot / Cursor inline
  • understanding a new codebase   → chat with the repo
  • multi-file refactors           → agentic IDE or Claude Code
  • explaining an error            → chat tools (paste the error + stack)

Most developers end up using 2–3 of these together. Pick what fits your flow; don't let the tool pick you.`,
      },
      {
        title: "Prompting for code, effectively",
        body: `Bad prompts get plausible-looking but subtly wrong code. Good prompts get code you can actually use.

GOOD PROMPTS

  • state the GOAL ("handle an empty list" not "fix this")
  • give CONTEXT (stack, framework versions, patterns already in use)
  • share CONSTRAINTS (no new dependencies, must use X pattern)
  • provide INPUT + EXPECTED OUTPUT when relevant
  • ask for reasoning when the answer isn't obvious ("walk me through why")

STRUCTURE THAT WORKS

    Context: this is a TanStack Start app, Drizzle ORM, Postgres.
    Goal: add a DELETE /posts/:id route that soft-deletes.
    Constraints: reuse the existing db client from ~/lib/db.
    Current code: (paste relevant file)
    Expected: returns 204 on success, 404 if not found.

RED FLAGS IN AI OUTPUT
  • invents an API that doesn't exist ("hallucination")
  • uses a deprecated pattern
  • silently changes unrelated code
  • omits error handling
  • suggests installing a new dependency when the existing stack can do it

FIX-UP PROMPTING
When the first answer is wrong, don't accept it and move on. Tell the AI specifically:

    "That uses X, but we don't have X installed. Use Y instead."
    "The types don't match — our User has these fields: ..."

The iteration is the work. First tries are starting points.`,
      },
      {
        title: "Learning vs. delegating",
        body: `The hardest decision with AI tooling is when to USE it and when to NOT use it.

USE AI FOR
  • things you've done before and don't want to redo
  • tasks where verification is easy (tests pass, UI looks right)
  • exploring unfamiliar APIs or libraries
  • mechanical refactors

DO NOT USE AI FOR (early in your journey)
  • the FIRST time you learn a concept (let yourself struggle — that's the learning)
  • debugging a problem you haven't tried to understand yet
  • anything you can't evaluate for correctness

THE LEARNING TRAP

If AI writes the code for you before you understand what it does, you don't learn. You accumulate "I sort of remember a thing that worked." That's much worse than genuinely knowing less.

A rule of thumb early on:
  • try for 20 minutes yourself
  • then ask AI — but ask it to EXPLAIN, not just write
  • write the final version in your own words, line by line

Later in your career, delegation becomes a real skill. But you earn the right to delegate by first being able to do the thing.

FINAL NOTE

AI tools in 2026 are extraordinary. They don't replace programmers — they amplify good ones and expose bad ones. Invest in the fundamentals. The rest compounds.`,
      },
    ],
    quiz: [
      {
        q: "What is the safest way to use AI code suggestions?",
        options: [
          "Copy-paste them directly, they're usually right",
          "Treat them as drafts and verify every line",
          "Only use AI for the parts you don't understand",
          "Ask AI to write the whole app",
        ],
        correct: 1,
        explain: "AI suggestions are a starting point. You always need to understand and verify the code. AI confidence ≠ AI correctness.",
      },
      {
        q: "When is AI LEAST useful early in your learning?",
        options: [
          "When writing boilerplate",
          "When learning a concept for the first time",
          "When explaining an error message",
          "When refactoring code mechanically",
        ],
        correct: 1,
        explain: "When first learning a concept, the struggle IS the learning. Skipping it with AI means you absorb less and gain a false sense of knowing.",
      },
      {
        q: "What makes a prompt for code generation actually good?",
        options: [
          "One-word requests",
          "Clear goal, context (stack/versions), constraints, and expected output",
          "Using all caps",
          "Making the AI guess your intent",
        ],
        correct: 1,
        explain: "Good prompts give enough context that the AI can produce code that fits your project. Vague prompts produce vague (and often wrong) code.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  //  16 — Putting It All Together
  // ────────────────────────────────────────────────────────────────────
  {
    id: "capstone",
    part: "16",
    partLabel: "Capstone",
    color: "#EC4899",
    emoji: "🔗",
    title: "Putting It All Together",
    subtitle: "The full picture, learning path & what to build",
    lessons: [
      {
        title: "The full-stack mental model",
        body: `Here's how all the pieces connect when a user visits an app:

    USER
      │  types URL in browser
      ▼
    BROWSER (Client)
      HTML   →  structures the page
      CSS    →  styles the page
      JS     →  handles interactions, fetches data
      │  sends HTTP request
      ▼
    BACKEND SERVER  (Node / Express / Next.js API route)
      receives request
      checks authentication
      runs business logic
      queries the database
      │
      ▼
    DATABASE  (PostgreSQL / MongoDB)
      stores and retrieves data
      │  returns data
      ▼
    BACKEND  →  sends JSON response
      │
      ▼
    FRONTEND  →  receives JSON, updates the page

The user sees a smooth, interactive app. None of the backend code is visible.

THE JOB TITLES

    Frontend developer   HTML, CSS, JS, React
    Backend developer    servers, databases, APIs, auth
    Full-stack developer can build all of it
    Mobile / DevOps / SRE / etc. are adjacent specializations`,
      },
      {
        title: "Month-by-month learning path",
        body: `Follow this order. Do NOT skip steps.

MONTH 1 — Core HTML & CSS
  ✓ build 3 static pages (no JS yet)
  ✓ learn Flexbox and Grid thoroughly
  ✓ build a responsive personal portfolio page

MONTH 2 — Git, Terminal, JavaScript fundamentals
  ✓ commit your projects to GitHub from day one
  ✓ variables, functions, arrays, objects, loops
  ✓ DOM manipulation and events
  ✓ build: a to-do list, a quiz app, a calculator

MONTH 3 — JavaScript + APIs
  ✓ fetch() and async/await
  ✓ build a weather app or movie search with a real API
  ✓ basic error handling
  ✓ start touching TypeScript types gently

MONTH 4 — React
  ✓ components, props, state, hooks
  ✓ useEffect and data fetching
  ✓ build a small React app with real data

MONTH 5 — TypeScript + a real React project
  ✓ convert a previous project to TS
  ✓ build something you'd actually use
  ✓ deploy it to Vercel or Netlify

MONTH 6 — Backend & Full-Stack
  ✓ Node + Express (or Next.js API routes)
  ✓ REST APIs
  ✓ database (start with SQLite or Postgres)
  ✓ authentication
  ✓ deploy a full-stack app

MILESTONE: one deployed full-stack project teaches you more than six months of tutorials.`,
      },
      {
        title: "Projects to build, in order",
        body: `Build these in order. Each teaches something specific.

BEGINNER — HTML + CSS only
  1.  personal portfolio page
  2.  recipe page with a nice layout
  3.  a "coming soon" landing page

INTERMEDIATE — + JavaScript
  4.  to-do list (add, complete, delete, persist in localStorage)
  5.  quiz app with score tracking
  6.  calculator
  7.  weather app using a real API
  8.  movie / book search app

REACT
  9.  rebuild your to-do list as a React app
  10. pomodoro timer
  11. markdown editor with live preview
  12. expense tracker

FULL STACK
  13. blog with create/read/update/delete
  14. user authentication (signup + login)
  15. notes app that saves to a database
  16. URL shortener with analytics

PORTFOLIO-WORTHY
  17. real-time chat app
  18. social app (posts, likes, follows)
  19. SaaS tool that solves a real problem you have
  20. your own portfolio site — built from scratch, hosted, custom domain

Rule: build things you'd actually USE. Motivation is what gets you through the hard parts.`,
      },
      {
        title: "Common beginner mistakes",
        body: `Avoid these. They waste enormous amounts of time.

TUTORIAL HELL
    Watching tutorials without building anything.
    Fix: for every 1 hour of tutorial, spend 2 hours building.

TRYING TO MEMORIZE EVERYTHING
    Nobody memorizes every CSS property or API.
    Fix: learn the concepts. Google the syntax. Always.

NOT USING THE BROWSER CONSOLE
    F12 is your most powerful tool.
    Fix: console.log() constantly. Check the console first.

GIVING UP WHEN STUCK
    Every developer gets stuck. It's part of the job.
    Fix: 20 min debugging → Google error → ask AI → ask a human.

SKIPPING FUNDAMENTALS
    Jumping to React without understanding JS.
    Fix: follow the learning path. Fundamentals first.

ONLY BUILDING INSIDE TUTORIALS
    Copying code doesn't teach you — breaking it does.
    Fix: close the tutorial. Build from memory. Break it. Fix it.

NOT USING GIT FROM DAY ONE
    "I'll learn Git later" is how you lose a week of work.
    Fix: commit every day, even on solo projects.

NOT SHIPPING
    An incomplete, deployed project beats a perfect local one.
    Fix: deploy early. Iterate live.

THE TRUTH: every senior developer still Googles things every day. The real skill is knowing what to search for and how to evaluate the answer.`,
      },
      {
        title: "Essential tools & vocabulary",
        body: `Terms that come up constantly:

    Git              tracks changes to your code
    GitHub           hosts your Git repos online
    npm / pnpm / bun package managers
    package.json     lists your project's dependencies
    Terminal         command-line interface
    localhost        your computer acting as a server during development
    API key          a private password to use a third-party API
    TypeScript       JavaScript with type safety
    Linter           tool that catches errors as you write (ESLint)
    Bundler          combines your files for production (Vite, Webpack, esbuild)
    SSR / SSG / CSR  rendering strategies — server / static / client
    CI / CD          continuous integration / deployment — automatic test + deploy
    Hosting / PaaS   where your live app runs (Vercel, Railway, etc.)
    CDN              content delivery network — caches files worldwide

MUST-KNOW VS CODE SHORTCUTS

    Cmd/Ctrl + S           save file
    Cmd/Ctrl + P           quick file search
    Cmd/Ctrl + Shift + P   command palette
    Cmd/Ctrl + /           comment line
    F12                    go to definition
    Cmd/Ctrl + D           select next occurrence

MUST-USE DEVTOOLS (F12)

    Console   run JS, read errors, see your logs
    Elements  inspect and live-edit HTML/CSS
    Network   see all HTTP requests
    Sources   set breakpoints, step through code
    Application   inspect storage, cookies

FINAL THOUGHT

You will not learn everything at once. Nobody has. The goal is a compounding daily practice: build, ship, break, fix, learn, repeat. See you on the other side.`,
      },
    ],
    quiz: [
      {
        q: "What should you do FIRST when you hit a bug?",
        options: [
          "Rewrite the function",
          "Check the browser console for errors",
          "Ask Stack Overflow",
          "Restart your computer",
        ],
        correct: 1,
        explain: "The console usually tells you exactly what went wrong and where. Always check it before anything else.",
      },
      {
        q: "Which habit is the single most important for beginners?",
        options: [
          "Memorizing syntax",
          "Watching every tutorial",
          "Shipping projects you actually finish",
          "Switching between frameworks",
        ],
        correct: 2,
        explain: "One finished, deployed, imperfect project teaches you more than ten unfinished tutorial follow-alongs.",
      },
      {
        q: "When should you start using Git?",
        options: [
          "After you're an advanced developer",
          "Only on team projects",
          "From day one, on every project",
          "When your project is big enough",
        ],
        correct: 2,
        explain: "Git from day one. Commit daily. It's a safety net, a learning log, and a portfolio, all at once.",
      },
    ],
  },

];

// ═══════════════════════════════════════════════════════════════════════
//  STATE & PERSISTENCE
// ═══════════════════════════════════════════════════════════════════════

const STORAGE_KEY = "webdev-curriculum.v3";

function usePersistedState(key, initial) {
  const fullKey = `${STORAGE_KEY}.${key}`;
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return initial;
    try {
      const raw = window.localStorage.getItem(fullKey);
      return raw !== null ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(fullKey, JSON.stringify(state));
    } catch {
      /* quota exceeded, private mode, etc. — fail silently */
    }
  }, [fullKey, state]);
  return [state, setState];
}

// ═══════════════════════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════════════════════

const TOTAL_LESSONS = curriculum.reduce((n, p) => n + p.lessons.length, 0);

function flatIndex(partIdx, lessonIdx) {
  let i = 0;
  for (let p = 0; p < partIdx; p++) i += curriculum[p].lessons.length;
  return i + lessonIdx;
}

function lessonKey(partIdx, lessonIdx) {
  return `${curriculum[partIdx].id}.${lessonIdx}`;
}

function estimateReadingTime(text) {
  const words = (text || "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// Parse inline markers: **bold** and `code`
function parseInline(text) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let match;
  let k = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) out.push(text.slice(last, match.index));
    const m = match[0];
    if (m.startsWith("**")) {
      out.push(<strong key={`b${k++}`}>{m.slice(2, -2)}</strong>);
    } else {
      out.push(
        <code key={`c${k++}`} className="inline-code">
          {m.slice(1, -1)}
        </code>
      );
    }
    last = match.index + m.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

// Parse a lesson body string into blocks
function parseBody(body) {
  if (!body) return [];
  const chunks = body.split(/\n\s*\n/);
  const blocks = [];
  for (const chunk of chunks) {
    const lines = chunk.split("\n");
    const nonEmpty = lines.filter((l) => l.trim());
    if (nonEmpty.length === 0) continue;

    // Code block: every non-empty line starts with 4+ spaces
    if (nonEmpty.every((l) => /^\s{4,}/.test(l))) {
      const minIndent = Math.min(
        ...nonEmpty.map((l) => l.match(/^\s*/)[0].length)
      );
      const text = lines.map((l) => l.slice(minIndent)).join("\n").trim();
      blocks.push({ type: "code", text });
      continue;
    }

    // Numbered list
    const numberedCount = nonEmpty.filter((l) => /^\s*\d+\.\s/.test(l)).length;
    if (numberedCount >= 2 && numberedCount >= nonEmpty.length * 0.6) {
      const items = [];
      let current = "";
      for (const l of lines) {
        const m = l.match(/^\s*\d+\.\s+(.*)$/);
        if (m) {
          if (current) items.push(current.trim());
          current = m[1];
        } else if (current && l.trim()) {
          current += " " + l.trim();
        }
      }
      if (current) items.push(current.trim());
      blocks.push({ type: "ol", items });
      continue;
    }

    // Bullet list
    const bulletedCount = nonEmpty.filter((l) =>
      /^\s*[•·▪■-]\s/.test(l)
    ).length;
    if (bulletedCount >= 2 && bulletedCount >= nonEmpty.length * 0.6) {
      const items = [];
      let current = "";
      for (const l of lines) {
        const m = l.match(/^\s*[•·▪■-]\s+(.*)$/);
        if (m) {
          if (current) items.push(current.trim());
          current = m[1];
        } else if (current && l.trim()) {
          current += " " + l.trim();
        }
      }
      if (current) items.push(current.trim());
      blocks.push({ type: "ul", items });
      continue;
    }

    // Definition-ish heading: a short ALL-CAPS (or all-caps-ish) first line
    // followed by indented body — treat first line as a heading, rest as prose/code.
    // Keep it simple: if first line is short and all caps, make it an h3.
    const firstLine = nonEmpty[0].trim();
    const looksLikeHeading =
      firstLine.length <= 70 &&
      /^[A-Z0-9][A-Z0-9 &/,.'()—\-–:]+$/.test(firstLine) &&
      nonEmpty.length > 1;
    if (looksLikeHeading) {
      blocks.push({ type: "h", text: firstLine });
      const rest = lines.slice(lines.findIndex((l) => l.trim() === firstLine) + 1);
      const restText = rest.join("\n").replace(/^\n+/, "");
      if (restText.trim()) {
        blocks.push({ type: "p", text: restText });
      }
      continue;
    }

    // Default: prose paragraph, preserve internal line breaks
    blocks.push({ type: "p", text: chunk });
  }
  return blocks;
}

// ═══════════════════════════════════════════════════════════════════════
//  LESSON BODY RENDERER
// ═══════════════════════════════════════════════════════════════════════

function LessonBody({ body }) {
  const blocks = useMemo(() => parseBody(body), [body]);
  return (
    <div className="lesson-body">
      {blocks.map((b, i) => {
        if (b.type === "code") {
          return (
            <pre key={i} className="code-block">
              <code>{b.text}</code>
            </pre>
          );
        }
        if (b.type === "ol") {
          return (
            <ol key={i} className="ordered-list">
              {b.items.map((it, j) => (
                <li key={j}>{parseInline(it)}</li>
              ))}
            </ol>
          );
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="bullet-list">
              {b.items.map((it, j) => (
                <li key={j}>{parseInline(it)}</li>
              ))}
            </ul>
          );
        }
        if (b.type === "h") {
          return (
            <h3 key={i} className="lesson-subheading">
              {b.text}
            </h3>
          );
        }
        // prose — preserve internal line breaks
        const lines = b.text.split("\n");
        return (
          <p key={i} className="prose-block">
            {lines.map((line, j) => (
              <span key={j}>
                {parseInline(line)}
                {j < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  EXERCISES
// ═══════════════════════════════════════════════════════════════════════

function ExercisesList({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="exercises">
      <h3 className="exercises-title">
        <span className="exercises-label">Try it yourself</span>
      </h3>
      <ol className="exercises-list">
        {items.map((ex, i) => (
          <li key={i}>{parseInline(ex)}</li>
        ))}
      </ol>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  QUIZ
// ═══════════════════════════════════════════════════════════════════════

function Quiz({ questions, partId, accentColor }) {
  const [answers, setAnswers] = usePersistedState(`quiz.${partId}`, {});
  const [submitted, setSubmitted] = usePersistedState(
    `quiz-submitted.${partId}`,
    false
  );

  if (!questions || questions.length === 0) return null;

  const allAnswered = questions.every((_, i) => answers[i] !== undefined);
  const score = questions.reduce(
    (n, q, i) => n + (answers[i] === q.correct ? 1 : 0),
    0
  );
  const pct = Math.round((score / questions.length) * 100);

  return (
    <section className="quiz">
      <div className="quiz-header" style={{ "--accent": accentColor }}>
        <span className="quiz-label">Check yourself</span>
        <h3 className="quiz-title">{questions.length}-question quiz</h3>
      </div>

      {questions.map((q, i) => {
        const picked = answers[i];
        const reveal = submitted && picked !== undefined;
        return (
          <div key={i} className="quiz-item">
            <p className="quiz-question">
              <span className="quiz-num">Q{i + 1}.</span> {q.q}
            </p>
            <div className="quiz-options">
              {q.options.map((opt, oi) => {
                const isPicked = picked === oi;
                const isCorrect = oi === q.correct;
                let cls = "quiz-option";
                if (reveal) {
                  if (isCorrect) cls += " is-correct";
                  else if (isPicked) cls += " is-wrong";
                } else if (isPicked) {
                  cls += " is-picked";
                }
                return (
                  <button
                    key={oi}
                    type="button"
                    className={cls}
                    onClick={() => {
                      if (submitted) return;
                      setAnswers({ ...answers, [i]: oi });
                    }}
                    disabled={submitted}
                    style={{ "--accent": accentColor }}
                  >
                    <span className="quiz-option-letter">
                      {String.fromCharCode(65 + oi)}
                    </span>
                    <span className="quiz-option-text">{opt}</span>
                  </button>
                );
              })}
            </div>
            {reveal && (
              <p
                className={
                  "quiz-explain " +
                  (picked === q.correct ? "is-correct" : "is-wrong")
                }
              >
                {picked === q.correct ? "✓ " : "✗ "}
                {q.explain}
              </p>
            )}
          </div>
        );
      })}

      <div className="quiz-actions">
        {!submitted ? (
          <button
            type="button"
            className="quiz-submit"
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            style={{ "--accent": accentColor }}
          >
            {allAnswered
              ? "Submit answers"
              : `Answer all ${questions.length} questions first`}
          </button>
        ) : (
          <div className="quiz-score-row">
            <div className="quiz-score" style={{ "--accent": accentColor }}>
              <span className="quiz-score-pct">{pct}%</span>
              <span className="quiz-score-detail">
                {score} of {questions.length} correct
              </span>
            </div>
            <button
              type="button"
              className="quiz-retry"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
              }}
            >
              Retry quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  NOTES PANEL
// ═══════════════════════════════════════════════════════════════════════

function NotesPanel({ storageKey }) {
  const [note, setNote] = usePersistedState(`note.${storageKey}`, "");
  const [collapsed, setCollapsed] = useState(() => !note);

  useEffect(() => {
    if (note && collapsed) setCollapsed(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  return (
    <section className={"notes" + (collapsed ? " is-collapsed" : "")}>
      <button
        type="button"
        className="notes-toggle"
        onClick={() => setCollapsed((c) => !c)}
        aria-expanded={!collapsed}
      >
        <span className="notes-label">My notes</span>
        <span className="notes-chev">{collapsed ? "+" : "−"}</span>
      </button>
      {!collapsed && (
        <textarea
          className="notes-input"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your own notes here. Saved to this browser."
          rows={6}
        />
      )}
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  SEARCH PALETTE
// ═══════════════════════════════════════════════════════════════════════

function SearchPalette({ open, onClose, onSelect }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const allLessons = useMemo(() => {
    const out = [];
    curriculum.forEach((part, pi) => {
      part.lessons.forEach((l, li) => {
        out.push({
          partIdx: pi,
          lessonIdx: li,
          title: l.title,
          partTitle: part.title,
          partLabel: part.partLabel,
          partNum: part.part,
          color: part.color,
        });
      });
    });
    return out;
  }, []);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return allLessons.slice(0, 20);
    return allLessons
      .filter((l) => {
        const hay =
          l.title.toLowerCase() + " " + l.partTitle.toLowerCase();
        return hay.includes(needle);
      })
      .slice(0, 30);
  }, [q, allLessons]);

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      // Focus input shortly after mount
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [q]);

  if (!open) return null;

  const pick = (idx) => {
    const r = results[idx];
    if (!r) return;
    onSelect(r.partIdx, r.lessonIdx);
    onClose();
  };

  return (
    <div
      className="palette-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="palette">
        <input
          ref={inputRef}
          className="palette-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              onClose();
            } else if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((a) => Math.min(results.length - 1, a + 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((a) => Math.max(0, a - 1));
            } else if (e.key === "Enter") {
              e.preventDefault();
              pick(active);
            }
          }}
          placeholder="Search lessons…"
        />
        <div className="palette-results">
          {results.length === 0 && (
            <div className="palette-empty">No matches.</div>
          )}
          {results.map((r, i) => (
            <button
              key={`${r.partIdx}-${r.lessonIdx}`}
              type="button"
              className={"palette-row" + (i === active ? " is-active" : "")}
              onMouseEnter={() => setActive(i)}
              onClick={() => pick(i)}
            >
              <span
                className="palette-dot"
                style={{ background: r.color }}
                aria-hidden
              />
              <span className="palette-row-title">{r.title}</span>
              <span className="palette-row-meta">
                {r.partNum} · {r.partTitle}
              </span>
            </button>
          ))}
        </div>
        <div className="palette-foot">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════

export default function WebDevCurriculum() {
  const [position, setPosition] = usePersistedState("position", {
    part: 0,
    lesson: 0,
  });
  const [completed, setCompleted] = usePersistedState("completed", {});
  const [visited, setVisited] = usePersistedState("visited", {});
  const [theme, setTheme] = usePersistedState("theme", "dark");
  const [systemDark, setSystemDark] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(mq.matches);
    const handler = (e) => setSystemDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  const effectiveTheme = theme === "system" ? (systemDark ? "dark" : "light") : theme;

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const contentRef = useRef(null);

  const part = curriculum[position.part];
  const lesson = part?.lessons[position.lesson];
  const currentKey = lessonKey(position.part, position.lesson);
  const currentFlat = flatIndex(position.part, position.lesson);

  const completedCount = useMemo(
    () => Object.values(completed).filter(Boolean).length,
    [completed]
  );
  const completedPct = Math.round((completedCount / TOTAL_LESSONS) * 100);

  // Mark visited on open
  useEffect(() => {
    if (!visited[currentKey]) {
      setVisited({ ...visited, [currentKey]: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentKey]);

  // Scroll to top on lesson change
  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [currentKey]);

  // Navigation helpers
  const goToFlat = useCallback((flat) => {
    if (flat < 0 || flat >= TOTAL_LESSONS) return;
    let f = flat;
    for (let p = 0; p < curriculum.length; p++) {
      const len = curriculum[p].lessons.length;
      if (f < len) {
        setPosition({ part: p, lesson: f });
        return;
      }
      f -= len;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = useCallback((partIdx, lessonIdx) => {
    setPosition({ part: partIdx, lesson: lessonIdx });
    setMobileDrawerOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleComplete = useCallback(() => {
    setCompleted((prev) => ({ ...prev, [currentKey]: !prev[currentKey] }));
  }, [currentKey, setCompleted]);

  // Keyboard shortcuts
  useEffect(() => {
    function onKey(e) {
      const tag = e.target.tagName;
      const typing =
        tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable;

      // ⌘K / Ctrl+K opens palette (works even in inputs)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(true);
        return;
      }
      if (paletteOpen) return;
      if (typing) return;

      if (e.key === "/") {
        e.preventDefault();
        setPaletteOpen(true);
      } else if (
        e.key === "ArrowLeft" ||
        e.key === "h" ||
        e.key === "k"
      ) {
        e.preventDefault();
        goToFlat(currentFlat - 1);
      } else if (
        e.key === "ArrowRight" ||
        e.key === "l" ||
        e.key === "j"
      ) {
        e.preventDefault();
        goToFlat(currentFlat + 1);
      } else if (e.key === "b") {
        e.preventDefault();
        setSidebarOpen((o) => !o);
      } else if (e.key === "x" || e.key === "c") {
        e.preventDefault();
        toggleComplete();
      } else if (e.key === "Escape") {
        setMobileDrawerOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentFlat, paletteOpen, toggleComplete, goToFlat]);

  // Export / import / reset
  const onExport = useCallback(() => {
    const payload = {
      exportedAt: new Date().toISOString(),
      version: STORAGE_KEY,
      position,
      completed,
      visited,
      notes: {},
      quizzes: {},
    };
    // Gather namespaced keys from localStorage
    try {
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (!k?.startsWith(`${STORAGE_KEY}.note.`)) continue;
        const shortKey = k.slice(`${STORAGE_KEY}.note.`.length);
        payload.notes[shortKey] = JSON.parse(
          window.localStorage.getItem(k)
        );
      }
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (!k?.startsWith(`${STORAGE_KEY}.quiz.`)) continue;
        const shortKey = k.slice(`${STORAGE_KEY}.quiz.`.length);
        payload.quizzes[shortKey] = JSON.parse(
          window.localStorage.getItem(k)
        );
      }
    } catch {
      /* ignore */
    }
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `curriculum-progress-${
      new Date().toISOString().slice(0, 10)
    }.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [position, completed, visited]);

  const onReset = useCallback(() => {
    if (
      !window.confirm(
        "Reset all progress, notes, and quiz answers? This cannot be undone."
      )
    )
      return;
    try {
      const toRemove = [];
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k?.startsWith(STORAGE_KEY)) toRemove.push(k);
      }
      toRemove.forEach((k) => window.localStorage.removeItem(k));
    } catch {
      /* ignore */
    }
    window.location.reload();
  }, []);

  const onPrint = useCallback(() => {
    window.print();
  }, []);

  // Lesson body text for reading-time
  const readingTime = useMemo(
    () => estimateReadingTime(lesson?.body || ""),
    [lesson]
  );

  // Part-level completion count
  const partCompletedCount = useMemo(() => {
    if (!part) return 0;
    return part.lessons.reduce(
      (n, _, li) => n + (completed[lessonKey(position.part, li)] ? 1 : 0),
      0
    );
  }, [part, completed, position.part]);

  if (!part || !lesson) {
    return <div className="fatal">Curriculum data is missing.</div>;
  }

  const isComplete = !!completed[currentKey];
  const isLast = currentFlat === TOTAL_LESSONS - 1;
  const isFirst = currentFlat === 0;

  return (
    <div className={"app theme-" + effectiveTheme} data-accent={part.color}>
      <style>{CSS}</style>

      {/* TOPBAR */}
      <header className="topbar">
        <div className="topbar-left">
          <button
            type="button"
            className="icon-button topbar-menu"
            onClick={() => {
              if (window.innerWidth <= 860) {
                setMobileDrawerOpen((o) => !o);
              } else {
                setSidebarOpen((o) => !o);
              }
            }}
            aria-label="Toggle sidebar"
            title="Toggle sidebar (B)"
          >
            <span className="hamburger" />
          </button>
          <div className="topbar-brand">
            <span className="brand-mark" />
            <span className="brand-title">The Web Dev Curriculum</span>
          </div>
        </div>

        <div className="topbar-progress">
          <div className="progress-track" aria-hidden>
            <div
              className="progress-fill"
              style={{ width: `${completedPct}%` }}
            />
          </div>
          <span className="progress-text">
            {completedCount} / {TOTAL_LESSONS} lessons · {completedPct}%
          </span>
        </div>

        <div className="topbar-right">
          <button
            type="button"
            className="icon-button"
            onClick={() => setPaletteOpen(true)}
            aria-label="Search lessons"
            title="Search (⌘K)"
          >
            <Search size={16} strokeWidth={2} />
          </button>
          <button
            type="button"
            className="icon-button"
            onClick={() => setTheme(theme === "dark" ? "light" : theme === "light" ? "system" : "dark")}
            aria-label={theme === "dark" ? "Switch to light mode" : theme === "light" ? "Switch to system mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Dark mode" : theme === "light" ? "Light mode" : "System mode"}
          >
            {theme === "dark" ? <Moon size={16} strokeWidth={2} /> : theme === "light" ? <Sun size={16} strokeWidth={2} /> : <Monitor size={16} strokeWidth={2} />}
          </button>
          <div className="topbar-menu-wrap">
            <details className="topbar-menu-details">
              <summary className="icon-button" aria-label="More actions">
                <span className="icon-more">⋯</span>
              </summary>
              <div className="topbar-menu-pop">
                <button type="button" onClick={onExport}>
                  Export progress
                </button>
                <button type="button" onClick={onPrint}>
                  Print lesson
                </button>
                <button type="button" onClick={onReset} className="danger">
                  Reset everything
                </button>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div
        className={
          "layout" +
          (sidebarOpen ? " sidebar-open" : " sidebar-closed") +
          (mobileDrawerOpen ? " drawer-open" : "")
        }
      >
        {/* SIDEBAR */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            {curriculum.map((p, pi) => {
              const partComplete = p.lessons.every(
                (_, li) => completed[lessonKey(pi, li)]
              );
              const someComplete = p.lessons.some(
                (_, li) => completed[lessonKey(pi, li)]
              );
              return (
                <div key={p.id} className="sidebar-part">
                  <div
                    className={
                      "sidebar-part-head" +
                      (partComplete ? " is-complete" : "") +
                      (someComplete ? " is-partial" : "")
                    }
                    style={{ "--accent": p.color }}
                  >
                    <span className="sidebar-part-num">{p.part}</span>
                    <span className="sidebar-part-emoji" aria-hidden>
                      {(() => { const Icon = SECTION_ICONS[p.id]; return Icon ? <Icon size={14} strokeWidth={1.75} /> : null; })()}
                    </span>
                    <span className="sidebar-part-title">{p.title}</span>
                  </div>
                  <ul className="sidebar-lessons">
                    {p.lessons.map((l, li) => {
                      const k = lessonKey(pi, li);
                      const isCurrent =
                        pi === position.part && li === position.lesson;
                      const isDone = !!completed[k];
                      const wasVisited = !!visited[k];
                      return (
                        <li key={li}>
                          <button
                            type="button"
                            className={
                              "sidebar-lesson" +
                              (isCurrent ? " is-current" : "") +
                              (isDone ? " is-complete" : "") +
                              (wasVisited ? " is-visited" : "")
                            }
                            onClick={() => goTo(pi, li)}
                            style={{ "--accent": p.color }}
                          >
                            <span className="sidebar-lesson-mark" aria-hidden>
                              {isDone ? "✓" : String(li + 1).padStart(2, "0")}
                            </span>
                            <span className="sidebar-lesson-title">
                              {l.title}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </nav>
          <div className="sidebar-foot">
            <span>⌘K to search · ← → to navigate</span>
          </div>
        </aside>

        {/* MOBILE DRAWER BACKDROP */}
        {mobileDrawerOpen && (
          <div
            className="drawer-scrim"
            onClick={() => setMobileDrawerOpen(false)}
          />
        )}

        {/* MAIN CONTENT */}
        <main className="main" ref={contentRef}>
          <article
            className="lesson"
            style={{ "--accent": part.color }}
            key={currentKey}
          >
            {/* Breadcrumb + meta */}
            <div className="lesson-crumb">
              <span className="crumb-part">
                <span className="crumb-num">{part.part}</span>
                <span>{part.title}</span>
              </span>
              <span className="crumb-sep">/</span>
              <span className="crumb-lesson-num">
                Lesson {position.lesson + 1} of {part.lessons.length}
              </span>
            </div>

            <h1 className={"lesson-title" + (isComplete ? " is-struck" : "")}>
              {lesson.title}
            </h1>
            {part.subtitle && position.lesson === 0 && (
              <p className="lesson-part-subtitle">{part.subtitle}</p>
            )}

            <div className="lesson-meta">
              <span className="meta-pill">
                ⏱ {readingTime} min read
              </span>
              <button
                type="button"
                className={
                  "meta-complete" + (isComplete ? " is-complete" : "")
                }
                onClick={toggleComplete}
              >
                {isComplete ? "✓ Completed" : "Mark complete"}
              </button>
            </div>

            <LessonBody body={lesson.body} />

            <ExercisesList items={lesson.exercises} />

            <NotesPanel storageKey={currentKey} />

            {/* Part quiz appears only after the last lesson of the part */}
            {position.lesson === part.lessons.length - 1 && part.quiz && (
              <Quiz
                questions={part.quiz}
                partId={part.id}
                accentColor={part.color}
              />
            )}

            {/* Big mark-complete + next */}
            <div className="lesson-footer">
              <button
                type="button"
                className={
                  "big-complete" + (isComplete ? " is-complete" : "")
                }
                onClick={toggleComplete}
              >
                {isComplete ? "✓ Completed" : "Mark as complete"}
              </button>
              <div className="lesson-nav">
                {!isFirst && (
                  <button
                    type="button"
                    className="nav-btn nav-prev"
                    onClick={() => goToFlat(currentFlat - 1)}
                  >
                    ← Previous
                  </button>
                )}
                {!isLast && (
                  <button
                    type="button"
                    className="nav-btn nav-next"
                    onClick={() => goToFlat(currentFlat + 1)}
                  >
                    Next lesson →
                  </button>
                )}
              </div>
            </div>
          </article>
        </main>
      </div>

      {/* BOTTOM NAV */}
      <footer className="bottomnav">
        <div className="bottomnav-chapter" style={{ "--accent": part.color }}>
          <span className="bn-num">{part.part}</span>
          <div className="bn-meta">
            <span className="bn-title">{part.title}</span>
            <div className="bn-progress-track">
              <div
                className="bn-progress-fill"
                style={{
                  width: `${
                    (partCompletedCount / part.lessons.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>
          <span className="bn-count">
            {partCompletedCount} / {part.lessons.length}
          </span>
        </div>

        <div className="bottomnav-dots">
          {curriculum.map((p, pi) => {
            const partCount = p.lessons.reduce(
              (n, _, li) => n + (completed[lessonKey(pi, li)] ? 1 : 0),
              0
            );
            const partAll = p.lessons.length;
            const cls =
              "bn-dot" +
              (pi === position.part ? " is-current" : "") +
              (partCount === partAll ? " is-complete" : "") +
              (partCount > 0 && partCount < partAll ? " is-partial" : "");
            return (
              <button
                key={p.id}
                type="button"
                className={cls}
                style={{ "--accent": p.color }}
                onClick={() => goTo(pi, 0)}
                aria-label={`Go to ${p.title}`}
                title={p.title}
              >
                <span className="bn-dot-num">{p.part}</span>
              </button>
            );
          })}
        </div>
      </footer>

      <SearchPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onSelect={goTo}
      />

      <div className="kbd-hint" aria-hidden>
        <kbd>⌘</kbd><kbd>K</kbd> search · <kbd>←</kbd><kbd>→</kbd> nav ·{" "}
        <kbd>B</kbd> sidebar · <kbd>X</kbd> complete
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
//  CSS
// ═══════════════════════════════════════════════════════════════════════

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=JetBrains+Mono:wght@400;500;600&display=swap');

.theme-dark {
  --bg: #0A0A0B;
  --surface: #111114;
  --surface-2: #16161B;
  --surface-3: #1C1C22;
  --border: #27272A;
  --border-soft: #1F1F24;
  --text: #EDEDEF;
  --text-2: #A1A1AA;
  --text-3: #71717A;
  --text-dim: #52525B;
  --code-bg: #0C0C0F;
  --code-border: #202026;
  --shadow: 0 2px 8px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2);
  color-scheme: dark;
}

.theme-light {
  --bg: #FAFAF9;
  --surface: #FFFFFF;
  --surface-2: #F4F4F2;
  --surface-3: #EBEBE8;
  --border: #E4E4E0;
  --border-soft: #EEEEEA;
  --text: #18181B;
  --text-2: #52525B;
  --text-3: #71717A;
  --text-dim: #A1A1AA;
  --code-bg: #F5F5F2;
  --code-border: #E4E4E0;
  --shadow: 0 1px 3px rgba(0,0,0,0.06), 0 6px 20px rgba(0,0,0,0.06);
  color-scheme: light;
}

* { box-sizing: border-box; }

html, body, #root {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Source Serif 4', 'Source Serif Pro', Georgia, serif;
  font-size: 17px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  display: flex;
  flex-direction: column;
}

/* TOPBAR */
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 22px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 30;
  flex-shrink: 0;
}
.topbar-left, .topbar-right {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.topbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}
.brand-mark {
  width: 22px;
  height: 22px;
  border-radius: 5px;
  background: linear-gradient(135deg, #F97316, #EAB308, #3B82F6, #A855F7);
}
.brand-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: var(--text);
}

.topbar-progress {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 520px;
}
.progress-track {
  flex: 1;
  height: 5px;
  background: var(--surface-3);
  border-radius: 999px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #F97316, #EAB308, #3B82F6, #A855F7);
  transition: width 0.4s cubic-bezier(0.2, 0.9, 0.3, 1);
}
.progress-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--text-3);
  white-space: nowrap;
  letter-spacing: 0.02em;
}

.icon-button {
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-2);
  cursor: pointer;
  transition: all 0.15s;
  padding: 0;
  font-family: inherit;
  font-size: 14px;
}
.icon-button:hover {
  background: var(--surface-2);
  color: var(--text);
  border-color: var(--text-3);
}

.hamburger {
  width: 14px;
  height: 10px;
  position: relative;
  display: inline-block;
}
.hamburger::before, .hamburger::after, .hamburger {
  background: currentColor;
}
.hamburger::before, .hamburger::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1.5px;
  background: currentColor;
}
.hamburger { background: transparent; }
.hamburger::before { top: 2px; }
.hamburger::after  { bottom: 2px; }
.hamburger { border-top: 1.5px solid currentColor; border-bottom: 1.5px solid currentColor; background: transparent; }
.hamburger::before, .hamburger::after { display: none; }


.icon-more  { font-size: 18px; letter-spacing: 1px; }

.topbar-menu-wrap { position: relative; }
.topbar-menu-details summary { list-style: none; }
.topbar-menu-details summary::-webkit-details-marker { display: none; }
.topbar-menu-pop {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 6px;
  min-width: 180px;
  box-shadow: var(--shadow);
  z-index: 40;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.topbar-menu-pop button {
  text-align: left;
  padding: 8px 12px;
  background: transparent;
  border: 0;
  border-radius: 6px;
  color: var(--text);
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
}
.topbar-menu-pop button:hover { background: var(--surface-2); }
.topbar-menu-pop button.danger { color: #EF4444; }

/* LAYOUT */
.layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  flex: 1;
  min-height: 0;
}
.layout.sidebar-closed {
  grid-template-columns: 0 1fr;
}
.layout.sidebar-closed .sidebar {
  transform: translateX(-320px);
  opacity: 0;
}

/* SIDEBAR */
.sidebar {
  background: var(--surface);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  max-height: calc(100vh - 58px);
  position: sticky;
  top: 58px;
  transition: transform 0.25s, opacity 0.25s;
  display: flex;
  flex-direction: column;
}
.sidebar-nav {
  padding: 16px 12px;
  flex: 1;
}
.sidebar-part + .sidebar-part { margin-top: 18px; }

.sidebar-part-head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-3);
  border-bottom: 1px solid var(--border-soft);
  margin-bottom: 6px;
}
.sidebar-part-head.is-complete { color: var(--accent); }
.sidebar-part-num {
  color: var(--accent);
  font-weight: 600;
}
.sidebar-part-emoji { display: flex; align-items: center; flex-shrink: 0; opacity: 0.75; }
.sidebar-part-title { color: var(--text-2); letter-spacing: 0.04em; }
.sidebar-part-head.is-complete .sidebar-part-title { color: var(--accent); }

.sidebar-lessons {
  list-style: none;
  margin: 0;
  padding: 0;
}
.sidebar-lesson {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 10px;
  background: transparent;
  border: 0;
  border-radius: 7px;
  color: var(--text-3);
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.45;
  text-align: left;
  transition: background 0.12s, color 0.12s;
}
.sidebar-lesson:hover {
  background: var(--surface-2);
  color: var(--text);
}
.sidebar-lesson.is-visited { color: var(--text-2); }
.sidebar-lesson.is-current {
  background: var(--surface-3);
  color: var(--text);
  box-shadow: inset 2px 0 0 var(--accent);
}
.sidebar-lesson.is-complete .sidebar-lesson-title {
  text-decoration: line-through;
  text-decoration-color: var(--text-dim);
  color: var(--text-3);
}
.sidebar-lesson-mark {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  min-width: 18px;
  color: var(--text-dim);
  padding-top: 2px;
}
.sidebar-lesson.is-complete .sidebar-lesson-mark { color: var(--accent); }
.sidebar-lesson.is-current .sidebar-lesson-mark { color: var(--accent); }

.sidebar-foot {
  padding: 14px 18px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--text-dim);
  border-top: 1px solid var(--border-soft);
  letter-spacing: 0.04em;
}

/* DRAWER SCRIM */
.drawer-scrim {
  display: none;
  position: fixed;
  inset: 58px 0 0 0;
  background: rgba(0,0,0,0.55);
  z-index: 15;
}

/* MAIN */
.main {
  overflow-y: auto;
  max-height: calc(100vh - 58px - 68px);
  padding: 36px 48px 80px;
}

.lesson {
  max-width: 720px;
  margin: 0 auto;
}

.lesson-crumb {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-3);
  margin-bottom: 18px;
}
.crumb-part {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--accent);
}
.crumb-num {
  font-weight: 600;
  padding: 3px 6px;
  border: 1px solid var(--accent);
  border-radius: 4px;
  color: var(--accent);
  font-size: 10px;
}
.crumb-sep { color: var(--text-dim); }

.lesson-title {
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
  color: var(--text);
}
.lesson-title.is-struck {
  text-decoration: line-through;
  text-decoration-color: var(--accent);
  text-decoration-thickness: 2px;
  color: var(--text-2);
}
.lesson-part-subtitle {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-size: 18px;
  color: var(--text-2);
  margin: 0 0 18px;
}

.lesson-meta {
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 18px 0 36px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border-soft);
}
.meta-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 999px;
  background: var(--surface-2);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.02em;
}
.meta-complete {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-2);
  padding: 5px 12px;
  border-radius: 999px;
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.02em;
  transition: all 0.15s;
}
.meta-complete:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.meta-complete.is-complete {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}
.theme-light .meta-complete.is-complete { color: #fff; }

/* LESSON BODY */
.lesson-body > * + * { margin-top: 18px; }
.prose-block {
  margin: 0;
  font-size: 17px;
  line-height: 1.7;
  color: var(--text);
}
.prose-block br {
  margin-bottom: 4px;
  display: block;
  content: '';
}
.lesson-subheading {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-3);
  margin: 28px 0 12px;
  padding-top: 18px;
  border-top: 1px solid var(--border-soft);
}

.ordered-list, .bullet-list {
  margin: 0;
  padding-left: 1.25em;
  color: var(--text);
}
.ordered-list li, .bullet-list li {
  margin: 6px 0;
  line-height: 1.65;
}
.bullet-list { list-style: none; padding-left: 0; }
.bullet-list li {
  padding-left: 20px;
  position: relative;
}
.bullet-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 600;
}

.code-block {
  background: var(--code-bg);
  border: 1px solid var(--code-border);
  border-radius: 8px;
  padding: 16px 18px;
  overflow-x: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--text);
  margin: 0;
}
.code-block code {
  font-family: inherit;
  color: inherit;
  background: transparent;
  padding: 0;
  white-space: pre;
  display: block;
}

.inline-code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.88em;
  background: var(--surface-2);
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid var(--border-soft);
  color: var(--text);
}

/* EXERCISES */
.exercises {
  margin: 40px 0 0;
  padding: 24px 26px;
  background: var(--surface-2);
  border-left: 3px solid var(--accent);
  border-radius: 0 10px 10px 0;
}
.exercises-title { margin: 0 0 12px; }
.exercises-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
}
.exercises-list {
  margin: 0;
  padding-left: 1.25em;
  color: var(--text);
  font-size: 15.5px;
}
.exercises-list li { margin: 8px 0; line-height: 1.6; }

/* NOTES */
.notes {
  margin-top: 32px;
  border: 1px dashed var(--border);
  border-radius: 10px;
  overflow: hidden;
  background: var(--surface);
}
.notes-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: transparent;
  border: 0;
  color: var(--text-2);
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.notes-toggle:hover { color: var(--text); }
.notes-chev { font-family: monospace; font-size: 16px; color: var(--text-3); }
.notes-input {
  width: 100%;
  border: 0;
  border-top: 1px dashed var(--border);
  background: var(--surface);
  color: var(--text);
  padding: 14px 16px;
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 15px;
  line-height: 1.6;
  resize: vertical;
  min-height: 120px;
  outline: none;
}
.notes-input::placeholder { color: var(--text-dim); font-style: italic; }

/* QUIZ */
.quiz {
  margin-top: 44px;
  padding: 28px 26px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
}
.quiz-header { margin-bottom: 22px; }
.quiz-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
}
.quiz-title {
  font-family: 'Fraunces', Georgia, serif;
  margin: 6px 0 0;
  font-size: 22px;
  color: var(--text);
  font-weight: 600;
}
.quiz-item + .quiz-item {
  margin-top: 22px;
  padding-top: 22px;
  border-top: 1px solid var(--border-soft);
}
.quiz-question {
  font-size: 16px;
  color: var(--text);
  margin: 0 0 12px;
  line-height: 1.55;
}
.quiz-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--accent);
  margin-right: 6px;
}
.quiz-options { display: flex; flex-direction: column; gap: 8px; }
.quiz-option {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 14px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  font-size: 14.5px;
  transition: all 0.12s;
}
.quiz-option:hover:not(:disabled) {
  border-color: var(--accent);
  background: var(--surface-3);
}
.quiz-option.is-picked {
  border-color: var(--accent);
  background: var(--surface-3);
}
.quiz-option.is-correct {
  border-color: #10B981;
  background: rgba(16, 185, 129, 0.08);
}
.quiz-option.is-wrong {
  border-color: #EF4444;
  background: rgba(239, 68, 68, 0.08);
}
.quiz-option:disabled { cursor: default; }
.quiz-option-letter {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  min-width: 22px;
  color: var(--text-3);
  padding-top: 2px;
}
.quiz-option.is-correct .quiz-option-letter { color: #10B981; }
.quiz-option.is-wrong .quiz-option-letter { color: #EF4444; }
.quiz-option-text { flex: 1; }

.quiz-explain {
  margin: 10px 0 0;
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 13.5px;
  line-height: 1.55;
}
.quiz-explain.is-correct {
  background: rgba(16, 185, 129, 0.08);
  color: #10B981;
  border-left: 2px solid #10B981;
}
.quiz-explain.is-wrong {
  background: rgba(239, 68, 68, 0.08);
  color: #EF4444;
  border-left: 2px solid #EF4444;
}

.quiz-actions {
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid var(--border-soft);
}
.quiz-submit {
  padding: 10px 18px;
  background: var(--accent);
  color: #fff;
  border: 0;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.05em;
  cursor: pointer;
  text-transform: uppercase;
  transition: opacity 0.15s;
}
.quiz-submit:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.quiz-score-row {
  display: flex;
  align-items: center;
  gap: 18px;
}
.quiz-score {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 10px 18px;
  background: var(--surface-2);
  border-radius: 8px;
  border-left: 3px solid var(--accent);
}
.quiz-score-pct {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 28px;
  font-weight: 600;
  color: var(--accent);
}
.quiz-score-detail {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--text-3);
}
.quiz-retry {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-2);
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.quiz-retry:hover { color: var(--text); border-color: var(--text-3); }

/* LESSON FOOTER */
.lesson-footer {
  margin-top: 48px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.big-complete {
  padding: 14px 22px;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-2);
  border-radius: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.15s;
}
.big-complete:hover { border-color: var(--accent); color: var(--accent); }
.big-complete.is-complete {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
.lesson-nav {
  display: flex;
  gap: 12px;
  justify-content: space-between;
}
.nav-btn {
  padding: 12px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.04em;
  transition: all 0.15s;
}
.nav-btn:hover { border-color: var(--text-3); background: var(--surface-2); }
.nav-next {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  margin-left: auto;
}
.nav-next:hover {
  background: var(--accent);
  filter: brightness(1.1);
  border-color: var(--accent);
}

/* BOTTOM NAV */
.bottomnav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 22px;
  background: var(--surface);
  border-top: 1px solid var(--border);
  position: sticky;
  bottom: 0;
  z-index: 20;
}
.bottomnav-chapter {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  max-width: 420px;
}
.bn-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--accent);
  padding: 4px 7px;
  border: 1px solid var(--accent);
  border-radius: 4px;
}
.bn-meta { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.bn-title {
  font-size: 13px;
  color: var(--text-2);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bn-progress-track {
  height: 3px;
  background: var(--surface-3);
  border-radius: 999px;
}
.bn-progress-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 999px;
  transition: width 0.4s;
}
.bn-count {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--text-3);
  white-space: nowrap;
}

.bottomnav-dots {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
  overflow-x: auto;
  max-width: 50%;
}
.bn-dot {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--surface-3);
  border: 1px solid var(--border);
  color: var(--text-dim);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  flex-shrink: 0;
  padding: 0;
}
.bn-dot-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  font-weight: 600;
}
.bn-dot:hover { color: var(--text); border-color: var(--text-3); }
.bn-dot.is-partial {
  color: var(--accent);
  border-color: var(--accent);
  opacity: 0.5;
}
.bn-dot.is-complete {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  opacity: 1;
}
.bn-dot.is-current {
  width: auto;
  padding: 0 12px;
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  opacity: 1;
}

/* SEARCH PALETTE */
.palette-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 12vh;
  z-index: 100;
}
.palette {
  width: min(92vw, 620px);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 70vh;
}
.palette-input {
  width: 100%;
  padding: 18px 22px;
  border: 0;
  border-bottom: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  font-family: 'Fraunces', Georgia, serif;
  font-size: 19px;
  outline: none;
}
.palette-input::placeholder { color: var(--text-dim); font-style: italic; }
.palette-results {
  flex: 1;
  overflow-y: auto;
  padding: 6px;
}
.palette-empty {
  padding: 24px;
  text-align: center;
  color: var(--text-3);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
}
.palette-row {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: transparent;
  border: 0;
  border-radius: 8px;
  color: var(--text-2);
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  font-size: 14px;
}
.palette-row.is-active {
  background: var(--surface-3);
  color: var(--text);
}
.palette-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.palette-row-title { flex: 1; }
.palette-row-meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--text-3);
  white-space: nowrap;
}
.palette-foot {
  padding: 10px 16px;
  display: flex;
  gap: 18px;
  border-top: 1px solid var(--border);
  background: var(--surface-2);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--text-3);
  letter-spacing: 0.05em;
}

/* KEYBOARD HINT */
.kbd-hint {
  position: fixed;
  bottom: 80px;
  right: 22px;
  padding: 8px 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: var(--shadow);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 10;
  pointer-events: none;
}
.app:hover .kbd-hint { opacity: 0.85; }
.kbd-hint kbd {
  font-family: inherit;
  background: var(--surface-3);
  border: 1px solid var(--border);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 10px;
  margin: 0 1px;
  color: var(--text-2);
}

/* RESPONSIVE — mobile */
@media (max-width: 1100px) {
  .bottomnav-chapter .bn-progress-track { display: none; }
}
@media (max-width: 860px) {
  .topbar { padding: 12px 14px; }
  .topbar-progress { display: none; }
  .brand-title { font-size: 14px; }

  .layout {
    grid-template-columns: 1fr;
  }
  .sidebar {
    position: fixed;
    top: 56px;
    left: 0;
    width: 300px;
    height: calc(100vh - 56px);
    z-index: 20;
    transform: translateX(-300px);
    box-shadow: var(--shadow);
  }
  .layout.drawer-open .sidebar { transform: translateX(0); }
  .layout.drawer-open .drawer-scrim { display: block; }

  .main {
    padding: 24px 20px 60px;
    max-height: calc(100vh - 56px - 56px);
  }
  .lesson-title { font-size: 28px; }

  .bottomnav { padding: 8px 12px; }
  .bottomnav-chapter { max-width: none; }
  .bn-title { font-size: 12px; }
  .kbd-hint { display: none; }
}
@media (max-width: 560px) {
  .bottomnav-dots { display: none; }
  .bottomnav-chapter { max-width: 100%; }
  .crumb-lesson-num { display: none; }
}

/* PRINT */
@media print {
  body { background: #fff; color: #000; }
  .topbar, .sidebar, .bottomnav, .kbd-hint, .palette-overlay,
  .notes-toggle, .lesson-footer, .meta-complete, .quiz-actions .quiz-submit,
  .quiz-actions .quiz-retry, .topbar-menu-wrap { display: none !important; }
  .layout { display: block; }
  .main { max-height: none; overflow: visible; padding: 0; }
  .lesson { max-width: 100%; }
  .lesson-title { font-size: 24pt; color: #000; }
  .code-block { background: #f5f5f5 !important; border: 1px solid #ccc !important; color: #000; }
  .lesson-body, .prose-block, .ordered-list, .bullet-list { color: #000; }
  .quiz, .exercises, .notes { break-inside: avoid; color: #000; border-color: #999 !important; }
}

/* LIGHT-MODE TWEAKS */
.theme-light .progress-fill { opacity: 0.85; }
.theme-light .code-block { background: #FAFAF9; }
.theme-light .kbd-hint kbd { background: #fff; }

/* SCROLLBAR */
.main::-webkit-scrollbar, .sidebar::-webkit-scrollbar,
.palette-results::-webkit-scrollbar {
  width: 8px; height: 8px;
}
.main::-webkit-scrollbar-thumb, .sidebar::-webkit-scrollbar-thumb,
.palette-results::-webkit-scrollbar-thumb {
  background: var(--border); border-radius: 999px;
}
.main::-webkit-scrollbar-track, .sidebar::-webkit-scrollbar-track,
.palette-results::-webkit-scrollbar-track {
  background: transparent;
}
`;
