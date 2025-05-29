fn:json-doc(
  "http://www.w3.org/qt3/json/stringUnpaired-json",
  map {"fallback": function ($s) {
        substring($s, 3)
      }}
)
