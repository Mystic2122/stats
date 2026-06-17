## The Exponential Distribution

#### Why is it Useful?

The exponential distribution is used to model time between random, independent events.

Examples
- Time until recieving scam phone calls
- Time until the next customer enters the checkout line
- Time until the next blue car drives by

### To be Memoryless

> Knowing that you've already waited for some amount of time tells you nothing about how much longer you'll have to wait.
>> ChatGPT

A prbability example would be, supposes you've already been waiting at a bus stop for 5 minutes, what is the probability that you will have to wait at least 10 more minutes for the but to arrive?

The memoryless property says
$$
P(X>15|X>5)=P(X>10)
$$

More generally
$$
P(X>s+t|X>s)=P(X>t)
$$

## The Distribution

There are 2 common forms for the exponential distribution.
From my experience the more common one to see is 
$$
f_X(x)=\lambda e^{-\lambda x}, \ \ \ x\geq 0
$$
In this version, $\lambda$ represents the average number of events per unit time. While $1/\lambda$ is the average waiting time. 
For this version:
- $E[X] = 1/\lambda$
- $Var(X) = 1/\lambda^2$

The exponential distribution can also be writen as
$$
f_X(x)=\frac{1}{\lambda}e^{-x/\lambda}, \ \ \ x \geq 0
$$

This form just swaps the meanings of $\lambda$ from above. Now $\lambda$ is the average waiting time and $1/\lambda$ represents the expected number of events per unit time. 

This also makes 
- $E[X] = \lambda$
- $Var(X) = \lambda^2$