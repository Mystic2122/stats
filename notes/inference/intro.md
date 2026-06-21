# An Introduction to Statistical Inference

If someone ever asks you, "How can you be sure?" you drop this stuff on them

Nothing is certain, but we try our best. 

An inference is just an educated guess. We gather information from a sample and use the data to make inferences on the overall population.

### Hypothesis Testing
All hypothesis tests have a similar structure. The null hypothesis, $H_0$, is a claim about a population. The alternative hypothesis, $H_a$ (sometimes $H_1$), is a claim looking to dispute $H_0$.

You can do hypothesis tests on population parameters like: $\mu,\ \sigma^2, \lambda$ and regression coefficients $\beta_i's$, along with many other things.

This is the power of statistics, we need to remember good estimators for our sample statistics, as well as what it even means to be a good estimator. 

### The Basics
The simplest type of hypothesis test out there is called a one-sample Z-test. This test is all about the population mean $\mu$.

![Z-test tails](../images/z-test_tail.png)

Remember, $\bar{x}=\frac{\sum_{i=1}^n x_i}{n}$ is the best estimate of the sample average. 

