---
title: Padding
path: utilities/padding
status: Stable
source: 'https://github.com/primer/css/tree/main/src/utilities/padding.scss'
bundle: utilities
---

Padding utilities are based on a global [spacing scale](/support/spacing) which helps keep horizontal and vertical spacing consistent. These utilities help us reduce the amount of custom CSS that could share the same properties, and allows to achieve many different page layouts using the same styles.



## Shorthand

Since padding utilities have many variations and will be used in many places, we use a shorthand naming convention to help keep class names succinct.

| Shorthand | Description |
| --- | --- |
| p | padding |
| t | top |
| r | right |
| b | bottom |
| l | left |
| x | horizontal, left & right |
| y | vertical, top & bottom |
| 0 | 0 |
| 1 | 4px |
| 2 | 8px |
| 3 | 16px |
| 4 | 24px |
| 5 | 32px |
| 6 | 40px |
| 7   | 48px  |
| 8   | 64px  |
| 9   | 80px  |
| 10  | 96px  |
| 11  | 112px |
| 12  | 128px |

_**Note:** The blue in the examples below represents the element, and the green represents the padding._

## Uniform padding

Use uniform spacing utilities to apply equal padding to all sides of an element. These utilities can be used with a spacing scale from 0-6.

```html live
<div class="p-0 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.p-0</div></div>
<div class="p-1 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.p-1</div></div>
<div class="p-2 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.p-2</div></div>
<div class="p-3 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.p-3</div></div>
<div class="p-4 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.p-4</div></div>
<div class="p-5 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.p-5</div></div>
<div class="p-6 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.p-6</div></div>
```

## Directional padding

Use directional utilities to apply padding to an individual side, or the X and Y axis of an element. Directional utilities can change or override default padding, and can be used with a spacing scale of 0-6.

```html live
<div class="pt-3 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.pt-3</div></div>
<div class="pr-3 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.pr-3</div></div>
<div class="pb-3 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.pb-3</div></div>
<div class="pl-3 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.pl-3</div></div>
<div class="py-3 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.py-3</div></div>
<div class="px-3 mr-3 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.px-3</div></div>
```

## Extended directional padding

The extended directional padding scale starts from spacer `7` and goes up to `12`. All directions and their responsive variants are supported, except for `px`.

```html live
<div class="pt-7  mr-1 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.pt-7</div></div>
<div class="pt-8  mr-1 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.pt-8</div></div>
<div class="pt-9  mr-1 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.pt-9</div></div>
<div class="pt-10 mr-1 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.pt-10</div></div>
<div class="pt-11 mr-1 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.pt-11</div></div>
<div class="pt-12 mr-1 color-bg-warning d-inline-block"><div class="color-bg-secondary p-1">.pt-12</div></div>
```


## Responsive padding

All padding utilities can be adjusted per [breakpoint](/support/breakpoints) using the following formula: <br /> `p-[direction]-[breakpoint]-[spacer]`. Each responsive style is applied to the specified breakpoint and up.

```html live
<div class="px-sm-2 px-md-4 color-bg-warning d-inline-block">
  <div class="color-bg-tertiary p-1">.px-sm-2 .px-md-4</div>
</div>
```

## Responsive container padding

`.p-responsive` is a padding class that adds padding on the left and right sides of an element. It is intended to be used with [container styles](/objects/grid#containers).

- On **0 to sm** screens, it gives the element padding of `$spacer-3`
- On **sm to lg** screens it gives the element padding of `$spacer-6`
- On **lg and wider** screens, it gives the element padding of `$spacer-3`

It's the equvilent of adding the `.px-3 .px-sm-6 .px-lg-3` utility classes.

```html live
<div class="p-responsive color-bg-warning">
  <div class="color-bg-tertiary p-1">.p-responsive</div>
</div>
```

> Note: Since the example is shown in an `iframe` it won't show the change to `$spacer-3` for the `lg` breakpoint.
