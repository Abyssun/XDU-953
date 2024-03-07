---
title: 李永乐 - 线性代数和概率论
date: 2023-6-20
---

## 线性代数

T281、282、289、314、321、334

### 延伸组和整体组的性质

> 牢记一个矩阵无关的根本原因：秩 m 和列数 n 的大小关系

对于一个行最简的矩阵 A，假设其秩为 m，列数为 n，线性无关是指 m ≥ n

- 原矩阵对应的齐次方程组 Ax = 0，只有非零解，n 个未知数对应有 m 个有效方程（m ≥ n），方程只有一种解，即全零解
- 原矩阵秩数大于列数，即有效方程个数大于未知数个数，可以确定 n 个未知数的值，而对于齐次方程来说，就直接确定为一堆 0

对于整体组（在原有向量组下加一行，m 只会增加）：原矩阵无关（m > n），则整体组一定无关；整体组有关（n > m），原矩阵一定有关

反之不成立

对于延伸组（在原有向量组右加一列）：原矩阵有关，则延伸组一定有关；延伸组无关，则原矩阵一定无关

反之不成立

### 找极大无关组

对于一个矩阵`A = (α1, α2, α3, α4, α5)`，有这样两种方式找到其极大无关组（本质上都是一样的，找寻子式不为 0 的向量组）

第一种方法：将 A 化为行最简矩阵，找到每一个主元所在列，如主元位于第 1、3、5 列，则`(α1, α3, α5)`就为 A 的一个极大无关组

第二种方法：将 A 化为行最简矩阵后，得到其秩 r(A) = r，那么去寻找一个 r 阶子式不为 0 的向量组（由 r 个向量组成），这个向量组同样是 A 的一个极大无关组

### 矩阵方程求解

一般来说，求解矩阵方程，将逆左右乘可以得到想要的解，如
$$
AB = C \rightarrow B = A^{-1}C
$$
但当 A 和 C 没有逆时（秩小于维数，行列式维 0），不能用这样方式求解，采用设未知数的方式转化为解非齐次线性方程组问题，如
$$
\left [ \begin{matrix}
1&1\\
2&2\\
\end{matrix} \right ] B =
\left [ \begin{matrix}
2&3\\
4&6\\
\end{matrix} \right ]
$$
此时 A B 均不可逆，于是设
$$
B = 
\left [ \begin{matrix}
x_1&x_2\\
x_3&x_4\\
\end{matrix} \right ]
$$
则有方程组
$$
\begin{cases}
x_1+x_3 = 2\\
x_2+x_4 = 3\\
\end{cases}
$$
设自由项`x1=u, x2=v`，故有
$$
B = 
\left [ \begin{matrix}
u&v\\
2-u&3-v\\
\end{matrix} \right ]\quad
u,v\in R
$$

### 特征值求解

各行元素之和为确定常数，根据题意列出齐次方程组，根据特征值定义写出特征向量和特征值，如下式有

<img src="./assets/image-20230708205642546.png">
$$
A[1,1,1]^T = 5[1,1,1]^T
$$
故 5 为 A 的一个特征值，k(1,1,1) 为其一个特征向量

### 相似、合同和正定的判断

相似：定义上指存在可逆矩阵 P 使得 A 和 B 满足
$$
P^{-1}AP = B
$$
则 A 和 B 相似，实际上就是说 A 和 B 的**特征值完全相同**，这又引申出
$$
tr(A) = tr(B) = \sum\lambda\quad |A|=|B| = \Pi\lambda
$$
但注意，**迹和行列式相同**单独拿出均不是相似的充要条件，二者需同时满足

当 A 和 B 相似时，进一步有
$$
|A+kE| = |B+kE|
$$
相似矩阵的秩和迹也均相同
$$
r(A+kE) = r(B+kE)\quad tr(A+kE) = tr(B+kE)
$$

合同：两矩阵的惯性指数相同，**求解特征值比较**即可

正定：指矩阵惯性指数均大于 0，可以**通过顺序主子式判断**，如
$$
B = 
\left [ \begin{matrix}
x_1&x_2\\
x_3&x_4\\
\end{matrix} \right ]
$$
若顺序主子式
$$
|x_1|>0\quad
\left | \begin{matrix}
x_1&x_2\\
x_3&x_4\\
\end{matrix} \right | >0
$$
则矩阵 B 正定

