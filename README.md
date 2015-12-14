# racewin-js

which way is run faster

# benchmark

[arrIndex_objIndex.js](benchmark/arrIndex_objIndex.js)

```
arrIndex_objIndex
  objectIndex .................................... 1,229,552 op/s
  arrayIndex ..................................... 1,409,786 op/s
```

[for_each.js](benchmark/for_each.js)

```
for_each
  each ........................................... 10,952,588 op/s
  for ............................................ 114,714,621 op/s
```

[reg_jsonparse.js](benchmark/reg_jsonparse.js)

```
reg_vs_jsonparse
  jsonparse ...................................... 2,448,682 op/s
  reg ............................................ 2,615,544 op/s
```

[split_str.js](benchmark/split_str.js)

```
split_str
  replace ........................................ 8,827,453 op/s
  split .......................................... 10,710,295 op/s
  substring ...................................... 15,183,241 op/s
```

[str_to_int.js](benchmark/str_to_int.js)

```
str_to_int
  +str ........................................... 32,567,575 op/s
  Number(str) .................................... 53,204,822 op/s
  parseInt(str) .................................. 53,537,589 op/s
  parseInt(str, 10) .............................. 76,566,327 op/s
```

# useage

```
$ node build
```
it will auto write the result to the readme file!