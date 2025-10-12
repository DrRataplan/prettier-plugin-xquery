import schema namespace udt =  "http://www.w3.org/XQueryTest/userDefinedTypes";

string(
  validate type udt:NOTATIONBased {
    <a xmlns:udt="http://www.w3.org/XQueryTest/userDefinedTypes">udt:value3</a>
    }
)
