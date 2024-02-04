---
title: 2018 951 真题
date: 2024-2-1
---

## 单选

1.数据的基本单位是 ()

- A. 数据结构
- B. 数据元素
- C. 数据项
- D. 文件

2.在逻辑上可以把数据结构分成 ()

- A. 动态结构和静态结构
- B. 紧凑结构和非紧凑结构
- C. 内部结构和外部结构
- D. 线性结构和非线性结构

3.不带头结点的单链表 head 为空的判定条件是 ()

- A. head=NULL
- B. head->next=NULL
- C. head->next=head
- D. head!=NULL

4.在一个单链表中，若要在指 p 所指结点之后插入指针 s所指结点，则执行 ()

- A. s->next=p;p->next=s;
- B. s->next=p->next;p->next=s;
- C. s->next=p->next; p=s;
- D. p->next=s;s->next=p;

5.串是一种特殊的线性表，其特殊性体现在 ()

- A.可以顺序存储
- C.可以连接存储
- B.数据元素是一个字符
- D.数据元素可以是多个字符

6.二维数组 M 的成员是 6 个字符每个字符占一个存储单元组成的，行下标 i 的范用从 0 到 8，列下标 j 的范围从 0 到 9，则存放M至少需要 () 个存储单元

- A. 90
- B. 180
- C. 240
- D. 540

7.当利用大小为n 的数顺序存储一个栈时，假定用 top-n 表示空，则向这个栈插入一个元素时，首先应执行 ()（top 为顶指针）

- A. top++
- B. top--
- C. top=0
- D. top

8.设长度为 n 的链队列用单循环链表表示，若只设头指计，则入队和山队操作的时间复分 ()

- A. O(1), O(1)
- B. O(1), O(n)
- C. O(n), O(1)
- D. O(n), O(n)

9.任何一棵二树的叶子结点在前序、中序和后序遍历序列中的相对次序 ()

- A. 不发生改变
- B. 发生改变
- C. 不能确定
- D. 以上都不对

10.线索二叉链表是利用 () 域存储后继结点的地址

- A. Ichild
- B. data
- C. rchild
- D. root

11.单链表中，增加头结点的目的是为了 ()

- A. 使单链表至少有一个结点
- B. 标示表结点中首结点的位置
- C. 方便运算的实现
- D. 说明单链表是线性表的链式存储实现

