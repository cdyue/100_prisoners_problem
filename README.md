# 100_prisoners_problem

## benchmark

### Hardware

* CPU: 12th Gen Intel(R) Core(TM) i9-12900H 2.50 GHz
* Memory: 16G
* Disk: SSD

### 100000 prisoners

* Go: v1.19.1
  * Total result: lose, Duration: 23128073 microseconds, Total round: 4107298012.000000, Round/Microsecond: 177.589288
  * Total result: lose, Duration: 24099237 microseconds, Total round: 4307820466.000000, Round/Microsecond: 178.753396
  * Total result: lose, Duration: 24574602 microseconds, Total round: 4375010517.000000, Round/Microsecond: 178.029761
  * Total result: lose, Duration: 21015848 microseconds, Total round: 3763565076.000000, Round/Microsecond: 179.082237
  * Total result: win, Duration: 12385467 microseconds, Total round: 2251900628.000000, Round/Microsecond: 181.817983

* Rust: 1.64.0
  * Total Result: lose , Duration: 14710986 microseconds, Total Round: 4017151962, Round/Microsecond: 273.07156447569184
  * Total Result: lose , Duration: 17934150 microseconds, Total Round: 4892969200, Round/Microsecond: 272.8297242969419
  * Total Result: lose , Duration: 16688080 microseconds, Total Round: 4580356244, Round/Microsecond: 274.4687372064372
  * Total Result: lose , Duration: 12827540 microseconds, Total Round: 3521549046, Round/Microsecond: 274.53035001255114
  * Total Result: win , Duration: 14228290 microseconds, Total Round: 3868080510, Round/Microsecond: 271.8584250110168

* NodeJS: v19.0.0
  * Total result: lose, Duration: 43758315.79998779 microseconds, Total round: 5466119455, Round/Microsecond: 124.91612977027614
  * Total result: lose, Duration: 47502437.80004883 microseconds, Total round: 5710476152, Round/Microsecond: 120.2143809131861
  * Total result: lose, Duration: 77827449.2000122 microseconds, Total round: 9703040593, Round/Microsecond: 124.67375832996565
  * Total result: lose, Duration: 43978397.20001221 microseconds, Total round: 5316652208, Round/Microsecond: 120.89235957872799
  * Total result: lose, Duration: 80611162.90002441 microseconds, Total round: 9945050977, Round/Microsecond: 123.37064271525337
