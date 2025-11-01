let $days := (
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
)
return map:build(
    1 to 7,
    function ($i) { $days[$i] },
    function ($x) { $x }
  )?Wednesday
