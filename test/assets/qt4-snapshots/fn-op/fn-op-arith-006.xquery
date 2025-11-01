let $inc := op("+")(?, 1)
return 5 => $inc() => $inc() => $inc()
