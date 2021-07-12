---
title: Navigation
path: components/navigation
status: Stable
source: 'https://github.com/primer/css/tree/main/src/navigation'
bundle: navigation
---

Primer CSS comes with several navigation components. Some were designed with singular purposes, while others were design to be more flexible and appear quite frequently.

## Menu

The menu is a vertical list of navigational links. **A menu's width and placement must be set by you.** If you like, just use our grid columns as a parent. Otherwise, apply a custom `width`.

```html live title="Menu"
<nav class="menu" aria-label="Person settings">
  <a class="menu-item" href="#url" aria-current="page">Account</a>
  <a class="menu-item" href="#url">Profile</a>
  <a class="menu-item" href="#url">Emails</a>
  <a class="menu-item" href="#url">Notifications</a>
</nav>
```

There are a few subcomponents and add-ons that work well with the menu, including avatars, counters, and Octicons.

```html live
<nav class="menu" aria-label="Person settings">
  <a class="menu-item" href="#url" aria-current="page">
    <!-- <%= octicon "tools" %> -->
    <svg width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-tools" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
      />
    </svg>
    Account
  </a>
  <a class="menu-item" href="#url">
    <!-- <%= octicon "person" %> -->
    <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-person" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
      />
    </svg>
    Profile
  </a>
  <a class="menu-item" href="#url">
    <!-- <%= octicon "mail" %>-->
    <svg version="1.1" width="14" height="16" viewBox="0 0 14 16" class="octicon octicon-mail" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
      />
    </svg>
    Emails
  </a>
  <a class="menu-item" href="#url">
    <!-- <%= octicon "radio-tower" %> -->
    <svg
      version="1.1"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      class="octicon octicon-radio-tower"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M4.79 6.11c.25-.25.25-.67 0-.92-.32-.33-.48-.76-.48-1.19 0-.43.16-.86.48-1.19.25-.26.25-.67 0-.92a.613.613 0 0 0-.45-.19c-.16 0-.33.06-.45.19-.57.58-.85 1.35-.85 2.11 0 .76.29 1.53.85 2.11.25.25.66.25.9 0zM2.33.52a.651.651 0 0 0-.92 0C.48 1.48.01 2.74.01 3.99c0 1.26.47 2.52 1.4 3.48.25.26.66.26.91 0s.25-.68 0-.94c-.68-.7-1.02-1.62-1.02-2.54 0-.92.34-1.84 1.02-2.54a.66.66 0 0 0 .01-.93zm5.69 5.1A1.62 1.62 0 1 0 6.4 4c-.01.89.72 1.62 1.62 1.62zM14.59.53a.628.628 0 0 0-.91 0c-.25.26-.25.68 0 .94.68.7 1.02 1.62 1.02 2.54 0 .92-.34 1.83-1.02 2.54-.25.26-.25.68 0 .94a.651.651 0 0 0 .92 0c.93-.96 1.4-2.22 1.4-3.48A5.048 5.048 0 0 0 14.59.53zM8.02 6.92c-.41 0-.83-.1-1.2-.3l-3.15 8.37h1.49l.86-1h4l.84 1h1.49L9.21 6.62c-.38.2-.78.3-1.19.3zm-.01.48L9.02 11h-2l.99-3.6zm-1.99 5.59l1-1h2l1 1h-4zm5.19-11.1c-.25.25-.25.67 0 .92.32.33.48.76.48 1.19 0 .43-.16.86-.48 1.19-.25.26-.25.67 0 .92a.63.63 0 0 0 .9 0c.57-.58.85-1.35.85-2.11 0-.76-.28-1.53-.85-2.11a.634.634 0 0 0-.9 0z"
      />
    </svg>
    <span class="Counter">3</span>
    Notifications
  </a>
</nav>
```

You can also add optional headings to a menu. Feel free to use nearly any semantic element with the `.menu-heading` class, including inline elements, headings, and more.

