import schema default element namespace  "http://www.w3.org/2005/xpath-functions";

xml-to-json(
  validate strict {
    <number xsi:type="xs:int" 
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:xs="http://www.w3.org/2001/XMLSchema">-23.7</number>
    }
)
