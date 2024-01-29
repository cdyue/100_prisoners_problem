# 100_prisoners_problem

## benchmark

### Hardware

* CPU: 12th Gen Intel(R) Core(TM) i9-12900H 2.50 GHz
* Memory: 16G
* Disk: SSD

### 1000 prisoners

#### Windows Subsystem for Linux

* Go: v1.21.6
  * Total result: lose, Duration: 431 microseconds, Total round: 365592.000000, Round/Microsecond: 848.241299
  * Total result: lose, Duration: 464 microseconds, Total round: 411625.000000, Round/Microsecond: 887.122845
  * Total result: win, Duration: 296 microseconds, Total round: 239714.000000, Round/Microsecond: 809.844595
  * Total result: lose, Duration: 504 microseconds, Total round: 458765.000000, Round/Microsecond: 910.248016
  * Total result: lose, Duration: 491 microseconds, Total round: 441439.000000, Round/Microsecond: 899.061100
* Rust: 1.75.0
  * Total Result: lose , Duration: 2273 microseconds, Total Round: 398688, Round/Microsecond: 175.40167179938408
  * Total Result: lose , Duration: 2419 microseconds, Total Round: 424488, Round/Microsecond: 175.48077718065315
  * Total Result: lose , Duration: 2774 microseconds, Total Round: 490124, Round/Microsecond: 176.68493150684932
  * Total Result: win , Duration: 2211 microseconds, Total Round: 465776, Round/Microsecond: 210.66304839439167
  * Total Result: lose , Duration: 2437 microseconds, Total Round: 472908, Round/Microsecond: 194.05334427574888
* Python: 3.11.6
  * Total result: lose, Duration: 15549 microseconds, Total round: 375505, Round/Microsecond: 24.149784552061227
  * Total result: lose, Duration: 15549 microseconds, Total round: 375505, Round/Microsecond: 24.149784552061227
  * Total result: lose, Duration: 14696 microseconds, Total round: 352525, Round/Microsecond: 23.987819814915625
  * Total result: lose, Duration: 15498 microseconds, Total round: 356151, Round/Microsecond: 22.980449090205187
  * Total result: lose, Duration: 16526 microseconds, Total round: 421517, Round/Microsecond: 25.506293113881156

### 10000 prisoners

#### Windows Subsystem for Linux

* Go: v1.21.6
  * Total result: lose, Duration: 73509 microseconds, Total round: 38182705.000000, Round/Microsecond: 519.428981
  * Total result: win, Duration: 56844 microseconds, Total round: 28530006.000000, Round/Microsecond: 501.900042
  * Total result: win, Duration: 54541 microseconds, Total round: 28530006.000000, Round/Microsecond: 523.092829
  * Total result: lose, Duration: 93173 microseconds, Total round: 48739377.000000, Round/Microsecond: 523.106232
  * Total result: lose, Duration: 84087 microseconds, Total round: 43656833.000000, Round/Microsecond: 519.186474
* Rust: 1.75.0
  * Total Result: lose , Duration: 172918 microseconds, Total Round: 38553898, Round/Microsecond: 222.9605824726171
  * Total Result: lose , Duration: 171643 microseconds, Total Round: 36941480, Round/Microsecond: 215.22275886578538
  * Total Result: lose , Duration: 201418 microseconds, Total Round: 42906272, Round/Microsecond: 213.02104082058207
  * Total Result: win , Duration: 133459 microseconds, Total Round: 29564196, Round/Microsecond: 221.5226848695105
  * Total Result: lose , Duration: 193334 microseconds, Total Round: 41429642, Round/Microsecond: 214.2905127913352
* Python: 3.11.6
  * Total result: win, Duration: 977215 microseconds, Total round: 23643692, Round/Microsecond: 24.194974493842196
  * Total result: win, Duration: 977215 microseconds, Total round: 23643692, Round/Microsecond: 24.194974493842196
  * Total result: lose, Duration: 1930393 microseconds, Total round: 45252622, Round/Microsecond: 23.442180944501974
  * Total result: lose, Duration: 1556980 microseconds, Total round: 39494332, Round/Microsecond: 25.3659854333389
  * Total result: lose, Duration: 1496480 microseconds, Total round: 37937704, Round/Microsecond: 25.35129370255533

### 100000 prisoners

#### Windows Subsystem for Linux

* Go: v1.21.6
  * Total result: lose, Duration: 18073051 microseconds, Total round: 4868528009.000000, Round/Microsecond: 269.380527
  * Total result: lose, Duration: 14068824 microseconds, Total round: 3795941735.000000, Round/Microsecond: 269.812298
  * Total result: win, Duration: 8196836 microseconds, Total round: 2208878564.000000, Round/Microsecond: 269.479414
  * Total result: lose, Duration: 14275326 microseconds, Total round: 3807613030.000000, Round/Microsecond: 266.726871
  * Total result: win, Duration: 11572851 microseconds, Total round: 2906640662.000000, Round/Microsecond: 251.160294

* Rust: 1.75.0
  * Total Result: lose , Duration: 17715555 microseconds, Total Round: 3704455904, Round/Microsecond: 209.107527480793
  * Total Result: lose , Duration: 21341423 microseconds, Total Round: 4265662990, Round/Microsecond: 199.8771586130878
  * Total Result: win , Duration: 18662419 microseconds, Total Round: 3683462600, Round/Microsecond: 197.37326656313954
  * Total Result: win , Duration: 12663032 microseconds, Total Round: 2631057088, Round/Microsecond: 207.7746536532483
  * Total Result: lose , Duration: 17801433 microseconds, Total Round: 3559816722, Round/Microsecond: 199.97360448453784

* Python: 3.11.6
  * Total result: win, Duration: 222219786 microseconds, Total round: 3379419054, Round/Microsecond: 15.207552463397656

#### Windows 11

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
