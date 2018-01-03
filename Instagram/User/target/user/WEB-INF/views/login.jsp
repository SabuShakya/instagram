<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%--
  Created by IntelliJ IDEA.
  User: smriti
  Date: 1/2/18
  Time: 11:52 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title> LOGIN FORM</title>
</head>
<body>
<form action="/login">
<table>
    <tr>
        <td><label for="uname">Username: </label> </td>
        <td><form:input path="uname" id="uname"/></td>
    </tr>
    <tr>
        <td><label for ="password"> Password: </label></td>
        <td><form:input path="password" id="password"/></td>
    </tr>
</table>
<tr>
    <input type="submit" value="Login">
</tr>
</form>
</body>
</html>
