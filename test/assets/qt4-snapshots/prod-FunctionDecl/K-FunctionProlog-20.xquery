declare function local:func ($choose, $whenTrue, $whenFalse) {
  if ($choose) then
    $whenTrue
  else
    $whenFalse
};

local:func(true(), current-time(), current-date()) instance of xs:time and
  local:func(false(), current-time(), current-date()) instance of xs:date
