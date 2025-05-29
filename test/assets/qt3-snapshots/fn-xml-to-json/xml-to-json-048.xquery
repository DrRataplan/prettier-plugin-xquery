import schema default element namespace  "http://www.w3.org/2005/xpath-functions";

xml-to-json(
  validate strict {
    <number
      xmlns:xs="http://www.w3.org/2001/XMLSchema"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:type="xs:int"
      >-23.7</number>
    }
)
