const heroes = [
    'iron man',
    'hulk',
    'sponge bob',
    'superman'
];

const SuperHero = Vue.component("superhero", {
    template: '<li :class="cls">{{hero}}</li>',
    props: ['hero'],
    computed: {
        cls: function(){
            return this.hero.replace(/\W/g, '');
        }
    }
})

Vue.component("heroes-list", {
    template: '#heroes-list-tpl',
    data: function(){
        return {heroes}
    }
    //components: {SuperHero}
})

new Vue({
    el: '#app',
    data: function(){
        return {
            heroes,
            msg: 'Hi Sfeiriens!!'
        }
    },
    template: [
        '<div>',
            '<section>{{msg}}</section>',
            '<main>',
                '<heroes-list/>',
            '</main>',
        '</div>'
    ].join('')
    // components: []
})