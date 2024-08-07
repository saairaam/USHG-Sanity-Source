import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {graphiQLTool} from 'sanity-plugin-graphiql'

export default defineConfig({
  name: 'default',
  title: 'USHG',

  projectId: '2oqwgmgg',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    graphiQLTool({
      apiVersion: '2021-10-21',

      // if you want to use a GraphQL api that is
      // not a Sanity GraphQL API, you can hardcode the url.
      url: 'https://www.example.com/api/my/graphql',

      // override the default tool name
      name: 'graphiql',

      // override the default tool title
      title: 'GraphiQL',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
