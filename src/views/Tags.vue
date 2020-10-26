<template>
  <div class="tags">
    <input type="text" @keyup.enter="add" v-model.trim="newTagValue" class="tags__input">
    <tooltip-comp> * press enter to add a new tag</tooltip-comp>
    <ul class="tags__list list">
      <li v-for="tag in allTags" :key="tag.id" class="list__item item">
        <span>{{ tag.title }}</span>
        <p class="item__controls">
          <btn-comp @click.native="remove(tag.id)" class="item__btn" >Delete</btn-comp>
          <router-link :to="{name: 'tag', params: { id: tag.id }}">
            <btn-comp class="item__btn" />
          </router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import BtnComp from "@/components/BtnComp";
import TooltipComp from "@/components/TooltipComp";
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    BtnComp,
    TooltipComp,
  },
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

<style lang="scss">
  .tags {
    &__input {
      border: 1px solid #C0C0C0;
      background: transparent;
      padding: 5px 10px;
    }
    &__list {
      margin-top: 15px;
      max-width: 600px;
      .list__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #C0C0C0;
        .item__btn:first-of-type{
          margin-right: 10px;
        }
      }
    }
  }
</style>