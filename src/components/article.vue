<template>
  <div>
    <el-row v-if="dataArticle">
      <el-col>
        <el-card :body-style="{ padding: '20px' }">
          <el-col>
            <h1> {{getArticle.title}} </h1>
          </el-col>
          <el-col>
            <img src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" class="image">

          </el-col>
          <el-col>
            <div class="cardtext">
              <span>{{getArticle.article}}</span>
            </div>
          </el-col>
        </el-card>

      </el-col>
    </el-row>
  </div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'articleDetail',
  props: ['id'],
  components: {},
  data() {
    return {
      dataArticle: false
    }
  },
  computed: {
    ...mapGetters(['getStatusLogin', 'getArticle']),
  },
  mounted() {
    this.$store.dispatch('dataArticle', {
      id: this.id,
    })
    .then(()=>{
      this.dataArticle = true
    })
  },
}
</script>
<style>
.el-row {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
}
.el-card {
  padding-bottom: 20px;
}
.image {
  width: 100%;
  display: block;
}
.cardtext {
  text-align: left;
  vertical-align: top;
  padding-left: 10px;
  padding-top: 0px;
}
.action {
  text-align: right;
}
</style>
