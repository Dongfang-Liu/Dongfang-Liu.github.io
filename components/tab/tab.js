// Tab插件
;(function(){
    var Tab = function(opt) {
        this.tabs = document.getElementsByClassName(opt.tabItem)
        this.pages = document.getElementsByClassName(opt.pageItem)
        this.bindClick(opt.tabItem, opt.pageItem, opt.cur, opt.active)
    }
    Tab.prototype = {
        bindClick: function(tabItem, pageItem, cur, active) {
            var tabs = this.tabs,
            pages = this.pages
            for(var i = 0; i < tabs.length; i++) {
                (function(j){
                    tabs[j].onclick = function() {
                        for(var k = 0; k < tabs.length; k++) {
                            tabs[k].className = tabItem; // 'tab-item'
                            console.log(tabs[k].className)
                            pages[k].className = pageItem; // 'page-item'
                        }
                        this.className = tabItem + ' ' + cur // 'tab-item cur'
                        pages[j].className = pageItem + ' ' + active // 'page-item active'
                    }
                })(i)
            }
        }
    };
    window.Tab = Tab;
})()