### 基、坐标和过渡矩阵求解

基：一组线性无关的向量组，假设为 n 维，则这个 n 维的向量组可以线性表出任意其他 n 维的向量组（基石、基础之意）

坐标和基是同时出现的，若 α 是 3 维空间上一组基
$$
(\alpha_1,\alpha_2,\alpha_3)
\left ( \begin{matrix}
x_1\\x_2\\x_3
\end{matrix} \right )
=(\beta_1,\beta_2,\beta_3)
$$
则称矩阵 x 是 β 在基 α 下的坐标，这个方程将对应一个非齐次线性方程组，解出就行（齐次通解+非齐次特解）

过渡矩阵的定义
$$
\beta = \alpha C
$$
则称 C 是 α 到 β 的过度矩阵，注意一定是右乘

可以发现实际上这里和坐标和基是一样的，α 到 β 的一个过渡，就相当于 β 以 α 为基的一个坐标

这里引申出另一个问题，假设 β 在基 α 上的坐标为 x，现有一个新基 γ，且有
$$
\gamma = \alpha C
$$
要求 β 在 γ 上的坐标 y，则有
$$
\beta = \gamma y = \alpha x = \gamma C^{-1}x
$$
固有
$$
y = C^{-1}x
$$
就是简单的代入，替换，没什么新东西，无非矩阵变换

### 二次型、标准型和规范形

首先注意区分二次型的矩阵表示（即对应矩阵）和用矩阵乘法表示二次型，前者规定矩阵必须是对称的（表示的要优雅），后者只是用乘法表示出来就行，过程怎么乘怎么加不关注

标准型：只有平方项的二次型

- 对于对应矩阵而言，就是转化为他的相似对角矩阵，此时满足相似且只有平方项

规范形：和二次型对应矩阵的惯性指数有关，如正惯性指数 p，负惯性指数 q，为 0 的特征值 z 个，则规范形中就有 p 个 1，q 个 -1，z 个 0，怎么排布不关注

## 概率论与数理统计

### 不相容、对立和独立

不相容指不能同时发生，即
$$
P(AB) = 0
$$
但没有任何约束说，A 不发生 B 会怎么样，但对立不同，A 和 B 占据了所有概率，不仅有 P(AB) = 0，还有
$$
P(B|A) = 0\quad P(B|A) = 0
$$
一方发生，另一方比不发生；一方不发生，另一方必发生

而独立是指两个随机变量相互不影响，有
$$
P(AB) = P(A)(B)\quad P(A|B) = P(A)\quad \rho(X,Y)=0
$$
一定要善于利用独立的性质，包括期望和方差也都可以直接拆解

### 常见分布期望和方差

泊松分布
$$
P(X=k) = \frac{\lambda^k}{k!}e^{-\lambda}
$$
其期望和方差均为 λ

指数分布
$$
F(x) = 1-e^{-\lambda x}
$$
其期望方差分别为
$$
E(X)=\frac{1}{\lambda}\quad D(X)=\frac{1}{\lambda^2}
$$

### 期望和方差的运算

注意对于任何一个随机变量，其概率密度在 -∞ 到 E(X) 的积分一定不为 1/2，而是约等于，可以进行参数估计
$$
\int_{-\infty}^{E(X)}f(x)dx\neq \frac{1}{2}
$$
对于方差的运算，加减常数并不影响其值变化

<img src="./assets/image-20230722001929464.png">
$$
D(X) = D(X-c) = E[(X-c)^2]-E^2(X-c)
$$
故选 C

### 二维正态分布

