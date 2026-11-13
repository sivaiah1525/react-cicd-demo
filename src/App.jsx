import { useState, useEffect } from 'react'
import './App.css'

/* =========================================================
   1. LEARNING ORDER (phases)
   ========================================================= */
const phases = [
  { id: 1, name: 'Phase 1 · Web Basics' },
  { id: 2, name: 'Phase 2 · Frontend Frameworks' },
  { id: 3, name: 'Phase 3 · Mobile & Offline' },
  { id: 4, name: 'Phase 4 · Backend & Databases' },
  { id: 5, name: 'Phase 5 · DevOps & Cloud' },
  { id: 6, name: 'Phase 6 · AI & Senior Skills' },
]

/* =========================================================
   2. ALL SKILLS IN LEARNING ORDER
   Each topic:     [title, simple explanation]
   Each question:  [question, answer]
   ========================================================= */
const skills = [
  /* ---------------- 1. HTML ---------------- */
  {
    id: 'html',
    name: 'HTML',
    icon: '🧱',
    phase: 1,
    why: "Every website and web app is built on HTML. It is the skeleton of the page.",
    topics: {
      basic: [
        ['Page structure', 'Every page has <!DOCTYPE html>, <html>, <head> (hidden info like the title) and <body> (everything you see).'],
        ['Headings and text', '<h1> to <h6> for headings, <p> for paragraphs, <strong> and <em> for important and emphasised text.'],
        ['Links and images', '<a href> makes a link to another page. <img src alt> shows a picture; alt describes it for blind users.'],
        ['Lists and tables', '<ul> and <ol> make lists with <li> items. <table>, <tr>, <th> and <td> show data in rows and columns.'],
      ],
      intermediate: [
        ['Forms and inputs', '<form>, <label>, <input> (text, email, number, date, checkbox), <select>, <textarea> and the required attribute.'],
        ['Semantic HTML', '<header>, <nav>, <main>, <section>, <article> and <footer> describe the meaning of each part. They help SEO and screen readers.'],
        ['Media', '<audio>, <video>, <iframe> and <picture> embed sound, video, other pages and responsive images.'],
        ['Meta tags and SEO basics', '<title>, meta description, the viewport tag for mobile, and Open Graph tags for link previews.'],
      ],
      advanced: [
        ['Accessibility (a11y)', 'Alt text, labels for every input, keyboard navigation, good colour contrast, and ARIA roles only when HTML is not enough.'],
        ['Built-in form validation', 'pattern, min, max, minlength and type=email let the browser check input before it is sent.'],
        ['Loading performance', "Lazy-load images (loading='lazy'), use defer or async on scripts, and preload important files."],
        ['Web Components', 'Custom elements, Shadow DOM, <template> and <slot> let you build reusable tags that work in any framework.'],
      ],
    },
    qa: {
      basic: [
        ['What is HTML?', 'HyperText Markup Language. It describes the structure of a web page using tags such as headings, paragraphs, links and images.'],
        ['What is the difference between block and inline elements?', 'Block elements (div, p, h1) start on a new line and take the full width. Inline elements (span, a, strong) take only the width of their content.'],
        ['Why is the alt attribute important?', 'It describes the image for screen readers and is shown when the image fails to load. It also helps SEO.'],
        ['What is the difference between <ul> and <ol>?', '<ul> is an unordered list with bullets. <ol> is an ordered list with numbers.'],
      ],
      intermediate: [
        ['What is semantic HTML and why use it?', 'Tags that describe their meaning, like <nav> and <article>. They improve accessibility, SEO and code readability.'],
        ['What is the difference between GET and POST in a form?', 'GET sends data in the URL and is used for searching or reading. POST sends data in the request body and is used for creating or sensitive data.'],
        ['What does the viewport meta tag do?', 'It tells mobile browsers to use the device width (width=device-width, initial-scale=1), so responsive CSS works.'],
        ['What is the difference between id and class?', 'An id must be unique on the page and is used once. A class can be used on many elements.'],
      ],
      advanced: [
        ['How do you make a page accessible?', 'Use semantic tags, labels for inputs, alt text, a logical heading order, keyboard focus, good contrast, ARIA only when needed, and test with a screen reader.'],
        ['What is the difference between async and defer on scripts?', 'Both download in parallel with HTML. async runs as soon as it is ready (order not guaranteed). defer runs after the HTML is parsed, in order.'],
        ['What is the Shadow DOM?', 'A hidden, encapsulated DOM tree inside a web component, so its styles and markup do not leak out and outside styles do not leak in.'],
        ['How do you improve page load speed?', 'Compress and lazy-load images, defer scripts, preload critical files, reduce DOM size, and use a CDN and caching.'],
      ],
    },
  },

  /* ---------------- 2. CSS ---------------- */
  {
    id: 'css',
    name: 'CSS',
    icon: '🎨',
    phase: 1,
    why: 'CSS makes pages beautiful and responsive. Every UI library (Bootstrap, Tailwind, Material) is CSS underneath.',
    topics: {
      basic: [
        ['Selectors', 'Element (p), class (.card), id (#header) and group selectors decide WHICH elements get a style.'],
        ['Colours and units', 'Colours as names, hex (#04aa6d) or rgb(). Units: px, %, rem, em, vh and vw.'],
        ['Box model', 'Every element is a box: content, padding (inside), border, and margin (outside). Use box-sizing: border-box.'],
        ['Text and fonts', 'font-family, font-size, font-weight, line-height, text-align, and Google Fonts.'],
      ],
      intermediate: [
        ['Flexbox', 'One-direction layout (row or column): justify-content, align-items, gap, flex-wrap and flex-grow.'],
        ['CSS Grid', 'Two-direction layout: grid-template-columns, fr units, gap and named grid areas.'],
        ['Positioning', 'static, relative, absolute, fixed and sticky, plus z-index for stacking order.'],
        ['Responsive design', 'Mobile-first media queries, fluid widths, flexible images and breakpoints.'],
      ],
      advanced: [
        ['CSS variables and theming', 'Custom properties (--main-color) make themes and dark mode easy, and they can change at runtime.'],
        ['Transitions and animations', 'transition for smooth changes, @keyframes for animations, transform and opacity for fast animation.'],
        ['Specificity and cascade', 'Inline beats id, id beats class, class beats element. Avoid !important; understand inheritance.'],
        ['Modern CSS tooling', 'SCSS, Tailwind CSS, CSS Modules, the BEM naming method, and container queries.'],
      ],
    },
    qa: {
      basic: [
        ['What is the CSS box model?', 'Each element is a rectangle made of content, padding, border and margin. Their sizes add up to the space the element uses.'],
        ['What is the difference between margin and padding?', 'Padding is space inside the border, between border and content. Margin is space outside the border, between elements.'],
        ['What is the difference between px, em and rem?', 'px is fixed. em is relative to the parent font size. rem is relative to the root (html) font size, which makes it predictable.'],
        ['What are the ways to add CSS to a page?', 'Inline (style attribute), internal (<style> tag) and external (a .css file). External is best for real projects.'],
      ],
      intermediate: [
        ['When do you use Flexbox and when Grid?', 'Flexbox for one direction (a navbar, a row of buttons). Grid for two directions (page layouts, card grids).'],
        ['What is the difference between position relative and absolute?', 'relative moves an element from its normal place but keeps its space. absolute removes it from the flow and places it relative to the nearest positioned ancestor.'],
        ['How do media queries work?', 'They apply CSS only when a condition is true, such as max-width: 600px, so the layout changes for small screens.'],
        ['How do you centre a div?', 'On the parent: display: flex; justify-content: center; align-items: center. Or display: grid; place-items: center.'],
      ],
      advanced: [
        ['How is specificity calculated?', 'Inline styles, then ids, then classes/attributes/pseudo-classes, then elements. The higher score wins; if equal, the later rule wins.'],
        ['What causes layout shift and how do you prevent it?', 'Content that loads late and pushes things down. Set width and height on images, reserve space for ads, and use font-display.'],
        ['What is the difference between transition and animation?', 'A transition runs when a property changes (for example on hover). An animation uses @keyframes and can run by itself and loop.'],
        ['Why use CSS variables instead of SCSS variables?', 'CSS variables exist at runtime, follow the cascade, and can change with JavaScript or media queries. SCSS variables disappear after compiling.'],
      ],
    },
  },

  /* ---------------- 3. JAVASCRIPT ---------------- */
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '⚡',
    phase: 1,
    why: 'JavaScript runs in every browser and on servers (Node.js). React, Angular and Ionic are all built on it.',
    topics: {
      basic: [
        ['Variables and data types', 'let, const, string, number, boolean, null, undefined, object and array.'],
        ['Operators and conditions', '=== (strict equal), &&, ||, if/else, the ternary operator, and switch.'],
        ['Loops and functions', 'for, while, for...of, function declarations, arrow functions, parameters and return.'],
        ['Arrays and objects', 'push, map, filter, reduce, find, includes, and reading and updating object properties.'],
      ],
      intermediate: [
        ['DOM and events', 'querySelector, addEventListener, changing text and classes, event bubbling and delegation.'],
        ['ES6+ features', 'Destructuring, spread and rest (...), template literals, default parameters, optional chaining (?.), modules (import/export).'],
        ['Scope, hoisting and closures', 'Block scope with let and const, how declarations are hoisted, and functions that remember outer variables.'],
        ['Asynchronous JavaScript', 'Callbacks, Promises, async/await, fetch for API calls, and try/catch error handling.'],
      ],
      advanced: [
        ['Event loop', 'Call stack, the microtask queue (promises) and the macrotask queue (setTimeout), and why the page does not freeze.'],
        ['this, prototypes and classes', 'How this changes with the caller, call/apply/bind, prototype inheritance, and ES6 classes.'],
        ['Performance patterns', 'Debounce, throttle, memoization, and avoiding unnecessary DOM updates.'],
        ['Browser storage and security', 'localStorage vs sessionStorage vs cookies, XSS protection, and CORS.'],
      ],
    },
    qa: {
      basic: [
        ['What is the difference between var, let and const?', 'var is function-scoped and can be redeclared. let is block-scoped and can be reassigned. const is block-scoped and cannot be reassigned.'],
        ['What is the difference between == and ===?', '== converts types before comparing (5 == "5" is true). === compares value and type (5 === "5" is false). Always prefer ===.'],
        ['What is the difference between null and undefined?', 'undefined means a variable has no value yet. null is an empty value you set on purpose.'],
        ['What are arrow functions?', 'A short way to write functions: (a, b) => a + b. They do not have their own this, so they use this from the surrounding code.'],
      ],
      intermediate: [
        ['What is a closure?', 'A function that remembers the variables of the place where it was created, even after that outer function has finished.'],
        ['What is hoisting?', 'Declarations are moved to the top of their scope before the code runs. var becomes undefined; let and const stay in a "temporal dead zone" until declared.'],
        ['What is the difference between Promises and async/await?', 'async/await is easier-to-read syntax built on Promises. await pauses inside an async function until the Promise settles.'],
        ['What are event bubbling and delegation?', 'Bubbling: an event travels from the clicked element up to its parents. Delegation: put one listener on a parent to handle events from many children.'],
      ],
      advanced: [
        ['Explain the event loop.', 'JavaScript runs one task at a time on the call stack. When it is empty, the event loop first runs all microtasks (promises), then the next macrotask (timers, events).'],
        ['What is the difference between debounce and throttle?', 'Debounce runs a function only after events stop for a set time (search box). Throttle runs it at most once per time period (scroll).'],
        ['How does "this" work?', 'It depends on how a function is called: object.method() gives the object, a plain call gives undefined in strict mode, and arrow functions use the outer this.'],
        ['What is the difference between a shallow and a deep copy?', 'A shallow copy (spread) copies only the top level, so nested objects are shared. A deep copy (structuredClone) copies everything.'],
      ],
    },
  },

  /* ---------------- 4. TYPESCRIPT ---------------- */
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '🔷',
    phase: 1,
    why: 'Angular uses TypeScript by default and most React teams use it too. It is one of the most requested frontend skills.',
    topics: {
      basic: [
        ['Why TypeScript', 'JavaScript with types. It catches mistakes while you type, before the code runs.'],
        ['Basic types', 'string, number, boolean, arrays, tuples, any, unknown, void and never.'],
        ['Type annotations and inference', 'Write the type yourself, or let TypeScript work it out from the value.'],
        ['Typed functions', 'Parameter types, return types, optional parameters (?) and default values.'],
      ],
      intermediate: [
        ['Interfaces and type aliases', 'Describe the shape of objects, such as an Employee with id, name and email.'],
        ['Union and literal types', "A value can be one of several types or exact values, such as 'ACTIVE' | 'ON_LEAVE'."],
        ['Type narrowing', 'typeof, in, instanceof and discriminated unions tell TypeScript which type you have.'],
        ['Classes and access modifiers', 'public, private, protected and readonly, and implementing interfaces.'],
      ],
      advanced: [
        ['Generics', 'Reusable code that works with any type safely, such as Array<T> or a typed API response.'],
        ['Utility types', 'Partial, Required, Pick, Omit, Record and Readonly create new types from existing ones.'],
        ['tsconfig and strict mode', 'strict, noImplicitAny and strictNullChecks catch the most bugs.'],
        ['Typing real apps', 'Typed API models, React props, Angular services and declaration files (.d.ts).'],
      ],
    },
    qa: {
      basic: [
        ['What is TypeScript?', 'A superset of JavaScript that adds static types. It compiles to plain JavaScript.'],
        ['What is the difference between any and unknown?', 'any switches off type checking. unknown is safe: you must check the type before using the value.'],
        ['How does TypeScript help a team?', 'It finds errors early, gives better autocomplete, makes refactoring safer, and documents the shape of data.'],
        ['What is type inference?', 'TypeScript works out the type from the value, so let count = 5 is automatically a number.'],
      ],
      intermediate: [
        ['What is the difference between an interface and a type alias?', 'Both describe shapes. Interfaces can be extended and merged; type aliases can also describe unions and other complex types.'],
        ['What is the difference between a union and an intersection type?', 'A union (A | B) is one OR the other. An intersection (A & B) has the properties of both.'],
        ['What is type narrowing?', 'Using checks like typeof or in so TypeScript knows the exact type inside an if block.'],
        ['What are enums?', 'A named set of constant values, such as Role.Admin and Role.User. Many teams now prefer union literal types.'],
      ],
      advanced: [
        ['What are generics?', 'Type parameters (<T>) that let a function or class work with many types while keeping type safety.'],
        ['Explain Partial, Pick and Omit.', 'Partial<T> makes all properties optional, Pick<T, K> keeps only some properties, and Omit<T, K> removes some.'],
        ['What does strict mode enable?', 'A group of checks including noImplicitAny and strictNullChecks, so null bugs and missing types are caught.'],
        ['What is the never type?', 'A type for values that never happen, such as a function that always throws, or an impossible branch in a switch.'],
      ],
    },
  },

  /* ---------------- 5. GIT ---------------- */
  {
    id: 'git',
    name: 'Git & GitHub',
    icon: '🌿',
    phase: 1,
    why: 'Every software team uses Git. You need it from your first project to save your work and share it.',
    topics: {
      basic: [
        ['What Git is', 'A version control system that saves snapshots (commits) of your code, so you can go back at any time.'],
        ['Daily commands', 'git init, clone, status, add, commit, push and pull.'],
        ['GitHub', 'An online home for Git repositories, with README files, issues and project boards.'],
        ['.gitignore', 'Keep node_modules, build folders and secret .env files out of Git.'],
      ],
      intermediate: [
        ['Branches and merging', 'Work on a feature branch, then merge it into main.'],
        ['Pull requests and code review', 'Propose changes, get feedback, then merge after approval and passing checks.'],
        ['Merge conflicts', 'When two people change the same lines; you choose the correct version and commit.'],
        ['Undoing changes', 'git restore, git reset, git revert and git stash.'],
      ],
      advanced: [
        ['Rebase vs merge', 'Rebase rewrites history into a straight line; merge keeps the history with a merge commit.'],
        ['Branching strategies', 'GitHub Flow, Git Flow and trunk-based development.'],
        ['Tags and releases', 'Mark versions like v1.2.0 using semantic versioning (major.minor.patch).'],
        ['Protected branches and hooks', 'Required reviews and checks on main; pre-commit hooks for lint and tests.'],
      ],
    },
    qa: {
      basic: [
        ['What is the difference between Git and GitHub?', 'Git is the version control tool on your computer. GitHub is a website that hosts Git repositories and adds collaboration features.'],
        ['What is the difference between git add and git commit?', 'git add puts changes in the staging area. git commit saves the staged changes as a snapshot with a message.'],
        ['What is the difference between git fetch and git pull?', 'fetch downloads new commits but does not change your files. pull is fetch plus merge into your current branch.'],
        ['What is .gitignore?', 'A file listing files and folders Git should not track, such as node_modules and .env.'],
      ],
      intermediate: [
        ['What is a merge conflict and how do you fix it?', 'Git cannot combine two changes to the same lines. Open the file, keep the correct code, remove the conflict markers, then add and commit.'],
        ['What is a pull request?', 'A request to merge a branch into another, where teammates review the code and automated checks run.'],
        ['What is the difference between git reset and git revert?', 'reset moves the branch back and can remove commits (rewrites history). revert creates a new commit that undoes an old one (safe for shared branches).'],
        ['Why use branches?', 'To work on features or fixes separately without breaking the main code.'],
      ],
      advanced: [
        ['When do you use rebase instead of merge?', 'Rebase keeps a clean, straight history on your own branch. Never rebase a branch that others are already using.'],
        ['What is git cherry-pick?', 'It copies one specific commit from another branch onto your current branch.'],
        ['What is git stash?', 'It saves unfinished changes temporarily, so you can switch branches and bring them back later.'],
        ['Which branching strategy have you used?', 'Example answer: feature branches from main, a pull request with review and CI checks, squash merge, then automatic deployment.'],
      ],
    },
  },

  /* ---------------- 6. REACT ---------------- */
  {
    id: 'react',
    name: 'React',
    icon: '⚛️',
    phase: 2,
    why: 'React is the most used frontend library in job postings worldwide.',
    topics: {
      basic: [
        ['Components and JSX', 'The UI is built from small reusable functions that return JSX (HTML-like code in JavaScript).'],
        ['Props', 'Values passed from a parent component to a child, like ingredients for a recipe.'],
        ['State with useState', 'Data that changes; when state changes, React redraws the screen.'],
        ['Events and conditional rendering', 'onClick and onChange, condition ? A : B, and condition && A.'],
        ['Lists and keys', 'Use .map() to show arrays, with a unique key on every item.'],
      ],
      intermediate: [
        ['useEffect', 'Run side effects such as API calls and timers after rendering, with a dependency array.'],
        ['Forms and controlled inputs', 'Keep input values in state, validate them, and handle submit.'],
        ['React Router', 'Pages, links, URL parameters, nested routes and protected routes.'],
        ['API calls', 'fetch or axios with loading, error and empty states.'],
        ['Context API', 'Share data such as the logged-in user or theme without passing props down many levels.'],
      ],
      advanced: [
        ['Performance', 'React.memo, useMemo, useCallback, lazy loading and Suspense.'],
        ['Custom hooks', 'Move reusable logic into your own hooks, such as useFetch or useAuth.'],
        ['State management', 'Redux Toolkit, Zustand, and React Query / TanStack Query for server data.'],
        ['Testing', 'React Testing Library with Jest or Vitest.'],
        ['Next.js and server rendering', 'Server-side rendering, static generation and server components for SEO and speed.'],
      ],
    },
    qa: {
      basic: [
        ['What is React?', 'A JavaScript library for building user interfaces from reusable components.'],
        ['What is JSX?', 'A syntax that looks like HTML inside JavaScript. It is converted into React.createElement calls.'],
        ['What is the difference between state and props?', "Props come from the parent and are read-only. State belongs to the component and can change with its setter."],
        ['Why do lists need keys?', 'Keys help React know which items changed, were added or removed, so it updates the list correctly and quickly.'],
      ],
      intermediate: [
        ['What does the useEffect dependency array do?', '[] runs the effect once after the first render. [x] runs it when x changes. No array runs it after every render.'],
        ['What is the difference between controlled and uncontrolled components?', 'Controlled inputs keep their value in React state. Uncontrolled inputs keep it in the DOM, read with a ref.'],
        ['What is the Context API and when do you use it?', 'It shares values such as theme or user across many components. Use it for global data that does not change very often.'],
        ['What is the virtual DOM?', 'A lightweight copy of the UI in memory. React compares the old and new versions and updates only what changed in the real DOM.'],
      ],
      advanced: [
        ['What is the difference between useMemo and useCallback?', 'useMemo remembers a calculated VALUE. useCallback remembers a FUNCTION. Both avoid unnecessary work between renders.'],
        ['When does a component re-render and how do you prevent extra renders?', 'When its state, props or context change, or its parent re-renders. Use React.memo, stable callbacks, and split state.'],
        ['What are custom hooks?', 'Functions starting with "use" that combine other hooks to share logic between components.'],
        ['Redux vs Context: which do you choose?', 'Context suits small, rarely changing global data. Redux Toolkit or Zustand suit large, frequently changing state; React Query suits server data.'],
        ['What is server-side rendering?', 'HTML is created on the server for each request, so the first load is faster and better for SEO. Next.js provides it.'],
      ],
    },
  },

  /* ---------------- 7. ANGULAR ---------------- */
  {
    id: 'angular',
    name: 'Angular',
    icon: '🅰️',
    phase: 2,
    why: 'Angular is widely used by large companies, banks and enterprise projects.',
    topics: {
      basic: [
        ['Angular CLI and project structure', 'ng new, ng serve and ng generate, and how files are organised.'],
        ['Components and templates', 'A TypeScript class for logic and an HTML template for the view.'],
        ['Data binding', 'Interpolation {{ }}, property binding [ ], event binding ( ) and two-way binding [( )].'],
        ['Control flow and directives', '@if, @for, @switch, ngClass and ngStyle.'],
      ],
      intermediate: [
        ['Services and dependency injection', 'Shared logic and API calls live in services, injected where needed.'],
        ['Routing and guards', 'Routes, router links, route parameters, and guards to protect pages.'],
        ['Forms', 'Template-driven forms and reactive forms with validators.'],
        ['HttpClient and interceptors', 'Call REST APIs, and add tokens or handle errors in one place.'],
      ],
      advanced: [
        ['RxJS', 'Observables and operators: map, switchMap, debounceTime, combineLatest, takeUntil.'],
        ['Signals and change detection', 'signal(), computed(), effect() and the OnPush strategy for speed.'],
        ['State management', 'NgRx Store, NgRx Signal Store, or service-based state.'],
        ['Performance and architecture', 'Standalone components, lazy loading, deferrable views and SSR.'],
        ['Testing', 'Unit tests with Jasmine or Jest, TestBed, and end-to-end tests with Cypress or Playwright.'],
      ],
    },
    qa: {
      basic: [
        ['What is Angular?', 'A complete TypeScript framework by Google for building web apps, with routing, forms, HTTP and testing built in.'],
        ['What is a component?', 'A building block made of a TypeScript class, an HTML template and styles, with a selector tag.'],
        ['What are the types of data binding?', 'Interpolation {{ }}, property binding [ ], event binding ( ) and two-way binding [( )].'],
        ['What is a directive?', 'An instruction that changes the DOM or an element: structural (@if, @for) or attribute (ngClass).'],
      ],
      intermediate: [
        ['What is dependency injection in Angular?', 'Angular creates services and gives them to the classes that need them, so code is loosely coupled and easy to test.'],
        ['Template-driven vs reactive forms?', 'Template-driven forms are defined in HTML and suit simple forms. Reactive forms are defined in TypeScript and suit complex, dynamic validation.'],
        ['What are route guards?', 'Functions that decide whether a user can open a route, for example only logged-in users (canActivate).'],
        ['What is an HTTP interceptor?', 'Code that runs for every HTTP request or response, used to add auth tokens, log or handle errors globally.'],
      ],
      advanced: [
        ['Observable vs Promise?', 'A Promise gives one value once. An Observable can give many values over time, is lazy, and can be cancelled.'],
        ['switchMap vs mergeMap?', 'switchMap cancels the previous inner request when a new value arrives (search boxes). mergeMap runs all of them in parallel.'],
        ['What is OnPush change detection?', 'The component is checked only when its inputs change, an event happens inside it, or a signal/observable it uses updates. This makes apps faster.'],
        ['What are Signals?', 'Reactive values (signal, computed, effect) that tell Angular exactly what changed, for simpler and faster updates.'],
        ['What is lazy loading?', 'Loading a feature or route only when the user opens it, so the first load is smaller and faster.'],
      ],
    },
  },

  /* ---------------- 8. IONIC ---------------- */
  {
    id: 'ionic',
    name: 'Ionic',
    icon: '📱',
    phase: 3,
    why: 'Ionic lets web developers build Android and iOS apps with the Angular or React skills they already have.',
    topics: {
      basic: [
        ['What Ionic is', 'A UI toolkit for building mobile apps with HTML, CSS and JavaScript (Angular, React or Vue).'],
        ['Ionic CLI', 'ionic start, ionic serve and ionic build.'],
        ['Ionic components', 'ion-header, ion-toolbar, ion-content, ion-list, ion-item, ion-button, ion-card and ion-modal.'],
        ['Navigation and tabs', 'Tabs, side menus, back buttons and page transitions.'],
      ],
      intermediate: [
        ['Capacitor', 'Turns your web app into real Android and iOS apps (npx cap add android).'],
        ['Native plugins', 'Camera, geolocation, preferences/storage, push notifications and file system.'],
        ['Theming', 'CSS variables, dark mode, and iOS vs Android (Material) styles.'],
        ['Forms and API data', 'Forms, validation and calling your backend from the app.'],
      ],
      advanced: [
        ['Performance', 'Virtual scrolling, lazy loading, and small bundles.'],
        ['Offline storage and sync', 'SQLite or IndexedDB, queueing changes and syncing when online.'],
        ['Store release', 'App signing, versions, Google Play and Apple App Store builds.'],
        ['Debugging on devices', 'Chrome remote debugging, Safari Web Inspector and live reload.'],
      ],
    },
    qa: {
      basic: [
        ['What is Ionic?', 'An open-source UI toolkit for building cross-platform mobile and web apps with web technologies.'],
        ['What is Capacitor?', 'The native runtime that wraps a web app into Android and iOS apps and gives access to device features through plugins.'],
        ['Ionic vs native apps?', 'Ionic uses one web codebase for all platforms and is faster to build. Native apps (Kotlin, Swift) give the best performance for heavy graphics.'],
        ['Which frameworks can you use with Ionic?', 'Angular, React and Vue.'],
      ],
      intermediate: [
        ['How do you use the camera in Ionic?', 'Install @capacitor/camera, call Camera.getPhoto(), and add the required permissions for Android and iOS.'],
        ['Capacitor vs Cordova?', 'Capacitor is the modern replacement: native projects are part of your code, it has better web support and an easier plugin system.'],
        ['How do you handle platform differences?', 'Use the Platform service to detect iOS or Android, and Ionic adapts styles automatically for each platform.'],
        ['How do you store data locally?', 'Capacitor Preferences for small values, and SQLite or IndexedDB for larger data.'],
      ],
      advanced: [
        ['How do you improve Ionic app performance?', 'Lazy-load pages, use virtual scroll for long lists, optimise images, and keep bundles small.'],
        ['How do you publish to the Play Store?', 'Build the web app, sync with Capacitor, open Android Studio, create a signed release bundle (AAB) and upload it to the Play Console.'],
        ['How do push notifications work?', 'The app registers with Firebase Cloud Messaging or APNs, sends the device token to your backend, and the backend sends messages through that service.'],
        ['How do you support offline mode?', 'Cache data locally, show the cached data, queue user changes, and sync them when the network returns.'],
      ],
    },
  },

  /* ---------------- 9. PWA ---------------- */
  {
    id: 'pwa',
    name: 'PWA',
    icon: '📲',
    phase: 3,
    why: 'Progressive Web Apps make websites installable and offline-ready without app stores.',
    topics: {
      basic: [
        ['What a PWA is', 'A website that can be installed on the home screen and work offline, like an app.'],
        ['Web app manifest', 'A JSON file with the name, icons, start_url, theme colour and display mode.'],
        ['HTTPS', 'PWAs need a secure HTTPS site (localhost is allowed for testing).'],
        ['Installability', "The browser shows 'Install app' when the manifest and other rules are met."],
      ],
      intermediate: [
        ['Service workers', 'A background script with a lifecycle: install, activate and fetch.'],
        ['Caching strategies', 'Cache first, network first, and stale-while-revalidate.'],
        ['Offline page', 'Show a friendly page or cached data when there is no internet.'],
        ['Tools', 'Workbox, vite-plugin-pwa and the Angular service worker (@angular/pwa).'],
      ],
      advanced: [
        ['Push notifications', 'The Push API and Notifications API with VAPID keys.'],
        ['Background sync', 'Send queued data automatically when the connection returns.'],
        ['Updating safely', 'Detect a new service worker version and ask the user to refresh.'],
        ['Auditing', 'Use Lighthouse and Chrome DevTools to test PWA quality and performance.'],
      ],
    },
    qa: {
      basic: [
        ['What is a PWA?', 'A web app that uses modern browser features (manifest, service worker, HTTPS) to be installable, fast and work offline.'],
        ['What is the web app manifest?', 'A JSON file that tells the browser the app name, icons, start URL, colours and how to display it when installed.'],
        ['Why does a PWA need HTTPS?', 'Service workers are powerful (they can intercept requests), so browsers only allow them on secure origins.'],
        ['PWA vs native app?', 'A PWA needs no app store and uses one web codebase. Native apps have deeper device access and better performance for heavy apps.'],
      ],
      intermediate: [
        ['What is a service worker?', 'A script that runs in the background, separate from the page, and can cache files, intercept network requests and receive push messages.'],
        ['Explain the caching strategies.', 'Cache first: use the cache, fall back to the network (static files). Network first: try the network, fall back to the cache (API data). Stale-while-revalidate: show the cache now and update it in the background.'],
        ['What is the service worker lifecycle?', 'Register, then install (cache files), then activate (clean old caches), then it controls pages and handles fetch events.'],
        ['How do you test offline mode?', "Use Chrome DevTools > Application > Service Workers and tick 'Offline', or set Network to Offline."],
      ],
      advanced: [
        ['How do you handle app updates in a PWA?', "A new service worker installs and waits; show a message 'New version available', then call skipWaiting and reload."],
        ['How do push notifications work in a PWA?', 'The page asks permission, subscribes with the Push API using VAPID keys, sends the subscription to the server, and the service worker shows the notification.'],
        ['What are PWA limits on iOS?', 'iOS supports PWAs with some limits: installation is from the Share menu and storage can be cleared. Push needs the app to be added to the home screen.'],
        ['What is background sync?', 'It lets the service worker retry sending data, such as a form, when the device is back online.'],
      ],
    },
  },

  /* ---------------- 10. NODE.JS ---------------- */
  {
    id: 'node',
    name: 'Node.js',
    icon: '🟩',
    phase: 4,
    why: 'Node.js lets you build backends with the JavaScript you already know. It is very common in startups and full-stack roles.',
    topics: {
      basic: [
        ['What Node.js is', 'JavaScript running on the server, built on the V8 engine.'],
        ['npm and package.json', 'Install packages, manage versions, and run scripts.'],
        ['Modules', 'CommonJS (require) and ES modules (import/export).'],
        ['Built-in modules', 'fs (files), path, http, os and events.'],
      ],
      intermediate: [
        ['Express', 'Routes, middleware, request and response, and static files.'],
        ['REST APIs', 'GET, POST, PUT, PATCH and DELETE with correct status codes.'],
        ['Configuration', 'Environment variables with .env and process.env.'],
        ['Validation and errors', 'Validate input with Zod or Joi, and use central error-handling middleware.'],
      ],
      advanced: [
        ['Event loop and streams', 'Non-blocking I/O, streams for big files, and worker threads.'],
        ['Authentication', 'Hash passwords with bcrypt, use JWT or sessions, and role checks.'],
        ['Scaling', 'Cluster mode, PM2, caching with Redis, and load balancing.'],
        ['Testing and security', 'Jest and Supertest, plus helmet, rate limiting and CORS settings.'],
      ],
    },
    qa: {
      basic: [
        ['What is Node.js?', 'A JavaScript runtime built on the V8 engine that runs JavaScript outside the browser, mainly for servers and tools.'],
        ['What is npm?', 'The Node package manager. It installs libraries and runs project scripts.'],
        ['package.json vs package-lock.json?', 'package.json lists dependencies and version ranges. package-lock.json records the exact installed versions so every install is the same.'],
        ['require vs import?', 'require is CommonJS (older, synchronous). import is ES modules (modern standard, supports static analysis).'],
      ],
      intermediate: [
        ['What is middleware in Express?', 'A function that runs between the request and the route handler. It can log, check auth, parse JSON, or stop the request.'],
        ['How do you handle errors in Express?', 'Use try/catch in async routes and pass errors to next(err), handled by one error middleware with four parameters (err, req, res, next).'],
        ['What is REST?', 'A style of API design using URLs for resources and HTTP methods for actions, with stateless requests.'],
        ['Why use environment variables?', 'To keep secrets and settings (database URL, keys, port) out of the code and change them per environment.'],
      ],
      advanced: [
        ['How does Node handle many requests with one thread?', 'It uses non-blocking I/O and the event loop: slow work like database calls happens in the background while Node serves other requests.'],
        ['What are streams?', 'A way to process data in small pieces (chunks) instead of loading everything into memory, for example big files or video.'],
        ['How do you scale a Node.js app?', 'Run several processes (cluster or PM2), put a load balancer in front, cache with Redis, and keep the app stateless.'],
        ['How do you secure an Express API?', 'Validate input, use helmet, rate limiting, CORS rules, hashed passwords, JWT expiry, HTTPS, and keep dependencies updated.'],
      ],
    },
  },

  /* ---------------- 11. MONGODB ---------------- */
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: '🍃',
    phase: 4,
    why: 'MongoDB is the most popular NoSQL database, often used with Node.js (the MERN and MEAN stacks).',
    topics: {
      basic: [
        ['NoSQL and documents', 'Data is stored as JSON-like documents instead of table rows.'],
        ['Databases, collections and documents', 'A collection is like a table; a document is like a row.'],
        ['CRUD', 'insertOne, find, updateOne and deleteOne.'],
        ['Query operators', '$eq, $gt, $lt, $in, $and, $or and $regex.'],
      ],
      intermediate: [
        ['Mongoose', 'Schemas, models, validation and middleware for Node.js.'],
        ['Relationships', 'Embed related data or reference it by id, and use populate().'],
        ['Indexes', 'Single, compound, unique and text indexes for fast queries.'],
        ['Aggregation pipeline', '$match, $group, $sort, $project and $lookup for reports.'],
      ],
      advanced: [
        ['Schema design patterns', 'Design for how the data is read: embedding, bucketing and the subset pattern.'],
        ['Transactions', 'Multi-document ACID transactions on replica sets.'],
        ['Replication and sharding', 'Replica sets for high availability; sharding for very large data.'],
        ['Performance and operations', 'explain(), MongoDB Atlas, backups and monitoring.'],
      ],
    },
    qa: {
      basic: [
        ['What is MongoDB?', 'A NoSQL document database that stores data as flexible JSON-like (BSON) documents.'],
        ['SQL vs NoSQL?', 'SQL uses tables with a fixed schema and joins. NoSQL (MongoDB) uses flexible documents and scales out easily.'],
        ['What are a document and a collection?', 'A document is one record (like a JSON object). A collection is a group of documents (like a table).'],
        ['What is _id?', 'The unique primary key of every document, created automatically as an ObjectId if you do not give one.'],
      ],
      intermediate: [
        ['When do you embed and when do you reference?', 'Embed data that is read together and small (address inside user). Reference data that is large, shared or grows a lot (orders of a user).'],
        ['What is the aggregation pipeline?', 'A series of stages ($match, $group, $sort...) that transform documents to produce reports and summaries.'],
        ['What is an index?', 'A data structure that makes queries on a field fast, at the cost of extra storage and slower writes.'],
        ['What does populate() do in Mongoose?', 'It replaces a referenced id with the full document from the other collection.'],
      ],
      advanced: [
        ['What is sharding?', 'Splitting data across several servers using a shard key, so the database can grow horizontally.'],
        ['What is a replica set?', 'A group of servers with the same data: one primary for writes and secondaries for failover and reads.'],
        ['When would you choose SQL instead of MongoDB?', 'When data is highly relational, needs complex joins and strict consistency, such as banking or accounting.'],
        ['Does MongoDB support transactions?', 'Yes. Multi-document ACID transactions are supported on replica sets and sharded clusters.'],
      ],
    },
  },

  /* ---------------- 12. SQL & POSTGRESQL ---------------- */
  {
    id: 'sql',
    name: 'SQL & PostgreSQL',
    icon: '🐘',
    phase: 4,
    why: 'SQL is required in almost every backend job. PostgreSQL is one of the most loved databases and pairs with Java and Spring Boot.',
    topics: {
      basic: [
        ['Tables, rows and columns', 'Data is stored in tables; each row is one record and each column one attribute.'],
        ['Reading data', 'SELECT, WHERE, ORDER BY, LIMIT and DISTINCT.'],
        ['Changing data', 'INSERT, UPDATE and DELETE (always with a WHERE clause).'],
        ['Keys', 'A primary key identifies a row; a foreign key links to another table.'],
      ],
      intermediate: [
        ['Joins', 'INNER, LEFT, RIGHT and FULL joins combine related tables.'],
        ['Grouping', 'GROUP BY, HAVING and COUNT, SUM, AVG, MIN, MAX.'],
        ['Constraints and normalization', 'NOT NULL, UNIQUE, CHECK, and the first, second and third normal forms.'],
        ['Subqueries and views', 'Queries inside queries, and saved queries as views.'],
      ],
      advanced: [
        ['Indexes and query plans', 'CREATE INDEX, and EXPLAIN ANALYZE to see how a query runs.'],
        ['Transactions and ACID', 'BEGIN, COMMIT, ROLLBACK, and isolation levels.'],
        ['Window functions', 'ROW_NUMBER, RANK, LAG and running totals with OVER().'],
        ['Safety and operations', 'Parameterized queries, migrations (Flyway), backups and roles.'],
      ],
    },
    qa: {
      basic: [
        ['What is a primary key?', 'A column (or set of columns) that uniquely identifies each row. It cannot be null or duplicated.'],
        ['What is a foreign key?', 'A column that points to the primary key of another table, keeping related data valid.'],
        ['What is the difference between WHERE and HAVING?', 'WHERE filters rows before grouping. HAVING filters groups after GROUP BY.'],
        ['DELETE vs TRUNCATE vs DROP?', 'DELETE removes chosen rows. TRUNCATE quickly removes all rows. DROP removes the whole table.'],
      ],
      intermediate: [
        ['INNER JOIN vs LEFT JOIN?', 'INNER JOIN returns only matching rows. LEFT JOIN returns all rows from the left table, with NULLs where there is no match.'],
        ['What is normalization?', 'Organising tables to avoid duplicate data and update problems, for example storing department names once in their own table.'],
        ['How do you find the second-highest salary?', 'SELECT MAX(salary) FROM employee WHERE salary < (SELECT MAX(salary) FROM employee). Or use DENSE_RANK().'],
        ['What is a view?', 'A saved query that you can use like a table. It simplifies complex queries and can limit which columns users see.'],
      ],
      advanced: [
        ['What is an index and what is the trade-off?', 'It makes searches fast, like a book index. The cost is extra storage and slower inserts and updates.'],
        ['What does ACID mean?', 'Atomicity (all or nothing), Consistency (rules always hold), Isolation (transactions do not disturb each other), Durability (saved data survives crashes).'],
        ['What are window functions?', 'Functions that calculate across related rows without grouping them away, such as ranking employees within each department.'],
        ['How do you prevent SQL injection?', 'Never join user input into SQL strings. Use parameterized queries or an ORM, and give the app account minimal permissions.'],
      ],
    },
  },

  /* ---------------- 13. JAVA ---------------- */
  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    phase: 4,
    why: 'Java powers banks, hospitals and large enterprises. Java + Spring Boot is one of the most requested backend stacks.',
    topics: {
      basic: [
        ['JDK, JRE and JVM', 'The JDK compiles code into bytecode, and the JVM runs that bytecode on any operating system.'],
        ['Variables and data types', 'int, long, double, char, boolean, String and type casting.'],
        ['Conditions and loops', 'if/else, switch expressions, for, while and for-each.'],
        ['Arrays, Strings and methods', 'Arrays, String methods, StringBuilder, method parameters, return values and overloading.'],
      ],
      intermediate: [
        ['Object-oriented programming', 'Classes, objects, constructors, encapsulation, inheritance, polymorphism and abstraction.'],
        ['Interfaces and abstract classes', 'Contracts and partial base classes, and when to use each.'],
        ['Collections', 'List, Set, Map, Queue and their implementations (ArrayList, HashSet, HashMap).'],
        ['Exceptions', 'Checked and unchecked exceptions, custom exceptions and try-with-resources.'],
      ],
      advanced: [
        ['Generics, lambdas and Streams', 'Type-safe code and functional-style processing with filter, map and collect.'],
        ['Concurrency', 'Threads, ExecutorService, CompletableFuture, synchronized and virtual threads.'],
        ['JVM memory and garbage collection', 'Heap, stack, garbage collectors and memory leaks.'],
        ['Modern Java and design patterns', 'Records, sealed classes, Optional, plus Singleton, Factory, Builder and Strategy.'],
        ['Data structures and algorithms', 'Big-O, arrays, hashing, stacks, queues, trees, sorting and searching.'],
      ],
    },
    qa: {
      basic: [
        ['JDK vs JRE vs JVM?', 'The JVM runs bytecode. The JRE is the JVM plus libraries needed to run apps. The JDK is the JRE plus tools (compiler) to build apps.'],
        ['Why is String immutable in Java?', 'For security, thread safety, caching in the string pool and stable hash codes in HashMap keys.'],
        ['What is the difference between == and equals()?', '== compares references (same object). equals() compares content (same value).'],
        ['Why is main public static void?', 'public so the JVM can call it, static so no object is needed, void because it returns nothing.'],
      ],
      intermediate: [
        ['Interface vs abstract class?', 'An interface is a contract; a class can implement many. An abstract class can have state and constructors; a class can extend only one.'],
        ['ArrayList vs LinkedList?', 'ArrayList gives fast index access. LinkedList gives fast insert and delete at the ends. ArrayList is the usual choice.'],
        ['How does HashMap work?', 'It uses hashCode() to find a bucket and equals() to find the key inside the bucket. Large buckets become trees for speed.'],
        ['Checked vs unchecked exceptions?', 'Checked exceptions (IOException) must be handled or declared. Unchecked exceptions (RuntimeException) usually mean programming mistakes.'],
      ],
      advanced: [
        ['How does garbage collection work?', 'The JVM finds objects that are no longer reachable and frees their memory automatically. Modern collectors like G1 and ZGC keep pauses short.'],
        ['What is a Stream?', 'A pipeline that processes a collection with operations such as filter, map and collect, without changing the source.'],
        ['synchronized vs volatile?', 'synchronized locks a block so only one thread runs it at a time. volatile makes a variable visible to all threads but does not lock.'],
        ['What are virtual threads?', 'Very lightweight threads (Java 21) that let a server handle huge numbers of blocking tasks with simple code.'],
        ['How do you implement a Singleton safely?', 'Use an enum singleton, or a private constructor with a static holder class; both are thread-safe.'],
      ],
    },
  },

  /* ---------------- 14. SPRING BOOT ---------------- */
  {
    id: 'spring',
    name: 'Spring Boot',
    icon: '🌱',
    phase: 4,
    why: 'Spring Boot is the leading Java framework for REST APIs and microservices in companies.',
    topics: {
      basic: [
        ['What Spring Boot is', 'A framework that creates production-ready Java applications quickly, with auto-configuration.'],
        ['Project setup', 'start.spring.io, Maven or Gradle, starters and the project structure.'],
        ['Key annotations', '@SpringBootApplication, @RestController, @Service, @Repository and @Autowired.'],
        ['REST endpoints', '@GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PathVariable and @RequestBody.'],
      ],
      intermediate: [
        ['Dependency injection', 'Spring creates beans and injects them, preferably through constructors.'],
        ['Spring Data JPA', 'Entities, repositories and relationships with Hibernate and PostgreSQL.'],
        ['Validation and errors', '@Valid, Bean Validation annotations, and @RestControllerAdvice for global errors.'],
        ['DTOs, paging and docs', 'Request/response DTOs, Pageable, and OpenAPI/Swagger documentation.'],
        ['Profiles and configuration', 'application.properties or yml, dev/prod profiles and environment variables.'],
      ],
      advanced: [
        ['Spring Security', 'Authentication, JWT, OAuth2 with Entra ID or Keycloak, roles and method security.'],
        ['Testing', 'JUnit 5, Mockito, MockMvc, @SpringBootTest and Testcontainers.'],
        ['Performance', 'Caching with Redis, avoiding the N+1 query problem, and async processing.'],
        ['Microservices', 'Spring Cloud, API Gateway, config server, and messaging with Kafka or RabbitMQ.'],
        ['Production readiness', 'Actuator health checks, metrics, logging and tracing.'],
      ],
    },
    qa: {
      basic: [
        ['What is Spring Boot?', 'An extension of Spring that removes setup work with auto-configuration, starter dependencies and an embedded server.'],
        ['Spring vs Spring Boot?', 'Spring is the core framework. Spring Boot makes it fast to start, with sensible defaults and no manual server setup.'],
        ['What does @SpringBootApplication do?', 'It combines @Configuration, @EnableAutoConfiguration and @ComponentScan to start the application.'],
        ['@Controller vs @RestController?', '@Controller returns views (HTML pages). @RestController returns data (JSON) directly in the response body.'],
      ],
      intermediate: [
        ['What are dependency injection and IoC?', 'Inversion of Control means Spring creates and manages objects. Dependency injection means Spring gives a class the objects it needs.'],
        ['@Component vs @Service vs @Repository?', 'All create beans. @Service marks business logic, and @Repository marks data access and also translates database exceptions.'],
        ['How do you handle exceptions globally?', 'Use a @RestControllerAdvice class with @ExceptionHandler methods that return clean error responses (for example ProblemDetail).'],
        ['JPA vs Hibernate?', 'JPA is the specification (the rules). Hibernate is the most popular implementation of JPA.'],
        ['Lazy vs eager loading?', 'Lazy loads related data only when used. Eager loads it immediately. Lazy is usually better for performance.'],
      ],
      advanced: [
        ['How does JWT authentication work in Spring Security?', 'The user logs in and receives a signed token. Each request sends it in the Authorization header, and a filter verifies it and sets the user in the security context.'],
        ['How does @Transactional work?', 'Spring wraps the method in a proxy that starts a transaction, commits on success and rolls back on a runtime exception.'],
        ['What is the N+1 problem?', 'Loading a list with 1 query, then 1 extra query per item for related data. Fix it with fetch joins, entity graphs or batch fetching.'],
        ['How do microservices communicate?', 'Synchronously with REST or gRPC, or asynchronously with messages through Kafka or RabbitMQ.'],
        ['What is Spring Boot Actuator?', 'Ready-made endpoints for health, metrics and info, used for monitoring in production.'],
      ],
    },
  },

  /* ---------------- 15. DOCKER ---------------- */
  {
    id: 'docker',
    name: 'Docker & Kubernetes',
    icon: '🐳',
    phase: 5,
    why: 'Containers are standard in modern deployment. Docker is asked about in almost every backend and DevOps interview.',
    topics: {
      basic: [
        ['What containers are', 'A package of your app plus everything it needs, running the same on every machine.'],
        ['Images vs containers', 'An image is the packaged template; a container is a running copy of it.'],
        ['Dockerfile basics', 'FROM, WORKDIR, COPY, RUN, EXPOSE, CMD and ENTRYPOINT.'],
        ['Common commands', 'docker build, run, ps, logs, exec, stop and rm.'],
      ],
      intermediate: [
        ['Docker Compose', 'Run the app, database and cache together with one command.'],
        ['Volumes and networks', 'Keep data after containers restart, and let containers talk to each other.'],
        ['Environment variables and secrets', 'Pass configuration at runtime, never bake secrets into images.'],
        ['Registries', 'Docker Hub, Azure Container Registry and Amazon ECR.'],
      ],
      advanced: [
        ['Multi-stage builds', 'Build in one stage and copy only the result into a small runtime image.'],
        ['Image security', 'Small base images, non-root users and vulnerability scanning (Trivy).'],
        ['Health checks and limits', 'HEALTHCHECK, and CPU and memory limits.'],
        ['Kubernetes basics', 'Pods, Deployments, Services, ConfigMaps, Secrets and scaling.'],
      ],
    },
    qa: {
      basic: [
        ['What is Docker?', 'A platform to package applications into containers that run the same way everywhere.'],
        ['Image vs container?', 'An image is a read-only template. A container is a running instance of that image.'],
        ['Container vs virtual machine?', 'Containers share the host operating system kernel, so they are light and start in seconds. VMs include a full OS and are heavier.'],
        ['What is a Dockerfile?', 'A text file with step-by-step instructions to build a Docker image.'],
      ],
      intermediate: [
        ['CMD vs ENTRYPOINT?', 'ENTRYPOINT sets the main command that always runs. CMD gives default arguments, which can be overridden when running the container.'],
        ['What is Docker Compose?', 'A tool that defines and runs multi-container apps from one YAML file.'],
        ['Why use volumes?', 'Container files disappear when the container is removed. Volumes keep data, such as database files, safely.'],
        ['COPY vs ADD?', 'COPY copies files. ADD can also download URLs and extract archives. Prefer COPY for clarity.'],
      ],
      advanced: [
        ['What are the benefits of multi-stage builds?', 'Build tools stay in the build stage, so the final image is smaller, faster to deploy and has fewer vulnerabilities.'],
        ['How do you reduce image size?', 'Use slim or distroless base images, multi-stage builds, a .dockerignore file, and fewer layers.'],
        ['What is Kubernetes and why use it?', 'A container orchestrator that deploys, scales, heals and load-balances containers across many machines.'],
        ['How do you secure containers?', 'Run as non-root, use minimal images, scan for vulnerabilities, keep secrets outside images, and limit resources.'],
      ],
    },
  },

  /* ---------------- 16. CI/CD ---------------- */
  {
    id: 'cicd',
    name: 'CI/CD',
    icon: '🔁',
    phase: 5,
    why: 'Every professional team builds, tests and deploys automatically. CI/CD skills make you productive from day one.',
    topics: {
      basic: [
        ['What CI and CD mean', 'Continuous Integration builds and tests every change. Continuous Delivery/Deployment releases good builds automatically.'],
        ['Pipelines', 'A pipeline has stages, jobs and steps.'],
        ['Triggers', 'Run on push, on pull request, on a schedule, or manually.'],
        ['Automated build and test', 'Install, lint, test and build on every change.'],
      ],
      intermediate: [
        ['GitHub Actions', 'Workflows in .github/workflows written in YAML.'],
        ['Azure DevOps Pipelines', 'YAML pipelines, agents, and service connections to Azure.'],
        ['Secrets and variables', 'Store keys as pipeline secrets, never in code or YAML.'],
        ['Artifacts and images', 'Publish build outputs and push Docker images to a registry.'],
      ],
      advanced: [
        ['Deployment strategies', 'Rolling, blue-green and canary releases.'],
        ['Environments and approvals', 'dev, then test, then production, with manual approval gates.'],
        ['Infrastructure as Code', 'Create cloud resources with Bicep or Terraform from the pipeline.'],
        ['Quality gates', 'Code coverage, SonarQube, dependency and container scanning.'],
      ],
    },
    qa: {
      basic: [
        ['What is Continuous Integration?', 'Developers merge code often, and each change is automatically built and tested to catch problems early.'],
        ['Continuous Delivery vs Continuous Deployment?', 'Delivery: every good build is ready to release, but a person approves production. Deployment: every good build goes to production automatically.'],
        ['What is a pipeline?', 'An automated sequence of steps (build, test, package, deploy) that runs when code changes.'],
        ['Why are automated tests important in CI?', 'They stop broken code from being merged or deployed, and give fast feedback to developers.'],
      ],
      intermediate: [
        ['How do you store secrets in a pipeline?', 'Use the platform secret store (GitHub Secrets, Azure DevOps variable groups or Key Vault), and never print them in logs.'],
        ['What is a build artifact?', 'The output of a build, such as a .jar file, a dist folder or a Docker image, that is deployed later.'],
        ['GitHub Actions vs Azure DevOps?', 'Both run YAML pipelines. GitHub Actions is built into GitHub; Azure DevOps adds boards, test plans and strong Azure integration.'],
        ['How do you run a pipeline on pull requests?', 'Add a pull_request trigger, and make the checks required in branch protection so failing code cannot merge.'],
      ],
      advanced: [
        ['Blue-green vs canary deployment?', 'Blue-green switches all traffic from the old environment to a new one at once. Canary sends a small percentage of traffic to the new version first.'],
        ['What is Infrastructure as Code?', 'Defining servers, databases and networks in code files (Bicep, Terraform), so environments are repeatable and reviewed.'],
        ['How do you roll back a bad release?', 'Redeploy the previous artifact or image, switch traffic back (blue-green), or revert the commit and let the pipeline redeploy.'],
        ['Which quality gates have you used?', 'Example: unit tests must pass, coverage above a target, no high-severity vulnerabilities, and SonarQube quality gate passed.'],
      ],
    },
  },

  /* ---------------- 17. AZURE ---------------- */
  {
    id: 'azure',
    name: 'Azure',
    icon: '☁️',
    phase: 5,
    why: 'Azure is one of the top two clouds and is very common in enterprise and Indian IT services companies.',
    topics: {
      basic: [
        ['Cloud basics', 'IaaS, PaaS and SaaS, and pay-as-you-go pricing.'],
        ['Azure structure', 'Tenant, subscription, resource group and resources.'],
        ['Regions and availability zones', 'Where your resources run, for speed and reliability.'],
        ['Tools', 'Azure Portal, Azure CLI and Bicep.'],
      ],
      intermediate: [
        ['Hosting web apps', 'App Service for APIs and Static Web Apps for frontends.'],
        ['Databases', 'Azure SQL, Azure Database for PostgreSQL and Cosmos DB.'],
        ['Storage', 'Blob Storage for files, with access tiers.'],
        ['Secrets and identity', 'Key Vault and managed identity, so apps need no passwords in code.'],
      ],
      advanced: [
        ['Containers', 'Azure Container Apps and Azure Kubernetes Service (AKS).'],
        ['Authentication', 'Microsoft Entra ID (Azure AD), app registrations and OAuth2 / OpenID Connect.'],
        ['Monitoring', 'Azure Monitor, Application Insights, alerts and logs.'],
        ['Networking and security', 'VNets, private endpoints, NSGs and Front Door.'],
        ['Azure AI services', 'Azure OpenAI, Azure AI Search and Azure AI Foundry.'],
      ],
    },
    qa: {
      basic: [
        ['What is Azure?', "Microsoft's cloud platform for computing, storage, databases, networking and AI services."],
        ['IaaS vs PaaS vs SaaS?', 'IaaS: you manage the VM and OS. PaaS: you manage only your app (App Service). SaaS: you just use the software (Microsoft 365).'],
        ['What is a resource group?', 'A container that holds related Azure resources so you can manage, secure and delete them together.'],
        ['What is a region?', 'A geographic location with Azure data centres, such as Central India. Choose one close to your users.'],
      ],
      intermediate: [
        ['App Service vs a virtual machine?', 'App Service is managed hosting: no OS patching, with easy scaling. A VM gives full control but you manage everything.'],
        ['What is Azure Key Vault?', 'A secure store for secrets, keys and certificates, with access control and auditing.'],
        ['What is a managed identity?', 'An identity Azure gives your app, so it can access other services such as Key Vault without storing passwords.'],
        ['What are Blob Storage access tiers?', 'Hot for frequent access, Cool and Cold for less frequent access, and Archive for rarely used data at the lowest price.'],
      ],
      advanced: [
        ['App Service vs Container Apps vs AKS?', 'App Service: simplest web hosting. Container Apps: serverless containers with scaling. AKS: full Kubernetes with the most control and complexity.'],
        ['How do you secure an app in Azure?', 'Entra ID authentication, managed identity, Key Vault, private endpoints, network rules, HTTPS only, and Defender for Cloud.'],
        ['How do you monitor an Azure app?', 'Application Insights for requests, errors and traces; Azure Monitor for metrics and alerts; Log Analytics for queries.'],
        ['What is a private endpoint?', 'A private IP address in your VNet for an Azure service, so traffic does not go over the public internet.'],
      ],
    },
  },

  /* ---------------- 18. AWS ---------------- */
  {
    id: 'aws',
    name: 'AWS',
    icon: '🟧',
    phase: 5,
    why: 'AWS is the largest cloud provider. Knowing its core services makes you comfortable in any cloud team.',
    topics: {
      basic: [
        ['Global infrastructure', 'Regions and Availability Zones.'],
        ['IAM', 'Users, groups, roles, policies and least privilege.'],
        ['EC2', 'Virtual servers, instance types, key pairs and security groups.'],
        ['S3', 'Object storage with buckets, storage classes and permissions.'],
      ],
      intermediate: [
        ['Databases', 'RDS for SQL databases and DynamoDB for NoSQL.'],
        ['App hosting', 'Elastic Beanstalk, App Runner and Lambda.'],
        ['VPC basics', 'Subnets, route tables, security groups and NAT gateways.'],
        ['CloudWatch', 'Logs, metrics, dashboards and alarms.'],
      ],
      advanced: [
        ['Containers', 'ECS, Fargate and EKS.'],
        ['Serverless APIs', 'API Gateway with Lambda and DynamoDB.'],
        ['Secrets and encryption', 'Secrets Manager, Parameter Store and KMS.'],
        ['Well-Architected Framework', 'Operational excellence, security, reliability, performance, cost and sustainability.'],
      ],
    },
    qa: {
      basic: [
        ['What is EC2?', 'Elastic Compute Cloud: resizable virtual servers in AWS.'],
        ['What is S3?', 'Simple Storage Service: highly durable object storage for files, backups and static websites.'],
        ['What is IAM?', 'Identity and Access Management: controls who can do what in AWS using users, roles and policies.'],
        ['Region vs Availability Zone?', 'A region is a geographic area. An Availability Zone is one or more separate data centres inside a region.'],
      ],
      intermediate: [
        ['RDS vs DynamoDB?', 'RDS is a managed relational database (PostgreSQL, MySQL). DynamoDB is a serverless NoSQL key-value database.'],
        ['What is AWS Lambda?', 'Serverless functions that run code on events without managing servers; you pay only for execution time.'],
        ['Security group vs NACL?', 'A security group is a stateful firewall on an instance. A NACL is a stateless firewall on a subnet.'],
        ['What is CloudWatch used for?', 'Collecting logs and metrics, creating dashboards and alarms to monitor AWS resources and apps.'],
      ],
      advanced: [
        ['ECS vs EKS?', 'ECS is the simpler AWS-native container service. EKS is managed Kubernetes for teams that need Kubernetes.'],
        ['What are the pros and cons of serverless?', 'Pros: no servers, automatic scaling, pay per use. Cons: cold starts, time limits and harder local testing.'],
        ['Map common Azure services to AWS.', 'App Service ≈ Elastic Beanstalk/App Runner, Blob ≈ S3, Key Vault ≈ Secrets Manager, Entra ID ≈ IAM Identity Center, Monitor ≈ CloudWatch.'],
        ['What are the Well-Architected pillars?', 'Operational excellence, security, reliability, performance efficiency, cost optimisation and sustainability.'],
      ],
    },
  },

  /* ---------------- 19. PYTHON ---------------- */
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    phase: 6,
    why: 'Python is the main language of AI and data. Basic Python helps you build AI features and read AI examples.',
    topics: {
      basic: [
        ['Syntax', 'Indentation instead of braces, variables and print.'],
        ['Data structures', 'Lists, tuples, dictionaries and sets.'],
        ['Control flow and functions', 'if/elif/else, for and while loops, and def.'],
        ['Packages', 'pip, virtual environments and modules.'],
      ],
      intermediate: [
        ['Files and JSON', 'Read and write files and work with JSON data.'],
        ['Classes', 'OOP in Python: classes, __init__ and inheritance.'],
        ['Errors', 'try/except/finally and custom exceptions.'],
        ['HTTP and APIs', 'requests for calling APIs, and FastAPI for building them.'],
      ],
      advanced: [
        ['Async Python', 'asyncio, async/await and httpx.'],
        ['Data libraries', 'pandas and numpy basics.'],
        ['Type hints and Pydantic', 'Typed, validated data models.'],
        ['AI libraries', 'OpenAI SDK, LangChain, LlamaIndex, and pytest for testing.'],
      ],
    },
    qa: {
      basic: [
        ['List vs tuple?', 'A list can change (mutable). A tuple cannot change (immutable) and is slightly faster.'],
        ['What is a dictionary?', 'A collection of key-value pairs, like {"name": "Anu", "age": 29}.'],
        ['What is a virtual environment?', 'An isolated folder of packages for one project, so versions do not clash between projects.'],
        ['Why is indentation important in Python?', 'Indentation defines code blocks. Wrong indentation causes errors or wrong behaviour.'],
      ],
      intermediate: [
        ['What is a decorator?', 'A function that wraps another function to add behaviour, written with @name above it.'],
        ['What is a list comprehension?', 'A short way to create a list: [x * 2 for x in numbers if x > 0].'],
        ['What are *args and **kwargs?', '*args collects extra positional arguments as a tuple; **kwargs collects extra named arguments as a dictionary.'],
        ['How does exception handling work?', 'Code in try runs; if an error happens, the matching except runs; finally always runs.'],
      ],
      advanced: [
        ['What is the GIL?', 'The Global Interpreter Lock lets only one thread run Python bytecode at a time, so CPU-heavy work uses multiprocessing instead.'],
        ['What are generators?', 'Functions that use yield to produce values one at a time, saving memory.'],
        ['How does async work in Python?', 'async functions run on an event loop; await pauses at I/O so other tasks can run, which is good for many API calls.'],
        ['FastAPI vs Flask?', 'FastAPI is modern, async, fast, and creates validation and docs from type hints. Flask is simpler and older.'],
      ],
    },
  },

  /* ---------------- 20. AI INTEGRATION ---------------- */
  {
    id: 'ai',
    name: 'AI Integration',
    icon: '🤖',
    phase: 6,
    why: 'Companies are adding AI to every product. Developers who can build safe, useful AI features are in very high demand.',
    topics: {
      basic: [
        ['AI, machine learning, generative AI and LLMs', 'How they relate, and what a large language model can and cannot do.'],
        ['Tokens, prompts and temperature', 'How models read text, how to instruct them, and how creative they should be.'],
        ['Calling an LLM API', 'Use Azure OpenAI or OpenAI from your backend, never from the browser.'],
        ['Prompt engineering', 'Role, task, context, output format and rules.'],
      ],
      intermediate: [
        ['Structured output', 'Ask for JSON, validate it, and handle invalid replies.'],
        ['Embeddings and vector search', 'Turn text into numbers and find similar meaning.'],
        ['RAG (Retrieval-Augmented Generation)', 'Chunk documents, embed, retrieve the best passages, and answer with sources.'],
        ['Chatbot UI and streaming', 'Show answers word by word and keep conversation history.'],
      ],
      advanced: [
        ['AI agents and tool calling', 'Let the model call your functions (search, booking) in a controlled loop.'],
        ['Evaluation', 'Test sets for correctness, grounding, safety, latency and cost.'],
        ['Responsible AI and security', 'Prompt injection, personal data protection, access control and content filters.'],
        ['Vector databases', 'Azure AI Search, pgvector and Pinecone.'],
        ['MCP and multi-agent systems', 'Standard tool connections (Model Context Protocol) and agents working together.'],
        ['Fine-tuning vs RAG', 'When to train a model further and when to give it documents instead.'],
      ],
    },
    qa: {
      basic: [
        ['What is an LLM?', 'A Large Language Model trained on huge amounts of text to understand and generate language, such as GPT or Claude.'],
        ['What is a token?', 'A small piece of text (part of a word) that the model processes. Cost and limits are measured in tokens.'],
        ['What is prompt engineering?', 'Writing clear instructions with role, context, examples and output format to get reliable answers.'],
        ['Why must the API key stay on the server?', 'Anything in browser code can be seen by users. A leaked key can be misused and cost money.'],
      ],
      intermediate: [
        ['What are embeddings?', 'Lists of numbers that represent the meaning of text, so similar texts have similar numbers.'],
        ['What is RAG and why use it?', 'Retrieve relevant documents and give them to the model as context. It gives up-to-date, grounded answers with sources and fewer made-up facts.'],
        ['What is a vector database?', 'A database that stores embeddings and quickly finds the most similar ones to a query.'],
        ['How do you stream AI responses?', 'Use the streaming option of the API and send chunks to the browser with Server-Sent Events or a streaming fetch.'],
      ],
      advanced: [
        ['What is function (tool) calling?', 'The model returns a request to call one of your functions with arguments; your code runs it and sends the result back.'],
        ['How do you evaluate an LLM application?', 'Use a fixed set of test questions, check correctness and grounding, measure latency and cost, and rerun after every change.'],
        ['What is prompt injection and how do you defend against it?', 'Hidden instructions in user text or documents that try to override your rules. Defend with permission checks in code, input/output filters and least-privilege tools.'],
        ['RAG vs fine-tuning?', 'RAG adds knowledge at query time and is easy to update. Fine-tuning changes model behaviour or style. Most business apps start with RAG.'],
        ['How do you reduce cost and latency?', 'Use smaller models where possible, shorter prompts, caching, streaming, and limit the retrieved context.'],
      ],
    },
  },

  /* ---------------- 21. SYSTEM DESIGN ---------------- */
  {
    id: 'system-design',
    name: 'System Design',
    icon: '🏗️',
    phase: 6,
    why: 'System design is asked in every mid-level and senior interview, and it shows you can think beyond code.',
    topics: {
      basic: [
        ['Client-server and HTTP', 'How browsers talk to servers with requests and responses.'],
        ['Scaling', 'Vertical scaling (a bigger machine) vs horizontal scaling (more machines).'],
        ['Load balancers', 'Spread traffic across servers and remove unhealthy ones.'],
        ['Caching', 'Keep frequently used data in fast memory (Redis, CDN, browser).'],
      ],
      intermediate: [
        ['Databases', 'SQL vs NoSQL, replication and read replicas.'],
        ['CDN', 'Serve static files from servers near the user.'],
        ['Message queues', 'Kafka and RabbitMQ for background work and decoupling.'],
        ['API design', 'Pagination, versioning, idempotency and rate limiting.'],
      ],
      advanced: [
        ['Monolith vs microservices', 'Trade-offs in complexity, scaling and team size.'],
        ['CAP theorem and consistency', 'Consistency, availability and partition tolerance; eventual consistency.'],
        ['Resilience', 'Timeouts, retries, circuit breakers and graceful degradation.'],
        ['Observability', 'Logs, metrics, traces and alerts.'],
        ['Case studies', 'Design a URL shortener, chat app, booking system or news feed.'],
      ],
    },
    qa: {
      basic: [
        ['What is a load balancer?', 'A component that distributes incoming requests across several servers to improve speed and availability.'],
        ['Vertical vs horizontal scaling?', 'Vertical: add more CPU or RAM to one machine. Horizontal: add more machines. Horizontal scales further.'],
        ['What is caching?', 'Storing results in fast storage so repeated requests are served quickly without hitting the database.'],
        ['What is a CDN?', 'A Content Delivery Network: servers around the world that serve static files from the location closest to the user.'],
      ],
      intermediate: [
        ['How do you choose between SQL and NoSQL?', 'SQL for structured, relational data needing transactions. NoSQL for flexible schemas, huge scale or simple key lookups.'],
        ['What is a message queue?', 'A buffer where services put tasks for others to process later, so slow work does not block users.'],
        ['What is idempotency?', 'Doing the same request twice gives the same result as doing it once, which is important for retries and payments.'],
        ['How do you version an API?', 'Put the version in the URL (/api/v1) or a header, and keep old versions working until clients move.'],
      ],
      advanced: [
        ['What is the CAP theorem?', 'In a network failure, a distributed system must choose between consistency (same data everywhere) and availability (always answer).'],
        ['How would you design a URL shortener?', 'An API to create short codes (base62 of an id), a key-value store mapping code to URL, a cache for hot links, and redirects with analytics through a queue.'],
        ['What is a circuit breaker?', 'A pattern that stops calling a failing service for a while and returns a fallback, preventing cascading failures.'],
        ['Monolith or microservices first?', 'Start with a well-structured modular monolith. Move parts to microservices only when scaling, team size or release speed truly need it.'],
      ],
    },
  },
]

