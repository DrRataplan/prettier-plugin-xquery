let $all := fn:available-environment-variables()
return empty($all) or ($all[1] ne "")
