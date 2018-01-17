<template>
<div>
  <div v-if="showAddArticle">
    <router-view  />
  </div>
  <div v-else>
    <el-row>
      <el-col>
        <el-card :body-style="{ padding: '20px' }">
          <el-col>
            <h1>Welcome, Andrey</h1>
            <h3>Your Article List</h3>
            <router-link :to="{path: `/profile/addarticle`}">
              <el-button type="success" @click="showAddArticle = true">
                Add Article
              </el-button>
            </router-link>
          </el-col>
        </el-card>

      </el-col>
    </el-row>
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
                  <router-link :to="{path: `/article/${article._id}/edit`}">
                    <el-button type="warning" @click="showEditArticle = true">
                    Edit
                  </el-button>
                  </router-link>
                  
                  <el-button type="danger" @click="methodDeleteArticle(article._id)">
                    Delete
                  </el-button>
              </div>
            </div>
          </el-col>
        </el-card>

      </el-col>
    </el-row>
  </div>
</div>
  

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['id'],
  components: {},
  data() {
    return {
      showAddArticle: false,
      showEditArticle: false
    }
  },
  computed: {
    ...mapGetters(['getStatusLogin', 'getArticles', 'getUser']),
    
  },
  mounted() {
    this.$store.dispatch('dataArticles')
    this.$store.dispatch('dataUser')
  },
  methods:{
    methodDeleteArticle(id){
      this.$confirm('Are you sure wanna Delete this Article?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$store
            .dispatch('deleteArticle', {
              id: id,
            })
            .then(() => {
              this.$message({
                type: 'success',
                message: 'Answer Deleted',
              })
            })
            .catch(err=> {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
          this.$message({
            type: 'info',
            message: 'Logout canceled',
          })
        })
    }
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
.action {
  text-align: right;
}
</style>
