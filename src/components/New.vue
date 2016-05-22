<template>
  <div class="hello">

  </div>
  <div id="page">
    <section class='markdown-body topic-content' v-html="topic">
    </section>
  </div>
  <div class='no-data' v-if="noData">
    该话题不存在!
  </div>
</template>
<script>
  require('../lib/jquery.js');
  export default {
    ready: function () {
//        this.$http.jsonp('http://www.tengxungame.pub:8080/service/getactivitycontent?mid=1a66011cce300edb887d8a707482b707').then(function (response) {
//          this.$set('topic', response)
//        }, function (response) {
//          alert(response)
//        });
    },
    compiled: function (transition) {
      let _self = this;
      console.log('teste');
      var paramA = this.$route.path;
      var paramB=paramA.substring(1,paramA.length);
      $.ajaxSettings.crossDomain = true;
      $.ajax({
        type: 'GET',
        url: 'http://www.tengxungame.pub:8080/service/getactivitycontent'+paramB,
        data: {'name': '11'},
        dataType: 'jsonp',
        success: function (res) {
          _self.topic = res.content;
        },
        error: function (res) {
          var error = res;
          return false;
        }
      })
    },
    data (){
    return {
      topic: '',
      mid: '1a66011cce300edb887d8a707482b707',
      datas: {'name': 'lcc'},
      status: {},
      request: {},
      noData: false
    }
  },
  route:{
    data (transition){
      let _self = this;
      _self.mid=transition.to.mid;
      alert(_self.mid)
      //加载主题数据
      $.get('https://cnodejs.org/api/v1/topic/'+_self.topicId,function(d){
        if(d && d.data){
          _self.topic = d.data;
        }
        else{
          _self.noData = true;
        }
      });
    }
  }
}
</script>
