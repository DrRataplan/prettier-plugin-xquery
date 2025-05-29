let $responses :=
  [map {0: "no", 1: "yes"}, map {0: "non", 1: "oui"}, map {
    0: "nein",
    1: ("ja", "doch")
  }]
return map:find($responses, 0)
