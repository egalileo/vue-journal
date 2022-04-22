<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">8</span>
        <span class="mx-1 fs-3 ">Abril</span>
        <span class="mx-2 fs-4 fw-bold">2022, Viernes</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>

        <button class="btn btn-secondary text-white">
            Subir Foto
            <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>

    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Que sucedio hoy?"  
        ></textarea>
    </div>
  <Fab
    icon="fa-floppy-disk"/>
  <img class="img-thumbnail"
        src="https://hipertextual.com/wp-content/uploads/2022/03/zelda-breath-of-the-wild-2.jpg" alt="imagen"/>
</template>

<script>
import { defineAsyncComponent } from "vue"

export default {
    components: {
        Fab: defineAsyncComponent(()=> import('../components/FaBottom.vue'))

    }
}
</script>

<style lang="scss" scoped>

textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>