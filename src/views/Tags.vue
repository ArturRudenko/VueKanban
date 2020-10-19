<template>
  <div class="tags">
    <div class="header">
      <h1 class="header__title">{{ viewTitle }}</h1>
      <router-link :to="{name: linkData}">
        <a href="#" class="header__link">to {{linkData}}</a>
      </router-link>
    </div>
    <input type="text" @keyup.enter="addTag" v-model.trim="newTagValue"> <span class="add-tooltip">* press enter to add a new tag</span>
    <ul class="tags__list">
      <li v-for="tag in allTags" :key="tag.id">
        <p v-if="tag.isEditing">
          <input type="text" @keyup.enter="editTag(tag.id)" v-model.trim="editValue">
          <span class="add-tooltip"> * press enter to confirm</span></p>
        <span v-else>{{ tag.title }}</span>
        <p class="controls">
          <button @click="remove(tag.id)">Delete</button>
          <router-link :to="{name: 'tag'}">
            <button @click="changeEditing(tag.id,tag.title)">Edit</button>
          </router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: function () {
    return {
      viewTitle: 'Tags',
      linkData: 'kanban',
      newTagValue: '',
      editValue: '',
    }
  },
  computed: {
    ...mapGetters('tags', [
        'allTags'
    ]),
  },
  methods: {
    ...mapActions('tags', [
        'removeTag',
        'addTag'
    ]),
    add: function () {
      if (this.newTagValue) {
        this.addTag()
      }
      this.newTagValue = '';
    },
    remove: function (tagId) {
      this.removeTag(tagId)
    },
    changeEditing: function (tagId, tagText) {
      this.editValue = tagText;
      this.tags = this.tags.map(tag => {
        if (tag.id === tagId) {
          tag.isEditing = !tag.isEditing;
        }
        return tag;
      });
    },
    editTag: function (tagId) {
      this.tags = this.tags.map(tag => {
        if (tag.id === tagId && this.editValue) {
          tag.title = this.editValue
          tag.isEditing = !tag.isEditing;
        }
        return tag;
      });
    },
  },
}
</script>