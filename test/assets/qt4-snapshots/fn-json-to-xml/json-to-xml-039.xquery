fn:json-to-xml(
  '"oh dear \uDEAD"',
  map {"fallback": function ($s) { upper-case($s) => substring(3) }}
)
