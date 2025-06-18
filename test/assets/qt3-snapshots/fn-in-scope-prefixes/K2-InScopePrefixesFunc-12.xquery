declare default element namespace "http://www.example.com/";

let $i := element e {
  element {QName("", "a")} {},
  element {QName("http://www.example.com/", "b")} {},
  element {QName("http://www.example.com/Second", "c")} {}
}
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
