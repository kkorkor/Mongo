var axios = require("axios")
var cheerio = require("cheerio")

function scrape(){
    return axios.get("https://www.goal.com/en-us/matches").then(function(res){
        var $ = cheerio.load(res.data)
        var matches = []
        $(".competition-matches").each(function(i,element){
            var matchname = $(this)
                .children(".competition-title")
                .text()
                .trim()
            if (matchname){
                matches.push(matchname)
                console.log(matchname)
            } 
        })
        return matches
    })
}
scrape()
module.exports = scrape