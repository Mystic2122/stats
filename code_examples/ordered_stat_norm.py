import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm

# Standard normal
mu = 0
sd = 1
n = 20

x = np.linspace(-4, 4, 1000)

f = norm.pdf(x, loc=mu, scale=sd)
F = norm.cdf(x, loc=mu, scale=sd)

f_min = n * ((1-F) ** (n-1)) * f
f_max = n * (F ** (n-1)) * f

plt.figure(figsize=(8, 5))
plt.plot(x, f, label="Normal N(0,1)")
plt.plot(x, f_max, label="Y_max (n=20)")
plt.plot(x, f_min, label="Y_min (n=20)")

plt.xlabel("x")
plt.ylabel("Density")
plt.title("Normal Distribution vs. Sample Maximum and Minimum")
plt.legend()
plt.grid(True)

plt.show()