string-join(
  ("a", xs:anyURI("b"), "c", xs:anyURI("d"))[position() lt
    2] treat as xs:string*
)
