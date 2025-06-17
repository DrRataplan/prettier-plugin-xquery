declare namespace map = "http://snelson.org.uk/functions/map";

declare function map:key ($pair as function () as item()+) as item() {
  $pair()[1]
};

declare function map:value ($pair as function () as item()+) as item()* {
  subsequence($pair(), 2)
};

declare function map:contains (
  $map as (function () as item()+)*,
  $key as item()
) as xs:boolean {
  map:process(
    $map,
    $key,
    function ($a) { true() },
    false(),
    function ($a) { () }
  )
};

declare function map:get (
  $map as (function () as item()+)*,
  $key as item()
) as item()* { map:process($map, $key, map:value#1, (), function ($a) { () }) };

declare function map:process (
  $map as (function () as item()+)*,
  $key as item(),
  $found as function (function () as item()+) as item()*,
  $notfound as item()*,
  $unused as function ((function () as item()+)*) as item()*
) as item()* {
  if (empty($map)) then
    $notfound
  else
    let $length := count($map)
    let $middle := $length idiv 2 + 1
    let $pair := $map[$middle]
    let $pair_key := $pair()[1]
    return if ($pair_key eq $key) then (
        $unused(subsequence($map, 1, $middle - 1)),
        $found($pair),
        $unused(subsequence($map, $middle + 1))
      ) else if ($pair_key gt $key) then (
        map:process(
          subsequence($map, 1, $middle - 1),
          $key,
          $found,
          $notfound,
          $unused
        ),
        $unused(subsequence($map, $middle))
      ) else (
        $unused(subsequence($map, 1, $middle)),
        map:process(
          subsequence($map, $middle + 1),
          $key,
          $found,
          $notfound,
          $unused
        )
      )
};

declare function map:pair (
  $key as item(),
  $value as item()*
) as function () as item()+ { function () { $key, $value } };

declare function map:put (
  $map as (function () as item()+)*,
  $key as item(),
  $value as item()*
) as (function () as item()+)+ {
  let $pair := map:pair($key, $value)
  return map:process(
      $map,
      $key,
      function ($a) { $pair },
      $pair,
      function ($a) { $a }
    )
};

string-join(
  let $map :=
    map:put(
      map:put(
        map:put(
          map:put(
            map:put(map:put((), "a", "aardvark"), "z", "zebra"),
            "e",
            ("elephant", "eagle")
          ),
          "o",
          "osterich"
        ),
        "t",
        "terrapin"
      ),
      "a",
      "antelope"
    )
  return (
      map:get($map, "o"),
      for $m in $map
      return concat(
          "key: ",
          map:key($m),
          ", value: (",
          string-join(map:value($m), ", "),
          ")"
        )
    ),
  "
"
)
