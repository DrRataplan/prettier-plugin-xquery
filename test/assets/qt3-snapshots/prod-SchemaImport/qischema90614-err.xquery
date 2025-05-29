import schema namespace z =  "http://www.w3.org/XQueryTest/addresses" at  "qischema061.xsd";

declare function local:p () as schema-element(z:person) {
  validate strict {
    <z:person> <z:first>Michael</z:first> <z:middle role="patronymic">H</z:middle> <z:last>Kay</z:last> </z:person>
    }
};

<out> {
  local:p()
} </out>
