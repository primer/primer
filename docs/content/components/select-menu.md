---
title: Select menu
status: New
source: 'https://github.com/primer/css/tree/main/src/select-menu'
bundle: select-menu
---

<Note>
  Please note that the `.select-menu` component is deprecated and `.SelectMenu` should be used instead. Check the <a href="/css/components/select-menu-deprecated">migration guide</a> to make sure your app is up to date.
</Note>

The `SelectMenu` component provides advanced support for navigation, filtering, and more. Any menu can make use of JavaScript-enabled live filtering, selected states, tabbed lists, and keyboard navigation with a bit of markup.

## Basic example

Use a `<details>` element to toggle the select menu. The `<summary>` element can be styled in many ways. In the example below it's a `.btn`.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <div class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem">Item 2</button>
        <button class="SelectMenu-item" role="menuitem">Item 3</button>
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 120px"><!-- min height for > sm --></div>
```

Add a `.SelectMenu-header` to house a clear title and a close button. Note that the close button is only shown on narrow screens (mobile).

## Right aligned

In case the select menu should be aligned to the right, use `SelectMenu right-0`.

```html live
<div class="d-flex flex-justify-end position-relative">
  <details class="details-reset details-overlay" open>
    <summary class="btn" aria-haspopup="true">
      Choose an item
    </summary>
    <div class="SelectMenu right-0">
      <div class="SelectMenu-modal">
        <div class="SelectMenu-list">
          <button class="SelectMenu-item" role="menuitem">Item 1</button>
          <button class="SelectMenu-item" role="menuitem">Item 2</button>
          <button class="SelectMenu-item" role="menuitem">Item 3</button>
        </div>
      </div>
    </div>
  </details>
