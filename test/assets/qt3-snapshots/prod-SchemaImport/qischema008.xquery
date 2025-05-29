declare construction preserve;

import schema default element namespace  "http://www.w3.org/XQueryTest/abf"(: at "qischema008.xsd" :) ;

validate {
  <abf> <a /> {
      if (current-date() gt xs:date("1900-01-01")) then
        <b />
      else
        <f />
    } <b /> {
      for $i in 1 to 3
      return <f />
    } </abf>
  }
