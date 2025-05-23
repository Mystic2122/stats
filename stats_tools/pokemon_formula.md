# Pokemon Formula

This formula was inspired by a soft lock in the gen 3 pokemon games.

Every pokemon has a randomly generated id that is 16 bits long.
At the lottery corner, every day you can check your pokemon's id against the random id.
If the number is a perfect match, you win a master ball.<br><br>
If you only have one pokemon, the chance of your number being a perfect match on any given day is:

$$
\frac{1}{65536}
$$

Now the chance of your pokemon nor having the correct number is: $\frac{65535}{65536}$

What is the probability of getting a perfect match in 65536 tries?<br><br>

## Answer

The probability of **NOT** getting a perfect match in 65536 tries is:

$$
\left(\frac{65535}{65536}\right)^{65536} \approx \frac{1}{e}
$$

Then the probability of getting a perfect match at least once is:

$$
1-\frac{1}{e}=0.6321
$$

### Where did e come from?

$$
\lim\limits_{n \to \infty}\left( 1-\frac{1}{n}\right)^n=\frac{1}{e}
$$

$$
P(no\ correct\ guesses) = \lim\limits_{n \to \infty}\left( 1-\frac{1}{65536}\right)^{65536} \approx \frac{1}{e}
$$

then

$$
P(at\ least\ one\ correct) = 1- \frac{1}{e}
$$
