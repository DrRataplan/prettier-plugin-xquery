declare construction preserve;
declare copy-namespaces preserve ,  inherit;

declare namespace conf = "http://xbrl.org/2005/conformance";
declare namespace iso4217 = "http://www.xbrl.org/2003/iso4217";

import schema namespace qnc =  "http://www.w3.org/XQueryTest/QNameComparisonTest" at  "qischema080.xsd";

validate strict {
  <qnc:x>{ QName("http://www.xbrl.org/2003/iso4217", "GBP") }</qnc:x>
  },
validate strict {
  <qnc:x xmlns:iso2="http://www.xbrl.org/2003/iso4217">iso2:GBP</qnc:x>
  }
