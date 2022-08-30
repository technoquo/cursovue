<template>
   <div
   class="entry-container mb-3 pointer p-2"
   @click="$router.push({name:'entry', params: {id:10}})"
   >

   <!-- titulo -->
    <div class="entry-title d-flex">
       <span class="text-success fs-5 fw-bold">15</span>
       <span class="mx-1 fs-5">Julio</span>
       <span class="mx-2 fw-light">2021, Jueves</span>
    </div>

    <div class="entry-description">
       Culpa magna excepteur proident incididunt velit minim do esse dolore sint. Magna nostrud officia sunt et dolor voluptate. Velit consequat eiusmod anim officia pariatur fugiat do officia ullamco quis magna. Consectetur adipisicing officia voluptate anim irure reprehenderit deserunt amet culpa quis irure. Commodo dolor officia ipsum velit aute labore amet magna ea cupidatat quis magna consectetur. Lorem ut ea dolor eu.   
    </div>
   
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
     background-color: lighten($color: gray, $amount: 45);
      transition: 0.2s all ease-in;
  }

  .entry-description {
     font-size:12px; 
  }


}


</style>