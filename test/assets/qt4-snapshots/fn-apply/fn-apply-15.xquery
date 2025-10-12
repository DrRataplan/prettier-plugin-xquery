declare function local:l ($x as xs:string) {
  lower-case($x)
};

declare function local:u ($x as xs:string) {
  upper-case($x)
};

let $data := <a><b>Banana</b></a>
return apply(
    if (current-date() lt xs:date("1900-01-01")) then
      local:l#1
    else
      local:u#1,
    [$data]
  )
