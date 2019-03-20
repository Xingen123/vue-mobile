<template>
  <div class="hello">
     <div class="twoText">{{msg}}</div> 
      <button  @click="fun">点我进行模拟数据</button>

      <div v-for="item in list" :key="item.orgId">
        <div>{{item.Date}}</div>
        <div>{{item.personName}}</div>
        <div>{{item.reason}}</div>
        <img :src="item.recipeId" alt="" />
        <div>{{item.time}}</div>
      </div>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
    methods:{
      fun(){
        // 调用api 实列 
        this.$ajax.login().then(res=> {
          console.log(res)
          this.list = res.data.data
        })
      }    
  },
  mounted(){
    
  }  
  
}
</script>
<style scoped>
.hello{
  font-size: 40px; 
}
</style>
