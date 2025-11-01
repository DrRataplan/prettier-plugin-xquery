declare function local:f (
  $callback as function (xs:integer) as xs:boolean
) as xs:boolean {
  $callback(year-from-date(current-date()) div 1900)
};

local:f(function ($d as xs:decimal) as xs:boolean { $d lt 0 })
