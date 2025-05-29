let $pre := xs:duration("P1D"), $uri := "http://www.zorba-xquery.com/"
return <e>{
    namespace {
      $pre
    } {
      $uri
    }
  }</e>
