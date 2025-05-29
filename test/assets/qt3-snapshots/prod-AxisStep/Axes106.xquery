declare namespace ns1 = "http://www.example.org/ns1";

let $comment as comment() := <!--comment-->
return count($comment/self::ns1:*)
