declare namespace p = "http://www.example.com/A";

"START",
for $i in
  in-scope-prefixes(
    <e xmlns="http://www.example.com/A" xmlns:A="http://www.example.com/C">
      <b xmlns:B="http://www.example.com/C" />
    </e>/p:b
  )
order by $i
return $i,
"END"