对于一个二维正态分布`(X, Y) ~ N(μ1, μ2，σ1^2, σ2^2, ρ)`，其有密度函数
$$
f(x,y)=\frac{1}{\sqrt{2\pi}\sqrt{1-\rho^2}\sigma_1\sigma_2}e^{\frac{-1}{1-\rho^2}
[\frac{(x-\mu_1)^2}{\sigma_1^2}+\frac{(y-\mu_2)^2}{\sigma_2^2}-\frac{2\rho(x-\mu_1)(y-\mu_2)}{\sigma_1\sigma_2}]}
$$
其边际分布即为一维正态分布，分别符合
$$
X\sim N(\mu_1,\sigma_1)\quad Y\sim N(\mu_2,\sigma_2)
$$
ρ 是一维正态分布 X 和 Y 的相关系数，当 ρ = 0，则表示 X 和 Y 相互独立，此时有联合分布为编辑分布函数直接相乘
$$
F(X,Y) = F_X(x)F_Y(y)
$$
举个栗子

<img src="./assets/image-20230721022141475.png">

<img src="./assets/image-20230721022200083.png">

二维正态分布变换标准正态分布

<img src="./assets/image-20230721022015432.png">

<img src="./assets/image-20230721022051508.png">

### 全概率公式

就是条件发生概率乘以条件概率等于事件发生概率
$$
P(B)P(A|B) = P(AB)
$$
<img src="./assets/image-20230721015626249.png">

由于独立，有概率分布为
$$
P(X_1+X_2 \leq y) = P(X_1=0)P(X_2\leq y)+P(X_1=1)P(X_2\leq y-1)
$$
故
$$
F_Y(y) = \frac{1}{4}F(y)+\frac{3}{4}F(y-1)
$$

再举个栗子

<img src="./assets/image-20230722000605349.png">

<img src="./assets/image-20230722000645284.png">

### 最大/小值分布概率的处理

通过 1 减去反的形式化为分布函数好表示的式子，如
$$
P\{max(X,Y) \geq 1\} = 1-P\{max(X,Y) < 1\}
$$
若 X 和 Y 独立，则有
$$
1-P\{max(X,Y) < 1\} = 1-[F_X(1)\times F_Y(1)]
$$
举个栗子

<img src="./assets/image-20230721020335803.png">

<img src="./assets/image-20230721020438167.png">

### 复合方差运算

遵守最基本的方差运算法则，即
$$
D(X) = E(X^2)-E^2(X)
$$
对于乘法复合的方差
$$
D(XY) = E(X^2Y^2)-E^2(XY)
$$
若 X 和 Y 独立，则可进一步拆解
$$
E(X^2Y^2) = E(X^2)E(Y^2)
$$
对于绝对值复合，如
$$
D(|Y|) = E(Y^2)-E^2(|Y|)
$$
一般从定义上考虑求解
$$
E(|Y|) = \int_{-\infty}^{+\infty}|y|f(y)dy
$$
对于正态分布（概率密度为偶函数），则有
$$
E(|Y|) = 2\int_{0}^{+\infty}yf(y)dy
$$

### 协方差相关公式及计算

方差相加
$$
D(X+Y) = D(X)+D(Y)+2\rho\sqrt{D(X)D(Y)}
$$
协方差
$$
Cov(X,Y) = E(XY)-E(X)E(Y)
$$
相关系数
$$
\rho = \frac{Cov(X,Y)}{\sqrt{D(X)D(Y)}}
$$
切比雪夫不等式
$$
P\{|X-E(X)|\geq ε\} \leq \frac{D(X)}{ε^2}
$$
协方差的加减分配律（有点像行列式分解）
$$
Cov(X,X+Y) = Cov(X,X)+Cov(X,Y)
$$

### 边缘分布和联合分布关系

就是一个二元函数偏导的问题
$$
f(x,y) = \frac{∂^2F(x,y)}{∂x∂y}
$$
X 和 Y 的边际分布密度就是
$$
\frac{∂F}{∂x}\quad \frac{∂F}{∂y}
$$
<img src="./assets/image-20230722000956555.png">

<img src="./assets/image-20230722001232795.png">

均选 C

由二维正态分布求得边际分布的一维正太分布

<img src="./assets/image-20230722001443229.png">

<img src="./assets/image-20230722001507669.png">

和上题一样，都是通过联合分布求边际一维分布，这里使用原始的积分进行计算

<img src="./assets/image-20230722001547989.png">

<img src="./assets/image-20230722001635954.png">

<img src="./assets/image-20230722001655421.png">

### 独立和不相关的判定

> T546、547

