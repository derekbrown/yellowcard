import { FormFieldsAllPartialType, FormFieldsType } from '../types/formFields'
import {
  PersonStatusType,
  SettingsStateAllPartialType,
  SettingsStateType,
  SettingsType,
  WinSettingsType,
} from '../types/state'

export const getStartState = (
  state: SettingsType | SettingsStateType,
): PersonStatusType => {
  const {
    tower,
    wall,
    stadiumProd,
    capSpaceProd,
    recruitProd,
    stadium,
    capSpace,
    recruits,
  } = state
  return {
    tower,
    wall,
    stadiumProd,
    capSpaceProd,
    recruitProd,
    stadium,
    capSpace,
    recruits,
  }
}

export const getWinState = (
  state: SettingsType | SettingsStateType,
): WinSettingsType => {
  const { winTower, winResource } = state
  return {
    winTower,
    winResource,
  }
}

export const getAllCondAndOtherSettingsArray = (
  settings: SettingsType | SettingsStateType | Partial<FormFieldsType>,
) => [
  settings.tower,
  settings.wall,
  settings.stadium,
  settings.capSpace,
  settings.recruits,
  settings.stadiumProd,
  settings.capSpaceProd,
  settings.recruitProd,
  settings.winTower,
  settings.winResource,
  settings.cardsInHand,
]

export const allCondAndOtherSettingsEqual = (
  settings1: SettingsStateAllPartialType | FormFieldsAllPartialType,
  settings2: SettingsStateAllPartialType | FormFieldsAllPartialType,
): boolean =>
  settings1.tower === settings2.tower &&
  settings1.wall === settings2.wall &&
  settings1.stadiumProd === settings2.stadiumProd &&
  settings1.capSpaceProd === settings2.capSpaceProd &&
  settings1.recruitProd === settings2.recruitProd &&
  settings1.stadium === settings2.stadium &&
  settings1.capSpace === settings2.capSpace &&
  settings1.recruits === settings2.recruits &&
  settings1.winTower === settings2.winTower &&
  settings1.winResource === settings2.winResource &&
  settings1.cardsInHand === settings2.cardsInHand
