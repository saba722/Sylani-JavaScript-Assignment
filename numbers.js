// Task # 1
var age = 15;
alert("I am" + age + " years old");

// Task # 2
var count = 0;
var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
alert("You have visited this site " + n + " times.");

