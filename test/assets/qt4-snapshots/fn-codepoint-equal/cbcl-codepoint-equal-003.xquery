declare function local:yes-no ($arg as xs:boolean) as xs:string {
  if ($arg) then
    "yes"
  else
    "no"
};

fn:codepoint-equal(local:yes-no(fn:true()), local:yes-no(fn:false())) = false()
