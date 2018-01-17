<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

    <router-link :to="{path: '/'}">
      <el-menu-item index="1">
        Home
      </el-menu-item>
    </router-link>

    <el-submenu index="2">
      <template slot="title">Categories</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-submenu>
    <div v-if="isLoggedIn">
      <router-link :to="{path: '/profile'}">
      <el-menu-item index="3">
        <span>Profile</span>
      </el-menu-item>
      </router-link>
      <el-menu-item index="4" @click="methodLogout">
        <span>Logout</span>
      </el-menu-item>
    </div>
    <div v-else>
      <el-menu-item index="3" @click="loginDialog = true">
        <span>Login</span>
      </el-menu-item>
    </div>

    <el-dialog title="Login" :visible.sync="loginDialog" center width="50%">
      <login-page @closeDialog="methodCloseDialog">
      </login-page>
    </el-dialog>
  </el-menu>
</template>
<script>
import loginPage from './login'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'headerLayout',
  components: {
    loginPage,
  },
  data() {
    return {
      activeIndex2: '1',
      loginDialog: false,
    }
  },
  computed: {
    ...mapGetters(['getStatusLogin']),
    ...mapState(['isLoggedIn'])
  },
  methods: {
    methodCloseDialog(close) {
      this.loginDialog = close
      this.$message({
        message: 'Congrats, login success',
        type: 'success',
      })
    },
    methodLogout(){
      this.$store.dispatch('logout')
      this.$message({
        message: 'Congrats, Logotu Success',
        type: 'success'
      })
      this.$router.push({name: 'homePage'})
    }
  },
}
</script>
