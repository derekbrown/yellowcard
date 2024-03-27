import produce from 'immer'
import {
  UPDATE_LANG_MAIN,
  UPDATE_NAPA_MAIN,
} from '../constants/ActionTypes'
import { defaultNapa } from '../constants/defaultSettings'
import { defaultLang } from '../i18n/langs'
import { RootActionType } from '../types/actionObj'
import { LangStateType } from '../types/state'

const defaultLangState: LangStateType = {
  code: defaultLang,
  napa: defaultNapa,
}

export default produce((draft: LangStateType, action: RootActionType) => {
  switch (action.type) {
    case UPDATE_LANG_MAIN: {
      draft.code = action.lang
      break
    }
    case UPDATE_NAPA_MAIN: {
      draft.napa = action.napa
      break
    }
  }
}, defaultLangState)
