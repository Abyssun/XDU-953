---
title: 2019 951 真题
date: 2024-2-1
---

## 单选

1.计算机算法指的是

- A. 计算方法
- B. 解决问题的步骤序列
- C. 排序方法
- D. 调度方法

2.顺序表比链表

- A. 更便于随机读取
- C. 插入和删除更简便
- B. 数据元素的物理存储范围更分散
- D. 更适合线性逻辑结构

3.在一个长度为n的顺序表的第i(lSiSn+1)个位置上插入一个元素，需要后移()
个元素。

- A. n-i
- B. n-i-l
- C. n-i+1
- D. n+i

4.要从一个顺序表删除一个元素时，被删除元素之后的所有元素均需()一个位置
移动过程是从()向()依次移动一个元素。

- A. 前移，后，前
- B. 前移，前，后
- C. 后移，后，前
- D. 后移，前，后

5.向一个栈顶指针为 top 的链栈中插入一个s 结点，应执行()

- A. top->next=s;
- B. s->next-top;top=s;
- C. s->next-top->next; top->next=s;
- D. s->next-top;top = top->next;

6.设某二叉树中度数为 0 的结点数为 N0，度数为 1 的结点数为 N1，度数为 2 的结点数为 N2，则下列等式成立的是()

- A. N0 = N1+1
- B. N0 = N1+ N2
- C. N0 = N2+1
- D. N0 = 2N1+1

7.一棵二叉树的后序遍历序列为 C、A、E、B、D，中序遍历序列为D、A、C、B、E,
则先序遍历序列为()

- A. D、B、A、C、E
- C. C、E、D、B、A
- B. D、A、B、E、C
- D. C、B、D、A、E

8.Huftman 树的带权路径长度等于()

- A. 除根结点之外的所有结点权值之和
- C. 各叶子结点的带权路径长度之和
- B. 所有结点权值之和
- D. 根结点的值

9.设有6个顶点的无向图，该图至少有()条边，才能确保是一个连通图

- A. 5
- B. 6
- C. 7
- D. 8

10.设某无向图中有 n 个顶点e 条边，则建立该图邻接表的时间复杂度为()

- A. O(n+e)
- B. O(n2)
- C. O(ne)
- D. O(n3)

11.若图的邻接矩阵中主对角线上的元素全是 0，其余元素全是 1，则可以断定该图一定是()

- A. 无向图
- B. 不是带权图
- C. 有向图
- D. 完全图

12.已知采用开放地址法解决散列表冲突，要从此散列表中删除一个记录，正确的做法是

- A. 将该元素所在的存储单元清空
- B. 在该元素上做删除标记。
- C. 将与该元素有相同 Hash 地址的后继元素顺次前移一个位置。
- D. 用与该元素有相同Hash 地址的最后插入表中的元素替代。

13.散列函数有一个共同性质，即函数值应当以()取其值域的每个值

- A. 最大概率
- B. 最小概率
- C. 平均概率
- D. 等概率

14.快速排序方法在()情况下最不利于发挥其长处

- A. 要排序的数据量太大
- B. 要排序的数据中含有多个相同值
- C. 要排序的数据已基本有序
- D. 要排序的数据个数为奇数

15.在归并排序过程中，需归并的趟数为()

- A. √n
- B. ⌈lbn⌉
- C. n
- D. ⌊lbn⌋

## 判断

1.线性表中的所有元素都有一个前驱元素和后继元素（）

2.栈和队列的存储方式只能是链接方式（）

3.查找和修改是对数组的基本操作（）

4.二叉树的后序遍历序列中，任意一个结点均处在其孩子结点的后面（）

5.一个含有 n 个结点的完全二叉树，它的高度是 ⌊ logn ⌋+1（）

6.当向二叉排序树中插入一个结点，则该结点一定成为叶子结点（）

7.调用一次深度优先遍历可以访问到图中的所有顶点（）

8.带权无向图的最小生成树是唯一的（）

9.如果表示某个图的邻接矩阵是不对称矩阵，则该图一定是有向图（）

10.在一个有向图的拓扑序列中,若顶点a在顶点b之前,则图中必有一条弧<a, b>（）

11.在散列法中，散列函数必须是一个一对一的函数（）

12.散列表发生冲突的可能性与装填因子无关（）

13.索引顺序结构和索引非顺序结构的索引表中索引项都是按照关键字顺序排列的（）

14.对 个元素执行快速排序，在进行第一次划分时，关键字的比较次数总是 n-1 次（）

15.归并排序算法中辅助组所需的空间复杂度为 O(n)（）

## 填空

1.数据的物理结构主要包括 ____ 和 ____ 两种情况

2.顺序表中逻辑上 ____ 的元素的物理位置相邻

3.在双向循环链表中，在m 所指的结点之后插入 n 指针所指的结点，其操作是 ____; n->next = m->next; m->next->prior = n; m->next=n;

4.设有一个空栈，现有输入序列 (a,b,c,d,e)，经过 push，push，pop，push，pop，push，push 的操作，输出序列是 ____

5.两个字符串相等的充要条件是两个串的 ____ 相等和对应位置的字符相等

6.装有n个叶子的哈夫曼树的结点总数为 ____

7.设二叉树中结点的两个指针域分别为 lchild 和 rchild，则判断指针变量 p 所指向的结点为叶子结点的条件是 ____

8.根据初始关键字序列(19、22、01、38、10)建立的二叉排序树的高度为 ____

