declare construction strip;

import schema default element namespace  "http://www.w3.org/XQueryTest/abf" at  "qischema008.xsd";

let $c := (<a />, <b />, <f />)
return validate strict { <abf> {
        $c
      } </abf> }
