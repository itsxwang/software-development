[Why VM(virtual machine)](https://youtu.be/BNTFJJMh2eU?si=JvjGr4QKVhNsAlke)

[How virualization works](https://youtu.be/BNTFJJMh2eU?si=_w2fWy4kRH1cUfR6&t=77)

[WHat is hypervisor](https://youtu.be/BNTFJJMh2eU?si=b-rWMdfh2NbKrxGZ&t=137)

- Hypervisor is simply a software that allows you to setup a virtual machines on a physical machine (example: oracle virtual box)

- [How hypervisor works](https://youtu.be/BNTFJJMh2eU?si=TOdjvtBfB1gGSr5Q&t=187)
  - it simply share hardware resources from host OS
  - separate set of virtual CPU, RAM, storage and etc for each VM.
  - VMs are isolated from each other(independent of host OS)
  - So Basically, Hypervisors are VMM, virtual machine manager, that abstract system resources and distribute among different VMs.

- [Types of Hypervisor](https://youtu.be/BNTFJJMh2eU?si=-JchBW-SVVvyHGUk&t=327):
  - Type1 (Bare Metal) : runs directly on physical hardware. This type of hypervisor act as mini software that means all basic requirements(for setupping hypervisor on OS) already provide by bare metal hypervisor. \
    Example: VMware, Cloud services: AWS, Azure, GCP, etc.
  - Type2 (Hosted) : runs on top of host OS, this type of hypervisor share resources of host os to VMs.\
    Example: VirtualBox, Oracle VM, etc.

---

Full vs Stripped-down VMs

**Full-fledged VMs** are complete, standalone virtual machines that include all necessary components—CPU, RAM, disk, networking, and an operating system—encapsulated in files. They operate as independent systems, fully isolated from the host and other VMs, and can run any workload that a physical machine could. These are typically used in production environments where full functionality, performance, and reliability are required.

**Stripped-down VMs**, often referred to as **Minimum Viable Products (MVPs)** or **prototypes**, are simplified versions of full-fledged VMs. They contain only the essential features needed to test a core idea, validate assumptions, or demonstrate functionality. These are commonly used in development, testing, or proof-of-concept scenarios where speed, cost, and agility are prioritized over complete feature sets.

- **Full-fledged VMs**: Complete, production-ready, high isolation, used for real-world workloads.
- **Stripped-down VMs**: Minimalist, early-stage, cost-efficient, used for validation and rapid iteration.

In modern cloud and virtualization environments, **thin provisioning** and **automated space reclamation** (e.g., TRIM/UNMAP) make it practical to deploy **thin-provisioned VMs**—which are functionally full-fledged but dynamically allocate storage—without sacrificing performance, especially on all-flash storage arrays.
