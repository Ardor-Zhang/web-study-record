import 'package:flutter/material.dart';

import '../search.dart';

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          ElevatedButton(
            onPressed: () {
              Navigator.pushNamed(context, '/search');
            }, 
            child: const Text('跳转到搜索页面!!'),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {
              Navigator.pushNamed(context, '/product');
            }, 
            child: const Text('跳转到商品页面!!'),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {
              Navigator.pushNamed(context, '/app_bar_demo');
            }, 
            child: const Text('跳转到 APP_BAR_DEMO 页面!!'),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {
              Navigator.pushNamed(context, '/tab_bar_controller');
            }, 
            child: const Text('跳转到 tab_bar_controller 页面!!'),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {
              Navigator.pushNamed(context, '/button_demo');
            }, 
            child: const Text('跳转到 按钮演示 页面!!'),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {
              Navigator.pushNamed(context, '/form_demo');
            }, 
            child: const Text('跳转到 表单 页面!!'),
          ),
        ],
      )
    );
  }
}