12.无向图 G=(V,E)，其中 V={a,b,c,d,c,f}，E={(a,b),(a,e),(a, c),(b,e),(c,f),(f,d),(e,d)，对该图进行深度优先遍历，得到的顶点序列正确的是 ()

- A. a,b,e,c,d,f
- B. a,c,f,e,b,d
- C. a,e,b,c,f,d
- D. a,e,d,f,c,b

13.设散列表长度为 m，k 为关键字用 p 去除 k，将所得的余数作为的散列地址，即
H(k)=k%p。为了减少发生的冲突的频率，一般取 p 为()
A. 小于等于m的最大偶数
B. m
C. 大于等于m的最小素数
D. 小于等于m的最大素数

14.矩阵连乘问题可以用下列哪种方法解()

- A. 贪心算法
- B. 分治递归算法
- C. 动态规划
- D. Kruskal 算法

15.关于动规划算法下列说法不正确的是()

- A. 用于求解具有某种最优性质的问题
- B. 以自顶向下的方式计算最优值
- C. 适用于动态规划法求解的问题，经分解得到的子问题往往不是相互独立的
- D. 先求解子问题，再从子问题的解得到原问题的解

## 判断

1.算法的时间复杂度取决于问题的规模和待处理数据的初态

2.顺序表无需为表示结点间的逻辑关系而增加额外的存储空间

3.对双向链表来说，结点 *P 的存储位置既存放在其前趋结点的后继指针域中，也存放在它的后继结点的前趋指针域中

4.二树的子树没有左右次序之分

5.树型结构中，任何结点可以有多个前驱结点和后继结点

6模式匹配的改进算法-KMP算法的最大特点是指示主串的指针不需要回溯

7.空格串是零个字符组成的串

8.栈底元素是不能删除的元素

9.栈是一种对进栈、出栈操作总次数做了限制的线性表

10.无向图的邻接矩阵是一个对角矩阵

11.有向图的遍历不可采用广度优先搜索方法

12.把散列地址不同的结点，争夺同一个后继列地址的现象称为“冲突”

13.当一个问题的所有子问题都至少需要求解一次时，动态规划算法好于备忘录算法

14.能够用分治法求解的问题往往具有子问题重叠性质

15.贪心算法所做的贪心选择是仅在当前状态下做出最好的选择

## 填空

1.当输入数据非法时，算法也能适当地做出反应或进行处理，而不会产生莫名其妙的输出结果，这称为算法的 ____

2.不要求逻辑上相邻的结点在物理位置上亦相邻，结点间的逻辑关系是由附加的指针字段表示的。由此得到的存储示称为 ____ 存储结构

3.一个顺表的第一个元的存储地址是 200，每个元素的度是 4，则第 7 个元的地址是 ____

4.单链表示法的基本想是用 ____ 表结点间的逻辑关系

5.求字串在主串中首次出现的位置的运算称为 ____

6.二维数组 A 采用行序为主方式存，其中行下标的范围从 0 到 10，列下标的范从 0 到 5，每个元素占 4 个存储单元，并且`A[0][0]`的存储地址是 1000，则`A[8][4]`的地址是 ____

7.知一个的输入序列为 1,2,3.....n，则其输出序列的第2个元素为 n 的输出序列的种数是 ____

8.一个循环队列 Q 的存储空间大小为 M，其队头和队尾指针分别为 front 和 rear，则循环队列中元素的个数为 ____

9、在二又链表中空链域有 n 个，则该链表共有 ____ 个结点

10.某二叉树中度数为 0 的结点数为 N0，度数为 2 的结点数为N2，则N0、N2之间关系是 ____

11.某二叉树的前序遍历序列是 abdgcefh，中序序列是 dgbaechf，其后序序列为 ____

12.对于用分块的表，要求表是 ____

13.索引表的索引项的一般形式是：( 关键字，____ )

14.贪心算法可以求解的问题应具有最优子结构和 ____ 的性质

15.一个有 n 个顶点的无向图最多有 ____ 条

## 问题求解

1.(7分) 在如下数组A中链接存了一个线性表，表头指针为 A[0].next，试按照下面格式写出该线性表

| A    | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| data |      | egg  | if   |      | for  | go   | and  | do   |
| next | 5    | 7    | 4    |      | 1    | 2    | 0    | 6    |

线性表为：(	,	,	,	,	,	)

2.(7分) 对给定的一组关键字:`63，83，43，22，67，65，76，54，99，68，77，14`，画出应用归并排序对上述序列进行排序中各趟归并的结果
第一趟归并后：`[	][	][	][	][	][	]`
第二趟归并后：`[		][		][		]`
第二趟归并后：`[				][		]`
第四趟归并后：`[						]`

3.(7分)设有一组关键字序列 (23,34,56,33,45,28,67,11,50,07,47)，散列表长为 15

- (1) 请设计一个适当的散列函数(用除余数法)
- (2) 装填因子等于多少?
- (3) 出用拉链法构造的列表(中插入点时用头插法)

4.(8分) 设将数1234 次进，只要出时非，则可将操作按任何次序夹入其中，请回答下述问题

- (1) 若入、出栈次序为 Push(1),Pop(),Push(2),Push(3),Pop(),Pop(),Push(4),Pop()，则出栈的数字序列是怎样的（这里 Push(i)表示i进，Pop()表示出栈）
- (2) 能得到出列1423 1432？说为什么不能得到或如何得到
- (3) 分析 1234 的 24 种排列中，哪些是可以通过应的出入栈操作得到的

5.(8分) 已知一个无图如下图所示，给出从顶点1出发用 Prim 普利姆算法生成所有可能的最小树的过程

<img src="./assets/image-20240204120024560.png">

6.(8分) 输入一个正整数列 (40,28,6,72,100,3,54,1, 80,91,38)，建立一棵二义排序树，然后删除结点 72，分别画出该该二叉树及删除结点 72 后的二叉树

## 算法设计

1.(10分) 设二叉树采用二叉链表存储，完成一个递归实现的算法，计算一给定二叉树的叶子结点数

```c
typedef int Elemtype;
typedef struct node{
	Elemtype data;
	__①__; //定义左右子树
}BinNode,*BinTree;

int num=0;

void CountLeaves(BinNode *p，int num){
	//num is the number of leaves
	if(p!=Null){
		if((!(p->lchild)&&!( p->rchild)){
            __②__;
         }
		__③__; //计算左子树叶子节点个数
		__④__; //计算右子树叶子节点个数
    }
}
```

2.(10分) 如果希望循环队列中的元素都能得到运用，则需要设置一个标志域 tag，并通过 tag 的值为 0 和 1 来区分指针和头指值相同时的队列状态是“空”还是“满”。补全下面与此结构相应的入队列和出队算法

```c
typedef int QElemType;
//循环对列中元素的类型
typedef struct{
    QElemType base[maxsize];
	int front;
	int rear;
	int tag；
}CyQueue;

Status EnCyQueuc(CyQueue *Q , int x){ //带 tag 城的循环对列入队算法
	if(Q.front == Qrear&&Q.tag = =1) //tag 域的值为0表示“空”，1表示“满”
		return OVERFLOW:
	Q.rear =(Q.rear+1)%MAXSIZE:
	Q.base[ __①__ ] = x;
	if( __②__ )
		Q.tag=l;
}
Status DeCyQueue(CyQueue *Q , int x){ //出队算法，出队的值赋给X
	if(Q.front ==Qrear&&Q.tag==0)
		retum INFEASIBLE;
	__③__;
	__④__;
	if( __⑤__ )
	Q.tag=0;
}
```