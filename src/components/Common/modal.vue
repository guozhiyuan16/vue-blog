<template>
    <div class="app-model">
        <a-modal
            v-model="visible"
            :title="modalTitle"
            :destoryOnClose= true
            :fotter= null
        >
            <a-form-model
                :model="form"
                :label-col="labelCol" 
                :wrapper-col="wrapperCol"
                id="form"
                class="baseModel"
                ref="ruleForm"
                :rules="rules"
            >
                <template v-for="(item,index) in options" >
                    <a-from-model-item :label="item.title" :key="index">
                        <a-input 
                            v-model="form[item.name]"
                            :placeholder="item.placeholder || '请输入' "
                        />
                    </a-from-model-item>
                </template>
            </a-form-model>
        </a-modal>
    </div>
</template>
<script>
export default {
    props:['modalTitle','rules'],
    data(){
        return {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            visible: false,
            form:{},
            options:''
        }
    },
    methods:{
        showModal(options){
            this.visible = true;
            console.log(options);
            this.options = options;
        }
    }
}
</script>