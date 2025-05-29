let $attribute as attribute(*) := attribute foo {}
return count($attribute/self::bar)
