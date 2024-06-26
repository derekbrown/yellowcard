import React, { Fragment, memo, useContext } from 'react'
import cx from 'classnames'
import { useAppSelector, useAppDispatch } from '../../utils/useAppDispatch'
import Window from './Window'

import { langs, langInfo } from '../../i18n/langs'
import { AvailableLangType } from '../../i18n/types'
import {
  SCREEN_LANG_PREF,
  UPDATE_NAPA,
  UPDATE_LANG,
} from '../../constants/ActionTypes'
import { I18nContext } from '../../i18n/I18nContext'
import TooltipAll from '../special/TooltipAll'

const LangPref = () => {
  const lang: AvailableLangType = useAppSelector((state) => state.lang.code)
  const napa: boolean = useAppSelector((state) => state.lang.napa)
  const _ = useContext(I18nContext)
  const dispatch = useAppDispatch()

  const napaLabel = (() => {
    const er = _.i18n('NAPA')
    if (er !== undefined) {
      const arr = er.split('%s')
      return [
        <Fragment key={0}>{arr[0]}</Fragment>,
        <span key={1} className={cx('text-2xl p-0', 'napa')}>
          Napa
        </span>,
        <Fragment key={2}>{arr[1]}</Fragment>,
      ]
    }
    return null
  })()

  return (
    <Window screenActionType={SCREEN_LANG_PREF}>
      <div className="my-5 flex flex-wrap justify-center">
        {[...langs]
          .sort((codeA, codeB) => codeA.localeCompare(codeB))
          .map((code) => (
            <TooltipAll key={code} title={langInfo[code].en}>
              <button
                key={code}
                lang={code}
                className={cx('m-2', { active: code === lang })}
                onClick={() => {
                  dispatch({
                    type: UPDATE_LANG,
                    lang: code,
                  })
                }}
              >
                {langInfo[code].local}
              </button>
            </TooltipAll>
          ))}
      </div>
      <label className="flex w-full justify-center">
        <input
          type="checkbox"
          checked={langInfo[lang].isLatinScript ? napa : false}
          disabled={!langInfo[lang].isLatinScript}
          onChange={(e) => {
            dispatch({
              type: UPDATE_NAPA,
              napa: e.target.checked,
            })
          }}
        />
        <span>{napaLabel}</span>
      </label>
    </Window>
  )
}

export default memo(LangPref)
