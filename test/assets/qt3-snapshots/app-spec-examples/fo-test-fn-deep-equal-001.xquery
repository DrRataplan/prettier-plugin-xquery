let $at :=
  <attendees>
    <name first='Peter' last='Parker' />
    <name first='Bob' last='Barker' />
    <name first='Peter' last='Parker' />
  </attendees>
return fn:deep-equal($at, $at/*)
