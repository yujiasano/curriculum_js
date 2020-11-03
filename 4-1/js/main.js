var app = new Vue({
  el: '#app',
  data: {
      list: [],
      addText: '',
      keyword: ''
  },
  //watchでlistの変更を監視
  watch: {
      list: {
          handler: function() {
              //localStorageにデータを保存
              localStorage.setItem("list", JSON.stringify(this.list));
          },
          deep: true
      }
  },
  //マウントされた時にlocalStorageからデータを取得
  mounted: function() {
      this.list = JSON.parse(localStorage.getItem("list")) || [];
  },
  methods: {
      addToDo: function() {
          if (this.addText !== '') {
              this.list.push({
                  text: this.addText, 
                  isChecked: false,
              });
          }
          this.addText = '';
      },
      deleteBtn: function() {
          this.list = this.list.filter(function(todo) {
              return !todo.isChecked;
          });
      }
  },
  computed: {
    remaining: function() {
      var count = 0;
      var lists = this.list;
      var length = lists.length;
      for(var i = 0; i < length; i++) {
        if(!lists[i].isChecked) {
          count++;
        }
      }
      return count;
    },
    searchList: function(){
     

      var searchls = [];
     
        var ls = this.list;
        for(var i=0; i < ls.length; i++){

          if(ls[i].text.indexOf(this.keyword) !== -1 ){
            searchls.push(ls[i]);
          
        }
        }

      return searchls;
    }
  }
});