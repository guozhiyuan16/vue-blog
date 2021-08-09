<template>
    <div class="app-model">
        <a-model
            v-model="visible"
            :title="modelTitle"
            :destoryOnClose=true
        >
            <a-form-model
                id="form"
                class="baseModel"
                ref="ruleForm"
                :model="form"
                :rules="rules"
                
            >
                
            </a-form-model>
        </a-model>
    </div>
</template>
<script>
export default {
    props:['modalTitle','rules'],
    data(){
        return {
            visible: false,
            form:{},
        }
    }
}
</script>