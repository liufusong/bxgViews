<template>
  <div>
    <div class="top">
      <ul>
        <li>
          <div>
            <span class="fa fa-money"></span>
          </div>
          <div>
            <p>我的收入</p>
            <p>1232131</p>
          </div>
        </li>
        <li>
          <div>
            <span class="fa fa-th"></span>
          </div>
          <div>
            <p>我的收入</p>
            <p>1232131</p>
          </div>
        </li>
        <li>
          <div>
            <span class="fa fa-user"></span>
          </div>
          <div>
            <p>我的收入</p>
            <p>1232131</p>
          </div>
        </li>
        <li>
          <div>
            <span class="fa fa-eye"></span>
          </div>
          <div>
            <p>我的收入</p>
            <p>1232131</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="classNum" id="main">

    </div>
    
  </div>
</template>
<script>
var echarts = require('echarts');

export default {
  mounted(){    
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    console.log(myChart)
    // 绘制图表
    const option = {
    backgroundColor: '#2c343c',

    title: {
        text: '前端大数据',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'vue'},
                {value:310, name:'angular'},
                {value:274, name:'node'},
                {value:235, name:'react'},
                {value:400, name:'ionic'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
    myChart.setOption(option);
  }  
}
</script>
<style>
.top{
  padding:30px;
  background: #ccc;
  line-height: 20px;
}
.top ul{
  display: flex;
  list-style: none;
   justify-content: space-around;
}
.top ul li{
 width:23%;
  padding: 10px 0;
  background: red;
  color: #fff;
  border-radius:10px;
}

.top ul li:nth-child(1){
  background: #FC8675;
}
.top ul li:nth-child(2){
  background: #5AB6DF;
}
.top ul li:nth-child(3){
  background: #65CEA7;
}
.top ul li:nth-child(4){
  background: #EBC85E;
}

.top ul li div{
  float: left;
}
.top ul li div span{
  font-size:60px;
  color: #fff;
  margin: 0 15px;
}
.top ul li div p:nth-child(1){
  margin: 5px 0;
}


.classNum{
  width:100%;
  height:400px;
}

</style>


