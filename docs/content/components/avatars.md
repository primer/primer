---
title: Avatars
path: components/avatars
status: Stable
source: 'https://github.com/primer/css/tree/main/src/avatars'
bundle: avatars
---

Avatars are images that users can set as their profile picture. On GitHub, they're always going to be rounded squares. They can be custom photos, uploaded by users, or generated as Identicons as a placeholder.

## Basic example

Add `.avatar` to any `<img>` element to make it an avatar. This resets some key styles for alignment, address a Firefox image placeholder bug, and rounds the corners.

Be sure to set `width` and `height` attributes for maximum browser performance.

```html live
<img class="avatar" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=96" width="48" height="48" />
```

### Small avatars

We occasionally use smaller avatars. Anything less than `24px` wide should include the `.avatar-small` modifier class to reset the `border-radius` to a more appropriate level.

```html live
<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" />
```

### Avatar sizes

Instead of using the `width` and `height` attribute, you can also use a class like `.avatar-[1-8]`. The sizes go from `16px` up to `64px`. Note: Avatar stacks are only supported for the `20px` avatar size.

```html live
<img class="avatar avatar-1 mr-2" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=32" />
<img class="avatar avatar-2 mr-2" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" />
<img class="avatar avatar-3 mr-2" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=48" />
<img class="avatar avatar-4 mr-2" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=56" />
<img class="avatar avatar-5 mr-2" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=64" />
<img class="avatar avatar-6 mr-2" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=80" />
<img class="avatar avatar-7 mr-2" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=96" />
<img class="avatar avatar-8 mr-2" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=128" />
```

### Parent-child avatars

When you need a larger parent avatar, and a smaller child one, overlaid slightly, use the parent-child classes.

```html live
<div class="avatar-parent-child d-inline-flex">
  <img class="avatar" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=96" width="48" height="48" />
  <img class="avatar avatar-child" alt="josh" src="https://github.com/josh.png?v=3&s=40" width="20" height="20" />
</div>
```

### Avatar stack

Stacked avatars can be used to show multiple collaborators or participants when there is limited space available. When you hover over the stack, the avatars will reveal themselves.

```html live
<div class="AvatarStack AvatarStack--three-plus">
  <div
    class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
    aria-label="octocat, octocat, and octocat"
  >
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
  </div>
</div>
```

Based on the number of avatars in the stack, add these modifier classes:

- `AvatarStack--two` for 2 avatars.
- `AvatarStack--three-plus` for 3 or more avatars.

If you have more than three avatars, add a div with the classes `avatar avatar-more` as the third avatar in the stack, as such:

```html live
<div class="AvatarStack AvatarStack--three-plus">
  <div
    class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
    aria-label="octocat, octocat, octocat, octocat, and octocat"
  >
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <div class="avatar avatar-more"></div>
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
  </div>
</div>
```

You can also link individual avatars. To do this shift the `avatar` class over to the anchor:

```html live
<div class="AvatarStack AvatarStack--two">
  <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat and octocat">
    <a href="#" class="avatar">
      <img
        height="20"
        alt="@octocat"
        src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
        width="20"
      />
    </a>
    <a href="#" class="avatar">
      <img
        height="20"
        alt="@octocat"
        src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
        width="20"
      />
    </a>
  </div>
</div>
```

Use `AvatarStack--right` to right-align the avatar stack. Remember to switch the alignment of tooltips when making this change.

```html live
<div class="AvatarStack AvatarStack--three-plus AvatarStack--right">
  <div
    class="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1"
    aria-label="octocat, octocat, and octocat"
  >
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
  </div>
</div>
```

## Circle badge

`.CircleBadge` allows for the display of badge-like icons or logos. They are used mostly with Octicons or partner integration icons.

`.CircleBadge` should have an `aria-label`, `title` (for a link), or an `alt` (for child `img` elements) attribute specified if there is no text-based alternative to describe it. If there is a text-based alternative or the icon has no semantic value, `aria-hidden="true"` or an empty `alt` attribute may be used.

### Small

```html live
<a class="CircleBadge CircleBadge--small float-left mr-2" href="#small">
  <img src="https://github.com/travis-ci.png"  class="CircleBadge-icon" alt="">
</a>
<a class="CircleBadge CircleBadge--small color-bg-warning-inverse" href="#small">
  <!-- <%= octicon "zap",  class: "CircleBadge-icon color-text-primary" %> -->
  <svg class="CircleBadge-icon color-text-primary octicon octicon-zap" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7 9-9z"></path></svg>
</a>
```

### Medium

```html live
<div class="CircleBadge CircleBadge--medium color-bg-tertiary">
  <img src="https://github.com/travis-ci.png" alt="Travis CI" class="CircleBadge-icon" />
</div>
```

### Large

```html live
<div class="CircleBadge CircleBadge--large">
  <img src="https://github.com/travis-ci.png" alt="Travis CI" class="CircleBadge-icon" />
</div>
```

### Dashed connection

For specific cases where two badges or more need to be shown as related or connected (such as integrations or specific product workflows), a `DashedConnection` class was created. Use utility classes to ensure badges are spaced correctly.

```html live
<div class="DashedConnection">
  <ul class="d-flex list-style-none flex-justify-between" aria-label="A sample GitHub workflow">
    <li class="CircleBadge CircleBadge--small" aria-label="GitHub">
      <!-- <%= octicon "mark-github", class: "width-full height-full" %> -->
      <svg class="octicon octicon-mark-github width-full height-full" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
    </li>

    <li class="CircleBadge CircleBadge--small" aria-label="Slack">
        <img src="https://github.com/slackhq.png"  alt="" class="CircleBadge-icon">
    </li>

    <li class="CircleBadge CircleBadge--small" aria-label="Travis CI">
        <img src="https://github.com/travis-ci.png"  alt="" class="CircleBadge-icon">
    </li>
  </ul>
</div>
```
