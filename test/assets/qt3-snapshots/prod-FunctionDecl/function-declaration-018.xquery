declare default element namespace "http://www.example.com/filesystem";

declare function local:udf1 () {
  <empty> {
    10 * 10
  } </empty>
};

local:udf1()