```html live title="Menu with heading"
<nav class="menu" aria-labelledby="menu-heading">
  <span class="menu-heading" id="menu-heading">Menu heading</span>
  <a class="menu-item" href="#url" aria-current="page">Account</a>
  <a class="menu-item" href="#url">Profile</a>
  <a class="menu-item" href="#url">Emails</a>
  <a class="menu-item" href="#url">Notifications</a>
</nav>
```

## Underline Nav

Use `.UnderlineNav` to style navigation with a minimal underlined selected state, typically used for navigation placed at the top of the page. This component comes with variations to accommodate icons, containers and other content.

To add a selected state to an item, use:

- `role="tab"` and `aria-selected="true"` if it's a button
- `aria-current="page"` if it's a link

```html live title="UnderlineNav"
<nav class="UnderlineNav">
  <div class="UnderlineNav-body" role="tablist">
    <button class="UnderlineNav-item" role="tab" type="button" aria-selected="true">Item 1</button>
    <button class="UnderlineNav-item" role="tab" type="button">Item 2</button>
    <button class="UnderlineNav-item" role="tab" type="button">Item 3</button>
    <button class="UnderlineNav-item" role="tab" type="button">Item 4</button>
  </div>
</nav>
```

Use `.UnderlineNav-actions` to place another element, such as a button, to the opposite side of the navigation items.

```html live title="UnderlineNav-actions"
<nav class="UnderlineNav" aria-label="Foo bar">
  <div class="UnderlineNav-body">
    <a class="UnderlineNav-item" href="#url" aria-current="page">Item 1</a>
    <a class="UnderlineNav-item" href="#url">Item 2</a>
    <a class="UnderlineNav-item" href="#url">Item 3</a>
    <a class="UnderlineNav-item" href="#url">Item 4</a>
  </div>
  <div class="UnderlineNav-actions">
    <a class="btn btn-sm">Button</a>
  </div>
</nav>
```

Use `.UnderlineNav--right` to right align the navigation.

```html live title="UnderlineNav--right"
<nav class="UnderlineNav UnderlineNav--right">
  <div class="UnderlineNav-body">
    <a class="UnderlineNav-item" href="#url" aria-current="page">Item 1</a>
    <a class="UnderlineNav-item" href="#url">Item 2</a>
    <a class="UnderlineNav-item" href="#url">Item 3</a>
    <a class="UnderlineNav-item" href="#url">Item 4</a>
  </div>
</nav>
```

`.UnderlineNav--right` also works with when used with `.UnderlineNav-actions`.

```html live title="UnderlineNav--right with actions"
<nav class="UnderlineNav UnderlineNav--right" aria-label="Foo bar">
  <div class="UnderlineNav-actions">
    <a class="btn btn-sm">Button</a>
  </div>
  <div class="UnderlineNav-body">
    <a class="UnderlineNav-item" href="#url" aria-current="page">Item 1</a>
    <a class="UnderlineNav-item" href="#url">Item 2</a>
    <a class="UnderlineNav-item" href="#url">Item 3</a>
    <a class="UnderlineNav-item" href="#url">Item 4</a>
  </div>
</nav>
```

<!-- Update wording here -->

`.Counters` and `.octicons` can be used with navigation items. Use `.UnderlineNav-octicon` to add color and hover styles.

```html live
<nav class="UnderlineNav" aria-label="Foo bar">
  <div class="UnderlineNav-body">
    <a class="UnderlineNav-item" href="#url" aria-current="page">
      <!-- <%= octicon "tools", class: "UnderlineNav-octicon" %> -->
      <svg class="UnderlineNav-octicon octicon octicon-tools" version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z" /></svg>
      <span>Item 1</span>
    </a>
    <a class="UnderlineNav-item" href="#url">
      <!-- <%= octicon "tools", class: "UnderlineNav-octicon" %> -->
      <svg class="UnderlineNav-octicon octicon octicon-tools" version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z" /></svg>
      <span>Item 2</span>
      <span class="Counter">10</span>
    </a>
    <a class="UnderlineNav-item" href="#url">
      <!-- <%= octicon "tools", class: "UnderlineNav-octicon" %> -->
      <svg class="UnderlineNav-octicon octicon octicon-tools" version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z" /></svg>
      <span>Item 3</span>
    </a>
    <a class="UnderlineNav-item" href="#url">
      <!-- <%= octicon "tools", class: "UnderlineNav-octicon" %> -->
      <svg class="UnderlineNav-octicon octicon octicon-tools" version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z" /></svg>
      <span>Item 4</span>
    </a>
  </div>
</nav>
```

