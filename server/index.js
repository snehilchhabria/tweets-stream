const needle =  require('needle')
const config = require('dotenv').config()
const TOKEN = process.env.TWITTER_BEARER_TOKEN

console.log(TOKEN)

const rulesURL ='https://api.twitter.com/2/tweets/search/stream/rules'
const streamURL='https://api.twitter.com/2/tweets/search/stream?tweet.field=public_metrics&expansions=author_id'

const rules = [{ value: 'giveaway' }]

//GET stream rules
async function getRules() {
    const response = await needle('get', rulesURL, {
        headers: {
            Authorization: `Bearer &{TOKEN}`
        }
    })

    return response.body
}
