declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "html";
declare option output:indent "yes";
declare option output:version "5.0";
declare option output:suppress-indentation "li td";

<html><body>
         <ul>
           <li><p>One</p></li>
           <li><p>Two</p></li>
           <li><p>Three</p></li>
         </ul>  
      </body></html>
