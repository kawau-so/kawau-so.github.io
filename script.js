const btn = document.querySelector("#btn");
btn.addEventListener("click", notification);

let i = 0;
while (i < 100) {
  function notification() {
  switch (Notification.permission) {
    case "default":
      Notification.requestPermission();
      break;
    case "granted":
      new Notification("すぐるんちゃっとのメッセージ");
      break;
    case "denied":
      alert("通知が拒否されています");
      break;(`iの値は ${i}`);
  i++;
}

let i = 0;
do {
  function notification() {
  switch (Notification.permission) {
    case "default":
      Notification.requestPermission();
      break;
    case "granted":
      new Notification("すぐるんちゃっとのメッセージ");
      break;
    case "denied":
      alert("通知が拒否されています");
      break;(`iの値は ${i}`);
  i++;
} while (i < 100);

/* while do...while共通
iの値は 0
iの値は 1
iの値は 2
iの値は 3
iの値は 4
*/
