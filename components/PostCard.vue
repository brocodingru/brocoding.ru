<template>
  <div class="post">
    <h1 v-if="titleType === 'h1'">Что я должен изучить к концу 2022</h1>
    <nuxt-link v-else class="post__title" to="/post/fdsafas"
      >Что я должен изучить к концу 2022</nuxt-link
    >
    <div class="post__body">
      <p>
        С тех пор мне понравился этот тип японской анимации, который значительно
        отличался своей уникальностью от остальных анимационных
        фильмов/сериалов, которые я смотрел ранее.
      </p>
      <p>
        С тех пор мне понравился этот тип японской анимации, который значительно
        отличался своей уникальностью от остальных анимационных
        фильмов/сериалов, которые я смотрел ранее.
      </p>
      <p>
        С тех пор мне понравился этот тип японской анимации, который значительно
        отличался своей уникальностью от остальных анимационных
        фильмов/сериалов, которые я смотрел ранее.
      </p>
      <p>
        С тех пор мне понравился этот тип японской анимации, который значительно
        отличался своей уникальностью от остальных анимационных
        фильмов/сериалов, которые я смотрел ранее.
      </p>
      <p>
        С тех пор мне понравился этот тип японской анимации, который значительно
        отличался своей уникальностью от остальных анимационных
        фильмов/сериалов, которые я смотрел ранее.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleType: {
      type: String,
      default: "link",
    },
  },
};
</script>
