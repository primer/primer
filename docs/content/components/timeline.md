---
title: Timeline
path: components/timeline
status: Experimental
status_issue: 'https://github.com/github/design-systems/issues/101'
source: ''
bundle: timeline
---

The `TimelineItem` component is used to display items on a vertical timeline, connected by `TimelineItem-badge` elements.

```html live
<div class="TimelineItem">
  <div class="TimelineItem-badge">
    <!-- octicon("flame") -->
    <svg class="octicon octicon-flame" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg>
  </div>

  <div class="TimelineItem-body">
    <a href="#" class="text-bold link-gray-dark mr-1">Monalisa</a> created one
    <a href="#" class="text-bold link-gray-dark">hot potato</a>
    <a href="#" class="link-gray">Just now</a>
  </div>
</div>
```

## TimelineItem-badge

The default TimelineItem-badge color is dark text on a light gray background.

```html live
<!-- Default TimelineItem Badge -->
<div class="TimelineItem">
  <div class="TimelineItem-badge">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009a1.82 1.82 0 00.35.31c.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371a1.82 1.82 0 00.35-.31l.007-.008a.75.75 0 011.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.989 1.989 0 01-.184.213 3.32 3.32 0 01-.53.445A3.766 3.766 0 018 12c-.946 0-1.652-.308-2.126-.63a3.323 3.323 0 01-.673-.604 1.975 1.975 0 01-.042-.053l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044z"></path>
    </svg>
  </div>
  <div class="TimelineItem-body">
    Default badge color
  </div>
</div>
```

### Adding color to TimelineItem-badge

To have color variants, use the [color utilities](/utilities/colors) on the badge. Be cautious with color choices. We typically use them in the timeline to give meaning to the event in context of the timeline.

```html live
<!-- Colorful TimelineItem Badge -->
<div class="TimelineItem">
  <div class="TimelineItem-badge color-bg-danger-inverse color-text-white">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009a1.82 1.82 0 00.35.31c.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371a1.82 1.82 0 00.35-.31l.007-.008a.75.75 0 011.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.989 1.989 0 01-.184.213 3.32 3.32 0 01-.53.445A3.766 3.766 0 018 12c-.946 0-1.652-.308-2.126-.63a3.323 3.323 0 01-.673-.604 1.975 1.975 0 01-.042-.053l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044z"></path>
    </svg>
  </div>
  <div class="TimelineItem-body">
    Red background used when closed events occur
  </div>
</div>
<div class="TimelineItem">
  <div class="TimelineItem-badge color-bg-success-inverse color-text-white">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009a1.82 1.82 0 00.35.31c.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371a1.82 1.82 0 00.35-.31l.007-.008a.75.75 0 011.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.989 1.989 0 01-.184.213 3.32 3.32 0 01-.53.445A3.766 3.766 0 018 12c-.946 0-1.652-.308-2.126-.63a3.323 3.323 0 01-.673-.604 1.975 1.975 0 01-.042-.053l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044z"></path>
    </svg>
  </div>
  <div class="TimelineItem-body">
    Green background when opened or passed events occur
  </div>
</div>
<!-- TODO: Replace bg-purple in V2
  <div class="TimelineItem">
  <div class="TimelineItem-badge bg-purple text-white">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009a1.82 1.82 0 00.35.31c.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371a1.82 1.82 0 00.35-.31l.007-.008a.75.75 0 011.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.989 1.989 0 01-.184.213 3.32 3.32 0 01-.53.445A3.766 3.766 0 018 12c-.946 0-1.652-.308-2.126-.63a3.323 3.323 0 01-.673-.604 1.975 1.975 0 01-.042-.053l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044z"></path>
    </svg>
  </div>
  <div class="TimelineItem-body">
    Purple background used when pull requests are merged
  </div>
</div> -->
<div class="TimelineItem">
  <div class="TimelineItem-badge color-bg-info-inverse color-text-white">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009a1.82 1.82 0 00.35.31c.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371a1.82 1.82 0 00.35-.31l.007-.008a.75.75 0 011.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.989 1.989 0 01-.184.213 3.32 3.32 0 01-.53.445A3.766 3.766 0 018 12c-.946 0-1.652-.308-2.126-.63a3.323 3.323 0 01-.673-.604 1.975 1.975 0 01-.042-.053l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044z"></path>
    </svg>
  </div>
  <div class="TimelineItem-body">
    Blue background to indicate new events below
  </div>
</div>
```

