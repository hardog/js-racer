# Racewin-js

which way is run faster

# Benchmark

[apply_call.js](benchmark/apply_call.js)

```
apply_call
  apply - 1 args ................................. 23,660,362 op/s
  call - 1 args .................................. 78,528,992 op/s
  apply - 2 args ................................. 16,438,747 op/s
  call - 2 args .................................. 90,965,625 op/s
  apply - 3 args ................................. 18,492,695 op/s
  call - 3 args .................................. 47,016,845 op/s
```

[arrIndex_objIndex.js](benchmark/arrIndex_objIndex.js)

```
arrIndex_objIndex
  objectIndex .................................... 1,067,763 op/s
  arrayIndex ..................................... 1,370,571 op/s
```

[for_each.js](benchmark/for_each.js)

```
for_each
  _.each ......................................... 10,429,099 op/s
  for ............................................ 99,982,536 op/s
```

[jsonparse_other.js](benchmark/jsonparse_other.js)

```
jsonparse_other
  jsonparse ...................................... 2,105,316 op/s
  reg ............................................ 2,084,112 op/s
  split(out wild) ................................ 10,336,367 op/s
```

[pluck_each.js](benchmark/pluck_each.js)

```
pluck_each
  pluck .......................................... 5,600,022 op/s
  each ........................................... 5,798,688 op/s
```

[split_str.js](benchmark/split_str.js)

```
split_str
  replace ........................................ 8,974,531 op/s
  split .......................................... 10,019,623 op/s
  substring ...................................... 10,944,511 op/s
```

[str_to_int.js](benchmark/str_to_int.js)

```
str_to_int
  +str ........................................... 27,285,313 op/s
  Number(str) .................................... 60,215,671 op/s
  parseInt(str) .................................. 55,825,658 op/s
  parseInt(str, 10) .............................. 70,115,709 op/s
```

# Useage

```
$ node build
```
it will auto write the result to the readme file!