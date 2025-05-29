declare function local:q (
  $prefix as xs:string,
  $local as xs:string
) as xs:QName {
  <a>{
    $prefix
  }:{
    $local
  }</a>
};

local:q("fn", "abs")
