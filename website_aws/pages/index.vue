<template>
  <div>
    <h1>Home</h1>
    <div>
      <p>
          <strong>Username:</strong>
          {{ user }}
        </p>
        <p>
          <strong>Email:</strong>
          
        </p>
    </div>
  </div>  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data: function(){
    return{
      user:''
    }
  },
  // middleware: 'auth',
  // computed: {
  //   ...mapGetters(['isAuthenticated', 'loggedInUser'])
  // },
  async mounted(){
    this.user =  await this.$store.state.auth.user
    console.log(this.user)
    
  }
}

</script>

<style>


</style>