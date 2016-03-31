window.onload = function(){
    //导航条hover；
    var oNavBar = document.getElementById('nav_bar');
    var aA = oNavBar.getElementsByTagName('a');
    var timer=0;
    for(var i =0 ;i<aA.length;i++)
    {
        aA[i].onmouseover = function()
        {
            for (var i = 0; i < aA.length; i++)
            {
                aA[i].className = '';
            }
            this.className = 'active';

        }
    }

    var getByClass = function(oParent,sClass){
        var aEle = oParent.getElementsByTagName('*');
        var arr = [];
        for(var i=0;i<aEle.length;i++)
        {
            if(aEle[i].className == sClass)
            {
                arr.push(aEle[i]);
            }
        }

        return arr;
    };

    var tab = function()
    {
        var oAdL = document.getElementById('ad_l');
        var oAdR = document.getElementById('ad_r');
        var oAdTabMenu = document.getElementById('ad_tab_menu');
        var aA = oAdTabMenu.getElementsByTagName('a');
        var oSpan = oAdR.getElementsByTagName('span')[0];
        var oUl = oAdL.getElementsByTagName('ul')[0];
        var aLi = oUl.getElementsByTagName('li');
        var wid = 0;
        var num = 0;
        clearInterval(timer);
        function m()
        {
            timer=setInterval(function(){ab(num);},2000);
        }
        m();
        for(var i=0;i<aA.length;i++)
        {
            aA[i].index= i;
            aA[i].onclick =function()
            {
                clearInterval(timer);
                ab(this.index);
                m();
            };
        }
        function ab(a)
        {
            wid=aLi[0].offsetWidth;
            num++;
            if(num==aLi.length)
            {
                num=0;
            }
            for(var i=0;i<aLi.length;i++)
            {
                aA[i].className = '';
            }
            aA[a].className = 'active';
            oSpan.innerHTML = '0'+(a+1);
            oUl.style.marginLeft = -a*wid+ 'px';
        }
    };tab();
    // 如何实现轮播刷新。

    window.onresize = function()
    {
        clearInterval(timer);
        tab();
    };
    var oTextCut = function(){
        var oJoinL = document.getElementById('join_l');
        var aSpan  = oJoinL.getElementsByTagName('span');
        var aA  = oJoinL.getElementsByTagName('a');
        var arr =[];
        for(var i=0;i<aA.length;i++){
            aA[i].index = i;
            aA[i].onOff = 0;
            arr[i] = aSpan[i].innerHTML;
            aSpan[i].innerHTML = arr[i].substring(0,33);
            aA[i].innerHTML = 'more';
            aA[i].onclick = function(){
                var str = arr[this.index];
                if(aA[this.index].onOff) {
                    aSpan[this.index].innerHTML = str.substring(0,33);
                    aA[this.index].innerHTML = 'more';
                }
                else{
                    aSpan[this.index].innerHTML = str;
                    aA[this.index].innerHTML = 'return';
                }
                aA[this.index].onOff =!aA[this.index].onOff;
            }
        }
    };
    oTextCut();
    var oInfoCheck = function()
    {
        var oInfList = document.getElementById('info_list');
        var aInp = oInfList.getElementsByTagName('input');
        var aUl = oInfList.getElementsByTagName('ul');
        var aListMenu = getByClass(oInfList,'list_menu');
        for(var i=0;i<aListMenu.length;i++)
        {
            aListMenu[i].index = i;
            aListMenu[i].onmouseover = function()
            {   var This =this.index;
                for(var i = 0;i<aListMenu.length;i++)
                {
                    aUl[i].style.display = 'none';
                }
                aUl[this.index].style.display = 'block';
                var aLi =this.getElementsByTagName('li');
                for(var j=0;j<aLi.length;j++)
                {   aLi[j].index=j;
                    aLi[j].onmouseover = function()
                    {
                        for(var i=0;i<aLi.length;i++)
                        {
                            aLi[i].className='';
                        }
                        this.className = 'active2';
                    };
                    aLi[j].onclick =function()
                    {
                        if(aInp[This].value==this.innerText)
                        {
                            aUl[This].style.display = 'none';
                        }
                        else {
                            aInp[This].value = this.innerText;
                            aInp[This].value = this.textContent;
                            aUl[This].style.display = 'none';
                        }
                    }
                }
            };
            aListMenu[i].onmouseout = function()
            {
                aUl[this.index].style.display = 'none';
            }
        }
    };
    oInfoCheck();

};