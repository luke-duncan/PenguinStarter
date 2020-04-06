
var classDataPromise = d3.json("classData.json");
    classDataPromise.then(function(penguin) {
        console.log("worked", penguin);
        drawTable(penguin)
    },
    
    function(err){
        console.log("failed:", err);
    })
var getmeanHW = function(penguin){
var meanHW = penguin.homework.map(function(homework){
            return (homework.grade)})
                                              
            return d3.mean(meanHW)}

var getmeanQuizes = function(penguin)
        {
            var meanQuizes = penguin.quizes.map(function(quizes){
                                                
            return (quizes.grade)
                                                })
        return d3.mean(meanQuizes)}

   var getmeanTest = function(penguin)
    { var meanTest = 
        penguin.test.map(function(test){ 
        return (test.grade)})
    
    return d3.mean(meanTest)}
   
   var getFinal = function(penguin)
   {return penguin.final[0].grade}
    
                                      
   
        



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
        return (penguin.final[0].grade)
    
        })
    
    
    d3.select("#HW").on("click", function()
                  { console.log("hi")
                      
    penguin.sort(function(charA,charB)
        {
        if(getmeanHW(charA) == getmeanHW(charB))
            {return 0;}
        else if(getmeanHW(charA) < getmeanHW(charB))
            {return 1;}
        else 
            {return -1;}
    } )
        d3.selectAll("tbody tr")
        .remove()
        drawTable(penguin)
        
                
        })
   
    
    
    d3.select("#Quiz").on("click", function()
                  { console.log("hi")
                      
    penguin.sort(function(charA,charB)
        {
        if(getmeanQuizes(charA) == getmeanQuizes(charB))
            {return 0;}
        else if(getmeanQuizes(charA) < getmeanQuizes(charB))
            {return 1;}
        else 
            {return -1;}
    } )
        d3.selectAll("tbody tr")
        .remove()
        drawTable(penguin)
          })
    
    
    
    d3.select("#test").on("click", function()
                  { console.log("hi")
                      
    penguin.sort(function(charA,charB)
        {
        if(getmeanTest(charA) == getmeanTest(charB))
            {return 0;}
        else if(getmeanTest(charA) < getmeanTest(charB))
            {return 1;}
        else 
            {return -1;}
    } )
        d3.selectAll("tbody tr")
        .remove()
        drawTable(penguin)
        
                
        })
    
     d3.select("#final").on("click", function()
                  { console.log("hi")
                      
    penguin.sort(function(charA,charB)
        {
        if(getFinal(charA) == getFinal(charB))
            {return 0;}
        else if(getFinal(charA) < getFinal(charB))
            {return 1;}
        else 
            {return -1;}
    } )
        d3.selectAll("tbody tr")
        .remove()
        drawTable(penguin)
        
                
        })
   
    
    
    
    
    
}









