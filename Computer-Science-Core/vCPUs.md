What is vCPU

**vCPU** stands for **virtual Central Processing Unit**. It is a **logical processor** allocated to a virtual machine (VM) or container by a hypervisor, representing a share of the physical CPU's processing power. While a physical CPU is actual hardware, a vCPU is a software abstraction that allows multiple VMs to run on a single physical server by dividing the physical CPU's resources into virtual units.

Each vCPU enables a VM to run one thread of execution at a time. Modern CPUs often support **hyperthreading**, allowing two threads per physical core, so one physical core can typically support two vCPUs. The hypervisor schedules vCPUs across available physical cores using time-slicing, enabling efficient resource sharing.

**Key points**:
- **vCPU vs Physical CPU**: A vCPU is virtual; a physical CPU is hardware. One physical core can host multiple vCPUs.
- **Oversubscription**: It's common to assign more vCPUs than physical cores (e.g., 8 vCPUs on a 4-core system), relying on the fact that VMs don’t always use 100% of their allocated CPU at once.
- **Performance**: vCPU performance depends on physical hardware availability and contention with other VMs.
- **Use Cases**: Essential in cloud computing (e.g., AWS, Azure), virtualization (e.g., VMware), and container orchestration (e.g., Kubernetes).

In short, **a vCPU is a virtualized slice of a physical CPU**, enabling scalable, flexible, and cost-effective computing in virtualized environments.