9.设一棵二叉树的前序序列为 ABC， 则有 ____ 种不同的二叉树可以得到这种序列

10.解决散列表冲突的两种方法是 ____ 和 ____

11.对于一个具有 n 个顶点和 e 条边的无向图，如果采用邻接表存储方法存储该无向图边表中所含结点有 ____

12.在一个具有 n 个顶点的完全有向图中，包含有 ____ 条边

13.设某无向图中顶点数和边数分别为 n 和 e，所有顶点的度数之和为 d，则 e = ____

14.对一个长度为 n 的任意文件进行排序，至少需要 ____ 次比较

15.对n个元素进行冒泡排序时，最少的比较次数是 ____

## 问题求解

1.(7分) 假设字符集 {a,b,c,d,e,f} 对应的权重为 {45,13,12,16,9,5}

- (1) 为这 6 个字符建立Haffman树，并给出相应的 Hafman 编码，要求左子树权重小于右子树且编码时左边为 0 右边为 1
- (2) 求出Haffman树的带权路径长度WPL

2.(8分) 设完全二叉树的顺序存储结构中存储数据 ABCDE，要求画出该完全二叉树并
给出该二叉树的前序、中序和后序遍历序列。

3.(7分) 一个线性表为 B=(12,23,45,57,20,03,78,31,15,36),设散列表为 HT[0...12]!
散列函数为 H(key)=key%13 并用线性探查法解决冲突，请画出散列表，并计算等概率情况下查找成功的平均查找长度。

4.(7分) 下图是有 5个顶点 (1,2,3,4,5) 的无向图。请回答相关问题

<img src="./assets/image-20240203220240014.png">

- (1) 请画出该图的邻接矩阵和邻接表
- (2) 若该图采用邻接矩阵表示，按邻接点序号从小到大选择，给出从顶点 2开始的广度优先搜索序列
- (3) 在广度优先搜索算法中，除了邻接矩阵，还使用了什么数据结构

5.(8分) 有6个顶点(V0,V1,V2,V3,V4,V5)的有向图的邻接矩阵如下图。请回答相关问题

<img src="./assets/image-20240203220535835.png">

- (1) 画出该有向图
- (2) 求从顶点 vo开始到其余顶点的最短路径。按最短路径生成的次序填写下表

| 步骤   | 最短路径点集 S | 选择的顶点 | 源点到各顶点的长度<br>D[0] &nbsp;&nbsp;D[1] &nbsp;&nbsp;D[2] &nbsp;&nbsp;D[3] &nbsp;&nbsp;D[4]&nbsp; &nbsp;D[5] |
| ------ | -------------- | ---------- | ------------------------------------------------------------ |
| 初始   | {0}            | -          | 0&emsp;&emsp;M&emsp;&emsp;10&emsp;&emsp;M&emsp;&emsp;30&emsp;&emsp;100 |
| 第一步 | {0, 2}         | 2          |                                                              |
| 第二步 |                |            |                                                              |
| 第三步 |                |            |                                                              |
| 第四步 |                |            |                                                              |
| 第五步 |                |            |                                                              |

6.(8分) 某人去超市购物，设有n种物品，第i种物品的重量为 wi，价值为 vi，一个人最多能带的重量为 c(c>0)

- (1) 请设计一个算法使得一个人能带走的物品价值最大
- (2) 如果有 3 种物品，第一种物品是大米重 5 公斤，价值 50元;第二种物品是面粉
  重10公斤，价值80元;第三种物品是土豆重15 公斤，价值45 元。已知一个人
  最多能带 25 公斤。根据设计的算法，给出最优的方案 (每种物品的携带数量)

## 算法

1.(10分)已知线性表的元素是无序的，实现一个删除表中所有值小于 max 但大于 min
的元素的算法，该线性表以带头结点的单链表为存储结构

```c
void delete(LinkList *head, int max, int min){
    LinkList *p, *q;
    /* 在此作答 */
}
```

2.(10分)编写一个非递归算法的函数求出二叉排序树中的关键字最小的元素(注意异
常情况的处理)。数据结构如下所示

```c
typedef int ElemType;
typedef struct node {
    ElemType data;
    struct node *left, *right;
}BTreeNode;
```

请据此填写以下函数(提示:二叉排序树中的位置信息对应于关键字大小信息)

```c
ElemType FindMax(BTreeNode*BST){
	BTreeNode*t;
	if( __①__ ){
		printf(“不能在空树上查找最小值!\n”);
		return;
    }
    __②__;
	while( t->left!=NULL){
        __③__;
    }
    return __④__;
}
```

3.(10分)利用图的深度优先搜索写一个算法，判别以邻接表方式表示的有向图中是否
存在由顶点到顶点的路径 (i≠j)

```c
#define N 8

typedef struct node{
	int adjvex;
	struct node *next
}ledgenode;

typedef struct{
	char vertex;
	edgenode *link:
}vexnode;

int visited[N];

int exist path DFS(vexnode ga[ ], int i, int j){
    /*以邻接表为存储结构，判断v和之间是否有路径，若有返回1，否则返回0*/
	edgenode*p;
	if( __①__ )	return 1;
	else{
        visited[i]=1; /*标记已被访问*/
        __②__;/*访问v的第一个邻接点*/
        while( __③__ ){/*依次访问 v;的接点*/
            if( __④__ && __⑤__ ) /*vi的邻接点若未被访问过，且该邻接点到vj存在路径*/
                return 1;
            p = p->next;
        }
    }
    return 0;
}
```