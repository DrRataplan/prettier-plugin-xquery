let $processing-instruction as processing-instruction() :=
  <?processing instruction?>
return count($processing-instruction/self::*)
