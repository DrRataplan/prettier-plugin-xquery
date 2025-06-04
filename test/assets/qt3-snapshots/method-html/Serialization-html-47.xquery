declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "html";
declare option output:indent "yes";
declare option output:version "4.0";

let $html :=
  <html>
    <body>
      <p
      >Lorem ipsum dolor sit amet, 
     consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, 
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </body>
  </html>
return [$html]
