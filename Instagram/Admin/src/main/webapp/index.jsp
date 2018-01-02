<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%--
  Created by IntelliJ IDEA.
  User: sabu
  Date: 1/2/18
  Time: 10:29 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login</title>
</head>
<body>
<form:form action="/login" method="post">
    <label>UserId:</label>
    <input type="text" name="userId"/><br>
    <label>Password:</label>
    <input type="text" name="password"/><br>
    <input type="submit" value="Login">
</form:form>
</body>
</html>