Use `.UnderlineNav--full` in combination with container styles and `.UnderlineNav-container` to make navigation fill the width of the container.

```html live title="UnderlineNav--full"
<nav class="UnderlineNav UnderlineNav--full" aria-label="Foo bar">
  <div class="container-lg UnderlineNav-container">
    <div class="UnderlineNav-body">
      <a class="UnderlineNav-item" href="#url" aria-current="page">Item 1</a>
      <a class="UnderlineNav-item" href="#url">Item 2<span class="Counter">10</span></a>
      <a class="UnderlineNav-item" href="#url">Item 3</a>
      <a class="UnderlineNav-item" href="#url">Item 4</a>
    </div>
    <div class="UnderlineNav-actions">
      <a class="btn btn-sm">Button</a>
    </div>
  </div>
</nav>
```

## Side Nav

The Side Nav is a vertical list of navigational links, typically used on the left side of a page. For maximum flexibility, **Side Nav elements have no default width or positioning**. We suggest using [column grid](../objects/grid) classes or an inline `width` style for sizing, and [flexbox utilities](../utilities/flexbox) for positioning alongside content.

- You can use a **border** if the parent element doesn't have it already.
- Add `aria-current="page"` to show a link as selected. Selected button elements in tab-like UIs should instead have `aria-selected="true"`.

```html live
<nav class="SideNav border" style="max-width: 360px">
  <a class="SideNav-item" href="#url">Account</a>
  <a class="SideNav-item" href="#url" aria-current="page">Profile</a>
  <a class="SideNav-item" href="#url">Emails</a>
  <a class="SideNav-item" href="#url">Notifications</a>
</nav>
```

Different kind of content can be added inside a Side Nav item. Use utility classes to further style them if needed.

```html live
<nav class="SideNav border" style="max-width: 360px">
  <a class="SideNav-item" href="#url">
    Text only
  </a>
  <a class="SideNav-item" href="#url">
    <img
      class="avatar avatar-small mr-2"
      src="https://avatars.githubusercontent.com/hubot?s=40"
      alt="hubot"
      height="20"
      width="20"
    />
    With an avatar
  </a>
  <a class="SideNav-item" href="#url">
    <!-- <%= octicon "octoface", class: "SideNav-icon" %> -->
    <svg class="SideNav-icon octicon octicon-octoface" version="1.1" width="16" height="16" viewBox="0 0 16 16"  aria-hidden="true"> <path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z" /> </svg>
    With an icon
  </a>
  <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
    With a status icon
    <!-- <%= octicon "primitive-dot", class: "color-green-5 ml-2 float-right" %> -->
    <svg
      version="1.1"
      width="8"
      height="16"
      viewBox="0 0 8 16"
      class="octicon octicon-primitive-dot color-green-5 ml-2 float-right"
      aria-hidden="true"
    >
      <path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
    </svg>
  </a>
  <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
    With a label <span class="Label">label</span>
  </a>
  <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
    With a counter <span class="Counter ml-1">16</span>
  </a>
  <a class="SideNav-item" href="#url">
    <h5>With a heading</h5>
    <span>and some longer description</span>
  </a>
</nav>
```

The `.SideNav-subItem` is an alternative, more lightweight version without borders and more condensed. It can be used stand-alone.

