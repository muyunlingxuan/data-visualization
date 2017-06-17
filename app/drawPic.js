/**
 * Created by 000 on 2017/6/9.
 */
var width = 0;
var height = 0;

var formatNumber = d3.format(",.0f");
var formatPercent  = d3.format(",.2%");

function drawBubbleView(dataCorrent){
    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    var format = d3.format(",d");

    var color = d3.scaleSequential(d3.interpolatePlasma)
        .domain([-4, 4]);

    var stratify = d3.stratify()
        .parentId(function(d) {
            return d.id.substring(0, d.id.lastIndexOf("."));
        });

    var pack = d3.pack()
        .size([width - 2, height - 2])
        .padding(3);

    var root = stratify(dataCorrent)
        .sum(function(d) { return d.Profit; })
        .sort(function(a, b) { return b.value - a.value; });

    pack(root);

    svg .select("g")
        .selectAll('*')
        .remove();

    var node = svg.select("g")
        .selectAll("g")
        .data(root.descendants())
        .enter().append("g")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
        .attr("class", function(d) { return "node" + (!d.children ? " node--leaf" : d.depth ? "" : " node--root"); })
        .each(function(d) { d.node = this; })
        .on("mouseover", hovered(true))
        .on("mouseout", hovered(false));

    node.append("circle")
        .attr("id", function(d) { return "node-" + d.id; })
        .attr("r", function(d) { return d.r; })
        .style("fill", function(d) { return color(d.depth); });

    var leaf = node.filter(function(d) { return !d.children; });

    leaf.append("clipPath")
        .attr("id", function(d) { return "clip-" + d.id; })
        .append("use")
        .attr("xlink:href", function(d) { return "#node-" + d.id + ""; });

    node.append("title")
        .text(function(d) { return d.id + "\n" + format(d.value); });

    function hovered(hover) {
        return function(d) {
            d3.selectAll(d.ancestors().map(function(d) { return d.node; })).classed("node--hover", hover);
        };
    }
}


function drawGeoview(geo_data,svg){
    width = svg.attr("width");
    height = svg.attr("height");

    svg .selectAll('*')
        .remove();

    var data = geo_data.features;
    //定义地图的投影
    var projection = d3.geoAlbersUsa()
        .translate([width/2, height/2])
        .scale([1000]);

    //定义路径生成器
    var path = d3.geoPath()
        .projection(projection);

    var domainMax = d3.max(data, function(d) { return d.properties.Value; });
    var radius = d3.scaleSqrt()
        .domain([0, domainMax])
        .range([0, 25]);
    /*
     sales--圆表示
     */
    function drawCircle(){
        svg.append("g")
            .attr("class", "bubble")
            .selectAll("circle")
            .data(data)
            .enter().append("circle")
            .attr("transform", function(d) { return "translate(" +  path.centroid(d)+ ")"; })
            .attr("r", function(d) {
                return radius(Math.abs(d.properties.Value));
            })
            .style("fill", function(d) {
                if(d.properties.Value<0)
                    return "#ff3c13";
                else
                    return "#7dff51";
            })
            .append("title")
            .text(function(d) {
                return d.properties.name
                    + "\nSales " + formatNumber(d.properties.Sales)
                    + "\nProfit " + formatNumber(d.properties.Profit)
                    + "\nProfit rate " + formatPercent(d.properties.Profit/d.properties.Sales);
            });
    }
    /*
     sales--圆表示end
     */
    svg.selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "border border--state")
        .attr("d", path)
        .style("fill", "#ccc")
        .append("title")
        .text(function(d) {
            return d.properties.name;
        });
    drawCircle();

    /*
     縮放
     */
    function zoomed() {
        var transform = d3.zoomTransform(this);
        projection.translate([width/2+transform.x, height/2+transform.y])
                  .scale(transform.k*1000);
        svg.selectAll("path")
            .attr("d", path);

        svg.selectAll(".bubble").remove();
        drawCircle();
    }
    var zoom = d3.zoom()
        .scaleExtent([1, 10])
       // .on("zoom", zoomed);
    svg.call(zoom);

    svg.select(".bubble").selectAll("circle").on("click" , function(d){
        filterCondition.filterType.State = d.properties.name;
        filterCondition.category.GeoCategory = "City";
        window.parent.changeDashboard(filterCondition);
    })
}

