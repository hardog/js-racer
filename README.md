# racewin-js

which way is run faster

# benchmark

[arrIndex_objIndex.js](benchmark/arrIndex_objIndex.js)

```
arrIndex_objIndex
  objectIndex .................................... 1,503,105 op/s
  arrayIndex ..................................... 1,835,080 op/s
```

[for_each.js](benchmark/for_each.js)

```
for_each
  each ........................................... 13,331,638 op/s
  for ............................................ 111,011,723 op/s
```

[jsonparse_other.js](benchmark/jsonparse_other.js)

```
jsonparse_other
  jsonparse ...................................... 2,705,960 op/s
  split .......................................... 11,513,217 op/s
  reg ............................................ 2,832,788 op/s
```

[split_str.js](benchmark/split_str.js)

```
split_str
  replace ........................................ 9,780,794 op/s
  split .......................................... 11,346,960 op/s
  substring ...................................... 16,337,931 op/s
```

[str_to_int.js](benchmark/str_to_int.js)

```
str_to_int
  +str ........................................... 34,015,392 op/s
  Number(str) .................................... 67,882,436 op/s
  parseInt(str) .................................. 59,725,409 op/s
  parseInt(str, 10) .............................. 81,630,880 op/s
```

# useage

```
$ node build
```
it will auto write the result to the readme file!