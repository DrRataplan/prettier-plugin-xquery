let $i := <e xml:base="http://www.example.com/"><?target data?></e>
return base-uri($i/processing-instruction()[1])
