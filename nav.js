var key = {
    '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
    '1': { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'k', 7: 'j', 8: 'l', length: 9 },
    '2': { 0: 'z', 1: 'c', 2: 'x', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7 },
    length: 3,
}
var hash = {
    'q': 'qq.com', 'w': 'weibo.com', 'e': 'ebuy.com', 'r': 'renren.com', 't': 'tianya.com', 'y': 'yahoo.com', 'u': undefined, 'g': 'google.com',
    'i': 'iqiyi.com', 'o': 'opera.com', 'p': 'youku.com', 'h': 'wallhaven.com', 'a': 'alipay.com', 'b': 'baidu.com', 'x': '4399.com', 'c': 'm.xinhuanet.com', 'm': 'mcdonalds.com'
}
//初始化
var hashInLocalStorage = JSON.parse(localStorage.getItem('fight') || 'null');
if (hashInLocalStorage) {
    hash = hashInLocalStorage;
}
index = 0//第一层循环
while (index < key.length) {
    var a = document.getElementById("aa");
    var div1 = document.createElement("div");
    a.appendChild(div1);
    div1.className = 'row';
    row = key[index];
    index2 = 0;//第二层循环
    while (index2 < row.length) {
        var kdb1 = document.createElement("kdb"); //键盘
        var span = document.createElement("span");//键盘上的文字
        var img = document.createElement("img"); //键盘上的图标
        var word = document.createElement("button");//edit

        if (hash[row[index2]]) {
            img.src = "http://" + hash[row[index2]] + "/favicon.ico";
        }
        else { //将图片添加到按键上
            img.src = "./dian.JPG";
        }
        span.textContent = row[index2];//将字母添加到键盘上
        kdb1.appendChild(span);
        kdb1.className = 'key';//给每个按键添加一个class
        span.className = 'text';

        word.textContent = "Edit";
        word.id = row[index2];//给每个键盘添加一个id

        word.onclick = function (sss) {
            word2 = sss.target; //得到当前点击按键的值
            img2 = word2.previousSibling;
            key = word2.id;
            x = prompt("编辑你想要的网址");
            hash[key] = x;
            img2.src = 'http://' + x + '/favicon.ico';
            img2.onerror = function (xxx) {
                xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
            }
            localStorage.setItem('fight', JSON.stringify(hash));
            console.log(hash);
        }
        
        
        div1.appendChild(kdb1);
        kdb1.appendChild(img);
        kdb1.appendChild(word);
        index2 = index2 + 1;
    }
    index = index + 1;
}
// 在空白部分点击键盘后跳转到该页面的网址
document.onkeypress = function (sffs) {
    key = sffs.key;
    website = hash[key];
    window.open('http://' + website, '_blank');
    console.log(key);

}
// 1 创建一个键盘，每个按键上有span button img标签
// 2当在document上输入相应的字母后，跳转到相应的页面
// 3编辑每个按键的并能实现第二步 
// 4 每个按键上可以出现相应网址的图片