```html live
<aside class="color-bg-secondary border p-3" style="max-width: 360px">
  <h5 class="text-gray mb-2 pb-1 border-bottom">Menu</h5>
  <nav class="SideNav">
    <a class="SideNav-subItem" href="#url">Account</a>
    <a class="SideNav-subItem" href="#url" aria-current="page">Profile</a>
    <a class="SideNav-subItem" href="#url">Emails</a>
    <a class="SideNav-subItem" href="#url">Notifications</a>
  </nav>
</aside>
```

Or also appear nested, as a sub navigation. Use margin/padding utility classes to add indentation.

```html live
<nav class="SideNav border" style="max-width: 360px">
  <a class="SideNav-item" href="#url">
    <!-- <%= octicon "person", class: "SideNav-icon" %> -->
    <svg class="octicon octicon-person SideNav-icon" width="12" height="16" viewBox="0 0 12 16" aria-hidden="true"> <path fill-rule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z" /> </svg>
    <span>Account</span>
  </a>
  <a class="SideNav-item" href="#url" aria-current="page">
    <!-- <%= octicon "octoface", class: "SideNav-icon" %> -->
    <svg class="octicon octicon-octoface SideNav-icon" width="16" height="16" viewBox="0 0 16 16"  aria-hidden="true"> <path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z" /> </svg>
    <span>Profile</span>
  </a>
  <nav class="SideNav color-bg-primary border-top py-3" style="padding-left: 44px">
    <a class="SideNav-subItem" href="#url" aria-current="page">Sub item 1</a>
    <a class="SideNav-subItem" href="#url">Sub item 2</a>
    <a class="SideNav-subItem" href="#url">Sub item 3</a>
  </nav>
  <a class="SideNav-item" href="#url">
    <!-- <%= octicon "mail", class: "SideNav-icon" %> -->
    <svg class="octicon octicon-mail SideNav-icon" width="14" height="16" viewBox="0 0 14 16"  aria-hidden="true"> <path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z" /> </svg>
    <span>Emails</span>
  </a>
</nav>
```

## Tabnav

When you need to toggle between different views, consider using a tabnav. It'll give you a left-aligned horizontal row of... tabs!

```html live title="tabnav"
<div class="tabnav">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a class="tabnav-tab" href="#url" aria-current="page">Foo tab</a>
    <a class="tabnav-tab" href="#url">Bar tab</a>
  </nav>
</div>
```

Tabs can also contain icons and counters.

