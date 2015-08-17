Counters are critical to loops. You need to understand them 110% and luckily they are easy to understand with a few examples.

If you look again at the Flode chart on the left, you can see a counter in operation.

## Creating Variables
This is actually the first time when we create our own *variable* rather than simply working with `input0`, `input1` etc.

If you look at the block with `counter = 0` in it, you can see a variable being created. Just by specifyng `counter` we are actually creating a variable.

This variable is simply a named placeholder where we can store a value. The value can be a number, a string or even other things as we'll discover later. In this case, we are creating a number variable and *initialising* it to 0.

## Modifying a variable
Lower down, you will see `counter = counter + 1`. Here, we are modifying the variable by adding 1 to whatever is currently stored in `counter`. So if `counter` contained 5, after `counter = counter + 1` it will contain 6.

## Naming your counter variable
We called our counter variable `counter` but you can call it more or less anything you like. We will list the rules for naming variable lower down, but here are some common names people give their variables.

```
counter
ctr
cnt
i
j
k
```

## Variable names
There are rules for variable names. 

1. A variable name cannot start with a number. For instance, `3x` or `1ctr` are invalid.
1. You can have numbers within a JavaScript variable name. `x1` or `color2` are valid.
1. You cannot have any of the following characters in a variable name : `*+\/!%^&()~"'{}[]|:;?<>`. Just don;t use any funny characters.
1. You can use the `_` (underscore) character, so `my_number` or `_myNumber` is valid.
1. Do not use spaces.
1. There are some reserved words you cannot use : `for`, `while`, `if`, `object`, `each` and a few more (any Javascript reserved words if you want to know).
1. You can use these words within or as a part of a variable name, so `objectColor` is fine.

Finally, **and importantly**, JavaScript variable names are case-sensitive. `myNumber` is a different variable to `MyNumber` and `mynumber`.

