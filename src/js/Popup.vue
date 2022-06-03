<template>
    <main>
        <header>
            <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.58 33.12"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><circle class="cls-1" cx="27.02" cy="9.07" r="9.07"/><circle class="cls-2" cx="27.02" cy="9.07" r="7.01"/><circle class="cls-1" cx="27.02" cy="9.07" r="5.08"/><circle class="cls-2" cx="27.02" cy="9.07" r="3.07"/><circle class="cls-1" cx="27.02" cy="9.07" r="1.3"/><text class="cls-3" transform="translate(0 30.21)"><tspan class="cls-4">M</tspan><tspan x="8.29" y="0">agic </tspan><tspan class="cls-4" x="27.91" y="0">S</tspan><tspan x="34.26" y="0">niper</tspan></text></g></g></svg>
            <section class="info-chips">
                <span class="status-chip info-chip">
                    <span 
                        class="dot" 
                        :class="{
                            'success-dot': status.type == 'success',
                            'warning-dot': status.type == 'warning',
                            'error-dot': status.type == 'error'
                        }">
                    </span>
                    {{ status.msg }}
                </span>
                <span class="collection-chip info-chip">
                    Collection: {{ collectionName }}
                </span>
            </section>
        </header>

        <section class="content">

            <section class="action-bar">
                <section class="input-wrapper">
                    <input 
                        type="number" 
                        v-model.number="score"
                        :disabled="isSearching || !isConnected"
                        placeholder="Score..."
                        min="0"
                        class="input-control">
                    <button class="btn" @click="search" :disabled="isSearching || !isConnected">
                        <img src="img/search.svg" class="icon-img">
                    </button>
                </section>
                
                <section class="input-wrapper" v-if="isConnected && !orignalSupply">
                    <input 
                        type="number" 
                        placeholder="Supply..."
                        min="1"
                        v-model.number="customSupply.value"
                        class="input-control">
                    <button class="btn" @click="setSupply">
                        <img src="img/tick.svg" class="icon-img">
                    </button>
                </section>
            </section>

            <table class="results-table">
                <thead>
                    <th>Score</th>
                    <th>Name/Title</th>
                    <th>Rarity %</th>
                    <th>Price</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-if="!results.length && !isSearching && !supplying">
                        <td colspan="5" class="no-results-txt">
                            No result to show
                        </td>
                    </tr>
                    <tr v-else-if="isSearching || supplying">
                        <td colspan="5" class="no-results-txt">
                            Please wait...
                        </td>
                    </tr>
                    <tr v-for="item in results" :key="item.name">
                        <td>{{ item.score }}</td>
                        <td>{{ item.name }}</td>
                        <td>Top {{ item.rank }}%</td>
                        <td>{{ item.price }} SOL</td>
                        <td>
                            <a :href="item.link" target="_blank">
                                <img src="img/external-link.svg">
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

        </section>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                customSupply: {enabled: false, value: ''},
                orignalSupply: false,
                score: '',
                status: {type: '', msg: ''},
                results: [],
                isSearching: false,
                isConnected: false,
                supplyAvailable: false,
                tabId: null,
                supplying: false,
                collectionName: 'N/A'
            }
        },
        async created() {
            let [tab] = await chrome.tabs.query({active: true, currentWindow: true})
            
            try {
                this.tabId = tab.id
                this.isConnected = tab.url.match(new RegExp('https://magiceden.io/marketplace/.+')) !== null

                if(this.isConnected) {
                    this.status.type = 'success'
                    this.status.msg = 'Connected'
                }
                else {
                    this.status.type = 'error'
                    this.status.msg = 'Disconnected'
                }

                let {totalSupply, customSupply, collectionName} = await chrome.tabs.sendMessage(this.tabId, {action: 'get-supply'})
                console.log(collectionName)
                this.orignalSupply = totalSupply.real
                
                this.customSupply = customSupply
                this.customSupply.value = customSupply.enabled ? customSupply.value : null

                this.supplyAvailable = totalSupply.real || customSupply.enabled
                this.collectionName = collectionName

                if(this.isConnected && !this.supplyAvailable) {
                    this.status.type = 'warning'
                    this.status.msg = 'Supply not found, need input'
                }
            }
            catch (error) {
                console.log(error)
            }
        },
        methods: {
            async search() {
                this.isSearching = true

                await new Promise(resolve => setTimeout(resolve, 500))

                try {
                    let payload = {action: 'search', gt: this.score}
                    let results = await chrome.tabs.sendMessage(this.tabId, payload)
                    this.results = results || []
                }
                catch (error) {
                    console.log(error.message)
                }

                this.isSearching = false
            },
            async setSupply() {
                this.customSupply.enabled = true
                this.supplying = true
                await new Promise(resolve => setTimeout(resolve, 500))
                
                try {
                    let payload = {action: 'set-supply', customSupply: this.customSupply}
                    let response = await chrome.tabs.sendMessage(this.tabId, payload)
                    console.log(response)

                    if(response == 'done') {
                        this.supplyAvailable = true
                        this.status.type = 'success'
                        this.status.msg = 'Connected'
                    }
                } 
                catch (error) {
                    console.log(error.message)
                }
                this.supplying = false
            }
        }
    }
</script>