---
title: Grid
path: objects/grid
status: Stable
status_issue: 'https://github.com/github/design-systems/issues/88'
source: 'https://github.com/primer/css/tree/main/src/layout/grid.scss'
bundle: layout
---

The grid is 12 columns and percentage-based. The number of columns a container spans can be adjusted across breakpoints for responsive layouts. The grid system works with a variety of layout utilities to achieve different results.

## Float based grid

Use `.clearfix` on the container and float utilities with columns for a floated grid layout.

```html live title="Float based grid"
<div class="container-lg clearfix">
  <div class="col-4 float-left border p-4">
    My column
  </div>
  <div class="col-4 float-left border p-4">
    Looks better
  </div>
  <div class="col-4 float-left border p-4">
    Than your column
  </div>
</div>
```

### Reversed grid

To reverse the order of columns, use `float-right` to float columns to the right.

```html live title="Float grid reversed"
<div class="container-lg clearfix">
  <div class="col-4 float-right border p-4">
    One
  </div>
  <div class="col-4 float-right border p-4">
    Two
  </div>
  <div class="col-4 float-right border p-4">
    Three
  </div>
</div>
```

## Nesting

You can infinitely nest grid layouts within other columns since the column widths are percentage based. With great flexibility comes great responsibility - be sensible with how far you nest!

```html live title="Nesting grids"
<div class="clearfix">
  <div class="col-6 float-left px-1">
    <div class="border p-1">Unnested</div>
  </div>
  <div class="col-6 float-left">
    <div class="clearfix">
      <div class="col-6 float-left px-1">
        <div class="border p-1">1 x Nested</div>
      </div>
      <div class="col-6 float-left">
        <div class="col-6 float-left px-1">
          <div class="border p-1">2 x Nested</div>
        </div>
        <div class="col-6 float-left px-1">
          <div class="border p-1">2 x Nested</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Centering a column

Use `.mx-auto` to center columns within a container.

```html live title="Centering a column"
<div class="border">
  <div class="col-6 p-2 mx-auto border">
    This column is the center of my world.
  </div>
</div>
```

## Column widths

Column widths can be used with any other block or inline-block elements to add percentage-based widths.

```html live
<div>
  <div class="col-4 float-right p-2 border text-red">
    <!-- <%= octicon "heart" %> -->
    <svg class="octicon octicon-heart" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"></path></svg>
    <span>Don't go bacon my heart.<span>
  </div>
  <p>T-bone drumstick alcatra ribeye. Strip steak chuck andouille tenderloin bacon tri-tip ball tip beef capicola rump. Meatloaf bresaola drumstick ball tip salami. Drumstick ham bacon alcatra pig porchetta, spare ribs leberkas pork belly.</p>
</div>
```

## Offset columns

Using column offset classes can push a div over X number of columns. They work responsively using the [breakpoints outlined below](#responsive-grids).

```html live title="Offset columns"
<div class="clearfix">
  <div class="offset-1 col-3 border p-3">.offset-1</div>
  <div class="offset-2 col-3 border p-3">.offset-2</div>
</div>
```

## Gutters

Use gutter styles or padding utilities to create gutters. You can use the default gutter style, `gutter`, or either of its modifiers, `gutter-condensed` or `gutter-spacious`. Gutter styles also support responsive breakpoint modifiers. Gutter styles add padding to the left and right side of each column and apply a negative margin to the container to ensure content inside each column lines up with content outside of the grid.

```html live title="Gutters"
<div class="clearfix gutter-md-spacious border">
  <div class="col-3 float-left">
    <div class="border p-3">.col-md-3</div>
  </div>
  <div class="col-3 float-left">
    <div class="border p-3">.col-md-3</div>
  </div>
  <div class="col-3 float-left">
    <div class="border p-3">.col-md-3</div>
  </div>
  <div class="col-3 float-left">
    <div class="border p-3">.col-md-3</div>
  </div>
</div>
```

Use padding utilities to create gutters for more customized layouts.

```html live title="Gutters with padding"
<div class="container-lg clearfix">
  <div class="col-3 float-left pr-2 mb-3">
    <div class="border color-bg-warning">.pr-2</div>
  </div>
  <div class="col-3 float-left px-2 mb-3">
    <div class="border color-bg-warning">.px-2</div>
  </div>
  <div class="col-3 float-left px-2 mb-3">
    <div class="border color-bg-warning">.px-2</div>
  </div>
  <div class="col-3 float-left pl-2 mb-3">
    <div class="border color-bg-warning">.pl-2</div>
  </div>
