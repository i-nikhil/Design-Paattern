class CryptoApi //simulating external API
{
    getValue(coin)
    {
        console.log('External API called...');
        switch(coin)
        {
            case 'Bitcoin': return '$8,500'
            case 'Litecoin': return '$500'
            case 'Dogecoin': return '$1'
            case 'Ethereum': return '$175'
            default: return 'N/A'
        }
    }
}

class Proxy
{
    #apiInstance
    #cache
    constructor()
    {
        this.#apiInstance = new CryptoApi()
        this.#cache = {}
    }
    getValue(coin)
    {
        if(!this.#cache[coin])
        this.#cache[coin] = this.#apiInstance.getValue(coin)

        return this.#cache[coin]
    }
}

let proxy = new Proxy()
console.log(proxy.getValue('Bitcoin'))
console.log(proxy.getValue('Litecoin'))
console.log(proxy.getValue('Dogecoin'))
console.log(proxy.getValue('Ethereum'))

console.log(proxy.getValue('Bitcoin'))
console.log(proxy.getValue('Litecoin'))
console.log(proxy.getValue('Dogecoin'))
console.log(proxy.getValue('Ethereum'))