</div>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 180px"><!-- min height for > sm --></div>
```

## Selected state

If the `SelectMenu` should show a check icon for selected items, use the `SelectMenu-icon SelectMenu-icon--check` classes. It will make the check icon show when `aria-checked="true"` is set.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <div class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitemcheckbox" aria-checked="true">
          <!-- <%= octicon "check", class: "SelectMenu-icon SelectMenu-icon--check" %> -->
          <svg class="SelectMenu-icon SelectMenu-icon--check octicon octicon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22C13.9204 4.36062 13.9993 4.55125 13.9993 4.75C13.9993 4.94875 13.9204 5.13937 13.78 5.28L6.53 12.53C6.38937 12.6704 6.19875 12.7493 6 12.7493C5.80125 12.7493 5.61062 12.6704 5.47 12.53L2.22 9.28C2.08752 9.13782 2.0154 8.94978 2.01882 8.75547C2.02225 8.56117 2.10096 8.37579 2.23838 8.23837C2.37579 8.10096 2.56118 8.02225 2.75548 8.01882C2.94978 8.01539 3.13782 8.08752 3.28 8.22L6 10.94L12.72 4.22C12.8606 4.07955 13.0512 4.00066 13.25 4.00066C13.4487 4.00066 13.6394 4.07955 13.78 4.22Z"></path></svg>
          Selected state
        </button>
        <button class="SelectMenu-item" role="menuitemcheckbox">
          <!-- <%= octicon "check", class: "SelectMenu-icon SelectMenu-icon--check" %> -->
          <svg class="SelectMenu-icon SelectMenu-icon--check octicon octicon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22C13.9204 4.36062 13.9993 4.55125 13.9993 4.75C13.9993 4.94875 13.9204 5.13937 13.78 5.28L6.53 12.53C6.38937 12.6704 6.19875 12.7493 6 12.7493C5.80125 12.7493 5.61062 12.6704 5.47 12.53L2.22 9.28C2.08752 9.13782 2.0154 8.94978 2.01882 8.75547C2.02225 8.56117 2.10096 8.37579 2.23838 8.23837C2.37579 8.10096 2.56118 8.02225 2.75548 8.01882C2.94978 8.01539 3.13782 8.08752 3.28 8.22L6 10.94L12.72 4.22C12.8606 4.07955 13.0512 4.00066 13.25 4.00066C13.4487 4.00066 13.6394 4.07955 13.78 4.22Z"></path></svg>
          Default state
        </button>
        <button class="SelectMenu-item" role="menuitemcheckbox" aria-checked="true">
          <!-- <%= octicon "check", class: "SelectMenu-icon SelectMenu-icon--check" %> -->
          <svg class="SelectMenu-icon SelectMenu-icon--check octicon octicon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22C13.9204 4.36062 13.9993 4.55125 13.9993 4.75C13.9993 4.94875 13.9204 5.13937 13.78 5.28L6.53 12.53C6.38937 12.6704 6.19875 12.7493 6 12.7493C5.80125 12.7493 5.61062 12.6704 5.47 12.53L2.22 9.28C2.08752 9.13782 2.0154 8.94978 2.01882 8.75547C2.02225 8.56117 2.10096 8.37579 2.23838 8.23837C2.37579 8.10096 2.56118 8.02225 2.75548 8.01882C2.94978 8.01539 3.13782 8.08752 3.28 8.22L6 10.94L12.72 4.22C12.8606 4.07955 13.0512 4.00066 13.25 4.00066C13.4487 4.00066 13.6394 4.07955 13.78 4.22Z"></path></svg>
          Selected state
        </button>
        <button class="SelectMenu-item" role="menuitemcheckbox">
          <!-- <%= octicon "check", class: "SelectMenu-icon SelectMenu-icon--check" %> -->
          <svg class="SelectMenu-icon SelectMenu-icon--check octicon octicon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22C13.9204 4.36062 13.9993 4.55125 13.9993 4.75C13.9993 4.94875 13.9204 5.13937 13.78 5.28L6.53 12.53C6.38937 12.6704 6.19875 12.7493 6 12.7493C5.80125 12.7493 5.61062 12.6704 5.47 12.53L2.22 9.28C2.08752 9.13782 2.0154 8.94978 2.01882 8.75547C2.02225 8.56117 2.10096 8.37579 2.23838 8.23837C2.37579 8.10096 2.56118 8.02225 2.75548 8.01882C2.94978 8.01539 3.13782 8.08752 3.28 8.22L6 10.94L12.72 4.22C12.8606 4.07955 13.0512 4.00066 13.25 4.00066C13.4487 4.00066 13.6394 4.07955 13.78 4.22Z"></path></svg>
          Default state
        </button>
        <button class="SelectMenu-item" role="menuitemcheckbox">
          <!-- <%= octicon "check", class: "SelectMenu-icon SelectMenu-icon--check" %> -->
          <svg class="SelectMenu-icon SelectMenu-icon--check octicon octicon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22C13.9204 4.36062 13.9993 4.55125 13.9993 4.75C13.9993 4.94875 13.9204 5.13937 13.78 5.28L6.53 12.53C6.38937 12.6704 6.19875 12.7493 6 12.7493C5.80125 12.7493 5.61062 12.6704 5.47 12.53L2.22 9.28C2.08752 9.13782 2.0154 8.94978 2.01882 8.75547C2.02225 8.56117 2.10096 8.37579 2.23838 8.23837C2.37579 8.10096 2.56118 8.02225 2.75548 8.01882C2.94978 8.01539 3.13782 8.08752 3.28 8.22L6 10.94L12.72 4.22C12.8606 4.07955 13.0512 4.00066 13.25 4.00066C13.4487 4.00066 13.6394 4.07955 13.78 4.22Z"></path></svg>
          Default state
        </button>
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 200px"><!-- min height for > sm --></div>
```

## Borderless

Use the `.SelectMenu-list--borderless` modifier to remove the borders between list items. Note: It's better to keep the borders if a list contains items with multiple lines of text. It will make it easier to see where the items start and end.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <div class="SelectMenu-list SelectMenu-list--borderless">
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem">Item 2</button>
        <button class="SelectMenu-item" role="menuitem">Item 3</button>
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 120px"><!-- min height for > sm --></div>
```

## Header

Add a `.SelectMenu-header` at the top to house a clear title and a close button.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <!-- <%= octicon "x" %> -->
          <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
        </button>
      </header>
      <div class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem">Item 2</button>
        <button class="SelectMenu-item" role="menuitem">Item 3</button>
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 180px"><!-- min height for > sm --></div>
```

