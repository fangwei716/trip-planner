<template>
  <div class="trip-day">
    <div class="tags">
        <el-tooltip effect="dark" content="click to see/edit" placement="top">
            <el-tag size="small" class="tag">place of interests: 1</el-tag>
        </el-tooltip>
        <el-tooltip effect="dark" content="click to see/edit" placement="top">
            <el-tag size="small" class="tag" type="danger">restaurants: 2</el-tag>
        </el-tooltip>
        <el-tooltip effect="dark" content="click to see/edit" placement="top">
            <el-tag size="small" class="tag" type="warning">events: 0</el-tag>
        </el-tooltip>
        <el-tooltip effect="dark" content="click to see/edit" placement="top">
            <el-tag size="small" class="tag" type="success">todo: 2</el-tag>
        </el-tooltip>
    </div>
    <el-timeline>
        <el-timeline-item
            v-for="(activity, index) in timeline"
            :key="dayIndex + ',' + index"
            size="large"
            :timestamp="activity.notes">
            <div>
                <div class="header">
                    <span>
                        {{activity.timestamp}}
                    </span>
                    <div class="actions">
                        <el-tooltip class="action-icon" effect="dark" content="edit" placement="bottom">
                            <font-awesome-icon icon="edit"/>
                        </el-tooltip>
                        <el-tooltip class="action-icon" effect="dark" content="delete" placement="bottom">
                            <font-awesome-icon icon="trash-alt"/>
                        </el-tooltip>
                        <el-tooltip class="action-icon" effect="dark" content="add" placement="bottom">
                            <font-awesome-icon icon="plus"/>
                        </el-tooltip>
                    </div>
                </div>
                <div class="location" v-if="activity.location">
                    <span>{{activity.location}}</span>
                    <span v-if="!!activity.navigationLink" class="link" @click="showURL(activity.navigationLink)"><font-awesome-icon icon="map-marked-alt"/></span>
                </div>
            </div>
            <span class="icon-container" :style="'font-size:' + activity.iconSize" slot="dot">
                <font-awesome-icon class="icon" :icon="activity.icon"/>
            </span>
        </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
  import { remote } from 'electron'
  import {mixin} from '@/base.js'
  export default {
    name: 'trip-day',
    mixins: [mixin],
    props: {
        timeline: Array,
        date: Date,
        dayIndex: Number
    },
    data() {
      return {
      }
    },
    methods: {
        showURL(link){
            let win = new remote.BrowserWindow({ width: 1000, height: 600 });
            win.loadURL(link);
            win.on('closed', () => {
                win = null
            });
        }
    }
  }
</script>

<style scoped>
    .header{
        display: flex;
    }
    .header span{
        margin-right: 20px;
    }
    .icon{
        color: #0bbd87;
    }
    .actions{
        color: #888;
        display: none;
    }
    .icon-container{
        background: #fff;
        padding: 2px 0;
        position: relative;
        left: -2px;
    }
    .action-icon{
        margin-right: 5px;
        cursor: pointer;
    }
    .header:hover .actions{
        display: block;
    }
    .tags{
        margin-bottom: 15px;
    }
    .tags .tag{
        cursor: pointer;
    }
    .location{
        color: #888;
    }
    .link{
        margin-left: 10px;
        color: #409EFF;
        cursor: pointer;
    }
</style>

