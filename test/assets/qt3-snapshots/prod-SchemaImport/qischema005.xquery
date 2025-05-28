declare construction strip;

import schema default element namespace  "http://www.w3.org/XQueryTest/hats" at  "qischema005.xsd";

validate strict {
  <abf
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    > 
                <a /> <b /> <b /> <f /> <f /> <f /> 
            </abf>
  }
