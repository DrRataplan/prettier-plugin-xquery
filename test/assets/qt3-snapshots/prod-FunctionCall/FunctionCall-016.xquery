declare function local:f ($in as xs:QName) as xs:integer {
  string-length(local-name-from-QName($in))
};

let $e := <a xsi:type='my:integer' xmlns:my='http://my.example.com/'>123</a>
return local:f($e/@xsi:type)
