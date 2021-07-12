---
title: Layout
path: utilities/layout
status: Stable
source: 'https://github.com/primer/css/blob/main/src/utilities/layout.scss'
bundle: utilities
---

Change the document layout with display, float, alignment, and other utilities.



## Display
Adjust the display of an element with `.d-block`, `.d-none`, `.d-inline`, `.d-inline-block`, `.d-table`, `.d-table-cell` utilities.

```html live
<div class="d-inline border">
  .d-inline
  <div class="d-inline-block border">
    .d-inline-block
  </div>
  <span class="d-block border">.d-block</span>
  <div class="d-table border">
    <div class="d-table-cell border">
      .d-table-cell
    </div>
  </div>
  <div class="d-table-cell border">
    .d-table-cell
  </div>
  <div class="d-none">
    .d-none
  </div>
</div>
```

### The HTML `hidden` attribute

As of [Primer v10.10.0](https://github.com/primer/css/releases/v10.10.0), `primer-base` includes a rule that sets `display: none !important` for any element with the [`hidden` attribute][hidden]. You can safely use the `hidden` attribute with display utilities, but we suggest:

1. Use the `hidden` attribute (and corresponding JavaScript property) if you're going to programmatically show and hide content.
1. Use `d-none` and/or its responsive variants (`d-sm-block`, `d-lg-none`) to conditionally show content at different screen sizes.

Rather than toggling the `d-none` class in JavaScript, you should toggle the `hidden` property on an element. This means that you won't have to restore any more specific display utility (`d-inline` or `d-flex`, for instance) just to work around the order in which they're listed in the stylesheet.

```js
// Good:
element.hidden = !visible

// Bad:
element.classList.toggle('d-none', !visible)
element.classList.toggle('d-inline', visible)
```

### `display:table` wrapping issues

There are known issues with using `display:table` and wrapping long strings, particularly in Firefox. You may need to use `table-fixed` on elements with `d-table` and apply column widths to table cells, which you can do with our [column width styles](/objects/grid#column-widths).

```html live
<div class="d-table table-fixed width-full">
  <div class="d-table-cell border">
    .d-table-cell
  </div>
  <div class="d-table-cell col-10 border">
    d-table-cell .col-10
  </div>
</div>
```

### Responsive display
A selection of display utilities are able to be applied or changed per [breakpoint](/objects/grid#breakpoints). `.d-block`, `.d-none`, `.d-inline`, and `.d-inline-block` are available as responsive utilities using the following formula: `d-[breakpoint]-[property]`. For example: `d-md-inline-block`. Each responsive display utility is applied to the specified breakpoint and up.

In the following example, the `ul` element switches from `display: block` on mobile to  `display: inline-block` at the `md` breakpoint, while the list items remain inline.

```html live
<h5 class="d-md-inline-block">.d-md-inline-block</h5>
<ul class="d-md-inline-block border">
  <li class="d-inline border">.d-inline</li>
  <li class="d-inline border">.d-inline</li>
</ul>
```

### Responsive hide
Hide utilities are able to be applied or changed per breakpoint using the following formula:<br /> `hide-[breakpoint]`, for example: `hide-sm`. Hide utilities act differently from other responsive styles and are applied to each **breakpoint-range only**.

| Shorthand | Range |
| --- | --- |
| -sm | 0—543px |
| -md | 544px—767px |
| -lg | 768px—1011px |
| -xl | 1012px and above |

```html live
<div>
  <h3>Potato update</h3>
  <span class="hide-sm hide-md">Opened by <a href="#url">broccolini</a></span>
  <span class="d-md-none">Updated</span> 3 hours ago
</div>
```

### Text direction
`.direction-ltr` or `.direction-rtl` can be used to change the text direction. This is especially helpful when paired with `.d-table`, `.d-table-cell`, and `.v-align-middle` to create equal height, vertically centered, alternating content.

## Visibility
Adjust the visibility of an element with `.v-hidden` and `.v-visible`.

## Overflow
Adjust element overflow with `.overflow-hidden`, `.overflow-scroll`, and `.overflow-auto`, or use `.overflow-visible` to undo the effects of CSS with overflow issues. `.overflow-hidden` can also be used to create a new [block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context) or clear floats.

Overflow utilities can also target x- and y-axes independently via:

* `.overflow-x-auto`
* `.overflow-x-hidden`
* `.overflow-x-scroll`
* `.overflow-x-visible`
* `.overflow-y-auto`
* `.overflow-y-hidden`
* `.overflow-y-scroll`
* `.overflow-y-visible`

Overflow utilities can be applied or changed per [breakpoint](/objects/grid#breakpoints). Each **responsive** overflow utility is applied to the specified breakpoint and up, using the following formula:  `overflow-[breakpoint]-[axis]-[property]`. For example: `overflow-x-scroll` or `overflow-md-x-visible`.

## Floats
Use `.float-left` and `.float-right` to set floats, and `.clearfix` to clear.
```html live
<div class="clearfix border border-gray">
  <div class="float-left border border-gray">
    .float-left
  </div>
  <div class="float-right border border-gray">
    .float-right
  </div>
</div>
```
### Responsive floats
Float utilities can be applied or changed per [breakpoint](/objects/grid#breakpoints). This can be useful for responsive layouts when you want an element to be full width on mobile but floated at a larger breakpoint.

Each responsive float utility is applied to the specified breakpoint and up, using the following formula:  `float-[breakpoint]-[property]`. For example: `float-md-left`. Remember to use `.clearfix` to clear.

```html live
<div class="clearfix border border-gray">
  <div class="float-md-left border border-gray">
    .float-md-left
  </div>
  <div class="float-md-right border border-gray">
    .float-md-right
  </div>
</div>
```

## Alignment
Adjust the alignment of an element with `.v-align-baseline`, `.v-align-top`, `.v-align-middle` or `.v-align-bottom`. The vertical-align property only applies to inline or table-cell boxes.

```html live
<div class="d-table border border-gray">
  <div class="d-table-cell"><h1>Potatoes</h1></div>
  <div class="d-table-cell v-align-baseline">.v-align-baseline</div>
  <div class="d-table-cell v-align-top">.v-align-top</div>
  <div class="d-table-cell v-align-middle">.v-align-middle</div>
  <div class="d-table-cell v-align-bottom">.v-align-bottom</div>
</div>
```

Use `v-align-text-top` or `v-align-text-bottom` to adjust the alignment of an element with the top or bottom of the parent element's font.

```html live
<div class="border border-gray">
  <h1 class="mr-1">Potatoes
    <span class="f4 v-align-text-top mr-1">.v-align-text-top</span>
    <span class="f4 v-align-text-bottom mr-1">.v-align-text-bottom</span>
  </h1>
</div>
```

## Width and height

Use `.width-fit` to set max-width 100%.

```html live
<div class="one-fourth column">
  <img class="width-fit color-bg-secondary" src="https://github.com/github.png" alt="width fitted octocat" />
</div>
```

Use `.width-full` to set width to 100%.

```html live
<div class="d-table width-full">
  <div class="d-table-cell">
    <input class="form-control width-full" type="text" value="Full width form field" aria-label="Sample full width form field">
  </div>
</div>
```

Use `.width-auto` to reset width to `auto` (initial value). Typically used with **responsive variants**. Resize the window to see the effect in the example below.

```html live
<div class="d-table width-full width-md-auto">
  <div class="d-table-cell">
    <input class="form-control width-full" type="text" value="Responsive width form field" aria-label="Sample full responsive width form field">
  </div>
</div>
```

Use `.height-fit` to set max-height 100%.

```html live
<div class="one-fourth column" style="height: 100px; overflow: auto;">
  <div class="p-3 height-fit border">
    Bacon ipsum dolor amet meatball flank beef tail pig boudin ham hock chicken capicola. Shoulder ham spare ribs turducken pork tongue. Bresaola corned beef sausage jowl ribeye kielbasa tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin pig, chuck ground round chicken tongue corned beef biltong.
  </div>
</div>
```

Use `.height-full` to set height to 100%.

```html live
<div class="d-table border border-gray">
  <div class="d-table-cell height-full v-align-middle pl-3">
    <!-- <%= octicon "three-bars" %> -->
    <svg class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
  </div>
  <div class="p-3">
    Bacon ipsum dolor amet meatball flank beef tail pig boudin ham hock chicken capicola. Shoulder ham spare ribs turducken pork tongue. Bresaola corned beef sausage jowl ribeye kielbasa tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin pig, chuck ground round chicken tongue corned beef biltong.
  </div>
</div>
```

## Position
Position utilities can be used to alter the default document flow. **Be careful when using positioning, it's often unnecessary and commonly misused.**

The position of an element depends on the content. Use `top-0`, `right-0`, `bottom-0`, and `left-0` to further specify an elements final position.

```html live
<div style="height: 64px;">
  <div class="border position-absolute top-0 left-0">
    .top-0 .left-0
  </div>
  <div class="border position-absolute top-0 right-0">
    .top-0 .right-0
  </div>
  <div class="border position-absolute bottom-0 right-0">
    .bottom-0 .right-0
  </div>
  <div class="border position-absolute bottom-0 left-0">
    .bottom-0 .left-0
  </div>
</div>
```

Using the **responsive variants** (e.g. `.right-md-0`) can be helpful for positioning select menus, dropdowns, popovers etc. when the content gets shuffled around for certain responsive breakpoints. You can also use `auto` to "reset" a final position for wider breakpoints (e.g. `right-0 right-md-auto`).

### Relative

Use `.position-relative` to create a new stacking context.

_Note how the other elements are displayed as if "Two" were in its normal position and taking up space._

```html live
<div class="d-inline-block float-left color-bg-info-inverse color-text-white m-3" style="width:100px; height:100px;">
  One
</div>
<div class="d-inline-block float-left position-relative color-bg-info-inverse color-text-white m-3" style="width:100px; height:100px; top:12px; left:12px;">
  Two
</div>
<div class="d-inline-block float-left color-bg-info-inverse color-text-white m-3" style="width:100px; height:100px;">
  Three
</div>
<div class="d-inline-block float-left color-bg-info-inverse color-text-white m-3" style="width:100px; height:100px;">
  Four
</div>
```

### Absolute

Use `.position-absolute` to take elements out of the normal document flow.

```html live
<div class="position-relative" style="height:116px;">
  <button type="button" class="btn mb-1">Button</button>
  <div class="position-absolute border border-gray p-2">
    <a href="#url" class="d-block p-1">Mashed potatoes</a>
    <a href="#url" class="d-block p-1">Fries</a>
  </div>
</div>
```

### Fixed

Use `.position-fixed` to position an element relative to the viewport. **Be careful when using fixed positioning. It is tricky to use and can lead to unwanted side effects.**

_Note: This example is shown in an `<iframe>` and therefore will not be positioned to the viewport of this page._

```html live
<div style="height: 64px;">
  <div class="position-fixed right-0 bottom-0 color-bg-secondary border p-2">
    .position-fixed
  </div>
</div>
```

To fill an entire width or height, use opposing directions.

_Note: fixed positioning has been disabled here for demonstration only._

```html live
<div class="position-fixed left-0 right-0 p-3 color-bg-info-inverse color-text-white">
  .position-fixed .left-0 .right-0
</div>
```

### Sticky

Use `.position-sticky` to keep an element stuck to an edge as long as its parent is visible. Things to keep in mind:

- Using the `.position-sticky` class by itself doesn't have any effect. An additional `[top|bottom|left|right]-0` class is needed. See the examples below.
- Add a background color to sticky elements so it covers the content underneath.
- Use `style="z-index: 1;"` (or higher) in case there are other elements with `z-index`.

#### Top

Combine `.position-sticky` with `.top-0` to keep an element stuck to the top.

```html live
<section class="mb-3">
  <header class="border position-sticky top-0 color-bg-secondary p-3" style="z-index: 1;">Sticky header 1</header>
  <main class="border border-top-0 p-3">
    <p>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”</p>
  </main>
</section>

<section class="mb-3">
  <header class="border position-sticky top-0 color-bg-secondary p-3">Sticky header 2</header>
  <main class="border border-top-0 p-3">
    <p>As Cicero would put it, “Um, not so fast.”</p>

    <p>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.</p>
  </main>
</section>

<section class="mb-3">
  <header class="border position-sticky top-0 color-bg-secondary p-3">Sticky header 3</header>
  <main class="border border-top-0 p-3">
    <p>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.</p>
  </main>
</section>

<style>.frame-example { max-width: 300px; height: 300px; }</style>
```

#### Bottom

Combine `.position-sticky` with `.bottom-0` to keep an element stuck to the bottom. Can be used as a footer or toolbar.

```html live
<section class="mb-3">
  <main class="border border-bottom-0 p-3">
    <h3>Title</h3>
    <p>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”</p>
  </main>
  <footer class="border position-sticky bottom-0 color-bg-secondary p-3">Sticky footer 1</footer>
</section>

<section class="mb-3">
  <main class="border border-bottom-0 p-3">
    <h3>Title</h3>
    <p>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.</p>
  </main>
  <footer class="border position-sticky bottom-0 color-bg-secondary p-3">Sticky footer 2</footer>
</section>

<style>.frame-example { max-width: 300px; height: 300px; }</style>
```

#### Left and right

Combine `.position-sticky` with `.left-0` or `.right-0` to keep elements stuck to the left or right when scrolling horizontally.

```html live
<div class="d-flex border overflow-x-auto">
  <section class="d-flex">
    <span class="border position-sticky left-0 color-bg-secondary p-4">A</span>
    <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
  </section>
  <section class="d-flex">
    <span class="border position-sticky left-0 color-bg-secondary p-4">B</span>
    <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
  </section>
  <section class="d-flex">
    <span class="border position-sticky left-0 color-bg-secondary p-4">C</span>
    <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
  </section>
  <section class="d-flex">
    <span class="border position-sticky left-0 color-bg-secondary p-4">D</span>
    <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
  </section>
  <section class="d-flex">
    <span class="border position-sticky left-0 color-bg-secondary p-4">E</span>
    <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
    <span class="border position-sticky right-0 color-bg-secondary p-4">...</span>
  </section>
</div>
```

### Responsive position

Position utilities can be applied or changed per breakpoint in responsive layouts. Each responsive position utility is applied to the specified breakpoint and up, using the following formula: `position-[breakpoint]-[property]`. For example: `position-md-absolute`.

```html live
<div style="height: 64px;">
  <div class="border position-md-absolute top-0 right-0">
    .position-md-absolute .top-0 .right-0
  </div>
</div>
```

### Screen reader only

Use `.sr-only` to position an element outside of the viewport for screen reader access only. **Even though the element can't be seen, make sure it still has a sensible tab order.**

```html live
<div class="js-details-container Details">
  <button type="button" class="btn">Tab once from this button, and press enter</button>
  <button type="button" class="sr-only js-details-target">
    Screen reader only button
  </button>
  <div class="Details-content--hidden">
    Button activated!
  </div>
</div>
```

## The media object

Create a media object with utilities.

```html live
<div class="clearfix p-3 border">
  <div class="float-left p-3 mr-3 color-bg-secondary">
    Image
  </div>
  <div class="overflow-hidden">
    <p><b>Body</b> Bacon ipsum dolor amet shankle rump tenderloin pork chop meatball strip steak bresaola doner sirloin capicola biltong shank pig. Alcatra frankfurter ham hock, ribeye prosciutto hamburger kevin brisket chuck burgdoggen short loin.</p>
  </div>
</div>
```
Create a double-sided media object for a container with a flexible center.

```html live
<div class="clearfix p-3 border border-gray">
  <div class="float-left p-3 mr-3 color-bg-secondary">
    Image
  </div>
  <div class="float-right p-3 ml-3 color-bg-secondary">
    Image
  </div>
  <div class="overflow-hidden">
    <p><b>Body</b> Bacon ipsum dolor amet shankle rump tenderloin pork chop meatball strip steak bresaola doner sirloin capicola biltong shank pig. Alcatra frankfurter ham hock, ribeye prosciutto hamburger kevin brisket chuck burgdoggen short loin.</p>
  </div>
</div>
```

You can also create a media object with [flexbox utilities](./flexbox#media-object) instead of floats which can be useful for changing the vertical alignment.

[hidden]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden
