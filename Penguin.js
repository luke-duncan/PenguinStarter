


var penguinPromise = d3.json("classData.json")

penguinPromise.then(
    function(penguins)
    {
        console.log("worked",penguins);
        drawTable(penguins)
    },
    
    function(err)
    {
        console.log("failed",err);
    })



var drawTable = function(penguins)
{
var rows = d3.select("#ptable")
    .selectAll("tr")
    .data(penguins)
    .enter()
    .append("tr")

    rows.append("td")
    .append("img")
    .attr("src", function(penguins){return penguins.picture})
    
    rows.append("td")
    .text(function(penguins){
        return getmeanQuizes
})



var getmeanQuizes = function(penguin)
        {
            var meanQuizes = penguin.quizes.map(grade)
            return (quizes.grade)
        }
        return d3.mean(meanQuizes)}

