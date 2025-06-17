declare variable $e := <e>{ current-time() }</e>/(string-length(.) > 0);

$e,
if ($e) then
  "SUCCESS"
else
  "FAILURE"
