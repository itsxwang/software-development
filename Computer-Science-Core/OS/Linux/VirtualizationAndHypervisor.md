[Why VM(virtual machine)](https://youtu.be/BNTFJJMh2eU?si=JvjGr4QKVhNsAlke)

[How virualization works](https://youtu.be/BNTFJJMh2eU?si=_w2fWy4kRH1cUfR6&t=77)

[WHat is hypervisor](https://youtu.be/BNTFJJMh2eU?si=b-rWMdfh2NbKrxGZ&t=137)
 - Hypervisor is simply a software that allows you to setup a virtual machines on a physical machine (example: oracle virtual box)

- [How hypervisor works](https://youtu.be/BNTFJJMh2eU?si=TOdjvtBfB1gGSr5Q&t=187)
    - it simply share hardware resources from host OS 
    - separate set of virtual CPU, RAM, storage and etc for each VM.
    - VMs are isolated from each other(independent of host OS) 
    
- [Types of Hypervisor](https://youtu.be/BNTFJJMh2eU?si=-JchBW-SVVvyHGUk&t=327): 
    - Type1 (Bare Metal) : runs directly on physical hardware.  
      Example of this is oracle virtual box

    - Type2 (Hosted) : runs on top of host OS, this type of hypervisor act as mini software, means all basic requirements(for setupping hypervisor on OS) already provide by bare metal hypervisor. \
    Example of this is cloud providers like AWS, Azure, GCP. 
