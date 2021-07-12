---
title: Labels
path: stickersheet/labels
status: Deprecated
source: 'https://github.com/primer/css/tree/main/src/labels'
bundle: labels
---

```html live
<p class="mb-4 col-4">
The base <span class="Label Label--inline"> label </span> component styles the text, adds <span class="Label Label--inline">padding</span> and rounded corners, and a border. Labels come in various themes which apply different colors.
</p>

<div class="mb-4">Hello <span class="Label mr-1">world</span></div>

<div class="mb-2 f6">Hello <span class="Label mr-1">world</span></div>
<div class="mb-2 f5">Hello <span class="Label mr-1">world</span></div>
<div class="mb-2 f4">Hello <span class="Label mr-1">world</span></div>
<div class="mb-2 f3">Hello <span class="Label mr-1">world</span></div>
<div class="mb-2 f2">Hello <span class="Label mr-1">world</span></div>
<div class="mb-2 f1">Hello <span class="Label mr-1">world</span></div>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="Label mr-2 Label--gray">Gray</span>
<span class="Label mr-2">Default</span>
<span class="Label mr-2 Label--gray-darker">Dark gray</span>
<span class="Label mr-2 Label--yellow">Pending</span>
<span class="Label mr-2 Label--orange">Warning</span>
<span class="Label mr-2 Label--red"   >Error</span>
<span class="Label mr-2 Label--green" >Success</span>
<span class="Label mr-2 Label--blue"  >Info</span>

<div class="my-3"></div><!-- Spacer ------------------------ -->

<span class="Label Label--large mr-2 Label--gray">Gray</span>
<span class="Label Label--large mr-2">Default</span>
<span class="Label Label--large mr-2 Label--gray-darker">Dark gray</span>
<span class="Label Label--large mr-2 Label--yellow">Pending</span>
<span class="Label Label--large mr-2 Label--orange">Warning</span>
<span class="Label Label--large mr-2 Label--red"   >Error</span>
<span class="Label Label--large mr-2 Label--green" >Success</span>
<span class="Label Label--large mr-2 Label--blue"  >Info</span>

<hr class="my-4"><!-- Divider ------------------------ -->

<span class="IssueLabel color-bg-info-inverse color-text-white mr-2">Primer</span>
<span class="IssueLabel mr-2" style="background-color: #e5bffc;">
<a class="" href="/primer/css/labels/%F0%9F%90%BB%20Next" style="color: #000000;"><g-emoji class="g-emoji" alias="bear" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f43b.png">🐻</g-emoji> Next</a>
</span>

<div class="my-3"></div><!-- Spacer ------------------------ -->

<span class="IssueLabel IssueLabel--big color-bg-info-inverse color-text-white mr-2">Primer</span>
<span class="IssueLabel IssueLabel--big mr-2" style="background-color: #e5bffc;">
<a class="" href="/primer/css/labels/%F0%9F%90%BB%20Next" style="color: #000000;"><g-emoji class="g-emoji" alias="bear" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f43b.png">🐻</g-emoji> Next</a>
</span>
```

### States

```html live
<span class="State mr-2">Default</span>
<span class="State State--green mr-2">
  <!-- <%= octicon "git-pull-request" %> -->
  <svg class="octicon octicon-git-pull-request" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="css-5lyks0">  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17674 3.07322L9.57318 0.676753C9.73068 0.51926 9.99996 0.630802 9.99996 0.853529V5.64642C9.99996 5.86915 9.73068 5.98069 9.57319 5.8232L7.17674 3.42677C7.07911 3.32914 7.07911 3.17085 7.17674 3.07322ZM3.75 2.5C3.33579 2.5 3 2.83579 3 3.25C3 3.66421 3.33579 4 3.75 4C4.16421 4 4.5 3.66421 4.5 3.25C4.5 2.83579 4.16421 2.5 3.75 2.5ZM1.5 3.25C1.5 2.00736 2.50736 1 3.75 1C4.99264 1 6 2.00736 6 3.25C6 4.22966 5.37389 5.06309 4.5 5.37197V10.628C5.37389 10.9369 6 11.7703 6 12.75C6 13.9926 4.99264 15 3.75 15C2.50736 15 1.5 13.9926 1.5 12.75C1.5 11.7703 2.12611 10.9369 3 10.628V5.37197C2.12611 5.06309 1.5 4.22966 1.5 3.25ZM11 2.5H10V4H11C11.5523 4 12 4.44772 12 5V10.628C11.1261 10.9369 10.5 11.7703 10.5 12.75C10.5 13.9926 11.5074 15 12.75 15C13.9926 15 15 13.9926 15 12.75C15 11.7703 14.3739 10.9369 13.5 10.628V5C13.5 3.61929 12.3807 2.5 11 2.5ZM12 12.75C12 12.3358 12.3358 12 12.75 12C13.1642 12 13.5 12.3358 13.5 12.75C13.5 13.1642 13.1642 13.5 12.75 13.5C12.3358 13.5 12 13.1642 12 12.75ZM3.75 12C3.33579 12 3 12.3358 3 12.75C3 13.1642 3.33579 13.5 3.75 13.5C4.16421 13.5 4.5 13.1642 4.5 12.75C4.5 12.3358 4.16421 12 3.75 12Z"></path></svg>
  Open
</span>
<span class="State State--red mr-2">
  <!-- <%= octicon "git-pull-request" %> -->
  <svg class="octicon octicon-git-pull-request" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="css-5lyks0">  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17674 3.07322L9.57318 0.676753C9.73068 0.51926 9.99996 0.630802 9.99996 0.853529V5.64642C9.99996 5.86915 9.73068 5.98069 9.57319 5.8232L7.17674 3.42677C7.07911 3.32914 7.07911 3.17085 7.17674 3.07322ZM3.75 2.5C3.33579 2.5 3 2.83579 3 3.25C3 3.66421 3.33579 4 3.75 4C4.16421 4 4.5 3.66421 4.5 3.25C4.5 2.83579 4.16421 2.5 3.75 2.5ZM1.5 3.25C1.5 2.00736 2.50736 1 3.75 1C4.99264 1 6 2.00736 6 3.25C6 4.22966 5.37389 5.06309 4.5 5.37197V10.628C5.37389 10.9369 6 11.7703 6 12.75C6 13.9926 4.99264 15 3.75 15C2.50736 15 1.5 13.9926 1.5 12.75C1.5 11.7703 2.12611 10.9369 3 10.628V5.37197C2.12611 5.06309 1.5 4.22966 1.5 3.25ZM11 2.5H10V4H11C11.5523 4 12 4.44772 12 5V10.628C11.1261 10.9369 10.5 11.7703 10.5 12.75C10.5 13.9926 11.5074 15 12.75 15C13.9926 15 15 13.9926 15 12.75C15 11.7703 14.3739 10.9369 13.5 10.628V5C13.5 3.61929 12.3807 2.5 11 2.5ZM12 12.75C12 12.3358 12.3358 12 12.75 12C13.1642 12 13.5 12.3358 13.5 12.75C13.5 13.1642 13.1642 13.5 12.75 13.5C12.3358 13.5 12 13.1642 12 12.75ZM3.75 12C3.33579 12 3 12.3358 3 12.75C3 13.1642 3.33579 13.5 3.75 13.5C4.16421 13.5 4.5 13.1642 4.5 12.75C4.5 12.3358 4.16421 12 3.75 12Z"></path></svg>
  Closed
</span>

<div class="my-3"></div><!-- Spacer ------------------------ -->

<span class="State State--small mr-2">Default</span>
<span class="State State--small State--green  mr-2">
  <!-- <%= octicon "issue-opened" %> -->
  <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
  Open
</span>
<span class="State State--small State--red mr-2">
  <!-- <%= octicon "issue-closed" %> -->
  <svg class="octicon octicon-issue-closed" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"></path></svg>
  Closed
</span>
```