const levels = [
  { key: 'basic', label: 'Basic', badge: '🟢' },
  { key: 'intermediate', label: 'Intermediate', badge: '🟡' },
  { key: 'advanced', label: 'Advanced', badge: '🔴' },
]

/* =========================================================
   3. SAVE PROGRESS IN THE BROWSER
   ========================================================= */
const STORAGE_KEY = 'skillpath-v1'

function loadSaved() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return data && typeof data === 'object' ? data : {}
  } catch {
    return {}
  }
}

function countTopics(skill) {
  return levels.reduce((sum, level) => sum + skill.topics[level.key].length, 0)
}

/* =========================================================
   4. MAIN APP
   ========================================================= */
function App() {
  const [saved] = useState(loadSaved)
  const [view, setView] = useState(saved.view === 'order' ? 'order' : 'skill')
  const [skillId, setSkillId] = useState(
    skills.some(s => s.id === saved.skillId) ? saved.skillId : skills[0].id
  )
  const [tab, setTab] = useState(saved.tab === 'interview' ? 'interview' : 'topics')
  const [learned, setLearned] = useState(Array.isArray(saved.learned) ? saved.learned : [])
  const [menuOpen, setMenuOpen] = useState(false)
  const [levelFilter, setLevelFilter] = useState('all')
  const [openAnswers, setOpenAnswers] = useState([])
  const [showAll, setShowAll] = useState(false)

  const index = skills.findIndex(s => s.id === skillId)
  const skill = skills[index]
  const prevSkill = skills[index - 1]
  const nextSkill = skills[index + 1]

  const totalTopics = skills.reduce((sum, s) => sum + countTopics(s), 0)
  const overall = Math.round((learned.length / totalTopics) * 100)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ view, skillId, tab, learned }))
    } catch {
      /* storage not available */
    }
  }, [view, skillId, tab, learned])

  function learnedCount(s) {
    return levels.reduce(
      (sum, level) =>
        sum + s.topics[level.key].filter((_, i) => learned.includes(s.id + ':' + level.key + ':' + i)).length,
      0
    )
  }

  function openSkill(id, newTab) {
    setSkillId(id)
    setView('skill')
    if (newTab) setTab(newTab)
    setMenuOpen(false)
    setOpenAnswers([])
    setShowAll(false)
    setLevelFilter('all')
    window.scrollTo({ top: 0 })
  }

  function toggleLearned(key) {
    setLearned(learned.includes(key) ? learned.filter(k => k !== key) : [...learned, key])
  }

  function toggleAnswer(key) {
    setOpenAnswers(openAnswers.includes(key) ? openAnswers.filter(k => k !== key) : [...openAnswers, key])
  }

  const skillDone = learnedCount(skill)
  const skillTotal = countTopics(skill)
  const skillPercent = Math.round((skillDone / skillTotal) * 100)
  const questionCount = levels.reduce((sum, level) => sum + skill.qa[level.key].length, 0)

  return (
    <div className="app">
      {/* ---------- TOP BAR ---------- */}
      <header className="topbar">
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open skills menu">
          ☰
        </button>
        <div className="brand">
          <span className="brand-mark">S</span>
          Skill<span>Path</span>
        </div>
        <div className="overall" title="Topics learned across all skills">
          <div className="overall-bar">
            <div style={{ width: overall + '%' }} />
          </div>
          <strong>{overall}%</strong>
        </div>
      </header>

      <div className="layout">
        {/* ---------- SIDE MENU: SKILLS IN ORDER ---------- */}
        <aside className={menuOpen ? 'sidebar open' : 'sidebar'} aria-label="Skills">
          <button
            className={view === 'order' ? 'order-link active' : 'order-link'}
            onClick={() => {
              setView('order')
              setMenuOpen(false)
            }}
          >
            🗺️ Learning Order (start here)
          </button>

          {phases.map(phase => (
            <div key={phase.id} className="phase">
              <p className="phase-title">{phase.name}</p>
              {skills
                .filter(s => s.phase === phase.id)
                .map(s => {
                  const step = skills.indexOf(s) + 1
                  const done = learnedCount(s)
                  const total = countTopics(s)
                  const active = view === 'skill' && s.id === skillId
                  return (
                    <button
                      key={s.id}
                      className={active ? 'skill-link active' : 'skill-link'}
                      onClick={() => openSkill(s.id)}
                    >
                      <span className="step-no">{step}</span>
                      <span className="skill-icon">{s.icon}</span>
                      <span className="skill-name">{s.name}</span>
                      <span className={done === total ? 'skill-count full' : 'skill-count'}>
                        {done === total ? '✓' : done + '/' + total}
                      </span>
                    </button>
                  )
                })}
            </div>
          ))}
        </aside>
        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

        {/* ---------- MAIN CONTENT ---------- */}
        <main className="content">
          {view === 'order' ? (
            <section>
              <h1>🗺️ Learning Order</h1>
              <p className="lead">
                Learn the skills in this order: number 1 first, then 2, then 3. Each skill builds on the one before.
                Click any skill to open its topics and interview questions.
              </p>
              {phases.map(phase => (
                <div key={phase.id} className="order-phase">
                  <h2>{phase.name}</h2>
                  <div className="order-grid">
                    {skills
                      .filter(s => s.phase === phase.id)
                      .map(s => {
                        const step = skills.indexOf(s) + 1
                        const done = learnedCount(s)
                        const total = countTopics(s)
                        return (
                          <button key={s.id} className="order-card" onClick={() => openSkill(s.id, 'topics')}>
                            <span className="order-step">Step {step}</span>
                            <strong>
                              {s.icon} {s.name}
                            </strong>
                            <span className="order-why">{s.why}</span>
                            <div className="mini-bar">
                              <div style={{ width: Math.round((done / total) * 100) + '%' }} />
                            </div>
                            <span className="order-count">
                              {done}/{total} topics learned
                            </span>
                          </button>
                        )
                      })}
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <section key={skill.id}>
              {/* Skill header */}
              <div className="skill-header">
                <div>
                  <p className="step-label">
                    Step {index + 1} of {skills.length} · {phases.find(p => p.id === skill.phase).name}
                  </p>
                  <h1>
                    {skill.icon} {skill.name}
                  </h1>
                  <p className="why">{skill.why}</p>
                  <p className="path-hint">
                    {prevSkill ? 'Learn after: ' + prevSkill.name : 'This is the first skill'}
                    {nextSkill ? ' · Next: ' + nextSkill.name : ' · This is the last skill'}
                  </p>
                </div>
                <div className="skill-progress">
                  <strong>{skillPercent}%</strong>
                  <span>
                    {skillDone}/{skillTotal} learned
                  </span>
                </div>
              </div>

              {/* Two tabs */}
              <div className="tabs" role="tablist">
                <button
                  role="tab"
                  aria-selected={tab === 'topics'}
                  className={tab === 'topics' ? 'tab active' : 'tab'}
                  onClick={() => setTab('topics')}
                >
                  📘 Topics <small>Basic → Advanced</small>
                </button>
                <button
                  role="tab"
                  aria-selected={tab === 'interview'}
                  className={tab === 'interview' ? 'tab active' : 'tab'}
                  onClick={() => setTab('interview')}
                >
                  🎯 Interview Q&amp;A <small>{questionCount} questions</small>
                </button>
              </div>

              {/* TAB 1: TOPICS */}
              {tab === 'topics' && (
                <div className="tab-panel">
                  <p className="hint">Tick a topic when you can explain it in your own words.</p>
                  {levels.map(level => (
                    <div key={level.key} className={'level-block ' + level.key}>
                      <h2>
                        {level.badge} {level.label}
                      </h2>
                      <ol className="topic-list">
                        {skill.topics[level.key].map(([title, text], i) => {
                          const key = skill.id + ':' + level.key + ':' + i
                          const isLearned = learned.includes(key)
                          return (
                            <li key={key} className={isLearned ? 'topic learned' : 'topic'}>
                              <label>
                                <input type="checkbox" checked={isLearned} onChange={() => toggleLearned(key)} />
                                <span>
                                  <strong>{title}</strong>
                                  <span className="topic-text">{text}</span>
                                </span>
                              </label>
                            </li>
                          )
                        })}
                      </ol>
                    </div>
                  ))}
                  <button className="switch-btn" onClick={() => setTab('interview')}>
                    Practise {skill.name} interview questions →
                  </button>
                </div>
              )}

              {/* TAB 2: INTERVIEW */}
              {tab === 'interview' && (
                <div className="tab-panel">
                  <div className="qa-tools">
                    <div className="chips">
                      {[{ key: 'all', label: 'All' }, ...levels].map(level => (
                        <button
                          key={level.key}
                          className={levelFilter === level.key ? 'chip active' : 'chip'}
                          onClick={() => setLevelFilter(level.key)}
                        >
                          {level.badge ? level.badge + ' ' : ''}
                          {level.label}
                        </button>
                      ))}
                    </div>
                    <button className="show-all" onClick={() => setShowAll(!showAll)}>
                      {showAll ? 'Hide all answers' : 'Show all answers'}
                    </button>
                  </div>
                  <p className="hint">Try to answer aloud first, then tap the question to check the answer.</p>

                  {levels
                    .filter(level => levelFilter === 'all' || levelFilter === level.key)
                    .map(level => (
                      <div key={level.key} className={'level-block ' + level.key}>
                        <h2>
                          {level.badge} {level.label} Questions
                        </h2>
                        {skill.qa[level.key].map(([question, answer], i) => {
                          const key = skill.id + ':' + level.key + ':q' + i
                          const isOpen = showAll || openAnswers.includes(key)
                          return (
                            <div key={key} className={isOpen ? 'qa open' : 'qa'}>
                              <button className="question" onClick={() => toggleAnswer(key)} aria-expanded={isOpen}>
                                <span className="q-no">Q{i + 1}</span>
                                <span className="q-text">{question}</span>
                                <span className="q-arrow">{isOpen ? '−' : '+'}</span>
                              </button>
                              {isOpen && <p className="answer">{answer}</p>}
                            </div>
                          )
                        })}
                      </div>
                    ))}
                </div>
              )}

              {/* Previous / Next skill */}
              <div className="pager">
                {prevSkill ? (
                  <button onClick={() => openSkill(prevSkill.id, 'topics')}>
                    ❮ {prevSkill.icon} {prevSkill.name}
                  </button>
                ) : (
                  <span />
                )}
                {nextSkill && (
                  <button className="next" onClick={() => openSkill(nextSkill.id, 'topics')}>
                    Next: {nextSkill.icon} {nextSkill.name} ❯
                  </button>
                )}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
