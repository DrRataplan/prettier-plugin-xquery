import schema namespace z =  "http://www.w3.org/XQueryTest/money" at  "qischema063.xsd";

validate strict {
  <z:a
    xmlns:z="http://www.w3.org/XQueryTest/money"
    xsi:type="z:positive-money-amount"
  >1234</z:a>
  }
