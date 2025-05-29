let $attribute as attribute(foo) := attribute foo {}
return count($attribute/self::*:bar)
