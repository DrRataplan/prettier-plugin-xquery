import module namespace mod1 = "http://www.w3.org/TestModules/cnc-module";

let $elem := <e>{
    mod1:one()
  }</e>
return element {resolve-QName("z:f", $elem)} {}
