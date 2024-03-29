---
layout: case-study
title: ConnectOurKids
description: Building mobile tools for social workers.
preview: /assets/images/connect-our-kids/hero.png
hero: /assets/images/connect-our-kids/hero.png
brief: |
  ConnectOurKids is an organization that aims to connect foster children with a permanent home. Their organization provides free tools to social workers to help expedite their work.

  Our team was tasked with taking the main tools and features of the ConnectOurKids website and converting them into a mobile app. We had weekly meetings with the CTO of ConnectOurKids.
timeline: "Dec 2019 &ndash; Feb 2020"
website:
  text: connectourkids.org
  href: https://connectourkids.org
next_project: work/visual-cognition-lab.md
---

## How do social workers use ConnectOurKids?

Before jumping into designing mobile layouts it was necessary to define the product that ConnectOurKids provides. By exploring features on the website and using information given to our team by the CTO we were able to identify the 4 main ways social workers utilize the ConnectOurKids tools:

<div class="md:col-start-3 md:col-span-8 grid grid-cols-2 md:grid-cols-4 grid-auto-rows-fr gap-y-4 my-8 md:my-32 text-center">
  {%
    include
    icon-center.html
    src="/assets/images/icons/search.png"
    title="Search databases"
  %}
  {%
    include
    icon-center.html
    src="/assets/images/icons/document.png"
    title="Document activity"
  %}
  {%
    include
    icon-center.html
    src="/assets/images/icons/edit.png"
    title="Edit contact information"
  %}
  {%
    include
    icon-center.html
    src="/assets/images/icons/team.png"
    title="Team communication"
  %}
</div>

## Reviewing existing designs

The desktop tools were reviewed in-depth to make sure we transferred all necessary components. For each feature of the ConnectOurKids website notes were made of the layout, typography, colors, and flows. This review helped us brainstorm ways to convert the layout to mobile and find areas to incorporate improvements in the designs. Here are the desktop versions of the two main tools:

{%
  include
  img-lg.html
  src="/assets/images/connect-our-kids/people-search.png"
  alt="TODO"
  title="People search"
  caption="People Search is the way social workers find the extended family of foster children. Potential candidates for a permanent home can be located through here"
%}

{%
  include
  img-lg.html
  src="/assets/images/connect-our-kids/family-connections.png"
  alt="TODO"
  title="Family Connections"
  caption="A family connection is anybody related to a foster child that has the potential to be a permanent guardian. The Family Connections tab contains the files and any other associated information for a foster child. Social workers can log past engagements, upload documents, and edit contact details here."
%}

## New design system

Our interface choices were based on the design elements already present on the website. We did not want to reinvent the wheel and have the app's UI vary drastically. So, to keep the experience similar between the website and mobile app we used the same copy, color schemes, typeface, and navigation layout as much as possible. Although, some of these aspects were changed to improve overall consistency, clarity, and hierarchy.

<p class="text-white font-bold mt-12">Our goals for creating a new design system were to:</p>
* Create components that could transfer to desktop easily
* Reduce unnecessary text and color styles
* Have consistent UI across all tools

{%
  include
  img-lg.html
  src="/assets/images/connect-our-kids/design-system.png"
  alt="TODO"
%}

## Creating a mobile experience

Taking into account all notes made from the website review and the updated design system we were able to craft the mobile experience. Inconsistent navigation UI across pages, font colors, and several shades of blue were updated with reusable components and fewer styles.

<div class="md:col-start-2 md:col-span-10 grid grid-cols-1 md:grid-cols-2 grid-auto-rows-auto md:grid-rows-4 gap-x-18 gap-y-20 my-32">
  <div class="md:row-start-1 md:row-span-2">
    {%
      include
      figure-custom.html
      classes="bg-white py-16 px-16 mb-2"
      src="/assets/images/connect-our-kids/people-search.gif"
      alt="TODO"
      title="People Search"
      caption="Search results are displayed in a pop up allowing for a quick return back to the search home. The tutorial button was redesigned to have better visibility."
    %}
  </div>
  <div class="md:row-start-2 md:row-span-2">
    {%
      include
      figure-custom.html
      classes="bg-white py-16 px-16 mb-2"
      src="/assets/images/connect-our-kids/edit-family-connections.gif"
      alt="TODO"
      title="Editing Family Connections"
      caption="The Family Connections section contains all information related to contacts for a foster child. The information in the editing screen was divided into sections to make finding particular information faster."
    %}
  </div>
  <div class="md:row-start-3 md:row-span-2">
    {%
      include
      figure-custom.html
      classes="bg-white py-16 px-16 mb-2"
      src="/assets/images/connect-our-kids/organizing-family-connections.gif"
      alt="TODO"
      title="Organizing Family Connections"
      caption="This is a new feature we designed exclusively for the mobile app. A color filtering system was put in place to make identifying different types of family candidates easier."
    %}
  </div>
</div>

## Measuring success

How do we know if the app is providing value? These are some metrics that I would want to look into after the app has been released to determine how much value social workers are getting out of the app:

<div class="md:col-start-3 md:col-span-8 grid grid-cols-1 md:grid-cols-2 grid-auto-rows-auto md:grid-rows-2 gap-x-20 gap-y-20 my-32">
  <div class="md:col-start-1 md:col-span-1">
    {%
      include
      icon-left.html
      src="/assets/images/icons/percent.png"
      title="Permanency percentage"
      caption="A child being placed into a permanent home is the ultimate goal. Broader reach and mobile tools will hopefully result in a more efficient workflow. Comparing the numbers for the percentage of foster children placed into permanent homes before and after the release of the app can give us a clear idea of how effective the app is."
    %}
  </div>
  <div class="md:col-start-2 md:col-span-1">
    {%
      include
      icon-left.html
      src="/assets/images/icons/number.png"
      title="Family connections discovered"
      caption="With social workers having access to family connections in a mobile setting we would expect an increase in the number of family connections."
    %}
  </div>
  <div class="md:col-start-1 md:col-span-2">
    {%
      include
      icon-left.html
      src="/assets/images/icons/thumb.png"
      title="Social worker feedback"
      caption="App reviews can provide useful insight into how the tools are being used. Are they providing value/making social worker’s jobs easier? Is there room for improvement in terms of functionality? Of course, we would want to see all positive reviews, but the negative reviews will reveal pain points that users are having and allow for the improvement of the app."
    %}
  </div>
</div>

## Future directions

Moving forward and thinking about ConnectOurKids as a whole I think a good direction would be to update the website to the same level of design consistency as the app. The issues found regarding color schemes, typography, reusable components, and interactions on the website were left untouched on the website.

Updating the desktop tools will create a more consistent experience between desktop and mobile which would hopefully translate into an easier workflow for social workers.

{%
  include
  img-full.html
  src="/assets/images/connect-our-kids/final-screens.png"
  alt="TODO"
%}

{%
  include
  img-full.html
  src="/assets/images/connect-our-kids/app-store.png"
  alt="TODO"
%}
