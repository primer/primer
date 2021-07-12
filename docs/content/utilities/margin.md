---
title: Margin
path: utilities/margin
status: Stable
source: 'https://github.com/primer/css/blob/main/src/utilities/margin.scss'
bundle: utilities
---

Margin utilities are based on a global [spacing scale](/support/spacing) which helps keep horizontal and vertical spacing consistent. These utilities help us reduce the amount of custom CSS that share the same properties, and allows to achieve many different page layouts using the same styles.


## Naming convention

Since margin utilities have many variations and will be used in many places, we use a shorthand naming convention to help keep class names succinct.


| Shorthand | Description |
| --- | --- |
| m   | margin |
| t   | top |
| r   | right |
| b   | bottom |
| l   | left |
| x   | horizontal, left & right |
| y   | vertical, top & bottom |
| 0   | 0     |
| 1   | 4px   |
| 2   | 8px   |
| 3   | 16px  |
| 4   | 24px  |
| 5   | 32px  |
| 6   | 40px  |
| 7   | 48px  |
| 8   | 64px  |
| 9   | 80px  |
| 10  | 96px  |
| 11  | 112px |
| 12  | 128px |

## Uniform margins

Use uniform spacing utilities to apply equal margin to all sides of an element. These utilities can change or override default margins, and can be used with a spacing scale from 0-6.

```html live
<div class="d-flex flex-items-baseline flex-justify-around">
  <div class="color-bg-warning"><div class="m-0 p-1 color-bg-secondary">.m-0</div></div>
  <div class="color-bg-warning"><div class="m-1 p-1 color-bg-secondary">.m-1</div></div>
  <div class="color-bg-warning"><div class="m-2 p-1 color-bg-secondary">.m-2</div></div>
  <div class="color-bg-warning"><div class="m-3 p-1 color-bg-secondary">.m-3</div></div>
  <div class="color-bg-warning"><div class="m-4 p-1 color-bg-secondary">.m-4</div></div>
  <div class="color-bg-warning"><div class="m-5 p-1 color-bg-secondary">.m-5</div></div>
  <div class="color-bg-warning"><div class="m-6 p-1 color-bg-secondary">.m-6</div></div>
</div>
```

## Directional margins

Use directional utilities to apply margin to an individual side, or the X and Y axis of an element. Directional utilities can change or override default margins, and can be used with a spacing scale of 0-6.

```html live
<div class="d-flex flex-items-baseline flex-justify-around">
  <div class="color-bg-warning"><div class="mt-3 p-1 color-bg-secondary">.mt-3</div></div>
  <div class="color-bg-warning"><div class="mr-3 p-1 color-bg-secondary">.mr-3</div></div>
  <div class="color-bg-warning"><div class="mb-3 p-1 color-bg-secondary">.mb-3</div></div>
  <div class="color-bg-warning"><div class="ml-3 p-1 color-bg-secondary">.ml-3</div></div>
  <div class="color-bg-warning"><div class="mx-3 p-1 color-bg-secondary">.mx-3</div></div>
  <div class="color-bg-warning"><div class="my-3 p-1 color-bg-secondary">.my-3</div></div>
</div>
```

## Extended vertical margins

The extended scale starts from spacer `7` up to `12`. **Note**: Only the y-axis (`mt`, `mb` and `my`) and its responsive variants are supported.

```html live
<div class="color-bg-warning d-inline-block"><div class="mt-7  p-1 color-bg-secondary">.mb-7</div></div>
<div class="color-bg-warning d-inline-block"><div class="mt-8  p-1 color-bg-secondary">.mb-8</div></div>
<div class="color-bg-warning d-inline-block"><div class="mt-9  p-1 color-bg-secondary">.mb-9</div></div>
<div class="color-bg-warning d-inline-block"><div class="mt-10 p-1 color-bg-secondary">.mb-10</div></div>
<div class="color-bg-warning d-inline-block"><div class="mt-11 p-1 color-bg-secondary">.mb-11</div></div>
<div class="color-bg-warning d-inline-block"><div class="mt-12 p-1 color-bg-secondary">.mb-12</div></div>
```

## Center elements

Use `mx-auto`to center block elements with a set width.

```html live
<div class="color-bg-warning">
  <div class="mx-auto color-bg-secondary text-center" style="max-width: 500px;">.mx-auto</div>
</div>
```

## Reset margins
Reset margins built into typography elements or other components with `m-0`, `mt-0`, `mr-0`, `mb-0`, `ml-0`, `mx-0`, and `my-0`.

```html live
<div class="color-bg-warning border">
  <p class="mb-0 color-bg-secondary p-1">No bottom margin on this paragraph.</p>
</div>
```

## Responsive margins

All margin utilities can be adjusted per [breakpoint](/objects/grid#breakpoints) using the following formula: `m[direction]-[breakpoint]-[spacer]`. Each responsive style is applied to the specified breakpoint and up.

```html live
<div class="color-bg-warning d-inline-block">
  <div class="mx-sm-2 mx-md-4 color-bg-secondary p-1">
    .mx-sm-2 .mx-md-4
  </div>
</div>
```

## Negative margins

You can add negative margins to the top, right, bottom, or left of an item by adding a negative margin utility. The formula for this is: `m[direction]-n[spacer]`, where `spacer` runs from `1` to `6`. This also works responsively, with the following formula: `m[direction]-[breakpoint]-n[spacer]`.

```html live
<div class="d-flex flex-justify-center">
  <div class="color-bg-warning">
    <div class="m-3 ml-n4 ml-md-n6 border-left border-red color-bg-secondary p-2">
      .m-3 .ml-n4 .ml-md-n6
    </div>
  </div>
</div>
```

## Extended negative margins

You can use the extended spacing scale for `top` and `bottom` margins, ranging from `1` to `12`.

```html live
<div class="d-flex flex-justify-center">
  <div class="py-6 px-3 color-bg-warning">
    <div class="mt-n8 border-left border-red color-bg-tertiary p-2">
      .mt-n8
    </div>
  </div>
</div>
```
