var smiley={};smiley.s1={'title':'\u9ed8\u8ba4','icon':{'\u5fae\u7b11':'','\u6487\u5634':'','\u8272':'','\u53d1\u5446':'','\u5f97\u610f':'','\u6d41\u6cea':'','\u5bb3\u7f9e':'','\u95ed\u5634':'','\u7761':'','\u5927\u54ed':'','\u5c34\u5c2c':'','\u53d1\u6012':'','\u8c03\u76ae':'','\u5472\u7259':'','\u60ca\u8bb6':'','\u96be\u8fc7':'','\u9177':'','\u51b7\u6c57':'','\u6293\u72c2':'','\u5410':'','\u5077\u7b11':'','\u53ef\u7231':'','\u767d\u773c':'','\u50b2\u6162':'','\u9965\u997f':'','\u56f0':'','\u60ca\u6050':'','\u6d41\u6c57':'','\u61a8\u7b11':'','\u5927\u5175':'','\u594b\u6597':'','\u5492\u9a82':'','\u7591\u95ee':'','\u5618\u002e\u002e':'','\u6655':'','\u6298\u78e8':'','\u8870':'','\u9ab7\u9ac5':'','\u6572\u6253':'','\u518d\u89c1':'','\u64e6\u6c57':'','\u62a0\u9f3b':'','\u9f13\u638c':'','\u6eb4\u5927\u4e86':'','\u574f\u7b11':'','\u5de6\u54fc\u54fc':'','\u53f3\u54fc\u54fc':'','\u54c8\u6b20':'','\u9119\u89c6':'','\u59d4\u5c48':'','\u5feb\u54ed\u4e86':'','\u9634\u9669':'','\u4eb2\u4eb2':'','\u5413':'','\u53ef\u601c':'','\u83dc\u5200':'','\u897f\u74dc':'','\u5564\u9152':'','\u7bee\u7403':'','\u4e52\u4e53':'','\u5496\u5561':'','\u996d':'','\u732a\u5934':'','\u73ab\u7470':'','\u51cb\u8c22':'','\u793a\u7231':'','\u7231\u5fc3':'','\u5fc3\u788e':'','\u86cb\u7cd5':'','\u95ea\u7535':'','\u70b8\u5f39':'','\u5200':'','\u8db3\u7403':'','\u74e2\u866b':'','\u4fbf\u4fbf':'','\u6708\u4eae':'','\u592a\u9633':'','\u793c\u7269':'','\u62e5\u62b1':'','\u5f3a':'','\u5f31':'','\u63e1\u624b':'','\u80dc\u5229':'','\u62b1\u62f3':'','\u52fe\u5f15':'','\u62f3\u5934':'','\u5dee\u52b2':'','\u7231\u4f60':'','NO':'','OK':'','\u7231\u60c5':'','\u98de\u543b':'','\u8df3\u8df3':'','\u53d1\u6296':'','\u6004\u706b':'','\u8f6c\u5708':'','\u78d5\u5934':'','\u56de\u5934':'','\u8df3\u7ef3':'','\u6325\u624b':''},'ulClass':'expreConNew','liClass':'bg','perPage':20,'delBtn':true,'minPx':'36','minYPx':'32'};smileyObj={init:function(reInit){if(!reInit&&window.expreInit==true){return;}window.expreInit=true;window.expreConTab=0;var enabledSmiley=window.enabledSmiley||'';var siteSmiley=enabledSmiley.split('|');var smileyLen=siteSmiley.length;if(enabledSmiley===''||smileyLen<1){siteSmiley=[1];}var cate=[],emo=[],minPx=[],minYPx=[];for(var i=0;i<siteSmiley.length;++i){var key='s'+siteSmiley[i];if(typeof smiley[key]=='undefined'){continue;}minPx.push(smiley[key]['minPx']);minYPx.push(smiley[key]['minYPx']);cate.push(smiley[key]['title']);emo.push(smiley[key]);}var html=template.render('tmpl_expreBox',{'cate':cate,'emo':emo});if($(".tipLayer").size()>0){$(".tipLayer").append(html);$('.expreCon li').css('background-position','center center');}else if($("#replyForm").size()>0){html="<div class=\"tipLayer mt10\" style=\"display:none\">"+html+"</div>";$("#replyForm").append(html);$('.expreCon li').css('background-size','256px auto');var minPxLen=minPx.length;for(var i=0;i<minPxLen;++i){$('#exp_emo'+i+' li a').css({'margin':'0',width:minPx[i]+'px',height:minYPx[i]+'px'});}$('.expreCon li').height('97');$('.expreCon li').width('256');$('.expreBox').width('256');$('.expreCon li').css('background-position','center center');}else{return;}$('.expreList .expressionTab a').on('click',function(){var obj=$(this);$('.expreList .expressionTab a').removeClass('on');obj.addClass('on');$('.expreList .expreBox ul').hide();$('#exp_'+this.id).show();$('.pNumCon').hide();$('#exp_'+this.id+'_page').show();});if(!smileyObj.isInit){new libScroll.initScroll({ulSelector:'.expreBox ul',isFlip:true,cSelector:'body',pageOnClass:'pNumOn'});new libScroll.initScroll({ulSelector:'.expreList .expressionTab',cSelector:'body',childTag:'a'});smileyObj.isInit=true;}libScroll.tabIndex=0;var expreBox=$(".expreList .expreBox ul");expreBox.on('click',function(e){return false;});$.DIC.touchState('.expreList .expreCon li a','on');$(".expreList .expreCon li a").each(function(i){$(this).on("click",function(){var title=$(this).attr("title");if($("#content")){var content=$("#content").val();if(!title){if(content&&content.lastIndexOf(']')==content.length-1){var LeftIndex=content.lastIndexOf('[');content=content.substring(0,LeftIndex);}else{content=content.substring(0,content.length-1);}}else{content=content+"["+title+"]";}$("#content").val(content);}});});},show:function(){$('.expreSelect').addClass('epOn');$('.photoSelect').removeClass('epOn');$('.photoList').hide();$('.expreList').show();$('.tagBox').hide();$('.locationCon').hide();if($('#replyForm').size()>0){$('.tipLayer').show();}},hide:function(){if($('#replyForm').size()>0){$('.tipLayer').hide();}$('.expreSelect').removeClass('epOn');$('.photoSelect').addClass('epOn');$('.expreList').hide();$('.photoList').show();$('.tagBox').show();$('.locationCon').show();},toggle:function(){if($('.expreList').css('display')=='none'){smileyObj.show();}else{smileyObj.hide();}},isInit:false}