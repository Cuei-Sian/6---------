// 第六堂課前影音

console.log(axios); //測試axios有沒有安裝成功

// 課前練習一：axios-嘗試串接外部資料
// axios
//   .get("https://hexschool.github.io/ajaxHomework/data.json")
//   .then(function (response) {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });

// 課前練習二：axios-將外部資料寫入到網頁上
// axios
//   .get("https://hexschool.github.io/ajaxHomework/data.json")
//   .then(function (response) {
//     let ary = response.data;
//     console.log(ary[0].name); //王小名
//     const title = document.querySelector(".title");
//     title.textContent = ary[0].name; //修改網頁字樣為：王小明
//   });

// 課前練習三：axios-非同步觀念：在發出response請求之後，在等待資料回傳的過程中，程式碼會先往下執行
// let ary = [];
// axios
//   .get("https://hexschool.github.io/ajaxHomework/data.json")
//   .then(function (response) {
//     console.log("有資料回傳了");
//     ary = response.data;
//   });
// console.log(ary); //在資料未回傳之前，印出來的是一個空陣列[]

// 課前練習四：透過函式設計處理非同步
let ary = [];
axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    console.log("有資料回傳了"); //資料回傳順序2
    ary = response.data;
    renderData();
  });
function renderData() {
  //render渲染畫面的意思
  console.log(ary); //資料回傳順序3
  const title = document.querySelector(".title");
  title.textContent = ary[0].name;
}
console.log(ary); //資料回傳順序1