```html live
<div class="tabnav">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a class="tabnav-tab" href="#url" aria-current="page">
      <!-- <%= octicon "comment-discussion" %> -->
      <svg class="octicon octicon-comment-discussion" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.75C1.5 2.6837 1.52634 2.62011 1.57322 2.57322C1.62011 2.52634 1.6837 2.5 1.75 2.5H10.25C10.3163 2.5 10.3799 2.52634 10.4268 2.57322C10.4737 2.62011 10.5 2.6837 10.5 2.75V8.25C10.5 8.3163 10.4737 8.37989 10.4268 8.42678C10.3799 8.47366 10.3163 8.5 10.25 8.5H6.75C6.55115 8.50017 6.36052 8.57931 6.22 8.72L3.5 11.44V9.25C3.5 9.05109 3.42098 8.86032 3.28033 8.71967C3.13968 8.57902 2.94891 8.5 2.75 8.5H1.75C1.6837 8.5 1.62011 8.47366 1.57322 8.42678C1.52634 8.37989 1.5 8.3163 1.5 8.25V2.75ZM1.75 1C1.28587 1 0.840752 1.18437 0.512563 1.51256C0.184374 1.84075 0 2.28587 0 2.75L0 8.25C0 9.216 0.784 10 1.75 10H2V11.543C2.0001 11.8311 2.08561 12.1127 2.24571 12.3522C2.40581 12.5917 2.63333 12.7784 2.8995 12.8886C3.16567 12.9988 3.45854 13.0277 3.74111 12.9715C4.02367 12.9153 4.28324 12.7767 4.487 12.573L7.061 10H10.25C10.7141 10 11.1592 9.81563 11.4874 9.48744C11.8156 9.15925 12 8.71413 12 8.25V2.75C12 2.28587 11.8156 1.84075 11.4874 1.51256C11.1592 1.18437 10.7141 1 10.25 1H1.75ZM14.5 4.75C14.5 4.6837 14.4737 4.62011 14.4268 4.57322C14.3799 4.52634 14.3163 4.5 14.25 4.5H13.75C13.5511 4.5 13.3603 4.42098 13.2197 4.28033C13.079 4.13968 13 3.94891 13 3.75C13 3.55109 13.079 3.36032 13.2197 3.21967C13.3603 3.07902 13.5511 3 13.75 3H14.25C15.216 3 16 3.784 16 4.75V10.25C16 10.7141 15.8156 11.1592 15.4874 11.4874C15.1592 11.8156 14.7141 12 14.25 12H14V13.543C13.9999 13.8311 13.9144 14.1127 13.7543 14.3522C13.5942 14.5917 13.3667 14.7784 13.1005 14.8886C12.8343 14.9988 12.5415 15.0277 12.2589 14.9715C11.9763 14.9153 11.7168 14.7767 11.513 14.573L9.22 12.28C9.14631 12.2113 9.08721 12.1285 9.04622 12.0365C9.00523 11.9445 8.98318 11.8452 8.98141 11.7445C8.97963 11.6438 8.99816 11.5438 9.03588 11.4504C9.0736 11.357 9.12974 11.2722 9.20096 11.201C9.27218 11.1297 9.35701 11.0736 9.4504 11.0359C9.54379 10.9982 9.64382 10.9796 9.74452 10.9814C9.84523 10.9832 9.94454 11.0052 10.0365 11.0462C10.1285 11.0872 10.2113 11.1463 10.28 11.22L12.5 13.44V11.25C12.5 11.0511 12.579 10.8603 12.7197 10.7197C12.8603 10.579 13.0511 10.5 13.25 10.5H14.25C14.3163 10.5 14.3799 10.4737 14.4268 10.4268C14.4737 10.3799 14.5 10.3163 14.5 10.25V4.75Z"></path></svg>
      <span>Conversation</span>
      <span class="Counter">2</span>
    </a>

    <a class="tabnav-tab" href="#url">
      <!-- <%= octicon "git-commit" %> -->
      <svg class="octicon octicon-git-commit" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 7.75C10.5 8.41305 10.2366 9.04893 9.76777 9.51777C9.29893 9.98661 8.66304 10.25 8 10.25C7.33696 10.25 6.70107 9.98661 6.23223 9.51777C5.76339 9.04893 5.5 8.41305 5.5 7.75C5.5 7.08696 5.76339 6.45108 6.23223 5.98224C6.70107 5.5134 7.33696 5.25 8 5.25C8.66304 5.25 9.29893 5.5134 9.76777 5.98224C10.2366 6.45108 10.5 7.08696 10.5 7.75ZM11.93 8.5C11.7554 9.41441 11.2674 10.2393 10.5501 10.8327C9.83272 11.426 8.93093 11.7506 8 11.7506C7.06907 11.7506 6.16728 11.426 5.44994 10.8327C4.73259 10.2393 4.2446 9.41441 4.07 8.5H0.75C0.551088 8.5 0.360322 8.42099 0.21967 8.28033C0.0790176 8.13968 0 7.94892 0 7.75C0 7.55109 0.0790176 7.36033 0.21967 7.21967C0.360322 7.07902 0.551088 7 0.75 7H4.07C4.2446 6.0856 4.73259 5.26069 5.44994 4.66736C6.16728 4.07403 7.06907 3.7494 8 3.7494C8.93093 3.7494 9.83272 4.07403 10.5501 4.66736C11.2674 5.26069 11.7554 6.0856 11.93 7H15.25C15.4489 7 15.6397 7.07902 15.7803 7.21967C15.921 7.36033 16 7.55109 16 7.75C16 7.94892 15.921 8.13968 15.7803 8.28033C15.6397 8.42099 15.4489 8.5 15.25 8.5H11.93Z"></path></svg>
      <span>Commits</span>
      <span class="Counter">3</span>
    </a>

    <a class="tabnav-tab" href="#url">
     <!-- <%= octicon "checklist" %> -->
      <svg class="octicon octicon-checklist" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1.75C2.5 1.61193 2.61193 1.5 2.75 1.5H11.25C11.3881 1.5 11.5 1.61193 11.5 1.75V9.48645C11.5 9.90067 11.8358 10.2365 12.25 10.2365C12.6642 10.2365 13 9.90067 13 9.48645V1.75C13 0.783502 12.2165 0 11.25 0H2.75C1.7835 0 1 0.783502 1 1.75V13.25C1 14.2165 1.7835 15 2.75 15H5.92083C6.33504 15 6.67083 14.6642 6.67083 14.25C6.67083 13.8358 6.33504 13.5 5.92083 13.5H2.75C2.61193 13.5 2.5 13.3881 2.5 13.25V1.75ZM4.75 4C4.33579 4 4 4.33579 4 4.75C4 5.16421 4.33579 5.5 4.75 5.5H9.25C9.66421 5.5 10 5.16421 10 4.75C10 4.33579 9.66421 4 9.25 4H4.75ZM4 7.75C4 7.33579 4.33579 7 4.75 7H6.75C7.16421 7 7.5 7.33579 7.5 7.75C7.5 8.16421 7.16421 8.5 6.75 8.5H4.75C4.33579 8.5 4 8.16421 4 7.75ZM15.774 11.2866C16.0703 10.9972 16.076 10.5223 15.7866 10.226C15.4972 9.92965 15.0223 9.92402 14.726 10.2134L10.7003 14.1447L9.28127 12.7206C8.98889 12.4272 8.51402 12.4264 8.22061 12.7187C7.9272 13.0111 7.92636 13.486 8.21873 13.7794L10.1618 15.7294C10.4521 16.0207 10.9229 16.0239 11.2171 15.7366L15.774 11.2866Z"></path></svg>
      <span>Checks</span>
      <span class="Counter">27</span>
    </a>

    <a class="tabnav-tab" href="#url">
      <!-- <%= octicon "diff" %> -->
      <svg class="octicon octicon-diff" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 1.5C2.61193 1.5 2.5 1.61193 2.5 1.75V14.25C2.5 14.3881 2.61193 14.5 2.75 14.5H13.25C13.3881 14.5 13.5 14.3881 13.5 14.25V4.66421C13.5 4.59791 13.4737 4.53432 13.4268 4.48744L10.5126 1.57322C10.4657 1.52634 10.4021 1.5 10.3358 1.5H2.75ZM1 1.75C1 0.783502 1.7835 0 2.75 0H10.3358C10.7999 0 11.245 0.184374 11.5732 0.512563L14.4874 3.42678C14.8156 3.75497 15 4.20008 15 4.66421V14.25C15 15.2165 14.2165 16 13.25 16H2.75C1.7835 16 1 15.2165 1 14.25V1.75ZM8 3.25C8.41421 3.25 8.75 3.58579 8.75 4V5.5H10.25C10.6642 5.5 11 5.83579 11 6.25C11 6.66421 10.6642 7 10.25 7H8.75V8.5C8.75 8.91421 8.41421 9.25 8 9.25C7.58579 9.25 7.25 8.91421 7.25 8.5V7H5.75C5.33579 7 5 6.66421 5 6.25C5 5.83579 5.33579 5.5 5.75 5.5H7.25V4C7.25 3.58579 7.58579 3.25 8 3.25ZM5 11.25C5 10.8358 5.33579 10.5 5.75 10.5H10.25C10.6642 10.5 11 10.8358 11 11.25C11 11.6642 10.6642 12 10.25 12H5.75C5.33579 12 5 11.6642 5 11.25Z"></path></svg>
      <span>Files changed</span>
      <span class="Counter">6</span>
    </a>
  </nav>
</div>
```

