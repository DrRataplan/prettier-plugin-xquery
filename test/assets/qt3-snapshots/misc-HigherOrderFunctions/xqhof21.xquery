let $m :=
  map {
    "Tuesday": true(),
    "Wednesday": true(),
    "Friday": true(),
    "Monday": true(),
    "Sunday": false(),
    "Saturday": false()
  }
let $days :=
  ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
return fn:filter($days, $m)
