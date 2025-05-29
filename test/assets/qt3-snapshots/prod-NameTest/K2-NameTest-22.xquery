empty(
  let $e := <a b ="content"><?b asd?><b/></a>
  return $e/processing-instruction("b ")
)
