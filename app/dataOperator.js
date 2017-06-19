/**
 * Created by 000 on 2017/6/9.
 */
//过滤数据
function filterDataBytype(dataSourse, type) {
    var dataSubset = new Array();
    var dataResult = dataSourse.slice(0);

    dataSubset = new Array();
    if (type.OrderDate && type.OrderDate.indexOf("all")==-1) {
        for (j = 0; j < dataResult.length; j++) {
            if (dataResult[j].OrderDate.indexOf(type.OrderDate) > -1) {
                dataSubset.push(dataResult[j]);
            }
        }
        dataResult = dataSubset.slice(0);
        dataSubset.length = 0;
    }

    if (type.State && type.State.indexOf("all")==-1) {
        for (j = 0; j < dataResult.length; j++) {
            if (dataResult[j].State.indexOf(type.State) > -1) {
                dataSubset.push(dataResult[j]);
            }
        }
        dataResult = dataSubset.slice(0);
        dataSubset.length = 0;
    }

    if (type.City && type.City.indexOf("all")==-1) {
        for (j = 0; j < dataResult.length; j++) {
            if (dataResult[j].City.indexOf(type.City) > -1) {
                dataSubset.push(dataResult[j]);
            }
        }
        dataResult = dataSubset.slice(0);
        dataSubset.length = 0;
    }

    if (type.ProductCategory && type.ProductCategory .indexOf("all")==-1) {
        for (j = 0; j < dataResult.length; j++) {
            if (dataResult[j].ProductCategory.indexOf(type.ProductCategory) > -1) {
                dataSubset.push(dataResult[j]);
            }
        }
        dataResult = dataSubset.slice(0);
        dataSubset.length = 0;
    }
    if (type.ProductSubCategory && type.ProductSubCategory .indexOf("all")==-1) {
        for (j = 0; j < dataResult.length; j++) {
            if (dataResult[j].ProductSubCategory.indexOf(type.ProductSubCategory) > -1) {
                dataSubset.push(dataResult[j]);
            }
        }
        dataResult = dataSubset.slice(0);
        dataSubset.length = 0;
    }

    if(type.Year && type.Year!="all"){
        for (j = 0; j < dataResult.length; j++) {
            if (dataResult[j].OrderDate.indexOf(type.Year) > -1) {
                dataSubset.push(dataResult[j]);
            }
        }
        dataResult = dataSubset.slice(0);
        dataSubset.length = 0;
    }
    if(type.Season && type.Season!="all"){
        for (j = 0; j < dataResult.length; j++) {
            var month = dataResult[j].OrderDate.substring(dataResult[j].OrderDate.indexOf("/")+1,dataResult[j].OrderDate.lastIndexOf("/"));
            var season = parseInt(month/4+1);
            if (season == type.Season) {
                dataSubset.push(dataResult[j]);
            }
        }
        dataResult = dataSubset.slice(0);
        dataSubset.length = 0;
    }
    if(type.Month && type.Month!="all"){
        for (j = 0; j < dataResult.length; j++) {
            var month = dataResult[j].OrderDate.substring(dataResult[j].OrderDate.indexOf("/")+1,dataResult[j].OrderDate.lastIndexOf("/"));
            if (month == type.Month) {
                dataSubset.push(dataResult[j]);
            }
        }
        dataResult = dataSubset.slice(0);
        dataSubset.length = 0;
    }

    return dataResult;
}


/*function buildByGeo(data) {
    var temp = new Array();
    for (var i = 0; i < data.length; i++) {
        data[i].id = "us." + data[i].State + "." + data[i].City + "." + data[i].CustomerName;
        var dataCity = {"id": "us." + data[i].State + "." + data[i].City, "Sales": 0, "Profit": 0};
        var dataState = {"id": "us." + data[i].State, "Sales": 0, "Profit": 0};
        var isCity = false;
        var isState = false;
        for (var j = 0; j < temp.length; j++) {
            var tempid = temp[j].id;
            var city = dataCity.id;
            var state = dataState.id;
            if (tempid == city) {
                isCity = true;
            }
            if (tempid == state) {
                isState = true;
            }
        }
        if (!isCity) temp.push(dataCity);
        if (!isState) temp.push(dataState);
    }

    var root = {"id": "us", "Sales": 0, "Profit": 0};
    for (var i = 0; i < data.length; i++) {
        root.Profit += parseFloat(data[i].Profit);
        root.Sales += parseFloat(data[i].Sales);
        for (var j = 0; j < temp.length; j++) {
            var city = data[i].id.substring(0, data[i].id.lastIndexOf("."));
            var state = data[i].id.substring(0, data[i].id.indexOf(".", 2));
            var tempid = temp[j].id;
            if (city == tempid || state == tempid) {
                temp[j].Profit += parseFloat(data[i].Profit);
                temp[j].Sales += parseFloat(data[i].Sales);
            }
        }
    }
    for (var i = 0; i < temp.length; i++) {
        data.push(temp[i]);
    }
    data.push(root);
    return data;
}*/

