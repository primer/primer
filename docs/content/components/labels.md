---
title: Labels
path: components/labels
status_issue: 'https://github.com/github/design-systems/issues/332'
status: Stable
source: 'https://github.com/primer/css/tree/main/src/labels'
bundle: labels
---

<Note>
  Please note Primer v16 has changed the naming of these color classes. Check the <a href="/css/support/v16-migration">migration guide</a> to make sure your app is up to date.
</Note>

Labels add metadata or indicate status of items and navigational elements. Three different types of labels are available: [Labels](#default-label-styles) for adding metadata, [States](#states) for indicating status, and [Counters](#counters) for showing the count for a number of items.

## Labels

The base label component styles the text, adds padding and rounded corners, and a border. Labels come in various themes which apply different colors.

GitHub also programmatically generates and applies a background color for labels on items such as issues and pull requests. Users are able to select any background color and the text color will adjust to work with light and dark background colors.

The base `Label` style does not apply a background color and only uses the default border:

```html live
<span class="Label">design</span>
```

### Label contrast

Use `Label--primary` to create a label with a stronger border. This label is also neutral in color, however, since its border is stronger it can stand out more compared to the default `Label`.

Use `Label--secondary` to create a label with a subtler text color. This label is neutral in color and can be used in contexts where all you need to communicate is metadata, or where you want a label to feel less prominent compared with labels with stronger colors.

```html live
<span class="Label">Default</span>
<span class="Label Label--primary ml-1">Primary</span>
<span class="Label Label--secondary ml-1">Secondary</span>
```

### Colored labels

Labels come in a few different functional classes. Use to communicate the content of the label, and ensure it's used consistently.

- `Label--info`
- `Label--success`
- `Label--warning`
- `Label--danger`

```html live
<span class="Label mr-1 Label--info">Info</span>
<span class="Label mr-1 Label--success">Success</span>
<span class="Label mr-1 Label--warning">Warning</span>
<span class="Label mr-1 Label--danger">Danger</span>
```

### Label sizes

If space allows, add the `Label--large` modidfier to add a bit more padding to lables.

```html live
<span class="Label Label--gray-darker mr-1">Default</span>
<span class="Label Label--large Label--gray-darker mr-1">Large</span>
```

### Inline labels

Sometimes when adding a label the line-height can be incrased. Or the parent element increases in height. If that is not desired, use the `Label--inline` modifier change to the `display` property to `inline`. The font-size also adapts.

```html live
<p class="col-4">
  Lorem Ipsum is simply <span class="Label Label--inline">dummy text</span> of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text.
</p>
```

## Issue labels

Issue labels are used for adding labels to issues and pull requests. They also come with emoji support.

```html live
<span class="IssueLabel color-bg-info-inverse color-text-white mr-1">Primer</span>
<span class="IssueLabel color-bg-danger-inverse color-text-white mr-1">bug 🐛</span>
<span class="IssueLabel color-bg-success-inverse color-text-white mr-1">help wanted</span>
<span class="IssueLabel color-bg-warning-inverse color-text-gray-dark mr-1">🚂 deploy: train</span>
```

If an issue label needs to be bigger, add the `.IssueLabel--big` modifier.

```html live
<span class="IssueLabel IssueLabel--big color-bg-info-inverse color-text-white mr-1">Primer</span>
<span class="IssueLabel IssueLabel--big color-bg-danger-inverse color-text-white mr-1">bug 🐛</span>
<span class="IssueLabel IssueLabel--big color-bg-success-inverse color-text-white mr-1">help wanted</span>
<span class="IssueLabel IssueLabel--big color-bg-warning-inverse color-text-gray-dark mr-1">🚂 deploy: train</span>
```

## States

Use state labels to inform users of an items status. States are large labels with bolded text. The default state has a gray background. States come in a few variations that apply different colors. Use the state that best communicates the status or function.

- `State`
- `State State--draft`
- `State State--open`
- `State State--merged`
- `State State--closed`

```html live
<span class="State State--draft mr-2">Draft</span>

<span class="State State--open mr-2">
  <!-- <%= octicon "git-pull-request" %> -->
  <svg class="octicon octicon-git-pull-request" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="css-5lyks0">  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17674 3.07322L9.57318 0.676753C9.73068 0.51926 9.99996 0.630802 9.99996 0.853529V5.64642C9.99996 5.86915 9.73068 5.98069 9.57319 5.8232L7.17674 3.42677C7.07911 3.32914 7.07911 3.17085 7.17674 3.07322ZM3.75 2.5C3.33579 2.5 3 2.83579 3 3.25C3 3.66421 3.33579 4 3.75 4C4.16421 4 4.5 3.66421 4.5 3.25C4.5 2.83579 4.16421 2.5 3.75 2.5ZM1.5 3.25C1.5 2.00736 2.50736 1 3.75 1C4.99264 1 6 2.00736 6 3.25C6 4.22966 5.37389 5.06309 4.5 5.37197V10.628C5.37389 10.9369 6 11.7703 6 12.75C6 13.9926 4.99264 15 3.75 15C2.50736 15 1.5 13.9926 1.5 12.75C1.5 11.7703 2.12611 10.9369 3 10.628V5.37197C2.12611 5.06309 1.5 4.22966 1.5 3.25ZM11 2.5H10V4H11C11.5523 4 12 4.44772 12 5V10.628C11.1261 10.9369 10.5 11.7703 10.5 12.75C10.5 13.9926 11.5074 15 12.75 15C13.9926 15 15 13.9926 15 12.75C15 11.7703 14.3739 10.9369 13.5 10.628V5C13.5 3.61929 12.3807 2.5 11 2.5ZM12 12.75C12 12.3358 12.3358 12 12.75 12C13.1642 12 13.5 12.3358 13.5 12.75C13.5 13.1642 13.1642 13.5 12.75 13.5C12.3358 13.5 12 13.1642 12 12.75ZM3.75 12C3.33579 12 3 12.3358 3 12.75C3 13.1642 3.33579 13.5 3.75 13.5C4.16421 13.5 4.5 13.1642 4.5 12.75C4.5 12.3358 4.16421 12 3.75 12Z"></path></svg>
  Open
</span>

<span class="State State--merged mr-2">
  <!-- <%= octicon "git-merge" %> -->
  <svg class="octicon octicon-git-merge" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="css-5lyks0">  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.254V3.25V3.255C4.99934 3.45369 4.91985 3.64401 4.779 3.78415C4.63815 3.9243 4.44745 4.00283 4.24875 4.0025C4.05006 4.00217 3.85961 3.923 3.71923 3.78239C3.57885 3.64177 3.5 3.45119 3.5 3.2525C3.5 3.0538 3.57885 2.86323 3.71923 2.72261C3.85961 2.58199 4.05006 2.50283 4.24875 2.5025C4.44745 2.50217 4.63815 2.5807 4.779 2.72084C4.91985 2.86099 4.99934 3.0513 5 3.25V3.254ZM5.45 5.154C5.88079 4.8824 6.2067 4.47269 6.37445 3.99186C6.54221 3.51102 6.54188 2.9875 6.37353 2.50687C6.20517 2.02624 5.87875 1.61694 5.44762 1.34588C5.01649 1.07483 4.50616 0.95804 4.00005 1.01462C3.49394 1.0712 3.022 1.2978 2.66137 1.65737C2.30074 2.01695 2.07276 2.48822 2.0147 2.99416C1.95664 3.5001 2.07193 4.01077 2.34173 4.4427C2.61152 4.87462 3.01987 5.20224 3.5 5.372V10.628C2.99931 10.8049 2.57729 11.1532 2.30855 11.6112C2.0398 12.0692 1.94163 12.6075 2.03139 13.1309C2.12114 13.6542 2.39305 14.1291 2.79904 14.4713C3.20503 14.8136 3.71897 15.0014 4.25 15.0014C4.78103 15.0014 5.29496 14.8136 5.70095 14.4713C6.10695 14.1291 6.37885 13.6542 6.46861 13.1309C6.55837 12.6075 6.4602 12.0692 6.19145 11.6112C5.9227 11.1532 5.50069 10.8049 5 10.628V7.123C5.53827 7.71503 6.19447 8.18788 6.92641 8.51114C7.65836 8.8344 8.44985 9.00093 9.25 9H10.628C10.8049 9.50069 11.1532 9.9227 11.6112 10.1915C12.0692 10.4602 12.6075 10.5584 13.1309 10.4686C13.6542 10.3789 14.1291 10.1069 14.4713 9.70096C14.8136 9.29496 15.0014 8.78103 15.0014 8.25C15.0014 7.71897 14.8136 7.20503 14.4713 6.79904C14.1291 6.39305 13.6542 6.12114 13.1309 6.03139C12.6075 5.94163 12.0692 6.0398 11.6112 6.30855C11.1532 6.57729 10.8049 6.99931 10.628 7.5H9.25C8.4613 7.50006 7.68813 7.28066 7.01702 6.86634C6.34592 6.45202 5.80334 5.85912 5.45 5.154ZM12.75 9C12.9489 9 13.1397 8.92098 13.2803 8.78033C13.421 8.63968 13.5 8.44891 13.5 8.25C13.5 8.05109 13.421 7.86032 13.2803 7.71967C13.1397 7.57902 12.9489 7.5 12.75 7.5C12.5511 7.5 12.3603 7.57902 12.2197 7.71967C12.079 7.86032 12 8.05109 12 8.25C12 8.44891 12.079 8.63968 12.2197 8.78033C12.3603 8.92098 12.5511 9 12.75 9ZM4.25 13.5C4.44891 13.5 4.63968 13.421 4.78033 13.2803C4.92098 13.1397 5 12.9489 5 12.75C5 12.5511 4.92098 12.3603 4.78033 12.2197C4.63968 12.079 4.44891 12 4.25 12C4.05109 12 3.86032 12.079 3.71967 12.2197C3.57902 12.3603 3.5 12.5511 3.5 12.75C3.5 12.9489 3.57902 13.1397 3.71967 13.2803C3.86032 13.421 4.05109 13.5 4.25 13.5Z"></path></svg>
  Merged
</span>

<span class="State State--closed mr-2" title="Status: closed">
  <!-- <%= octicon "git-pull-request" %> -->
  <svg class="octicon octicon-git-pull-request" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="css-5lyks0">  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17674 3.07322L9.57318 0.676753C9.73068 0.51926 9.99996 0.630802 9.99996 0.853529V5.64642C9.99996 5.86915 9.73068 5.98069 9.57319 5.8232L7.17674 3.42677C7.07911 3.32914 7.07911 3.17085 7.17674 3.07322ZM3.75 2.5C3.33579 2.5 3 2.83579 3 3.25C3 3.66421 3.33579 4 3.75 4C4.16421 4 4.5 3.66421 4.5 3.25C4.5 2.83579 4.16421 2.5 3.75 2.5ZM1.5 3.25C1.5 2.00736 2.50736 1 3.75 1C4.99264 1 6 2.00736 6 3.25C6 4.22966 5.37389 5.06309 4.5 5.37197V10.628C5.37389 10.9369 6 11.7703 6 12.75C6 13.9926 4.99264 15 3.75 15C2.50736 15 1.5 13.9926 1.5 12.75C1.5 11.7703 2.12611 10.9369 3 10.628V5.37197C2.12611 5.06309 1.5 4.22966 1.5 3.25ZM11 2.5H10V4H11C11.5523 4 12 4.44772 12 5V10.628C11.1261 10.9369 10.5 11.7703 10.5 12.75C10.5 13.9926 11.5074 15 12.75 15C13.9926 15 15 13.9926 15 12.75C15 11.7703 14.3739 10.9369 13.5 10.628V5C13.5 3.61929 12.3807 2.5 11 2.5ZM12 12.75C12 12.3358 12.3358 12 12.75 12C13.1642 12 13.5 12.3358 13.5 12.75C13.5 13.1642 13.1642 13.5 12.75 13.5C12.3358 13.5 12 13.1642 12 12.75ZM3.75 12C3.33579 12 3 12.3358 3 12.75C3 13.1642 3.33579 13.5 3.75 13.5C4.16421 13.5 4.5 13.1642 4.5 12.75C4.5 12.3358 4.16421 12 3.75 12Z"></path></svg>
  Closed
</span>
```

### Small states

Use `State--small` for a state label with reduced padding a smaller font size. This is useful in denser areas of content.

```html live
<span class="State State--small mr-2">Default</span>
<span class="State State--small State--open mr-2">
  <!-- <%= octicon "issue-opened" %> -->
  <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
  Open
</span>
<span class="State State--small State--closed mr-2">
  <!-- <%= octicon "issue-closed" %> -->
  <svg class="octicon octicon-issue-closed" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"></path></svg>
  Closed
</span>
```

## Counters

Use the `Counter` component to add a count to navigational elements and buttons. Counters come in 3 variations:

1. the default `Counter`,
2. the `Counter--primary` with a stronger background color
3. and `Counter--secondary` with a more subtler text color.

Note: When a counter is empty, its visibility will be hidden.

```html live
<span class="Counter mr-1">1</span>
<span class="Counter mr-1 Counter--primary">23</span>
<span class="Counter mr-1 Counter--secondary">456</span>
```

Use the `Counter` in navigation to indicate the number of items without the user having to click through or count the items, such as open issues in a GitHub repo. See more options in [navigation](./navigation).

```html live
<div class="tabnav">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab" aria-current="page">Foo tab <span class="Counter">23</span></a>
    <a href="#url" class="tabnav-tab">Bar tab</a>
  </nav>
</div>
```

You can also have icons and emoji in counters. Or use utilities for counters with different background colors.

```html live
<span class="Counter mr-1">1.5K</span>
<span class="Counter mr-1">
  <!-- <%= octicon "comment" %> -->
  <svg class="octicon octicon-comment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2.5C2.6837 2.5 2.62011 2.52634 2.57322 2.57322C2.52634 2.62011 2.5 2.6837 2.5 2.75V10.25C2.5 10.388 2.612 10.5 2.75 10.5H4.75C4.94891 10.5 5.13968 10.579 5.28033 10.7197C5.42098 10.8603 5.5 11.0511 5.5 11.25V13.44L8.22 10.72C8.36052 10.5793 8.55115 10.5002 8.75 10.5H13.25C13.3163 10.5 13.3799 10.4737 13.4268 10.4268C13.4737 10.3799 13.5 10.3163 13.5 10.25V2.75C13.5 2.6837 13.4737 2.62011 13.4268 2.57322C13.3799 2.52634 13.3163 2.5 13.25 2.5H2.75ZM1 2.75C1 1.784 1.784 1 2.75 1H13.25C14.216 1 15 1.784 15 2.75V10.25C15 10.7141 14.8156 11.1592 14.4874 11.4874C14.1592 11.8156 13.7141 12 13.25 12H9.06L6.487 14.573C6.28324 14.7767 6.02367 14.9153 5.74111 14.9715C5.45854 15.0277 5.16567 14.9988 4.8995 14.8886C4.63333 14.7784 4.40581 14.5917 4.24571 14.3522C4.08561 14.1127 4.0001 13.8311 4 13.543V12H2.75C2.28587 12 1.84075 11.8156 1.51256 11.4874C1.18437 11.1592 1 10.7141 1 10.25V2.75Z"></path></svg>
  10
</span>
<span class="Counter mr-1">👍 2</span>
<span class="Counter mr-1 color-bg-success-inverse color-text-white">22</span>
<span class="Counter mr-1 color-bg-danger-inverse color-text-white">22</span>
<span class="Counter mr-1 color-bg-info-inverse color-text-white">22</span>
```

## Diffstat

Diffstats show how many deletions or additions a diff has. It's typically a row of 5 blocks that get colored with green or red.

```html live
<span class="diffstat tooltipped tooltipped-e" aria-label="6 changes: 3 additions &amp; 3 deletions">
  6
  <span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-neutral"></span>
</span>
```

Use the `text-green` and `text-red` utilities to add additional information about the size of the diff.

```html live
<span class="diffstat">
    <span class="text-green">+7</span>
    <span class="text-red">−2</span>
    <span class="tooltipped tooltipped-e" aria-label="9 lines changed">
      <span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-neutral"></span>
    </span>
</span>
```
