<template>
  <ul class="form-list">
      <li>
        <span>标题</span>
        <span><a-input placeholder="请输入文章标题"/></span>
      </li>
      <li>
        <span>标签</span>
        <span>
          <template v-for="tag in tags">
            <a-checkable-tag
              :key="tag"
              :checked="selectedTags.indexOf(tag) > -1"
              @change="checked => handleChange(tag, checked)"
            >
              {{ tag }}
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
          <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">
            <a-icon type="plus" /> New Tag
          </a-tag>
        </span>
      </li>
      <li>
        <span>分类</span>
        <span>
          
        </span>
      </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      tags: ['Movies', 'Books', 'Music', 'Sports'],
      selectedTags: [],

      categories:['Node','React','Vue'],
      selectedcategories:[],

      inputVisible: false,
      inputValue: '',
    };
  },
  methods: {
    handleChange(tag, checked) {
      const { selectedTags } = this;
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag);
      console.log('You are interested in: ', nextSelectedTags);
      this.selectedTags = nextSelectedTags;
    },

    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      this.tags = tags;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
    },
  },
};
</script>