/*地理数据信息*/
function buildGeoData(data, geo_data) {
    //混合profits数据和GeoJSON
    //循环profits数据集中的每个值
    geo_data.features.forEach(function (d) {
        d.properties.Profit = 0;
        d.properties.Sales = 0;
        d.properties.Value = 0;
    })

    data.forEach(function (d) {
        var dataState = d.State;
        d.Profit = parseFloat(d.Profit);
        d.Sales = parseFloat(d.Sales);
        for (i = 0; i < geo_data.features.length; i++) {
            var jsonState = geo_data.features[i].properties.name;
            if (dataState == jsonState) {
                //把profits数据值复制到json中
                var tempProfit = geo_data.features[i].properties.Profit;
                geo_data.features[i].properties.Profit = tempProfit ? tempProfit + d.Profit : d.Profit;
                var tempSales = geo_data.features[i].properties.Sales;
                geo_data.features[i].properties.Sales = tempSales ? tempSales + d.Sales : d.Sales;
                //停止循环JSON数据
                break;
            }
        }
    })
    geo_data.features.forEach(function (d) {
        d.properties.Value = d.properties.Sales;
    })
    return geo_data;
}

/*仪表盘数据信息*/
function buildForDashboard(data, categoryType,ShowType) {
    var dataResult = new Array();
    var geoCategorys = new Array();
    var productCategorys = new Array();

    data.forEach(function (d) {
        var existProductCategorys = false;
        var productCategory = d[categoryType.ProductCategory];
        var geoCategory = d[categoryType.GeoCategory];
        var existP = false;
        var existG = false;
        for (i = 0; i < productCategorys.length; i++) {
            if (productCategorys[i] == productCategory) {
                existP = true;
                break;
            }
        }
        for (i = 0; i < geoCategorys.length; i++) {
            if (geoCategorys[i] == geoCategory) {
                existG = true;
                break;
            }
        }
        if (!existP) {
            productCategorys.push(productCategory);
        }
        if (!existG) {
            geoCategorys.push(geoCategory);
        }
    });

    data.forEach(function (d) {
        var geoCategory = d[categoryType.GeoCategory];
        var productCategory = d[categoryType.ProductCategory];
        var value = parseFloat(d[ShowType])
        var exist = false;
        for (i = 0; i < dataResult.length; i++) {
            if (dataResult[i].geoCategory == geoCategory) {
                exist = true;
                var valueR = dataResult[i].freq[productCategory];
                dataResult[i].freq[productCategory] = valueR + value;
                break;
            }
        }
        if (!exist) {
            var freq = new Array();
            for (i = 0; i < productCategorys.length; i++) {
                freq[productCategorys[i]] = 0;
            }
            freq[productCategory] = value;
            var geoName = geoCategory;
            if(categoryType.GeoCategory=="CustomerID"){
                geoName = d.CustomerName;
            }
            var temp = {"geoName": geoName,"geoCategory": geoCategory, "freq": freq};
            dataResult.push(temp);
        }
    })
    var result = new Array();
    result.data = dataResult;
    result.productCategorys = productCategorys;
    result.geoCategorys = geoCategorys;
    return result;
}

