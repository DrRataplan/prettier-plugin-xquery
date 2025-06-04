import schema default element namespace  "http://www.w3.org/XQueryTest/abf";

let $c := (<a>2</a>, <b />, <f />)
return validate strict { <abf>{
        $c
      }</abf> }