独立比不相关分裂得更加彻底，于是有

- 独立一定不相关
- 相关一定不独立

判断两个随机变量是否相关，考虑他的协方差或相关系数，为 0 则不相关，否则相关，举个栗子

<img src="./assets/image-20230727013453652.png">

<img src="./assets/image-20230727013418182.png">

这种样本减去样本均值的随机变量形式会在 T470 出现过，其期望满足以下
$$
E(X_1-\overline X)=\frac{n-1}{n}E(X_1)-\frac{1}{n}\sum_{i=2}^nE(X_i)=0
$$
方差满足
$$
D(X_1-\overline X)=\frac{(n-1)^2}{n^2}D(X_1)+\frac{1}{n^2}\sum_{i=2}^nD(X_i)=\frac{n-1}{n}\sigma^2
$$
其中 σ 平方是总体 X 的方差

而独立要考察分布函数及其定义过程

<img src="./assets/image-20230727014134739.png">

<img src="./assets/image-20230727014158919.png">

### 大数定理

切比雪夫不等式
$$
P(|X-E(X)|\geq x) \leq \frac{D(X)}{x^2}
$$
大数定律前提

- 切比雪夫大数定律：两两不相关且期望有同一上限
- 辛钦大数定律：独立同分布且期望存在（期望必相同）

二项分布以正态分布为其极限分布，若有二项分布`X~B(n, 0.5)`，易知
$$
\mu = E(X)=0.5n\quad \sigma^2=D(X) = 0.25n
$$
这个定理规定
$$
\lim_{n\rightarrow+\infty}X\sim N(\mu, \sigma^2) \rightarrow N(\frac{n}{2},\frac{n}{4})
$$
进一步的，有
$$
\frac{X-\frac{n}{2}}{\sqrt{\frac{n}{4}}}\sim N(0,1)
$$

### 矩估计和极大似然估计

数理统计：T566、570

<img src="./assets/image-20230727150901118.png">

看到样本方差，考虑从卡方分布入手，对于卡方分布有
$$
Z\sim \chi^2(n)\rightarrow E(Z) = n\quad E(D)=2n
$$
所以对于统计量 T，有
$$
D(T)=D(\sigma^2\frac{(n-1)(S_X^2+S_Y^2)}{\sigma^2})=\sigma^4[D(Z)+D(Z)]
$$
其中
$$
Z = \frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1)
$$
固
$$
D(T) = 2\sigma^4D(Z)=4\sigma^4(n-1)
$$
<img src="./assets/image-20230727150928530.png">

方差的矩估计量为二阶中心距，期望的矩估计量为一阶原点矩
$$
D(X)\approx\frac{1}{n}\sum_{i=1}^n(X_i-\overline X)^2\quad E(X)\approx \frac{1}{n}\sum_{i=1}^nX_i=\overline X
$$
根据样本方差和二阶中心距的关系，自然有
$$
D(X)\approx \frac{n-1}{n}S^2
$$
固有
$$
E(X^2)=D(X)+E^2(X)\approx \frac{n-1}{n}S^2+\overline X
$$

### 置信度和置信区间

总体均值 μ 置信度为 95% 的置信区间为 (a, b) 的含义是：区间 (a, b) 含总体均值 μ 的真值的概率为 95%

- 这和总体均值 μ 的真值以 95% 的概率落入区间 (a, b) 有什么不同？

当置信度 1-α 整体减小时，置信区间长度 L 也会相应减小

在区间估计时，样本越多，置信区间长度应越大，置信度越高，置信区间也应越大，如对于样本个数为 n，其均值 X，置信度为 1-α 的样本检测，其有置信区间为
$$
(\overline X-\frac{\sqrt{n}-1}{\sqrt{n}}\mu_{\frac{\alpha}{2}},\overline X+\frac{\sqrt{n}-1}{\sqrt{n}}\mu_{\frac{\alpha}{2}})
$$
<img src="./assets/image-20230727154839875.png">

选 C

### 检验水平和拒绝域

检验水平为 α，即为第一类错误（拒绝真值）的发生概率，当错误率越小时，**容错就越大**，于是自变量取值的范围就越大，自然拒绝域就越小