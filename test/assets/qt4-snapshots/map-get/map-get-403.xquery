let $m := map {
  "su": "Sunday",
  "mo": "Monday",
  "tu": "Tuesday",
  "we": "Wednesday",
  "th": "Thursday",
  "fr": "Friday",
  "sa": "Saturday"
}
return map:get($m, "bi", map {"bi": "Birthday", "ck": "Cakeday"})
