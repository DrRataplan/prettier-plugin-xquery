let $f := function ($ff as (function (item()) as item()), $s as xs:string) {
  $ff($ff($s))
}
return for-each(
  (upper-case#1, lower-case#1, normalize-space#1, concat(?, "!")),
  $f(?, " Say NO! ")
)