function drawBarview(data,svg){
    var margin = {top: 80, right: 80, bottom: 80, left: 80},

        width = 600 - margin.left - margin.right,

        height = 400 - margin.top - margin.bottom;


    var graph = svg.append("g")

        .attr("class", "graph")

        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    var x=d3.scaleBand()// x是序数比例尺
    // .domain(d3.range(4))
        .domain(data.map(function(d) { return d.OrderYear; }))

        .range([0,width])

        .padding(0.1);


    var y0 = d3.scaleLinear()
    //.domain([300, 1100]).range([height, 0]);
        .domain([0, d3.max(data, function(d) { return d.Sales; })])

        .range([height, 0]);


    var   y1 = d3.scaleLinear()
    //.domain([20, 80])
        .domain([0, d3.max(data, function(d) { return d.Profit; })])

        .range([height, 0]);


    var xAxis = d3.axisBottom(x);

    var yAxisLeft = d3.axisLeft(y0).ticks(4);

    var yAxisRight = d3.axisRight(y1).ticks(6);


    graph.append("g")

        .attr("class", "x axis")

        .attr("transform", "translate(0," + height + ")")

        .call(xAxis);


    graph.append("g")

        .attr("class", "y axis axisLeft")

        .attr("transform", "translate(0,0)")

        .call(yAxisLeft)

        .append("text")

        .attr("y", 6)

        .attr("dy", "-2em")

        .style("text-anchor", "end")

        .style("text-anchor", "end")

        .text("Sales");



    graph.append("g")

        .attr("class", "y axis axisRight")

        .attr("transform", "translate(" + (width) + ",0)")

        .call(yAxisRight)

        .append("text")

        .attr("y", 6)

        .attr("dy", "-2em")

        .attr("dx", "2em")

        .style("text-anchor", "end")

        .text("profit");



    bars = graph.selectAll(".bar").data(data).enter();



    bars.append("rect")

        .attr("class", "sales_fill")

        .attr("x", function(d) { return x(d.OrderYear); })

        .attr("width", x.bandwidth()/2)

        .attr("y", function(d) { return y0(d.Sales); })

        .attr("height", function(d,i,j) { return height - y0(d.Sales); })
        .append("title")
        .text(function(d) {
            return "Sales " + formatNumber(d.Sales)
                + "\nProfit " + formatNumber(d.Profit)
                + "\nProfit rate " + formatPercent(d.Profit/d.Sales);
        });



    bars.append("rect")

        .attr("class", "profit_fill")

        .attr("x", function(d) { return x(d.OrderYear) + x.bandwidth()/2; })

        .attr("width", x.bandwidth() / 2)

        .attr("y", function(d) { return y1(d.Profit); })

        .attr("height", function(d,i,j) { return height - y1(d.Profit); })
        .append("title")
        .text(function(d) {
            return "Sales " + formatNumber(d.Sales)
                + "\nProfit " + formatNumber(d.Profit)
                + "\nProfit rate " + formatPercent(d.Profit/d.Sales);
        });

}

