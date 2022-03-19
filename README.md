<h1 align="center">
运用SNA分析交际圈中的中心人物与枢纽人物<br>
</h1>

<p align="center">
<img src="https://img.shields.io/github/license/homearchbishop/math-modeling-2022" alt="license-MIT">
<img src="https://img.shields.io/badge/date-2022/3-orange" alt="date-2022-3">
</p>

<p align="center" style="font-size:1.1em; font-weight: bold;">关键词：SNA社会网络分析；虚拟主播；交际圈；GN算法及其优化；星系</p>

## 目录结构

```
.
├── LICENSE
├── README.md
├── aliyun-display
│   ├── net
│   └── uni
├── analyse [图表分析]
│   ├── F值选表.pdf
│   ├── F值选表.xlsx
│   ├── charts [统计图]
│   │   ├── assets
│   │   │   ├── chart.min.js
│   │   │   └── data
│   │   │       └── data.js
│   │   ├── index.html
│   │   └── index.js
│   ├── fg对比.pdf
│   ├── fg对比.xlsx
│   ├── graph
│   │   ├── net [虚拟主播社会关系网络图]
│   │   │   ├── data.js
│   │   │   └── index.html
│   │   └── uni [虚拟主播星系图]
│   │       ├── data.js
│   │       └── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── server
│       └── index.js [简单静态服务器 port=3000]
├── data
│   ├── README.md
│   ├── fake [测试用例]
│   │   └── charts
│   │       ├── group.json
│   │       └── hinge.json
│   ├── fg [不同简化算法下Q值变化的输出结果]
│   │   ├── fg1.txt
│   │   ├── fg10.txt
│   │   ├── fg100.txt
│   │   ├── fg1000.txt
│   │   ├── fg50.txt
│   │   └── table.txt [不同简化算法下Q值变化的输出结果分析表]
│   ├── package-lock.json
│   ├── package.json
│   ├── results [数据分析脚本运行结果]
│   │   ├── attactions
│   │   │   ├── F.json [F值及其方向]
│   │   │   ├── F_CONNECT.json [是否连线及其指向 前1/5]
│   │   │   ├── F_CONNECT_LESS.json [是否连线及其指向 前5简化版]
│   │   │   ├── F_Table.json [F值大小表]
│   │   │   ├── F_Table.txt [F值大小表 tab制表]
│   │   │   ├── K.json [K值大小表]
│   │   │   ├── R_1.json [1/R值大小及其方向]
│   │   │   ├── W.json [W值大小表]
│   │   │   └── cpp-data [cpp运行输入]
│   │   │       ├── cppData.json
│   │   │       ├── cppData.txt
│   │   │       ├── cppDataShort.json
│   │   │       ├── cppDataShort.txt
│   │   │       ├── cppDataTX.txt
│   │   │       ├── indexArray.json
│   │   │       ├── indexMap.json
│   │   │       └── lessData [top5指标简化版]
│   │   │           ├── cppData.json
│   │   │           ├── cppData.txt
│   │   │           ├── cppDataShort.json
│   │   │           ├── cppDataShort.txt
│   │   │           ├── cppDataTX.txt
│   │   │           ├── indexArray.json
│   │   │           └── indexMap.json
│   │   ├── basic-next.json [top_rank数据初步筛选]
│   │   ├── basic-next.xlsx [top_rank数据初步筛选]
│   │   ├── basic-origin.json [top_rank数据初始爬取数据]
│   │   ├── captains [舰长数据]
│   │   │   ├── captain-contact-list.json [重合舰长全列表]
│   │   │   ├── captain-contact-stat.json [舰长重合数据统计]
│   │   │   ├── captains-simplied-all.json [重合舰长简化name/uid列表]
│   │   │   ├── captains-simplied-name.json [重合舰长简化name列表]
│   │   │   ├── captains-simplied-uid.json [重合舰长简化uid列表]
│   │   │   ├── captains.json [top500vtb舰长列表数据]
│   │   │   ├── cpp-data [cpp运行输入-重合度列表]
│   │   │   │   ├── cppData.json
│   │   │   │   ├── cppData.txt
│   │   │   │   ├── indexArray.json
│   │   │   │   └── indexMap.json
│   │   │   └── slice [top500vtb舰长列表数据切片]
│   │   │       ├── 1.json
│   │   │       ├── 10.json
│   │   │       ├── 11.json
│   │   │       ├── 2.json
│   │   │       ├── 3.json
│   │   │       ├── 4.json
│   │   │       ├── 5.json
│   │   │       ├── 6.json
│   │   │       ├── 7.json
│   │   │       ├── 8.json
│   │   │       ├── 9.json
│   │   │       └── test.json
│   │   ├── charts [绘图数据集合]
│   │   │   ├── alone.json [孤立点]
│   │   │   ├── center.json [中心点]
│   │   │   ├── chartData.json [graph数据-兼uni/net-备份]
│   │   │   ├── cppOutput.txt [cpp社群划分输出结果]
│   │   │   ├── cppOutputQ.txt [cpp运算Q输出结果 废弃]
│   │   │   ├── group.json [社群划分]
│   │   │   ├── hinge.json [枢纽点]
│   │   │   └── special-points.txt [cpp特殊点输出结果]
│   │   ├── counts
│   │   │   ├── average-view.json [平均播放量数据]
│   │   │   ├── count.json [视频数量数据]
│   │   │   └── view.json [浏览量数据]
│   │   ├── info.log [top_rank信息爬取信息日志]
│   │   ├── slice [top500信息切片]
│   │   │   ├── 1.json
│   │   │   ├── 10.json
│   │   │   ├── 11.json
│   │   │   ├── 2.json
│   │   │   ├── 3.json
│   │   │   ├── 4.json
│   │   │   ├── 5.json
│   │   │   ├── 6.json
│   │   │   ├── 7.json
│   │   │   ├── 8.json
│   │   │   ├── 9.json
│   │   │   └── test.json
│   │   ├── top500.json [top500信息]
│   │   ├── top500.txt [top500信息]
│   │   └── top500.xlsx [top500信息表]
│   └── scripts
│       ├── browserSpider.js [浏览器端懒加载爬虫处理方案-爬取top_rank数据]
│       ├── browserSpiderFilter.js [top_rank数据初步筛选]
│       ├── charts-generater [生成展示图表数据]
│       │   ├── generateCaptainLineChartsData.js [生成舰长折线图数据]
│       │   ├── generateChartData.js [生成星系图/关系图数据-废弃]
│       │   ├── generateChartDataNet.js [生成关系图数据]
│       │   ├── generateChartDataUni.js [生成星系图数据]
│       │   ├── generateFTableData.js [生成F折线图数据]
│       │   ├── generateFansLineChartsData.js [生成粉丝数折线图数据]
│       │   ├── generateQLineChartsData.js [生成算法Q折线图数据]
│       │   ├── generateViewAverLineChartsData.js [生成平均播放量折线图数据]
│       │   └── generateXTableData.js [统计不同简化算法Q峰值附近情况]
│       ├── getAllVideoCnt.js [爬取视频总数量]
│       ├── getAllVideoView.js [爬取视频总播放量]
│       ├── getAttraction.js [运算F/K/R/W等数据]
│       ├── getAttractionConect.js [运算1/5指标下的连边]
│       ├── getAttractionConectLess.js [运算top5指标下的连边]
│       ├── getAverageVideoView.js [运算视频平均播放量]
│       ├── getCaptainContact.js [运算舰长重合度列表]
│       ├── getCaptainContactCnt.js [运算舰长重合度统计数据]
│       ├── getCaptainList.js [爬取舰长列表-按切片]
│       ├── getChartsDataFromCppOutput.js [根据cpp输出获取社群划分数据]
│       ├── getFakeChartsData.js [获取测试用例假数据]
│       ├── simplifyCaptain.js [简化重合舰长简化列表]
│       ├── toJSON.js [将top500信息表转为JSON]
│       ├── toTable.js [将top_rank初步筛选数据转为xlsx]
│       ├── transformCaptainContactToCppData.js [运算获取重合度列表cpp运行输入]
│       ├── transformConnectToCppData.js [运算获取连边情况cpp运行输入-1/5指标]
│       ├── transformConnectToCppDataLess.js [运算获取连边情况cpp运行输入-top5指标简化版]
│       └── utils
│           ├── debugger.js [debugger-tmp脚本]
│           ├── highest-contact.js [获取最高舰长重合度对象]
│           ├── joinCaptainSlice.js [将爬取的舰长列表切片合并]
│           ├── length.js [获取特定文件的长度-tmp脚本]
│           └── slice.js [将top500的vtb切片以便爬取]
├── essay
│   ├── F值选表.xlsx
│   ├── Q值（35475-end）.jpg
│   ├── Q值（37515-37600）.jpg
│   ├── fg对比.xlsx
│   ├── 运用SNA分析交际圈中的中心人物与枢纽人物.md
│   ├── 运用SNA分析交际圈中的中心人物与枢纽人物.pdf
│   ├── 粉丝数.jpg
│   ├── 舰长数.jpg
│   ├── 星系图.png
│   ├── 网状图.png
│   └── 平均播放数.png
└── tree.txt

```
