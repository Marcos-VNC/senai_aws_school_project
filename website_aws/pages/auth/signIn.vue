<template>

  <div class="container">
    <div class="ball red left"></div>
    <div class="ball red right"></div>
    <div class="content">
        <div class="login-box">
            <h1>Login</h1>
            <div class="textbox">
            <i class="fa fa-user" aria-hidden="true"></i>
            <input type="text" name="username" value="" placeholder="Username:">
            </div>
            <div class="textbox">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input type="password" name="password" value="" placeholder="Password:">
            </div>
            <input class="btn" type="button" name="login" value="Sign In">
        </div> 
    </div> 
  </div>

</template>

<script>
export default {
  name: 'Home'
}
</script>

<style >
/* @import "https://pro.fontawesome.com/releases/v5.10.0/css/all.css"; */

* {
  margin: 0; padding: 0;
  box-sizing: border-box;
  
}
  
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0; left: 0;
    bottom: 0; right: 0;
    background: rgba(255, 255, 255, 0.24);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);

}

.ball {
    height: 150px;
    width: 150px;
    border-radius: 100%;
    position: absolute;
}

.red {
    background-color: red;
}

.left {
    top: 200px;
    left: 50px;
}

.right {
    top: 100px;
    right: 200px;
}
 
</style>