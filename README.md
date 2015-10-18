# racewin-js

which way is run faster

# benchmark

[split_str.js](benchmark/split_str.js)

```
split_str
  replace ........................................ 8,366,768 op/s
  split .......................................... 8,683,255 op/s
  substring ...................................... 12,253,327 op/s
```

[str_to_int.js](benchmark/str_to_int.js)

```
str_to_int
  +str ........................................... 28,811,368 op/s
  Number(str) .................................... 42,092,204 op/s
  parseInt(str) .................................. 45,066,584 op/s
  parseInt(str, 10) .............................. 63,330,513 op/s
```

# useage

```
node build
```
it will auto write the result to the readme file!