let $week :=
  map {
    0: "Sonntag",
    1: "Montag",
    2: "Dienstag",
    3: "Mittwoch",
    4: "Donnerstag",
    5: "Freitag",
    6: "Samstag"
  }

return map:merge(($week, map {6: "Sonnabend"}), map {"duplicates": "use-first"})
