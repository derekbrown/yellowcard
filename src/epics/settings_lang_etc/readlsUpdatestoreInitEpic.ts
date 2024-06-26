import {
  READLS_UPDATESTORE_INIT,
  UPDATE_SETTINGS_MAIN,
  ABORT_ALL,
  INIT,
  UPDATE_NAPA_MAIN,
  UPDATE_LANG_MAIN,
  UPDATE_VOLUME_MAIN,
  UPDATE_STEREO_MAIN,
  UPDATE_PIXELATION_MAIN,
  UPDATE_VISUALVALUES_MAIN,
  UPDATE_AILEVEL_MAIN,
} from '../../constants/ActionTypes'
import { RootActionType } from '../../types/actionObj'
import { filter, mergeMap, takeUntil } from 'rxjs/operators'
import { of, concat, EMPTY, Observable } from 'rxjs'
import { isOfType } from 'typesafe-actions'
import { ofType, StateObservable } from 'redux-observable'
import { RootStateType } from '../../types/state'
import { lsGet, lsVersion } from '../../utils/localstorage'
import { sample } from '../../utils/random'
import {
  defaultOpponentNameList,
  defaultPlayerNameList,
} from '../../constants/defaultSettings'

export default (
  action$: Observable<RootActionType>,
  state$: StateObservable<RootStateType>,
) =>
  action$.pipe(
    filter(isOfType(READLS_UPDATESTORE_INIT)),
    mergeMap((action) => {
      lsVersion()
      const lang = lsGet(['lang', 'code'])
      const napa = lsGet(['lang', 'napa'])
      const settings = lsGet(['settings'])
      const volume = lsGet(['sound', 'volume'])
      const stereo = lsGet(['sound', 'stereo'])
      const pixelation = lsGet(['visual', 'pixelation'])
      const visualvalues = lsGet(['visual', 'visualvalues'])
      const aiLevel = lsGet(['ai', 'aiLevel'])
      return concat(
        settings !== null
          ? of<RootActionType>({
              type: UPDATE_SETTINGS_MAIN,
              payload: settings,
            })
          : of<RootActionType>({
              type: UPDATE_SETTINGS_MAIN,
              payload: {
                playerName: sample(defaultPlayerNameList),
                opponentName: sample(defaultOpponentNameList),
              },
            }),
        lang !== null
          ? of<RootActionType>({
              type: UPDATE_LANG_MAIN,
              lang,
            })
          : EMPTY,
        napa !== null
          ? of<RootActionType>({
              type: UPDATE_NAPA_MAIN,
              napa,
            })
          : EMPTY,
        volume !== null
          ? of<RootActionType>({
              type: UPDATE_VOLUME_MAIN,
              volume,
            })
          : EMPTY,
        stereo !== null
          ? of<RootActionType>({
              type: UPDATE_STEREO_MAIN,
              stereo,
            })
          : EMPTY,
        pixelation !== null
          ? of<RootActionType>({
              type: UPDATE_PIXELATION_MAIN,
              pixelation,
            })
          : EMPTY,
        visualvalues !== null
          ? of<RootActionType>({
              type: UPDATE_VISUALVALUES_MAIN,
              payload: visualvalues,
            })
          : EMPTY,
        aiLevel !== null
          ? of<RootActionType>({
              type: UPDATE_AILEVEL_MAIN,
              aiLevel,
            })
          : EMPTY,
        of<RootActionType>({
          type: INIT,
        }),
      ).pipe(takeUntil(action$.pipe(ofType(ABORT_ALL))))
    }),
  )
