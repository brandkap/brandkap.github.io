---
layout: case-study
title: Firehose
description: Building mobile tools for social workers.
preview: /assets/images/firehose.png
hero: /assets/images/firehose.png
brief: |
    This is the project brief that will show below the hero image.

    This is also part of the brief.
timeline: "Jan 1970 &ndash; Jan 2038"
---

## Section Header

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in maximus elit. Donec mollis rhoncus ipsum, eget aliquam tortor auctor ac. Donec ut elit ac nunc faucibus condimentum. Vivamus dignissim elit at aliquam facilisis. Cras porta feugiat volutpat. Phasellus laoreet, nibh non ullamcorper semper, justo dolor faucibus purus, at euismod justo erat ac mi. Nam nec tortor efficitur nisi vehicula efficitur. Morbi porta ex ut purus vestibulum, quis efficitur urna tempor. Donec iaculis massa orci, non venenatis nunc dictum nec. Donec justo mauris, lobortis viverra vestibulum sit amet, vulputate eget justo. Sed consectetur neque felis, nec elementum libero fringilla quis. Donec ut mauris pretium, hendrerit libero at, interdum nibh.

Nam volutpat cursus posuere. Donec pellentesque molestie leo, eget posuere tortor. Etiam eget mi tristique, placerat orci vitae, lacinia dolor. Nunc congue, nibh sed eleifend blandit, dui velit consectetur augue, ornare eleifend purus nisi ut felis. Suspendisse condimentum odio ut justo facilisis, et convallis eros hendrerit. Nulla bibendum nunc vel nisl bibendum, eu aliquam arcu dignissim. Pellentesque aliquam mi arcu, porttitor aliquet nibh rutrum nec. Praesent malesuada aliquet molestie. In in egestas ex. Nullam quam augue, efficitur sit amet venenatis quis, feugiat in nisl. Quisque viverra gravida tortor. Cras malesuada non quam ultrices blandit. Aliquam purus est, ultricies a mauris quis, rhoncus scelerisque nisl. In nec ligula enim. Mauris convallis faucibus magna eget scelerisque.

## Examples

Below is a full-width image without a caption.

{%
  include
  img-lg.html
  src="/assets/images/date-picker-flow.png"
  alt="This is the text to show if the image doesn't load."
%}

Below is a full-width image _with_ a caption.  The syntax is weird, but this is the nicest way I had to make it work.

{% capture caption %}
This is the image caption. You can put anything you want in here.  Even **strong** and _emphasized_ text.
{% endcapture %}
{%
  include
  img-lg.html
  src="/assets/images/viscog-research-comparison.png"
  alt="Comparison of old and updated designs"
  title="This is an image title"
  caption=caption
%}

## Another Section Header

More body text.

Reminder that raw HTML is valid Markdown.  So if you need fancy grid stuff, you can do it right here.

<div class="col-start-2 col-span-10 grid grid-cols-2 auto-rows-auto gap-x-4 gap-y-8">
  <div class="p-2 bg-white"><p>Block 1</p></div>
  <div class="p-2 bg-white"><p>Block 2</p></div>
  <div class="p-2 bg-white"><p>Block 3</p></div>
  <div class="p-2 bg-white"><p>Block 4</p></div>
</div>
