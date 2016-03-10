# racewin-js

which way is run faster

# benchmark

[arrIndex_objIndex.js](benchmark/arrIndex_objIndex.js)

```
arrIndex_objIndex
  objectIndex .................................... 1,460,214 op/s
  arrayIndex ..................................... 1,804,644 op/s
```

[for_each.js](benchmark/for_each.js)

```
for_each
  _.each ......................................... 13,928,480 op/s
  for ............................................ 109,972,941 op/s
```

[jsonparse_other.js](benchmark/jsonparse_other.js)

```
jsonparse_other
  jsonparse ...................................... 2,719,658 op/s
  reg ............................................ 2,827,766 op/s
  split(out wild) ................................ 11,823,615 op/s
```

[split_str.js](benchmark/split_str.js)

```
split_str
  replace ........................................ 9,686,980 op/s
  split .......................................... 11,312,566 op/s
  substring ...................................... 17,065,444 op/s
```

[str_to_int.js](benchmark/str_to_int.js)

```
str_to_int
  +str ........................................... 33,225,893 op/s
  Number(str) .................................... 67,875,324 op/s
  parseInt(str) .................................. 60,018,659 op/s
  parseInt(str, 10) .............................. 78,947,115 op/s
```

# useage

```
$ node build
```
it will auto write the result to the readme file!