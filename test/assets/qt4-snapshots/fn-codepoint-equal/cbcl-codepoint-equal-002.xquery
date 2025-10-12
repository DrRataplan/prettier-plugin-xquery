declare function local:yes-empty ($arg as xs:boolean) as xs:string? {
  if ($arg) then
    "yes"
  else (
  )
};

empty(
  fn:codepoint-equal(local:yes-empty(fn:true()), local:yes-empty(fn:false()))
)
