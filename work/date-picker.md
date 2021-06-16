---
layout: case-study
title: DatePicker
description: Speeding up event planning.
preview: /assets/images/date-picker/preview.png
hero: /assets/images/date-picker/hero.png
brief: |
  DatePicker is an event planner that serves as an extension to Google Calendar. Tools for customizable date selection and group collaboration aim to simplify the event planning process.
timeline: Dec 2019 &ndash; Feb 2020
next_project: work/connect-our-kids.md
---

## Where does Google Calendar go wrong?

In the image below, we can see that when creating a custom recurring event in Google Calendar it must fall under a consistent pattern across multiple weeks. Scheduling an event on Monday, Wednesday , and Friday in one week and then Tuesday, Thursday, and Friday in the next week has to be done by creating two completely separate events. This inability to schedule events in an aperiodic format causes major delays in event planning.

{%
  include
  img-lg.html
  src="/assets/images/date-picker/gcal-recurring.png"
  alt="Google Calendar's recurring event workflow"
%}

## Interviews and market research

I began this project with surveys, interviews, and market research to clearly define pain points and what role DatePicker will play in the event planning market. Surveys were given to 32 teachers and coaches which provided data as to what products teachers currently use as their main calendar and how they use these calendars.

{% capture quote %}
I need a way to schedule my basketball practices with custom recurrence s. On my current calendar I can't customize it the way I need to.

**-Craig, basketball coach and teacher**
{% endcapture %}
{% include pull-quote.html quote=quote %}

From the research I concluded that

- Majority of teachers from our sample exclusively use Google Calendars
- DatePicker will not be built to replace Google Calendar, but to complement it
- There is no available solution on the market for this specific problem space

## Allowing custom event planning

I began this project with surveys, interviews, and market research to clearly define pain points and what role DatePicker will play in the event planning market. Surveys were given to 32 teachers and coaches which provided data as to what products teachers currently use as their main calendar and how they use these calendars.

{%
  include
  img-lg.html
  src="/assets/images/date-picker/flow.png"
  alt="The DatePicker workflow for creating a new event"
%}

{%
  include
  img-panel.html
  src="/assets/images/date-picker/selector.gif"
  alt="An animation showing individual date selections in the DatePicker calendar view"
  title="Aperiodic date selection"
  caption="A click and pick date selector solves the main paint point of not being able to schedule aperiodic events."
%}

## Improving interactions

I ran final usability testing with a high fidelity prototype amongst 7 participants that included teachers and coaches. Based on feedback and observations made from this testing I created a few interactions to incorporate into the final designs that have the potential to make DatePicker easier and faster to use.

<div class="md:col-start-2 md:col-span-10 grid grid-cols-1 md:grid-cols-2 grid-auto-rows-auto md:grid-rows-6 gap-x-18 md:gap-y-20 mt-32 md:mb-32">
  <div class="md:row-start-2 md:row-span-4">
    {%
      include
      figure-custom.html
      classes="bg-white py-16 px-16 mb-2"
      src="/assets/images/date-picker/micro-animation.gif"
      alt="An animation showing the save notification without hiding the calendar"
      title="Providing system feedback"
      caption="This animation of the event sliding in from below indicates that an event has successfully been added without the need for a confirmation modal."
    %}
  </div>
  <div class="md:row-start-1 md:row-span-3">
    {%
      include
      figure-custom.html
      classes="bg-white pt-16 px-16 mb-2"
      src="/assets/images/date-picker/tutorial.gif"
      alt="An animation showing the tutorial prompt without hiding the calendar"
      title="Date selection tutorial"
      caption="The process for selecting dates in DatePicker may be unfamiliar to some users who exclusively use Google Calendar. This tutorial provides a quick demonstration on how to select dates."
    %}
  </div>
  <div class="md:row-start-4 md:row-span-3">
    {%
      include
      figure-custom.html
      classes="bg-white pt-16 px-16 mb-2"
      src="/assets/images/date-picker/drag.gif"
      alt="An animation showing tap-and-drag selection on the calendar"
      title="Drag selection"
      caption="The click and pick date selector works just fine, but adding a drag selector alongside it can allow for even faster and smoother date selection."
    %}
  </div>
</div>

## Logo update

For the next team that worked on this project I wanted to leave a logo in the project file. I incorporated the two primary colors of the app, along with scattered colored squares to represent the purpose and function of DatePicker.

{%
  include
  img-lg.html
  src="/assets/images/date-picker/icon-remix.png"
  alt="The new DatePicker logo"
%}

## Final screens

Previously the site was only optimizaed for desktop. Making the site easy to use on mobile was crucial especially for the directions section. Accessing directions to the lab while in the car is a key situation that the previous designs did not cater too.

{%
  include
  img-lg.html
  src="/assets/images/date-picker/final-mockup.png"
  alt="TODO"
%}

## Learnings & Insights

- DatePicker was an learning experience to work on because it was a great example on how sometimes a solution to a problem does not have to be fancy or complex. It was great to receive positive feedback from the stakeholder and see how such a frustrating problem in widely used product could be resolved with a straightfoward solution.
- Our team was able to get DatePicker into a deployable stage, but there has yet to be a planned release date for it onto the app store. Hopefully the next team that works on DatePicker can plan for a release because due to discussion with teachers and coaches DatePicker could provide a lot of value to their event planning experience.
