for $e in //employee[skill = "Java"]
return copy $je := $e modify delete node $je/salary return $je
