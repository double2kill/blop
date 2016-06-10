var app = angular.module("myChatApp", []);

//controller settings
app.controller("myChatCtrl", function($scope) {
  // "even", "/images/one.jpg", "洪淑芳", "11:42:23", "我知道"
  $scope.chatLog = [
    // {is_odd:'odd', pic:'/images/one.jpg', name:'何腾欢', time:'11:42:23', content:'Clean House'},
    // {is_odd:'even', pic:'/images/one.jpg', name:'洪淑芳', time:'11:43:23', content:'Yellow River'},
    // {is_odd:'odd', pic:'/images/one.jpg', name:'何腾欢', time:'11:44:23', content:'Cool!'},
    // {is_odd:'even', pic:'/images/one.jpg', name:'洪淑芳', time:'11:45:23', content:'Nothing'},
    // {is_odd:'odd', pic:'/images/one.jpg', name:'何腾欢', time:'11:46:23', content:'Really'},
    // {is_odd:'even', pic:'/images/one.jpg', name:'洪淑芳', time:'11:47:23', content:'Error'},
  ];

  $scope.myKeyup = function(e){
    var keycode = window.event?e.keyCode:e.which;
    if(keycode==13){
        $scope.send();
    }
  };

  $scope.send = function() {
    var time_now = new Date();
    // 按照chatLog格式构造一条数据形式。
    var sendInfo = {
      is_odd: 'odd', //是自己发送所以是左边
      pic: '/images/one.jpg', 
      name: '何腾欢',
      time: time_now.toLocaleTimeString(), //使用time_now获取当前时间。
      content: $scope.todoInput
    };

    $scope.chatLog.push(sendInfo);

    //清空输入框的数据
    $scope.todoInput = ""
  }
});