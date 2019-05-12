<template>
  <el-card class="widget">
    <div slot="header">
      <strong>
        <slot name="header">
          currency name
        </slot>
      </strong>
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
        data() {
            return {
                datacollection: null,
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                },
                chartStyle: {
                    height: '160px',
                    position: 'relative'
                }
            }
        },
        mounted() {
            this.fillData()
        },
        methods: {
            fillData() {
                this.datacollection = {
                    labels: [0, this.getRandomInt(), 10, 'a'],
                    datasets: [
                        {
                            label: 'Data One',
                            borderColor: '#68f889',
                            backgroundColor: '#68f889',
                            data: [5, this.getRandomInt(), 10, 14],
                            fill: false
                        }
                    ]
                }
            },
            getRandomInt() {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        }
    }
</script>

<style lang="scss" scoped>
  .widget {
    width: 512px;
    height: 256px;
    margin: 10px 30px;
  }

</style>
