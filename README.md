# racewin-js

:heart_eyes: Writing Fast JavaScript

# env

* platform: OS X 10.10.4
* cpu: 1.4 GHz Intel Core i5
* iojs: v2.3.0
* v8: 4.2.77.20

# benchmark

[str_to_int_number.js](benchmark/str_to_int_number.js)

```
str_to_int_number
  +str ........................................... 23,994,199 op/s
  ~~str .......................................... 19,525,207 op/s
  Number(str) .................................... 43,122,242 op/s
  parseInt(str) .................................. 45,574,964 op/s
  parseInt(str, 10) .............................. 64,071,727 op/s
```

# contribute

1. add your test to `benchmark` dir
1. run `$ make build` and it will update README.md including new test