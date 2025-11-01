let $map := map {"LAX": "Los Angeles", "LHR": "London"}
return fn:replace("LHR to LAX", "[A-Z]{3}", function ($s, $g) { $map($s) })
