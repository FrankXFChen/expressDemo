$(function(){
    init();

    function init(){
        setTimeout(()=>{
            getTodoList();
        }, 2000)
        //bindEvent();
    }

    function getTodoList(){
        $.ajax({
            url: 'home/getTodoList',
            type: 'GET',
            //data: data,
            success: function (res) {
                if (res.data.length>0) {
                    initTodoList(res.data);
                    chartRender();
                }
            },
            error: function (err) {
               console.log(err);
            }
        });
    }

    function initTodoList(data){
        $('.spinner-border').remove();
        for(let obj of data){
            let key = obj.key;
            let name = obj.name;
            let count = obj.count;
            let sHtml = `<li><span id="`+ key +`" class="item_style">`+ name +`<span>: &nbsp `+ count+`</li>`
            $('#listItemContainer').append(sHtml);
        }

    }

    function chartRender() {
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light1", // "light2", "dark1", "dark2"
            animationEnabled: false, // change to true		
            title:{
                text: "Basic Column Chart"
            },
            data: [
            {
                // Change type to "bar", "area", "spline", "pie",etc.
                type: "column",
                dataPoints: [
                    { label: "apple",  y: 10  },
                    { label: "orange", y: 15  },
                    { label: "banana", y: 25  },
                    { label: "mango",  y: 30  },
                    { label: "grape",  y: 28  }
                ]
            }
            ]
        });
        chart.render();
    }

    function deepCopy(obj){
        if(Array.isArray(obj)){
            let copyedObj = [];
            for(let [index,val] of obj.entries()){
                copyedObj[index] = deepCopy(val);
            }
            return copyedObj;
        }else if(obj instanceof Object){
            let copyedObj = {};
            for(let key in obj){
                copyedObj[key] = deepCopy(obj[key]);
            }
            return copyedObj;
        }else{
            return obj;
        }
    }
})