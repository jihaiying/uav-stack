const en_US = {
  home: "Home",
  product: "Product",
  download: "Download",
  productPage: "Product Page",
  downloadPage: "Download Page",
  banner_1_title: "UAV.Monitor新能力开放：可动态切换的报警收敛模式",
  banner_1_word_1:
    "●基于事件自动压制的收敛：默认收敛模式，无需任何配置，自动识别同一事件，在一定时间内只发生约定次数的报警",
  banner_1_word_2:
    "●基于事件次数梯度的收敛：可自定义若干级次数梯度，自动识别同一事件，根据事件发生次数，每次梯度跃升发出报警",
  banner_1_word_3: "●可随时切换收敛模式，配置即生效",
  banner_1_word_4: "●细粒度配置支持：收敛模式可配置到单个报警表达式",
  banner_1_word_5:
    "●自动优先级判断：同策略包含多个报警表达式，按梯度优先，以及最长梯度优先",
  banner_2_title: "UAV.APM新能力开放：深度线程分析",
  banner_2_word_1: "●单次线程Dump文件深度分析：",
  banner_2_word_1_desc_1: "-自动发现死锁，跟踪死锁关系",
  banner_2_word_1_desc_2: "-基于锁依赖的等待链路查询，发现系统阻塞点",
  banner_2_word_2:
    "●多次线程Dump文件关联分析：基于时序的线程状态变迁，线程等待链路时序根因关系",
  banner_2_word_3: "●线程Dump可视化展示：",
  banner_2_word_3_desc_1: "-单次线程Dump可视化（锁依赖）",
  banner_2_word_3_desc_2: "-多次线程Dump可视化（含时序状态，锁依赖）",

  updateTab_update_title: "UAVStack周更新",
  updateTab_update_href:
    "https://github.com/uavorg/uavstack/releases/tag/UAVStack_1.2_20180914",
  updateTab_update_tip_1:
    "1. 新增 增加采集主机所有IP地址、子网掩码等网卡信息的功能。",
  updateTab_update_tip_2:
    "2. 新增 增加SpringBoot2.0以上版本对context-path配置的支持。",
  updateTab_fix_title: "FIX同步:",
  updateTab_fix_tip_1:
    "1.  FIX  修正了由应用重复注册Filter或Servlet导致的NPE问题",
  updateTab_fix_tip_2: "2.  FIX  修正了自定义指标在某些情况下不显示的问题。",

  productPanel_title: "产品与服务",
  productPanel_tip_1:
    "UAVStack是一套智能化服务技术栈，是研发运维一体化的解决方案。",
  productPanel_tip_2:
    " UAV是无人机的缩写，寓意无人机翱翔蓝天，智能的，透明的完成任务。",
  productPanel_tip_3:
    "它包括任务机器人（HIT），全维监控（UAV.Monitor），应用性能管理（UAV.APM），容器化支持（UAV.Container）",
  productPanel_tip_4:
    " 服务治理（UAV.ServiceGovern），微服务计算（UAV.MSCP），用户体验管理（UAV.UEM）等。",

  productTab_1_title: "客户端体验（UEM）",
  productTab_1_tip_1: "追踪Web浏览器端用户访问状况",
  productTab_1_tip_2: "端到端跟踪联通",

  productTab_2_title: "应用性能管理（APM）",
  productTab_2_tip_1: "提供应用性能诊断工具箱",
  productTab_2_tip_2: "提供调用链支持",

  productTab_3_title: "(微）服务治理（ServiceGovern）",
  productTab_3_tip_1: "以服务画像实现服务注册",
  productTab_3_tip_2: "提供服务发现接口",
  productTab_3_tip_3: "无侵入实现服务调用干预",
  productTab_3_tip_4: "提供服务授权访问机制",
  productTab_3_tip_5: "提供服务降级与保护机制",

  productTab_4_title: "（微）服务监控（Monitor）",
  productTab_4_tip_1: "以无侵入方式实现对Java程序的画像与监控",
  productTab_4_tip_2: "以心跳数据实现对应用容器的画像与监控",
  productTab_4_tip_3: "提供预警策略实现自动报警",
  productTab_4_tip_4: "提供应用/服务流图谱",

  productTab_5_title: "容器生态支持（Container）",
  productTab_5_tip_1: "对容器生态的支持，包括Monitor+APM所有能力",
  productTab_5_tip_2: "为容器生态提供智能容量规划与决策支持",

  productTab_6_title: "任务机器人平台（HIT）",
  productTab_6_tip_1: "AI+ChatOps",
  productTab_6_tip_2: "智能报警",
  productTab_6_tip_3: "智能巡检",

  productTab_7_title: "微服务计算平台（MSCP）",
  productTab_7_tip_1:
    "提供微服务计算的编程框架和运行时，框架是以抽象组件为基础；提供通信，工作流，定时任务，处理模型（多线程，异步等），IO处理等组件",
  productTab_7_tip_2:
    "提供以组件编程构建业务功能的能力，即Feature；提供单binary多配置实现差异化运行的部署方式，即Profile",
  productTab_7_tip_3:
    "基于共识数据，实现多个运行实例的协作能力，即动态计算编排；以动态计算编排为基础，实现跨实例多个Feature的协作能力，即动态服务编排",
  productTab_7_tip_4: "端到端跟踪联通",

  outlineTab_title: "全维度监控+应用运维解决方案",

  supportPanel_title: "JAVA探针支持",

  supportTab_1_title: "JDK版本",
  supportTab_1_tip_1: "JDK6",
  supportTab_1_tip_2: "JDK7",
  supportTab_1_tip_3: "JDK8",
  supportTab_1_tip_4: "JDK9",

  supportTab_2_title: "应用框架",
  supportTab_2_tip_1: "Dubbo | DubboX | CXF | AXIS2",
  supportTab_2_tip_2: "XFIRE | SUN JAXWS | Jersey",
  supportTab_2_tip_3: "SpringMVC | SpringRESTService | Servlet（2.5/3.x）",
  supportTab_2_tip_4: "Struts 2.x | Wink | Apache HttpClient（同步/异步）",
  supportTab_2_tip_5: "Web Filter（2.5/3.x | Log4j | LogBack",
  supportTab_2_tip_6: "Java Logging",

  supportTab_3_title: "应用服务器",
  supportTab_3_tip_1: "Tomcat（6+）",
  supportTab_3_tip_2: "SpringBoot",
  supportTab_3_tip_3: "Jetty（7+）",
  supportTab_3_tip_4: "MSCP",
  supportTab_3_tip_5: "任意JSE",

  supportTab_4_title: "数据源",
  supportTab_4_tip_1: "MySQL",
  supportTab_4_tip_2: "Oracle等JDBC数据源",
  supportTab_4_tip_3: "MongoDB（MongoClient）",
  supportTab_4_tip_4: "Redis（JEDIS，LETTUCE，ARedis）",
  supportTab_4_tip_5: "ESClient（Transport）",

  supportTab_5_title: "消息中间件",
  supportTab_5_tip_1: "RabbitMQ（消费/生产）",
  supportTab_5_tip_2: "RocketMQ（消费/生产）",
  supportTab_5_tip_3: "Kafka（消费/生产）",

  supportTab_6_title: "数据库连接池",
  supportTab_6_tip_1: "DBCP/2 | c3p0",
  supportTab_6_tip_2: "Druid | Proxool",
  supportTab_6_tip_3: "Hikari | MyBatis CP",
  supportTab_6_tip_4: "Tomcat DBCP/2"
};
export default en_US;
