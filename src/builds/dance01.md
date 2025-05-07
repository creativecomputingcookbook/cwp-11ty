---
title: 'Dance01'
thumbnail: '/images/Dance01.png'
shortDesc: 'An interactive dance interface'
meta:
  desc:
    "tbd..."
---

This interactive dance interface uses **button sensors** located on the hands. When a button is pressed, it triggers a gradient color animation on the connected LED strips, creating a synchronized visual response to movement.

<collapsible title="How It Works">

<div class="flex justify-center">
  <div class="relative w-11/12 lg:w-2/3 pb-[56.25%] overflow-hidden">
    <iframe
      src="https://maker.makecode.com/#pub:_TiPHpoWE96yv"
      class="absolute inset-0 w-full h-full"
      frameborder="0"
      sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
    ></iframe>
  </div>
</div>

#### Code Logic Overview

This program waits for the button to be pressed. Once pressed, it triggers a smooth gradient animation on the LED strip by sequentially changing colors across the strip. The loop continuously checks for button input, ensuring that the effect can repeat with each press.
</collapsible>
