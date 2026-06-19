## The Binomial Distribution
The Binomial distribution can be thought of as a random varaible, $X$, denoting the number of successes, k, in n independent trials. It is the sum of n independent Bernoulli random variables. 

Remmeber a Bernoulli random variable is as simple as it gets. 
$$
P(X=x)=p^x(1-p)^{1-x}
$$
Where $x$ is either 0 (failure) or 1 (success).

When adding these 1's and 0's, the order in which the successes occur doesn't matter, as long as we end with exactly k.

**Binomial Distribution**
$$
P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}
$$
Where $p$ is the probability of success.

### The Cumulative Distribution
To find the probability of observing more or less than some number of successes, all you need is a sum.

*Example*
Flip a fair coin 20 times. What are the chances you see 15 or more heads?

$$
P(X\geq 15)=\sum_{k=15}^{20}\binom{20}{k}0.5^k(1-0.5)^{20-k}\approx 0.0207
$$

You can expect to see 15 or more heads about 2% of the time.

**Expected Value**
The expected value for a Bernoulli is just $p$ or the probability of success. If we add up n independent trials we would expect the expected value to be $np$. 

If $X \sim Binomial(n,p)$ then $E[X] = np$

**Variance**
Same goes for the variance of a bernoulli random variable being $p(1-p)$.

If $X \sim Binomial(n,p)$ then $Var(X) = np(1-p)$