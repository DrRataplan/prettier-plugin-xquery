let $i := <e xml:base="http://www.example.com/"><!-- content --></e>
return base-uri($i/comment()[1])
