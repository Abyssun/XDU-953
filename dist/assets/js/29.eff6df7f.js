(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{323:function(v,_,t){v.exports=t.p+"assets/img/image-20240108195338576.58740309.png"},324:function(v,_,t){v.exports=t.p+"assets/img/image-20240108195520302.27c536fd.png"},411:function(v,_,t){"use strict";t.r(_);var p=t(14),d=Object(p.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"填空"}},[v._v("填空")]),v._v(" "),_("p",[v._v("1.协议")]),v._v(" "),_("p",[v._v("2.总线型\t星型")]),v._v(" "),_("p",[v._v("3.数据链路层")]),v._v(" "),_("p",[v._v("4.协议数据单元（PDU）")]),v._v(" "),_("p",[v._v("5.逻辑地址\t端口地址")]),v._v(" "),_("p",[v._v("6.两倍的最大频率带宽")]),v._v(" "),_("p",[v._v("7.双绞线")]),v._v(" "),_("p",[v._v("8.数据报\t虚电路")]),v._v(" "),_("p",[v._v("9.s+1\t2s+1")]),v._v(" "),_("p",[v._v("10.2^m-1\t1")]),v._v(" "),_("p",[v._v("11.PCF 点协调功能子层和 DCF 分布式功能子层")]),v._v(" "),_("p",[v._v("12.IP\tMAC")]),v._v(" "),_("p",[v._v("13.UDP协议或距离向量算法")]),v._v(" "),_("h2",{attrs:{id:"单选"}},[v._v("单选")]),v._v(" "),_("p",[v._v("1-5 BABAA")]),v._v(" "),_("p",[v._v("6-10 BADCC")]),v._v(" "),_("h2",{attrs:{id:"简答"}},[v._v("简答")]),v._v(" "),_("p",[v._v("1.先使用应用层的DNS，进行域名解析，解析到IP地址，然后进行传输层的TCP三次握手建立连接，连接建立之后（也可以使用UDP），服务器端采用http/https协议封装报文，并进行TCP传输，路由器在网络层采用NAT技术和ARP技术，找到访问的客户端，客户端再进行解封装，得到http报文并在浏览器显示。链路层可以采用PPP，HDLC")]),v._v(" "),_("p",[v._v("2.停止等待ARQ，发送窗口和接收窗口均为1；回退N帧ARQ，发送窗口 2^m – 1，接收窗口为1，采用累计确认的形式；选择重传ARQ，发送窗口和接收窗口最大均为2^（m-1），同样采用累计确认")]),v._v(" "),_("p",[v._v("3.数据链路层可靠并不代表传输层不需要流量控制和差错控制，因为在数据链路层的可靠性存在于两个节点之间，而不是端到端的可靠性；并且网络层是不可靠之间，而不是端到端的可靠性；并且网络层是不可靠的，必须在传输层实现可靠性；数据链路层的差错控制并不能保证传输层的差错控制")]),v._v(" "),_("p",[v._v("4.先听后发，边听边发，冲突停发，随机重发；（十六字箴言）按照这十六个字，自己扩充一下就行了")]),v._v(" "),_("h2",{attrs:{id:"计算"}},[v._v("计算")]),v._v(" "),_("p",[v._v("1")]),v._v(" "),_("img",{attrs:{src:t(323)}}),v._v(" "),_("p",[v._v("2")]),v._v(" "),_("p",[v._v("(1) RTT "),_("code",[v._v("= 2*385000000m / (3*10^8 m/s) = 2.57s")])]),v._v(" "),_("p",[v._v("(2) 延迟带宽积 "),_("code",[v._v("= 2.57 * 100 Mb/s = 257 Mb =32MB")])]),v._v(" "),_("p",[v._v("(3) 发送时延 "),_("code",[v._v("= 25MB / (100Mb/s) = 25 *1024 *1024 *8 bit /(100Mb/s) = 2.1s")])]),v._v(" "),_("p",[v._v("则总时间 "),_("code",[v._v("= 发送时延+RTT = 2.57+2.1 = 4.67s")])]),v._v(" "),_("p",[v._v("3")]),v._v(" "),_("p",[v._v("生成多项式"),_("code",[v._v("g(x)= x5+x3+x2+1")]),v._v("，生成多项式比特序列为101101")]),v._v(" "),_("img",{attrs:{src:t(324)}}),v._v(" "),_("p",[v._v("则CRC校验码为01100")]),v._v(" "),_("p",[v._v("4")]),v._v(" "),_("p",[v._v("(1)")]),v._v(" "),_("p",[v._v("最短（即为甲乙双方同时发送数据）= 10/200000 = 0.05ms")]),v._v(" "),_("p",[v._v("最长（一方收到另一方发来的数据之后才开始发送数据）= 0.1ms")]),v._v(" "),_("p",[v._v("(2)")]),v._v(" "),_("p",[v._v("数据的发送时延 \t= 1518*8 bit/（5Mb/s）  = 2.4288ms")]),v._v(" "),_("p",[v._v("确认帧的发送时延 \t= 64*8 bit/ (5Mb/s)  = 0.1024 ms")]),v._v(" "),_("p",[v._v("故发送周期 \t= 2.4288+0.1024+0.01 = 2.5412 ms")]),v._v(" "),_("p",[v._v("则有效数据传输率 \t= 1500*8 bit/2.5412ms  = 4.722Mb/s")]),v._v(" "),_("p",[v._v("5")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("集合")]),v._v(" "),_("th",[v._v("目标节点")]),v._v(" "),_("th"),v._v(" "),_("th"),v._v(" "),_("th"),v._v(" "),_("th")])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("B")]),v._v(" "),_("td",[v._v("C")]),v._v(" "),_("td",[v._v("D")]),v._v(" "),_("td",[v._v("E")]),v._v(" "),_("td",[v._v("F")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("A")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("∞")]),v._v(" "),_("td",[v._v("4")]),v._v(" "),_("td",[v._v("∞")]),v._v(" "),_("td",[v._v("∞")])]),v._v(" "),_("tr",[_("td",[v._v("A、B")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("4")]),v._v(" "),_("td",[v._v("4")]),v._v(" "),_("td",[v._v("2")]),v._v(" "),_("td",[v._v("∞")])]),v._v(" "),_("tr",[_("td",[v._v("A、B、E")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("3")]),v._v(" "),_("td",[v._v("3")]),v._v(" "),_("td",[v._v("2")]),v._v(" "),_("td",[v._v("6")])]),v._v(" "),_("tr",[_("td",[v._v("A、B、C、D、E")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("3")]),v._v(" "),_("td",[v._v("3")]),v._v(" "),_("td",[v._v("2")]),v._v(" "),_("td",[v._v("5")])]),v._v(" "),_("tr",[_("td",[v._v("A、B、C、D、E、F")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("3")]),v._v(" "),_("td",[v._v("3")]),v._v(" "),_("td",[v._v("2")]),v._v(" "),_("td",[v._v("5")])])])]),v._v(" "),_("p",[v._v("故最小代价通路树为 ABECF")]),v._v(" "),_("p",[v._v("6")]),v._v(" "),_("p",[v._v("(1) 从接口1转发")]),v._v(" "),_("p",[v._v("(2) 从接口0转发")]),v._v(" "),_("p",[v._v("(3) 从路由器2转发")]),v._v(" "),_("p",[v._v("(4) 从路由器1转发")])])}),[],!1,null,null,null);_.default=d.exports}}]);