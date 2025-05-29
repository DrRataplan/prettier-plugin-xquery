let $e := <a attr1 = "abc1" xmlns="http://example.org/nametest-19"/>
return exists($e/self::Q{http://example.org/nametest-19}*)
