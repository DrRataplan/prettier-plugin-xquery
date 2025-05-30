declare function local:splitter (
  $sep as xs:string
) as (function (xs:string) as xs:string*) {
  function ($x as xs:string) {
    for $i in tokenize($x, $sep)
    return upper-case($i)
  }
};

string-join(local:splitter("\s")("A nice cup of tea"), "|")
