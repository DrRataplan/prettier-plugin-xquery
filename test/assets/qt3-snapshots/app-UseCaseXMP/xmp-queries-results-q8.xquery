for $b in //book
let $e := $b/*[contains(string(.), "Suciu") and ends-with(local-name(.), "or")]
where exists($e)
return <book> {
      $b/title
    } {
      $e
    } </book>
