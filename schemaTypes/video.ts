import {defineType, defineField} from 'sanity'

export const video = defineType({
  type: 'object',
  name: 'video',
  title: 'video input',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'string',
      name: 'videoUrl',
    }),
    defineField({
      type: 'file',
      name: 'videoFile',
    }),
  ],
})
