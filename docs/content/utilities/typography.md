---
title: Typography
path: utilities/typography
status: Stable
source: 'https://github.com/primer/css/tree/main/src/utilities/typography.scss'
bundle: utilities
---

Type utilities are designed to work in combination with line-height utilities so as to result in more sensible numbers wherever possible. These also exist as [variables](/support/typography#typography-variables) that you can use in components or custom CSS.



Font sizes are smaller on mobile and scale up at the `md` [breakpoint](/support/breakpoints) to be larger on desktop.

| Scale | Font size: mobile | Font size: desktop | 1.25 line height | 1.5 line height |
| --- | --- | --- | --- | --- |
| 00 | 40px | 48px | 60 | 72 |
| 0 | 32px | 40px | 50 | 60 |
| 1 | 26px | 32px | 40 | 48 |
| 2 | 22px | 24px | 30 | 36 |
| 3 | 18px | 20px | 25 | 30 |
| 4 | 16px | 16px | 20 | 24 |
| 5 | 14px | 14px | 17.5 | 21 |
| 6 | 12px | 12px | 15 | 18 |


## Heading utilities

Use `.h1` – `.h6` to change an elements font size and weight to match our heading styles.

```html live
<p class="h1">Pizza 1</p>
<p class="h2">Pizza 2</p>
<p class="h3">Pizza 3</p>
<p class="h4">Pizza 4</p>
<p class="h5">Pizza 5</p>
<p class="h6">Pizza 6</p>
```

These are particularly useful for changing the visual appearance while keeping the markup semantically correct. Be sure you keep the hierarchy appropriate for the page.

```html live
<h2 class="h1">Looks like a heading 1, semantically a heading 2</h2>
```

## Type scale utilities

Use `.f1` – `.f6` to change an elements font size while keeping inline with our type scale.

```html live
<p class="f1">Focaccia</p>
<p class="f2">Focaccia</p>
<p class="f3">Focaccia</p>
<p class="f4">Focaccia</p>
<p class="f5">Focaccia</p>
<p class="f6">Focaccia</p>
```

Lighter font-weight utilities are available in a limited range. Lighter font-weights reduce the legibility of text, particularly at small font sizes, so the scale only goes down to `f3` at 20px. The larger sizes`f0` and `f00` allow for lighter and larger type that is in keeping with our marketing styles.

```html live
<h1 class="f00-light">Potato chips</h1>
<h1 class="f0-light">Potato chips</h1>
<h1 class="f1-light">Potato chips</h1>
<h1 class="f2-light">Potato chips</h1>
<h1 class="f3-light">Potato chips</h1>
```

## Line height styles

Change the line height density with these utilities. Responsive variants are also available (e.g. `.lh-sm-condensed`).

```html live
<p class="lh-default">
  Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
</p>
<p class="lh-condensed">
  Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
</p>
<p class="lh-condensed-ultra">
  Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
</p>

<style>.frame-example {height:350px;}</style>
```

The `lh-0` utility class sets `line-height: 0 !important`, and can be used to remove vertical spacing from elements that inherit line-height but don't contain any text.

## Typographic styles
Change the font weight, styles, and alignment with these utilities.

```html live
<p class="text-normal">Normal</p>
<p class="text-italic">Italic</p>
<p class="text-bold">Bold</p>
<p class="text-semibold">Semi-bold</p>
<p class="text-light">Light</p>
<p class="text-uppercase">Uppercase</p>
<p class="no-wrap">No wrap</p>
<p class="ws-normal">Normal whitespace</p>
<p class="text-underline">Text underline</p>
<p class="no-underline">No underline</p>
<p class="text-emphasized">Emphasized</p>
<p class="text-small">Small</p>
<p class="lead">Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail.</p>
<p class="text-mono">Monospace</p>
<p class="user-select-none">User Select None</p>
```

## Word-break
There are two utilities for adjusting how lines and words of text break when they exceed the width of their containing element:

1. `break-word` sets `word-break: break-word` and `overflow-wrap: break-word`, which will only break words if they would exceed the line length _after wrapping_.

2. `wb-break-all` sets `word-break: break-all`, which will force a word to break regardless of whether it's shorter than the line length. See [MDN's `word-break` docs](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break#Values) for more info.

```html live
<p class="break-word p-2 color-bg-secondary col-3 border-right">.break-word will only break long words that exceed the line length, such as supercalifragilisticexpialidocious. Long words like "exceedingly" will simply break to the next line.</p>
<p class="wb-break-all p-2 color-bg-secondary col-3 border-right">.wb-break-all will break any word that meets the end its line, and should be used sparingly. As you can see here, it's not particularly nice to read text that breaks in weird places.</p>
```


## Text alignment

 Use text alignment utilities to left align, center, or right align text.

```html live
<p class="text-left">Left align</p>
<p class="text-center">Center</p>
<p class="text-right">Right align</p>
```
## Responsive text alignment

Use the following formula to make a text alignment utility responsive: `.text-[breakpoint]-[alignment]`

```html live
<p class="text-left text-sm-center text-lg-right">Left in a small viewport, centered in mid-sized viewports, and right aligned in larger viewports</p>
```

## List styles

Remove bullets from an unordered list or numbers from an ordered list by applying `.list-style-none` to the `<ul>`.

```html live
<ul class="list-style-none">
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
</ul>
```
