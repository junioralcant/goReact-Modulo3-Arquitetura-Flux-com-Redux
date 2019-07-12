import { all, takeLatest } from "redux-saga/effects";

import { addFavorite } from "./favorite";

export default function* rootSaga() {
  yield all([takeLatest("ADD_FAVORITE_REQUEST", addFavorite)]);
}

//function* é uma fuction genaration para fazer quisições assíncronas, assim como async await só que mais poderosa
// takeLatest escuta apenas uma req por vez, mesmo que o usuário clique 5 vezes, em quando a primeira não for carregada as outras seram ignoradas. Mas existe a  takeEvent que executa as 5 uma a trás da outra
