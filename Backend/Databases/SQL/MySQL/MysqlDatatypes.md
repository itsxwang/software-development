- [what is `not null`](https://youtu.be/Hy3qbMAoEJk?si=ayA62s_zRBya7M2h&t=2857)

- [DECIMAL data type](https://youtu.be/Hy3qbMAoEJk?si=aKdRMU-PsLr32WMX&t=10867)
    -  `DECIMAL(M, D)`
        - `M` = total number of digits (precision)
        - `D` = number of digits after the decimal point (scale)
    - `DECIMAL(6,2)` → allows 1234.56 (4 digits before, 2 digits after)
    - Default is `DECIMAL(10,0)`
        - Total digits: 10
        - Decimal places: 0 (i.e., integers only)



- [FLOAT and DOUBLE, vs difference](https://youtu.be/Hy3qbMAoEJk?si=u7t-ceZI5vUtAlDJ&t=11207)
    - Default is `FLOAT(10,2)`: 
        - Store approx. 10 digits total, 2 after the decimal
        - It's not exact, due to binary floating point representation
        - DOUBLE → floating-point number with **double-precision**, about 15–17 digits of accuracy



## 💡 Summary for DECIMAL, FLOAT, DOUBLE
| Type      | Storage Type            | Exact? | Default (No Params) | Use Case                          |
| --------- | ----------------------- | ------ | ------------------- | --------------------------------- |
| `DECIMAL` | Fixed-point             | ✅ Yes  | `DECIMAL(10,0)`     | Money, billing, exact math        |
| `FLOAT`   | Floating-point (32-bit) | ❌ No   | platform-specific   | Scientific data, fast math        |
| `DOUBLE`  | Floating-point (64-bit) | ❌ No   | platform-specific   | More accurate float (vs. `FLOAT`) |


## ❗ Important Notes:
- You should NOT use FLOAT or DOUBLE for money or financial data — use DECIMAL instead.

- If you're dealing with large ranges and performance-sensitive math (scientific/engineering), DOUBLE is ideal.

---

- [`DATE`,`TIME` and `DATETIME`](https://youtu.be/Hy3qbMAoEJk?si=BSr-Mb117_BwrhNv&t=11497)
    - Format of given date and time
        - DATE → `YYYY-MM-DD`
        - TIME → `HH:MM:SS`
        - DATETIME → `YYYY-MM-DD HH:MM:SS`
            Example:
            - DATE: 2000-01-01
            - TIME: 01:02:03
            - DATETIME: 2000-01-01 01:02:03
 