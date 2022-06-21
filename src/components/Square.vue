<script setup>


import { ref } from 'vue'



defineProps({
  index: ref(0),
  color: ref('black'),
  style: ref({
    backgroundColor: 'black',
  }),
})


</script>





<template>
    <div class="square" :style="{backgroundColor: this.color}">
     
    </div>
    <br>

</template>

<style scoped>
.square {
      line-height: 34px;
      width: 100px;
      height: 100px;
      padding: 0;
      text-align: center;
      border: 1px solid #000;    
    

}

</style>

<script>
    export default {
        name: 'Square',
        props: {
            index: {
                type: Number,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
            style: {
                type: Object,
                required: true,
            },
        },
    }
</script>