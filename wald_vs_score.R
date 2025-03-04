n <- 50
s <- 18
pi <- 0.4

pi.hat <- s/n

score <- (s-(50*0.4))/(pi*(1-pi))

fish <- n/(pi*(1-pi))

z.score <- score^2/fish

wald <- (pi.hat - pi)/sqrt((pi*(1-pi))/n)

print(z.score)
print(wald)

wald.p <- 2* (1-pnorm(abs(wald)))

wald.p

z.score.p <- 2*(1-pnorm(sqrt(abs(z.score))))
z.score.p