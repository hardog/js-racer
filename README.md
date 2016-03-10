# racewin-js

which way is run faster

# benchmark

[arrIndex_objIndex.js](benchmark/arrIndex_objIndex.js)

```
arrIndex_objIndex
  objectIndex .................................... 1,491,038 op/s
  arrayIndex ..................................... 1,643,656 op/s
```

[for_each.js](benchmark/for_each.js)

```
for_each
  each ........................................... 13,255,364 op/s
  for ............................................ 99,667,730 op/s
```

[jsonparse_other.js](benchmark/jsonparse_other.js)

```
jsonparse_other
  jsonparse ...................................... 2,416,892 op/s
  reg ............................................ 2,725,994 op/s
  split .......................................... 11,957,446 op/s
```

[split_str.js](benchmark/split_str.js)

```
split_str
  replace ........................................ 9,436,217 op/s
  split .......................................... 11,397,955 op/s
  substring ...................................... 17,091,009 op/s
```

[str_to_int.js](benchmark/str_to_int.js)

```
str_to_int
  +str ........................................... 33,624,192 op/s
  Number(str) .................................... 67,878,026 op/s
  parseInt(str) .................................. 59,047,309 op/s
  parseInt(str, 10) .............................. 81,812,911 op/s
```

# useage

```
$ node build
```
it will auto write the result to the readme file!