import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'adomrepairshop',

  projectId: 'q49ap6qc',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  cors: {
    origins: [
      'http://localhost:3000', // keep for local development
      'https://adomrepairshop.netlify.app/', // your deployed site
    ],
  },
})
