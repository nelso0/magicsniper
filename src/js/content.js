let market = ''
let collectionName = ''
let floorPrice = 0
let totalSupply = {value: 0, real: false}
let customSupply = {value: 0, enabled: false}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === 'search') {
        let links = [...document.querySelectorAll('.grid-card__main[data-score]')]
            .filter(card => (card.dataset.score * 1) > request.gt)
            .map(card => ({
                link: card.dataset.link, 
                name: card.dataset.name,
                price: card.dataset.price,
                rank: (card.dataset.rank * 100),
                score: card.dataset.score
            }))

        sendResponse(links)
        return true
    }
    else if(request.action === 'get-supply') {
        sendResponse({totalSupply, customSupply, collectionName})
        return true
    }
    else if(request.action === 'set-supply') {
        customSupply = request.customSupply
        
        market = location.pathname.split('/').pop()
        chrome.storage.local.set({[market]: request.customSupply})

        init().then(() => document.querySelectorAll('.grid-card__main').forEach(work))

        sendResponse('done')
        
        return true
    }
})

let interval = setInterval(() => {
    if(!document.body) return

    let observer = new MutationObserver(pageUpdated)
    observer.observe(document.body, {childList: true, subtree: true})
    
    clearInterval(interval)
}, 100)


async function pageUpdated(mutations, observer) {
    let nfts = document.querySelectorAll('.grid-card__main:not(.skeleton,[data-score])')
    
    if(!nfts.length) return
    
    // console.log(nfts)
    init().then(() => nfts.forEach(work))
    // for (const mutation of mutations) {
    //     let cards = [...mutation.addedNodes].filter(i => {
    //         console.log(i);
    //         return i.nodeType === Node.ELEMENT_NODE && ((i.classList.contains('grid-card__main') && !i.classList.contains('skeleton')) || i.classList.contains('tw-flex-wrap'))
    //     })

    //     if(!cards.length) continue

    //     // console.log(cards)
    //     await init()

    //     for (const card of cards) {
    //         if(card.classList.contains('grid-card__main')) {
    //             console.log('card loaded')
    //             work(card)
    //         }
    //         else if(card.classList.contains('tw-flex-wrap')) {
    //             console.log('page loaded')
    //             document.querySelectorAll('.grid-card__main:not(.skeleton)').forEach(work)
    //         }
    //     }
    // }
}

async function init() {
    try {
        collectionName = document.querySelector('h1')?.innerText.trim() || 'N/A'
        
        let supplyTxt = document.querySelector('[title="Total Supply"]')?.parentElement?.nextElementSibling.innerText
        let floorPriceTxt = document.querySelector('[title="Floor Price"]')?.parentElement?.nextElementSibling.innerText

        if(supplyTxt) {
            // console.log('real supply available')

            let [unit] = supplyTxt.match(/[A-Z]/) || []
            let supplyNum = parseFloat(supplyTxt.replace(/[^0-9\.]+/g, ''))
            let units = {K: 1000, M: 1000000, B: 1000000000}
            totalSupply.value = units[unit] ? supplyNum * units[unit] : supplyNum
            totalSupply.real = true
            
            chrome.storage.local.remove(market)
            customSupply = {value: 0, enabled: false}
        }
        else {
            // console.log('real supply not available')

            market = location.pathname.split('/').pop()
    
            let {[market]: supply} = await chrome.storage.local.get({[market]: {value: 0, enabled: false}})
            customSupply = supply
            
            totalSupply.value = customSupply.value
            totalSupply.real = false

            // console.log(`custom supply for [${market}]`, supply)
        }
        
        floorPrice = floorPriceTxt ? parseFloat(floorPriceTxt.replace(/[^0-9\.]+/g, '')) : 0
    } 
    catch (error) {
        console.log(error)
    }
}

function work(nftCard) {
    try {
        let rank = nftCard.querySelector('a[href*="moonrank.app"] span:last-child').innerText.trim() * 1
        let price = findElementByXpath(".//*[text()='Price']", nftCard).nextElementSibling.innerText.trim() * 1
        
        let score = 100 - (price / floorPrice) * 7 - (rank / totalSupply.value) * 100 * 4.5
        score = isFinite(score) ? (score < 0 ? 0 : score > 100 ? 100 : score).toFixed(2) : 0

        // console.log('floor price:', floorPrice, 'total supply:', totalSupply.value, 'rank', rank, 'price', price, 'output', score)
        
        let cardFooter = nftCard.querySelector('.tw-mt-3 .tw-justify-between')
        
        if(cardFooter) {
            let scoreEl = cardFooter.querySelector('[data-score]')

            if(!scoreEl) {
                cardFooter.insertAdjacentHTML(
                    'beforeend', 
                    '<span class="tw-text-sm tw-text-light-gray-500">Score</span>'
                )
                
                cardFooter.insertAdjacentHTML(
                    'beforeend', 
                    `<span class="tw-text-sm tw-text-white-2 tw-font-bold" data-score="true">${score}</span>`
                )
            }
            else {
                scoreEl.innerText = score
            }
        }

        let nftTitle = nftCard.querySelector('a[href*="/item-details"] h6')

        nftCard.dataset.score = score
        nftCard.dataset.link = nftTitle.closest('a').href
        nftCard.dataset.name = nftTitle.innerText.trim()
        nftCard.dataset.price = (price).toFixed(2)
        nftCard.dataset.rank = totalSupply.value > 0 ? (rank / totalSupply.value).toFixed(2) : 0
    } 
    catch (error) {
        console.log(error)
    }
}

function findElementByXpath(xpath, parent = document) {
    var el = document.evaluate(xpath, parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    if (el && el.singleNodeValue) {
        return el.singleNodeValue;
    }
}