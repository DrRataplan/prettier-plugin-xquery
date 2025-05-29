let $element as element(*) := <foo />
return count($element/self::*:bar)
