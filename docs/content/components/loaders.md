---
title: Loaders
path: components/loaders
status: New
source: 'https://github.com/primer/css/tree/main/src/loaders'
bundle: loaders
---

Loaders inform users that an action is still in progress and might take a while to complete.

## Animated ellipsis

Add an animated ellipsis at the end of text with `<span class="AnimatedEllipsis"></span>`.

```html live
<span>Loading</span><span class="AnimatedEllipsis"></span>
```

It can also be used in combination with other components.

```html live
<h2><span>Loading</span><span class="AnimatedEllipsis"></span></h2>
<span class="branch-name mt-2"><span>Loading</span><span class="AnimatedEllipsis"></span></span><br>
<span class="Label mt-3"><span>Loading</span><span class="AnimatedEllipsis"></span></span><br>
<button class="btn mt-3" aria-disabled="true"><span>Loading</span><span class="AnimatedEllipsis"></span></button>
```
