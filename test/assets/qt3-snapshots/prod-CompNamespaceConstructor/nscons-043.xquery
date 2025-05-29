let $pre := xs:anyURI("ns"), $uri := "http://www.zorba-xquery.com/"
return <e>{
    namespace {
      $pre
    } {
      $uri
    }
  }</e>
