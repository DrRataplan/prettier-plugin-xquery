import schema namespace z =  "http://www.w3.org/XQueryTest/addresses" at  "qischema064.xsd";

validate strict {
  document {
    <z:person
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:z="http://www.w3.org/XQueryTest/addresses"
      xsi:type="z:titled-person"
    >
      <z:first>Anthony</z:first>
      <z:middle>W</z:middle>
      <z:last>Benn</z:last>
      <z:title>Viscount Stansgate</z:title>
    </z:person>
  }
  }
