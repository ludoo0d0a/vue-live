const Heroes = Vue.component('heroes-list', {
    template: '<div>List of heroes'+
        '<ul>'+
            '<li v-for="hero in heroes">'+
            '<superhero :name="hero"/>'+
            '</li>'+
        '</ul >'+
    '</div>',
    data: function(){
        return {
            heroes:[
            'superman',
            'sponge bob', 
            'hulk' ,
            'iron man'
        ]
        };
    }
    
});

const SuperHero = Vue.component('superhero', {
    template: '<p><span class="logo" :class="name"></span>My name is {{name}}</p>',
    props: [ 'name' ]
});

new Vue({
    el: '#app',
    template: '<div> '+
        '<heroes-list/> '+
        '<p> and a {{ message }}</p> '+
        '</div>',
    data: function(){
        return {
            message: 'Hi Sfeir!'
        };
    },
    components: {
        Heroes,
        SuperHero
    }
});