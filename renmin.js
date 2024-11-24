// JavaScript 添加事件处理器（onclick、onchange、onmousedown、onmouseout、onmouseover、onmouseup）

document.addEventListener("DOMContentLoaded", function() {
  // 获取所有人物项
  const personItems = document.querySelectorAll(".employee-card");

  // 统一事件处理函数
  personItems.forEach(function(item) {
    // 点击事件
    item.addEventListener("click", function() {
      alert("你点击了： " + this.textContent); // 弹出人物名字
    });

    // 鼠标按下事件
    item.addEventListener("mousedown", function() {
      this.style.backgroundColor = "#d1c4e9"; // 按下时改变背景色
    });

    // 鼠标移出事件
    item.addEventListener("mouseout", function() {
      this.style.backgroundColor = ""; // 鼠标移出时恢复原样
    });

    // 鼠标悬停事件
    item.addEventListener("mouseover", function() {
      this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
    });

    // 鼠标松开事件
    item.addEventListener("mouseup", function() {
      this.style.backgroundColor = "#ffe0b2"; // 松开鼠标时改变背景色
    });
  });

  // 监听特殊人物的变化（如果有）
  const specialPerson = document.getElementById("special-person");
  if (specialPerson) {
    specialPerson.addEventListener("change", function() {
      console.log("特殊人物已更改");
    });
  }
});
