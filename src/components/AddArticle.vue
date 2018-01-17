<template>
  <div style="padding: 10px;">
    <el-form label-position="left" label-width="0px">
    <el-form-item label="title">
      <el-input type="text" v-model="title" auto-complete="off" placeholder="title"></el-input>
    </el-form-item>
    <el-form-item label="Artikel">
      <el-input type="textarea" v-model="article" :autosize="{ minRows: 10}"></el-input>
    </el-form-item>

    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="onSubmit">Submit</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: '',
      article: '',
    }
    
  },
  methods: {
    onSubmit(){
      this.$store.dispatch('addArticle', {
        title: this.title,
        article: this.article
      })
      .then(()=>{
        this.$message({
          message: 'Congrats, Login Success',
          type: 'success',
        })
        this.$router.push('/profile')
      })
    }
  }
}
</script>

<style>

</style>
