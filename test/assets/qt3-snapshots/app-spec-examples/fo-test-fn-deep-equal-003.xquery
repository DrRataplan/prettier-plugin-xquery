let $at :=
  <attendees> <name last='Parker'
            first='Peter'/> <name last='Barker' first='Bob'/> <name last='Parker'
            first='Peter'/> </attendees>
return fn:deep-equal($at/name[1], $at/name[3])
