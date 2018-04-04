<template lang="pug">
  div.hero(:class="herocls")
    span.logo
        img(:src="heoroimg")
    p My name is {{heroname}}
</template>

<script>
export default {
    data() {
        return {
            heroname: this.name,
        }
    },
    props: [ 'name' ],
    computed: {
        herocls: function(){
            return this.name.replace(/\W/g, '');
        },
        heoroimg: function(){
            return __webpack_public_path__ + this.name.replace(/\W/g, '') + '.png';
        }
    }
}
</script>

<style>
.hero img{
    max-height: 150px;
}
</style>