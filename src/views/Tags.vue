<template>
  <div class="tags">
    <input type="text" @keyup.enter="add" v-model.trim="newTagValue"> <span class="add-tooltip">* press enter to add a new tag</span>
    <ul class="tags__list">
      <li v-for="tag in allTags" :key="tag.id">
        <span>{{ tag.title }}</span>
        <p class="controls">
          <button class="btn-custom" @click="remove(tag.id)">Delete</button>
          <router-link :to="{name: 'tag', params: { id: tag.id }}">
            <button class="btn-custom">Edit</button>
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
        this.addTag(this.newTagValue)
      }
      this.newTagValue = '';
    },
    remove: function (tagId) {
      this.removeTag(tagId)
    },
  },
}
</script>