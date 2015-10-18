# racewin-js

which way is run faster

# benchmark

[split_str.js](benchmark/split_str.js)

```
split_str
  replace ........................................ 8,298,519 op/s
  split .......................................... 8,981,363 op/s
  substring ...................................... 12,475,816 op/s
```

[str_to_int.js](benchmark/str_to_int.js)

```
str_to_int
  +str ........................................... 28,993,111 op/s
  Number(str) .................................... 43,379,200 op/s
  parseInt(str) .................................. 46,614,337 op/s
  parseInt(str, 10) .............................. 63,427,419 op/s
```

# useage

```
$ node build
```
it will auto write the result to the readme file!