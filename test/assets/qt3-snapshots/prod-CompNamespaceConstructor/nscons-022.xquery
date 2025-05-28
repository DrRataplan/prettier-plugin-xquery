let $elem := <e>{
      namespace z {
        "http://www.zorba-xquery.com/"
      }
    }</e>
return element {resolve-QName("z:f", $elem)} {}
