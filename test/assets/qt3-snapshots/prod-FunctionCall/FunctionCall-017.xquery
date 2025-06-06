let $f := function ($in as xs:QName) as xs:integer {
    string-length(local-name-from-QName($in))
  }
let $e := <a xmlns:my='http://my.example.com/' xsi:type='my:integer'>123</a>
return $f($e/@xsi:type)
