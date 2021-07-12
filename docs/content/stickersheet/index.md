---
title: Sticker Sheet
path: stickersheet/
---

### Light/Dark

```html live

<div class="d-flex overflow-x-auto">
  <div class="flex-1 p-4 overflow-x-auto" data-color-mode="light">


<!-- <%= octicon "comment" %> -->
<svg class="octicon octicon-comment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2.5C2.6837 2.5 2.62011 2.52634 2.57322 2.57322C2.52634 2.62011 2.5 2.6837 2.5 2.75V10.25C2.5 10.388 2.612 10.5 2.75 10.5H4.75C4.94891 10.5 5.13968 10.579 5.28033 10.7197C5.42098 10.8603 5.5 11.0511 5.5 11.25V13.44L8.22 10.72C8.36052 10.5793 8.55115 10.5002 8.75 10.5H13.25C13.3163 10.5 13.3799 10.4737 13.4268 10.4268C13.4737 10.3799 13.5 10.3163 13.5 10.25V2.75C13.5 2.6837 13.4737 2.62011 13.4268 2.57322C13.3799 2.52634 13.3163 2.5 13.25 2.5H2.75ZM1 2.75C1 1.784 1.784 1 2.75 1H13.25C14.216 1 15 1.784 15 2.75V10.25C15 10.7141 14.8156 11.1592 14.4874 11.4874C14.1592 11.8156 13.7141 12 13.25 12H9.06L6.487 14.573C6.28324 14.7767 6.02367 14.9153 5.74111 14.9715C5.45854 15.0277 5.16567 14.9988 4.8995 14.8886C4.63333 14.7784 4.40581 14.5917 4.24571 14.3522C4.08561 14.1127 4.0001 13.8311 4 13.543V12H2.75C2.28587 12 1.84075 11.8156 1.51256 11.4874C1.18437 11.1592 1 10.7141 1 10.25V2.75Z"></path></svg> Icon

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="mr-2 Counter">1.5K</span> Counter

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="Label mr-2">Label</span>
<span class="Label mr-2 Label--red"   >Danger</span>
<span class="Label mr-2 Label--green" >Success</span>
<span class="Label mr-2 Label--blue"  >Info</span>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="mr-2 IssueLabel color-bg-info-inverse color-text-white">IssueLabel</span>
<span class="mr-2 IssueLabel IssueLabel--big color-bg-info-inverse color-text-white">IssueLabel</span>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="State mr-2">Default</span>
<span class="State State--green mr-2" title="Status: open">
  <!-- <%= octicon "git-pull-request" %> -->
  <svg class="octicon octicon-git-pull-request" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="css-5lyks0">  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17674 3.07322L9.57318 0.676753C9.73068 0.51926 9.99996 0.630802 9.99996 0.853529V5.64642C9.99996 5.86915 9.73068 5.98069 9.57319 5.8232L7.17674 3.42677C7.07911 3.32914 7.07911 3.17085 7.17674 3.07322ZM3.75 2.5C3.33579 2.5 3 2.83579 3 3.25C3 3.66421 3.33579 4 3.75 4C4.16421 4 4.5 3.66421 4.5 3.25C4.5 2.83579 4.16421 2.5 3.75 2.5ZM1.5 3.25C1.5 2.00736 2.50736 1 3.75 1C4.99264 1 6 2.00736 6 3.25C6 4.22966 5.37389 5.06309 4.5 5.37197V10.628C5.37389 10.9369 6 11.7703 6 12.75C6 13.9926 4.99264 15 3.75 15C2.50736 15 1.5 13.9926 1.5 12.75C1.5 11.7703 2.12611 10.9369 3 10.628V5.37197C2.12611 5.06309 1.5 4.22966 1.5 3.25ZM11 2.5H10V4H11C11.5523 4 12 4.44772 12 5V10.628C11.1261 10.9369 10.5 11.7703 10.5 12.75C10.5 13.9926 11.5074 15 12.75 15C13.9926 15 15 13.9926 15 12.75C15 11.7703 14.3739 10.9369 13.5 10.628V5C13.5 3.61929 12.3807 2.5 11 2.5ZM12 12.75C12 12.3358 12.3358 12 12.75 12C13.1642 12 13.5 12.3358 13.5 12.75C13.5 13.1642 13.1642 13.5 12.75 13.5C12.3358 13.5 12 13.1642 12 12.75ZM3.75 12C3.33579 12 3 12.3358 3 12.75C3 13.1642 3.33579 13.5 3.75 13.5C4.16421 13.5 4.5 13.1642 4.5 12.75C4.5 12.3358 4.16421 12 3.75 12Z"></path></svg>
  Open
</span>
<span class="State State--red mr-2" title="Status: closed">
  <!-- <%= octicon "git-pull-request" %> -->
  <svg class="octicon octicon-git-pull-request" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="css-5lyks0">  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17674 3.07322L9.57318 0.676753C9.73068 0.51926 9.99996 0.630802 9.99996 0.853529V5.64642C9.99996 5.86915 9.73068 5.98069 9.57319 5.8232L7.17674 3.42677C7.07911 3.32914 7.07911 3.17085 7.17674 3.07322ZM3.75 2.5C3.33579 2.5 3 2.83579 3 3.25C3 3.66421 3.33579 4 3.75 4C4.16421 4 4.5 3.66421 4.5 3.25C4.5 2.83579 4.16421 2.5 3.75 2.5ZM1.5 3.25C1.5 2.00736 2.50736 1 3.75 1C4.99264 1 6 2.00736 6 3.25C6 4.22966 5.37389 5.06309 4.5 5.37197V10.628C5.37389 10.9369 6 11.7703 6 12.75C6 13.9926 4.99264 15 3.75 15C2.50736 15 1.5 13.9926 1.5 12.75C1.5 11.7703 2.12611 10.9369 3 10.628V5.37197C2.12611 5.06309 1.5 4.22966 1.5 3.25ZM11 2.5H10V4H11C11.5523 4 12 4.44772 12 5V10.628C11.1261 10.9369 10.5 11.7703 10.5 12.75C10.5 13.9926 11.5074 15 12.75 15C13.9926 15 15 13.9926 15 12.75C15 11.7703 14.3739 10.9369 13.5 10.628V5C13.5 3.61929 12.3807 2.5 11 2.5ZM12 12.75C12 12.3358 12.3358 12 12.75 12C13.1642 12 13.5 12.3358 13.5 12.75C13.5 13.1642 13.1642 13.5 12.75 13.5C12.3358 13.5 12 13.1642 12 12.75ZM3.75 12C3.33579 12 3 12.3358 3 12.75C3 13.1642 3.33579 13.5 3.75 13.5C4.16421 13.5 4.5 13.1642 4.5 12.75C4.5 12.3358 4.16421 12 3.75 12Z"></path></svg>
  Closed
</span>


<div class="my-4"></div><!-- Spacer ------------------------ -->

<button class="mr-2 btn" type="button">Button</button>
<button class="mr-2 btn btn-primary" type="button">Primary</button>
<div class="my-2"></div>
<button class="mr-2 btn btn-outline" type="button">Outline</button>
<button class="mr-2 btn btn-danger" type="button">Danger</button>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<select class="form-select"><option>Select</option><option value="option 2">Option 2</option></select>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<input class="form-control" type="text" placeholder="Input" />

<div class="my-4"></div><!-- Spacer ------------------------ -->

<nav class="subnav d-inline-block v-align-middle mb-0">
  <a class="subnav-item" href="#url" aria-current="page">Filter 1</a>
  <a class="subnav-item" href="#url">Filter 2</a>
</nav>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<div class="tabnav d-inline-block v-align-middle mb-0">
  <nav class="tabnav-tabs">
    <a class="tabnav-tab" href="#url" aria-current="page">Tab 1</a>
    <a class="tabnav-tab" href="#url">Tab 2</a>
    <a class="tabnav-tab" href="#url">Tab 3</a>
  </nav>
</div>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<nav class="UnderlineNav d-inline-block v-align-middle">
  <div class="UnderlineNav-body">
    <button class="UnderlineNav-item" type="button" role="tab" aria-selected="true">Nav 1</button>
    <button class="UnderlineNav-item" role="tab" type="button">Nav 2</button>
    <button class="UnderlineNav-item" role="tab" type="button">Nav 3</button>
  </div>
</nav>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<div class="flash">Flash alert</div>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<div class="Header">
  <div class="Header-item">
    <a href="#" class="Header-link f4 d-flex flex-items-center">
      <!-- <%= octicon "mark-github", class: "mr-2", height: 32 %> -->
      <svg height="32" class="octicon octicon-mark-github mr-2" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      <span>Header</span>
    </a>
  </div>
</div>


  </div><!-- end light -->
  <div class="flex-1 p-4 overflow-x-auto" data-color-mode="dark"><!-- ------------------------ -->



<!-- <%= octicon "comment" %> -->
<svg class="octicon octicon-comment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2.5C2.6837 2.5 2.62011 2.52634 2.57322 2.57322C2.52634 2.62011 2.5 2.6837 2.5 2.75V10.25C2.5 10.388 2.612 10.5 2.75 10.5H4.75C4.94891 10.5 5.13968 10.579 5.28033 10.7197C5.42098 10.8603 5.5 11.0511 5.5 11.25V13.44L8.22 10.72C8.36052 10.5793 8.55115 10.5002 8.75 10.5H13.25C13.3163 10.5 13.3799 10.4737 13.4268 10.4268C13.4737 10.3799 13.5 10.3163 13.5 10.25V2.75C13.5 2.6837 13.4737 2.62011 13.4268 2.57322C13.3799 2.52634 13.3163 2.5 13.25 2.5H2.75ZM1 2.75C1 1.784 1.784 1 2.75 1H13.25C14.216 1 15 1.784 15 2.75V10.25C15 10.7141 14.8156 11.1592 14.4874 11.4874C14.1592 11.8156 13.7141 12 13.25 12H9.06L6.487 14.573C6.28324 14.7767 6.02367 14.9153 5.74111 14.9715C5.45854 15.0277 5.16567 14.9988 4.8995 14.8886C4.63333 14.7784 4.40581 14.5917 4.24571 14.3522C4.08561 14.1127 4.0001 13.8311 4 13.543V12H2.75C2.28587 12 1.84075 11.8156 1.51256 11.4874C1.18437 11.1592 1 10.7141 1 10.25V2.75Z"></path></svg> Icon

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="mr-2 Counter">1.5K</span> Counter

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="Label mr-2">Label</span>
<span class="Label mr-2 Label--red"   >Danger</span>
<span class="Label mr-2 Label--green" >Success</span>
<span class="Label mr-2 Label--blue"  >Info</span>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="mr-2 IssueLabel color-bg-info-inverse color-text-white">IssueLabel</span>
<span class="mr-2 IssueLabel IssueLabel--big color-bg-info-inverse color-text-white">IssueLabel</span>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<span class="State mr-2">Default</span>
<span class="State State--green mr-2" title="Status: open">
  <!-- <%= octicon "git-pull-request" %> -->
  <svg class="octicon octicon-git-pull-request" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="css-5lyks0">  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17674 3.07322L9.57318 0.676753C9.73068 0.51926 9.99996 0.630802 9.99996 0.853529V5.64642C9.99996 5.86915 9.73068 5.98069 9.57319 5.8232L7.17674 3.42677C7.07911 3.32914 7.07911 3.17085 7.17674 3.07322ZM3.75 2.5C3.33579 2.5 3 2.83579 3 3.25C3 3.66421 3.33579 4 3.75 4C4.16421 4 4.5 3.66421 4.5 3.25C4.5 2.83579 4.16421 2.5 3.75 2.5ZM1.5 3.25C1.5 2.00736 2.50736 1 3.75 1C4.99264 1 6 2.00736 6 3.25C6 4.22966 5.37389 5.06309 4.5 5.37197V10.628C5.37389 10.9369 6 11.7703 6 12.75C6 13.9926 4.99264 15 3.75 15C2.50736 15 1.5 13.9926 1.5 12.75C1.5 11.7703 2.12611 10.9369 3 10.628V5.37197C2.12611 5.06309 1.5 4.22966 1.5 3.25ZM11 2.5H10V4H11C11.5523 4 12 4.44772 12 5V10.628C11.1261 10.9369 10.5 11.7703 10.5 12.75C10.5 13.9926 11.5074 15 12.75 15C13.9926 15 15 13.9926 15 12.75C15 11.7703 14.3739 10.9369 13.5 10.628V5C13.5 3.61929 12.3807 2.5 11 2.5ZM12 12.75C12 12.3358 12.3358 12 12.75 12C13.1642 12 13.5 12.3358 13.5 12.75C13.5 13.1642 13.1642 13.5 12.75 13.5C12.3358 13.5 12 13.1642 12 12.75ZM3.75 12C3.33579 12 3 12.3358 3 12.75C3 13.1642 3.33579 13.5 3.75 13.5C4.16421 13.5 4.5 13.1642 4.5 12.75C4.5 12.3358 4.16421 12 3.75 12Z"></path></svg>
  Open
</span>
<span class="State State--red mr-2" title="Status: closed">
  <!-- <%= octicon "git-pull-request" %> -->
  <svg class="octicon octicon-git-pull-request" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="css-5lyks0">  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17674 3.07322L9.57318 0.676753C9.73068 0.51926 9.99996 0.630802 9.99996 0.853529V5.64642C9.99996 5.86915 9.73068 5.98069 9.57319 5.8232L7.17674 3.42677C7.07911 3.32914 7.07911 3.17085 7.17674 3.07322ZM3.75 2.5C3.33579 2.5 3 2.83579 3 3.25C3 3.66421 3.33579 4 3.75 4C4.16421 4 4.5 3.66421 4.5 3.25C4.5 2.83579 4.16421 2.5 3.75 2.5ZM1.5 3.25C1.5 2.00736 2.50736 1 3.75 1C4.99264 1 6 2.00736 6 3.25C6 4.22966 5.37389 5.06309 4.5 5.37197V10.628C5.37389 10.9369 6 11.7703 6 12.75C6 13.9926 4.99264 15 3.75 15C2.50736 15 1.5 13.9926 1.5 12.75C1.5 11.7703 2.12611 10.9369 3 10.628V5.37197C2.12611 5.06309 1.5 4.22966 1.5 3.25ZM11 2.5H10V4H11C11.5523 4 12 4.44772 12 5V10.628C11.1261 10.9369 10.5 11.7703 10.5 12.75C10.5 13.9926 11.5074 15 12.75 15C13.9926 15 15 13.9926 15 12.75C15 11.7703 14.3739 10.9369 13.5 10.628V5C13.5 3.61929 12.3807 2.5 11 2.5ZM12 12.75C12 12.3358 12.3358 12 12.75 12C13.1642 12 13.5 12.3358 13.5 12.75C13.5 13.1642 13.1642 13.5 12.75 13.5C12.3358 13.5 12 13.1642 12 12.75ZM3.75 12C3.33579 12 3 12.3358 3 12.75C3 13.1642 3.33579 13.5 3.75 13.5C4.16421 13.5 4.5 13.1642 4.5 12.75C4.5 12.3358 4.16421 12 3.75 12Z"></path></svg>
  Closed
</span>


<div class="my-4"></div><!-- Spacer ------------------------ -->

<button class="mr-2 btn" type="button">Button</button>
<button class="mr-2 btn btn-primary" type="button">Primary</button>
<div class="my-2"></div>
<button class="mr-2 btn btn-outline" type="button">Outline</button>
<button class="mr-2 btn btn-danger" type="button">Danger</button>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<select class="form-select"><option>Select</option><option value="option 2">Option 2</option></select>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<input class="form-control" type="text" placeholder="Input" />

<div class="my-4"></div><!-- Spacer ------------------------ -->

<nav class="subnav d-inline-block v-align-middle mb-0">
  <a class="subnav-item" href="#url" aria-current="page">Filter 1</a>
  <a class="subnav-item" href="#url">Filter 2</a>
</nav>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<div class="tabnav d-inline-block v-align-middle mb-0">
  <nav class="tabnav-tabs">
    <a class="tabnav-tab" href="#url" aria-current="page">Tab 1</a>
    <a class="tabnav-tab" href="#url">Tab 2</a>
    <a class="tabnav-tab" href="#url">Tab 3</a>
  </nav>
</div>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<nav class="UnderlineNav d-inline-block v-align-middle">
  <div class="UnderlineNav-body">
    <button class="UnderlineNav-item" type="button" role="tab" aria-selected="true">Nav 1</button>
    <button class="UnderlineNav-item" role="tab" type="button">Nav 2</button>
    <button class="UnderlineNav-item" role="tab" type="button">Nav 3</button>
  </div>
</nav>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<div class="flash">Flash alert</div>

<div class="my-4"></div><!-- Spacer ------------------------ -->

<div class="Header">
  <div class="Header-item">
    <a href="#" class="Header-link f4 d-flex flex-items-center">
      <!-- <%= octicon "mark-github", class: "mr-2", height: 32 %> -->
      <svg height="32" class="octicon octicon-mark-github mr-2" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      <span>Header</span>
    </a>
  </div>
</div>



  </div><!-- end dark -->
</div>


<!-- Temporary overrides (don't use in production) -->
<style> .frame-example { padding: 0 !important; } </style>
<link href="https://unpkg.com/@github/details-dialog-element/dist/index.css" rel="stylesheet" />

```
