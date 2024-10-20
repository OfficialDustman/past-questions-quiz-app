import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '04otdx22',
    dataset: 'production'
  },
  studioHost: 'past-question-quiz-app',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
