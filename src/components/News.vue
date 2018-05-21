<template>
  <div class="container" :style="{height: innerHeight}">
    <div class="container-header">
      <el-input placeholder="输入关键字.." v-model="keyword" @change="getFilterNews">
        <el-select class="el-select" v-model="type" slot="prepend" placeholder="请选择.." @change="getFilterNews">
          <el-option v-for="mode in modes" :key="mode.id" :label="mode.label" :value="mode.id"></el-option>
        </el-select>
      </el-input>
    </div>
    <div class="container-body">
      <el-collapse  accordion>
        <el-collapse-item v-for="item in news" :key="item.id">
          <template slot="title">
            <div class="collapse-item-profile">
              <label>创建时间:&nbsp;&nbsp;<span>{{item.createAt}}</span></label>&nbsp;&nbsp;&nbsp;&nbsp;
              <label>来源:&nbsp;&nbsp;<span>{{item.from}}</span></label>
            </div>
            <span class="collapse-item-title">{{item.title}}</span>
          </template>
          <div v-html="item.content"></div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'News',
    data () {
      return {
        type: 0,
        keyword: ''
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.getFilterNews()
      })
    },
    methods: {
      ...mapActions('news', [ 'getNews' ]),
      getFilterNews () {
        this.getNews({
          type: this.type,
          keyword: this.keyword
        })
      }
    },
    computed: {
      ...mapGetters('news', [ 'news' ]),
      modes () {
        return [
          {
            id: 0,
            label: '内容',
            value: 'content'
          },
          {
            id: 1,
            label: '来源',
            value: 'from'
          }
        ]
      },
      innerHeight () {
        return window.innerHeight - 16 + 'px'
      }
    }
  }
</script>

<style>
  .el-collapse-item__wrap {
    background-color: #fed;
  }
</style>

<style scoped>
  .el-select {
    width:130px;
  }
  .container {
    width: 1068px;
    margin: 8px auto;
    overflow: auto;
  }
  .container-header,.container-body {
    width: 1048px;
  }
  .collapse-item-title {
    font-size: 1.25rem;
    font-weight: 600;
    padding-left: 15px;
  }
  .collapse-item-profile {
    display: inline-block;
    float: right;
    margin-right: 100px;
  }
  .collapse-item-profile>label {
    font-size: .75rem;
    font-weight: 400;
    color: #555;
  }
  .collapse-item-profile>label>span {
    color: #777;
  }
</style>
