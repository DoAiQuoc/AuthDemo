<template>
  <div class="header">
      <div class="title">Header</div>
      <button class="btn-action">login</button>
  </div>
</template>

<script>
export default {
    name: 'comp-header',
    data() {
        return {

        }
    }
}
</script>

<style>
.header {
    height: 60px;
    background-color: #1976d2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.header .title {
     color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
}

.btn-action {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
}

.btn-action:hover {
    cursor: pointer;
    opacity: 0.8;
}

</style>