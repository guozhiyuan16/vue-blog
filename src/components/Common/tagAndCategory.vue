<template>
  <span>
    <template v-for="item in selectOption">
      <a-checkable-tag
        :key="item"
        :checked="selected.indexOf(item) > -1"
        @change="(checked) => handleChange(item, checked)"
      >
        {{ item }}
      </a-checkable-tag>
    </template>
    <a-input
      v-if="inputVisible"
      ref="input"
      type="text"
      size="small"
      :style="{ width: '78px' }"
      :value="inputValue"
      @change="handleInputChange"
      @blur="handleInputConfirm"
      @keyup.enter="handleInputConfirm"
    />
    <a-tag
      v-else
      style="background: #fff; borderstyle: dashed"
      @click="showInput"
    >
      <a-icon type="plus" /> New {{ type }}
    </a-tag>
  </span>
</template>
<script>
export default {
  data() {
    return {
      selectOption:this.resource, // 所有选项
      selected: [], // 选中项
      inputVisible: false, // 输入框是否展示
      inputValue: "", // 输入框文字
    };
  },
  props:['type','resource'],
  
  methods: {
    handleChange(sel, checked) {
      const { selected } = this;
      const nextSelected = checked
        ? [...selected, sel]
        : selected.filter((t) => t !== sel);
      console.log("You are interested in: ", nextSelected);
      this.selected = nextSelected;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let selectOption = this.selectOption;
      let selected = this.selected;
      if (inputValue && selectOption.indexOf(inputValue) === -1) {
        selectOption = [...selectOption, inputValue];
        selected = [...selected,inputValue]
      }
      Object.assign(this, {
        selectOption,
        selected,
        inputVisible: false,
        inputValue: "",
      });
    },
  },
  watch:{
      selected(val){
        this.$emit('console_data',this.type,val)
      }
  }
};
</script>
