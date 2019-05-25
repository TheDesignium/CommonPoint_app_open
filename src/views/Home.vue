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
                await Promise.all(this.currencies.map(x => this.getIssueAmount({id: x.id})));
                this.loaded = true;
            } catch (e) {
                // Error handing...
            }
        },
        methods: {
            moldingData(id) {
                return this.issueAmounts[id].reduce((acc, x) => ({
                    label: [...acc.label, x["created_at"]],
                    data: [...acc.data, x["amount"]]
                }), {label: [], data: []});
            },
            ...mapActions([
                'getCurrencies',
                'getIssueAmount'
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
