import schema namespace z =  "http://www.w3.org/XQueryTest/qischema062";

validate lax {
  <z:person
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xsi:type="xs:NCName"
  >abc 123</z:person>
  }
