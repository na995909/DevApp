/*
*Utility file used for scrapping www.freelancer.com content into mongoDB
*/
var axios = require("axios");
var cheerio = require("cheerio");
var Project = require("../models/Project");

module.exports = {
	updateDb : function(req, res){
    let counter = 0; 
		Project.remove({}, function (err, rem) {
      // Get the website data
      for(let i = 1; i < 51; i++){

        axios.get("https://www.freelancer.com/jobs/regions/"+i+"/").then(function (response) {

          // Load into cheerio for scraping by element(s)
          let $ = cheerio.load(response.data);
          

          let content = $("div.JobSearchCard-primary");
          console.log(content.length);
          // Loop through all the results that have project.
          content.each(function (i, element) {
            let result = {};
            //result.link = "https://up-for-grabs.net/#/" + $(this).children().first().attr("href");
            result.title = $(this).find("a.JobSearchCard-primary-heading-link").text();
            
            result.summary = $(this).find("p.JobSearchCard-primary-description").text();
            result.link = "https://www.freelancer.com/jobs/regions" + $(this).find("a.JobSearchCard-primary-heading-link").attr("href");
            
            let duplicate = false;
            

            // Create project only if not a duplicate and all three have values
            if (!duplicate && result.title && result.link && result.summary) {
              Project.create(result);
              counter++;
            }

          });

        });
      }
    });
    // Return number of articles added
    res.json({
      count: counter
    });
	}
};