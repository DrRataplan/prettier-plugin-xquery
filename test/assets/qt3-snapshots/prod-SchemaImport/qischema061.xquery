import schema namespace z =  "http://www.w3.org/XQueryTest/addresses"(:at "qischema061.xsd":) ;

declare function local:p () as schema-element(z:person) {
  validate strict {
    <z:person> 
                    <z:first>Michael</z:first> 
                    <z:middle>H</z:middle> 
                    {
        local:sn()
      } 
                </z:person>
    }
};

declare function local:sn () as schema-element(z:last) {
  validate strict { <z:surname>Kay</z:surname> }
};

<out> {
    local:p()
  } </out>
