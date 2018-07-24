// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");
var Project = require("../models/Project");

const categories =[
{category:"CRM",url:"https://www.taprootplus.org/opportunities?utf8=%E2%9C%93&opportunity_keyword=&all=on&project_category_id=18&&page="},
{category:"Website design",url:"https://www.taprootplus.org/opportunities?utf8=%E2%9C%93&opportunity_keyword=&all=on&project_category_id=19&&page="},
{category:"Mobile development",url:"https://www.taprootplus.org/opportunities?utf8=%E2%9C%93&opportunity_keyword=&all=on&project_category_id=21&&page="},
{category:"Website development",url:"https://www.taprootplus.org/opportunities?utf8=%E2%9C%93&opportunity_keyword=&all=on&project_category_id=20&&page="}
];

var counter;
var countdown;

function parse (i,j) {
  request(categories[j].url+i, function(error, response, html) {

          // Load the HTML into cheerio and save it to a variable
          // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
          var $ = cheerio.load(html);

          // An empty array to save the data that we'll scrape
          //var results = [];

          // With cheerio, find each p-tag with the "title" class
          // (i: iterator. element: the current element)

          $("div.panel.grid-panel").each(function(i, element) {
             // console.log($(element).text());
            // Save the text of the element in a "title" variable
            var picture = $(element).children("div.project-image").css("background-image");
            picture = picture.replace('url(\'','').replace('\')','');
            picture = picture.replace('url(','').replace(')','');


            
             var link = "https://www.taprootplus.org" + $(element).find("a.project-preview-link").attr("href");


              var category = categories[j].category;//$(element).find("span.label.secondary.project-category").text();


            var title = $(element).find("h1.project-heading").text();

            var subtitle = $(element).find("h2.project-subheading").text();

            var duration;
            var location;
            var note;
            $(element).find("span.icon-list-text").each(function(i, element2) {
              if (i==0)
                duration=$(element2).text();
              else
              if (i==1)
                location=$(element2).text();
              else
                note=$(element2).text();
            });

            let result = {};
            result.picture = picture;
            result.title = title;
            result.link = link;
            result.category = category;
            result.subtitle = subtitle;
            result.duration = duration;
            result.location = location;
            result.note = note;

            Project.create(result);
            counter++;
            //console.log(count);
          });
                  // Log the results once you've looped through each of the elements found with cheerio
          //console.log(results);
          countdown--;
          //console.log(countdown);
        });
}

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

module.exports = {
  updateDb : async function(req, res){
    counter = 0;
    countdown = categories.length * 10;
    Project.remove({}, function (err, rem) {
      var collections = ["projects"];
      
      for(let j = 0; j < categories.length; j++){
        for(let i = 1; i < 11; i++){
        //------------------
        // Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
          parse(i,j);
        }
      }
      
      
      
    });
    while(countdown > 0){
      //console.log("s" + countdown);
        await sleep(5000);
    }
    console.log("----------- finished, " + counter + " projects loaded");
    res.json({
      count: counter
    });
  }
};
