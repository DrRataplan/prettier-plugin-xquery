import module namespace test1 = "http://www.w3.org/TestModules/test1";

declare function test1:ok () {
  "ok"
};

<result>{
    test1:ok()
  }</result>
