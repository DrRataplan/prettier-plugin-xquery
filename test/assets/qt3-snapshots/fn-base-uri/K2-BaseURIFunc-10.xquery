let $i := <e xml:base="http://www.example.com/">
  { processing-instruction target { "data" } }
</e>
return base-uri($i/processing-instruction()[1])
