[windows and linux file sharing using `winscp` tool](https://youtu.be/56oK8Zvi1Sg?si=Shm6wSpWjiGGbr3I)

[Linux to linux file transfer using scp(secure copy protocol), it is a file tranfer protocol like sftp(secure file transfer protocol), but not provide advance features like sftp (like file management operations(renaming and deleting files)). Both protocols operate over ssh(secure shell) for secure file transfers](https://youtu.be/J1-hSlxsDVo?si=8FHmGLTD4evrLw1t&t=27)
- command: ```scp <file on local machine> <user@ipaddress>:<remote path where file will be copied>```  
- Note: As scp operate over ssh for secure file transfers therefore ssh connection (ssh.service) must be established before file transfer or ssh.socket must be open 
if you wanna scp from local system to same local system then `127.0.0.1`(localhost) address will also work like real ip address of that local system.

```scp file.txt username@127.0.0.1:/home/username/
```

- [Copying files from remote server to your system](https://youtu.be/J1-hSlxsDVo?si=9_Rflt_keoahb_RM&t=397)

- To transfer directory: \
```scp -r [source_directory] [username]@[destination_host]:[destination_directory]```
