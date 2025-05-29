let $all := fn:available-environment-variables()
return if (fn:empty($all)) then
    true()
  else
    fn:empty(fn:environment-variable(fn:string-join($all)))
