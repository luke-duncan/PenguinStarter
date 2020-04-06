
var classDataPromise = d3.json("classData.json");
    classDataPromise.then(function(penguin) {
        console.log("worked", penguin);
        drawTable(penguin)
    },
    
    function(err){
        console.log("failed:", err);
    })



var drawTable = function(penguin)
{
var rows = 
    d3.select("table tbody")
    .selectAll("tr")
    .data(penguin)
    .enter()
    .append("tr")
    .classed("row",true)

    rows.append("td")
    .append("img")
    .attr("src", function(penguin){return "imgs/" + penguin.picture})
    
    rows.append("td")
    .text(function(penguin)
          {
        var getmeanQuizes = function(penguin)
        {
            var meanQuizes = penguin.quizes.map(function(quizes){
                                                
            return (quizes.grade)
                                                })
        return d3.mean(meanQuizes)
        }
        return getmeanQuizes(penguin)
        })
    
    rows.append("td")
    .text(function(penguin)
        {
     var getmeanHW = function(penguin)
        {
            var meanHW = penguin.homework.map(function(homework){
            return (homework.grade)})
                                              
            return d3.mean(meanHW)
        }
            return getmeanHW(penguin)
          })
 
    
    rows.append("td")
    .text(function(penguin)
    {
        var getmeanTest = function(penguin)
    { var meanTest = 
        penguin.test.map(function(test){ 
        return (test.grade)})
    
    return d3.mean(meanTest)
    
                                      }
    return getmeanTest(penguin)
    })
    
    
    rows.append("td")
    .text(function(penguin)
    {
        var getFinal = function(penguin)
        {var Final = 
            penguin.final.map(function(final)
            {return (final.grade)})
        
        return d3.mean(Final)
         
         return getFinal(penguin)
    
        }})
   
}




