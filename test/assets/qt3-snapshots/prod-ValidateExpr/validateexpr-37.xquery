import schema namespace udt =  "http://www.w3.org/XQueryTest/userDefinedTypes";

string(
  validate lax {
    <a
      xmlns:udt="http://www.w3.org/XQueryTest/userDefinedTypes"
      xsi:type='udt:NOTATIONBased'
      >udt:value3</a>
    }
)
