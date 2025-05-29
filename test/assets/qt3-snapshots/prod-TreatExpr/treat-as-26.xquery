string-join(
  ("a", xs:anyURI("b"), "c", xs:anyURI("d"))[position() lt
    3] treat as xs:string*
)