</div>
<div class="container-lg clearfix">
  <div class="col-3 float-left pr-2">
    <div class="border color-bg-warning">.pr-2</div>
  </div>
  <div class="col-9 float-left pl-2">
    <div class="border color-bg-warning">.pl-2</div>
  </div>
</div>
```

## Inline-block grids

Use column widths with `d-inline-block` as an alternative to floated grids.

```html live title="Inline-block grid"
<div>
  <div class="col-4 d-inline-block border">
    .col-4 .d-inline-block
  </div>
  <!--
  -->
  <div class="col-4 d-inline-block border">
    .col-4 .d-inline-block
  </div>
  <!--
  -->
  <div class="col-4 d-inline-block border">
    .col-4 .d-inline-block
  </div>
</div>
```

You can use column widths and other utilities on elements such as lists to create the layout you need while keeping the markup semantically correct.

```html live title="Inline-block grid list"
<ul class="list-style-none">
  <li class="d-inline-block col-2 p-2">
    <img class="width-full avatar" src="https://github.com/broccolini.png" alt="broccolini" />
  </li>
  <!--
  -->
  <li class="d-inline-block col-2 p-2">
    <img class="width-full avatar" src="https://github.com/jonrohan.png" alt="jonrohan" />
  </li>
  <!--
  -->
  <li class="d-inline-block col-2 p-2">
    <img class="width-full avatar" src="https://github.com/muan.png" alt="muan" />
  </li>
  <!--
  -->
  <li class="d-inline-block col-2 p-2">
    <img class="width-full avatar" src="https://github.com/pmarsceill.png" alt="pmarsceill" />
  </li>
  <!--
  -->
  <li class="d-inline-block col-2 p-2">
    <img class="width-full avatar" src="https://github.com/sophshep.png" alt="sophshep" />
  </li>
  <!--
  -->
  <li class="d-inline-block col-2 p-2">
    <img class="width-full avatar" src="https://github.com/cmwinters.png" alt="cmwinters" />
  </li>
  <!--
  -->
  <li class="d-inline-block col-2 p-2">
    <img class="width-full avatar" src="https://github.com/jeejkang.png" alt="jeejkang" />
  </li>
  <!--
  -->
  <li class="d-inline-block col-2 p-2"><img class="width-full avatar" src="https://github.com/mdo.png" alt="mdo" /></li>
</ul>
```

## Display table grids

Using [display table utilities](/utilities/layout#display) with columns gives you some alternative layout options.

A useful example is being able to keep the height of the container equal across a row when the length of content may differ.

```html live title="Table grid"
<div class="d-table col-12">
  <div class="col-4 d-table-cell border p-2">
    Bacon ipsum dolor amet leberkas pork pig kielbasa shankle ribeye meatball, salami alcatra venison.
  </div>
  <!--
  -->
  <div class="col-4 d-table-cell border p-2">
    Pork chop cupim cow turkey frankfurter, landjaeger fatback hamburger meatball salami spare ribs. Rump tenderloin
    salami, hamburger frankfurter landjaeger andouille.
  </div>
  <!--
  -->
  <div class="col-4 d-table-cell border p-2">
    Brisket tongue frankfurter cupim strip steak rump picanha pancetta pork pig kevin pastrami biltong. Shankle venison
    meatball swine sausage ground round. Tail pork loin ribeye kielbasa short ribs pork chop.
  </div>
</div>
```

You can also create an alternative [media object](/utilities/layout#the-media-object) layout with `.display-table` and column widths.

```html live title="Table grid alternative"
<div class="d-table col-12">
  <div class="col-2 d-table-cell v-align-middle">
    <img class="width-full avatar" src="https://github.com/github.png" alt="github" />
  </div>
  <div class="col-10 d-table-cell v-align-middle pl-4">
    <h1 class="text-normal lh-condensed">GitHub</h1>
    <p class="h4 text-gray text-normal mb-2">How people build software.</p>
    <a class="text-gray text-small" href="#url">https://github.com/about</a>
  </div>
</div>
```

Note that table cells will fill the width of their container even when the total columns doesn't add up to 12.

```html live title="Table grid cells"
<div class="d-table col-12">
  <div class="col-4 d-table-cell border">
    .col-4 .d-table-cell
  </div>
  <!--
  -->
  <div class="col-4 d-table-cell border">
    .col-4 .d-table-cell
  </div>
  <!--
  -->
  <div class="col-2 d-table-cell border">
    .col-2 .d-table-cell
  </div>
