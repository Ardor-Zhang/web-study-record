# Node-day07-EggJs
基于 Koa 定制自己的企业级三层框架

# Egg.js
- 三层结构
  - 信息资源层 就是action, 或者 servlet,用来处理上下游数据结构
  - 业务逻辑层一般应用中会有一层service抽象，实现核心业务逻辑，事务控制也在这一层实现
  - 数据访问层，也即dao层，重点负责数据库访问，完成持久化功能

**约定优于配置（convention over configuration），也称作按约定编程，是⼀种软件设计范式，旨在减少软件开发⼈员需做决定的数量，获得简单的好处，⽽⼜不失灵活性。**