# Errors  
  
## Node.js: what is ENOSPC error and how to solve?
[Stack Overflow Link](https://stackoverflow.com/questions/22475849/node-js-what-is-enospc-error-and-how-to-solve)  
  
  
**Fix is as follows**
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```