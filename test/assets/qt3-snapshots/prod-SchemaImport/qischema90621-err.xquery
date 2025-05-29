import schema namespace z =  "http://www.w3.org/XQueryTest/qischema062";

validate lax {
  <z:person xsi:type="xs:NCName" xmlns:xs="http://www.w3.org/2001/XMLSchema">abc 123</z:person>
  }
