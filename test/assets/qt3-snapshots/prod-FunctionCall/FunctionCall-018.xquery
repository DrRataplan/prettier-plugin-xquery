let $e := <a xmlns:my='http://my.example.com/' xsi:type='my:integer'>123</a>
return local-name-from-QName($e/@xsi:type)
