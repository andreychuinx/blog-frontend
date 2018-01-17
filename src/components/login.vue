<template>
  <el-form label-position="left" label-width="0px">
    <el-form-item>
      <el-input type="text" v-model="email" auto-complete="off" placeholder="email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="password" auto-complete="off" placeholder="password"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="onSubmit">Submit</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'loginPage',
  data () {
    return {
      password: '',
      email: '',
      loginDialog: true,
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('signin', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.loginDialog = false
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  watch: {
    loginDialog() {
      this.$emit('closeDialog', this.loginDialog)
    },
  },
}
</script>
</script>
