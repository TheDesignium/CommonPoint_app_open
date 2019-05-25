<template>
  <el-card class="widget">
    <div slot="header">
      <div class="current-name">{{name}}</div>
      <div class="header-right">
        <span class="small-font">total</span><span class="large-font">10000P</span>
        <span class="space"></span>
        <span class="small-font">latest</span><span class="large-font">+1000P</span>
      </div>
    </div>
    <div>
      <widget-chart :chart-data="datacollection" :options="options" :styles="chartStyle"></widget-chart>
    </div>
  </el-card>
</template>

<script>
    import WidgetChart from './WidgetChart';

    export default {
        name: 'Widget',
        components: {WidgetChart},
        props: {
            name: {
                type: String,
                default: 'noname'
            },
            id: {
                type: String,
                default: ''
            },
            dataSet: {
                type: Object,
                default: {
                    labels: {
                        type: Array,
                        default: []
                    },
                    data: {
                        type: Array,
                        default: []
                    }
                }
            },
            accountAmount: {
                type: String,
                default: '0'
            }
        },
        data() {
            return {
                datacollection: null,
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                },
                chartStyle: {
                    height: '140px',
                    position: 'relative'
                }
            }
        },
        mounted() {
            this.fillData()
        },
        methods: {
            fillData() {
                this.datacollection = this.makeDataSets()
            },
            makeDataSets() {
                return {
                    labels: this.dataSet.labels,
                    datasets: [{
                        label: 'Data one',
                        borderColor: '#1ae9e3',
                        backgroundColor: '#1ae9e3',
                        fill: false,
                        data: this.dataSet.data
                    }]
                };
            }
        }
    }
</script>

<style lang="scss" scoped>
  .widget {
    /*width: 512px;*/
    padding: 10px;
    height: 256px;
    width: 480px;
    margin: 10px 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;

    .current-name {
      font-size: 24px;
    }

    .header-right {
      position: absolute;
      top: 45px;
      right: 20px;

      .small-font {
        font-size: 16px;
      }

      .large-font {
        font-size: 20px;
      }

      .space {
        margin-right: 10px;
      }
    }
  }

</style>
