let $f := function () as map(xs:integer, xs:string) {
    map {}
  }, $g := function ($m as map(xs:string, xs:integer)) as xs:boolean {
    map:size($m) = 0
  }
return $g($f())
