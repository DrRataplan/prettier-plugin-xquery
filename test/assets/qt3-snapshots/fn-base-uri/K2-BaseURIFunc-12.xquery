let $i := <e xml:base="http://www.example.com/">{ comment { "content" } }</e>
return base-uri($i/comment()[1])
