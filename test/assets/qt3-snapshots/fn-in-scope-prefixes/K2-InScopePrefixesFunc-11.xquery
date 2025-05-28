declare default element namespace "http://www.example.com/";

let $i :=
  <e> <a xmlns="" /> <b xmlns="http://www.example.com/" /> <c
      xmlns="http://www.example.com/Second" /> </e>
return (
    count(in-scope-prefixes($i)),
    count(in-scope-prefixes(exactly-one($i/*[namespace-uri() eq ""]))),
    count(in-scope-prefixes(exactly-one($i/b))),
    count(
      in-scope-prefixes(
        exactly-one($i/*[namespace-uri() eq "http://www.example.com/Second"])
      )
    )
  )
