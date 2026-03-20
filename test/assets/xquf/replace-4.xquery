if ($e/@last-updated) then
  replace value of node $e/last-updated with fn:currentDate()
else
  insert node attribute last-updated { fn:currentDate() } into $e
