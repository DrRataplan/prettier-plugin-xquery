declare construction preserve;

import schema default element namespace  "http://www.w3.org/XQueryTest/hats" at  "qischema005.xsd";

validate {
  <abf> <a/> <b/> <b/> {
    for $i in 1 to 3
    return <f/>
  } </abf>
  }
