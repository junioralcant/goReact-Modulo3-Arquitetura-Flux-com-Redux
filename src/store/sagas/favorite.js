import { call, put } from "redux-saga/effects"; // fuciona assim como o await

import api from "../../services/api";

import { addFavoriteSuccess, addFavoriteFailure } from "../actions/favorites";

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url
    };

    yield put(addFavoriteSuccess(repositoryData));
  } catch (error) {
    yield put(addFavoriteFailure("Erro ao adicionar o repositório"));
  }
}
