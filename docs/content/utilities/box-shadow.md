---
title: Box shadow
path: utilities/box-shadow
status: Stable
status_issue: 'https://github.com/github/design-systems/issues/269'
source: 'https://github.com/primer/css/tree/main/src/utilities/box-shadow.scss'
bundle: utilities
---

<Note>
  Please note Primer v16 has changed the naming of these color classes. Check the <a href="/css/support/v16-migration">migration guide</a> to make sure your app is up to date.
</Note>

Box shadows are used to make content appear elevated. They are typically applied to containers of content that users need to pay attention to or content that appears on top of (overlapping) other elements on the page (like a pop-over or modal).

## Small

Small shadows are mainly used on things that need to appear slightly elevated, like pricing cards or UI elements containing important information.

```html live
<div class="color-shadow-small p-3">
  .color-shadow-small
</div>
```

These types of shadows are typically applied to elements with borders, such as the [Box component](/components/box).

```html live
<div class="col-6">
  <div class="Box color-shadow-small">
    <div class="Box-row">
      <h3 class="m-0">Organization</h3>
    </div>
    <div class="Box-row">
      <p class="mb-0 text-gray">
        Taxidermy live-edge mixtape, keytar tumeric locavore meh selvage deep v letterpress vexillologist lo-fi tousled
        church-key thundercats. Brooklyn bicycle rights tousled, marfa actually.
      </p>
    </div>
    <div class="Box-row">
      <button type="button" name="Create an organization" class="btn btn-primary btn-block">
        Create an organization
      </button>
    </div>
  </div>
</div>
```

## Medium

Medium box shadows are more diffused and slightly larger than small box shadows.

```html live
<div class="color-shadow-medium p-3">
  .color-shadow-medium
</div>
```

Medium box shadows are typically used on editorialized content that needs to appear elevated. Most of the time, the elements using this level of shadow will be clickable.

```html live
<div class="col-6">
  <a class="d-block color-shadow-medium px-3 pt-4 pb-6 position-relative rounded-1 overflow-hidden no-underline" href="#">
    <div class="position-absolute top-0 left-0 py-1 width-full"></div>
    <h3 class="text-gray-dark">Serverless architecture</h3>
    <p class="text-gray">
      Build powerful, event-driven, serverless architectures with these open-source libraries and frameworks.
    </p>
    <ul class="position-absolute bottom-0 pb-3 text-small text-gray list-style-none ">
      <li class="d-inline-block mr-1">
        <!-- <%= octicon "repo", :class => "mr-1" %> -->
        <svg class="octicon octicon-repo mr-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
        12 Repositories
      </li>
      <li class="d-inline-block">
        <!-- <%= octicon "code", :class => "mr-1" %> -->
        <svg class="octicon octicon-code mr-1" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
        5 Languages
      </li>
    </ul>
  </a>
</div>
```

## Large

Large box shadows are very diffused and used sparingly in the product UI.

```html live
<div class="color-shadow-large p-3">
  .color-shadow-large
</div>
```

These shadows are used for marketing content, UI screenshots, and content that appears on top of other page elements.

```html live
<div class="color-shadow-large rounded-2 overflow-hidden">
  <img src="https://github.com/nasa.png" class="img-responsive" alt="NASA is on GitHub" />
</div>
```

## Extra large

Extra large box shadows are even more diffused.

```html live
<div class="color-shadow-extra-large p-3">
  .color-shadow-extra-large
</div>
```

These shadows are used for marketing content and content that appears on top of other page elements.

## Remove a box shadow

Additionally there is a `box-shadow-none` class that removes `box-shadow`:

```html live
<div class="color-shadow-large box-shadow-none p-3">
  .box-shadow-none
</div>
```
