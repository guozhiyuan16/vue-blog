<template>
    <div class="app-model">
        <a-modal
            v-model="visible"
            :title="modalTitle"
            :destoryOnClose= true
            :footer= null
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
                    <a-form-model-item :label="item.title" :prop="item.name" :key="index">
                        <a-input 
                            v-model="form[item.name]"
                            :placeholder="item.placeholder || '请输入' "
                        />
                    </a-form-model-item>
                </template>
                <template v-if="type=='login'">
                    <a-button type="primary" block @click="onSubmit">login</a-button>
                    <a-button block icon="github" :style="{marginTop:'10px'}">github login</a-button>
                </template>
                <template v-else-if="type=='register'">
                    <a-button type="primary" block @click="onSubmit">register</a-button>
                    <a-button block icon="github" :style="{marginTop:'10px'}">github login</a-button>
                </template>
            </a-form-model>
        </a-modal>
    </div>
</template>
<script>
export default {
    props:['modalTitle','rules','selectOptions','type'],
    data(){
        return {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
            visible: false,
            form:{},
            options:''
        }
    },
    methods:{
        showModal(options){
            this.visible = true;
            this.options = options;
        },
        handleCancel(){
            this.visible = false;
        },
        onSubmit(){
            console.log('submit');
            this.$refs.ruleForm.validate((valid) => {
                console.log(valid);
                if (valid) {
                    this.$emit('console_data',this.form)
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(){
            this.$refs.ruleForm.resetFields();
        }
    }
}
</script>