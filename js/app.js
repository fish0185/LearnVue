/**
 * Created by Gary.Yu on 13/11/2017.
 */

var data = {
    links: ['A', 'B', 'C']
};

Vue.component('site-menu',{
    template: '#nav',
    data: function () {
        return data;
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        name: 'gary'
    }
});