## TimelineItem--condensed

TimelineItem has a condensed variant that will reduce the vertical padding and remove the background from the badge item. These are most commonly used in commits.

```html live
<div class="TimelineItem TimelineItem--condensed">
  <div class="TimelineItem-badge">
    <svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
      <path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
    </svg>
  </div>
  <div class="TimelineItem-body">
    This is the message of a condensed TimelineItem
  </div>
</div>
<div class="TimelineItem TimelineItem--condensed">
  <div class="TimelineItem-badge">
    <svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
      <path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
    </svg>
  </div>
  <div class="TimelineItem-body">
    This is the message of a condensed TimelineItem
  </div>
</div>
```

## TimelineItem-avatar

Sometimes you want to give ownership to an event by displaying an [Avatar]() of the author. To do this, you'll need to wrap the TimelineItem in a `<div>` and give it space for the avatar. `ml-6 pl-3` This is `40px`, the size of the image, and `16px` space for the gutter.

```html live
<div class="ml-6 pl-3">
  <div class="TimelineItem">
    <div class="TimelineItem-avatar">
      <img class="avatar" height="40" width="40" alt="@octocat"
        src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" />
    </div>

    <div class="TimelineItem-badge">
      <!-- octicon("flame") -->
      <svg class="octicon octicon-flame" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg>
    </div>

    <div class="TimelineItem-body">
      <a href="#" class="text-bold link-gray-dark mr-1">Monalisa</a> created one
      <a href="#" class="text-bold link-gray-dark">hot potato</a>
      <a href="#" class="link-gray">Just now</a>
    </div>
  </div>
</div>
```

## TimelineItem-break

To create a visual break in the timeline, use `TimelineItem-break`. This adds a horizontal bar across the timeline to show that something has disrupted it. Usually this happens when a close or merged event occurs.

```html live
<div class="TimelineItem">
  <div class="TimelineItem-badge color-bg-danger-inverse color-text-white">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009a1.82 1.82 0 00.35.31c.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371a1.82 1.82 0 00.35-.31l.007-.008a.75.75 0 011.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.989 1.989 0 01-.184.213 3.32 3.32 0 01-.53.445A3.766 3.766 0 018 12c-.946 0-1.652-.308-2.126-.63a3.323 3.323 0 01-.673-.604 1.975 1.975 0 01-.042-.053l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044z"></path>
    </svg>
  </div>
  <div class="TimelineItem-body">
    Red background used when closed events occur
  </div>
</div>
<div class="TimelineItem-break ml-0"></div>
<div class="TimelineItem">
  <div class="TimelineItem-badge color-bg-success-inverse color-text-white">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009a1.82 1.82 0 00.35.31c.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371a1.82 1.82 0 00.35-.31l.007-.008a.75.75 0 011.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.989 1.989 0 01-.184.213 3.32 3.32 0 01-.53.445A3.766 3.766 0 018 12c-.946 0-1.652-.308-2.126-.63a3.323 3.323 0 01-.673-.604 1.975 1.975 0 01-.042-.053l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044z"></path>
    </svg>
  </div>
  <div class="TimelineItem-body">
    Green background when opened or passed events occur
  </div>
</div>
```

## Target TimelineItem

```html live
<div class="TimelineItem" id="1">
  <a href="#1" class="TimelineItem-badge">
    <!-- octicon("flame") -->
    <svg class="octicon octicon-flame" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg>
  </a>

  <div class="TimelineItem-body">
    <a href="#" class="text-bold link-gray-dark mr-1">Monalisa</a> created one
    <a href="#" class="text-bold link-gray-dark">hot potato</a>
    <a href="#1" class="link-gray">Just now</a>
  </div>
</div>
```
