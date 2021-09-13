var app = new Vue({
    el: '#app',
    data: {
    message: '안녕하세요 Vue!'
    }
});
    
    var app2 = new Vue({
        el: '#app-2',
        data: {
        message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
        }
    });


    //app3.seen = false를 입력하면, 메시지가 사라지는 것을 볼 수 있습니다.
    var app3 = new Vue({
        el: '#app-3',
        data: {
        seen: true
        }
    });

    //콘솔에서, app4.todos.push({ text: 'New item' })을 입력하십시오. 
    // 목록에 새 항목이 동적으로 추가 된것을 볼 수 있습니다.
    var app4 = new Vue({
        el: '#app-4',
        data: {
        todos: [
            { text: 'JavaScript 배우기' },
            { text: 'Vue 배우기' },
            { text: '무언가 멋진 것을 만들기' }
        ]
        }
    });


    var app5 = new Vue({
        el: '#app-5',
        data: {
        message: '안녕하세요! Vue.js!'
        },
        methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
        }
    });

    var app6 = new Vue({
        el: '#app-6',
        data: {
        message: '안녕하세요 Vue!'
        }
    });


    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    })
    
    var app7 = new Vue({
        el: '#app-7',
        data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
        }
    });


    new Vue({
        data: {
          a: 1
        },
        created: function () {
          // `this` 는 vm 인스턴스를 가리킵니다.
          console.log('a is: ' + this.a)
        }
      })
      // => "a is: 1"


      // 명령형이고 또 코드를 반복
    //   var vm = new Vue({
    //     el: '#demo',
    //     data: {
    //       firstName: 'Foo',
    //       lastName: 'Bar',
    //       fullName: 'Foo Bar'
    //     },
    //     watch: {
    //       firstName: function (val) {
    //         this.fullName = val + ' ' + this.lastName
    //       },
    //       lastName: function (val) {
    //         this.fullName = this.firstName + ' ' + val
    //       }
    //     }
    //   });


      var vm = new Vue({
        el: '#demo',
        data: {
          firstName: 'Foo',
          lastName: 'Bar'
        },
        computed: {
          fullName: function () {
            return this.firstName + ' ' + this.lastName
          }
        }
      })