declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "html";
declare option output:indent "yes";
declare option output:version "5.0";
declare option output:suppress-indentation "TABLE";

<html><body>
         <table>
           <tr>
            <td><p>One</p></td>
            <td><p>yes</p></td>
           </tr>
           <tr>
            <td><p>Two</p></td>
            <td><p>yes</p></td>
           </tr>
           <tr>
            <td><p>Three</p></td>
            <td><p>yes</p></td>
           </tr>
         </table>  
      </body></html>
