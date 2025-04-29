Crabs <- read.table("http://www.stat.ufl.edu/~aa/cat/data/Crabs.dat", header=TRUE)
head(Crabs)

fit <- glm(y ~ weight + factor(color) + factor(spine), family = binomial, data= Crabs)
summary(fit)
fit.anova <- anova(fit, test = 'Chisq')

# Deviance is like the GLM version of residual sums of squares
# Low deviance represents a better fit
# Null deviance is the deviance of a model with no predictors (just the intercept)
# Residual deviance is the deviance of your current model
fit.anova

fit$null.deviance
fit$deviance

fit.drop <- drop1(fit, test = "LRT")
fit.drop

# drop1 is a quick way to do a hypothesis test for each predictor in the GLM
# Both test = LRT and test = Chisq seem to do the same thing since the LR test stat ~ chi^2 