## List items

The list of items is arguably the most important subcomponent within the menu. Build them out of anchors, buttons, or just about any [interactive content](http://w3c.github.io/html/dom.html#interactive-content). List items are also customizable with options for avatars, additional icons, and multiple lines of text. Use utility classes in case more custom styling is needed.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <!-- <%= octicon "x" %> -->
          <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
        </button>
      </header>
      <div class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">
          Text only
        </button>
        <button class="SelectMenu-item" role="menuitem">
          <!-- <%= octicon "pin", class: "SelectMenu-icon" %> -->
          <svg class="SelectMenu-icon octicon octicon-pin" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 1.2V2l.5 1L6 6H2.2c-.44 0-.67.53-.34.86L5 10l-4 5 5-4 3.14 3.14a.5.5 0 00.86-.34V10l3-4.5 1 .5h.8c.44 0 .67-.53.34-.86L10.86.86a.5.5 0 00-.86.34z"></path></svg>
          With an icon
        </button>
        <button class="SelectMenu-item" role="menuitem">
          <img
            class="avatar avatar-small mr-2"
            src="https://avatars.githubusercontent.com/hubot?s=40"
            alt="hubot"
            height="20"
            width="20"
          />
          With an avatar
        </button>
        <button class="SelectMenu-item flex-justify-between" role="menuitem">
          With a status icon
          <!-- <%= octicon "primitive-dot", class: "color-green-5 ml-2" %> -->
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            class="octicon octicon-primitive-dot color-green-5 ml-2"
            aria-hidden="true"
          >
            <path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
          </svg>
        </button>
        <button class="SelectMenu-item d-block" role="menuitem">With a <span class="Label">label</span></button>
        <button class="SelectMenu-item" role="menuitem">
          With a counter <span class="Counter ml-1">16</span>
        </button>
        <button class="SelectMenu-item d-block" role="menuitem">
          <h5>With a heading</h5>
          <span>and some longer description</span>
        </button>
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 320px"><!-- min height for > sm --></div>
```

## Divider

The select menu's list can be divided into multiple parts by adding a `.SelectMenu-divider`. It can be a `<div>` with text/content. Or just an `<hr>` to add a visual separator.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <!-- <%= octicon "x" %> -->
          <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
        </button>
      </header>
      <div class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem">Item 2</button>
        <div class="SelectMenu-divider">More options</div>
        <button class="SelectMenu-item" role="menuitem">Item 3</button>
        <button class="SelectMenu-item" role="menuitem">Item 4</button>
        <hr class="SelectMenu-divider">
        <button class="SelectMenu-item" role="menuitem">Item 5</button>
        <button class="SelectMenu-item" role="menuitem">Item 6</button>
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 300px"><!-- min height for > sm --></div>
```

Dividers are also supported when using the `.SelectMenu-list--borderless` modifier.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <!-- <%= octicon "x" %> -->
          <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
        </button>
      </header>
      <div class="SelectMenu-list SelectMenu-list--borderless">
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem">Item 2</button>
        <div class="SelectMenu-divider">More options</div>
        <button class="SelectMenu-item" role="menuitem">Item 3</button>
        <button class="SelectMenu-item" role="menuitem">Item 4</button>
        <hr class="SelectMenu-divider">
        <button class="SelectMenu-item" role="menuitem">Item 5</button>
        <button class="SelectMenu-item" role="menuitem">Item 6</button>
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 300px"><!-- min height for > sm --></div>
```

## Footer

Use a `.SelectMenu-footer` at the bottom for additional information. As a side effect it can greatly improve the scrolling performance because the list doesn't need to be repainted due to the rounded corners.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <!-- <%= octicon "x" %> -->
          <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
        </button>
      </header>
      <div class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem">Item 2</button>
        <button class="SelectMenu-item" role="menuitem">Item 3</button>
        <button class="SelectMenu-item" role="menuitem">Item 4</button>
        <button class="SelectMenu-item" role="menuitem">Item 5</button>
      </div>
      <footer class="SelectMenu-footer">Footer</footer>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 260px"><!-- min height for > sm --></div>
```

## Filter

If the list is expected to get long, consider adding a `.SelectMenu-filter` input. Be sure to also include the `.SelectMenu--hasFilter` modifier class. On mobile devices it will add a fixed height and anchor the select menu to the top of the screen. This makes sure the filter input stays at the same position while typing.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu SelectMenu--hasFilter">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <!-- <%= octicon "x" %> -->
          <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
        </button>
      </header>
      <form class="SelectMenu-filter">
        <input class="SelectMenu-input form-control" type="text" placeholder="Filter" aria-label="Filter">
      </form>
      <div class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem">Item 2</button>
        <button class="SelectMenu-item" role="menuitem">Item 3</button>
        <button class="SelectMenu-item" role="menuitem">Item 4</button>
        <button class="SelectMenu-item" role="menuitem">Item 5</button>
        <button class="SelectMenu-item" role="menuitem">Item 6</button>
        <button class="SelectMenu-item" role="menuitem">Item 7</button>
        <button class="SelectMenu-item" role="menuitem">Item 8</button>
        <button class="SelectMenu-item" role="menuitem">Item 9</button>
        <button class="SelectMenu-item" role="menuitem">Item 10</button>
        <button class="SelectMenu-item" role="menuitem">Item 11</button>
        <button class="SelectMenu-item" role="menuitem">Item 12</button>
        <button class="SelectMenu-item" role="menuitem">Item 13</button>
        <button class="SelectMenu-item" role="menuitem">Item 14</button>
        <button class="SelectMenu-item" role="menuitem">Item 15</button>
        <button class="SelectMenu-item" role="menuitem">Item 16</button>
        <button class="SelectMenu-item" role="menuitem">Item 17</button>
        <button class="SelectMenu-item" role="menuitem">Item 18</button>
        <button class="SelectMenu-item" role="menuitem">Item 19</button>
        <button class="SelectMenu-item" role="menuitem">Item 20</button>
        <button class="SelectMenu-item" role="menuitem">Item 21</button>
        <button class="SelectMenu-item" role="menuitem">Item 22</button>
        <button class="SelectMenu-item" role="menuitem">Item 23</button>
        <button class="SelectMenu-item" role="menuitem">Item 24</button>
        <button class="SelectMenu-item" role="menuitem">Item 25</button>
      </div>
      <footer class="SelectMenu-footer">Showing 25 of 25</footer>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 500px"> <!-- min height for > sm --> </div>
```

## Tabs

Sometimes you need two or more lists of items in your select menu, e.g. branches and tags. Select menu lists can be tabbed with the addition of `.SelectMenu-tabs` above the menu.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu SelectMenu--hasFilter">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <!-- <%= octicon "x" %> -->
          <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
        </button>
      </header>
      <form class="SelectMenu-filter">
        <input class="SelectMenu-input form-control" type="text" placeholder="Filter" aria-label="Filter" />
      </form>
      <nav class="SelectMenu-tabs">
        <button class="SelectMenu-tab" aria-selected="true">Branches</button>
        <button class="SelectMenu-tab">Tags</button>
      </nav>
      <div class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Branch 1</button>
        <button class="SelectMenu-item" role="menuitem">Branch 2</button>
        <button class="SelectMenu-item" role="menuitem">Branch 3</button>
        <button class="SelectMenu-item" role="menuitem">Branch 4</button>
        <button class="SelectMenu-item" role="menuitem">Branch 5</button>
      </div>
      <div class="SelectMenu-list" hidden>
        <button class="SelectMenu-item" role="menuitem">Tag 1</button>
        <button class="SelectMenu-item" role="menuitem">Tag 2</button>
        <button class="SelectMenu-item" role="menuitem">Tag 3</button>
      </div>
      <footer class="SelectMenu-footer">Showing 5 of 5</footer>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 380px"><!-- min height for > sm --></div>
```

## Message

A `SelectMenu-message` can be used to show different kind of messages to a user. Use utility classes to further style the message.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <!-- <%= octicon "x" %> -->
          <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
        </button>
      </header>
      <div class="SelectMenu-list">
        <div class="SelectMenu-message color-bg-danger color-text-danger">Message goes here</div>
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem">Item 2</button>
        <button class="SelectMenu-item" role="menuitem">Item 3</button>
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 200px"><!-- min height for > sm --></div>
```

## Loading

When fetching large lists, consider showing a `.SelectMenu-loading` animation.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <!-- <%= octicon "x" %> -->
          <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
        </button>
      </header>
      <div class="SelectMenu-list">
        <div class="SelectMenu-loading">
          <!-- <%= octicon "octoface", class: "anim-pulse", width: 32 %> -->
          <svg
            width="32 "
            height="32"
            viewBox="0 0 16 16"
            class="octicon octicon-octoface anim-pulse"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
            />
          </svg>
        </div>
      </div>
      <footer class="SelectMenu-footer">Loading...</footer>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 220px"><!-- min height for > sm --></div>
```

## Disabled

To disable a list item, use the `disabled` attribute for `<button>`s. For `<a>`s replace the `href` with an `aria-disabled="true"` attribute. Note: If not obvious, try to communicate to the user why an item is disabled.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <div class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem" disabled>Item 2 (disabled)</button>
        <a class="SelectMenu-item" role="menuitem" href="#">Item 3</a>
        <a class="SelectMenu-item" role="menuitem" aria-disabled="true">Item 4 (disabled)</a>
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 160px"><!-- min height for > sm --></div>
```

## Blankslate

Sometimes a select menu needs to communicate a "blank slate" where there's no content in the menu's list. Usually these include a clear call to action to add said content to the list. Swap out the contents of a `.SelectMenu-list` with a `.SelectMenu-blankslate` and customize its contents as needed.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <!-- <%= octicon "x" %> -->
          <svg class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"></path></svg>
        </button>
      </header>
      <div class="SelectMenu-list">
        <div class="SelectMenu-blankslate">
          <!-- <%= octicon "repo", class: "color-gray-3", width: 24 %> -->
          <svg width="24 " height="32" viewBox="0 0 12 16" class="octicon octicon-repo color-gray-3" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            />
          </svg>
          <h4 class="my-2">No repositories</h4>
          <p class="mb-3 text-gray">We didn’t find any matching repositories that you can commit to.</p>
          <button type="button" class="btn btn-sm btn-primary">Create a repository</button>
        </div>
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 260px"><!-- min height for > sm --></div>
```

## github.com usage

When adding the `.SelectMenu` component on github.com, use the [`<details-menu>`](https://github.com/github/details-menu-element) element. It will magically make the `.SelectMenu` work. Here a basic example:

```erb
<details class="details-reset details-overlay" id="my-select-menu">
  <summary class="btn">
    <span>Choose</span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="SelectMenu" role="menu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">My Select Menu</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="my-select-menu">
          <%= octicon("x", "aria-label": "Close menu") %>
        </button>
      </header>
      <div class="SelectMenu-list">
        <a class="SelectMenu-item" href="" role="menuitem">Item 1</a>
        <a class="SelectMenu-item" href="" role="menuitem">Item 2</a>
        <a class="SelectMenu-item" href="" role="menuitem">Item 3</a>
      </div>
    </div>
  </details-menu>
</details>
```

If loading content should be deferred, use the [`<include-fragment>`](https://github.com/github/details-menu-element) element:

```erb
<details-menu class="SelectMenu" src="/my-menu" preload>
  <div class="SelectMenu-modal">
    <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
      <%= octicon("octoface", class: "anim-pulse", :height => 32) %>
    </include-fragment>
  </div>
</details-menu>
```

It will add a pulsing "octoface" icon while the content is loading.
