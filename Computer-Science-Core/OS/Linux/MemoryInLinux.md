- [Memory and swap usage linux](https://youtu.be/XTMyJ5l0GLg?si=t1TZE2tJOa6zwp3O&t=37)

- [how to really get help from `free` command](https://youtu.be/XTMyJ5l0GLg?si=wulRzPf6so7VVVc8&t=277) 
- [`free` command in detail](https://youtu.be/XTMyJ5l0GLg?si=E9zhWMkpgIkkkx1y&t=397)
- [free vs available memory, and unused ram is wasted ram](https://youtu.be/XTMyJ5l0GLg?si=H3AHBChW2QhQrOS9&t=457)
    - Availability field is a total amount of memory that processes can get access to whenever they need it.
    - [Swap memory explain](https://youtu.be/XTMyJ5l0GLg?si=7vghkol1sbuO_faQ&t=737) 
        - Swap can be thought of emergency memory. Swap memory is extremely slow. Its more good the less swap is in use. Swap exists on disk means on storage volume, which is slower than RAM .***Swap is usually we want to have but we hope we never end up using it*** But using some swap doesn't mean that your system is going out of memory, becuase some applications use little bit of swap memory. 
        - [But there are some linux implementation, which not use swap memory at all, example instances within a kubernetes cluster](https://youtu.be/XTMyJ5l0GLg?si=DkQyse_bIbBsA2Kl&t=837) 

       - [How exactly linux server then calculate or make determination whether it should use swap at any given time](https://youtu.be/XTMyJ5l0GLg?si=_5Sf8QCtJNkkYDGD&t=1017)
            - System is swapiness variable to determine this, `sysctl vm.swappiness` is a command to see this swapiness variable value. The lower this `vm.swapiness` variable value will the less swap will going to use.

--- 
## Swap in more detail:
***Swap memory is like car insurance, you should have swap memory, but hope never came in situation to use that*** 
 

***Swap*** is a dedicated area on disk (or file) that Linux uses as virtual memory when RAM is full.
Think of it as a backup zone for RAM:
- When physical RAM (your actual memory sticks) is running out,
- Linux moves less-used data from RAM into swap space, to free up RAM for active processes.

**So, swap = overflow memory stored on disk.**

### 🧊 Why is swap needed?
Because:

- RAM is fast but limited.
- Disk is slow but plentiful.
- You don’t want your system to crash just because RAM is full.

Swap allows:
- More processes to run than RAM alone would allow.
- The system to keep running under memory pressure, although slower.

### 🧮 How does swap work?
Linux continuously monitors memory. When RAM is almost full:
1. It looks for least recently used memory pages.
2. Moves them from RAM to swap.
3. Frees up RAM for more urgent processes.

If the swapped-out(the processes that linux put in swap memory) process is needed again, its data is swapped back into RAM.

### 💡 Swap is not a replacement for RAM!
- It’s slower — because disk speed is much lower than RAM.
- But it helps prevent crashes or OOM (Out Of Memory) errors.

### 📁 Where is swap stored?
Swap can be either:

- ✅ 1. Swap partition
    - A dedicated partition on disk (like /dev/sda3)
    - Defined at install time

- ✅ 2. Swap file
    - A regular file (e.g., /swapfile)
    - Easier to resize, create, or remove later


### You can also check swap memory info using `swapon --show` command

⚙️ Swappiness: How aggressively Linux uses swap

Linux has a kernel setting called **vm.swappiness**, which controls how much the system prefers swap over RAM.
You can Check current value by directly reading a file instead of command `sysctl vm.swappiness`:
`cat /proc/sys/vm/swappiness`

    - 0 = avoid swap as much as possible

    - 60 = default (balanced)

    - 100 = swap very aggressively

Set swappiness (temporarily):

`sudo sysctl vm.swappiness=10` (This will set swappiness to 10 for the current session only)

`sudo swapoff -a` (Turn off swap)

### ✅ Summary

| Concept        | Explanation                                      |
| -------------- | ------------------------------------------------ |
| **Swap**       | Extra memory on disk used when RAM is full       |
| **Purpose**    | Prevent crashes, allow more processes            |
| **Location**   | Partition or file                                |
| **Speed**      | Much slower than RAM                             |
| **Swappiness** | Kernel setting to control how often swap is used |
| **Ideal use**  | Safety net, not performance booster              |


### ⚠️ When swap is a problem:
- Heavy swap usage = your system is low on RAM
- You'll feel the system slow down, especially with HDDs
- Consider adding more RAM or tuning swappiness