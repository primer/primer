---
title: Flexbox
path: utilities/flexbox
status: Stable
status_issue: 'https://github.com/github/design-systems/issues/157'
source: 'https://github.com/primer/css/blob/main/src/utilities/flexbox.scss'
bundle: utilities
---

Flex utilities can be used to apply `flexbox` behaviors to elements by using utility classes.



## Required reading

Before using these utilities, **you should be familiar with CSS3 Flexible Box spec**. If you are not, check out MDN's guide:

📖 **[Using CSS Flexible Boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)**

## Flex container

Use these classes to make an element lay out its content using the flexbox model. Each **direct** child of the flex container will become a flex item.

### CSS

```css
.d-flex { display: flex; }
.d-inline-flex { display: inline-flex; }
```

### Classes

| Class | Description |
| --- | --- |
| `.d-flex` | The element behaves like a block and lays out its content using the flexbox model. |
| `.d-inline-flex` | The element behaves like an inline element and lays out its content using the flexbox model. |

### Example using `.d-flex`

```html live
<!-- flex container -->
<div class="border d-flex">
  <div class="p-5 border color-bg-secondary">flex item 1</div>
  <div class="p-5 border color-bg-secondary">flex item 2</div>
  <div class="p-5 border color-bg-secondary">flex item 3</div>
</div>
```

### Example using `.d-inline-flex`

```html live
<!-- inline-flex container -->
<div class="border d-inline-flex">
  <div class="p-5 border color-bg-secondary">flex item 1</div>
  <div class="p-5 border color-bg-secondary">flex item 2</div>
  <div class="p-5 border color-bg-secondary">flex item 3</div>
</div>
```

## Flex direction

Use these classes to define the orientation of the main axis (`row` or `column`). By default, flex items will display in a row. Use `.flex-column` to change the direction of the main axis to vertical.

### CSS

```css
.flex-row            { flex-direction: row; }
.flex-row-reverse    { flex-direction: row-reverse; }
.flex-column         { flex-direction: column; }
.flex-column-reverse { flex-direction: column-reverse; }
```

### Classes

| Class | Description |
| --- | --- |
| `.flex-row` | The main axis runs left to right (default). |
| `.flex-row-reverse` | The main axis runs right to left. |
| `.flex-column` | The main axis runs top to bottom. |
| `.flex-column-reverse` | The main axis runs bottom to top. |

### Example using `.flex-column`

```html live
<div class="border d-flex flex-column">
  <div class="p-5 border color-bg-secondary">Item 1</div>
  <div class="p-5 border color-bg-secondary">Item 2</div>
  <div class="p-5 border color-bg-secondary">Item 3</div>
</div>
```

### Example using `.flex-column-reverse`

