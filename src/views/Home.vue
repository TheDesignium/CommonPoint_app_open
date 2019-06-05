<template>
  <div class="home">
    <div v-for="currency in currencies" :key="currency.id">
      <widget v-if="loaded" :name="currency.name" :dataSet="moldingData(currency.id)"></widget>
    </div>
  </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import Widget from '@/components/Widget';

    export default {
        name: 'home',
        components: {
            Widget
        },
        data() {
            return {
                loaded: false
            }
        },
        computed: {
            ...mapState({
                currencies: state => state.currencies,
                issueAmounts: state => state.issueAmounts
            })
        },
        async created() {
            try {
                await this.getCurrencies();
                // await Promise.all(this.currencies.map(x => this.getIssueAmount({id: x.id})));
                const idList = this.currencies.map(x => x.id);
                await this.getIssueAmountsById({ids: idList});
                this.loaded = true;
            } catch (e) {
                console.error(e);
                // Error handing...
            }
        },
        methods: {
            moldingData(id) {
                return this.issueAmounts[id].reduce((acc, x) => ({
                    labels: [...acc.labels, this.getDate(x["created_at"])],
                    data: [...acc.data, x["amount"]]
                }), {labels: [], data: []});
            },
            getDate(str) {
                const dt = new Date(str);
                const y = dt.getFullYear();
                const m = dt.getMonth() + 1;
                const d = dt.getDate();
                return `${y}-${m}-${d}`
            },
            ...mapActions([
                'getCurrencies',
                'getIssueAmount',
                'getIssueAmountsById'
            ]),
        }
    }
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-wrap: wrap;
  }
</style>
