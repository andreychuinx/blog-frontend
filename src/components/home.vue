<template>
  <div>
    <el-row v-for="(article, idx) in getArticles" :key="idx">
      <el-col>
        <el-card :body-style="{ padding: '20px' }">
          <el-col :span="4">
            <img src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" class="image">

          </el-col>
          <el-col :span="20">
            <div class="cardtext">
              <a href="">
                <span>{{article.title}}</span>
              </a>

              <div class="bottom clearfix">
                {{article.article}}

              </div>
              <div>
                
                  <router-link :to="{path: `/article/${article._id}/detail`}">
                  <el-button type="primary">
                    Read More
                  </el-button>
                  </router-link>
              </div>
            </div>
          </el-col>
        </el-card>

      </el-col>
    </el-row>
  </div>

</template>
<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  name: 'homeLayout',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getArticles'])
  },
  mounted(){
    this.$store.dispatch('dataArticles')
  }
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
</style>
