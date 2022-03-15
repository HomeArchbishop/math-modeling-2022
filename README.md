# 2022数学建模

团队仓库

还在开源过程中

## 目录结构

```sh
./
│  .gitignore
│  LICENSE                                          MIT许可证
│  README.md
│  
├─aliyun-display
│  │  
│  ├─net                                            社会关系网络图
│  │      
│  └─uni                                            虚拟主播星系图
│          
├─analyse
│  │  fg对比.pdf
│  │  fg对比.xlsx
│  │  F值选表.pdf
│  │  F值选表.xlsx
│  │  package-lock.json
│  │  package.json
│  │  
│  ├─charts
│  │  │  index.html
│  │  │  index.js
│  │  │  
│  │  └─assets
│  │      │  .DS_Store
│  │      │  chart.min.js
│  │      │  
│  │      └─data
│  │              data.js
│  │              
│  ├─graph
│  │      .DS_Store
│  │      data.js
│  │      index.html
│  │      
│  └─server
│          index.js
│          
├─data
│  │  .DS_Store
│  │  package-lock.json
│  │  package.json
│  │  README.md
│  │  
│  ├─fake
│  │  │  .DS_Store
│  │  │  
│  │  └─charts
│  │          group.json
│  │          hinge.json
│  │          
│  ├─fg
│  │      .DS_Store
│  │      fg1.txt
│  │      fg10.txt
│  │      fg100.txt
│  │      fg1000.txt
│  │      fg50.txt
│  │      table.txt
│  │      
│  ├─results
│  │  │  .DS_Store
│  │  │  basic-next.json
│  │  │  basic-next.xlsx
│  │  │  basic-origin.json
│  │  │  info.log
│  │  │  final.txt
│  │  │  top500.json
│  │  │  top500.txt
│  │  │  top500.xlsx
│  │  │  
│  │  ├─attactions
│  │  │  │  .DS_Store
│  │  │  │  F.json
│  │  │  │  F_CONNECT.json
│  │  │  │  F_CONNECT_LESS.json
│  │  │  │  F_Table.json
│  │  │  │  F_Table.txt
│  │  │  │  K.json
│  │  │  │  R_1.json
│  │  │  │  W.json
│  │  │  │  
│  │  │  └─cpp-data
│  │  │      │  .DS_Store
│  │  │      │  cppData.json
│  │  │      │  cppData.txt
│  │  │      │  cppDataShort.json
│  │  │      │  cppDataShort.txt
│  │  │      │  cppDataTX.txt
│  │  │      │  indexArray.json
│  │  │      │  indexMap.json
│  │  │      │  
│  │  │      └─lessData
│  │  │              .DS_Store
│  │  │              cppData.json
│  │  │              cppData.txt
│  │  │              cppDataShort.json
│  │  │              cppDataShort.txt
│  │  │              cppDataTX.txt
│  │  │              indexArray.json
│  │  │              indexMap.json
│  │  │              
│  │  ├─captains
│  │  │  │  .DS_Store
│  │  │  │  captain-contact-list.json
│  │  │  │  captain-contact-stat.json
│  │  │  │  captains-simplied-all.json
│  │  │  │  captains-simplied-name.json
│  │  │  │  captains-simplied-uid.json
│  │  │  │  captains.json
│  │  │  │  
│  │  │  ├─cpp-data
│  │  │  │      cppData.json
│  │  │  │      cppData.txt
│  │  │  │      indexArray.json
│  │  │  │      indexMap.json
│  │  │  │      
│  │  │  └─slice
│  │  │          1.json
│  │  │          10.json
│  │  │          11.json
│  │  │          2.json
│  │  │          3.json
│  │  │          4.json
│  │  │          5.json
│  │  │          6.json
│  │  │          7.json
│  │  │          8.json
│  │  │          9.json
│  │  │          test.json
│  │  │          
│  │  ├─charts
│  │  │      alone.json
│  │  │      center.json
│  │  │      chartData.json
│  │  │      cppOutput.txt
│  │  │      cppOutputQ.txt
│  │  │      group.json
│  │  │      hinge.json
│  │  │      
│  │  ├─counts
│  │  │      average-view.json
│  │  │      count.json
│  │  │      view.json
│  │  │      
│  │  └─slice
│  │          1.json
│  │          10.json
│  │          11.json
│  │          2.json
│  │          3.json
│  │          4.json
│  │          5.json
│  │          6.json
│  │          7.json
│  │          8.json
│  │          9.json
│  │          test.json
│  │          
│  └─scripts
│      │  .DS_Store
│      │  browserSpider.js
│      │  browserSpiderFilter.js
│      │  getAllVideoCnt.js
│      │  getAllVideoView.js
│      │  getAttraction.js
│      │  getAttractionConect.js
│      │  getAttractionConectLess.js
│      │  getAttractionConectNewA.js
│      │  getAverageVideoView.js
│      │  getCaptainContact.js
│      │  getCaptainContactCnt.js
│      │  getCaptainList.js
│      │  getChartsDataFromCppOutput.js
│      │  getFakeChartsData.js
│      │  simplifyCaptain.js
│      │  toJSON.js
│      │  toTable.js
│      │  transformCaptainContactToCppData.js
│      │  transformConnectToCppDataLess.js
│      │  
│      ├─charts-generater
│      │      generateCaptainLineChartsData.js
│      │      generateChartData.js
│      │      generateChartDataNet.js
│      │      generateChartDataUni.js
│      │      generateFansLineChartsData.js
│      │      generateFTableData.js
│      │      generateQLineChartsData.js
│      │      generateViewAverLineChartsData.js
│      │      generateXTableData.js
│      │      
│      └─utils
│              debugger.js
│              highest-contact.js
│              joinCaptainSlice.js
│              length.js
│              slice.js
│              
└─essay
        fg对比.xlsx
        F值选表.xlsx
        Q值（35475-end）.jpg
        Q值（37515-37600）.jpg
        平均播放数.png
        星系图.png
        粉丝数.jpg
        网状图.png
        舰长数.jpg
        运用SNA分析交际圈中的中心人物与枢纽人物.md
        运用SNA分析交际圈中的中心人物与枢纽人物.pdf
```