### Counters

```html live
<span class="Counter mr-1">1</span>
<span class="Counter mr-1 Counter--gray-light">23</span>
<span class="Counter mr-1 Counter--gray">456</span>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<div class="tabnav">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab" aria-current="page">Foo tab <span class="Counter">23</a>
    <a href="#url" class="tabnav-tab">Bar tab</a>
  </nav>
</div>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="Counter mr-1">1.5K</span>
<span class="Counter mr-1">
  <!-- <%= octicon "comment" %> -->
  <svg class="octicon octicon-comment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2.5C2.6837 2.5 2.62011 2.52634 2.57322 2.57322C2.52634 2.62011 2.5 2.6837 2.5 2.75V10.25C2.5 10.388 2.612 10.5 2.75 10.5H4.75C4.94891 10.5 5.13968 10.579 5.28033 10.7197C5.42098 10.8603 5.5 11.0511 5.5 11.25V13.44L8.22 10.72C8.36052 10.5793 8.55115 10.5002 8.75 10.5H13.25C13.3163 10.5 13.3799 10.4737 13.4268 10.4268C13.4737 10.3799 13.5 10.3163 13.5 10.25V2.75C13.5 2.6837 13.4737 2.62011 13.4268 2.57322C13.3799 2.52634 13.3163 2.5 13.25 2.5H2.75ZM1 2.75C1 1.784 1.784 1 2.75 1H13.25C14.216 1 15 1.784 15 2.75V10.25C15 10.7141 14.8156 11.1592 14.4874 11.4874C14.1592 11.8156 13.7141 12 13.25 12H9.06L6.487 14.573C6.28324 14.7767 6.02367 14.9153 5.74111 14.9715C5.45854 15.0277 5.16567 14.9988 4.8995 14.8886C4.63333 14.7784 4.40581 14.5917 4.24571 14.3522C4.08561 14.1127 4.0001 13.8311 4 13.543V12H2.75C2.28587 12 1.84075 11.8156 1.51256 11.4874C1.18437 11.1592 1 10.7141 1 10.25V2.75Z"></path></svg>
  10
</span>
<span class="Counter mr-1">👍 2</span>
<span class="Counter mr-1 color-bg-danger-inverse color-text-white">22</span>
<span class="Counter mr-1 color-bg-success-inverse color-text-white">22</span>
<span class="Counter mr-1 color-bg-info-inverse color-text-white">22</span>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="Counter mr-1 Counter--gray-light">1</span>
<span class="Counter mr-1">23</span>
<span class="Counter mr-1 Counter--gray">456</span>
<span class="Counter mr-1">1.5K</span>
<div class="my-2"></div>
<span class="Counter Counter--small mr-1 Counter--gray-light">1</span>
<span class="Counter Counter--small mr-1">23</span>
<span class="Counter Counter--small mr-1 Counter--gray">456</span>
<span class="Counter Counter--small mr-1">1.5K</span>
```

### Diffstat

```html live
<span class="diffstat tooltipped tooltipped-e" aria-label="6 changes: 3 additions &amp; 3 deletions">
  6
  <span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-neutral"></span>
</span>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="diffstat">
    <span class="text-green">+7</span>
    <span class="text-red">−2</span>
    <span class="tooltipped tooltipped-e" aria-label="9 lines changed">
      <span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-neutral"></span>
    </span>
</span>
```