Use `.float-right` to align additional elements in the `.tabnav`:

```html live title="tabnav with buttons"
<div class="tabnav">
  <a class="btn btn-sm float-right" href="#url" role="button">Button</a>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a class="tabnav-tab" href="#url" aria-current="page">Foo Tab</a>
    <a class="tabnav-tab" href="#url">Bar Tab</a>
  </nav>
</div>
```

Additional bits of text and links can be styled for optimal placement with `.tabnav-extra`:

```html live title="tabnav-extra"
<div class="tabnav">
  <div class="tabnav-extra float-right">Tabnav widget text here.</div>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a class="tabnav-tab" href="#url" aria-current="page">Foo Tab</a>
    <a class="tabnav-tab" href="#url">Bar Tab</a>
  </nav>
</div>
```

```html live title="tabnav with everything"
<div class="tabnav">
  <div class="float-right">
    <a class="tabnav-extra" href="#url">Tabnav extra link</a>
    <a class="tabnav-extra" href="#url">Tabnav extra link</a>
  </div>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a class="tabnav-tab" href="#url" aria-current="page">Foo Tab</a>
    <a class="tabnav-tab" href="#url">Bar Tab</a>
  </nav>
</div>
```

## Filter list

A vertical list of filters. Grey text on white background. Selecting a filter from the list will fill its background with blue and make the text white.

