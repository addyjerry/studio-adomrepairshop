import {defineField, defineType} from 'sanity'

export const tvproduct = defineType({
  name: 'tvproduct',
  title: 'TV Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Product image',
      type: 'image',
    }),
  ],
})
