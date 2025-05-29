let $e := <a xmlns="http://example.org/nametest-19" attr1="abc1" />
return exists($e/self::Q{http://example.org/nametest-19}*)
