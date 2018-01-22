<template lang="pug">
  div.hero(:class="herocls")
    span.logo
    p My name is {{heroname}}
</template>

<script>
export default {
    data() {
        return {
            heroname: this.name
        }
    },
    props: [ 'name' ],
    computed: {
        herocls: function(){
            return this.name.replace(/\W/g, '_');
        }
    }
}
</script>

