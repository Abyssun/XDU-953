(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{348:function(_,v,t){"use strict";t.r(v);var p=t(14),s=Object(p.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"填空"}},[_._v("填空")]),_._v(" "),v("p",[_._v("1、时序")]),_._v(" "),v("p",[_._v("2、128")]),_._v(" "),v("p",[_._v("3、衰减")]),_._v(" "),v("p",[_._v("4、IP")]),_._v(" "),v("p",[_._v("5、隐蔽站\t暴露站\tCSMA/CA")]),_._v(" "),v("p",[_._v("6、MAC  LLC")]),_._v(" "),v("p",[_._v("7、16\t1")]),_._v(" "),v("p",[_._v("8、64")]),_._v(" "),v("p",[_._v("9、192.233.240.128  62")]),_._v(" "),v("p",[_._v("10、电路交换  数据报 虚电路")]),_._v(" "),v("p",[_._v("11、集线器   交换机 路由器")]),_._v(" "),v("h2",{attrs:{id:"单选"}},[_._v("单选")]),_._v(" "),v("p",[_._v("1-5 DBDDC")]),_._v(" "),v("p",[_._v("6-10 DCCAB")]),_._v(" "),v("p",[_._v("11-15 DBCAA")]),_._v(" "),v("p",[_._v("16-20 BABDD")]),_._v(" "),v("h2",{attrs:{id:"简答"}},[_._v("简答")]),_._v(" "),v("h3",{attrs:{id:"_1"}},[_._v("1")]),_._v(" "),v("p",[_._v("差异")]),_._v(" "),v("ul",[v("li",[_._v("分层不同，一个是事实标准，一个是理想标准。")]),_._v(" "),v("li",[_._v("OSI的网络层是面向连接与面向无连接的，而TCP的网络层仅面向无连接。他们两的传输层正好相反")])]),_._v(" "),v("p",[_._v("相同点")]),_._v(" "),v("ul",[v("li",[_._v("都采取了分层的思想，并且基于独立的协议栈")]),_._v(" "),v("li",[_._v("都可以解决异构网络的互联。")])]),_._v(" "),v("h3",{attrs:{id:"_2"}},[_._v("2")]),_._v(" "),v("p",[_._v("先检查ARP高速缓存，若查找不到，则生成一个ARP报文，将源主机地址(192.168.25.1），源mac地址（E1）和目的ip（192.168.25.2）地址填入，并且将目的mac地址置0，然后生成一个广播帧，在局域网中进行广播。目的主机接收到该广播帧，则单播回复一个ARP报文，将自身的mac（E2）地址填入。完毕(注意ARP应用的四种情况，此题属于局域网中的ARP应用)")]),_._v(" "),v("h3",{attrs:{id:"_3"}},[_._v("3")]),_._v(" "),v("p",[_._v("数据链路层可靠并不代表传输层不需要流量控制和差错控制，因为在数据链路层的可靠性存在于两个节点之间，而不是端到端的可靠性；并且网络层是不可靠之间，而不是端到端的可靠性；并且网络层是不可靠的，必须在传输层实现可靠性；数据链路层的差错控制并不能保证传输层的差错控制")]),_._v(" "),v("h3",{attrs:{id:"_4"}},[_._v("4")]),_._v(" "),v("p",[_._v("优点：能有应用于规模很大的网络，而且利用洪泛法进行交换，减少了整个网络上的通信量，能够快收敛。")]),_._v(" "),v("p",[_._v("缺点：资源消耗较大，负载均衡能力较弱。")]),_._v(" "),v("h3",{attrs:{id:"_5"}},[_._v("5")]),_._v(" "),v("p",[_._v("慢启动：(指数增加)客户端向服务器端发送一个MSS，然后收到确认之后，再发送2个MSS，每收到一个MSS的确认，下次传输数据便增加一个MSS，若发送窗口达到阈值时，则进入拥塞避免阶段")]),_._v(" "),v("p",[_._v("拥塞避免：(加性增加)此时为了避免拥塞发生，必须降低拥塞窗口指数增长的速度，在这个算法中，每次整个窗口中的所有段被确认后(一次传输)，拥塞窗口和阈值均+1；若发生了网络拥塞，此时进入拥塞检测阶段；")]),_._v(" "),v("h2",{attrs:{id:"计算"}},[_._v("计算")]),_._v(" "),v("h3",{attrs:{id:"_1-2"}},[_._v("1")]),_._v(" "),v("p",[_._v("(1) 11101110")]),_._v(" "),v("p",[_._v("(2) 11000100")]),_._v(" "),v("p",[_._v("(3) 01110001")]),_._v(" "),v("h3",{attrs:{id:"_2-2"}},[_._v("2")]),_._v(" "),v("p",[_._v("NULL")]),_._v(" "),v("h3",{attrs:{id:"_3-2"}},[_._v("3")]),_._v(" "),v("p",[_._v("(1) 30")]),_._v(" "),v("p",[_._v("(2) 100")]),_._v(" "),v("p",[_._v("(3) 80")]),_._v(" "),v("p",[_._v("(4) 70")]),_._v(" "),v("h3",{attrs:{id:"_4-2"}},[_._v("4")]),_._v(" "),v("p",[_._v("(1) t3 = 2000m /(200 m/us) = 10 us")]),_._v(" "),v("p",[_._v("(2) t4 = 10us + 3us = 13us;")]),_._v(" "),v("p",[_._v("(3) 10^7 * 13 * 10^(-6) = 130 bit")]),_._v(" "),v("p",[_._v("(4) 10^7 * 7 * 10^(-6) = 70 bit")]),_._v(" "),v("p",[_._v("(5) 最短帧长 = 2"),v("em",[_._v("10Mbps")]),_._v(" 10km / (200m/us) = 1000 bit")]),_._v(" "),v("h3",{attrs:{id:"_5-2"}},[_._v("5")]),_._v(" "),v("p",[_._v("(1)")]),_._v(" "),v("p",[_._v("局域网1 ： 255.118.1.0/25")]),_._v(" "),v("p",[_._v("局域网2 ： 255.118.1.128/25")]),_._v(" "),v("p",[_._v("(2)")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("222.118.3.2")]),_._v(" "),v("th",[_._v("255.255.255.255")]),_._v(" "),v("th",[_._v("222.118.2.2")]),_._v(" "),v("th",[_._v("L0")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("0.0.0.0")]),_._v(" "),v("td",[_._v("0.0.0.0")]),_._v(" "),v("td",[_._v("222.118.2.2")]),_._v(" "),v("td",[_._v("L0")])])])]),_._v(" "),v("h2",{attrs:{id:"综合"}},[_._v("综合")]),_._v(" "),v("p",[_._v("(1) 00 36，即54B")]),_._v(" "),v("p",[_._v("(2) 目的地址：D8-49-0B-B5-7C-55\t源地址：78-2B-CB-E9-8D-A3")]),_._v(" "),v("p",[_._v("(3) 报文中为5，即4*5=20B")]),_._v(" "),v("p",[_._v("(4) 报文中为00 34，即52B")]),_._v(" "),v("p",[_._v("(5) 没有")]),_._v(" "),v("p",[_._v("(6) 报文中80，即TTL=128")]),_._v(" "),v("p",[_._v("(7) 校验和为75 65")]),_._v(" "),v("p",[_._v("(8) 源端口为 95 3C，即38204\t目的端口为 00 50 ，即80，TCP上层协议为 HTTP")]),_._v(" "),v("p",[_._v("(9) 六个flag分别为000010，因为SYN=1和ACK=0，故该报文是TCP连接报文")]),_._v(" "),v("p",[_._v("(10) 窗口大小为 20 00，即窗口大小为8192")])])}),[],!1,null,null,null);v.default=s.exports}}]);