#!/usr/bin/env /usr/local/bin/node
const request = require('request-promise-native');

const API_KEY='<YourAPI KEY>'
const CHANNEL_ID='<Your Channel ID>'


const requestParameters={
    uri:'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+CHANNEL_ID+'&key='+API_KEY,
    json:true,

}


request(requestParameters).then(data=>{
console.log("🔥"+data.items[0].statistics.subscriberCount +" subscribers")
console.log('---')
console.log("Views: "+data.items[0].statistics.viewCount)
console.log("Videos: "+data.items[0].statistics.videoCount)

}).catch(error=>{
});