function dashboard(id, fData,keys){
    $("#dashboard").empty();
    var barColor = 'steelblue';
    //var barColor = '#7dff51';
    var barColor2 = '#FF0000';
   // function segColor(c){ return {Technology:"#807dba", "Office Supplies":"#e08214",Furniture:"#41ab5d"}[c]; }

    var color = d3.scaleOrdinal(d3.schemeCategory20);
    function segColor(c){
        var map = new Array();
        for(i=0;i<keys.length;i++){
            map[keys[i]] = color(i);
        }
        return map[c];
    }

   /* function segColor(c){
        var map = new Array();
        map[keys[0]] = "#807dba";
        map[keys[1]] = "#e08214";
        map[keys[2]] = "#41ab5d";
        return map[c];
    }*/

    // compute total for each state.
    //fData.forEach(function(d){d.total=d.freq.Technology+d.freq["Office Supplies"]+d.freq.Furniture;});

    fData.forEach(function(d){
        for(i=0;i<keys.length;i++){
            var value = d.freq[keys[i]];
            d.total=d.total?d.total+value:value;
        }
    });
    // function to handle histogram.
    function histoGram(fD){
        var hG={},    hGDim = {t: 60, r: 0, b: 80, l: 40};
        hGDim.w = 500 - hGDim.l - hGDim.r,
            hGDim.h = 300 - hGDim.t - hGDim.b;

        //create svg for histogram.
        var hGsvg = d3.select(id).append("svg")
            .attr("width", hGDim.w + hGDim.l + hGDim.r)
            .attr("height", hGDim.h + hGDim.t + hGDim.b).append("g")
            .attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");

        // create function for x-axis mapping.
        var x=d3.scaleBand()// x是序数比例尺
            .domain(fD.map(function(d) { return d[0]; }))
            .range([0,hGDim.w])
            .padding(0.1);

        // Add x-axis to the histogram svg.
        hGsvg.append("g").attr("class", "x axis")
            .attr("transform", "translate(0," + hGDim.h + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-35)");



        // Create function for y-axis map.
        var y = d3.scaleLinear().range([hGDim.h, 0])
            .domain([0, d3.max(fD, function(d) { return Math.abs(d[1]); })]);

        // Create bars for histogram to contain rectangles and freq labels.
        var bars = hGsvg.selectAll(".bar").data(fD).enter()
            .append("g").attr("class", "bar");

        //create the rectangles.
        bars.append("rect")
            .attr("x", function(d) { return x(d[0]); })
            .attr("y", function(d) { return y(Math.abs(d[1])); })
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return hGDim.h - y(Math.abs(d[1])); })
            //.attr('fill',barColor)
            .attr('fill',function(d){
                if(d[1]<0) return barColor2;
                return barColor;
            })
            .attr("opacity",0.8)
            .on("mouseover",mouseover)// mouseover is defined below.
            .on("mouseout",mouseout);// mouseout is defined below.

       /* bars.append("title")
            .text(function(d) {
            return formatNumber(d[1]);
        });*/

        //Create the frequency labels above the rectangles.
        bars.append("text").text(function(d){ return formatNumber(d[1])})
            .attr("x", function(d) { return x(d[0])+x.bandwidth()/2; })
            .attr("y", function(d) { return y(Math.abs(d[1]))-5; })
            .attr("text-anchor", "middle")
            .on("mouseover",mouseover)// mouseover is defined below.
            .on("mouseout",mouseout);
           // .attr("transform", "rotate(-35)");

        function mouseover(d){  // utility function to be called on mouseover.
            // filter for selected state.
            var st = fData.filter(function(s){ return s.geoCategory == d[0];})[0],
                nD = d3.keys(st.freq).map(function(s){ return {type:s, freq:st.freq[s]};});

            // call update functions of pie-chart and legend.
            pC.update(nD);
            leg.update(nD);
        }

        function mouseout(d){    // utility function to be called on mouseout.
            // reset the pie-chart and legend.
            pC.update(tF);
            leg.update(tF);
        }

        // create function to update the bars. This will be used by pie-chart.
        hG.update = function(nD, color){
            // update the domain of the y-axis map to reflect change in frequencies.
            y.domain([0, d3.max(nD, function(d) { return Math.abs(d[1]); })]);

            // Attach the new data to the bars.
            var bars = hGsvg.selectAll(".bar").data(nD);

            // transition the height and color of rectangles.
            bars.select("rect").transition().duration(500)
                .attr("y", function(d) {return y(Math.abs(d[1])); })
                .attr("height", function(d) { return hGDim.h - y(Math.abs(d[1])); })
                .attr("fill", function(d){
                    if(d[1]<0) return barColor2;
                    return color;
                });

            // transition the frequency labels location and change value.
            bars.select("text").transition().duration(500)
                .text(function(d){ return d3.format(",")(d[1])})
                .attr("y", function(d) {return y(d[1])-5; });
        }
        return hG;
    }

    // function to handle pieChart.
    function pieChart(pD){
        var pC ={},    pieDim ={w:250, h: 250};
        pieDim.r = Math.min(pieDim.w, pieDim.h) / 2;

        // create svg for pie chart.
        var piesvg = d3.select(id).append("svg")
            .attr("width", pieDim.w).attr("height", pieDim.h).append("g")
            .attr("transform", "translate("+pieDim.w/2+","+pieDim.h/2+")");

        // create function to draw the arcs of the pie slices.
        var arc = d3.arc().outerRadius(pieDim.r - 10).innerRadius(0);

        // create a function to compute the pie slice angles.
        var pie = d3.pie().sort(null).value(function(d) { return Math.abs(d.freq); });

        // Draw the pie slices.
        piesvg.selectAll("path").data(pie(pD)).enter().append("path").attr("d", arc)
            .each(function(d) { this._current = d; })
            .style("fill", function(d) { return segColor(d.data.type); })
            .on("mouseover",mouseover).on("mouseout",mouseout);

        // create function to update pie-chart. This will be used by histogram.
        pC.update = function(nD){
            piesvg.selectAll("path").data(pie(nD)).transition().duration(500)
                .attrTween("d", arcTween);
        }
        // Utility function to be called on mouseover a pie slice.
        function mouseover(d){
            // call the update function of histogram with new data.
            hG.update(fData.map(function(v){
                return [v.geoCategory,v.freq[d.data.type]];}),segColor(d.data.type));
        }
        //Utility function to be called on mouseout a pie slice.
        function mouseout(d){
            // call the update function of histogram with all data.
            hG.update(fData.map(function(v){
                return [v.geoCategory,v.total];}), barColor);
        }
        // Animating the pie-slice requiring a custom function which specifies
        // how the intermediate paths should be drawn.
        function arcTween(a) {
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t) { return arc(i(t));    };
        }
        return pC;
    }

    // function to handle legend.
    function legend(lD){
        var leg = {};

        // create table for legend.
        var legend = d3.select(id).append("table").attr('class','legend');

        // create one row per segment.
        var tr = legend.append("tbody").selectAll("tr").data(lD).enter().append("tr");

        // create the first column for each segment.
        tr.append("td").append("svg").attr("width", '16').attr("height", '16').append("rect")
            .attr("width", '16').attr("height", '16')
            .attr("fill",function(d){ return segColor(d.type); });

        // create the second column for each segment.
        tr.append("td").text(function(d){ return d.type;});

        // create the third column for each segment.
        tr.append("td").attr("class",'legendFreq')
            .text(function(d){ return d3.format(",")(d.freq);});

        // create the fourth column for each segment.
        tr.append("td").attr("class",'legendPerc')
            .text(function(d){ return getLegend(d,lD);});

        // Utility function to be used to update the legend.
        leg.update = function(nD){
            // update the data attached to the row elements.
            var l = legend.select("tbody").selectAll("tr").data(nD);

            // update the frequencies.
            l.select(".legendFreq").text(function(d){ return d3.format(",")(d.freq);});

            // update the percentage column.
            l.select(".legendPerc").text(function(d){ return getLegend(d,nD);});
        }

        function getLegend(d,aD){ // Utility function to compute percentage.
            return formatPercent(Math.abs(d.freq)/d3.sum(aD.map(function(v){ return Math.abs(v.freq); })));
        }

        return leg;
    }

    // calculate total frequency by segment for all state.

    var tF = keys.map(function(d){
        return {type:d, freq: d3.sum(fData.map(function(t){ return t.freq[d];}))};
    });

    // calculate total frequency by state for all segment.
    var sF = fData.map(function(d){return [d.geoName,d.total];});


    var pC = pieChart(tF); // create the pie-chart.
    var leg= legend(tF);  // create the legend.
    var hG = histoGram(sF); // create the histogram.
}


