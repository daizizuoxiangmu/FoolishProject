<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>LoginPage</title>
<link href="css/mains.css" rel="stylesheet">
</head>
<body>
<div class="header">
           <div class="warp">
               <div class="warp-left">
                   <a href="#" class="icon"></a>
                   <a href="#" class="name"></a>
               </div>
               <div class="warp-right">
                   <a href="#" class="login-head">登录/注册</a>
                   <a href="#" class="login-head">购物车</a>
               </div>
           </div>
       </div>
       <div id="login-warp">
           <div class="login-choose le">账户登录</div>
           <div class="login-choose ri">账户注册</div>
           <form class="login-in">    
               <div class="login-on"><label class="login-lab"></label><input type="text" class="itxt" name="username" placeholder="请输入用户名"></div>
               <div class="login-on"><label class="login-lab"></label><input type="text" class="itxt" name="password" placeholder="请输入密码"></div>
           </form>
           <form class="login-in hide" >
               <div class="login-on"><label class="login-lab"></label><input type="text" class="itxt" name="username" placeholder="取个昵称吧"></div>
               <div class="login-on"><label class="login-lab"></label><input type="text" class="itxt" name="password" placeholder="输入你的密码"></div>
               <div class="login-on"><label class="login-lab"></label><input type="text" class="itxt" name="password" placeholder="重复你的密码"></div>
           </form>
           <div><a  id="login-btn" href = "#">登录</a></div>
       </div>
</body>
<script src="js/main.js"></script>
</html>