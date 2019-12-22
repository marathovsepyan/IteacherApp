<template>
    <v-region @values="regionChange" class="form-control"></v-region>
</template>

<script>
import vRegion from 'v-region';

export default {
    name: 'RegionSelect',
    components: {
        vRegion,
    },
    methods: {
        regionChange(data){
            console.log(data);
        }
    }
};
</script>