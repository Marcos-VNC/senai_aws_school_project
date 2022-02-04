<template>
  <div class="container">
    <div class="header">
      <h1>B.S.K Esports</h1>
    </div>
    <div class="main">
      <span>
        <i class="fa fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          name="username"
          v-model="username"
        /> </span
      ><br />
      <span>
        <i class="fa fa-lock"></i>
        <input
          type="password"
          placeholder="password"
          name="password"
          v-model="password"
        /> </span
      ><br />
      <button @click="login">login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const ddd = await this.$auth.loginWith('local', {
          data: {
          username: this.username,
          password: this.password
          }
        })
        console.log(ddd)
        // this.$store.commit('auth/setToken', token);
        // this.$store.commit('auth/updateUser', user);
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  },
};
</script>

<style>
/* @import "https://pro.fontawesome.com/releases/v5.10.0/css/all.css"; */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  min-height: 100%;
}
body {
  font-family: sans-serif;
  background-image: url(bg.jpg);
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  width: 580px;
  margin: 10% auto;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 17px rgb(206, 206, 206);
}

.header {
  text-align: center;
  padding-top: 75px;
}

.header h1 {
  color: rgb(252, 252, 252);
  font-size: 45px;
  margin-bottom: 80px;
}

.main {
  text-align: center;
}

.main input,
button {
  width: 300px;
  height: 40px;
  border: none;
  outline: none;
  padding-left: 40px;
  box-sizing: border-box;
  font-size: 15px;
  color: #333;
  margin-bottom: 40px;
}

.main button {
  padding-left: 0;
  background-color: #5f6369;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 70px;
  color: white;
}

.main button:hover {
  box-shadow: 2px 2px 5px #555;
  background-color: #494d55;
  cursor: pointer;
}
.main input:hover {
  box-shadow: 2px 2px 5px #555;
  background-color: #ddd;
}

.main span {
  position: relative;
}

.main i {
  position: absolute;
  left: 15px;
  color: #333;
  font-size: 16px;
  top: 2px;
}
</style>
