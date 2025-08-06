let $mf := function ($k as node(), $v) { map {$k("book"): $v} }

return $mf(
  json-doc("http://www.w3.org/qt3/app/UseCaseR31/bookinfo-json"),
  "first"
)
