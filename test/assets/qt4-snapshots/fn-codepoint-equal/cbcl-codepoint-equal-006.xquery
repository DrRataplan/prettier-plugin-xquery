declare function local:yes-no ($arg as xs:boolean) as xs:string {
  if ($arg) then
    "yes"
  else
    "no"
};

fn:index-of(
  (fn:true(), fn:false()),
  fn:codepoint-equal(local:yes-no(fn:false()), local:yes-no(fn:true()))
)
