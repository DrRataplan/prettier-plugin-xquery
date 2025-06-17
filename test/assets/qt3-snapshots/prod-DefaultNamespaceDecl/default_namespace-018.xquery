declare default function namespace "http://example.org";
declare default element namespace "http://www.example.com/filesystem";

declare function udf1 () {
  <empty>{ 10 * 10 }</empty>
};

udf1()
