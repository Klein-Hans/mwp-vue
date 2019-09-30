<template>
  <div class="row md-layout-item md-size-100">
    <md-field>
      <label>Add Locations Image(s)</label>
      <md-file 
        accept="image/*" 
        @change="onLocationsFileSelected" 
        multiple/>
    </md-field>
    <div 
      v-if="images.length > 0"
      class="thumbnails">
      <div 
        v-for="(item, index) in images.location_images" 
        :key="index"
        class="md-elevation-3 row mb-3 p-2">
        <img 
          v-if="item.id != 0"
          class="thumbnail md-elevation-10" 
          :src="item.image">
        <img 
          v-else
          class="thumbnail md-elevation-10" 
          :src="'data:image/jpeg;base64,'+item.image">
        <p class="d-inline col-lg-4 pl-2 my-3">{{item.name | truncate(10, '...')}}</p>
        <md-button 
          class="md-danger md-simple col-lg-2 my-2" 
          @click="deleteLocationsImage(index)">
          Remove <md-icon>delete</md-icon>
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: [],
    image: {}
  }
}
</script>

<style>

</style>