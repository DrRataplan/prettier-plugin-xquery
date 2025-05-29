let $e := <a xsi:type='my:integer' xmlns:my='http://my.example.com/'>123</a>
return local-name-from-QName($e/@xsi:type)
