<template>
  <div>
        <ul>
            <li v-for="hero in heroes" :key="hero">
              <super-hero :name="hero"/>
            </li>
        </ul >
    </div>
</template>

<script>

import SuperHero from './SuperHero'

export default {
  data() {
    return {
            heroes:[
              'superman',
              'sponge bob', 
              'hulk' ,
              'iron man'
          ]
        };
  },
  components: {
    SuperHero
  }
}

</script>

<style>
.superman{
  background-color: red;
}

.hulk {
  background-color: green;
}

.sponge_bob {
  background-color: yellow;
}
</style>