</div>
```

## Flexbox grids

You can use [flex utilities](/utilities/flexbox) on the container and columns to create a flexbox grid.

This can be useful for keeping columns the same height, justifying content and vertically aligning items. The flexbox grid is also great for working with responsive layouts.

```html live title="Flexbox grid"
<div class="d-flex flex-column flex-md-row flex-items-center flex-md-items-center">
  <div class="col-2 d-flex flex-items-center flex-items-center flex-md-items-start">
    <img class="width-full avatar mb-2 mb-md-0" src="https://github.com/github.png" alt="github" />
  </div>
  <div class="col-12 col-md-10 d-flex flex-column flex-justify-center flex-items-center flex-md-items-start pl-md-4">
    <h1 class="text-normal lh-condensed">GitHub</h1>
    <p class="h4 text-gray text-normal mb-2">How people build software.</p>
    <a class="text-gray text-small" href="#url">https://github.com/about</a>
  </div>
</div>
```

## Responsive grids

All the column width classes can be set per breakpoint to create responsive grid layouts. Each responsive style is applied to the specified breakpoint and up.

### Breakpoints

We use abbreviations for each breakpoint to keep the class names concise.

| Shorthand | Description       |
| --------- | ----------------- |
| sm        | min-width: 544px  |
| md        | min-width: 768px  |
| lg        | min-width: 1004px |
| xl        | min-width: 1280px |

**Note:** The `lg` breakpoint matches our current page width of `980px` including left and right padding of `12px`. This is so that content doesn't touch the edges of the window when resized.

<hr />

In this example at the `sm` breakpoint 2 columns will show, at the `md` breakpoint 4 columns will show, and at the `lg` breakpoint 6 columns will show.

```html live title="Responsive grid"
<div class="container-lg clearfix">
  <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
    .col-sm-6 .col-md-3 .col-lg-2
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
    .col-sm-6 .col-md-3 .col-lg-2
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
    .col-sm-6 .col-md-3 .col-lg-2
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
    .col-sm-6 .col-md-3 .col-lg-2
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
    .col-sm-6 .col-md-3 .col-lg-2
  </div>
  <div class="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">
    .col-sm-6 .col-md-3 .col-lg-2
  </div>
</div>
```

For demonstration, this is how the above example would look at the `sm` breakpoint.

```html live title="Responsive grid small"
<div class="container-lg clearfix">
  <div class="col-sm-6 float-left p-2 border">
    .col-sm-6
  </div>
  <div class="col-sm-6 float-left p-2 border">
    .col-sm-6
  </div>
  <div class="col-sm-6 float-left p-2 border">
    .col-sm-6
  </div>
  <div class="col-sm-6 float-left p-2 border">
    .col-sm-6
  </div>
  <div class="col-sm-6 float-left p-2 border">
    .col-sm-6
  </div>
  <div class="col-sm-6 float-left p-2 border">
    .col-sm-6
  </div>
</div>
```

This is how that same example would look at the `md` breakpoint.

```html live title="Responsive grid medium"
<div class="container-lg clearfix">
  <div class="col-md-3 float-left p-2 border">
    .col-md-3
  </div>
  <div class="col-md-3 float-left p-2 border">
    .col-md-3
  </div>
  <div class="col-md-3 float-left p-2 border">
    .col-md-3
  </div>
  <div class="col-md-3 float-left p-2 border">
    .col-md-3
  </div>
  <div class="col-md-3 float-left p-2 border">
    .col-md-3
  </div>
  <div class="col-md-3 float-left p-2 border">
    .col-md-3
  </div>
</div>
```

This is how that example would look at the `lg` breakpoint.

```html live title="Responsive grid large"
<div class="container-lg clearfix">
  <div class="col-lg-2 float-left p-2 border">
    .col-lg-2
  </div>
  <div class="col-lg-2 float-left p-2 border">
    .col-lg-2
  </div>
  <div class="col-lg-2 float-left p-2 border">
    .col-lg-2
  </div>
  <div class="col-lg-2 float-left p-2 border">
    .col-lg-2
  </div>
  <div class="col-lg-2 float-left p-2 border">
    .col-lg-2
  </div>
  <div class="col-lg-2 float-left p-2 border">
    .col-lg-2
  </div>
</div>
```

## Containers

Container widths match our breakpoints and are available at a `sm`, `md`, `lg`, and `xl` size. Containers apply a max-width rather than a fixed width for responsive layouts, and they center the container.

```html live title="Containers sized"
<div class="container-sm border">
  .container-sm, max-width 544px
</div>

<div class="container-md border">
  .container-md, max-width 768px
</div>

<div class="container-lg border">
  .container-lg, max-width 1012px
</div>

<div class="container-xl border">
  .container-xl, max-width 1280px
</div>
```
