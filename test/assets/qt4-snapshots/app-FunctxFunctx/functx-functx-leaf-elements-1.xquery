declare namespace functx = "http://www.example.com/";

declare function functx:leaf-elements ($root as node()?) as element()* {
  $root/descendant-or-self::*[not(*)]
};

let $in-xml := <authors>
  <author><fName>Kate</fName><lName>Jones</lName></author>
  <author><fName>John</fName><lName>Doe</lName></author>
</authors>
return (functx:leaf-elements($in-xml))
