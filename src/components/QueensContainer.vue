<template>
    <div class= "queen-container">
       
        <img src="../assets/queen-removebg-preview.png" v-for="(i , index) in 8" :key="index">
    </div>
</template>
<style>
    
 img{
    height: 50px;
    margin: 5px;
 }
   
</style>