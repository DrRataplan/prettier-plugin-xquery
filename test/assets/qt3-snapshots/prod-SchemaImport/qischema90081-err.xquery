import schema default element namespace  "http://www.w3.org/XQueryTest/abf";

validate strict {
  <abf> 
            <a /> 
            {
      if (./*) then
        <b />
      else
        <f />
    }
            <b /> 
            {
      for $i in 1 to 3
      return <g />
    } 
          </abf>
  }