function buildByCategory(data) {
    var temp = new Array();
    for (var i = 0; i < data.length; i++) {
        var d1 = Trim(data[i].ProductCategory, "g");
        var d2 = Trim(data[i].ProductSubCategory, "g");
        var d3 = Trim(data[i].ProductName, "g");

        data[i].id = "product." + d1 + "." + d2 + "." + d3;
        var dataCategorySub = {"id": "product." + d1 + "." + d2, "Sales": 0, "Profit": 0};
        var dataCategory = {"id": "product." + d1, "Sales": 0, "Profit": 0};
        var isCategory = false;
        var isCategorySub = false;
        for (var j = 0; j < temp.length; j++) {
            var tempid = temp[j].id;
            var category = dataCategory.id;
            var categorySub = dataCategorySub.id;
            if (tempid == category) {
                isCategory = true;
            }
            if (tempid == categorySub) {
                isCategorySub = true;
            }
        }
        if (!isCategory) temp.push(dataCategory);
        if (!isCategorySub) temp.push(dataCategorySub);
    }

    var root = {"id": "product", "Sales": 0, "Profit": 0};
    for (var i = 0; i < data.length; i++) {
        root.Profit += parseFloat(data[i].Profit);
        root.Sales += parseFloat(data[i].Sales);
        for (var j = 0; j < temp.length; j++) {
            var categorySub = data[i].id.substring(0, data[i].id.lastIndexOf("."));
            var category = data[i].id.substring(0, data[i].id.indexOf(".", 2));

            var tempid = temp[j].id;
            if (category == tempid || categorySub == tempid) {
                temp[j].Profit += parseFloat(data[i].Profit);
                temp[j].Sales += parseFloat(data[i].Sales);
            }
        }
    }
    for (var i = 0; i < temp.length; i++) {
        data.push(temp[i]);
    }
    data.push(root);
    return data;
}

function buildByCategory2(data) {
    for (i = 0; i < data.length; i++) {
        var d1 = Trim(data[i].ProductCategory, "g");
        var d2 = Trim(data[i].ProductSubCategory, "g");
        var d3 = Trim(data[i].ProductName, "g");
        data[i].id = d1 + "." + d2 + "." + d3;
    }
    return data;
}

/*function buildByDailyTime(data) {
    var parseDate = d3.timeParse("%Y/%m/%d");
    var dataResult = new Array();

    data.forEach(function (d) {
        isExist = false;
        for (i = 0; i < dataResult.length; i++) {
            if (dataResult[i].OrderDate == d.OrderDate) {
                dataResult[i].Profit += parseFloat(d.Profit);
                dataResult[i].Sales += parseFloat(d.Sales);
                isExist = true;
                break;
            }
        }
        var temp = {
            "date": parseDate(d.OrderDate),
            "value": 0,
            "OrderDate": d.OrderDate,
            "Profit": parseFloat(d.Profit),
            "Sales": parseFloat(d.Sales)
        };
        dataResult.push(temp);
    });
    dataResult.forEach(function (d) {
        d.value = d.Profit;
    });
    dataResult.sort(function (a, b) {
        return a.date < b.date ? 1 : -1;
    });

    return dataResult;
}*/

function getDateByCategoryType(d,dateCategory){
    if(dateCategory == "Year"){
        return d.OrderDate.substring(0, d.OrderDate.indexOf("/"));
    }else if(dateCategory == "Season"){
        var month = d.OrderDate.substring(d.OrderDate.indexOf("/")+1,d.OrderDate.lastIndexOf("/"));
        return parseInt(month/4+1);
    }else if(dateCategory == "Month"){
        var month = d.OrderDate.substring(d.OrderDate.indexOf("/")+1,d.OrderDate.lastIndexOf("/"));
        return month;
    }
}

function buildByDate(data,dateCategory) {
    var dataResult = new Array();
    data.forEach(function (d) {
        exist = false;
        var date = getDateByCategoryType(d,dateCategory);
        for (i = 0; i < dataResult.length; i++) {
            if (dataResult[i].date == date) {
                dataResult[i].Profit += parseFloat(d.Profit);
                dataResult[i].Sales += parseFloat(d.Sales);
                exist = true;
                break;
            }
        }
        if (!exist) {
            var temp = {
                "date": date,
                "OrderDate": d.OrderDate,
                "value": 0,
                "Profit": parseFloat(d.Profit),
                "Sales": parseFloat(d.Sales)
            };
            dataResult.push(temp);
        }
    });

    dataResult.forEach(function (d) {
        d.value = d.Profit;
    });

    dataResult.sort(function (a, b) {
        return Number(a.date) > Number(b.date) ? 1 : -1;
    });

    console.log(dataResult);
    return dataResult;
}


function getOptionSet(data,filter_value,filter_type,col){
    var set = new Array();
    var exist = false;
    var filter_data = new Array();
    if(filter_type!=""){
        data.forEach(function(d){
            if(d[filter_type] == filter_value)
                filter_data.push(d);
        })
    }else{
        filter_data = data;
    }

    filter_data.forEach(function(d){
        exist = false;
        for(i=0;i<set.length;i++){
            if(set[i]==d[col]){
                exist = true;
            }
        }
        if(!exist){
            set.push(d[col]);
        }
    })
    return set;
}
