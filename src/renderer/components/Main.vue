<template>
  <div id="trip-content">
      <div id="trip-content-container">
        <div id="toolbar">
            <el-tooltip effect="dark" content="Export to pdf" placement="bottom">
                <font-awesome-icon class="icon" icon="file-pdf"/>
            </el-tooltip>
            <el-tooltip effect="dark" content="Settings" placement="bottom">
                <font-awesome-icon class="icon" icon="cog"/>
            </el-tooltip>
        </div>
        <input id="trip-title" v-model="title" placeholder="Enter trip title here..."/>
        <div id="trip-date">
            <el-date-picker
                v-model="dates"
                :clearable="false"
                type="daterange"
                @change="onDatesChange"
                range-separator="to"
                start-placeholder="Start Date"
                end-placeholder="End Date">
            </el-date-picker>
            <div id="trip-tags">
                <el-tag class="tag days" type="info" v-if="dates.length > 0">days: {{getDays(dates)}}</el-tag>
                <el-tooltip effect="dark" content="click to see/edit" placement="top">
                    <el-tag class="tag">place of interests: 0</el-tag>
                </el-tooltip>
                <el-tooltip effect="dark" content="click to see/edit" placement="top">
                    <el-tag class="tag" type="danger">restaurants: 0</el-tag>
                </el-tooltip>
                <el-tooltip effect="dark" content="click to see/edit" placement="top">
                    <el-tag class="tag" type="warning">events: 0</el-tag>
                </el-tooltip>
                <el-tooltip effect="dark" content="click to see/edit" placement="top">
                    <el-tag class="tag" type="success">todo: 0</el-tag>
                </el-tooltip>
            </div>
        </div>
        <div id="trip-days"  v-if="dates.length > 0">
            <el-collapse accordion>
                <el-collapse-item :key="index" v-for="(day, index) in days.filter((item) => !!item.date)">
                    <template slot="title">
                        <el-tag size="small" class="tag" type="success">Day {{index + 1}}</el-tag>
                        {{formatDate(day.date)}}
                    </template>
                    <day :date="day.date" :timeline="day.timeline" :dayIndex="index"/>
                </el-collapse-item>
            </el-collapse>
        </div>
      </div>
  </div>
</template>

<script>
  import {mixin} from '@/base.js'
  import day from '@/components/main/Day.vue'
  export default {
    name: 'trip-main',
    mixins: [mixin],
    components: { day },
    data() {
      return {
          title: "Paris",
          dates: [new Date("2019-07-27"), new Date("2019-07-28")],
          days: [{
              date: new Date("2019-07-27"),
              timeline: [{
                  icon: "map-marker-alt",
                  type: "origin",
                  timestamp: "Calgary",
                  notes: "Leaving from home at 07:30",
                  iconSize: "18px"
              },{
                  icon: "plane-departure",
                  timestamp: "10:00 MST, YYC Airport",
                  location: "Calgary International Airport",
                  navigationLink: "https://goo.gl/maps/xtTmekGf6HXE6WBy7",
                  notes: "WS 10, ref: 6DH278",
                  iconSize: "14px"
              },{
                  icon: "plane-arrival",
                  timestamp: "15:00 CEST, CDG Airport",
                  notes: "duration: 9h 20m",
                  iconSize: "14px"
              }, {
                  icon: "car-side",
                  timestamp: "National car rental CDG",
                  type: "car-rental",
                  notes: "ref: JH9843JHDS",
                  location: "",
                  iconSize: "14px"
              }, {
                  icon: "hotel",
                  timestamp: "Hyatt Regency Paris Etoile",
                  type: "hotel",
                  notes: "check-in: 15:00",
                  location: "3 Place du Général Kœnig, 75017 Paris",
                  navigationLink: "https://goo.gl/maps/WCTZkYfH1U9vjxLZ6",
                  iconSize: "14px"
              }, {
                  icon: "map-marker-alt",
                  type: "destination",
                  timestamp: "Paris",
                  iconSize: "18px"
              }]
          }, {
              date: new Date("2019-07-28"),
              timeline: []
          }],
          placeOfInterests: [],
          restaurants: [],
          events: [],
          reminders: []
      }
    },
    methods: {
        onDatesChange(){
            const startDate = this.formatDate(this.dates[0]);
            const endDate = this.formatDate(this.dates[1]);
            this.$confirm(`Are you sure you want to set the dates from ${startDate} to ${endDate}?`, 'Confirmation', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.setDays(this.dates);
            }).catch(() => {
                this.resetDays();         
            });
        },
        setDays(dates){
            let days = [];
            const startDate = dates[0];
            for (let index = 0; index < this.getDays(dates); index++) {
                days.push(this.getDay(startDate, index));
            }
            for (let i = 0; i < this.days.length; i++) {
                if(days.length > 0){
                    this.days[i].date = days.shift();
                }else{
                    this.days[i].date = null;
                }
            }
            while(days.length > 0){
                this.days.push(this.getEmptyDate(days.shift()));
            }
        },
        resetDays(){
            let startDate = null;
            let endDate = null;
            for (let index = 0; index < this.days.length; index++) {
                if(index === 0){
                    startDate = this.days[index].date;
                }
                if(this.days[index].date){
                    endDate = this.days[index].date;
                }
            }
            if(startDate && endDate){
                this.dates = [startDate, endDate];
            }else{
                this.dates = [];
            }
        },
        getEmptyDate(date){
            return {
                date,
                timeline: []
            }
        }
    }
  }
</script>

<style scoped>
    #trip-content{
        width: calc(100% - 250px);
        overflow-x: hidden;
        overflow-y: auto;
    }
    .collapse + #trip-content{
        width: calc(100% - 65px);
    }
    #trip-content-container{
        padding: 30px 5%;
    }
    #trip-title{
        width: 100%;
        border: none;
        height: 60px;
        line-height: 60px;
        font-size: 35px;
        outline: none;
    }
    .tag{
        cursor: pointer;
    }
    .tag.days{
        cursor: default;
    }
    #trip-date{
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }
    #trip-tags{
        min-width: 300px;
        padding-top: 5px;  
    }
    #trip-days{
        margin: 50px 0;
    }
    #trip-days .tag{
        margin-right: 10px;
    }
    #toolbar{
        position: absolute;
        right: 30px;
        top: 20px;
    }
    #toolbar .icon{
        color: #666;
        font-size: 20px;
        margin-right: 10px;
        cursor: pointer;
    }
</style>
<style>
    #trip-date .el-range-editor{
        border: none;
    }
    #trip-content .el-collapse-item__content{
        padding: 10px 20px;
    }
</style>

