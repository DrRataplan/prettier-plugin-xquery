import schema namespace z =  "http://www.w3.org/XQueryTest/hats" at  "qischema062.xsd";

validate strict {
  <z:s xsi:type="xs:NCName" xmlns:xs="http://www.w3.org/2001/XMLSchema">abc123</z:s>
  }
