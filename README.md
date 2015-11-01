# racewin-js

which way is run faster

# benchmark

[for_each.js](benchmark/for_each.js)

```
for_each
  each ........................................... 10,041,714 op/s
  for ............................................ 94,880,400 op/s
```

[reg_jsonparse.js](benchmark/reg_jsonparse.js)

```
reg_vs_jsonparse
  jsonparse ...................................... 2,218,846 op/s
  reg ............................................ 2,133,214 op/s
```

[split_str.js](benchmark/split_str.js)

```
split_str
  replace ........................................ 7,737,501 op/s
  split .......................................... 8,596,401 op/s
  substring ...................................... 11,978,041 op/s
```

[str_to_int.js](benchmark/str_to_int.js)

```
str_to_int
  +str ........................................... 27,780,720 op/s
  Number(str) .................................... 44,498,971 op/s
  parseInt(str) .................................. 48,342,840 op/s
  parseInt(str, 10) .............................. 67,714,073 op/s
```

# useage

```
$ node build
```
it will auto write the result to the readme file!