import React from "react";
import ReactDOM from 'react-dom';
// 导入core library
import EchartCore from '../../../source/components/Echart/core';
// 按需导入echarts模块
import echarts from 'echarts/lib/echarts'; //必须
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.node.getInstance())
  }

  render() {
    const option = {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['周一','周二','周三','周四','周五','周六','周日']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'邮件营销',
          type:'line',
          stack: '总量',
          areaStyle: {},
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'联盟广告',
          type:'line',
          stack: '总量',
          areaStyle: {},
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'视频广告',
          type:'line',
          stack: '总量',
          areaStyle: {},
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'直接访问',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
          name:'搜索引擎',
          type:'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {normal: {}},
          data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    return (
      <EchartCore
        ref={(node) => this.node = node}
        echarts={echarts}
        className="my-echarts"
        option={option}
        style={{height:450}}
      />
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app')
);
