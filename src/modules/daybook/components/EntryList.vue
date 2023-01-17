<template>
  <div class="entrey-list-container">
        <div class="px-2 pt-2">
            <input
             type="text"
             class="form-control"
             placeholder="Buscar entrada"
             />
        </div>

        <div class="entrey-scrollarea">
            <Entry
            v-for="item in 100"
            :key = "item"
             /> <!-- cada v-for necesita de un key  -->

            
        </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
 components:{
     Entry: defineAsyncComponent(()=> import('./Entry.vue'))
 }
}
</script>

 <style lang="scss" scoped> // como estamos trabajando en scss se define asi el esoped solo afecta la hoja 
.entrey-list-container{
 border-right: 1px  solid #2c3e50;
 height: calc(100vh - 56px);
}
.entrey-scrollarea{
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>