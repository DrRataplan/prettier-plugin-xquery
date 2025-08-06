declare function local:coerce (
  $arg as function (item()*) as item()*
) as function (item()*) as item()* {
  $arg
};

let $coerced := local:coerce(fn:abs#1)
return if ($coerced instance of function (item()*) as item()*) then
  fn:function-name(local:coerce(fn:abs#1))
else
  "error"
