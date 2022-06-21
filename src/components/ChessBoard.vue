<script setup>
import Square from "./Square.vue";

components: {
  Square
}
</script>

<template>
    <div class="chess-board">
        <div class="chess-board__row" v-for="(i, index) in 8" :key="index">
        <div class="chess-board__cell" v-for="(j, index) in 8" :key="index">
            <Square
                :index="i * 8 + j"
                :color="(i + j) % 2 ? 'black' : 'white'"
            />


        </div>
        </div>
    </div>
</template>
<style scoped>
.chess-board {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 1fr);
}
.chess-board__row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   
}
.chess-board__cell {
    display: flex;
    align-items: center;
    justify-content: center;
   
}

</style>