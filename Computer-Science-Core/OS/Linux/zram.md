What is zram

**zram** is a Linux kernel module that creates a compressed block device in RAM, effectively acting as a RAM disk with on-the-fly compression. It allows the system to store data—typically swapped memory pages—in compressed form directly within physical RAM, rather than writing to a slower disk-based swap partition or file.

When used as swap, **zram compresses data before storing it in memory**, significantly reducing the amount of RAM needed to hold swapped pages. This can increase the effective memory capacity, especially on systems with limited RAM. For example, a 2GB zram device might hold data equivalent to 4–6GB of uncompressed memory due to compression ratios typically ranging from 2:1 to 3:1.

Unlike traditional swap, **zram does not require a physical swap file or partition**—it operates entirely in RAM. This makes it ideal for low-memory systems like Raspberry Pi, embedded devices, and older laptops, where reducing SSD/flash wear and avoiding I/O bottlenecks is critical.

**Key features**:

- **Fast I/O**: Since data is stored in RAM, access is much faster than disk-based swap.
- **Reduced disk wear**: Minimizes writes to SSDs or flash storage.
- **Dynamic size**: The zram device grows only as needed, using minimal RAM when idle.
- **Multiple compression algorithms**: Supports LZ4 (fast), LZO-RLE (balanced), Zstandard (ZSTD), and DEFLATE.

**Common uses**:

- As a swap device (most common).
- For temporary file storage (e.g., `/tmp`).
- In Android devices (where it's known as RAM Plus, Extended RAM, or Memory Extension).

While zram improves memory efficiency and system responsiveness on low-memory systems, it increases CPU usage due to compression/decompression. It is not a substitute for additional physical RAM but can significantly enhance performance when memory is constrained.

---

**Swapped memory pages** are units of memory that the operating system moves from RAM to disk storage (swap space) when physical memory is full or under pressure.

In modern systems like Linux, memory is divided into fixed-size blocks called **pages** (typically 4KB). When a process uses more memory than available, the kernel identifies **inactive or less frequently used pages**—often anonymous pages containing program data or stack—and transfers them to **swap space** on disk. This frees up RAM for active processes.

These pages are **swapped back into RAM** (a "page-in") only when needed again, which may cause a delay due to disk I/O. Swapping allows systems to run larger workloads than physical RAM alone would permit, enabling **virtual memory**.

While often called "swapping," Linux technically uses **paging**, moving individual pages rather than entire processes. The kernel uses algorithms like **Least Recently Used (LRU)** to decide which pages to swap out.
