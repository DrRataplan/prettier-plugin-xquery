import schema default element namespace  "http://www.w3.org/XQueryTest/abf";

validate strict {
  <abf> <a/> <b/> <b/> {
    for $i in 1 to 3
    return (<f/>, <a/>)
  } </abf>
  }
