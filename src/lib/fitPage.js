/*
* 移动端响应式处理
* Created by haiyingji on 2018/11/07.
 */
export function runFitPage() {
  var htmlEle = document.getElementsByTagName("html")[0];
  var fitPage = function() {
    var w = htmlEle.getBoundingClientRect().width;
    w = Math.round(w);
    // w = w > 1024 ? 1024 : w;
    var newW = (w / 750) * 100;
    htmlEle.style.fontSize = newW + "px";
  };
  fitPage();
  var t;
  var func = function() {
    clearTimeout(t);
    t = setTimeout(fitPage, 25);
  };
  window.addEventListener("resize", func);
}
