import schema namespace udt =  "http://www.w3.org/XQueryTest/userDefinedTypes";

string(
  validate lax {
    <a xsi:type='udt:NOTATIONBased'
                                xmlns:udt="http://www.w3.org/XQueryTest/userDefinedTypes">udt:value1</a>
    }
)