function drawLine_day(data,svg){
    var format = d3.format(",d");

    var margin = {top: 30, right: 30, bottom: 40, left: 50};
    width = svg.attr("width") - margin.left - margin.right;
    height = svg.attr("height") - margin.top - margin.bottom;
    var x = d3.scaleTime ()
        .domain([d3.min(data, function(d) { return d.date; }),
            d3.max(data, function(d) { return d.date; })])
        .range([30, width]);

    var y = d3.scaleLinear()
        .domain([d3.min(data, function(d) { return d.value; }),
            d3.max(data, function(d) { return d.value; })])
        .range([height, 100]);

    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y);

    var gX = svg.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    var gY = svg.append("g")
        .attr("class", "axis ")
        .attr("transform", "translate("+ 30 + ",0)")
        .call(yAxis)
        .append("text")
        .attr("class", "axis-title")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .attr("text-anchor", "end")
        .text("Change in Profit");

    var line = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.value); });

    svg.append("path")
        .attr("transform", "translate("+ 30 + ",0)")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
}

function drawLineView(id,lineData,svg){

    var margin = {top: 30, right: 50, bottom: 30, left: 60},
        w = +svg.attr("width") - margin.left - margin.right,
        h = +svg.attr("height") - margin.top - margin.bottom,
        padding=40;

    var foot_height=margin.bottom;

    var head_height=margin.top;

    var y_domain,x_domain,xScale,yScale;

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    function segColor(label){

        var map = new Array();

        var i=0;

        dataSet.forEach(function(d){

            map[d.label] = color(i++);

        })

        return map[label];

    }

    svg.append("g")

        .append("rect")

        .attr("x",0)

        .attr("y",0)

        .attr("width",w)

        .attr("height",h)

        .style("fill","#FFF")

        .style("stroke-width",2)

        .style("stroke","#E7E7E7");

    setScale();

    drawBackground();

    dataSet.forEach(function(data){

        drawLine(data);

        drawCircle(data);

    });

    drawLegend(dataSet);


    function setScale(){
        var dataMax = 0;
        var dataMin = Number.MAX_VALUE;

        var dataSet = lineData.data;
        dataSet.forEach(function(data){
            var min = d3.min(data.data, function(d) { return d.value; });
            var max = d3.max(data.data, function(d) { return d.value; })
            dataMax = dataMax<max?max:dataMax;
            dataMin = dataMin>min?min:dataMin;
        });

         y_domain = { min:dataMin/1.1,max:dataMax*1.1};

         x_domain =  lineData.dateSet;

        //横坐标轴比例尺

         xScale = d3.scaleBand()// x是序数比例尺

            .domain(x_domain)

            .range([margin.left,w-margin.right])

            .padding(0.1);


        //纵坐标轴比例尺

         yScale = d3.scaleLinear()

            .domain([y_domain.min,y_domain.max])

            .range([h-foot_height,head_height]);
    }

    function drawBackground(){
        //定义横轴网格线

        /* var xInner = d3.axisBottom()

         .scale(xScale)

         .tickSize(-(h-head_height-foot_height),0,0)

         .ticks(x_domain.length);



         //添加横轴网格线

         svg.append("g")

         .attr("class","inner_line")

         .attr("transform", "translate(0," + (h - padding) + ")")

         .call(xInner)

         .selectAll("text")

         .text("");*/



        //定义纵轴网格线

        var yInner = d3.axisLeft()

            .scale(yScale)

           // .tickSize(-(w-padding*2),0,0)

            .tickSize(-(w-margin.left-margin.right),0,0)

            .tickFormat("")

            .ticks(10);

        //定义横轴

        var xAxis = d3.axisBottom()

            .scale(xScale)

            .ticks(x_domain.length);

        //添加横坐标轴并通过编号获取对应的横轴标签

        var xBar=svg.append("g")

            .attr("class","axis")

            .attr("transform", "translate(0," + (h - margin.bottom) + ")")

            .call(xAxis)

        //.selectAll("text")

        //.text(function(d){return d.date;});



        //定义纵轴

        var yAxis = d3.axisLeft()

            .scale(yScale)

            .ticks(10);



        //添加纵轴

        var yBar=svg.append("g")

            .attr("class", "axis")

            .attr("transform", "translate("+margin.left+",0)")

            .call(yAxis);



        //添加纵轴网格线

        var yBar=svg.append("g")

            .attr("class", "inner_line")

            .attr("transform", "translate("+margin.left+",0)")

            .call(yInner);

    }

    function drawLine(dataSet){

        var label = dataSet.label;

        var data = dataSet.data;

        //添加折线

        var line = d3.line()

            .x(function(d){return xScale(d.date);})

            .y(function(d){return yScale(d.value);});

        var path=svg.append("g")

            .append("path")

            .attr("class",label)

            .attr("d", line(data))

            .attr("transform", "translate("+ xScale.bandwidth()/2 + ",0)")

            .style("fill","#F00")

            .style("fill","none")

            .style("stroke-width",2)

          //  .style("stroke","#09F")
            .style("stroke", segColor(label))

            .style("stroke-opacity",1)

            .on("mouseover",function() {
                $("path").css("stroke-opacity","0.3");
                $(this).css("stroke-opacity","1");

                $("circle").css("fill-opacity","0.3");
                $("circle."+label).css("fill-opacity","1");

                $("td").css("color","#ccc");
                $("td."+label).css("color","#181818");


            })

            .on("mouseout",function() {
                $("path").css("stroke-opacity","1");
                $("circle").css("fill-opacity","1");
                $("td").css("color","#181818");
            })

}

    function drawCircle(dataSet){

        var label = dataSet.label;

        var data = dataSet.data;

        //添加系列的小圆点

        svg.append("g")

            .selectAll("circle")

            .data(data)

            .enter()

            .append("circle")

            .attr("class",label)

            .attr("transform", "translate("+ xScale.bandwidth()/2 + ",0)")

            .attr("cx", function(d) {

                return xScale(d.date);

            })

            .attr("cy", function(d) {

                return yScale(d.value);

            })

            .attr("r",5)


            .attr("fill",function(d){
                if(d.value<0) return "#FF0000"
                return "#09F";
            })

            .append("title")

            .text(function(d) {
                return "Sales " + d.date
                    + "\nSales " + formatNumber(d.Sales)
                    + "\nProfit " + formatNumber(d.Profit)
                    + "\nProfit rate " + formatPercent(d.Profit/d.Sales);
            })

           svg.selectAll("circle")
               .on("mouseover",function() {
                    var label = $(this).attr("class");

                    $("path").css("stroke-opacity","0.3");
                    $("path."+label).css("stroke-opacity","1");

                    $("circle").css("fill-opacity","0.3");
                    $("circle."+label).css("fill-opacity","1");

                    $("td").css("color","#ccc");
                    $("td."+label).css("color","#181818");
            })
            .on("mouseout",function() {
                $("path").css("stroke-opacity","1");
                $("circle").css("fill-opacity","1");
                $("td").css("color","#181818");
            });

    }

    function drawLegend(lD){

        var leg = {};

        // create table for legend.
        var legend = d3.select(id).append("table").attr('class','legend');

        // create one row per segment.
        var tr = legend.append("tbody").selectAll("tr").data(lD).enter().append("tr");

        // create the first column for each segment.
        tr.append("td").append("svg").attr("width", '16').attr("height", '16').append("rect")
            .attr("width", '16').attr("height", '16')
            .attr("fill",function(d){ return segColor(d.label); })
            .on("click",function(d){ removeLine(d)});

        // create the second column for each segment.
        tr.append("td").text(function(d){ return d.label;})
            .attr("class",function(d){ return d.label;});

    }

    function removeLine(d){
       for(var i=0;i<dataSet.length;i++){
           if(dataSet[i].label == d.label){
               k = i;
           }
        }
        if(k>-1){
           dataSet.splice(k,1);
        }
        d3.select("#line_div").selectAll('*') .remove();
        d3.select("#legend_div").selectAll('*') .remove();
        d3.select("#line_div").append("svg").attr("width","1200").attr("height","300");
        svg = d3.select("svg");
        lineData.data = dataSet;
        drawLineView("#legend_div",lineData,svg);
    }
}