```html live title="filter-list"
<ul class="filter-list">
  <li>
    <a class="filter-item" href="#url" aria-current="page">
      First filter
      <span class="count">21</span>
    </a>
  </li>
  <li>
    <a class="filter-item" href="#url">
      Second filter
      <span class="count">3</span>
    </a>
  </li>
  <li>
    <a class="filter-item" href="#url">
      Third filter
    </a>
  </li>
</ul>
```

## Sub navigation

`.subnav` is navigation that is typically used when on a dashboard type interface with another set of navigation above it. This helps distinguish navigation hierarchy.

```html live title="subnav"
<nav class="subnav" aria-label="Respository">
  <a class="subnav-item" href="#url" aria-current="page">Item 1</a>
  <a class="subnav-item" href="#url">Item 2</a>
  <a class="subnav-item" href="#url">Item 3</a>
</nav>
```

You can have `subnav-search` in the subnav bar.

```html live
<div class="subnav">
  <nav class="subnav-links" aria-label="Repository">
    <a class="subnav-item" href="#url" aria-current="page">Item 1</a>
    <a class="subnav-item" href="#url">Item 2</a>
    <a class="subnav-item" href="#url">Item 3</a>
  </nav>
  <div class="subnav-search float-left">
    <input type="search" name="name" class="form-control subnav-search-input" value="" aria-label="Search site" />
    <!-- <%= octicon "search", class: "subnav-search-icon" %> -->
    <svg class="subnav-search-icon octicon octicon-search" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"> <path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z" /> </svg>
  </div>
</div>
```

You can also use a `subnav-search-context` to display search help in a select menu.

```html live
<div class="subnav">
  <nav class="subnav-links">
    <a class="subnav-item" href="#url" aria-current="page">Item 1</a>
    <a class="subnav-item" href="#url">Item 2</a>
    <a class="subnav-item" href="#url">Item 3</a>
  </nav>
</div>
<div class="subnav">
  <div class="float-left subnav-search-context">
    <button class="btn" type="button" name="button" aria-expanded="false" aria-haspopup="true">
      Filters
      <span class="dropdown-caret"></span>
    </button>
  </div>
  <div class="subnav-search float-left">
    <input type="search" name="name" class="form-control subnav-search-input" value="" aria-label="Search site" />
    <!-- <%= octicon "search", class: "subnav-search-icon" %> -->
    <svg class="subnav-search-icon octicon octicon-search" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"> <path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z" /> </svg>
  </div>
</div>
```
