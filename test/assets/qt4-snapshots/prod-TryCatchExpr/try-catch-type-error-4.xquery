try {
  let $i as xs:string := 1
  return $i
} catch *:XPTY0004 { "Type error" }
