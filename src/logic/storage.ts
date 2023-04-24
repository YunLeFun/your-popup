import { useStorageLocal } from '~/composables/useStorageLocal'

export const appBcId = useStorageLocal('webext:app-bc-id', 'custom')
