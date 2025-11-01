declare function local:f ($v as xs:double*) as xs:double+ {
  if (empty($v)) then
    0
  else
    $v
};

declare function local:g ($v as xs:double*) as xs:double+ {
  local:f($v)
};

declare variable $v external;

local:g($v)