This example uses the responsive variant `.flex-sm-column-reverse` to override `.flex-column` Learn more about responsive flexbox utilities **[here](#responsive-flex-utilities)**. Keep in mind that it won't affect screen readers or navigating with the keyboard and it's advised to keep the markup in a logical source order.

```html live
<div class="border d-flex flex-column flex-sm-column-reverse">
  <div class="p-5 border color-bg-secondary">Item 1</div>
  <div class="p-5 border color-bg-secondary">Item 2</div>
  <div class="p-5 border color-bg-secondary">Item 3</div>
</div>
```

### Example using `.flex-row`

This example uses the responsive variant `.flex-sm-row` to override `.flex-column` Learn more about responsive flexbox utilities **[here](#responsive-flex-utilities)**.

```html live
<div class="border d-flex flex-column flex-sm-row">
  <div class="p-5 border color-bg-secondary">Item 1</div>
  <div class="p-5 border color-bg-secondary">Item 2</div>
  <div class="p-5 border color-bg-secondary">Item 3</div>
</div>
```

### Example using `.flex-row-reverse`

This example uses the responsive variant `.flex-sm-row-reverse` to override `.flex-column` Learn more about responsive flexbox utilities **[here](#responsive-flex-utilities)**. Keep in mind that it won't affect screen readers or navigating with the keyboard and it's advised to keep the markup in a logical source order.

```html live
<div class="border d-flex flex-column flex-sm-row-reverse">
  <div class="p-5 border color-bg-secondary">Item 1</div>
  <div class="p-5 border color-bg-secondary">Item 2</div>
  <div class="p-5 border color-bg-secondary">Item 3</div>
</div>
```

## Flex wrap

You can choose whether flex items are forced into a single line or wrapped onto multiple lines.

### CSS

```css
.flex-wrap           { flex-wrap: wrap; }
.flex-nowrap         { flex-wrap: nowrap; }
.flex-wrap-reverse   { flex-wrap: wrap-reverse; }
```

### Classes

| Class | Description |
| --- | --- |
| `.flex-wrap` | Flex items will break onto multiple lines (default) |
| `.flex-nowrap` | Flex items are laid out in a single line, even if they overflow |
| `.flex-wrap-reverse` | Behaves the same as wrap but cross-start and cross-end are permuted. |

### `flex-wrap` example

```html live
<div class="border d-flex flex-wrap">
  <div class="p-5 px-6 border color-bg-secondary">1</div>
  <div class="p-5 px-6 border color-bg-secondary">2</div>
  <div class="p-5 px-6 border color-bg-secondary">3</div>
  <div class="p-5 px-6 border color-bg-secondary">4</div>
  <div class="p-5 px-6 border color-bg-secondary">5</div>
  <div class="p-5 px-6 border color-bg-secondary">6</div>
  <div class="p-5 px-6 border color-bg-secondary">7</div>
  <div class="p-5 px-6 border color-bg-secondary">8</div>
  <div class="p-5 px-6 border color-bg-secondary">9</div>
</div>
```

### `flex-nowrap` example

```html live
<div class="border d-flex flex-nowrap">
  <div class="p-5 px-6 border color-bg-secondary">1</div>
  <div class="p-5 px-6 border color-bg-secondary">2</div>
  <div class="p-5 px-6 border color-bg-secondary">3</div>
  <div class="p-5 px-6 border color-bg-secondary">4</div>
  <div class="p-5 px-6 border color-bg-secondary">5</div>
  <div class="p-5 px-6 border color-bg-secondary">6</div>
  <div class="p-5 px-6 border color-bg-secondary">7</div>
  <div class="p-5 px-6 border color-bg-secondary">8</div>
  <div class="p-5 px-6 border color-bg-secondary">9</div>
</div>
```

### `flex-wrap-reverse` example

```html live
<div class="border d-flex flex-wrap-reverse">
  <div class="p-5 px-6 border color-bg-secondary">1</div>
  <div class="p-5 px-6 border color-bg-secondary">2</div>
  <div class="p-5 px-6 border color-bg-secondary">3</div>
  <div class="p-5 px-6 border color-bg-secondary">4</div>
  <div class="p-5 px-6 border color-bg-secondary">5</div>
  <div class="p-5 px-6 border color-bg-secondary">6</div>
  <div class="p-5 px-6 border color-bg-secondary">7</div>
  <div class="p-5 px-6 border color-bg-secondary">8</div>
  <div class="p-5 px-6 border color-bg-secondary">9</div>
</div>
```

## Justify content

Use these classes to distribute space between and around flex items along the **main axis** of the container.

### CSS

```CSS
.flex-justify-start    { justify-content: flex-start; }
.flex-justify-end      { justify-content: flex-end; }
.flex-justify-center   { justify-content: center; }
.flex-justify-between  { justify-content: space-between; }
.flex-justify-around   { justify-content: space-around; }
```

### Classes

| Class | Default behavior |
| --- | --- |
| `.flex-justify-start` | Justify all items to the left |
| `.flex-justify-end` | Justify all items to the right |
| `.flex-justify-center` | Justify items to the center of the container |
| `.flex-justify-between` | Distribute items evenly. First item is on the start line, last item is on the end line. |
| `.flex-justify-around` | Distribute items evenly with equal space around them |

### flex-justify-start

Use `.flex-justify-start` to align items to the start line. By default this will be on the left side of the container. If you are using `.flex-column`, the start line will be at the top of the container.

```html live
<div class="border d-flex flex-justify-start">
  <div class="p-5 border color-bg-secondary">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary">3</div>
</div>
```

### flex-justify-end

Use `.flex-justify-end` to align items to the end line. By default this will be on the right side of the container. If you are using `.flex-column`, the end line will be at the bottom of the container.

```html live
<div class="border d-flex flex-justify-end">
 <div class="p-5 border color-bg-secondary">1</div>
 <div class="p-5 border color-bg-secondary">2</div>
 <div class="p-5 border color-bg-secondary">3</div>
</div>
```

### flex-justify-center

Use `.flex-justify-center` to align items in the middle of the container.

```html live
<div class="border d-flex flex-justify-center">
 <div class="p-5 border color-bg-secondary">1</div>
 <div class="p-5 border color-bg-secondary">2</div>
 <div class="p-5 border color-bg-secondary">3</div>
</div>
```

### flex-justify-between

Use `.flex-justify-between` to distribute items evenly in the container. The first items will be on the start line and the last item will be on the end line.

```html live
<div class="border d-flex flex-justify-between">
 <div class="p-5 border color-bg-secondary">1</div>
 <div class="p-5 border color-bg-secondary">2</div>
 <div class="p-5 border color-bg-secondary">3</div>
</div>
```

### flex-justify-around

Use `.flex-justify-around` to distribute items evenly, with an equal amount of space around them. Visually the spaces won't look equal, since each item has the same unit of space around it. For example, the first item only has one unit of space between it and the start line, but it has two units of space between it and the next item.

```html live
<div class="border d-flex flex-justify-around">
 <div class="p-5 border color-bg-secondary">1</div>
 <div class="p-5 border color-bg-secondary">2</div>
 <div class="p-5 border color-bg-secondary">3</div>
</div>
```

## Align items

Use these classes to align items on the **cross axis**.

The cross axis runs perpendicular to the main axis. By default the main axis runs horizontally, so your items will align vertically on the cross axis. If you use [flex-column](#flex-direction) to make the main axis run vertically, your items will be aligned horizontally.

### CSS

```css
.flex-items-start      { align-items: flex-start; }
.flex-items-end        { align-items: flex-end; }
.flex-items-center     { align-items: center; }
.flex-items-baseline   { align-items: baseline; }
.flex-items-stretch    { align-items: stretch; }
```

### Classes

| Class | Behavior |
| --- | --- |
| `.flex-items-start` | Align items to the start of the cross axis  |
| `.flex-items-end` | Align items to the end of the cross axis |
| `.flex-items-center` | Align items to the center of the cross axis |
| `.flex-items-baseline` | Align items along their baselines |
| `.flex-items-stretch` | Stretch items from start of cross axis to end of cross axis |

### flex-items-start

```html live
<div  style="min-height: 150px;" class="border d-flex flex-items-start">
  <div class="p-5 border color-bg-secondary">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary">3</div>
  <div class="p-5 border color-bg-secondary">4</div>
</div>
```

### flex-items-end

```html live
<div  style="min-height: 150px;" class="border d-flex flex-items-end">
  <div class="p-5 border color-bg-secondary">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary">3</div>
  <div class="p-5 border color-bg-secondary">4</div>
</div>
```

### flex-items-center

```html live
<div  style="min-height: 150px;" class="border d-flex flex-items-center">
  <div class="p-5 border color-bg-secondary">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary">3</div>
  <div class="p-5 border color-bg-secondary">4</div>
</div>
```

### flex-items-baseline

With `.flex-items-baseline`, items will be aligned along their baselines even if they have different font sizes.

```html live
<div  style="min-height: 150px;" class="border d-flex flex-items-baseline">
  <div class="p-5 border color-bg-secondary f1">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary f3">3</div>
  <div class="p-5 border color-bg-secondary">4</div>
</div>
```

### flex-items-stretch

```html live
<div  style="min-height: 150px;" class="border d-flex flex-items-stretch">
  <div class="p-5 border color-bg-secondary">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary">3</div>
  <div class="p-5 border color-bg-secondary">4</div>
</div>
```

## Align content

When the main axis wraps, this creates multiple main axis lines and adds extra space in the cross axis. Use these classes to align the lines of the main axis on the cross axis.

### CSS

```css
.flex-content-start    { align-content: flex-start; }
.flex-content-end      { align-content: flex-end; }
.flex-content-center   { align-content: center; }
.flex-content-between  { align-content: space-between; }
.flex-content-around   { align-content: space-around; }
.flex-content-stretch  { align-content: stretch; }
```

### Classes

| Class | Description |
| --- | --- |
| `.flex-content-start` | Align content to the start of the cross axis  |
| `.flex-content-end` | Align content to the end of the cross axis |
| `.flex-content-center` | Align content to the center of the cross axis |
| `.flex-content-between` | Distribute content evenly. First line is on the start of the cross axis, last line is on the end of the cross axis.  |
| `.flex-content-around` | Stretch items from the start of the cross axis to the end of the cross axis. |
| `.flex-content-stretch` | Lines stretch to occupy available space.  |

### flex-content-start

```html live
<div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-start">
  <div class="p-5 border color-bg-secondary">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary">3</div>
  <div class="p-5 border color-bg-secondary">4</div>
  <div class="p-5 border color-bg-secondary">5</div>
  <div class="p-5 border color-bg-secondary">6</div>
  <div class="p-5 border color-bg-secondary">7</div>
  <div class="p-5 border color-bg-secondary">8</div>
  <div class="p-5 border color-bg-secondary">9</div>
  <div class="p-5 border color-bg-secondary">10</div>
  <div class="p-5 border color-bg-secondary">11</div>
  <div class="p-5 border color-bg-secondary">12</div>
</div>
```

### flex-content-end

```html live
<div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-end">
  <div class="p-5 border color-bg-secondary">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary">3</div>
  <div class="p-5 border color-bg-secondary">4</div>
  <div class="p-5 border color-bg-secondary">5</div>
  <div class="p-5 border color-bg-secondary">6</div>
  <div class="p-5 border color-bg-secondary">7</div>
  <div class="p-5 border color-bg-secondary">8</div>
  <div class="p-5 border color-bg-secondary">9</div>
  <div class="p-5 border color-bg-secondary">10</div>
  <div class="p-5 border color-bg-secondary">11</div>
  <div class="p-5 border color-bg-secondary">12</div>
</div>
```

### flex-content-center

```html live
<div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-center">
  <div class="p-5 border color-bg-secondary">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary">3</div>
  <div class="p-5 border color-bg-secondary">4</div>
  <div class="p-5 border color-bg-secondary">5</div>
  <div class="p-5 border color-bg-secondary">6</div>
  <div class="p-5 border color-bg-secondary">7</div>
  <div class="p-5 border color-bg-secondary">8</div>
  <div class="p-5 border color-bg-secondary">9</div>
  <div class="p-5 border color-bg-secondary">10</div>
  <div class="p-5 border color-bg-secondary">11</div>
  <div class="p-5 border color-bg-secondary">12</div>
</div>
```

### flex-content-between

```html live
<div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-between">
  <div class="p-5 border color-bg-secondary">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary">3</div>
  <div class="p-5 border color-bg-secondary">4</div>
  <div class="p-5 border color-bg-secondary">5</div>
  <div class="p-5 border color-bg-secondary">6</div>
  <div class="p-5 border color-bg-secondary">7</div>
  <div class="p-5 border color-bg-secondary">8</div>
  <div class="p-5 border color-bg-secondary">9</div>
  <div class="p-5 border color-bg-secondary">10</div>
  <div class="p-5 border color-bg-secondary">11</div>
  <div class="p-5 border color-bg-secondary">12</div>
</div>
```

### flex-content-around

```html live
<div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-around">
  <div class="p-5 border color-bg-secondary">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary">3</div>
  <div class="p-5 border color-bg-secondary">4</div>
  <div class="p-5 border color-bg-secondary">5</div>
  <div class="p-5 border color-bg-secondary">6</div>
  <div class="p-5 border color-bg-secondary">7</div>
  <div class="p-5 border color-bg-secondary">8</div>
  <div class="p-5 border color-bg-secondary">9</div>
  <div class="p-5 border color-bg-secondary">10</div>
  <div class="p-5 border color-bg-secondary">11</div>
  <div class="p-5 border color-bg-secondary">12</div>
</div>
```

### flex-content-stretch

```html live
<div style="min-height: 300px;" class="border d-flex flex-wrap flex-content-stretch">
  <div class="p-5 border color-bg-secondary">1</div>
  <div class="p-5 border color-bg-secondary">2</div>
  <div class="p-5 border color-bg-secondary">3</div>
  <div class="p-5 border color-bg-secondary">4</div>
  <div class="p-5 border color-bg-secondary">5</div>
  <div class="p-5 border color-bg-secondary">6</div>
  <div class="p-5 border color-bg-secondary">7</div>
  <div class="p-5 border color-bg-secondary">8</div>
  <div class="p-5 border color-bg-secondary">9</div>
  <div class="p-5 border color-bg-secondary">10</div>
  <div class="p-5 border color-bg-secondary">11</div>
  <div class="p-5 border color-bg-secondary">12</div>
</div>
```

## Flex

Use this class to specify the ability of a flex item to alter its dimensions to fill available space.

```css
.flex-1        { flex: 1; }
.flex-auto     { flex: auto; }
.flex-grow-0   { flex-grow: 0; }
.flex-shrink-0 { flex-shrink: 0; }
```

| Class | Description |
| --- | --- |
| `.flex-1` | Fills available space |
| `.flex-auto` | Fills available space and auto-sizes based on the content |
| `.flex-grow-0` | Prevents growing of a flex item |
| `.flex-shrink-0` | Prevents shrinking of a flex item |

### flex-1

Adding `.flex-1` makes the item grow in size to take up all the space that is available.

```html live
<div class="border d-flex">
  <div class="p-5 border color-bg-secondary">flex item</div>
  <div class="p-5 border color-bg-secondary flex-1">.flex-1</div>
  <div class="p-5 border color-bg-secondary">flex item</div>
</div>
```

Adding `.flex-1` to all flex items results in each item having the same size.

```html live
<div class="border d-flex">
  <div class="p-5 border color-bg-secondary flex-1">.flex-1</div>
  <div class="p-5 border color-bg-secondary flex-1">.flex-1</div>
  <div class="p-5 border color-bg-secondary flex-1">.flex-1</div>
</div>
```

### flex-auto

Using `.flex-auto` fills the available space but also takes the size of the content into account. Type in the editor below to see the effect.

```html live
<div class="border d-flex">
  <div class="p-5 border color-bg-secondary flex-1">.flex-1</div>
  <div class="p-5 border color-bg-secondary flex-auto">.flex-auto with a bit more text</div>
  <div class="p-5 border color-bg-secondary flex-1">.flex-1</div>
</div>
```

### flex-grow-0

Add `.flex-grow-0` to prevent an item from growing. This can be useful when used as a responsive variant. For example to stop growing when the viewport gets wider.

```html live
<div class="border d-flex">
  <div class="p-5 border color-bg-secondary">flex item</div>
  <div class="p-5 border color-bg-secondary flex-auto flex-sm-grow-0">.flex-auto .flex-sm-grow-0</div>
  <div class="p-5 border color-bg-secondary">flex item</div>
</div>
```

### flex-shrink-0

Add `.flex-shrink-0` to prevent an item from shrinking. Note that for example text will not wrap and the flex items start to overflow if there is not enough space.

```html live
<div class="p-2 border d-flex" style="max-width: 340px">
  <div class="p-5 border color-bg-secondary">flex item</div>
  <div class="p-5 border color-bg-secondary flex-shrink-0">.flex-shrink-0</div>
  <div class="p-5 border color-bg-secondary">flex item</div>
</div>
```

## Align self

Use these classes to adjust the alignment of an individual flex item on the cross axis. This overrides any `align-items` property applied to the flex container.

### CSS

```css
.flex-self-auto        { align-self: auto; }
.flex-self-start       { align-self: flex-start; }
.flex-self-end         { align-self: flex-end; }
.flex-self-center      { align-self: center; }
.flex-self-baseline    { align-self: baseline; }
.flex-self-stretch     { align-self: stretch; }
```

### Classes

| Class | Description |
| --- | --- |
| `.flex-self-auto` | Inherit alignment from parent |
| `.flex-self-start` | Align to the start of the cross axis  |
| `.flex-self-end` | Align to the end of the cross axis |
| `.flex-self-center` | Align to center of cross axis |
| `.flex-self-baseline` | Align baseline to the start of the cross axis |
| `.flex-self-stretch` | Stretch item from start of cross axis to end of cross axis. |

### flex-self-auto

```html live
<div style="min-height: 150px;" class="border d-flex">
  <div class="p-5 border color-bg-secondary flex-self-auto">.flex-self-auto</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
</div>
```

### flex-self-start

```html live
<div style="min-height: 150px;" class="border d-flex">
  <div class="p-5 border color-bg-secondary flex-self-start">.flex-self-start</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
</div>
```

### flex-self-end

```html live
<div style="min-height: 150px;" class="border d-flex">
  <div class="p-5 border color-bg-secondary flex-self-end">.flex-self-end</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
</div>
```

### flex-self-center

```html live
<div style="min-height: 150px;" class="border d-flex">
  <div class="p-5 border color-bg-secondary flex-self-center">.flex-self-center</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
</div>
```

### flex-self-baseline

```html live
<div style="min-height: 150px;" class="border d-flex flex-items-end">
  <div class="p-5 border color-bg-secondary flex-self-baseline f4">.flex-self-baseline</div>
  <div class="p-5 border color-bg-secondary f1">item</div>
  <div class="p-5 border color-bg-secondary f00">item</div>
</div>
```

### flex-self-stretch

```html live
<div style="min-height: 150px;" class="border d-flex flex-items-start">
  <div class="p-5 border color-bg-secondary flex-self-stretch">.flex-self-stretch</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
</div>
```

## Order

Use these classes to change the order of flex items. Keep in mind that it won't affect screen readers or navigating with the keyboard and it's advised to keep the markup in a logical source order.

### CSS

```css
.flex-order-1    { order: 1; }
.flex-order-2    { order: 2; }
.flex-order-none { order: inherit; }

```

### Classes

| Class | Description |
| --- | --- |
| `.flex-order-1` | Set order to be 1 |
| `.flex-order-2` | Set order to be 2  |
| `.flex-order-none` | Remove order (typically used with responsive variants) |

### flex-order (1+2)

```html live
<div class="border d-flex">
  <div class="p-5 border color-bg-secondary flex-order-2">1. .flex-order-2</div>
  <div class="p-5 border color-bg-secondary">2.</div>
  <div class="p-5 border color-bg-secondary flex-order-1">3. .flex-order-1</div>
</div>
```

### flex-order-none

Resize window to see the effect.

```html live
<div class="border d-flex">
  <div class="p-5 border color-bg-secondary flex-order-1 flex-sm-order-none">1. .flex-order-1 .flex-sm-order-none</div>
  <div class="p-5 border color-bg-secondary">2.</div>
  <div class="p-5 border color-bg-secondary">3.</div>
</div>
```

## Responsive flex utilities

All flexbox utilities can be adjusted per [breakpoint](/objects/grid#breakpoints) using the following formulas:

- `d-[breakpoint]-[property]` for `display`
- `flex-[breakpoint]-[property]-[behavior]` for various flex properties

Each responsive style is applied to the specified breakpoint and up.

### Example classes

```css
/* Example classes */

.d-sm-flex {}
.d-md-inline-flex {}

.flex-lg-row {}
.flex-xl-column {}

.flex-sm-wrap {}
.flex-lg-nowrap {}

.flex-lg-self-start {}
```

### Example usage

Mixing flex properties:

```html live
<div style="min-height: 150px;" class="border d-flex flex-items-start flex-sm-items-center flex-justify-start flex-lg-justify-between">
  <div class="p-5 border color-bg-secondary flex-sm-self-stretch">.flex-self-stretch</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
  <div class="p-5 border color-bg-secondary">&nbsp;</div>
</div>
```

## Example components

The flex utilities can be used to create a number of components. Here are some examples.

### Media object

You can use flex utilities to make a simple media object, like this:

```html live
<div class="border d-flex flex-items-center p-4">
  <div class="p-5 border color-bg-secondary">image</div>
  <p class="pl-4 m-0"><b>Body</b> Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p>
</div>
```

### Responsive media object

Here is an example of a media object that is **vertically centered on large screens**, but converts to a stacked column layout on small screens.

```html live
<div class="border p-3 d-flex flex-column flex-sm-row flex-sm-items-center">
  <div class="pr-0 pr-sm-3 mb-3 mb-sm-0 d-flex flex-justify-center flex-sm-justify-start">
    <img style="max-width:100px; max-height:100px;" src="https://github.com/github.png" />
  </div>
  <div class="d-flex text-center text-sm-left">
    <p><b>Body</b> Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p>
  </div>
  <div class="ml-sm-3 d-flex flex-justify-center">
    <!-- <%= octicon "mark-github", :height => '32' %> -->
    <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
  </div>
</div>
```

## Flexbox bugs

This section lists flexbox bugs that affect [browsers we currently support](https://github.com/primer/css/blob/main/.browserslistrc).

1. **Minimum content sizing of flex items not honored.** Some browsers don't respect flex item size. Instead of respecting the minimum content size, items shrink below their minimum size which can create some undesirable results, such as overflowing text. The workaround is to apply `flex-shrink: 0;` to the items using `d-flex`. This can be applied with the `flex-shrink-0` utility. For more information read [philipwalton/flexbugs](https://github.com/philipwalton/flexbugs#1-minimum-content-sizing-of-flex-items-not-honored).

9. **Some elements can't be flex containers.** Specifically, `<button>`, `<fieldset>`, and `<summary>` elements cannot be styled with `display: flex` in Safari. Instead of using `class="d-flex"` on these elements, you should nest an element within them, e.g. `<summary><div class="d-flex">...</div></summary>`.
