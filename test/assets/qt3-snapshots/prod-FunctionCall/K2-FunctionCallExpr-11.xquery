declare function local:compare ($arg1 as xs:string, $arg2 as xs:string) {
  let $cps1 := string-to-codepoints($arg1), $cps2 := string-to-codepoints($arg2)
  return abs(count($cps1) - count($cps2)) +
      sum(
        for $x in 1 to min((count($cps1), count($cps2)))
        return if ($cps1[$x] ne $cps2[$x]) then
            1
          else (
          )
      )
};

local:compare("", ""),
local:compare("a", ""),
local:compare("", "a"),
local:compare("a", "a"),
local:compare("", "aa"),
local:compare("aa", "ab"),
local:compare("ba", "ba"),
local:compare("bab", "bbb"),
local:compare("aba", "bab")
