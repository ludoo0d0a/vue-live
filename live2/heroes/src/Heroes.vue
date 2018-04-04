<template>
  <div>
        <section>
          <img class="logo" src="./assets/heroes.png"/>
        </section>
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
  background-color: rgb(38, 38, 165);
}

.hulk {
  background-color: green;
}

.spongebob {
  background-color: yellow;
}

.ironman {
  background-color: red;
}

ul, li{
  list-style: none
}
li .hero{
  padding: 5px
}
.logo{
  max-height: 200px;
}
</style>