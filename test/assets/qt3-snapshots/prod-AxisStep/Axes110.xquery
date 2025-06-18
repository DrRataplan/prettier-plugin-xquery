declare namespace ns1 = "http://www.example.org/ns1";

let $processing-instruction as processing-instruction() :=
<?processing instruction?>
return count($processing-instruction/self::ns1:*)
