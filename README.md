# racewin-js

which way is run faster

# benchmark

[apply_call.js](benchmark/apply_call.js)

```
apply_call
  call - 1 args .................................. 132,994,290 op/s
  apply - 1 args ................................. 23,553,385 op/s
  call - 2 args .................................. 90,690,539 op/s
  apply - 2 args ................................. 19,500,321 op/s
  call - 3 args .................................. 84,975,533 op/s
  apply - 3 args ................................. 17,697,363 op/s
```

[arrIndex_objIndex.js](benchmark/arrIndex_objIndex.js)

```
arrIndex_objIndex
  objectIndex .................................... 1,130,255 op/s
  arrayIndex ..................................... 1,399,818 op/s
```

[for_each.js](benchmark/for_each.js)

```
for_each
  _.each ......................................... 8,241,093 op/s
  for ............................................ 63,850,870 op/s
```

[jsonparse_other.js](benchmark/jsonparse_other.js)

```
jsonparse_other
  jsonparse ...................................... 2,022,626 op/s
  reg ............................................ 1,920,467 op/s
  split(out wild) ................................ 10,012,821 op/s
```

[pluck_each.js](benchmark/pluck_each.js)

```
pluck_each
  pluck .......................................... 5,512,154 op/s
  each ........................................... 6,038,262 op/s
```

[split_str.js](benchmark/split_str.js)

```
split_str
  replace ........................................ 8,677,631 op/s
  split .......................................... 5,564,187 op/s
  substring ...................................... 10,585,214 op/s
```

[str_to_int.js](benchmark/str_to_int.js)

```
str_to_int
  +str ........................................... 25,042,774 op/s
  Number(str) .................................... 47,897,072 op/s
  parseInt(str) .................................. 18,501,529 op/s
  parseInt(str, 10) .............................. 57,299,822 op/s
```

# useage

```
$ node build
```
it will auto write the result to the readme file!