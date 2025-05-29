import schema default element namespace  "http://www.w3.org/XQueryTest/abf";

let $c := (<a att="3" />, <b />, <f />)
return validate strict { <abf> {
        $c
      } </abf> }
