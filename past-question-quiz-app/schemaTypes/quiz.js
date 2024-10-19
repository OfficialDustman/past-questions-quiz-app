import { defineType, defineField, defineArrayMember } from 'sanity'

export const quiz = defineType({
  type: "document",
  name: "quiz",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "title" },
    }),
    defineField({
      type: "image",
      name: "icon",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "questions",
      of: [
        defineArrayMember({
          type: "question",
        }),
      ],
    }),
  ],
});

