import AppStateTypes from './modules/app/types'

export default interface RootStateTypes {
  text: string
  commit: any
}

export interface AllStateTypes extends RootStateTypes {
  appFactoryModule: AppStateTypes
}
