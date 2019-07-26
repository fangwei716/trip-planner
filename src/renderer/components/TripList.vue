<template>
  <div id="trip-list">
    <div :class="{'align-center': isCollapse}" id="trip-settings">
      <font-awesome-icon v-if="!isCollapse" class="setting-icon icon" title="settings" icon="cog"/>
      <font-awesome-icon v-if="!isCollapse" class="setting-icon icon" title="filters" icon="filter"/>
      <font-awesome-icon v-if="!isCollapse" class="setting-icon icon" title="notifications" icon="bell"/>
      <font-awesome-icon v-if="!isCollapse" @click="isCollapse = true" class="setting-icon icon" title="collapse" icon="angle-double-left"/>
      <font-awesome-icon v-if="isCollapse" @click="isCollapse = false" class="setting-icon icon" title="expand" icon="angle-double-right"/>
    </div>
    <el-input v-if="!isCollapse" prefix-icon="el-icon-search" id="search-input" placeholder="Search trips" v-model="query"></el-input>
    <el-menu 
      id="trip-list-menu"
      default-active="1-1" 
      :default-openeds="['1']"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <font-awesome-icon :class="{icon: !isCollapse}" icon="suitcase-rolling"/>
          <span slot="title">Ongoing Trips</span>
        </template>
        <el-menu-item index="1-1">
          <span class="date">7.21-7.25</span> Paris
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <font-awesome-icon :class="{icon: !isCollapse}" icon="calendar-check"/>
          <span slot="title">Booking Trips</span>
        </template>
        <el-menu-item index="2-1">
          <span class="date">8.25-8.27</span> US Road Trip
        </el-menu-item>
        <el-menu-item index="2-2">
          <span class="date">9.15-9.23</span> Alaska Cruise
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <font-awesome-icon :class="{icon: !isCollapse}" icon="list"/>
          <span slot="title">Planning Trips</span>
        </template>
        <el-menu-item index="3-1">
          Tahiti Cruise
        </el-menu-item>
        <el-menu-item index="3-2">
          Road Trip to BC
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <font-awesome-icon :class="{icon: !isCollapse}" icon="check-square"/>
          <span slot="title">Completed Trips</span>
        </template>
        <el-menu-item index="4-1">
          Utah & Arizona
        </el-menu-item>
        <el-menu-item index="4-2">
          San Francisco
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'tripList',
    data() {
      return {
        query: "",
        isCollapse: false
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  #trip-list{
    width: 250px;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
  }
  #trip-list-menu{
    height: 100%;
  }
  .date{
    width: 65px;
    display: inline-block;
  }
  .icon{
    padding-right: 10px;
  }
  #trip-settings{
    position: absolute;
    bottom: 0px;
    height: 30px;
    width: 250px;
    left: 0;
    z-index: 100;
    padding: 5px 15px;
    color: #aaaaaa;
    font-size: 16px;
  }
  .setting-icon{
    cursor: pointer;
  }
  #trip-settings.align-center{
    text-align: center;
    width: 40px;
  }
</style>

<style>
  #search-input{
    border-radius: 0;
    border: none;
    background: #474d54;
    padding-left: 32px;
    width: 249px;
    font-size: 14px;
    color: #f5f5f5;
  }
  .el-menu--collapse .el-submenu{
    text-align: center;
  }
</style>
