import {
  UPDATE_NAPA,
  UPDATE_NAPA_MAIN,
  ABORT_ALL,
} from '../../constants/ActionTypes'
import { RootActionType } from '../../types/actionObj'
import { filter, mergeMap, takeUntil } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { isOfType } from 'typesafe-actions'
import { ofType, StateObservable } from 'redux-observable'
import { RootStateType } from '../../types/state'
import { lsSet } from '../../utils/localstorage'
import { defaultLang } from '../../i18n/langs'

export default (
  action$: Observable<RootActionType>,
  state$: StateObservable<RootStateType>,
) =>
  action$.pipe(
    filter(isOfType(UPDATE_NAPA)),
    mergeMap((action) => {
      const { napa } = action
      lsSet((draft) => {
        if (draft.lang === undefined) {
          draft.lang = { code: defaultLang, napa }
        } else {
          draft.lang.napa = napa
        }
      })
      return of<RootActionType>({
        type: UPDATE_NAPA_MAIN,
        napa,
      }).pipe(takeUntil(action$.pipe(ofType(ABORT_ALL))))
    }),
  )
