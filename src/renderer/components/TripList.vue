<template>
  <div :class="{'collapse': isCollapse}" id="trip-list">
    <div :class="{'align-center': isCollapse}" id="trip-settings">
      <el-tooltip effect="dark" content="Settings" placement="top">
        <font-awesome-icon v-if="!isCollapse" class="setting-icon icon" icon="cog"/>
      </el-tooltip>
      <el-tooltip effect="dark" content="Filters" placement="top">
        <font-awesome-icon v-if="!isCollapse" class="setting-icon icon" icon="filter"/>
      </el-tooltip>
      <el-tooltip effect="dark" content="Todo" placement="top">
        <font-awesome-icon v-if="!isCollapse" class="setting-icon icon" icon="bell"/>
      </el-tooltip>
      <el-tooltip effect="dark" content="Add a trip" placement="top">
        <font-awesome-icon v-if="!isCollapse" class="setting-icon icon" icon="plus"/>
      </el-tooltip>
      <el-tooltip effect="dark" content="Minimize list" placement="top">
        <font-awesome-icon v-if="!isCollapse" @click="isCollapse = true" class="setting-icon icon" icon="angle-double-left"/>
      </el-tooltip>
      <el-tooltip effect="dark" content="Show List" placement="top">
        <font-awesome-icon v-if="isCollapse" @click="isCollapse = false" class="setting-icon icon" icon="angle-double-right"/>
      </el-tooltip>
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
          <span slot="title">Current</span>
        </template>
        <el-menu-item index="1-1">
          <span class="date">7.21-7.25</span> Paris
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <font-awesome-icon :class="{icon: !isCollapse}" icon="calendar-check"/>
          <span slot="title">Booking</span>
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
          <span slot="title">Planning</span>
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
          <span slot="title">Completed</span>
        </template>
        <el-menu-item-group>
          <template slot="title">2019</template>
          <el-menu-item index="4-1">
            Utah & Arizona
          </el-menu-item>
          <el-menu-item index="4-2">
            San Francisco
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">2018</template>
          <el-menu-item index="4-3">
            Oahu
          </el-menu-item>
          <el-menu-item index="4-5">
            Atlantic Canada
          </el-menu-item>
          <el-menu-item index="4-6">
            Seattle
          </el-menu-item>
          <el-menu-item index="4-7">
            New York
          </el-menu-item>
          <el-menu-item index="4-8">
            Vietnam
          </el-menu-item>
          <el-menu-item index="4-9">
            Nanjing & Hangzhou
          </el-menu-item>
          <el-menu-item index="4-9">
            Toronto
          </el-menu-item>
          <el-menu-item index="4-10">
            Los Angeles
          </el-menu-item>
        </el-menu-item-group>
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
  #trip-list.collapse{
    width: 65px;
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
    bottom: 10px;
    height: 20px;
    width: 219px;
    left: 0;
    z-index: 100;
    background: #545c64;
    padding: 5px 15px;
    color: #aaaaaa;
    font-size: 16px;
    overflow: hidden;
    -webkit-transition: width 0.5s ease-in; /* Safari prior 6.1 */
    transition: width 0.5s ease-in;
  }
  .setting-icon{
    cursor: pointer;
  }
  #trip-settings.align-center{
    text-align: center;
    width: 30px;
    -webkit-transition: none; /* Safari prior 6.1 */
    transition: none;
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
  .hide{
    display: none !important;
  }
  .hide #search-input{
    width: 0px;
  }
  .el-menu--collapse .el-submenu{
    text-align: center;
  }
</style>
