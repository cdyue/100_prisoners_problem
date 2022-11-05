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
  * Total result: lose, Duration: 15214571.200012207 microseconds, Total round: 3601572857, Round/Microsecond: 236.7186567175229
  * Total result: lose, Duration: 16291326.700012207 microseconds, Total round: 3851308718, Round/Microsecond: 236.40239919791887
  * Total result: lose, Duration: 15408866.400024414 microseconds, Total round: 3654349722, Round/Microsecond: 237.15889456957132
  * Total result: lose, Duration: 21403184.299987793 microseconds, Total round: 4944853558, Round/Microsecond: 231.03354569547955
  * Total result: win, Duration: 15278263.800048828 microseconds, Total round: 3632576274, Round/Microsecond: 237.76106510141489

* Python: 3.11.0
  * Total result: win, Duration: 218016103 microseconds, Total round: 2565787086, Round/Microsecond: 11.768796206764598
