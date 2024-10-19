import { defineType, defineField, defineArrayMember } from 'sanity'

export const question = defineType({
  type: "object",
  name: "question",
  fields: [
    defineField({
      type: "string",
      name: "questionText",
    }),
    defineField({
      type: "array",
      name: "options",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
    defineField({
      type: "string",
      name: "answer",
    }),
  ],
});

