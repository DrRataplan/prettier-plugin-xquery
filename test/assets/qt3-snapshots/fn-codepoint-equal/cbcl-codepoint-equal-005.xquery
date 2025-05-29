declare function local:yes-empty ($arg as xs:boolean) as xs:string? {
  if ($arg) then
    "yes"
  else (
  )
};

boolean(
  fn:codepoint-equal(local:yes-empty(fn:false()), local:yes-empty(fn:true()))
)
